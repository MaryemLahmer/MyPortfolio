import React from "react";
import { getImageUrl } from "../../utils";
import styles from "./Contact.module.css";

export const Contact = () => {
    return <footer id="contact" className={styles.container}>
        <div className={styles.text}>
            <h2>Contact</h2>
            <p>Feel free to reach out</p>
        </div>

            <ul className={styles.links}>
                <li className={styles.link}>
                    <img src={getImageUrl("contact/emailIcon.png")} alt="email icon" />
                    <a href="mailto:maryemlahmeralways@gmail.com">maryemlahmeralways@gmail.com</a>
                </li>

                <li className={styles.link}>
                    <img src={getImageUrl("contact/githubIcon.png")} alt="GitHub icon" />
                    <a href="https://github.com/MaryemLahmer">github.com/MaryemLahmer</a>
                </li>

                <li className={styles.link}>
                    <img src={getImageUrl("contact/linkedinIcon.png")} alt="LinkedIn icon" />
                    <a href="https://www.linkedin.com/in/maryem-lahmer-03a798242">linkedin.com</a>
                </li>
            </ul>
    </footer>;
}