import { useMemo } from "react"
import { Link, useLocation } from "react-router-dom"

import { Heart, Home, Table2 } from "lucide-react"

import Logo from "./logo"
import { cn } from "@/lib/utils"

const Sidebar = () => {
    const location = useLocation()
    const routes = useMemo(() => [
        {
            label: "Home",
            path: "/",
            icon: Home
        },
        {
            label: "Boards",
            path: "/boards",
            icon: Table2
        },
        {
            label: "Favorites",
            path: "/favorites",
            icon: Heart
        }
    ], [])

    return (
        <aside className="flex flex-col w-64 h-screen px-5 py-8 overflow-y-auto bg-white border-r rtl:border-r-0 rtl:border-l dark:bg-gray-900 dark:border-gray-700">
            <Logo />

            <div className="flex flex-col justify-between flex-1 mt-6">
                <nav className="flex-1 -mx-3 space-y-3 ">
                    <div className="relative mx-3">
                        <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                            <svg className="w-5 h-5 text-gray-400" viewBox="0 0 24 24" fill="none">
                                <path d="M21 21L15 15M17 10C17 13.866 13.866 17 10 17C6.13401 17 3 13.866 3 10C3 6.13401 6.13401 3 10 3C13.866 3 17 6.13401 17 10Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
                            </svg>
                        </span>

                        <input type="text" className="w-full py-1.5 pl-10 pr-4 text-gray-700 bg-white border rounded-md dark:bg-gray-900 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:ring-opacity-40 focus:outline-none focus:ring" placeholder="Search" />
                    </div>

                    {routes.map((route) => (
                        <Link
                            key={route.label}
                            to={route.path}
                            className={cn(
                                "w-full flex items-center justify-start gap-2 font-medium px-3 py-2 rounded-md transition-colors duration-200",
                                location.pathname === route.path ? "bg-blue-100 text-blue-600" : "hover:bg-gray-200 text-gray-500 "
                            )}
                        >
                            <route.icon className="w-5 h-5" />
                            <span className="text-sm">{route.label}</span>
                        </Link>
                    ))}
                </nav>
            </div>
        </aside>
    )
}

export default Sidebar