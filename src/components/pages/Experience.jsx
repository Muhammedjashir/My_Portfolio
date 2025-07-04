import React from "react";

function Experience() {
  return (
    <>
      <div className="bg-black min-h-screen w-full flex items-center justify-center px-4 sm:px-8 pt-15 relative z-1 ">
        <div className="text-white max-w-5xl mt-1 ">
          <div className="sticky top-0 z-1 bg-black rounded-lg shadow-lg ">
            <h1 className="text-3xl sm:text-5xl font-bold mb-6 font-serif ">
              My Experience 💼
            </h1>
            <p className="text-base sm:text-xl leading-relaxed text-justify pb-10">
              I’m a MERN Full Stack Developer at Imit Park Ltd (2025–Present),
              where I build scalable, user-friendly web applications using
              MongoDB, Express.js, React.js, and Node.js. My work focuses on
              performance optimization and seamless UI/UX. Previously, I worked
              at Bridgeon Solution LLP (2024–2025), enhancing my skills in
              RESTful APIs, authentication (JWT, OAuth), and responsive design.
              I’m passionate about modern web development and committed to
              building efficient, impactful digital solutions.
            </p>
          </div>
          <div className="flex justify-center items-center pt-10">
            <section className="bg-black text-white py-16 px-4 sm:px-10 w-full max-w-7xl">
              {/* Calicut University Section */}
              <div className="flex flex-col sm:flex-row gap-10 items-center sm:items-start mb-16">
                {/* Image */}
                <div className="w-full sm:w-1/2 flex flex-col items-center">
                  <img
                    src="https://media.licdn.com/dms/image/v2/D560BAQE5yNBzehh7TQ/company-logo_200_200/company-logo_200_200/0/1693471426181/imitpark_logo?e=2147483647&v=beta&t=FY0Dpgh3cgyppOt5VTcb_0PiFqOpIE90bdhwoOHzxz8"
                    alt="IMit Park Ltd"
                    className="rounded-md shadow-lg h-50 w-50 object-cover"
                  />
                  <h1 className="text-xl font-semibold mt-2 text-center">
                    IMit Park Ltd
                  </h1>
                </div>

                {/* Text */}
                <div className="w-full sm:w-1/2 flex flex-col gap-4">
                  <div className="flex flex-wrap gap-3">
                    <button className="px-5 py-2 border border-blue-600 rounded-full">
                      MERN Full Stack Developer
                    </button>
                    <button className="px-5 py-2 border border-blue-600 rounded-full">
                      2025-Present
                    </button>
                    <button className="px-5 py-2 border border-blue-600 rounded-full">
                      IMIT Park Thrissur
                    </button>
                  </div>
                  <h2 className="text-3xl font-semibold">
                    MERN Full Stack Developer
                  </h2>
                  <p>
                    At Imit Park Ltd, I develop and maintain high-performance
                    MERN stack web applications, collaborating with teams to
                    deliver seamless user experiences and optimize performance.
                  </p>
                </div>
              </div>

              {/* Bridgeon Section */}
              <div className="flex flex-col sm:flex-row gap-10 items-center sm:items-start mb-5">
                {/* Image */}
                <div className="w-full sm:w-1/2 flex flex-col items-center">
                  <img
                    src="https://media.licdn.com/dms/image/v2/D560BAQFd_sweBAqmOw/company-logo_200_200/company-logo_200_200/0/1737465575519?e=2147483647&v=beta&t=yEoBRJPlCj-ofvW7JCe7EvLVt5ho3XDH6dy1oAOQYBo"
                    alt="Bridgeon Solution LLP"
                    className="rounded-md shadow-lg h-50 w-50 object-cover"
                  />
                  <h1 className="text-xl font-semibold mt-2 text-center">
                    Bridgeon Solution LLP
                  </h1>
                </div>

                {/* Text */}
                <div className="w-full sm:w-1/2 flex flex-col gap-4">
                  <div className="flex flex-wrap gap-3">
                    <button className="px-5 py-2 border border-blue-600 rounded-full">
                      2024-2025
                    </button>
                    <button className="px-5 py-2 border border-blue-600 rounded-full">
                      Malappuram
                    </button>
                    <button className="px-5 py-2 border border-blue-600 rounded-full">
                      Software Development
                    </button>
                  </div>
                  <h2 className="text-3xl font-semibold">MERN Stack</h2>
                  <p>
                    Bridgeon Solution LLP is a leading software development
                    company specializing in scalable digital solutions. During
                    my time there, I gained hands-on experience in modern web
                    technologies and full-stack development.
                  </p>
                </div>
              </div>
            </section>
          </div>
          <div className="flex justify-center items-center pb-10">
            <a href="/resume.pdf" download>
              <button className="px-5 py-2 border border-blue-600 rounded-full cursor-pointer hover:bg-blue-600 hover:text-white transition-colors duration-1000 font-semibold">
                Click Here to View My Resume
              </button>
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export default Experience;
