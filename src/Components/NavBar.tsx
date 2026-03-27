import { NavLink } from "react-router-dom";
import { useState } from "react";

export default function NavBar() {
  const [open, setOpen] = useState(false);

  const linkClass = ({ isActive }: { isActive: boolean }) =>
    `transition ${
      isActive
        ? "text-white drop-shadow-[0_0_6px_white]"
        : "hover:text-white/80"
    }`;

  return (
    <div className="fixed top-0 left-0 w-full flex justify-center z-20">
      
      <div className="mt-4 w-full max-w-[90%] flex justify-between items-center">

        {/* Desktop Nav */}
        <div
          className="
          hidden sm:flex
          px-8 py-3
          rounded-full
          border border-white/30
          bg-white/5
          backdrop-blur-md
          gap-8
          text-white text-sm
          shadow-[0_0_20px_rgba(255,255,255,0.2)]
          mx-auto
          "
        >
          <NavLink to="/" className={linkClass}>Home</NavLink>
          <NavLink to="/skills" className={linkClass}>Skills</NavLink>
          <NavLink to="/projects" className={linkClass}>Projects</NavLink>
          <NavLink to="/intro" className={linkClass}>About</NavLink>
        </div>

        {/* Mobile Hamburger */}
        <div className="sm:hidden ml-auto">
          <button
            onClick={() => setOpen(!open)}
            className="text-white text-2xl"
          >
            ☰
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div
          className="
          absolute top-16 w-[90%]
          rounded-xl
          border border-white/30
          bg-white/5
          backdrop-blur-md
          flex flex-col items-center gap-6 py-6
          text-white
          shadow-[0_0_20px_rgba(255,255,255,0.2)]
          sm:hidden
          "
        >
          <NavLink to="/" className={linkClass} onClick={() => setOpen(false)}>
            Home
          </NavLink>

          <NavLink to="/skills" className={linkClass} onClick={() => setOpen(false)}>
            Skills
          </NavLink>

          <NavLink to="/projects" className={linkClass} onClick={() => setOpen(false)}>
            Projects
          </NavLink>

          <NavLink to="/intro" className={linkClass} onClick={() => setOpen(false)}>
            About
          </NavLink>
        </div>
      )}
    </div>
  );
}