import { useGSAP } from "@gsap/react";
import clsx from "clsx";
import gsap from "gsap";
import { useEffect, useRef } from "react";
import style from "./ImageTrail.module.scss";

type Props = {};

const ImageTrail = (props: Props) => {
  const container = useRef<HTMLDivElement | null>(null);
  const settings = {
    isEnabled: false,
    count: 1,
    time: 50,
  };

  useEffect(() => {
    const images = [
      "./images/1.jpg",
      "./images/2.jpg",
      "./images/3.jpg",
      "./images/4.jpg",
      "./images/5.jpg",
      "./images/6.jpg",
      "./images/7.jpg",
      "./images/8.jpg",
      "./images/9.jpg",
    ];
    window.addEventListener("mousemove", animateImages);
  }, []);

  useGSAP(
    () => {
      const hero = document.querySelector(".hero");
      const heroTitle = document.querySelectorAll(".hero-title > .ofh > h1");

      const showHero = () => {
        gsap.to(heroTitle, {
          duration: 1.75,
          x: 0,
          ease: "expo.inOut",
          stagger: 0.025,
        });
      };

      gsap.set(heroTitle, {
        x: "-101%",
      });

      showHero();
    },
    { scope: container }
  );

  // ------- methods --------

  const calcIndex = (length: number) => {};

  const animateImages = () => {};

  return (
    <main className={clsx(style.app)} ref={container}>
      <section className={clsx(style.hero, "hero")}>
        <div className={clsx(style["hero-wrapper"], "hero-wrapper")}>
          <div className="hero-gallery"></div>
          <div className={clsx(style["hero-title"], "hero-title")}>
            <div className="ofh">
              <h1>T</h1>
            </div>
            <div className="ofh">
              <h1>R</h1>
            </div>
            <div className="ofh">
              <h1>A</h1>
            </div>
            <div className="ofh">
              <h1>I</h1>
            </div>
            <div className="ofh">
              <h1>L</h1>
            </div>
            <div className="ofh">
              <h1>I</h1>
            </div>
            <div className="ofh">
              <h1>N</h1>
            </div>
            <div className="ofh">
              <h1>G</h1>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default ImageTrail;
