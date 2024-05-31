import React from "react";
import { getImageUrl } from "../../utils";
import styles from "./About.module.css";

export const About = () => {
    return <section className={styles.container} id="about">
        <h2 className={styles.title}>About</h2>
        <div className={styles.content}>
            <img src={getImageUrl("about/aboutImg.png")} alt="Me with My laptop" 
            className={styles.aboutImg}/>
        
        <ul className={styles.aboutItems}>
        <li className={styles.aboutItem}>
                <img src={getImageUrl("about/phoneIcon.png")} alt="Phone Icon" />
                <div className={styles.abouItemText}>
                    <h3>Mobile App Developer</h3>
                    <p> I have designed and developed intuitive, user-friendly 
                        and market-ready mobile applications. </p>
                </div>
            </li>

            <li className={styles.aboutItem}>
                <img src={getImageUrl("about/cursorIcon.png")} alt="Cursor Icon" />
                <div className={styles.abouItemText}>
                    <h3>Front-end Developer</h3>
                    <p>I'm a skilled front-end developer with experience in building 
                        responsive and optimized sites.
                    </p>
                </div>
            </li>

            <li className={styles.aboutItem}>
                <img src={getImageUrl("about/serverIcon.png")} alt="Server Icon" />
                <div className={styles.abouItemText}>
                    <h3>Back-end Developer</h3>
                    <p>I have experience developing fast and optimized back-end 
                        systems and APIs .
                    </p>
                </div>
            </li>
        </ul>
        </div>

    </section>
};