"use client"
import React from "react";
import Link from "next/link";
import { IoMdMenu, IoMdClose } from "react-icons/io"
import { useState } from "react";


interface NavItem {
label: string;
page: string;
}

const NAV_ITEMS: Array<NavItem> = [
{
label: "Home",
page: "",
},
{
label: "Search",
page: "search",
},
];

export default function Navbar() {
const [navbar, setNavbar] = useState(false)

return (
<header className="w-full mx-auto px-4 sm:px-20 fixed top-0 z-50 shadow bg-blue-200 dark:bg-zinc-800 dark:border-b dark:border-stone-600">
    <div className="justify-between md:items-center md:flex ">
    <div>
        <div className="flex items-center justify-between py-3 md:py-5 md:block">
        <Link href="/">
            <div className="container flex items-center space-x-2">
            <div className="mb-6 md:mb-0">
              <a href="https://flowbite.com/" className="flex items-center">
                  <img src="https://flowbite.com/docs/images/logo.svg" className="h-8 mr-3" alt="FlowBite Logo" />
                  <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Re-Kindle</span>
              </a>
          </div>
            </div>
        </Link>
        <div className="md:hidden">
            <button
            className="p-2 text-gray-700 rounded-md outline-none focus:border-gray-400 focus:border"
            onClick={() => setNavbar(!navbar)} 
            >
            {navbar ? <IoMdClose size={30} /> : <IoMdMenu size={30} />}
            </button>
        </div>
    </div>
    </div>

    <div>
        <div className={`flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 ${
            navbar ? "block" : "hidden"
        }`}>
        <div className="items-center justify-center space-y-8 md:flex md:space-x-6 md:space-y-0">
            {NAV_ITEMS.map((item, idx) => (
            <Link key={idx} href={`/${item.page}`}>
                <p onClick={() => setNavbar(!navbar)} className="block transition ease-in-out delay-100 hover:scale-110 duration-200 underline lg:inline-block hover:no-underline text-xl text-neutral-900 dark:text-neutral-100 hover:-translate-x-0.5 cursor-pointer">
                {item.label}
                </p>
            </Link>
            ))}
        </div>
        </div>
    </div>
    </div>
</header>
);
}