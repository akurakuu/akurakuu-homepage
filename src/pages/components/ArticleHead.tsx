export default function ArticleHead({
    title
}: {
    title: string
}) {
    return (
        <div className="w-full my-6 h-[32rem] flex flex-col justify-center items-center relative bg-cover bg-center rounded-xl" style={{
            backgroundImage: "url(/P1040541_retouch.jpg)",
        }}>
            <h1 className="text-5xl">{title}</h1>
        </div>
    );
}