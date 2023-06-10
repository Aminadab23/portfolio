import React from "react";

const About = () => {
  return (
    <div
      name="about"
      className="w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white " 
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
      
          <p className=" text-4xl font-bold inline border-b-4 border-gray-500">
            About
          </p>
        </div>
        <p className="text-xl mt-20">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur
          exercitationem corporis blanditiis repudiandae dolorum libero impedit
          ipsum explicabo reprehenderit dicta soluta quod praesentium cumque
          quisquam voluptates dolorem minima perferendis necessitatibus, odit,
          optio debitis eius? Hic, pariatur. Non quidem animi, temporibus
          aspernatur quibusdam amet asperiores, reprehenderit cumque saepe,
          tempore provident facilis.
        </p>

        <br />
        <p className="text-xl">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa repellat
          sit, maiores incidunt error corrupti nesciunt dolores quidem id
          repellendus nulla, sapiente ullam, nihil nemo voluptates quisquam
          aliquid deleniti corporis esse autem. Laborum modi molestiae aliquid
          labore architecto praesentium magni eos quibusdam excepturi vitae?
          Sapiente, ut molestias! Earum, explicabo aliquid!
        </p>
      </div>
    </div>
  );
};

export default About;
