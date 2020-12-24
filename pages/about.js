import Head from "next/head";
import { Row, Col, Button, Container } from "react-bootstrap";

import Banner from "../components/Banner";

import Layout from "../components/Layout";

import styles from "../styles/about.module.css";

const about = () => {
  return (
    <Layout>
      <Head>
        <title>About</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Banner
          text={
            <>
              <div className="bannerContent">
                <h4 className={styles.title}>About Us</h4>
              </div>
            </>
          }
          size="cover"
          position="center"
          height="40vh"
          image="/images/resources/banner.jpg"
        />
      </main>
    </Layout>
  );
};

export default about;
