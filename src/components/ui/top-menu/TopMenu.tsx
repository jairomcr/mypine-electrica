"use client";
import React from "react";
import Link from "next/link";



export default function TopMenu() {
    //const [collapseShow, setCollapseShow] = React.useState("hidden");
    
  return (
    <nav className="relative flex flex-wrap items-center justify-between px-2 py-3 navbar-expand-lg bg-blue-400 ">
      <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
        <div className="w-full relative flex justify-between lg:w-auto px-4 lg:static lg:block lg:justify-start">
          <Link className="text-sm font-bold leading-relaxed inline-block mr-4 py-2 whitespace-no-wrap uppercase text-white" href="/">
            Inicio
          </Link>
          <button className="cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none" type="button">
            <span className="block relative w-6 h-px rounded-sm bg-white"></span>
            <span className="block relative w-6 h-px rounded-sm bg-white mt-1"></span>
            <span className="block relative w-6 h-px rounded-sm bg-white mt-1"></span>
          </button>
        </div>
        <div className="flex lg:flex-grow items-center" id="example-navbar-info">
          <ul className="flex flex-col lg:flex-row list-none ml-auto">
            <li className="nav-item">
              <Link href="/category/men"  className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75">
                Categories
              </Link>
            </li>
            <li className="nav-item">
              <Link href="/protfolio" className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75" >
                Profile
              </Link>
            </li>
            <li className="nav-item">
              <Link href="/servicies" className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75">
                Services
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}