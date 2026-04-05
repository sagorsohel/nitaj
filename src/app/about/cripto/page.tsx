import React from 'react';
import Image from 'next/image';
import styles from './page.module.css';
import CTASection from '@/app/why/choose/us/components/CTASection';

const steps = [
  {
    number: "01",
    titleLine1: "Create Your",
    titleLine2: "Account",
    description: "Sign up in seconds using your email or social login and access your trading dashboard instantly.",
    phoneImage: "/create-account-frame.png",
    iconImage: "/blue-bin.png",
    iconTop: "257px",
    iconLeft: "-132px",
  },
  {
    number: "02",
    titleLine1: "Verify Your",
    titleLine2: "Identity",
    description: "Complete a quick verification to secure your account and unlock full trading features.",
    phoneImage: "/Frame2.png",
    iconImage: "/icon2.png",
    iconTop: "250px",
    iconLeft: "-120px",
  },
  {
    number: "03",
    titleLine1: "Fund Your",
    titleLine2: "Wallet",
    description: "Deposit funds using your preferred payment method and get ready to trade anytime.",
    phoneImage: "/Frame3.png",
    iconImage: "/icon3.png",
    iconTop: "260px",
    iconLeft: "-140px",
  },
  {
    number: "04",
    titleLine1: "Start",
    titleLine2: "Trading",
    description: "Choose your assets, analyze the market, and execute trades with confidence.",
    phoneImage: "/Frame4.png",
    iconImage: "/icon4.png",
    iconTop: "240px",
    iconLeft: "-150px",
  },
];

const insightsData = [
  {
    id: 1,
    tag: "Crypto Guide",
    title: "Understanding the Basics of Crypto Trading",
    image: "/blog1.png",
  },
  {
    id: 2,
    tag: "Crypto Guide",
    title: "Top Crypto Market Trends to Watch This Year Of 2026",
    image: "/Card Image (1).png",
  },
  {
    id: 3,
    tag: "Crypto Guide",
    title: "Smart Strategies for Successful Crypto Trades",
    image: "/Card Image.png",
  },
];

export default function CriptoPage() {
  return (
    <div id="cripto-page" className={styles.container}>
      <h1 className={styles.mainTitle}>
        <span className={styles.titleWhite}>TRADE CRYPTO IN</span> <br />
        <span className={styles.titleGrey}>EASY STEPS</span>
      </h1>

      <div className={styles.stepsWrapper}>
        {steps.map((step) => (
          <div key={step.number} className={styles.card}>
            <div className={styles.leftCol}>
              <div className={styles.stepCircle}>
                <span className={styles.stepNumber}>{step.number}</span>
              </div>

              <div className={styles.content}>
                <h2 className={styles.headline}>
                  <span className={styles.headlineWhite}>{step.titleLine1}</span> <br />
                  <span className={styles.headlineGrey}>{step.titleLine2}</span>
                </h2>
                <p className={styles.description}>
                  {step.description}
                </p>
              </div>
            </div>

            <div className={styles.rightCol}>
              <div className={styles.mockupContainer}>
                {/* Phone Frame */}
                <Image
                  src={step.phoneImage}
                  alt={`${step.titleLine1} ${step.titleLine2} mockup`}
                  width={363}
                  height={732}
                  className={styles.phoneFrame}
                  priority={step.number === "01"}
                />
                {/* Floating Icon */}
                <div
                  className={styles.walletIconWrapper}
                  style={{ top: step.iconTop, left: step.iconLeft }}
                >
                  <Image
                    src={step.iconImage}
                    alt="floating icon"
                    width={270}
                    height={268}
                    className={styles.walletIcon}
                  />
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <section className={styles.insightsSection}>
        <h2 className={styles.mainTitle}>
          <span className={styles.titleWhite}>CRYPTO</span> <br />
          <span className={styles.titleGrey}>INSIGHTS</span>
        </h2>

        <div className={styles.insightsGrid}>
          {insightsData.map((blog) => (
            <div key={blog.id} className={styles.insightCard}>
              <div className={styles.cardHeader}>
                <span className={styles.tag}>{blog.tag}</span>
                <h3 className={styles.cardTitle}>{blog.title}</h3>
              </div>

              <button className={styles.readMoreBtn}>
                Read More
                <span className={styles.arrowIcon}>
                  <svg width="18" height="18" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M1 13L13 1M13 1H4.5M13 1V9.5" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </span>
              </button>

              <div className={styles.blogImageWrapper}>
                <Image
                  src={blog.image}
                  alt={blog.title}
                  width={341}
                  height={180}
                  className={styles.blogImage}
                />
              </div>
            </div>
          ))}
        </div>
      </section>
      <CTASection />
    </div>
  );
}
