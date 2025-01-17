import ArticleHead from "./components/ArticleHead";
import PageTitle from "./components/PageTitle";

export default function About() {
    return (
        <>
            <PageTitle title="About" />
            <ArticleHead title="About" />
            <section>
                <h2 className="text-2xl mb-4">
                    akurakuu
                </h2>
                <div>
                    <p>
                        He IS a software engineer.
                    </p>
                    <p>
                        He IS a web developer.
                    </p>
                </div>
            </section>
        </>
    )
}