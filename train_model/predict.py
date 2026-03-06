import joblib
import pandas as pd

# Load saved model
model = joblib.load("crop_model.pkl")

# Example sensor input (replace later with Firebase data)
input_data = {
    "N": 90,
    "P": 40,
    "K": 40,
    "temperature": 25,
    "humidity": 80,
    "ph": 6.5,
    "rainfall": 200
}

# Convert to DataFrame
input_df = pd.DataFrame([input_data])

# Predict
prediction = model.predict(input_df)

print("Predicted Crop:", prediction[0])
