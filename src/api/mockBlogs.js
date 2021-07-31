import axios from "axios";
import MockAdapter from "axios-mock-adapter";

var mock = new MockAdapter(axios);

let instance = axios.create({
  baseURL: "http://localhost:8080",
});

const data = {
  blogs: [
    {
      id: 1,
      author: "mohamed almarag",
      views: 777,
      date: "16-8-2007",
      title: "A new approach to reducing salt while maintaining taste",
      maincontent:
        "The dangers of a high-sodium diet have been well documented, but a new technology devised by scientists from Washington State University could help reduce sodium in processed foods while retaining taste and texture The researchers used microwave assisted thermal sterilization (MATS) to kill pathogens without reducing flavor intensity, a common problem that occurs with retort, the current method used to help preserve food.",
      content:
        "The dangers of a high-sodium diet have been well documented, but a new technology devised by scientists.",
      image:
        "https://images.pexels.com/photos/1034940/pexels-photo-1034940.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260",
    },
    {
      id: 2,
      author: "mohamed hassan",
      views: 727,
      date: "27-8-2008",
      title: "Sucralose–carbohydrate combo may affect insulin sensitivity",
      maincontent:
        "metabolic problems and issues with neural responses but only when the beverage was formulated with both sucralose and a tasteless sugar (maltodextrin) Scientists debate about how low-calorie sweeteners in foods and beverages can affect human metabolism, with some saying that they could affect metabolism in ways that contribute to obesity and diabetes. In contrast, others say that they have little impact on metabolism.",
      content:
        "A study found that people who drank beverages that contained the low-calorie sweetener sucralose.",
      image:
        "https://images.pexels.com/photos/2335683/pexels-photo-2335683.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260",
    },
    {
      id: 3,
      author: "ahmed nour",
      views: 883,
      date: "17-1-2009",
      title: "Understanding and Addressing Global Hunger discussion includes",
      maincontent:
        "Today's discussion includes Dr. William Moseley, a DeWitt Wallace Professor of geography and director of the Food, Agriculture & Society Program at Macalester College in Saint Paul, Minnesota, and Dr. Barbara Burlingame, a professor of Nutrition and Food Systems at Massey University's College of Health. Both Dr. Moseley and Dr. Burlingame are members of the Steering Committee for the High Level Panel of Experts (HLPE) on food security and nutrition. They contributed to the FAO 's High Level Panel of Experts on Food Security and Nutrition's 15th Report.",
      content:
        "Today's discussion includes Dr. William Moseley, a DeWitt Wallace Professor of geography and director.",
      image:
        "https://images.pexels.com/photos/858501/pexels-photo-858501.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260",
    },
    {
      id: 4,
      author: "tarek karam",
      views: 554,
      date: "17-3-2010",
      title: "All About Food Safety Culture In this podcast we discuss ",
      maincontent:
        "In this podcast, we discuss food safety culture, including how food safety culture is established, measured, and how they are expected to change in light of ongoing advancements in food science and policy. Our guests include Hugo Gutierrez, Global Food Safety and Quality Officer for Kerry, and Bob Gravani, Professor Emeritus of Food Science and Director Emeritus of the National Good Agricultural Practices (GAPs) Program at Cornell University.",
      content:
        "In this podcast, we discuss food safety culture, including how food safety culture is established, measured.",
      image:
        "https://images.pexels.com/photos/2264036/pexels-photo-2264036.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260",
    },
    {
      id: 5,
      author: "mohamed abd-allah",
      views: 900,
      date: "24-4-2012",
      title: " Food Industry Trends We're Predicting in 2021 podcast",
      maincontent:
        "John Ruff is the Chief Science and Technology Officer at IFT. During his 36-year career with Kraft and the former General Foods, he headed R&D for International and North American businesses where he successfully integrated the technical operations of numerous acquisitions, established global centers of expertise and led a worldwide advisory council consisting of external experts who have helped guide Kraft’s health and wellness initiatives. John received his M.A. in Biochemistry and a B.A. in Natural Sciences from the University of Cambridge in the United Kingdom.",
      content:
        "Today’s podcast features Kelly Hensel, IFT’s senior digital editor, and John Ruff, IFT’s Chief Science .",
      image:
        "https://images.pexels.com/photos/3662189/pexels-photo-3662189.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260",
    },
    {
      id: 6,
      author: "ahmed fath-allah",
      views: 300,
      date: "22-5-2013",
      title: " Seeding the Future Global Food System Challenge",
      maincontent:
        "This year, the Seeding the Future Foundation is funding the first annual Seeding the Future Global Food System Challenge, which aims to inspire and support passionate, diverse and multidisciplinary teams to create game-changing innovations that will help transform the food system to be more sustainable, make healthier diets more accessible, and empower consumers to make choices benefitting both, personal and planetary health. The Institute of Food Technologists IFT is proud to officially launch the Challenge, and applications will open on June 7.",
      content:
        "This year, the Seeding the Future Foundation is funding the first annual Seeding the Future Global.",
      image:
        "https://images.pexels.com/photos/3872370/pexels-photo-3872370.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260",
    },
    {
      id: 7,
      author: "omran mahmoud",
      views: 400,
      date: "13-5-2014",
      title: "A new approach to reducing salt while maintaining taste",
      maincontent:
        "The dangers of a high-sodium diet have been well documented, but a new technology devised by scientists from Washington State University could help reduce sodium in processed foods while retaining taste and texture The researchers used microwave assisted thermal sterilization (MATS) to kill pathogens without reducing flavor intensity, a common problem that occurs with retort, the current method used to help preserve food.",
      content:
        "The dangers of a high-sodium diet have been well documented, but a new technology devised by scientists.",
      image:
        "https://images.pexels.com/photos/936611/pexels-photo-936611.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260",
    },
    {
      id: 8,
      author: "hossam fawzi",
      views: 322,
      date: "8-6-2020",
      title: "Sucralose–carbohydrate combo may affect insulin sensitivity",
      maincontent:
        "metabolic problems and issues with neural responses but only when the beverage was formulated with both sucralose and a tasteless sugar (maltodextrin) Scientists debate about how low-calorie sweeteners in foods and beverages can affect human metabolism, with some saying that they could affect metabolism in ways that contribute to obesity and diabetes. In contrast, others say that they have little impact on metabolism.",
      content:
        "A study found that people who drank beverages that contained the low-calorie sweetener sucralose.",
      image:
        "https://images.pexels.com/photos/3093702/pexels-photo-3093702.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260",
    },
    {
      id: 9,
      author: "basim saad",
      views: 730,
      date: "13-3-2020",
      title: "Understanding and Addressing Global Hunger discussion includes",
      maincontent:
        "Today's discussion includes Dr. William Moseley, a DeWitt Wallace Professor of geography and director of the Food, Agriculture & Society Program at Macalester College in Saint Paul, Minnesota, and Dr. Barbara Burlingame, a professor of Nutrition and Food Systems at Massey University's College of Health. Both Dr. Moseley and Dr. Burlingame are members of the Steering Committee for the High Level Panel of Experts (HLPE) on food security and nutrition. They contributed to the FAO 's High Level Panel of Experts on Food Security and Nutrition's 15th Report.",
      content:
        "Today's discussion includes Dr. William Moseley, a DeWitt Wallace Professor of geography and director.",
      image:
        "https://images.pexels.com/photos/1590583/pexels-photo-1590583.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260",
    },
    {
      id: 10,
      author: "basim saad",
      views: 730,
      date: "13-3-2020",
      title: "All About Food Safety Culture In this podcast we discuss ",
      maincontent:
        "In this podcast, we discuss food safety culture, including how food safety culture is established, measured, and how they are expected to change in light of ongoing advancements in food science and policy. Our guests include Hugo Gutierrez, Global Food Safety and Quality Officer for Kerry, and Bob Gravani, Professor Emeritus of Food Science and Director Emeritus of the National Good Agricultural Practices (GAPs) Program at Cornell University.",
      content:
        "In this podcast, we discuss food safety culture, including how food safety culture is established, measured.",
      image:
        "https://images.pexels.com/photos/4552979/pexels-photo-4552979.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260",
    },
    {
      id: 11,
      author: "hossam fawzi",
      views: 322,
      date: "8-6-2020",
      title: " Food Industry Trends We're Predicting in 2021 podcast",
      maincontent:
        "John Ruff is the Chief Science and Technology Officer at IFT. During his 36-year career with Kraft and the former General Foods, he headed R&D for International and North American businesses where he successfully integrated the technical operations of numerous acquisitions, established global centers of expertise and led a worldwide advisory council consisting of external experts who have helped guide Kraft’s health and wellness initiatives. John received his M.A. in Biochemistry and a B.A. in Natural Sciences from the University of Cambridge in the United Kingdom.",
      content:
        "Today’s podcast features Kelly Hensel, IFT’s senior digital editor, and John Ruff, IFT’s Chief Science .",
      image:
        "https://images.pexels.com/photos/2290743/pexels-photo-2290743.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260",
    },
    {
      id: 12,
      author: "omran mahmoud",
      views: 400,
      date: "13-5-2020",
      title: " Seeding the Future Global Food System Challenge",
      maincontent:
        "This year, the Seeding the Future Foundation is funding the first annual Seeding the Future Global Food System Challenge, which aims to inspire and support passionate, diverse and multidisciplinary teams to create game-changing innovations that will help transform the food system to be more sustainable, make healthier diets more accessible, and empower consumers to make choices benefitting both, personal and planetary health. The Institute of Food Technologists IFT is proud to officially launch the Challenge, and applications will open on June 7.",
      content:
        "This year, the Seeding the Future Foundation is funding the first annual Seeding the Future Global.",
      image:
        "https://images.pexels.com/photos/2878743/pexels-photo-2878743.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260",
    },
    {
      id: 13,
      author: "ahmed fath-allah",
      views: 300,
      date: "22-5-2020",
      title: "A new approach to reducing salt while maintaining taste",
      maincontent:
        "The dangers of a high-sodium diet have been well documented, but a new technology devised by scientists from Washington State University could help reduce sodium in processed foods while retaining taste and texture The researchers used microwave assisted thermal sterilization (MATS) to kill pathogens without reducing flavor intensity, a common problem that occurs with retort, the current method used to help preserve food.",
      content:
        "The dangers of a high-sodium diet have been well documented, but a new technology devised by scientists.",
      image:
        "https://images.pexels.com/photos/812860/pexels-photo-812860.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260",
    },
    {
      id: 14,
      author: "mohamed abd-allah",
      views: 900,
      date: "24-4-2020",
      title: "Sucralose–carbohydrate combo may affect insulin sensitivity",
      maincontent:
        "metabolic problems and issues with neural responses but only when the beverage was formulated with both sucralose and a tasteless sugar (maltodextrin) Scientists debate about how low-calorie sweeteners in foods and beverages can affect human metabolism, with some saying that they could affect metabolism in ways that contribute to obesity and diabetes. In contrast, others say that they have little impact on metabolism.",
      content:
        "A study found that people who drank beverages that contained the low-calorie sweetener sucralose.",
      image:
        "https://images.pexels.com/photos/939040/pexels-photo-939040.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260",
    },
    {
      id: 15,
      author: "tarek karam",
      views: 554,
      date: "18-5-2021",
      title: "Understanding and Addressing Global Hunger discussion includes",
      maincontent:
        "Today's discussion includes Dr. William Moseley, a DeWitt Wallace Professor of geography and director of the Food, Agriculture & Society Program at Macalester College in Saint Paul, Minnesota, and Dr. Barbara Burlingame, a professor of Nutrition and Food Systems at Massey University's College of Health. Both Dr. Moseley and Dr. Burlingame are members of the Steering Committee for the High Level Panel of Experts (HLPE) on food security and nutrition. They contributed to the FAO 's High Level Panel of Experts on Food Security and Nutrition's 15th Report.",
      content:
        "Today's discussion includes Dr. William Moseley, a DeWitt Wallace Professor of geography and director.",
      image:
        "https://images.pexels.com/photos/2792186/pexels-photo-2792186.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260",
    },
    {
      id: 16,
      author: "ahmed nour",
      views: 883,
      date: "17-6-2021",
      title: "All About Food Safety Culture In this podcast we discuss ",
      maincontent:
        "In this podcast, we discuss food safety culture, including how food safety culture is established, measured, and how they are expected to change in light of ongoing advancements in food science and policy. Our guests include Hugo Gutierrez, Global Food Safety and Quality Officer for Kerry, and Bob Gravani, Professor Emeritus of Food Science and Director Emeritus of the National Good Agricultural Practices (GAPs) Program at Cornell University.",
      content:
        "In this podcast, we discuss food safety culture, including how food safety culture is established, measured.",
      image:
        "https://images.pexels.com/photos/2961958/pexels-photo-2961958.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260",
    },
    {
      id: 17,
      author: "mohamed hassan",
      views: 727,
      date: "1-7-2021",
      title: " Food Industry Trends We're Predicting in 2021 podcast",
      maincontent:
        "John Ruff is the Chief Science and Technology Officer at IFT. During his 36-year career with Kraft and the former General Foods, he headed R&D for International and North American businesses where he successfully integrated the technical operations of numerous acquisitions, established global centers of expertise and led a worldwide advisory council consisting of external experts who have helped guide Kraft’s health and wellness initiatives. John received his M.A. in Biochemistry and a B.A. in Natural Sciences from the University of Cambridge in the United Kingdom.",
      content:
        "Today’s podcast features Kelly Hensel, IFT’s senior digital editor, and John Ruff, IFT’s Chief Science .",
      image:
        "https://images.pexels.com/photos/4067053/pexels-photo-4067053.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260",
    },
    {
      id: 18,
      author: "ahmed nour",
      views: 700,
      date: "27-7-2021",
      title: "A new approach to reducing salt while maintaining taste",
      maincontent:
        "The dangers of a high-sodium diet have been well documented, but a new technology devised by scientists from Washington State University could help reduce sodium in processed foods while retaining taste and texture The researchers used microwave assisted thermal sterilization (MATS) to kill pathogens without reducing flavor intensity, a common problem that occurs with retort, the current method used to help preserve food.",
      content:
        "The dangers of a high-sodium diet have been well documented, but a new technology devised by scientists.",
      image:
        "https://images.pexels.com/photos/936611/pexels-photo-936611.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260",
    },
  ],
};

mock.onGet("/blogs").reply(() => {
  return [200, { blogs: data.blogs }];
});

mock.onGet(/\/apps\/user\/users\/\d+/).reply((config) => {
  let userId = config.url.substring(config.url.lastIndexOf("/") + 1);

  // Convert Id to number
  userId = Number(userId);
  // window.console.log(userId);

  const userIndex = data.blogs.findIndex((e) => e.id === userId);
  const user = data.blogs[userIndex];
  if (user) return [200, user];
  return [404];
});

export default instance;
