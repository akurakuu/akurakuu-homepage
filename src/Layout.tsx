import { Link as _Link, NavLink as _NavLink, Outlet } from "react-router-dom";

export default function Layout() {
    return (
        <div className="bg-bg-primary text-text-primary min-h-screen">
            <nav className="bg-bg-secondary px-6 flex justify-center items-center sticky top-0">
                <div className="w-full h-16 flex justify-between items-center">
                    <div>
                        <Link to="/">Home</Link>
                    </div>
                    <div className="flex gap-2">
                        <NavLink to="/about">About</NavLink>
                        <NavLink to="/activity">Activity</NavLink>
                    </div>
                </div>
            </nav>
            <main>
                <Outlet />
            </main>
        </div>
    );
}

const LINKS_CLASS = "px-4 py-2 rounded-full";

function Link(props: { to: string, children: React.ReactNode }) {
    return (
        <_Link to={props.to} className={LINKS_CLASS}>
            {props.children}
        </_Link>
    );
}

function NavLink(props: { to: string, children: React.ReactNode }) {
    return (
        <_NavLink to={props.to} className={({ isActive, isPending, isTransitioning }) =>
            [
                LINKS_CLASS,
                "transition-colors",
                isPending ? "bg-slate-600" : "",
                isActive ? "bg-indigo-600 bg-opacity-50" : "hover:bg-slate-700",
                isTransitioning ? "bg-orange-700" : "",
            ].join(" ")
        }>
            {props.children}
        </_NavLink>
    );
}