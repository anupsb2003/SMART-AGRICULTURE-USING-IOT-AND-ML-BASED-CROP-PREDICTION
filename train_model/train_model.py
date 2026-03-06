# Smart Agriculture - Crop Prediction Model
print("Program started")

import pandas as pd
from catboost import CatBoostClassifier
from sklearn.model_selection import train_test_split
from sklearn.metrics import accuracy_score, precision_score, recall_score, f1_score
import joblib

# 1️⃣ Load Dataset
data = pd.read_csv(r"C:\Users\Sujith\Downloads\Crop_recommendation.csv")

print("Dataset Loaded Successfully!")
print(data.head())

# 2️⃣ Define Features and Target
X = data.drop("label", axis=1)
y = data["label"]

# 3️⃣ Train-Test Split
X_train, X_test, y_train, y_test = train_test_split(
    X, y, test_size=0.2, random_state=42
)

print("Training Size:", X_train.shape)
print("Testing Size:", X_test.shape)

# 4️⃣ Create CatBoost Model
model = CatBoostClassifier(
    iterations=300,
    learning_rate=0.1,
    depth=6,
    verbose=0
)

# 5️⃣ Train Model
model.fit(X_train, y_train)

print("Model Training Completed!")

# 6️⃣ Predictions
y_pred = model.predict(X_test)

# 7️⃣ Evaluation Metrics
accuracy = accuracy_score(y_test, y_pred)
precision = precision_score(y_test, y_pred, average='weighted')
recall = recall_score(y_test, y_pred, average='weighted')
f1 = f1_score(y_test, y_pred, average='weighted')

print("\nModel Performance:")
print("Accuracy :", accuracy)
print("Precision:", precision)
print("Recall   :", recall)
print("F1 Score :", f1)

# 8️⃣ Save Model
joblib.dump(model, "crop_model.pkl")
print("\nModel Saved Successfully as crop_model.pkl")
