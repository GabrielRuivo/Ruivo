"use client";

export default function Header() {
  return (
    <div className="flex py-5 text-white items-center justify-around w-full bg-header dark:bg-header-dark transition-colors duration-200">
      <div>
        <span className="text-2xl font-semibold">Ruivo</span>
        <span className="text-sm font-thin">.com</span>
      </div>

      <div>
        <ul className="flex gap-x-10 font-thin">
          <li><a href="#first-section">Home</a></li>
          <li><a href="#second-section">Technologies</a></li>
          <li><a href="#third-section">Experiência</a></li>
          <li>Projects</li>
          <li>Testmonials</li>
        </ul>
      </div>

      <div>
        <button 
          className="
            py-2 
            px-6 
            rounded-3xl 
            duration-1000
            bg-gradient-to-r from-pink to-light-orange 
            hover:bg-gradient-to-r hover:from-pink-hover hover:to-light-orange-hover
          " >
          <span className="text-black text-sm font-semibold" >LET'S TALK</span>
        </button>
      </div>
    </div>
  );
}
