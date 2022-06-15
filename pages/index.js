import Head from 'next/head';
import Header from "../components/Header/Header";
import Image from "next/image"
import {AiOutlineSearch} from 'react-icons/ai';
import {FaMicrophone} from 'react-icons/fa';

export default function Home() {
    return (
        <div className="container-fluid mx-auto  justify-center">
            <Head>
                <title>Coup Search</title>
                <meta name="description" content="A Google clone with Next.js" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Header />
            <form className="flex flex-col items-center mt-40">
                <Image
                    width="300"
                    objectFit="cover"
                    height="100"
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/1200px-Google_2015_logo.svg.png"
                />
                <div className="flex w-full mt-5 mx-auto max-w-[90%] border border-gary-200 hover:shadow-lg focus-within:shadow-lg px-5 py-3 rounded-full items-center sm:max-w-xl lg:max-w-2xl">
                    <AiOutlineSearch className="h-5 text-gray-500 mr-3" />
                    <input
                        // ref={searchInputRef}
                        type="text"
                        className="flex-grow focus:outline-none"
                    />
                    <FaMicrophone className="h-5" />
                </div>
                <div className="flex flex-col sm:flex-row w-[50%] space-y-2 mt-8 sm:space-y-0 sm:space-x-4 justify-center">
                    <button className="btn">
                        Google Search
                    </button>
                    <button className="btn">
                        I&apos;m Feeling Lucky
                    </button>
                </div>
            </form>
        </div>
             
  
    )
}
