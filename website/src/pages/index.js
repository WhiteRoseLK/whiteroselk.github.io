import React, { useEffect, useRef, useState } from "react";

import Link from "@docusaurus/Link";
import useBaseUrl from "@docusaurus/useBaseUrl";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";

import styles from "./styles.module.css";
import SocialLinks from "./components/_SocialLinks";

function Home() {
  const context = useDocusaurusContext();
  const { siteConfig = {} } = context;

  const mainRef = useRef(null);
  const [isLoading, setIsLoading] = useState(true);
  const [headerHeight, setHeaderHeight] = useState(1536);
  const [bannerHeight, setBannerHeight] = useState(256);

  useEffect(() => {
    const tempHeaderHeight = Math.max(384, window.innerHeight);
    setHeaderHeight(tempHeaderHeight);
    setBannerHeight(Math.max(256, tempHeaderHeight / 2));
    setIsLoading(false);
    mainRef.current.hidden = false;
  }, []);

  return (
    <Layout title="Home" description={siteConfig.tagline}>
      <header className={styles.heroBanner} style={{ minHeight: headerHeight }}>
        <div
          className={styles.heroBannerWrapper}
          style={{
            minHeight: bannerHeight,
            display: isLoading ? "none" : "block",
          }}
        >
          <p>Plop, my name is:</p>
          <h3 className="text-success" style={{display: "inline-block"}}> Mathieu </h3>
          <h2 className="text-danger" style={{display: "inline-block"}}> WhiteRose </h2>
          <h3 className="text-success" style={{display: "inline-block"}}> Bannwarth </h3>
          <p>
          I'm
          </p>
          <ul>
            <li>💻 A Cybersecurity IT engineer</li>
            <li>🚩 A CTF Player</li>
            <li>🧠 A Multipotential</li>
            <li>🧗 A Climber</li>
            <li>So much more…</li>
          </ul>
          <p>This is my <a href="https://whiteroselk.github.io/">Blog Space.</a> 🌱.</p>
          <p>This is where I learn in public 📚.</p>
          <SocialLinks />
          <p>
            <a href="#main">
              <button className="border-0 rounded p-2 pl-4 pr-0 bg-primary-900 hover:bg-primary-800 transition text-white text-lg cursor-pointer">
                Qui suis-je ?<span className="pl-1 animate-pulse">▎</span>
              </button>
            </a>
          </p>
        </div>
      </header>
      <main id="main" ref={mainRef} hidden={true}>
        <div className={styles.aboutHeader}>
          <h2 className="border-0 border-b-4 border-solid border-success">
            Qui suis-je ?
          </h2>
        </div>
        <div className={styles.about}>
          <div>
            <img
              className={styles.aboutProfilePic}
              src={useBaseUrl("img/sticker.png")}
            />
          </div>
          <div className={styles.aboutText}>
            <h2>Plop</h2>
            <p>
              🇫🇷 Je m'appel Mathieu et je suis un ingénieur, administrateur Système et Réseaux 
              splécialisé en CyberSécurité.
            </p>
            <p>
              📚 Je suis autodidact, vous retrouverez ici certains de mes {" "}<Link to={useBaseUrl("projects/")}> projets </Link>{" "}
              ainsi que {" "}<Link to={useBaseUrl("projects/")}>mon répertoire de documentations et d'articles</Link>{" "}.
            </p>
            <p>
              🧑‍🏫 A mes heures perdues, il m'arrive de
              {" "}<a href="https://www.superprof.fr/ingenieur-cybersecurite-propose-services-souhaiteraient-initier-programmation-python-java.html">
              donner des cours
              </a>{" "} de programmations ou de science.
            </p>
          </div>
        </div>
        <section className={styles.directory}>
          <div className="container">
            <h3>On continue ?</h3>
            <nav className="pagination-nav">
              <div className="pagination-nav__item">
                <Link className="pagination-nav__link" to={useBaseUrl("docs/")}>
                  <div className="pagination-nav__sublabel">Par ici</div>
                  <div className="pagination-nav__label">Les docs</div>
                </Link>
              </div>
              <div className="pagination-nav__item">
                <Link
                  className="pagination-nav__link"
                  to={useBaseUrl("projects/")}
                >
                  <div className="pagination-nav__sublabel">Par la</div>
                  <div className="pagination-nav__label">Les projets</div>
                </Link>
              </div>
            </nav>
            <nav className="pt-4 pagination-nav">
              {/* <div className="pagination-nav__item pagination-nav__item--next">
                <a
                  className="pagination-nav__link"
                  href={useBaseUrl("pdf/resume.pdf")}
                >
                  <div className="pagination-nav__sublabel">Download</div>
                  <div className="pagination-nav__label">My resume</div>
                </a>
              </div> */}
            </nav>
          </div>
        </section>
      </main>
    </Layout>
  );
}

export default Home;
