"use client"
import React from 'react';
import { usePathname } from "next/navigation";


const NavBar = () => {
  const pathname = usePathname();

    return(
        <div>
           <div className="flex flex-1 md:justify-end md:justify-center md:my-2 my-5">
      
      
      <nav className="pointer-events-auto md:block">
        <ul className="flex rounded-full  bg-sky-50 px-3 text-lg font-medium text-zinc-800 dark:bg-zinc-900 dark:text-white shadow-lg shadow-zinc-800/5 ring-1 ring-zinc-900/5 backdrop-blur">
          <li><a className={pathname === "/" ? "text-sky-500 relative block px-3 md:px-7 md:px-7 py-2 transition hover:text-sky-500 dark:hover:text-sky-400" : "relative block px-3 md:px-7 py-2 transition hover:text-sky-500 dark:hover:text-sky-400"} href="/#top">About<span className="absolute inset-x-1 -bottom-px h-px bg-gradient-to-r from-sky-500/0 via-sky-500/40 to-sky-500/0 dark:from-sky-400/0 dark:via-sky-400/40 dark:to-sky-400/0"></span></a></li>
          <li><a className={pathname === "/resume" ? "text-sky-500 relative block px-3 md:px-7 py-2 transition hover:text-sky-500 dark:hover:text-sky-400" : "relative block px-3 md:px-7 py-2 transition hover:text-sky-500 dark:hover:text-sky-400"} href="/resume#top">Resume<span className="absolute inset-x-1 -bottom-px h-px bg-gradient-to-r from-sky-500/0 via-sky-500/40 to-sky-500/0 dark:from-sky-400/0 dark:via-sky-400/40 dark:to-sky-400/0"></span></a></li>
          <li><a className={pathname === "/project" ? "text-sky-500 relative block px-3 md:px-7 py-2 transition hover:text-sky-500 dark:hover:text-sky-400" : "relative block px-3 md:px-7 py-2 transition hover:text-sky-500 dark:hover:text-sky-400"} href="/project#top">Projects<span className="absolute inset-x-1 -bottom-px h-px bg-gradient-to-r from-sky-500/0 via-sky-500/40 to-sky-500/0 dark:from-sky-400/0 dark:via-sky-400/40 dark:to-sky-400/0"></span></a></li>
          <li><a className={pathname === "/contact" ? "text-sky-500 relative block px-3 md:px-7 py-2 transition hover:text-sky-500 dark:hover:text-sky-400" : "relative block px-3 md:px-7 py-2 transition hover:text-sky-500 dark:hover:text-sky-400"} href="/contact#top">Contact<span className="absolute inset-x-1 -bottom-px h-px bg-gradient-to-r from-sky-500/0 via-sky-500/40 to-sky-500/0 dark:from-sky-400/0 dark:via-sky-400/40 dark:to-sky-400/0"></span></a></li>

          </ul>
      </nav>
    </div>
        </div>
    )
}

export default NavBar;
