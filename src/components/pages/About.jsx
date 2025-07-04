import React from "react";
import WebDevLogo from "../logos/Web-Development.png";
import WebDesLogo from "../logos/Web-Design.png";
import MbALogo from "../logos/mobile-App.png";
import PhotographyLogo from "../logos/Photography.png";
import SfDevLogo from "../logos/Software-Development.png";

function About() {
  return (
  <>
    <div className="bg-[#00f] min-h-screen w-full flex items-center justify-center px-4 sm:px-8 pb-10 pt-10 relative z-1 ">
      <div className="text-white max-w-5xl">
        <h1 className="text-3xl sm:text-5xl font-bold mb-6  font-serif ">About Me</h1>
        <p className="text-base sm:text-xl leading-relaxed text-justify">
          Passionate MERN Stack Developer with a strong foundation in MongoDB,
          Express.js, React.js, and Node.js, dedicated to crafting high-performance,
          scalable, and user-friendly web applications. I specialize in front-end
          development with React, ensuring seamless user experiences, optimized
          performance, and responsive designs.
          <br /><br />
          With hands-on experience in building full-stack applications, I thrive on
          solving complex challenges and turning innovative ideas into functional,
          dynamic products. Whether it's creating modern e-commerce platforms,
          developing RESTful APIs, or integrating advanced UI/UX principles, I bring
          a detail-oriented and solution-driven approach to every project.
          <br /><br />
          My expertise includes state management (Redux, Context API),
          component-driven architecture, performance optimization, and responsive
          design using Tailwind CSS, Material UI, and Bootstrap. I have experience
          in server-side logic with Node.js and Express.js, implementing
          authentication strategies (JWT, OAuth), database management with MongoDB,
          and working with cloud platforms like Firebase and AWS.
          <br /><br />
          Beyond coding, I am passionate about staying ahead of industry trends,
          continuously learning new technologies, and collaborating with teams to
          build innovative solutions. I take pride in writing clean, maintainable
          code and following best practices to ensure scalability, security, and
          efficiency.
          <br /><br />
          My job is to build your website so that it is functional and user-friendly
          but at the same time attractive. Moreover, I add a personal touch to your
          product and make sure that it is eye-catching and easy to use. My aim is
          to bring across your message and identity in the most creative way. I’ve
          created web designs for many well-known brands.
        </p>
         <h1 className="text-3xl sm:text-5xl font-bold mb-6  font-serif pt-20 pb-20">What I'm Doing </h1>

 <div className="overflow-hidden whitespace-nowrap  py-4 ">
      <div className="animate-marquee inline-block">
        <img
          src={WebDevLogo}
          alt="Web Development"
          className="h-15 inline-block mx-5"
        />
        <img
          src={SfDevLogo}
          alt="Software Development"
          className="h-15 inline-block mx-4"
        />
        <img
          src={WebDesLogo}
          alt="Web Design"
          className="h-15 inline-block mx-5"
        />
        <img
          src={MbALogo}
          alt="Mobile App Development"
          className="h-15 inline-block mx-5"
        />
        <img
          src={PhotographyLogo}
          alt="Photography"
          className="h-15 inline-block mx-5"
        />
      </div>
    </div>
         
      </div>
    </div>
  </>
  );
}

export default About;
