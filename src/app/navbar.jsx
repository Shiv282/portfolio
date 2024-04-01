const NavBar = () => {
    return(
        <div>
           <div className="flex flex-1 justify-end md:justify-center my-2">
      
      
      <nav className="pointer-events-auto hidden md:block">
        <ul className="flex rounded-full bg-white/90 px-3 text-lg font-medium text-zinc-800 shadow-lg shadow-zinc-800/5 ring-1 ring-zinc-900/5 backdrop-blur">
          <li><a className="relative block px-7 py-2 transition text-teal-500 dark:text-teal-400" href="/">About<span className="absolute inset-x-1 -bottom-px h-px bg-gradient-to-r from-teal-500/0 via-teal-500/40 to-teal-500/0 dark:from-teal-400/0 dark:via-teal-400/40 dark:to-teal-400/0"></span></a></li>
          <li><a className="relative block px-7 py-2 transition hover:text-teal-500 dark:hover:text-teal-400" href="/education">Education</a></li>
          <li><a className="relative block px-7 py-2 transition hover:text-teal-500 dark:hover:text-teal-400" href="/projects">Projects</a></li>
          <li><a className="relative block px-7 py-2 transition hover:text-teal-500 dark:hover:text-teal-400" href="/uses">Uses</a></li>
        </ul>
      </nav>
    </div>
        </div>
    )
}

export default NavBar;