import React from "react";
import Contact from "./Contact";

function Blog() {
  return (
    <>
      <div className="bg-black min-h-screen w-full flex items-center justify-center px-4 sm:px-8 pt-15 flex-col relative z-1 ">
        <div className="text-white max-w-5xl mt-1 ">
          <div className="sticky top-0 z-1 bg-black rounded-lg shadow-lg ">
            <h1 className="text-3xl sm:text-5xl font-bold mb-6 font-serif text-white text-center">
              Blog 
            </h1>
            <p className="text-base sm:text-xl leading-relaxed text-justify pb-10 text-white">
              Welcome to my blog! Here, I share insights, tutorials, and updates
              on web development, technology trends, and personal projects. Stay
              tuned for regular posts that aim to inspire and educate fellow
              developers and tech enthusiasts.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Blog;
