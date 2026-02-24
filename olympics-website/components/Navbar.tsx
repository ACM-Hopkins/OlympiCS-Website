//Home, Rules, Schedule, Scoreboard, Teams, Register

"use client";

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';

/*
export default function Navbar() {
    const pathname = usePathname();
    return (
    <nav className = "w-full bg-white shadow-md px-6 py-5 flex items-center justify-left">
        <Link href="/" className="text -xl font-bold text-gray-800">Hopkins OlympiCS</Link>
        <div className = "hidden md:flex gap-10">
            <Link href="/" className={pathname === "/" ? "text-black font-semibold" : "text-gray-500 hover:text-black"}>
                Home
            </Link>
            <Link href='/rules' className= {pathname === '/rules' ? "text-black font-semibold" : "text-gray-500 hover:text-black"}>
                Rules
            </Link>
            <Link href='/schedule' className = {pathname === '/schedule' ? "text-black font-semibold" : "text-gray-500 hover:text-black"}>
                Schedule
            </Link>
            <Link href='/scoreboard' className = {pathname === '/scoreboard' ? "text-black font-semibold" : "text-gray-500 hover:text-black"}>
                Scoreboard
            </Link>
            <Link href='/teams' className = {pathname === '/teams' ? "text-black font-semibold" : "text-gray-500 hover:text-black"}>
            Teams
            </Link>
            <Link href='/register' className = {pathname === '/register' ? "text-black font-semibold" : "text-gray-500 hover:text-black"}>
            Register
            </Link>
        </div>
    </nav>
    );
}
*/

export default function Navbar() {
    const pathname = usePathname();
    const [isOpen, setIsOpen] = useState(false);    

    const links = [
        {href: '/rules', label: "Rules"},
        {href: '/schedule', label: "Schedule"},
        {href: '/scoreboard', label: "Scoreboard"},
        {href: '/teams', label: "Teams"},
        {href: '/register', label: "Register"},
    ];

    const handleClick = () => {
        setIsOpen(!isOpen);
    };

    return (
        <nav className='w-full bg-white shadow-md px-6 py-5 flex items-end justify-left'>
            <Link href = '/' className='text -xl font-bold text-gray-800'>Hopkins OlympiCS</Link>
            <div className = "hidden md:flex gap-10">
                {links.map((link) => (
                    <Link
                        key = {link.href}
                        href = {link.href}
                        className= {pathname === link.href ? "text-black font-semibold" : "text-gray-500 hover:text-black"}>
                        {link.label}
                        </Link>
                ))}
            </div>
            <button className = "block md:hidden text-gray-900" onClick= {handleClick}>
                {isOpen ? "x" : "☰"}
            </button>

            {isOpen && (
                <div className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-white">

                {links.map((link) => (
                    <Link
                        key = {link.href}
                        href = {link.href} 
                        onClick={() => setIsOpen(false)}
                        className= {pathname === link.href ? "text-4xl font-semibold mt-6" : "text-3xl hover:text-black mt-6"}>
                        {link.label}
                        </Link>
                ))}
                 <button onClick={() => setIsOpen(false)}
                        className = "mt-6 text-gray-600 text-4xl hover:text-black transition"
                        >✕</button>
            </div>
            )}      
        </nav>
    );
    
}