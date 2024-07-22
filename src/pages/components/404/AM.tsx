import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const SCREENS = {
    AM: (
        <div className="bg-black flex flex-col absolute top-0 left-0 right-0 bottom-0 p-2 font-mono">

            <div className="flex items-center gap-2">
                <div className="w-24 h-24 bg-red-600 hover:bg-emerald-700 transition-colors">
                </div>
                <div className="flex flex-col">
                    <div className="w-full text-5xl">
                        JAPAN
                    </div>
                    <div className="w-full text-5xl">
                        Gigatrends
                    </div>
                </div>
            </div>
            <div className="flex flex-col justify-between flex-1">
                <div>
                    <div className="my-4">
                        Version 3.141. Copyright 2024 akurakuu
                    </div>
                    <div className="flex flex-col">
                        <span>
                            2048M System Memory Passed
                        </span>
                        <span>
                            128K Memory Cache Passed
                        </span>
                        <span>
                            このページは存在しません
                        </span>
                    </div>
                </div>
                <div className="flex flex-col">
                    <span>
                        {"<1>"}キーを押すと継続します。
                    </span>
                    <span>
                        {"<2>"}キーを押すとHOMEを起動します。
                    </span>
                </div>
            </div>
        </div>
    ),
    LOADING: (
        <div className="absolute bg-sky-600 top-0 left-0 right-0 bottom-0 flex flex-col justify-center items-center">
            Loading...
            <div className="w-8 h-8 bg-white rounded-full flex justify-center items-center relative animate-spin"
                style={{
                    clipPath: "polygon(0% 0%, 50% 0%, 50% 50%, 0% 50%)",
                }}
            >
                <div className="w-6 h-6 bg-sky-600 rounded-full"></div>
            </div>
        </div>
    )
}

export default function AM() {
    const navigate = useNavigate();
    const [SCREEN, setSCREEN] = useState(SCREENS.AM);

    useEffect(() => {

        const sleep = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

        const blackout = async (step: number, sleeptime: number) => {

            const bo = document.getElementById("blackout");
            bo!.style.top = "0";
            bo!.style.bottom = "100%";
            for (let i = 0; i < 100; i += step) {
                bo!.style.bottom = `${100 - i}%`;
                await sleep(sleeptime);
            }
            bo!.style.bottom = "0%";
        }

        const unblackout = async (step: number, sleeptime: number) => {
            const bo = document.getElementById("blackout");
            bo!.style.bottom = "0";
            bo!.style.top = "0%";
            for (let i = 0; i < 100; i += step) {
                bo!.style.top = `${i}%`;
                await sleep(sleeptime);
            }
            bo!.style.top = "100%";
        }

        const eve = async (e: KeyboardEvent) => {
            if (e.key === "1") {

                await blackout(60, 10);
                setSCREEN(SCREENS.LOADING);
                await sleep(10);
                await unblackout(60, 10);

                await sleep(1000);
                navigate("/");
                await blackout(60, 10);
                await sleep(100);
            } else if (e.key === "2") {
                // navigate("/about");
                await blackout(60, 20);
                await sleep(100);

                navigate("/");
            }
        }
        document.addEventListener("keydown", eve);
        return () => {
            document.removeEventListener("keydown", eve);
        };
    }, []);

    return (
        <>
            {SCREEN}
            <div id="blackout" className="absolute z-10 left-0 right-0 bg-black"></div>
        </>
    );
}