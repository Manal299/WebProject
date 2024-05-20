from flask import Flask, request, jsonify
from flask_cors import CORS
from recommender import HybridFlowerRecommender  # Import your recommender class

app = Flask(__name__)
CORS(app)  # Enable CORS

# Load the trained model
recommender = HybridFlowerRecommender.load_model('hybrid_flower_recommender.pkl')

@app.route('/recommend', methods=['POST'])
def recommend():
    data = request.json
    user_id = int(data['user_id'])
    product_id = int(data['product_id'])
    top_n = int(data['top_n'])

    recommendations = recommender.get_hybrid_recommendations(user_id, product_id, top_n)
    return jsonify(recommendations)

if __name__ == '__main__':
    app.run(debug=True)
