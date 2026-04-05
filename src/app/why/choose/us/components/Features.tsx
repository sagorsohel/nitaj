import Image from 'next/image';
import styles from './Features.module.css';

const featureList = [
  {
    icon: '/3d-yellow-lightning-bolt-icon 1.svg',
    titleWhite: 'High-Speed',
    titleGrey: 'Trading',
    text: 'Instant order execution with real-time market responsiveness.',
  },
  {
    icon: '/security-shield-icon-with-padlock-checkmark-protected-data-concept 1.svg',
    titleWhite: 'Advanced',
    titleGrey: 'Security',
    text: 'Multi-layer protection to keep your funds and data safe.',
  },
  {
    icon: '/gear-setting-icon-minimalist-3d-render 1.svg',
    titleWhite: 'Pro-Level',
    titleGrey: 'Tools',
    text: 'Smart charts and indicators for better trading decisions.',
  },
  {
    icon: '/3d-rendering-ui-icon 1.svg',
    titleWhite: 'Global',
    titleGrey: 'Access 24/7',
    text: 'Trade anytime, anywhere without interruptions.',
  }
];

export default function Features() {
  return (
    <section className={styles.section}>
      <h2 className={styles.title}>
        <span className={styles.titleWhite}>WHY</span>
        <br />
        <span className={styles.titleGrey}>CHOOSE US</span>
      </h2>

      <div className={styles.grid}>
        {featureList.map((feature, index) => (
          <div key={index} className={styles.card}>
            <div className={styles.iconWrapper}>
              <Image 
                src={feature.icon} 
                alt={`${feature.titleWhite} ${feature.titleGrey}`} 
                width={106} 
                height={120} 
                className={styles.icon}
                style={{ width: '100%', height: 'auto' }}
              />
            </div>
            <div>
              <h3 className={styles.cardHeading}>
                <span className={styles.headingWhite}>{feature.titleWhite}</span>
                <br />
                <span className={styles.headingGrey}>{feature.titleGrey}</span>
              </h3>
              <p className={styles.cardDesc}>{feature.text}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
