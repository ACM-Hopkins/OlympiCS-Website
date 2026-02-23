//Home, Rules, Schedule, Scoreboard, Teams, Register

"use client";

import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Navbar() {
    const pathname = usePathname();
    return (
    <nav className = "w-full bg-white shadow-md px-6 py-5 flex items-center justify-left">
        <Link href="/" className="text -xl font-bold text-gray-800">Hopkins OlympiCS</Link>
        <div className = "flex gap-10">
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
