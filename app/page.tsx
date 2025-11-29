"use client";
import { useState } from "react";
import Image from "next/image";
import styles from "./page.module.css";

const fortunes = [
  "You will have a pleasant surprise soon!",
  "A thrilling time is in your immediate future.",
  "Your hard work will soon pay off.",
  "Happiness begins with facing life with a smile and a wink.",
  "A new opportunity will present itself today.",
  "You will make a valuable discovery.",
  "Adventure can be real happiness.",
  "Your talents will be recognized and suitably rewarded.",
  "A friend asks only for your time, not your money.",
  "You will soon embark on a business venture.",
  "Now is the time to try something new.",
  "Your creativity will lead you to success.",
  "You will find great fortune in unexpected places.",
  "A fresh start will put you on your way.",
  "Your positive attitude will bring you good luck.",
];

export default function Home() {
  const [fortune, setFortune] = useState(fortunes[Math.floor(Math.random() * fortunes.length)]);
  const handleNewFortune = () => {
    let newFortune;
    do {
      newFortune = fortunes[Math.floor(Math.random() * fortunes.length)];
    } while (newFortune === fortune && fortunes.length > 1);
    setFortune(newFortune);
  };
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <Image src="/hero.png" alt="Hero" width={320} height={120} className={styles.hero} />
      </div>
      <div className={styles.content}>
        <div className={styles.fortuneBox}>
          <h1 className={styles.title}>Fortune Cookie Generator</h1>
          <div className={styles.fortuneRow}>
            <Image src="/icon.png" alt="Fortune Icon" width={40} height={40} className={styles.icon} />
            <p className={styles.fortune}>{fortune}</p>
          </div>
          <button className={styles.newFortuneButton} onClick={handleNewFortune}>
            Get a new fortune
          </button>
        </div>
      </div>
    </div>
  );
}
