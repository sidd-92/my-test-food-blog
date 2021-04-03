import React from "react";
import FoodCard from "../../FoodCard/FoodCard";
class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      images: [
        {
          url:
            "https://food-blog-images-all.s3.ap-south-1.amazonaws.com/food-blog-images/all-recipies.png",
          category: "All Recipies",
        },
        {
          url:
            "https://food-blog-images-all.s3.ap-south-1.amazonaws.com/food-blog-images/all-beverages.png",
          category: "All Beverages",
        },
        {
          url:
            "https://food-blog-images-all.s3.ap-south-1.amazonaws.com/food-blog-images/breakfast.png",
          category: "Breakfast",
        },
        {
          url:
            "https://food-blog-images-all.s3.ap-south-1.amazonaws.com/food-blog-images/cakes.png",
          category: "Cakes",
        },
        {
          url:
            "https://food-blog-images-all.s3.ap-south-1.amazonaws.com/food-blog-images/chutney.png",
          category: "Chutney",
        },
        {
          url:
            "https://food-blog-images-all.s3.ap-south-1.amazonaws.com/food-blog-images/dal.png",
          category: "Dal",
        },
        {
          url:
            "https://food-blog-images-all.s3.ap-south-1.amazonaws.com/food-blog-images/kootu.png",
          category: "Kootu",
        },
        {
          url:
            "https://food-blog-images-all.s3.ap-south-1.amazonaws.com/food-blog-images/rasam.png",
          category: "Rasam",
        },
        {
          url:
            "https://food-blog-images-all.s3.ap-south-1.amazonaws.com/food-blog-images/rice.png",
          category: "Rice",
        },
      ],
    };
  }
  render() {
    return (
      <div className="lg:m-2">
        <div className="mx-auto text-center lg:text-left lg:max-w-5xl text-2xl font-bold mt-6 text-red-600">
          All Categories
        </div>
        <div className="mx-auto lg:max-w-5xl grid justify-items-center lg:justify-items-start grid-cols-1 lg:grid-cols-3 gap-y-6 my-5">
          {this.state.images.map((item, index) => {
            return (
              <FoodCard key={index} url={item.url} category={item.category} />
            );
          })}
        </div>
      </div>
    );
  }
}

export default Home;
