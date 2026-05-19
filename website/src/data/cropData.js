const cropDatabase = [

  // KARNATAKA DISTRICTS (31 DISTRICTS)

  {
    location: "Bengaluru Urban",
    state: "Karnataka",
    crops: ["Ragi 🌾", "Vegetables 🥬", "Flowers 🌸"],
    soilPH: [6.0, 7.5],
    temperature: [18, 32],
    moisture: [25, 60],
    weather: ["Clouds", "Rain", "Clear"]
  },

  {
    location: "Bengaluru Rural",
    state: "Karnataka",
    crops: ["Ragi 🌾", "Maize 🌽", "Tomato 🍅"],
    soilPH: [6.0, 7.5],
    temperature: [20, 33],
    moisture: [30, 65],
    weather: ["Clouds", "Rain"]
  },

  {
    location: "Mysuru",
    state: "Karnataka",
    crops: ["Sugarcane 🌱", "Rice 🌾", "Banana 🍌"],
    soilPH: [5.5, 7.2],
    temperature: [22, 34],
    moisture: [40, 80],
    weather: ["Rain", "Clouds"]
  },

  {
    location: "Mandya",
    state: "Karnataka",
    crops: ["Sugarcane 🌱", "Rice 🌾", "Coconut 🥥"],
    soilPH: [5.5, 7.5],
    temperature: [22, 35],
    moisture: [45, 85],
    weather: ["Rain", "Clouds"]
  },

  {
    location: "Belagavi",
    state: "Karnataka",
    crops: ["Sugarcane 🌱", "Groundnut 🥜", "Maize 🌽"],
    soilPH: [6.0, 7.8],
    temperature: [20, 34],
    moisture: [35, 70],
    weather: ["Clear", "Clouds"]
  },

  {
    location: "Hubballi",
    state: "Karnataka",
    crops: ["Cotton ☁", "Jowar 🌾", "Groundnut 🥜"],
    soilPH: [6.0, 8.0],
    temperature: [22, 36],
    moisture: [20, 55],
    weather: ["Clear"]
  },

  {
    location: "Dharwad",
    state: "Karnataka",
    crops: ["Cotton ☁", "Jowar 🌾", "Maize 🌽"],
    soilPH: [6.0, 8.0],
    temperature: [22, 35],
    moisture: [25, 60],
    weather: ["Clear", "Clouds"]
  },

  {
    location: "Shivamogga",
    state: "Karnataka",
    crops: ["Rice 🌾", "Arecanut 🌴", "Pepper 🌿"],
    soilPH: [5.0, 6.8],
    temperature: [20, 30],
    moisture: [50, 90],
    weather: ["Rain", "Clouds"]
  },

  {
    location: "Udupi",
    state: "Karnataka",
    crops: ["Coconut 🥥", "Rice 🌾", "Banana 🍌"],
    soilPH: [5.5, 7.0],
    temperature: [24, 34],
    moisture: [55, 95],
    weather: ["Rain", "Clouds"]
  },

  {
    location: "Dakshina Kannada",
    state: "Karnataka",
    crops: ["Coconut 🥥", "Coffee ☕", "Pepper 🌿"],
    soilPH: [5.0, 6.5],
    temperature: [22, 32],
    moisture: [60, 95],
    weather: ["Rain", "Clouds"]
  },

  {
    location: "Kodagu",
    state: "Karnataka",
    crops: ["Coffee ☕", "Pepper 🌿", "Cardamom 🌱"],
    soilPH: [5.0, 6.5],
    temperature: [18, 28],
    moisture: [55, 90],
    weather: ["Rain", "Clouds"]
  },

  {
    location: "Chikkamagaluru",
    state: "Karnataka",
    crops: ["Coffee ☕", "Tea 🍃", "Pepper 🌿"],
    soilPH: [5.0, 6.5],
    temperature: [18, 29],
    moisture: [50, 85],
    weather: ["Rain", "Clouds"]
  },

  {
    location: "Ballari",
    state: "Karnataka",
    crops: ["Cotton ☁", "Sunflower 🌻", "Groundnut 🥜"],
    soilPH: [6.0, 8.0],
    temperature: [25, 40],
    moisture: [15, 45],
    weather: ["Clear"]
  },

  {
    location: "Raichur",
    state: "Karnataka",
    crops: ["Cotton ☁", "Paddy 🌾", "Chilli 🌶"],
    soilPH: [6.0, 8.0],
    temperature: [25, 39],
    moisture: [20, 60],
    weather: ["Clear", "Clouds"]
  },

  {
    location: "Kalaburagi",
    state: "Karnataka",
    crops: ["Jowar 🌾", "Toor Dal 🌱", "Cotton ☁"],
    soilPH: [6.5, 8.2],
    temperature: [24, 39],
    moisture: [15, 50],
    weather: ["Clear"]
  },

  {
    location: "Bidar",
    state: "Karnataka",
    crops: ["Turmeric 🌿", "Sugarcane 🌱", "Rice 🌾"],
    soilPH: [6.0, 7.5],
    temperature: [22, 34],
    moisture: [35, 75],
    weather: ["Rain", "Clouds"]
  },

{
  location: "Hassan",
  state: "Karnataka",
  crops: ["Coffee ☕", "Rice 🌾", "Pepper 🌿"],
  soilPH: [5.5, 7.0],
  temperature: [18, 30],
  moisture: [45, 85],
  weather: ["Rain", "Clouds"]
},

{
  location: "Tumakuru",
  state: "Karnataka",
  crops: ["Ragi 🌾", "Groundnut 🥜", "Coconut 🥥"],
  soilPH: [6.0, 7.8],
  temperature: [20, 35],
  moisture: [25, 60],
  weather: ["Clear", "Clouds"]
},

{
  location: "Kolar",
  state: "Karnataka",
  crops: ["Tomato 🍅", "Ragi 🌾", "Mango 🥭"],
  soilPH: [6.0, 7.5],
  temperature: [22, 35],
  moisture: [20, 55],
  weather: ["Clear"]
},

{
  location: "Chamarajanagar",
  state: "Karnataka",
  crops: ["Sugarcane 🌱", "Turmeric 🌿", "Banana 🍌"],
  soilPH: [5.5, 7.5],
  temperature: [22, 34],
  moisture: [40, 80],
  weather: ["Rain", "Clouds"]
},

{
  location: "Ramanagara",
  state: "Karnataka",
  crops: ["Ragi 🌾", "Coconut 🥥", "Mango 🥭"],
  soilPH: [6.0, 7.5],
  temperature: [20, 34],
  moisture: [25, 60],
  weather: ["Clouds", "Clear"]
},

{
  location: "Davanagere",
  state: "Karnataka",
  crops: ["Cotton ☁", "Maize 🌽", "Paddy 🌾"],
  soilPH: [6.0, 7.8],
  temperature: [22, 36],
  moisture: [25, 65],
  weather: ["Clear", "Clouds"]
},

{
  location: "Gadag",
  state: "Karnataka",
  crops: ["Jowar 🌾", "Groundnut 🥜", "Cotton ☁"],
  soilPH: [6.0, 8.0],
  temperature: [24, 38],
  moisture: [15, 50],
  weather: ["Clear"]
},

{
  location: "Haveri",
  state: "Karnataka",
  crops: ["Cotton ☁", "Maize 🌽", "Chilli 🌶"],
  soilPH: [6.0, 8.0],
  temperature: [23, 36],
  moisture: [20, 55],
  weather: ["Clear", "Clouds"]
},

{
  location: "Koppal",
  state: "Karnataka",
  crops: ["Cotton ☁", "Paddy 🌾", "Sunflower 🌻"],
  soilPH: [6.0, 8.0],
  temperature: [24, 39],
  moisture: [20, 60],
  weather: ["Clear"]
},

{
  location: "Bagalkote",
  state: "Karnataka",
  crops: ["Sugarcane 🌱", "Cotton ☁", "Groundnut 🥜"],
  soilPH: [6.0, 8.0],
  temperature: [24, 38],
  moisture: [20, 60],
  weather: ["Clear"]
},

{
  location: "Vijayapura",
  state: "Karnataka",
  crops: ["Jowar 🌾", "Grapes 🍇", "Sugarcane 🌱"],
  soilPH: [6.5, 8.0],
  temperature: [24, 39],
  moisture: [15, 50],
  weather: ["Clear"]
},

{
  location: "Yadgir",
  state: "Karnataka",
  crops: ["Cotton ☁", "Toor Dal 🌱", "Groundnut 🥜"],
  soilPH: [6.0, 8.0],
  temperature: [25, 39],
  moisture: [15, 50],
  weather: ["Clear"]
},

{
  location: "Uttara Kannada",
  state: "Karnataka",
  crops: ["Coconut 🥥", "Rice 🌾", "Cashew 🌰"],
  soilPH: [5.0, 7.0],
  temperature: [22, 33],
  moisture: [55, 95],
  weather: ["Rain", "Clouds"]
},

{
  location: "Chitradurga",
  state: "Karnataka",
  crops: ["Ragi 🌾", "Groundnut 🥜", "Sunflower 🌻"],
  soilPH: [6.0, 7.8],
  temperature: [22, 37],
  moisture: [15, 50],
  weather: ["Clear"]
},
// INDIA STATE-WISE DATA (28 STATES)
{
  state: "Sikkim",
  crops: ["Cardamom 🌱", "Tea 🍃", "Ginger 🌿"]
},

{
  state: "Manipur",
  crops: ["Rice 🌾", "Maize 🌽", "Pulses 🌱"]
},

{
  state: "Meghalaya",
  crops: ["Rice 🌾", "Tea 🍃", "Turmeric 🌿"]
},

{
  state: "Mizoram",
  crops: ["Rice 🌾", "Ginger 🌿", "Banana 🍌"]
},

{
  state: "Nagaland",
  crops: ["Rice 🌾", "Maize 🌽", "Millets 🌾"]
},

{
  state: "Arunachal Pradesh",
  crops: ["Rice 🌾", "Maize 🌽", "Orange 🍊"]
},

{
  state: "Tripura",
  crops: ["Rice 🌾", "Tea 🍃", "Rubber 🌳"]
},

{
  state: "Uttarakhand",
  crops: ["Apple 🍎", "Rice 🌾", "Wheat 🌾"]
},

{
  state: "Delhi",
  crops: ["Vegetables 🥬", "Wheat 🌾", "Flowers 🌸"]
},

{
  state: "Punjab",
  crops: ["Wheat 🌾", "Rice 🌾", "Sugarcane 🌱"]
},

{
  state: "Ladakh",
  crops: ["Barley 🌾", "Peas 🌱", "Apple 🍎"]
},
  
  {
    state: "Tamil Nadu",
    crops: ["Rice 🌾", "Banana 🍌", "Sugarcane 🌱"]
  },

  {
    state: "Kerala",
    crops: ["Coconut 🥥", "Rubber 🌳", "Rice 🌾"]
  },

  {
    state: "Andhra Pradesh",
    crops: ["Rice 🌾", "Cotton ☁", "Groundnut 🥜"]
  },

  {
    state: "Telangana",
    crops: ["Cotton ☁", "Maize 🌽", "Rice 🌾"]
  },

  {
    state: "Maharashtra",
    crops: ["Sugarcane 🌱", "Cotton ☁", "Soybean 🌱"]
  },

  {
    state: "Gujarat",
    crops: ["Cotton ☁", "Groundnut 🥜", "Wheat 🌾"]
  },

  {
    state: "Punjab",
    crops: ["Wheat 🌾", "Rice 🌾", "Maize 🌽"]
  },

  {
    state: "Haryana",
    crops: ["Wheat 🌾", "Mustard 🌻", "Rice 🌾"]
  },

  {
    state: "Rajasthan",
    crops: ["Bajra 🌾", "Mustard 🌻", "Barley 🌾"]
  },

  {
    state: "Uttar Pradesh",
    crops: ["Sugarcane 🌱", "Wheat 🌾", "Rice 🌾"]
  },

  {
    state: "Bihar",
    crops: ["Rice 🌾", "Maize 🌽", "Wheat 🌾"]
  },

  {
    state: "West Bengal",
    crops: ["Rice 🌾", "Jute 🌱", "Tea 🍃"]
  },

  {
    state: "Assam",
    crops: ["Tea 🍃", "Rice 🌾", "Mustard 🌻"]
  },

  {
    state: "Madhya Pradesh",
    crops: ["Soybean 🌱", "Wheat 🌾", "Gram 🌱"]
  },

  {
    state: "Odisha",
    crops: ["Rice 🌾", "Groundnut 🥜", "Sugarcane 🌱"]
  },

  {
    state: "Chhattisgarh",
    crops: ["Rice 🌾", "Maize 🌽", "Pulses 🌱"]
  },

  {
    state: "Jharkhand",
    crops: ["Rice 🌾", "Maize 🌽", "Pulses 🌱"]
  },

  {
    state: "Himachal Pradesh",
    crops: ["Apple 🍎", "Barley 🌾", "Tea 🍃"]
  },

  {
    state: "Jammu and Kashmir",
    crops: ["Apple 🍎", "Walnut 🌰", "Saffron 🌸"]
  },

  {
    state: "Goa",
    crops: ["Coconut 🥥", "Rice 🌾", "Cashew 🌰"]
  }

];

const predictCrop = () => {

  const matchedCrops = cropDatabase.filter((item) => {

    const userLocation = location.trim().toLowerCase();

    const locationMatch =

      item.location &&
      item.location.toLowerCase() === userLocation ||

      item.state &&
      item.state.toLowerCase() === userLocation;

    const moistureMatch =

      !item.moisture ||

      (
        sensor.moisture >= item.moisture[0] &&
        sensor.moisture <= item.moisture[1]
      );

    const tempMatch =

      !item.temperature ||

      (
        sensor.temperature >= item.temperature[0] &&
        sensor.temperature <= item.temperature[1]
      );

    const phMatch =

      !item.soilPH ||

      (
        sensor.ph >= item.soilPH[0] &&
        sensor.ph <= item.soilPH[1]
      );

    return (
      locationMatch &&
      moistureMatch &&
      tempMatch &&
      phMatch
    );

  });

  if (matchedCrops.length > 0) {

    const cropsList = matchedCrops
      .flatMap((item) => item.crops);

    const uniqueCrops = [...new Set(cropsList)];

    setCrop(uniqueCrops.join(" , "));

  }

  else {

    setCrop("No Suitable Crop Found");

  }

};

export default cropDatabase;