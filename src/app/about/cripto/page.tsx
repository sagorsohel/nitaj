import React from 'react';
import Image from 'next/image';
import styles from './page.module.css';

export default function CriptoPage() {
  return (
    <div id="cripto-page" className={styles.container}>
      <h1 className={styles.mainTitle}>
        <span className={styles.titleWhite}>TRADE CRYPTO IN</span> <br /> 
        <span className={styles.titleGrey}>EASY STEPS</span>
      </h1>

      <div className={styles.card}>
        <div className={styles.leftCol}>
          <div className={styles.stepCircle}>
             <span className={styles.stepNumber}>01</span>
          </div>
          
          <div className={styles.content}>
            <h2 className={styles.headline}>
              <span className={styles.yellowText}>Create Your</span> <br /> 
              <span className={styles.whiteText}>Account</span>
            </h2>
            <p className={styles.description}>
              Sign up in seconds using your email or social login and access your trading dashboard instantly.
            </p>
          </div>
        </div>

        <div className={styles.rightCol}>
          <div className={styles.mockupContainer}>
            {/* Phone Frame */}
            <Image 
              src="/create-account-frame.png" 
              alt="Create account app mockup" 
              width={363} 
              height={732}
              className={styles.phoneFrame}
              priority
            />
            {/* Wallet Icon */}
            <div className={styles.walletIconWrapper}>
              <Image 
                src="/blue-bin.png" 
                alt="3D Wallet and Bitcoin coin" 
                width={270} 
                height={268}
                className={styles.walletIcon}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
