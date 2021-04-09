import React from "react";
const images = [
  {
    url:
      "https://food-blog-images-all.s3.ap-south-1.amazonaws.com/food-blog-images/all-recipies.png",
    category: "All Recipies",
    key: "allrecipies",
  },
  {
    url:
      "https://food-blog-images-all.s3.ap-south-1.amazonaws.com/food-blog-images/all-beverages.png",
    category: "All Beverages",
    key: "allbeverages",
  },
  {
    url:
      "https://food-blog-images-all.s3.ap-south-1.amazonaws.com/food-blog-images/breakfast.png",
    category: "Breakfast",
    key: "breakfast",
  },
  {
    url:
      "https://food-blog-images-all.s3.ap-south-1.amazonaws.com/food-blog-images/cakes.png",
    category: "Cakes",
    key: "cakes",
  },
  {
    url:
      "https://food-blog-images-all.s3.ap-south-1.amazonaws.com/food-blog-images/chutney.png",
    category: "Chutney",
    key: "chutney",
  },
  {
    url:
      "https://food-blog-images-all.s3.ap-south-1.amazonaws.com/food-blog-images/subji.png",
    category: "Subjis",
    key: "subji",
  },
  {
    url:
      "https://food-blog-images-all.s3.ap-south-1.amazonaws.com/food-blog-images/dal.png",
    category: "Dal",
    key: "dal",
  },
  {
    url:
      "https://food-blog-images-all.s3.ap-south-1.amazonaws.com/food-blog-images/kootu.png",
    category: "Kootu",
    key: "kootu",
  },
  {
    url:
      "https://food-blog-images-all.s3.ap-south-1.amazonaws.com/food-blog-images/rasam.png",
    category: "Rasam",
    key: "rasam",
  },
  {
    url:
      "https://food-blog-images-all.s3.ap-south-1.amazonaws.com/food-blog-images/rice.png",
    category: "Rice",
    key: "rice",
  },
  {
    url:
      "https://food-blog-images-all.s3.ap-south-1.amazonaws.com/food-blog-images/sweets.png",
    category: "Sweets",
    key: "sweets",
  },
  {
    url:
      "https://food-blog-images-all.s3.ap-south-1.amazonaws.com/food-blog-images/chat.png",
    category: "Chaat",
    key: "chaat",
  },
  {
    url:
      "https://food-blog-images-all.s3.ap-south-1.amazonaws.com/food-blog-images/indian-breads.png",
    category: "Indian Breads",
    key: "indian-breads",
  },
  {
    url: null,
    category: "View All Categories",
    key: "all",
  },
];
class Categories extends React.Component {
  render() {
    return <div className="h-screen">Categories</div>;
  }
}

export default Categories;
