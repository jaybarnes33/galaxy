import Head from "next/head";
import { Row, Col, Button, Container } from "react-bootstrap";
import causes from "../causes";
import Banner from "../components/Banner";
import Cause from "../components/Cause";
import Contact from "../components/Contact";
import Address from "../components/Address";
import Layout from "../components/Layout";
import Point from "../components/Point";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <Layout>
      <Head>
        <title>Home</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Banner
          text={
            <>
              <div className="bannerContent">
                <div className={styles.socialIcons}>
                  <span>
                    <i className="fab fa-facebook"></i>
                  </span>
                  <span>
                    <i className="fab fa-whatsapp"></i>
                  </span>
                  <span>
                    <i className="fab fa-linkedin"></i>
                  </span>
                </div>
                <h4 className={styles.title}>
                  Do all <span>things</span> with <span>Kindness </span>
                </h4>

                <p className={styles.description}>
                  The little you give to support any of our causes goes a long
                  way in making our society a better place.
                </p>

                <Button className="btn btn-donate">Donate Now</Button>
              </div>
              <svg
                className={styles.wave}
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 1440 320"
              >
                <path
                  fill="#ffffff"
                  fill-opacity="1"
                  d="M0,256L48,229.3C96,203,192,149,288,154.7C384,160,480,224,576,218.7C672,213,768,139,864,128C960,117,1056,171,1152,197.3C1248,224,1344,224,1392,224L1440,224L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
                ></path>
              </svg>
            </>
          }
          size="cover"
          position="center"
          height="100vh"
          image="/images/hands.jpg"
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
      <section className={`${styles.section} ${styles.whatwedo}`}>
        <h2 className={styles.sectionHeading}>What we do</h2>
        <Container>
          <Row>
            <Col lg={6}>
              <Point
                title="Free surgery"
                content="he organization through its initiative, Hope Projects, has been providing free reconstructive surgery to members of the society, more than 230 lives have been impacted by this initiative. "
              />
              <Point
                title="Medical Assistance Program"
                content="The organization through this program, has provided medical relief and assistance to 7000 people who may not otherwise have access to healthcare. Through this program, the organization provides free screening on prostate cancer, Hepatitis B, Malaria, Diabetes and Eye Diseases.
                "
              />
              <Point
                title="Education & Cultural Programs"
                content="These programs are geared towards improving education, providing more educational opportunities and also promoting cultural awareness."
              />
            </Col>
            <Col lg={6} className={styles.video}>
              <Container>
                <iframe
                  width="310"
                  height="270"
                  src="https://www.youtube.com/embed/TFGrrL2hurM"
                  frameborder="0"
                  allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                  allowfullscreen
                ></iframe>
              </Container>
            </Col>
          </Row>
        </Container>
      </section>
      <section className={`${styles.section} ${styles.whatwedo}`}>
        <h2 className={styles.sectionHeading}>
          How to help? <span>See Below</span>
        </h2>
        <Container>
          <Row>
            <Col lg={6} className={styles.right}>
              <Point
                title="Donate"
                content="You can help by funding any of our current fundraising efforts. No amount is too small to save a life."
              />
              <Point
                title="Share Links"
                content="Don't have funds to donate?, kindly share our donation links on your social accounts for it to reach a wider audience."
              />
              <Point
                title="Create Awareness"
                content="You can also help by creating awareness on the need for better living conditions for everyone"
              />
            </Col>
          </Row>
        </Container>
      </section>
      <section className={`${styles.section}  ${styles.contact}`}>
        <h2 className={styles.sectionHeading}>
          Questions? <span>Contact Us</span>
        </h2>
        <Container>
          <Row>
            <Col lg={6} className={styles.right}>
              <Contact rows="6" />
            </Col>
            <Col lg={6} className={styles.right}>
              <div className={styles.addressWrapper}>
                <Address />
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </Layout>
  );
}
