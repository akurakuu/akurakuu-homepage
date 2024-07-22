import PageTitle from "./components/pageTitle";

export default function Activity() {
    return (
        <>
            <PageTitle title="Activity" />
            <div className="w-full flex justify-center">
                <div className="grid w-full grid-cols-[repeat(auto-fit,_minmax(16rem,_1fr))]">
                    <ActivityCard title="Activity 1" />
                    <ActivityCard title="Activity 2" />
                    <ActivityCard title="Activity 3" />
                </div>
            </div>
        </>
    )
}

function ActivityCard(props: { childlen?: React.ReactNode, title: string }) {
    return (
        <>
            <article className="bg-bg-secondary p-4 rounded-lg w-64 justify-center">
                <h3>{props.title}</h3>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos, quia?
                </p>
            </article>
        </>
    )
}