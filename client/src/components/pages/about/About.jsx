import React from "react";

function About() {
  return (
    <>
      <div className=" bg-center bg-cover relative   bg-fixed bg-[url('/imgs/3.jpg')]">
        <div className="bg-gray-500 bg-opacity-50  ">
          <div className="flex md:p-10 flex-col items-center justify-center   min-h-screen">
            <div className="w-full max-w-screen-lg p-8 bg-white rounded shadow-md">
              <h1 className="font-bold text-white text-7xl pb-3 pt-10 font-two    bg-[url('/imgs/1.jpg')]">
                About us
              </h1>
              <p className=" font-extrabold text-2xl  font-three mt-1 text-[#507240]"> YumYum</p>
              <hr className="mb-10 md:w-52 shadow-2xl" />
              <p className="mb-8">
                Hello and welcome to my food recipe website! My name is John and
                I'm a food enthusiast. I love cooking and trying out new
                recipes, and I created this website to share my passion with
                others.
              </p>
              <p className="mb-8">
                On this website, you'll find a variety of delicious recipes from
                around the world. I believe that food brings people together and
                can help us learn about other cultures and traditions. Whether
                you're an experienced chef or just starting out, there's
                something for everyone here.
              </p>
              <p className="mb-8">
                I hope you enjoy my recipes and find inspiration for your own
                cooking adventures. If you have any questions or suggestions,
                please don't hesitate to contact me!
              </p>
              <p className="mb-8">Happy cooking!</p>
              <img
                src="/imgs/3.jpg"
                alt="Cooking"
                className="w-full rounded shadow-md p-5"
              />{" "}
              <img
                src="/icons/icon.png"
                alt="icon"
                className="w-16  py-10 mx-auto"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default About;
