import { motion } from "framer-motion";

const RevealLink = () => {
  return (
    <section className="grid h-screen place-content-center gap-2 bg-green-300 px-8 text-black">
      <FlipLink href="#">Twitter</FlipLink>
      <FlipLink href="#">LinkedIn</FlipLink>
      <FlipLink href="#">Facebook</FlipLink>
      <FlipLink href="#">Instagram</FlipLink>
    </section>
  );
};

const DURATION = 0.25;
const STAGGER = 0.02;

const FlipLink = ({ children, href }: { children: string; href: string }) => {
  return (
    <motion.a
      initial="initial"
      whileHover="hovered"
      href={href}
      className="relative block overflow-hidden whitespace-nowrap text-4xl font-black uppercase sm:text-7xl md:text-8xl lg:text-9xl"
      style={{ lineHeight: 0.85 }}
    >
      <div>
        {children.split("").map((l, index) => {
          return (
            <motion.span
              variants={{
                initial: {
                  y: 0,
                },
                hovered: {
                  y: "-100%",
                },
              }}
              transition={{
                duration: DURATION,
                ease: "easeInOut",
                delay: STAGGER * index,
              }}
              className="inline-block"
              key={l}
            >
              {l}
            </motion.span>
          );
        })}
      </div>
      <div className="absolute inset-0">
        {children.split("").map((l, index) => {
          return (
            <motion.span
              variants={{
                initial: {
                  y: "100%",
                },
                hovered: {
                  y: 0,
                },
              }}
              className="inline-block"
              key={l}
              transition={{
                duration: DURATION,
                ease: "easeInOut",
                delay: STAGGER * index,
              }}
            >
              {l}
            </motion.span>
          );
        })}
      </div>
    </motion.a>
  );
};

export default RevealLink;
