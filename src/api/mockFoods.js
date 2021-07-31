import axios from "axios";
import MockAdapter from "axios-mock-adapter";

var mock = new MockAdapter(axios);

let instance = axios.create({
  baseURL: "http://localhost:8080",
});

const data = {
  foods: [
    {
      id: 1,
      meal: "meat",
      price: "50",
      lovefood: false,
      text:
        "it is a delecious meal , contains more beautiful things and special taste.",
      ingredients: [
        "Meat",
        "onions",
        "rice",
        "garlic",
        "salt",
        "ghee",
        "oil",
        "salad",
        "cheese",
        "vegetables",
      ],
      fulldsecription:
        "When you need to feed the family or kids, these are the easy dinner recipes you turn to time and time again. With lots of healthy, quick, vegetarian, chicken, and budget-friendly ideas, there’s something for everyone It is a healthy, delicious and useful meal that contains a lot of calories needed to build the body and has a special taste for you.",
      image:
        "https://images.pexels.com/photos/6896527/pexels-photo-6896527.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260",
      mealkinds: [
        "https://images.pexels.com/photos/4669250/pexels-photo-4669250.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
        "https://images.pexels.com/photos/361184/asparagus-steak-veal-steak-veal-361184.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
        "https://images.pexels.com/photos/128641/pexels-photo-128641.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
        "https://images.pexels.com/photos/5995508/pexels-photo-5995508.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
        "https://images.pexels.com/photos/7712535/pexels-photo-7712535.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
        "https://images.pexels.com/photos/7741801/pexels-photo-7741801.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
        "https://images.pexels.com/photos/7368034/pexels-photo-7368034.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
        "https://images.pexels.com/photos/6830061/pexels-photo-6830061.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
      ],
    },
    {
      id: 2,
      meal: "pizza",
      price: "60",
      lovefood: false,
      text:
        "it is a delecious meal , contains more beautiful things and special taste.",
      ingredients: [
        "Meat",
        "onions",
        "rice",
        "garlic",
        "salt",
        "ghee",
        "oil",
        "salad",
        "cheese",
        "vegetables",
      ],
      fulldsecription:
        "When you need to feed the family or kids, these are the easy dinner recipes you turn to time and time again. With lots of healthy, quick, vegetarian, chicken, and budget-friendly ideas, there’s something for everyone It is a healthy, delicious and useful meal that contains a lot of calories needed to build the body and has a special taste for you.",
      image:
        "https://images.pexels.com/photos/1458426/pexels-photo-1458426.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260",
      mealkinds: [
        "https://images.pexels.com/photos/845802/pexels-photo-845802.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
        "https://images.pexels.com/photos/825661/pexels-photo-825661.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
        "https://images.pexels.com/photos/2909822/pexels-photo-2909822.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
        "https://images.pexels.com/photos/2260200/pexels-photo-2260200.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
        "https://images.pexels.com/photos/803290/pexels-photo-803290.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
        "https://images.pexels.com/photos/2741457/pexels-photo-2741457.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
        "https://images.pexels.com/photos/208537/pexels-photo-208537.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
        "https://images.pexels.com/photos/1034940/pexels-photo-1034940.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260",
      ],
    },
    {
      id: 3,
      meal: "chicken",
      price: "70",
      lovefood: false,
      text:
        "it is a delecious meal , contains more beautiful things and special taste.",
      ingredients: [
        "Meat",
        "onions",
        "rice",
        "garlic",
        "salt",
        "ghee",
        "oil",
        "salad",
        "cheese",
        "vegetables",
      ],
      fulldsecription:
        "When you need to feed the family or kids, these are the easy dinner recipes you turn to time and time again. With lots of healthy, quick, vegetarian, chicken, and budget-friendly ideas, there’s something for everyone It is a healthy, delicious and useful meal that contains a lot of calories needed to build the body and has a special taste for you.",
      image:
        "https://images.pexels.com/photos/2338407/pexels-photo-2338407.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
      mealkinds: [
        "https://images.pexels.com/photos/2338407/pexels-photo-2338407.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
        "https://images.pexels.com/photos/1624487/pexels-photo-1624487.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
        "https://images.pexels.com/photos/323682/pexels-photo-323682.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
        "https://images.pexels.com/photos/1860204/pexels-photo-1860204.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
        "https://images.pexels.com/photos/2689419/pexels-photo-2689419.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
        "https://images.pexels.com/photos/106343/pexels-photo-106343.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
        "https://images.pexels.com/photos/60616/fried-chicken-chicken-fried-crunchy-60616.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
        "https://images.pexels.com/photos/616354/pexels-photo-616354.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
        "https://images.pexels.com/photos/6210876/pexels-photo-6210876.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
        "https://images.pexels.com/photos/6210876/pexels-photo-6210876.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
      ],
    },
    {
      id: 4,
      meal: "soup",
      price: "40",
      lovefood: false,
      text:
        "it is a delecious meal , contains more beautiful things and special taste.",
      ingredients: [
        "Meat",
        "onions",
        "rice",
        "garlic",
        "salt",
        "ghee",
        "oil",
        "salad",
        "cheese",
        "vegetables",
      ],
      fulldsecription:
        "When you need to feed the family or kids, these are the easy dinner recipes you turn to time and time again. With lots of healthy, quick, vegetarian, chicken, and budget-friendly ideas, there’s something for everyone It is a healthy, delicious and useful meal that contains a lot of calories needed to build the body and has a special taste for you.",
      image:
        "https://images.pexels.com/photos/3832348/pexels-photo-3832348.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
      mealkinds: [
        "https://images.pexels.com/photos/3832348/pexels-photo-3832348.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
        "https://images.pexels.com/photos/3296680/pexels-photo-3296680.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
        "https://images.pexels.com/photos/4210849/pexels-photo-4210849.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
        "https://images.pexels.com/photos/6072108/pexels-photo-6072108.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
        "https://images.pexels.com/photos/4451860/pexels-photo-4451860.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
        "https://images.pexels.com/photos/5419035/pexels-photo-5419035.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
        "https://images.pexels.com/photos/5419043/pexels-photo-5419043.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
        "https://images.pexels.com/photos/5605555/pexels-photo-5605555.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
      ],
    },
    {
      id: 5,
      meal: "salad",
      price: "20",
      lovefood: false,
      text:
        "it is a delecious meal , contains more beautiful things and special taste.",
      ingredients: [
        "Meat",
        "onions",
        "rice",
        "garlic",
        "salt",
        "ghee",
        "oil",
        "salad",
        "cheese",
        "vegetables",
      ],
      fulldsecription:
        "When you need to feed the family or kids, these are the easy dinner recipes you turn to time and time again. With lots of healthy, quick, vegetarian, chicken, and budget-friendly ideas, there’s something for everyone It is a healthy, delicious and useful meal that contains a lot of calories needed to build the body and has a special taste for you.",
      image:
        "https://images.pexels.com/photos/3872373/pexels-photo-3872373.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260",
      mealkinds: [
        "https://images.pexels.com/photos/1059905/pexels-photo-1059905.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
        "https://images.pexels.com/photos/257816/pexels-photo-257816.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
        "https://images.pexels.com/photos/1211887/pexels-photo-1211887.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
        "https://images.pexels.com/photos/434258/pexels-photo-434258.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
        "https://images.pexels.com/photos/406152/pexels-photo-406152.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
        "https://images.pexels.com/photos/2116090/pexels-photo-2116090.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
        "https://images.pexels.com/photos/1143754/pexels-photo-1143754.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
        "https://images.pexels.com/photos/936611/pexels-photo-936611.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
      ],
    },
    {
      id: 6,
      meal: "spaghetti",
      price: "50",
      lovefood: false,
      text:
        "it is a delecious meal , contains more beautiful things and special taste.",
      ingredients: [
        "Meat",
        "onions",
        "rice",
        "garlic",
        "salt",
        "ghee",
        "oil",
        "salad",
        "cheese",
        "vegetables",
      ],
      fulldsecription:
        "When you need to feed the family or kids, these are the easy dinner recipes you turn to time and time again. With lots of healthy, quick, vegetarian, chicken, and budget-friendly ideas, there’s something for everyone It is a healthy, delicious and useful meal that contains a lot of calories needed to build the body and has a special taste for you.",
      image:
        "https://images.pexels.com/photos/725990/pexels-photo-725990.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
      mealkinds: [
        "https://images.pexels.com/photos/41194/beef-cheese-cuisine-delicious-41194.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
        "https://images.pexels.com/photos/2092906/pexels-photo-2092906.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
        "https://images.pexels.com/photos/1527603/pexels-photo-1527603.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
        "https://images.pexels.com/photos/2347311/pexels-photo-2347311.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
        "https://images.pexels.com/photos/14737/pexels-photo.jpg?auto=compress&cs=tinysrgb&dpr=1&w=500",
        "https://images.pexels.com/photos/4057736/pexels-photo-4057736.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
        "https://images.pexels.com/photos/4057697/pexels-photo-4057697.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
        "https://images.pexels.com/photos/4057701/pexels-photo-4057701.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
      ],
    },
    {
      id: 7,
      meal: "pasta",
      price: "60",
      lovefood: false,
      text:
        "it is a delecious meal , contains more beautiful things and special taste.",
      ingredients: [
        "Meat",
        "onions",
        "rice",
        "garlic",
        "salt",
        "ghee",
        "oil",
        "salad",
        "cheese",
        "vegetables",
      ],
      fulldsecription:
        "When you need to feed the family or kids, these are the easy dinner recipes you turn to time and time again. With lots of healthy, quick, vegetarian, chicken, and budget-friendly ideas, there’s something for everyone It is a healthy, delicious and useful meal that contains a lot of calories needed to build the body and has a special taste for you.",
      image:
        "https://images.pexels.com/photos/1527603/pexels-photo-1527603.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
      mealkinds: [
        "https://images.pexels.com/photos/1527603/pexels-photo-1527603.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
        "https://images.pexels.com/photos/1437267/pexels-photo-1437267.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
        "https://images.pexels.com/photos/769969/pexels-photo-769969.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
        "https://images.pexels.com/photos/54455/cook-food-kitchen-eat-54455.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
        "https://images.pexels.com/photos/1438672/pexels-photo-1438672.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
        "https://images.pexels.com/photos/6287497/pexels-photo-6287497.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
        "https://images.pexels.com/photos/6249720/pexels-photo-6249720.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
        "https://images.pexels.com/photos/1907244/pexels-photo-1907244.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
      ],
    },
    {
      id: 8,
      meal: "fish",
      price: "70",
      lovefood: false,
      text:
        "it is a delecious meal , contains more beautiful things and special taste.",
      ingredients: [
        "Meat",
        "onions",
        "rice",
        "garlic",
        "salt",
        "ghee",
        "oil",
        "salad",
        "cheese",
        "vegetables",
      ],
      fulldsecription:
        "When you need to feed the family or kids, these are the easy dinner recipes you turn to time and time again. With lots of healthy, quick, vegetarian, chicken, and budget-friendly ideas, there’s something for everyone It is a healthy, delicious and useful meal that contains a lot of calories needed to build the body and has a special taste for you.",
      image:
        "https://images.pexels.com/photos/1516415/pexels-photo-1516415.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
      mealkinds: [
        "https://images.pexels.com/photos/1516415/pexels-photo-1516415.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
        "https://images.pexels.com/photos/262959/pexels-photo-262959.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
        "https://images.pexels.com/photos/842142/pexels-photo-842142.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
        "https://images.pexels.com/photos/3655916/pexels-photo-3655916.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
        "https://images.pexels.com/photos/566345/pexels-photo-566345.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
        "https://images.pexels.com/photos/6546181/pexels-photo-6546181.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
        "https://images.pexels.com/photos/3662189/pexels-photo-3662189.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
        "https://images.pexels.com/photos/6546164/pexels-photo-6546164.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
      ],
    },
    {
      id: 9,
      meal: "burger",
      price: "40",
      lovefood: false,
      text:
        "it is a delecious meal , contains more beautiful things and special taste.",
      ingredients: [
        "Meat",
        "onions",
        "rice",
        "garlic",
        "salt",
        "ghee",
        "oil",
        "salad",
        "cheese",
        "vegetables",
      ],
      fulldsecription:
        "When you need to feed the family or kids, these are the easy dinner recipes you turn to time and time again. With lots of healthy, quick, vegetarian, chicken, and budget-friendly ideas, there’s something for everyone It is a healthy, delicious and useful meal that contains a lot of calories needed to build the body and has a special taste for you.",
      image:
        "https://images.pexels.com/photos/2983098/pexels-photo-2983098.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
      mealkinds: [
        "https://images.pexels.com/photos/2983098/pexels-photo-2983098.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
        "https://images.pexels.com/photos/3219547/pexels-photo-3219547.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
        "https://images.pexels.com/photos/1893557/pexels-photo-1893557.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
        "https://images.pexels.com/photos/2657960/pexels-photo-2657960.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
        "https://images.pexels.com/photos/3826273/pexels-photo-3826273.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
        "https://images.pexels.com/photos/2282528/pexels-photo-2282528.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
        "https://images.pexels.com/photos/3659861/pexels-photo-3659861.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
        "https://images.pexels.com/photos/6205791/pexels-photo-6205791.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
      ],
    },
    {
      id: 10,
      meal: "beef",
      price: "20",
      lovefood: false,
      text:
        "it is a delecious meal , contains more beautiful things and special taste.",
      ingredients: [
        "Meat",
        "onions",
        "rice",
        "garlic",
        "salt",
        "ghee",
        "oil",
        "salad",
        "cheese",
        "vegetables",
      ],
      fulldsecription:
        "When you need to feed the family or kids, these are the easy dinner recipes you turn to time and time again. With lots of healthy, quick, vegetarian, chicken, and budget-friendly ideas, there’s something for everyone It is a healthy, delicious and useful meal that contains a lot of calories needed to build the body and has a special taste for you.",
      image:
        "https://images.pexels.com/photos/2313686/pexels-photo-2313686.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
      mealkinds: [
        "https://images.pexels.com/photos/2313686/pexels-photo-2313686.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
        "https://images.pexels.com/photos/2983099/pexels-photo-2983099.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
        "https://images.pexels.com/photos/2233729/pexels-photo-2233729.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
        "https://images.pexels.com/photos/3535383/pexels-photo-3535383.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
        "https://images.pexels.com/photos/2491273/pexels-photo-2491273.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
        "https://images.pexels.com/photos/1639563/pexels-photo-1639563.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
        "https://images.pexels.com/photos/2491273/pexels-photo-2491273.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
        "https://images.pexels.com/photos/1639563/pexels-photo-1639563.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
      ],
    },
    {
      id: 11,
      meal: "seafood",
      price: "50",
      lovefood: false,
      text:
        "it is a delecious meal , contains more beautiful things and special taste.",
      ingredients: [
        "Meat",
        "onions",
        "rice",
        "garlic",
        "salt",
        "ghee",
        "oil",
        "salad",
        "cheese",
        "vegetables",
      ],
      fulldsecription:
        "When you need to feed the family or kids, these are the easy dinner recipes you turn to time and time again. With lots of healthy, quick, vegetarian, chicken, and budget-friendly ideas, there’s something for everyone It is a healthy, delicious and useful meal that contains a lot of calories needed to build the body and has a special taste for you.",
      image:
        "https://images.pexels.com/photos/725992/pexels-photo-725992.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
      mealkinds: [
        "https://images.pexels.com/photos/725992/pexels-photo-725992.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
        "https://images.pexels.com/photos/566344/pexels-photo-566344.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
        "https://images.pexels.com/photos/2871757/pexels-photo-2871757.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
        "https://images.pexels.com/photos/2410602/pexels-photo-2410602.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
        "https://images.pexels.com/photos/725997/pexels-photo-725997.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
        "https://images.pexels.com/photos/3295859/pexels-photo-3295859.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
        "https://images.pexels.com/photos/4869432/pexels-photo-4869432.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
        "https://images.pexels.com/photos/8352389/pexels-photo-8352389.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
      ],
    },
    {
      id: 12,
      meal: "Crab",
      price: "60",
      lovefood: false,
      text:
        "it is a delecious meal , contains more beautiful things and special taste.",
      ingredients: [
        "Meat",
        "onions",
        "rice",
        "garlic",
        "salt",
        "ghee",
        "oil",
        "salad",
        "cheese",
        "vegetables",
      ],
      fulldsecription:
        "When you need to feed the family or kids, these are the easy dinner recipes you turn to time and time again. With lots of healthy, quick, vegetarian, chicken, and budget-friendly ideas, there’s something for everyone It is a healthy, delicious and useful meal that contains a lot of calories needed to build the body and has a special taste for you.",
      image:
        "https://images.pexels.com/photos/4869432/pexels-photo-4869432.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
      mealkinds: [
        "https://images.pexels.com/photos/4869432/pexels-photo-4869432.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
        "https://images.pexels.com/photos/3640451/pexels-photo-3640451.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
        "https://images.pexels.com/photos/179834/pexels-photo-179834.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
        "https://images.pexels.com/photos/566343/pexels-photo-566343.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
        "https://images.pexels.com/photos/3640445/pexels-photo-3640445.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
        "https://images.pexels.com/photos/4195061/pexels-photo-4195061.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
        "https://images.pexels.com/photos/5900517/pexels-photo-5900517.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
        "https://images.pexels.com/photos/4869328/pexels-photo-4869328.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
      ],
    },
    {
      id: 13,
      meal: "steak",
      price: "70",
      lovefood: false,
      text:
        "it is a delecious meal , contains more beautiful things and special taste.",
      ingredients: [
        "Meat",
        "onions",
        "rice",
        "garlic",
        "salt",
        "ghee",
        "oil",
        "salad",
        "cheese",
        "vegetables",
      ],
      fulldsecription:
        "When you need to feed the family or kids, these are the easy dinner recipes you turn to time and time again. With lots of healthy, quick, vegetarian, chicken, and budget-friendly ideas, there’s something for everyone It is a healthy, delicious and useful meal that contains a lot of calories needed to build the body and has a special taste for you.",
      image:
        "https://images.pexels.com/photos/2491273/pexels-photo-2491273.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
      mealkinds: [
        "https://images.pexels.com/photos/2491273/pexels-photo-2491273.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
        "https://images.pexels.com/photos/2983099/pexels-photo-2983099.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
        "https://images.pexels.com/photos/2233729/pexels-photo-2233729.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
        "https://images.pexels.com/photos/3535383/pexels-photo-3535383.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
        "https://images.pexels.com/photos/2491273/pexels-photo-2491273.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
        "https://images.pexels.com/photos/1639563/pexels-photo-1639563.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
        "https://images.pexels.com/photos/2491273/pexels-photo-2491273.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
        "https://images.pexels.com/photos/1639563/pexels-photo-1639563.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
      ],
    },
    {
      id: 14,
      meal: "potatos",
      price: "40",
      lovefood: false,
      text:
        "it is a delecious meal , contains more beautiful things and special taste.",
      ingredients: [
        "Meat",
        "onions",
        "rice",
        "garlic",
        "salt",
        "ghee",
        "oil",
        "salad",
        "cheese",
        "vegetables",
      ],
      fulldsecription:
        "When you need to feed the family or kids, these are the easy dinner recipes you turn to time and time again. With lots of healthy, quick, vegetarian, chicken, and budget-friendly ideas, there’s something for everyone It is a healthy, delicious and useful meal that contains a lot of calories needed to build the body and has a special taste for you.",
      image:
        "https://images.pexels.com/photos/1583884/pexels-photo-1583884.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
      mealkinds: [
        "https://images.pexels.com/photos/1583884/pexels-photo-1583884.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
        "https://images.pexels.com/photos/1893556/pexels-photo-1893556.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
        "https://images.pexels.com/photos/4577379/pexels-photo-4577379.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
        "https://images.pexels.com/photos/70497/pexels-photo-70497.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
        "https://images.pexels.com/photos/1893555/pexels-photo-1893555.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
        "https://images.pexels.com/photos/6941028/pexels-photo-6941028.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
        "https://images.pexels.com/photos/1352270/pexels-photo-1352270.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
      ],
    },
    {
      id: 15,
      meal: "chili foods",
      price: "20",
      lovefood: false,
      text:
        "it is a delecious meal , contains more beautiful things and special taste.",
      ingredients: [
        "Meat",
        "onions",
        "rice",
        "garlic",
        "salt",
        "ghee",
        "oil",
        "salad",
        "cheese",
        "vegetables",
      ],
      fulldsecription:
        "When you need to feed the family or kids, these are the easy dinner recipes you turn to time and time again. With lots of healthy, quick, vegetarian, chicken, and budget-friendly ideas, there’s something for everyone It is a healthy, delicious and useful meal that contains a lot of calories needed to build the body and has a special taste for you.",
      image:
        "https://images.pexels.com/photos/1437590/pexels-photo-1437590.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
      mealkinds: [
        "https://images.pexels.com/photos/1437590/pexels-photo-1437590.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
        "https://images.pexels.com/photos/8540921/pexels-photo-8540921.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
        "https://images.pexels.com/photos/3662126/pexels-photo-3662126.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
        "https://images.pexels.com/photos/5908232/pexels-photo-5908232.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
        "https://images.pexels.com/photos/1091778/pexels-photo-1091778.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
        "https://images.pexels.com/photos/4553111/pexels-photo-4553111.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
        "https://images.pexels.com/photos/929192/pexels-photo-929192.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
        "https://images.pexels.com/photos/3622476/pexels-photo-3622476.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
      ],
    },
    {
      id: 16,
      meal: "vegetables",
      price: "50",
      lovefood: false,
      text:
        "it is a delecious meal , contains more beautiful things and special taste.",
      ingredients: [
        "Meat",
        "onions",
        "rice",
        "garlic",
        "salt",
        "ghee",
        "oil",
        "salad",
        "cheese",
        "vegetables",
      ],
      fulldsecription:
        "When you need to feed the family or kids, these are the easy dinner recipes you turn to time and time again. With lots of healthy, quick, vegetarian, chicken, and budget-friendly ideas, there’s something for everyone It is a healthy, delicious and useful meal that contains a lot of calories needed to build the body and has a special taste for you.",
      image:
        "https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
      mealkinds: [
        "https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
        "https://images.pexels.com/photos/3872373/pexels-photo-3872373.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
        "https://images.pexels.com/photos/1351238/pexels-photo-1351238.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
        "https://images.pexels.com/photos/3297367/pexels-photo-3297367.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
        "https://images.pexels.com/photos/4198169/pexels-photo-4198169.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
        "https://images.pexels.com/photos/3872434/pexels-photo-3872434.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
        "https://images.pexels.com/photos/3872366/pexels-photo-3872366.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
        "https://images.pexels.com/photos/704951/pexels-photo-704951.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
      ],
    },
    {
      id: 17,
      meal: "healthy food",
      price: "60",
      lovefood: false,
      text:
        "it is a delecious meal , contains more beautiful things and special taste.",
      ingredients: [
        "Meat",
        "onions",
        "rice",
        "garlic",
        "salt",
        "ghee",
        "oil",
        "salad",
        "cheese",
        "vegetables",
      ],
      fulldsecription:
        "When you need to feed the family or kids, these are the easy dinner recipes you turn to time and time again. With lots of healthy, quick, vegetarian, chicken, and budget-friendly ideas, there’s something for everyone It is a healthy, delicious and useful meal that contains a lot of calories needed to build the body and has a special taste for you.",
      image:
        "https://images.pexels.com/photos/1092730/pexels-photo-1092730.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
      mealkinds: [
        "https://images.pexels.com/photos/1092730/pexels-photo-1092730.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
        "https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
        "https://images.pexels.com/photos/793759/pexels-photo-793759.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
        "https://images.pexels.com/photos/1640771/pexels-photo-1640771.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
        "https://images.pexels.com/photos/5938/food-salad-healthy-lunch.jpg?auto=compress&cs=tinysrgb&dpr=1&w=500",
        "https://images.pexels.com/photos/1128678/pexels-photo-1128678.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
        "https://images.pexels.com/photos/434295/pexels-photo-434295.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
        "https://images.pexels.com/photos/264537/pexels-photo-264537.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
      ],
    },
    {
      id: 18,
      meal: "chili chicken",
      price: "70",
      lovefood: false,
      text:
        "it is a delecious meal , contains more beautiful things and special taste.",
      ingredients: [
        "Meat",
        "onions",
        "rice",
        "garlic",
        "salt",
        "ghee",
        "oil",
        "salad",
        "cheese",
        "vegetables",
      ],
      fulldsecription:
        "When you need to feed the family or kids, these are the easy dinner recipes you turn to time and time again. With lots of healthy, quick, vegetarian, chicken, and budget-friendly ideas, there’s something for everyone It is a healthy, delicious and useful meal that contains a lot of calories needed to build the body and has a special taste for you.",
      image:
        "https://images.pexels.com/photos/6941026/pexels-photo-6941026.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
      mealkinds: [
        "https://images.pexels.com/photos/6941026/pexels-photo-6941026.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
        "https://images.pexels.com/photos/929192/pexels-photo-929192.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
        "https://images.pexels.com/photos/3763792/pexels-photo-3763792.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
        "https://images.pexels.com/photos/54455/cook-food-kitchen-eat-54455.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
        "https://images.pexels.com/photos/1438672/pexels-photo-1438672.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
        "https://images.pexels.com/photos/6287497/pexels-photo-6287497.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
        "https://images.pexels.com/photos/6249720/pexels-photo-6249720.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
        "https://images.pexels.com/photos/1907244/pexels-photo-1907244.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
      ],
    },
    {
      id: 19,
      meal: "soup",
      price: "40",
      lovefood: false,
      text:
        "it is a delecious meal , contains more beautiful things and special taste.",
      ingredients: [
        "Meat",
        "onions",
        "rice",
        "garlic",
        "salt",
        "ghee",
        "oil",
        "salad",
        "cheese",
        "vegetables",
      ],
      fulldsecription:
        "When you need to feed the family or kids, these are the easy dinner recipes you turn to time and time again. With lots of healthy, quick, vegetarian, chicken, and budget-friendly ideas, there’s something for everyone It is a healthy, delicious and useful meal that contains a lot of calories needed to build the body and has a special taste for you.",
      image:
        "https://images.pexels.com/photos/65175/pexels-photo-65175.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
      mealkinds: [
        "https://images.pexels.com/photos/65175/pexels-photo-65175.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
        "https://images.pexels.com/photos/2983099/pexels-photo-2983099.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
        "https://images.pexels.com/photos/2233729/pexels-photo-2233729.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
        "https://images.pexels.com/photos/3535383/pexels-photo-3535383.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
        "https://images.pexels.com/photos/2491273/pexels-photo-2491273.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
        "https://images.pexels.com/photos/1639563/pexels-photo-1639563.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
        "https://images.pexels.com/photos/2491273/pexels-photo-2491273.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
        "https://images.pexels.com/photos/1639563/pexels-photo-1639563.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
      ],
    },
    {
      id: 20,
      meal: "chili potatos",
      price: "20",
      lovefood: false,
      text:
        "it is a delecious meal , contains more beautiful things and special taste.",
      ingredients: [
        "Meat",
        "onions",
        "rice",
        "garlic",
        "salt",
        "ghee",
        "oil",
        "salad",
        "cheese",
        "vegetables",
      ],
      fulldsecription:
        "When you need to feed the family or kids, these are the easy dinner recipes you turn to time and time again. With lots of healthy, quick, vegetarian, chicken, and budget-friendly ideas, there’s something for everyone It is a healthy, delicious and useful meal that contains a lot of calories needed to build the body and has a special taste for you.",
      image:
        "https://images.pexels.com/photos/6941009/pexels-photo-6941009.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
      mealkinds: [
        "https://images.pexels.com/photos/6941009/pexels-photo-6941009.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
        "https://images.pexels.com/photos/6941052/pexels-photo-6941052.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
        "https://images.pexels.com/photos/6546426/pexels-photo-6546426.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
        "https://images.pexels.com/photos/434258/pexels-photo-434258.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
        "https://images.pexels.com/photos/406152/pexels-photo-406152.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
        "https://images.pexels.com/photos/2116090/pexels-photo-2116090.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
        "https://images.pexels.com/photos/1143754/pexels-photo-1143754.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
        "https://images.pexels.com/photos/936611/pexels-photo-936611.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
      ],
    },
  ],
};

mock.onGet("/foods").reply(() => {
  return [200, { foods: data.foods }];
});

mock.onGet(/\/apps\/user\/users\/\d+/).reply((config) => {
  let userId = config.url.substring(config.url.lastIndexOf("/") + 1);

  // Convert Id to number
  userId = Number(userId);
  // window.console.log(userId);

  const userIndex = data.foods.findIndex((e) => e.id === userId);
  const user = data.foods[userIndex];
  if (user) return [200, user];
  return [404];
});

export default instance;
