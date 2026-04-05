import React from 'react';
import Image from 'next/image';
import styles from './page.module.css';

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
    </div>
  );
}
