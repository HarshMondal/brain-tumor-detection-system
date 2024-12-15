# **Brain Tumor Detection System**

## **Project Overview**
This project is a brain tumor detection system built using machine learning. The system processes medical images to predict the presence of brain tumors. It features:  
- A **React** front-end for user interaction and authentication.  
- A **Flask** back-end to handle requests and connect to the machine learning model.  
- A Jupyter Notebook containing the machine learning model code for training and inference.  

### **Key Features**  
1. **User Authentication**: Users must register and log in to access the detection system.  
2. **Direct Access**: Currently, the system is a work-in-progress. You can bypass the login system by accessing `/homepage` directly from the URL.  
3. **Image Upload and Detection**: Upload an image to the system, and the model predicts if a brain tumor is present.  
4. **Generate Report**: The system provides an option to generate a report at the end (report generation feature is not fully designed yet).  


## **Project Structure**  
```plaintext
brain-tumor-detection-system/
├── frontend/              # React app for front-end interface
├── backend/               # Flask app for handling requests and processing data
│   ├── app.py             # Main Flask application
│   ├── brainmri.keras           # Contains the trained machine learning model   
|
├── templates/         # HTML templates for rendering pages
├── notebooks/             # Jupyter notebook with ML model code
├── datasets/
├── README.md              # Project documentation
├── requirements.txt       # Dependencies for the Flask back-end
