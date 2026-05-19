# SMART AGRICULTURE

A cross-platform smart agriculture project with:
- A React Native mobile app
- A React + Vite web dashboard
- An Express backend AI chatbot service
- A CatBoost-based crop recommendation model training pipeline

## Project Structure

- `backend/` - Node.js backend using Express and OpenAI/OpenRouter for an agriculture AI chatbot.
- `mobile/` - React Native mobile app for Android/iOS with navigation, weather, chatbot, and crop prediction screens.
- `website/` - React + Vite website with informational pages, live data, and chatbot integration.
- `train_model/` - Python training and prediction scripts for a crop recommendation model using CatBoost.

## Getting Started

### Backend

1. Install dependencies:

```bash
cd backend
npm install
```

2. Create a `.env` file with:

```bash
OPENROUTER_API_KEY=your_api_key_here
```

3. Start the server:

```bash
npm start
```

The backend listens on `http://localhost:8000` and exposes:
- `GET /` - health check
- `POST /chat` - chatbot endpoint expecting `{ message: "..." }`

### Mobile App

1. Install dependencies:

```bash
cd mobile
npm install
```

2. Start Metro bundler:

```bash
npm start
```

3. Run on Android:

```bash
npm run android
```

4. Run on iOS:

```bash
npm run ios
```

The mobile app uses React Navigation and chart libraries for weather, crop prediction, and chatbot features.

### Website

1. Install dependencies:

```bash
cd website
npm install
```

2. Start development server:

```bash
npm run dev
```

3. Build for production:

```bash
npm run build
```

### Model Training

The `train_model/` folder contains Python scripts for training and predicting crop recommendations.

1. Install Python dependencies (example):

```bash
pip install pandas catboost scikit-learn joblib
```

2. Update `train_model/train_model.py` to point to your local dataset CSV.
3. Run training:

```bash
cd train_model
python train_model.py
```

4. Use the saved model for prediction:

```bash
python predict.py
```

## Notes

- The backend uses the `OPENROUTER_API_KEY` environment variable to connect with OpenRouter/OpenAI.
- `train_model/train_model.py` currently loads a dataset from a local Windows path; update it to the correct dataset path for your environment.
- `website/README.md` contains the default Vite starter documentation.

## Recommended Workflow

- Run the backend first so the mobile app and website can connect to the chatbot API.
- Use `npm install` inside each subfolder before starting that module.
- Train the crop prediction model before using prediction scripts if the saved model file is not available.

## Contact

This repository is for a Smart Agriculture application combining crop recommendations, weather insights, and AI-powered farmer support.
