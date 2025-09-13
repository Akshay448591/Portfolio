import { Github, Linkedin, Twitter } from "lucide-react";

export default function Footer() {
  return (
    <footer className="w-full bg-gray-900 dark:bg-gray-800 text-white py-10 flex flex-col items-center space-y-4">
      
      {/* Social Icons */}
      <div className="flex space-x-6">
        <a href="https://github.com/Akshay448591" target="_blank" className="hover:scale-110 transition-transform">
          <Github className="w-6 h-6 text-yellow-400 hover:text-orange-500" />
        </a>
        <a href="https://www.linkedin.com/in/akshay-yadav-53211727a/" target="_blank" className="hover:scale-110 transition-transform">
          <Linkedin className="w-6 h-6 text-yellow-400 hover:text-orange-500" />
        </a>
        <a href="https://x.com/Arjunyy448591" target="_blank" className="hover:scale-110 transition-transform">
          <Twitter className="w-6 h-6 text-yellow-400 hover:text-orange-500" />
        </a>
      </div>

      {/* Tagline */}
      <p className="text-gray-400 text-center text-sm">
        Crafted with 💛 by Akshay Yadav
      </p>

      {/* Optional subtle gradient divider */}
      <div className="w-24 h-1 bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500 rounded-full mt-2"></div>
    </footer>
  );
}
