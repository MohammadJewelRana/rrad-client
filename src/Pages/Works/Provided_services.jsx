import React from "react";
import { FaAndroid, FaBullhorn, FaDatabase, FaEye, FaGamepad, FaWater } from "react-icons/fa";
import { Link } from "react-router-dom";

const Provided_services = () => {
  return (
    <div className="mt-24">
      <div className="mb-16">
        <h4>WE PROVIDE</h4>
        <h1 className="font-bold text-4xl my-4">SERVICES</h1>
        <h6 className="text-[12px]">That you will need for your business</h6>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <Link to="/portfolio">
          <div className="cursor-pointer ">
            <FaEye className="mx-auto text-red-600 text-4xl hover:text-white transition-transform duration-300 ease-in-out"></FaEye>
            <p className="font-bold text-xl my-4">AR/VR</p>
            <p className="text-[13px]">
              Our AR/VR services blend physical and digital worlds for engaging
              experiences in gaming, education, healthcare, retail, and real
              estate. We develop cutting-edge solutions for training,
              simulation, and entertainment.
            </p>
          </div>
        </Link>

        <Link to="/portfolio">
          <div className="cursor-pointer ">
            
            <FaGamepad className="mx-auto text-red-600 text-4xl hover:text-white transition-transform duration-300 ease-in-out"></FaGamepad>
            <p className="font-bold text-xl my-4">GAME DEVELOPMENT</p>
            <p className="text-[13px]">
              We offer game development services to create engaging and
              interactive experiences. Our team specializes in designing and
              building high-quality games across various platforms.
            </p>
          </div>
        </Link>
        <Link to="/portfolio">
          <div className="cursor-pointer ">
            
            <FaAndroid className="mx-auto text-red-600 text-4xl hover:text-white transition-transform duration-300 ease-in-out"></FaAndroid>
            <p className="font-bold text-xl my-4">CROSS PLATFORM APPLICATION</p>
            <p className="text-[13px]">
              We offer cross-platform application development services to build
              seamless and versatile apps that work across multiple devices and
              platforms. We utilize cutting-edge technology to deliver
              high-performance solutions that meet the needs of businesses and
              individuals.
            </p>
          </div>
        </Link>

        <Link to="/portfolio">
          <div className="cursor-pointer ">
            
            <FaWater className="mx-auto text-red-600 text-4xl hover:text-white transition-transform duration-300 ease-in-out"></FaWater>
            <p className="font-bold text-xl my-4">SIMULATION</p>
            <p className="text-[13px]">
              Our simulation development services create virtual models to
              simulate real-life scenarios. We provide solutions for various
              industries to train, educate, and test real-world scenarios in a
              controlled environment.
            </p>
          </div>
        </Link>

        <Link to="/portfolio">
          <div className="cursor-pointer ">
         
            <FaDatabase className="mx-auto text-red-600 text-4xl hover:text-white transition-transform duration-300 ease-in-out"></FaDatabase>
            <p className="font-bold text-xl my-4">CLOUD SOLUTION</p>
            <p className="text-[13px]">
              We offer cloud solutions to help businesses store, manage, and
              access their data and applications securely and efficiently. Our
              services enable companies to optimize their operations and improve
              their workflow with the flexibility and scalability of the cloud.
            </p>
          </div>
        </Link>

        <Link to="/portfolio">
          <div className="cursor-pointer ">
          
            <FaBullhorn className="mx-auto text-red-600 text-4xl hover:text-white transition-transform duration-300 ease-in-out"></FaBullhorn>
            <p className="font-bold text-xl my-4">BUSINESS SOLUTION</p>
            <p className="text-[13px]">
              Our business solutions help companies optimize their operations
              and improve productivity through technology. We offer a range of
              services to address different businesses’ unique needs and
              challenges.
            </p>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Provided_services;
