import Image from 'next/image';
import { Montserrat } from 'next/font/google';
import styles from './page.module.css';
import Features from './components/Features';
import ConfidentTrading from './components/ConfidentTrading';
import CTASection from './components/CTASection';
import ThemeToggle from './components/ThemeToggle';

const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['300', '400', '600', '700', '800'],
  display: 'swap',
});

export default function WhyChooseUsPage() {
  return (
    <>
      <div className={`${styles.heroSection} ${montserrat.className}`}>
        <div className={styles.heroContent}>
          <h1 className={styles.mainTitle}>
            <span className={styles.titleWhite}>THE SMARTER WAY TO</span>
            <br />
            <span className={styles.titleGrey}>TRADE CRYPTO</span>
          </h1>
          <p className={styles.subtitle}>
            Built for performance and simplicity—everything you
            <br />
            need to trade with confidence
          </p>

          <div className={styles.buttonContainer}>
            <button className={styles.ctaButton}>
              START TRADING
              <div className={styles.iconCircle}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M7 17L17 7" />
                  <path d="M7 7h10v10" />
                </svg>
              </div>
            </button>
          </div>
        </div>

        <div className={styles.imageContainer}>
          <Image
            src="/ethereum-bitcoin-conversion-3d-illustration 1.png"
            alt="Crypto Trading"
            width={1200}
            height={800}
            className={styles.heroImage}
            priority
          />
        </div>
        <div className={styles.bottomBar}></div>
      </div>
      <Features />
      <ConfidentTrading />
      <CTASection />
      <ThemeToggle />
    </>
  );
}
