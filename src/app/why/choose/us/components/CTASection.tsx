import Image from 'next/image';
import styles from './CTASection.module.css';

export default function CTASection() {
  return (
    <section className={styles.section}>
      <div className={styles.card}>
        <Image
          src="/cta-top.png"
          alt="Decorative ornament top"
          width={380}
          height={380}
          className={styles.topImage}
        />
        
        <h2 className={styles.title}>
          <span className={styles.titleWhite}>JOIN MILLIONS OF</span>
          <br />
          <span className={styles.titleGrey}>TRADERS WORLDWIDE</span>
        </h2>

        <p className={styles.description}>
          Built for performance and simplicity everything you need to trade with confidence
        </p>

        <button className={styles.ctaButton}>
          EXPLORE MARKETS
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

        <Image
          src="/cta-bottom.png"
          alt="Decorative ornament bottom"
          width={500}
          height={500}
          className={styles.bottomImage}
        />
      </div>
    </section>
  );
}
