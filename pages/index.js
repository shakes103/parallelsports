import Head from 'next/head';
//import styles from "../styles/Home.module.css";
import Hero from '../components/hero';
import Layout from '../components/Layout';
import MainOne from '../components/mainOne';
import MainThree from '../components/mainThree';
import MainTwo from '../components/mainTwo';

export default function Home() {
    return (
        <>
        <Head>
        <title>Home page</title>
        <meta name="description" content="Parallel Sports Coaching" />
        <link rel="icon" href="/favicon.ico" />
        </Head>
        <Layout>
        <Hero />
        <main>
            <MainOne />
            <MainTwo />
            <MainThree />
        </main>
        </Layout>
        </>
    );
}