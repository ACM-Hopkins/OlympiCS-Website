//Home, Rules, Schedule, Scoreboard, Teams, Register
import Link from 'next/link';


export default function Navbar() {
    return (
    <nav className = "w-full bg-white shadow-md px-6 py-5 flex items-center justify-between">
        <Link href="/" className="text -xl font-Geist text-gray-800">Hopkins OlympiCS</Link>
        <div className = "flex gap-6">
            <Link href="/" className="text-blue-600 hover:text-black transition">Home</Link>
            <Link href="/about" className = "text-blue-600 hover:text-black transition">About</Link>
        </div>
    </nav>
    );
}