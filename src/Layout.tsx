import { Link as _Link, NavLink as _NavLink, Outlet } from "react-router-dom";

export default function Layout() {
    return (
        <div>
            <nav className="bg-bg-primary text-text-primary px-4 flex justify-center items-center relative top-0">
                <div className="w-full h-16 flex justify-between items-center">
                    <div>
                        <Link to="/">Home</Link>
                    </div>
                    <div>
                        <NavLink to="/about">About</NavLink>
                    </div>
                </div>
            </nav>
            <Outlet />
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
        <_NavLink to={props.to} className={({ isActive/*, isPending, isTransitioning*/ }) =>
            [
                LINKS_CLASS,
                // isPending ? "pending" : "",
                isActive ? "bg-black" : "",
                // isTransitioning ? "transitioning" : "",
            ].join(" ")
        }>
            {props.children}
        </_NavLink>
    );
}