import ArticleHead from "./components/ArticleHead";
import PageTitle from "./components/PageTitle";

export default function Home() {
    return (
        <>
            <PageTitle title="Home" />
            <ArticleHead title="Home" />
            <div>
                <article>
                    <section className="pb-4">
                        <h1 className="text-5xl">
                            Minecraft Server rules
                        </h1>
                        <div>
                            Create-new-ageage↑
                        </div>
                    </section>
                    <section className="pb-4">
                        <h2 className="text-3xl">
                            前提
                        </h2>
                        <div>
                            当Minecraftサーバーでは、基本的にこの文書に記された規則に従ってプレイすることとする。<br />
                            ルール違反であるかの最終的な判断は、当事者以外の参加者2人以上で集まって決定する。
                        </div>
                    </section>
                    <section className="pb-4">
                        <h2 className="text-3xl">
                            建築物
                        </h2>
                        <div>
                            <ul>
                                <li>
                                    建築物は、地面から30m以内に納めなければならない。31m以上の建築物は、事前申請と事後検査が必要。ただし、斜面の場合は、建築物が建てられる地面の一番高い部分を基準とする。
                                </li>
                                <li>
                                    建築物・その他設置物は、周囲の景観を明らかに壊すものであってはならない。
                                </li>
                                <li>
                                    建築物・その他設置物は管理者を明確にし、それに対して責任を負わなくてはならない。
                                </li>
                                <li>
                                    建築物・その他設置物が放置されている場合、許可なくそれを撤去することができる。
                                </li>
                            </ul>
                        </div>
                    </section>
                    <section className="pb-4">
                        <h2 className="text-3xl">
                            プレイヤー
                        </h2>
                        <div>
                            <ul>
                                <li>
                                    他のプレイヤーを意図的に物理的・精神的に傷つけるける行為は行ってはいけない。
                                </li>
                            </ul>
                        </div>
                    </section>
                    <section className="pb-4">
                        <h2 className="text-3xl">
                            事業
                        </h2>
                        <div>
                            <ul>
                                <li>
                                    事業を行う際は、その内容を明確にし、事業の責任者を明確にしなくてはならない。
                                </li>
                                <li>
                                    事業を行う際は、他のプレイヤーやその他の生物に害を及ぼすことがないようにしなくてはならない。
                                </li>
                                <li>
                                    その事業に関係しないプレイヤーは、事業に対して理由なく妨害してはならない。
                                </li>
                                <li>
                                    事業において、他のプレイヤーにサービスを提供することがある場合、そのサービスに見返りを求める場合は、その内容を明確にしなくてはならない。
                                </li>
                            </ul>
                        </div>
                    </section>
                    <section className="pb-4">
                        <h2 className="text-3xl">
                            違反者への対応
                        </h2>
                        <div>
                            違反者には、違反内容に応じて以下の対応を行う。
                            <ul>
                                <li>
                                    注意
                                </li>
                                <li>
                                    厳重注意
                                </li>
                                <li>
                                    没収
                                </li>
                                <li>
                                    強制労働
                                </li>
                                <li>
                                    死刑
                                </li>
                                <li>
                                    BAN☆
                                </li>
                            </ul>
                        </div>
                    </section>
                </article>
            </div>
        </>
    )
}