import React, { useState } from "react";

const Portfolio = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const projects = [
    {
      title: "Many Dynamic Websites",
      category: "Websites",
      url: "https://example.com/many-dynamic-websites",
      image: "https://via.placeholder.com/300",
    },
    {
      title: "E-Commerce Website",
      category: "Websites",
      url: "https://e-commerce-converse-7bko.vercel.app/",
      image:
        "https://mir-s3-cdn-cf.behance.net/project_modules/fs/7912df109175455.5fce39ed33ce4.png",
    },
    {
      title: "E-Commerce Static",
      category: "Websites",
      url: "https://mini-project-khaki-five.vercel.app/",
      image:
        "https://thefwa.com/dyn/resources/Case_Model_Case/slide1/0/300/1457955164/538_span12/Converse_FWA01-NTSP.jpg",
    },
    {
      title: "Furniture Static",
      category: "Websites",
      url: "https://voicence-task-qdnn.vercel.app/",
      image:
        "https://images01.nicepagecdn.com/page/10/72/website-template-preview-107234.jpg",
    },
    {
      title: "Company Website for Imit",
      category: "Websites",
      url: "https://imit-zvyr.vercel.app/",
      image:
        "https://weblium.com/blog/wp-content/uploads/2019/01/image12-1000x542.png",
    },
    {
      title: "arab related company",
      category: "Websites",
      url: "https://arabbia-com-5o4d.vercel.app/",
      image:
        "https://media.cntravellerme.com/photos/6568886c4e664d4bc1517d49/16:9/w_2560%2Cc_limit/1267688711",
    },
  ];

  const filteredProjects =
    selectedCategory === "All"
      ? projects
      : projects.filter(
          (project) =>
            project.category.toLowerCase() === selectedCategory.toLowerCase()
        );

  return (
    <>
      <div className="min-h-screen bg-white text-black py-10 px-4 sm:px-8 pt-20 relative z-1 ">
        <h1 className="text-3xl sm:text-5xl font-bold text-center mb-8 font-serif">
          Portfolio
        </h1>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-10">
          {["All", "Applications", "Websites"].map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-5 py-2 border border-blue-600 rounded-full font-semibold transition hover:text-blue-600 ${
                selectedCategory === cat ? "text-blue-600" : ""
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </div>
      </div>
    </>
  );
};

const ProjectCard = ({ title, category, url, image }) => (
  <a
    href={url}
    target="_blank"
    rel="noopener noreferrer"
    className="relative text-white rounded-lg p-4 shadow-md flex flex-col items-center cursor-pointer group hover:scale-105 transition-transform bg-gray-100"
  >
    {/* Hover Overlay */}
    <div className="w-full h-32 bg-gray-300 rounded-xl flex items-center justify-center text-center absolute inset-0 transition-opacity group-hover:opacity-0 z-10">
      <div className="text-sm text-black">
        <p className="font-semibold">Hover to View</p>
        <p>This site is private.</p>
      </div>
    </div>

    {/* Background Image */}
    <div
      className="w-full h-32 rounded-xl bg-cover bg-center opacity-0 group-hover:opacity-100 transition-opacity absolute inset-0 z-0"
      style={{ backgroundImage: `url(${image})` }}
    ></div>

    <div className="z-20 mt-36 text-center">
      <h3 className="text-lg font-semibold text-gray-600">{title}</h3>
      <p className="text-sm text-gray-400">{category}</p>
    </div>
  </a>
);

export default Portfolio;
