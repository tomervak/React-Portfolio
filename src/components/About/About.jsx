import React from "react";
import { getImageUrl } from "../../utils";
import styles from "./About.module.css";

export const About = () => {
    return (<section className={styles.container}>
        <h2 className={styles.title}>About Me</h2>
        <div>
            {/*<img src={getImageUrl("penguins/penguins.png")} alt="three penguins" className={styles.penguin} />*/}
            <ul>
                <li>
                    <img src={getImageUrl("penguins/penguin1.png")} alt="penguin1" className={styles.penguin} />
                    <div>
                        <p>I'm a proactive, self-taught learner with excellent personal
                            skills and an highly motivated learner. Looking for my first opportunity to contribute and grow
                            as a software developer. </p>
                    </div>
                    <div>

                    </div>
                </li>
            </ul>
        </div>
    </section>);
};