import React from "react";
import image1 from "../../assets/hero/women.png";
import image2 from "../../assets/hero/shopping.png";
import image3 from "../../assets/hero/sale.png";
import Slider from "react-slick";

const imageList = [
  {
    id: 1,
    img: image1,
    title: "Up to 50% off on all Men's Wear",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum dolorem soluta facere, mollitia quasi maiores fuga ipsam sed molestiae nostrum!",
  },
  {
    id: 2,
    img: image2,
    title: "Up to 60% off on all Men's Wear",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum dolorem soluta facere, mollitia quasi maiores fuga ipsam sed molestiae nostrum!",
  },
  {
    id: "3",
    img: "image3",
    title: "Up to 70% off on all Men's Wear",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum dolorem soluta facere, mollitia quasi maiores fuga ipsam sed molestiae nostrum!",
  },
];
const Hero = () => {
  return (
    <div className="relative overflow-hidden min-h-[550px] sm:min-h-[650px] bg-gray-100 flex justify-center items-center  dark:bg-gray-950 dark:text-white duration-200">
      {/* background pattern */}
      <div className="h-[700px] w-[700px] bg-primary/40 absolute -top-1/2 right-0 rounded-3xl rotate-45 -z-[8]"></div>
      {/* hero section */}
      <div className="container pb-8 sm:pb-0"> 
        <Slider>
          
        </Slider>
        <div>
          <div className="grid grid-cols-1 sm:grid-cols-2">
            {/* text content section */}
            <div className="flex flex-col justify-center gap-4 pt-12 sm:pt-0 text-center sm:text-left order-2 sm-order-1 relative bg-zinc-100">
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold">Lorem ipsum dolor sit amet.</h1>
              <p className="text-sm">Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam animi optio, architecto iste maiores reprehenderit ut suscipit nostrum aperiam mollitia.</p>
              <div>
                <button className="bg-gradient-to-r from-primary to-secondary hover:scale-105 duration-200 text-white py-2 px-4 rounded-full">Order Now</button>
              </div>
            </div>
            {/* image section */}
            <div className="order-1 sm-order-2">
              <div className="relative z-10">
                <img src={image1} alt="image 1" className="w-[300px] h-[300px] sm:h-[450px] sm:w-[450px] sm:scale-125 object-contain mx-auto " />
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
