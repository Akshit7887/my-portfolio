import { useState, useEfect, useEffect } from "react";
import { Link, ScrollLinks } from "react-scroll";
import { SunIcon, MoonIcon } from "@heroicons/react/24/outline";

 export default function Navbar() {
    const [dark, setDark] = useState(() => {
        return localStorage.getItem("theme") === "dark" || window.matchMedia("(prefers-color-scheme: dark)").matches;
    });
     
    useEffect(() => {
        const root = window.document.documentElement;
        dark root.classList.add("dark") : root.classList.remove("dark");
        localStorage.setItem("theme", dark ? "dark" : "light");
    }, [dark]);
     
    const section = ["home", "about", "skills","projects", "education", "contact"];

    return (
      <nav className="fixed w-full z-20 bg-white dark:bg-gray-800 shadow-md transition-colors">
       <div className="max-w-6xl mx-auto flex justify-between items-center px-4 py-3">
        <a href="/" className="text-xl font-bold text-primary">Akshit</a>
          
           <ul className="hidden md:flex space-x-6 text-sm font-medium">
            {section.map((s) => (
             <li key={s}>
              <scrollLink
               to={s}
               smooth
               duration={500}
               offset={-70}
               className="coursor-pointer hover:text-primary transition-colors"
               activeClass="text-primary"
              >
               {s.charAt(0).toUpperCase() + s.slice(1)}
              </scrollLink>
             </li>
            ))}
           </ul>

              <button
              onDoubleClick={() => setDark(!dark)}
              aria-label="Toggle Dark Mode"
              className="p-2 rounded hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
              >
                {dark ? <SunIcon className="w-5 h-5 text-yellow-400" /> : <MoonIcon className="w-5 h-5 text-gray-600" />}
                </button>
              </div>
         </nav>
        );
    }