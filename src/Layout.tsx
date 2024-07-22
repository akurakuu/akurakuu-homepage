import { Link as _Link, NavLink as _NavLink, Outlet } from "react-router-dom";

export default function Layout() {
    return (
        <div className="bg-bg-primary text-text-primary min-h-screen">
            <header className="bg-bg-secondary px-6 flex justify-center items-center sticky w-full top-0 z-50 backdrop-blur-sm bg-opacity-90">
                <div className="w-full h-16 flex justify-between items-center">
                    <div>
                        <Link to="/">
                            <img className="active:scale-90 rounded-full h-8 w-8" src="https://pbs.twimg.com/profile_images/1695005210639540224/Y7HWOn-B_400x400.jpg" alt="" />
                        </Link>
                    </div>
                    <nav className="flex gap-2">
                        <NavLink to="/about">About</NavLink>
                        <NavLink to="/activity">Activity</NavLink>
                    </nav>
                </div>
            </header>
            <main className="px-6 min-h-[calc(100vh-4rem)] relative">
                <Outlet />
            </main>
        </div>
    );
}

const LINKS_CLASS = "px-4 py-2 rounded-full";

function Link(props: { to: string, children: React.ReactNode, className?: string }) {
    return (
        <_Link to={props.to} className={
            [
                
                props.className
            ].join(" ")
        }>
            {props.children}
        </_Link>
    );
}

function NavLink(props: { to: string, children: React.ReactNode, className?: string }) {
    return (
        <_NavLink to={props.to} className={({ isActive, isPending, isTransitioning }) =>
            [
                LINKS_CLASS,
                props.className,
                "transition-colors duration-100 active:scale-90",
                isPending ? "bg-slate-600" : "",
                isActive ? "bg-indigo-600 bg-opacity-50" : "hover:bg-slate-700",
                isTransitioning ? "bg-orange-700" : "",
            ].join(" ")
        }>
            {props.children}
        </_NavLink>
    );
}