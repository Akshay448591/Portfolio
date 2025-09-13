import { Github, Linkedin, Twitter } from "lucide-react";
import myimage from "../assets/profile.jpeg";
export default function Hero() {
  return (
    <section
      id="home"
      className="relative w-full min-h-screen flex flex-col md:flex-row items-center justify-center bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white px-8 md:px-16"
    >
      {/* Left: Text */}
      <div className="flex-1 flex flex-col justify-center items-start space-y-6 md:pr-12">
        <h1 className="text-4xl md:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500 animate-gradient-x">
          Hi, I’m Akshay
        </h1>
        <p className="text-lg md:text-xl text-gray-300">
          I’m a MERN stack developer creating modern, responsive, and interactive web applications.
        </p>

        {/* Social Icons */}
        <div className="flex space-x-4 mt-4">
          <a href="https://github.com/Akshay448591" target="_blank" className="p-2 rounded-full bg-gray-800 hover:bg-gray-700 transition shadow-md">
            <Github className="w-5 h-5 text-yellow-400 hover:text-orange-400 transition" />
          </a>
          <a href="https://www.linkedin.com/in/akshay-yadav-53211727a/" target="_blank" className="p-2 rounded-full bg-gray-800 hover:bg-gray-700 transition shadow-md">
            <Linkedin className="w-5 h-5 text-yellow-400 hover:text-orange-400 transition" />
          </a>
          <a href="https://x.com/Arjunyy448591" target="_blank" className="p-2 rounded-full bg-gray-800 hover:bg-gray-700 transition shadow-md">
            <Twitter className="w-5 h-5 text-yellow-400 hover:text-orange-400 transition" />
          </a>
        </div>
      </div>

      {/* Right: Profile Image */}
      <div className="flex-1 flex justify-center md:justify-end mt-10 md:mt-0">
        <div className="relative w-64 h-64 md:w-72 md:h-72 rounded-full overflow-hidden border-4 border-gradient-to-tr from-yellow-400 via-orange-500 to-red-500 shadow-xl animate-pulse-slow">
          <img
            src={myimage}
            alt="Profile"
            className="w-full h-full object-cover rounded-full"
          />
        </div>
      </div>
    </section>
  );
}
