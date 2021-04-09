import React from "react";
import FoodCard from "../../FoodCard/FoodCard";
import { ScrollTop } from "primereact/scrolltop";
import CategoryChip from "../../CategoryPill/CategoryPill";
class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      recipies: [
        {
          name:
            "chole bhature recipe | chhole bhature | chana bhatura | chola batura",
          url:
            "https://food-blog-images-all.s3.ap-south-1.amazonaws.com/recipies/chole-batura.png",
          category: "Lunch",
          id: 1,
        },
        {
          name:
            "pindi chole recipe | pindi chana masala | how to make chole pindi masala",
          url:
            "https://food-blog-images-all.s3.ap-south-1.amazonaws.com/recipies/chole-subji.png",
          category: "Lunch",
          id: 2,
        },
        {
          name:
            "dahi vada recipe | dahi bhalla recipe | soft dahi balle | dahi bade",
          url:
            "https://food-blog-images-all.s3.ap-south-1.amazonaws.com/recipies/dahivada.png",
          category: "Snacks",
          id: 3,
        },
        {
          name:
            "idli with cooked rice recipe | idli with left over rice recipe",
          url:
            "https://food-blog-images-all.s3.ap-south-1.amazonaws.com/recipies/idly.png",
          category: "Breakfast",
          id: 4,
        },
        {
          name:
            "kadai paneer recipe | karahi paneer | how to make kadai paneer gravy",
          url:
            "https://food-blog-images-all.s3.ap-south-1.amazonaws.com/recipies/kadai-veg.png",
          category: "Lunch",
          id: 5,
        },
        {
          name:
            "masala pav recipe | bhaji masala pav | mumbai street style pav masala",
          url:
            "https://food-blog-images-all.s3.ap-south-1.amazonaws.com/recipies/masala-pav.png",
          category: "Snacks",
          id: 6,
        },
        {
          name: "dosa recipe | plain dosa recipe | sada dosa recipe",
          url:
            "https://food-blog-images-all.s3.ap-south-1.amazonaws.com/recipies/plain-dosa.png",
          category: "Breakfast",
          id: 7,
        },
        {
          name: "ribbon pakoda recipe | ribbon murukku recipe | ola pakoda",
          url:
            "https://food-blog-images-all.s3.ap-south-1.amazonaws.com/recipies/ribbon-pakora.png",
          category: "Snacks",
          id: 8,
        },
      ],
      images: [
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
      ],
    };
  }
  render() {
    return (
      <>
        <div className="lg:m-4">
          <div>
            <div className="mx-auto text-center lg:text-left text-2xl font-bold text-red-600">
              Featured Recipies
            </div>
            <div className="mx-auto grid sm:justify-items-center grid-cols-1 lg:grid-cols-3 gap-y-2 sm:gap-y-6 my-5">
              {this.state.recipies.map((item, index) => {
                return (
                  <div className="flex bg-white border border-crimson rounded-md shadow-lg w-auto sm:w-28rem">
                    <img
                      src={item.url}
                      alt="food"
                      className="w-32 sm:w-auto object-cover"
                    />
                    <div className="relative p-2 sm:p-3">
                      <div className=" text-sm sm:text-base text-crimson hover:underline cursor-pointer">
                        {item.name}
                      </div>
                      <div className="absolute bottom-0 left-0 mb-2 lg:mb-3 ml-2">
                        <CategoryChip label={item.category} />
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
          <div>
            <div className="mx-auto text-center lg:text-left text-2xl font-bold mt-6 text-red-600">
              All Categories
            </div>
            <div className="mx-auto grid justify-items-center  grid-cols-1 lg:grid-cols-4 gap-y-6 my-5">
              {this.state.images.map((item, index) => {
                return (
                  <FoodCard
                    handleClick={(e) => {
                      this.props.history.push(`/${item.key}`);
                    }}
                    key={index}
                    url={item.url}
                    category={item.category}
                  />
                );
              })}
            </div>
          </div>
          <ScrollTop />
        </div>
      </>
    );
  }
}

export default Home;
