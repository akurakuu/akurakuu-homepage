export default function PageTitle({
    title
}: {
    title: string
}) {
    return (
        <div className="w-full h-[32rem] flex flex-col justify-center items-center">
            <h1 className="text-5xl">{title}</h1>
        </div>
    );
}