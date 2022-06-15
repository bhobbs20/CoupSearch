import Head from 'next/head';
import Header from "../components/Header/Header";

export default function Home() {
    return (
        <div className="container-fluid mx-auto">
            <Head>
                <title>Coup Search</title>
                <meta name="description" content="A Google clone with Next.js" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Header />
            <main className="container mx-auto">
                <h1 className="text-3xl font-bold underline">
                    Coup Search
                </h1>
            </main>
        </div>
    )
}
