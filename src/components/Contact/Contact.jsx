import React from "react";
import styles from "./Contact.module.css";
import { getImageUrl } from "../../utils";

export const Contact =() =>{
    return (<footer id="contact" className={styles.container}>
        <div className={styles.text}>
            <h2>Contact Me</h2>
            <p>Feel free to reach out!</p>

        </div>
        <ul className={styles.links}>
            <li className={styles.link}>
                <img src={getImageUrl("contact/emailIcon.png")} alt="email" />
                <a href="mailto:tomervak98@gmail.com">tomervak98@gmail.com</a>
            </li>
            <li className={styles.link}>
                <img src={getImageUrl("contact/linkedinIcon.png")} alt="email" />
                <a href="https://www.linkedin.com/in/tomer-vaknin/">linkedin.com/tomervak</a>
            </li>
            <li className={styles.link}>
                <img src={getImageUrl("contact/githubIcon.png")} alt="email" />
                <a href="https://github.com/tomervak">github.com/tomervak</a>
            </li>
        </ul>
    </footer> )
}