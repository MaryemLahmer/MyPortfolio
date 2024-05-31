import React from "react";
import { getImageUrl } from "../../utils";
import styles from "./Hero.module.css";

export const Hero = () => {
    return <section className={styles.container}>
        <div className={styles.content}>
            <h1 className={styles.title}>Hello, I'm Maryem</h1>
            <p className={styles.description}>I'm a Computer-Science-Engineering Student, with a passion for IT.
                Reach out if you're interested in working with me !  </p>
            <a href="mailto:maryemlahmeralways@gmail.com" className={styles.contactBtn}>Contact Me</a>
        </div>
        <img src={getImageUrl("hero/heroImage.png")} alt="Hero Image Of Me" className={styles.heroImg} />
        <div className={styles.topBlur} />
        <div className={styles.bottomBlur} />
    </section>;
}