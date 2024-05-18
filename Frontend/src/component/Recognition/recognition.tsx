import React, { useState } from 'react';
import axios from 'axios';
import './recognition.css';

const FlowerRecognition = () => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [result, setResult] = useState(null);
  const [imagePreview, setImagePreview] = useState(null);

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    setSelectedFile(file);
    setImagePreview(URL.createObjectURL(file));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData();
    formData.append('imagefile', selectedFile);

    try {
      const response = await axios.post('http://127.0.0.1:5000/predict', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      setResult(response.data);
    } catch (error) {
      console.error('There was an error uploading the file!', error);
    }
  };

  return (
    <div className="recognition-container">
      <h1 className="recogh1">Flower Recognition</h1>
      <form className="recogform" onSubmit={handleSubmit}>
        <input type="file" onChange={handleFileChange} className="file-input" />
        <button type="submit" className="btn">Predict</button>
      </form>
      {imagePreview && (
        <div className="image-preview">
          <img src={imagePreview} alt="Selected Flower" />
        </div>
      )}
      {result && (
        <div className="recogresult">
          <h2>Prediction Result</h2>
          <p>Flower Name: {result.flower_name}</p>
          <p>Probability: {result.probability}</p>
        </div>
      )}
    </div>
  );
};

export default FlowerRecognition;
