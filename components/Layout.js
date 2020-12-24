import Header from "./Header";
import Head from "next/head";
import Footer from "./Footer";
const Layout = ({ children }) => {
  return (
    <div className="main">
      <Head>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.1/css/all.min.css"
          integrity="sha512-+4zCK9k+qNFUR5X+cKL9EIR+ZOhtIloNl9GIKS57V1MyNsYpYcUrUeQc9vNfzsWfV28IaLL3i96P9sdNyeRssA=="
          crossorigin="anonymous"
        />
      </Head>
      <Header />
      {children}
      <Footer />
    </div>
  );
};

export default Layout;
