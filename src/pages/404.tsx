import AM from "./components/404/AM";

const DEGISNS: { [key: string]: JSX.Element } = {
    AM: <AM />,
}

export default function Page404() {
    const pages = Object.keys(DEGISNS);
    const page = pages[Math.floor(Math.random() * pages.length)];

    return DEGISNS[page];
}
