import React from "react";
import { useNavigate } from "react-router-dom";
import Experience from "./Experience";

function Resume() {
 
  return (
    <>
    <div>
       
      <div className="bg-black min-h-screen w-full flex items-center justify-center px-4 sm:px-8 pt-15  relative z-1 ">
        <div className="text-white max-w-5xl mt-1 ">
          <div className="sticky top-0 z-1 bg-black rounded-lg shadow-lg ">
            <h1 className="text-3xl sm:text-5xl font-bold mb-6   font-serif ">
              My Education 📚
            </h1>
            <p className="text-base sm:text-xl leading-relaxed text-justify pb-10">
              I began my educational journey at the National Council of
              Educational Research and Training, where I completed my Kerala
              Higher Secondary (HSE) from 2016 to 2018. After that, I pursued my
              Bachelor of Mass Communication and Journalism at the University of
              Calicut, graduating in 2021. Currently, I am expanding my
              expertise in the field of technology, specializing in Software
              Development in the MERN Stack at Bridgeon Solution LLP for the
              2024 - 2025 period. This phase marks my transition into a more
              technical and development-focused career, equipping me with the
              skills to build scalable and modern web applications.
            </p>
          </div>
          <div className="flex justify-center items-center pt-10">
            <section className="bg-black text-white py-16 px-4 sm:px-10 w-full max-w-7xl">
              {/* Bridgeon Section */}
              <div className="flex flex-col sm:flex-row gap-10 items-center sm:items-start mb-16">
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

              {/* Calicut University Section */}
              <div className="flex flex-col sm:flex-row gap-10 items-center sm:items-start mb-16">
                {/* Image */}
                <div className="w-full sm:w-1/2 flex flex-col items-center">
                  <img
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSLdSbx5ypsNLNO_ZJPlcWKfeY24Y6eFU89Fs25mp6JvH1oV90ajZ3lgw8681_AaXAYpl8&usqp=CAU"
                    alt="Calicut University"
                    className="rounded-md shadow-lg h-50 w-50 object-cover"
                  />
                  <h1 className="text-xl font-semibold mt-2 text-center">
                    Calicut University
                  </h1>
                </div>

                {/* Text */}
                <div className="w-full sm:w-1/2 flex flex-col gap-4">
                  <div className="flex flex-wrap gap-3">
                    <button className="px-5 py-2 border border-blue-600 rounded-full">
                      BA Mass Communication and Journalism
                    </button>
                    <button className="px-5 py-2 border border-blue-600 rounded-full">
                      2018-2021
                    </button>
                    <button className="px-5 py-2 border border-blue-600 rounded-full">
                      CM College Wayanad
                    </button>
                  </div>
                  <h2 className="text-3xl font-semibold">BA MCJ</h2>
                  <p>
                    University of Calicut is a renowned institution in Kerala.
                    The BA Mass Communication and Journalism program builds
                    strong media knowledge, communication theory, and practical
                    application.
                  </p>
                </div>
              </div>

              {/* HSE Section */}
              <div className="flex flex-col sm:flex-row gap-10 items-center sm:items-start">
                {/* Image */}
                <div className="w-full sm:w-1/2 flex flex-col items-center">
                  <img
                    src="https://media.licdn.com/dms/image/v2/C560BAQE5jVSsLoO7KQ/company-logo_200_200/company-logo_200_200/0/1638689556563?e=2147483647&v=beta&t=b_Qe512YZp0j3eadip-sa814EaCOEB5wHF1T_ZEfX8Q"
                    alt="Kerala HSE"
                    className="rounded-md shadow-lg h-50 w-50 object-cover"
                  />
                  <h1 className="text-xl font-semibold mt-2 text-center max-w-60">
                    Kerala Higher Secondary (HSE)
                  </h1>
                </div>

                {/* Text */}
                <div className="w-full sm:w-1/2 flex flex-col gap-4">
                  <div className="flex flex-wrap gap-3">
                    <button className="px-5 py-2 border border-blue-600 rounded-full">
                      Kerala HSE
                    </button>
                    <button className="px-5 py-2 border border-blue-600 rounded-full">
                      Wayanad
                    </button>
                    <button className="px-5 py-2 border border-blue-600 rounded-full">
                      2016-2018
                    </button>
                  </div>
                  <h2 className="text-3xl font-semibold">Humanities</h2>
                  <p>
                    Kerala HSE is a pre-university program preparing students
                    for higher education and professional development through a
                    balanced curriculum.
                  </p>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
      <Experience />
      </div>
    </>
  );
}

export default Resume;
