import React from "react";
import { getImageUrl } from "../../utils";
import styles from "./Hero.module.css";
export const Hero=()=>{
    return (<section className={styles.container}>
        <div className={styles.content}>
            <h1 className={styles.title}>
                Hi, I'm Tomer.
            </h1>
            <p className={styles.description}>
            A Software Developer in the final stages of degree completion, B.Sc. in Computer Science
            Graduating from Ben Gurion University.
            </p>
            <a className={styles.contactBtn} href="mailto:tomervak98@gmail.com">contact me</a>
        </div>
        <img  className={styles.heroImg} src={getImageUrl("hero/heroImg.png")} alt="hero img" />
        <img  className={styles.heroImg} src={getImageUrl("hero/heroImg.png")} alt="hero img" />
        <div className={styles.topBlur}/>
        <div className={styles.bottomBlur}/>
    </section>);
};