import Image from 'next/image';
import styles from './ConfidentTrading.module.css';

const stats = [
  { value: '$5.4B+', label: 'Daily Volume' },
  { value: '2.1M+', label: 'Daily Volume' }, // Matches user prompt's second stat text
  { value: '600+', label: 'Platform Assets' }
];

const features = [
  'Clean, intuitive trading interface',
  'Real-time price tracking & alerts',
  'Deep liquidity across major pairs',
  'Cross-device sync for seamless experience'
];

export default function ConfidentTrading() {
  return (
    <section className={styles.section}>
      <div className={styles.content}>
        <h2 className={styles.title}>
          <span className={styles.titleWhite}>CONFIDENT</span>
          <br />
          <span className={styles.titleGrey}>CRYPTO TRADING</span>
        </h2>

        <p className={styles.description}>
          Built for performance and simplicity everything you need to trade with confidence
        </p>

        <div className={styles.featureList}>
          {features.map((feature, index) => (
            <div key={index} className={styles.featureItem}>
              <div className={styles.checkIcon}>
                <svg
                  className={styles.checkSvg}
                  viewBox="0 0 11 9"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M1 4.5L4 7.5L10 1.5"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <span className={styles.featureText}>{feature}</span>
            </div>
          ))}
        </div>

        <div className={styles.statsGrid}>
          {stats.map((stat, index) => (
            <div key={index} className={styles.statItem}>
              <span className={stat.value.includes('B') || stat.value.includes('M') || stat.value.includes('+') ? styles.statValue : styles.statValue}>
                {stat.value}
              </span>
              <span className={styles.statLabel}>{stat.label}</span>
            </div>
          ))}
        </div>

        <button className={styles.ctaButton}>
          GET STARTED
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

      <div className={styles.imageWrapper}>
        <Image
          src="/confident.png"
          alt="Confident Trading"
          width={592}
          height={668}
          className={styles.image}
          style={{ width: '100%', height: 'auto' }}
        />
      </div>
    </section>
  );
}
