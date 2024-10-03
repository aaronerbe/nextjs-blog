import Head from 'next/head';
import Layout, { siteTitle } from '../components/layout';
import utilStyles from '../styles/utils.module.css';

export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>Hello, I'm Aaron.  I'm a student learning Software Development.  I also have a degree in Electircal Engineering and 17 years managing and building global Engineering teams.</p>
        <p>
          (This is a sample website)
        </p>
      </section>
    </Layout>
  );
}