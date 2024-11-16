import React from "react";
import { getImageUrl } from "../../utils";
import styles from "./About.module.css";

export const About = () => {
    return (<section className={styles.container} id="about">
        <h2 className={styles.title}>About Me</h2>
        <div className={styles.content}>
            {/*<img src={getImageUrl("penguins/penguins.png")} alt="three penguins" className={styles.penguin} />*/}
            <ul className={styles.aboutItems}>
                <li className={styles.aboutItem}>
                    <img src={getImageUrl("penguins/penguin1.png")} alt="penguin1" className={styles.penguin} />
                    <div className={styles.aboutItemText}>
                        <p>I'm a proactive, self-taught learner with excellent personal
                            skills and an highly motivated learner.  </p>
                    </div>

                </li>
                <li className={styles.aboutItem}>
                    <img src={getImageUrl("penguins/penguin2.png")} alt="penguin2" className={styles.penguin} />
                    <div className={styles.aboutItemText}>
                        <p>I have experience in backend development with NestJS and MongoDB in personal projects.  </p>
                    </div>
                </li>
                <li className={styles.aboutItem}>
                    <img src={getImageUrl("penguins/penguin3.png")} alt="penguin3" className={styles.penguin} />
                    <div className={styles.aboutItemText}>
                        <p>I have experience in fontend development with React using JavaScript and css in personal projects.</p>
                    </div>

                </li>
            </ul>
        </div>
    </section>);
};