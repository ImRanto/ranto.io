import Link from "next/link";
import React from "react";
import { FaLinkedin, FaFacebook, FaGithub, FaTwitter } from "react-icons/fa";

const Navbar = () => {
  return (
    <div className="bg-gray-50 dark:bg-[#0f172a] text-blue-50">
      <div className="container mx-auto flex justify-between items-center py-4 px-6">
        <Link href={"#"}>
          <h1 className="text-xl font-bold uppercase">Ranto</h1>
        </Link>

        <nav>
          <ul className="flex gap-8">
            <li className="hover:text-cyan-300 cursor-pointer">Home</li>
            <li className="hover:text-cyan-300 cursor-pointer">About</li>
            <li className="hover:text-cyan-300 cursor-pointer">Project</li>
            <li className="hover:text-cyan-300 cursor-pointer">Contact</li>
          </ul>
        </nav>

        <div className="flex gap-4">
          <a href="#" className="hover:text-cyan-300">
            <FaLinkedin size={20} />
          </a>
          <a href="#" className="hover:text-cyan-300">
            <FaFacebook size={20} />
          </a>
          <a href="#" className="hover:text-cyan-300">
            <FaGithub size={20} />
          </a>
          <a href="#" className="hover:text-cyan-300">
            <FaTwitter size={20} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
