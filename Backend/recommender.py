import pandas as pd
import pickle
from surprise import Dataset, Reader, SVD
from sklearn.feature_extraction.text import TfidfVectorizer
from sklearn.metrics.pairwise import linear_kernel

class HybridFlowerRecommender:
    def __init__(self, data_df, flower_df):
        self.data_df = data_df
        self.flower_df = flower_df
        self.content_df = flower_df[['Flower ID', 'Flower Name', 'Flower Family', 'Shapes', 'Colors', 'Season']]
        self.content_df['Content'] = self.content_df.apply(lambda row: ' '.join(row.dropna().astype(str)), axis=1)
        self.tfidf_vectorizer = TfidfVectorizer()
        self.content_matrix = None
        self.content_similarity = None
        self.algo = SVD()
        self.trainset = None
        
    def train(self):
        # Train content-based filtering
        self.content_matrix = self.tfidf_vectorizer.fit_transform(self.content_df['Content'])
        self.content_similarity = linear_kernel(self.content_matrix, self.content_matrix)
        
        # Train collaborative filtering
        reader = Reader(rating_scale=(1, 5))
        data = Dataset.load_from_df(self.data_df[['User ID', 'Flower ID', 'Rating']], reader)
        self.trainset = data.build_full_trainset()
        self.algo.fit(self.trainset)
        
    def get_content_based_recommendations(self, product_id, top_n=10):
        index = self.content_df[self.content_df['Flower ID'] == product_id].index[0]
        similarity_scores = self.content_similarity[index]
        similar_indices = similarity_scores.argsort()[::-1][1:top_n + 1]
        recommendations = self.content_df.loc[similar_indices, 'Flower ID'].values
        return recommendations
    
    def get_collaborative_filtering_recommendations(self, user_id, top_n=10):
        testset = self.trainset.build_anti_testset()
        testset = filter(lambda x: x[0] == user_id, testset)
        predictions = self.algo.test(testset)
        predictions.sort(key=lambda x: x.est, reverse=True)
        recommendations = [prediction.iid for prediction in predictions[:top_n]]
        return recommendations
    
    def get_hybrid_recommendations(self, user_id, product_id, top_n=10, collaborative_weight=0.5):
        collaborative_rec = self.get_collaborative_filtering_recommendations(user_id, top_n)
        content_rec = self.get_content_based_recommendations(product_id, top_n)
        
        hybrid_rec = {}
        for rec in collaborative_rec:
            hybrid_rec[rec] = hybrid_rec.get(rec, 0) + (1 - collaborative_weight)
        for rec in content_rec:
            hybrid_rec[rec] = hybrid_rec.get(rec, 0) + collaborative_weight
        
        hybrid_rec = sorted(hybrid_rec.items(), key=lambda x: x[1], reverse=True)
        hybrid_rec = [rec[0] for rec in hybrid_rec[:top_n]]
        
        return hybrid_rec

    def save_model(self, file_name):
        with open(file_name, 'wb') as file:
            pickle.dump(self, file)

    @staticmethod
    def load_model(file_name):
        with open(file_name, 'rb') as file:
            return pickle.load(file)
