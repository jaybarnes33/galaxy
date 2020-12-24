import Head from "next/head";
import { Row, Col, Button, Container } from "react-bootstrap";
import causes from "../causes";
import Banner from "../components/Banner";
import Cause from "../components/Cause";

import Layout from "../components/Layout";

import styles from "../styles/causes.module.css";

export default function Home() {
  return (
    <Layout>
      <Head>
        <title>Causes</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Banner
          text={
            <>
              <div className="bannerContent">
                <h4 className={styles.title}>Our Causes</h4>
              </div>
            </>
          }
          size="cover"
          position="center"
          height="40vh"
          image="/images/resources/bg.jpeg"
        />
      </main>
      <section
        className={`${styles.section} ${styles.causes} ${styles.featured}`}
      >
        <h2 className={styles.sectionHeading}>Featured Causes</h2>
        <Container>
          <div className={styles.campaignList}>
            <section className={styles.campaignItems}>
              {causes
                .reverse()
                .slice(0, 4)
                .map((cause) => (
                  <div className={styles.flexItem} key={cause._id}>
                    <Cause cause={cause} />
                  </div>
                ))}
            </section>
          </div>
        </Container>
      </section>
    </Layout>
  );
}
