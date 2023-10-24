import React, { useState, useEffect, useMemo } from 'react';
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faListUl, faMarker, faBook, faGraduationCap, faPencil,  faChildReaching, faUsers, faHeart, faComment, faCode, faWrench, faMusic, faGamepad, faPaw, faAppleWhole, faPhone, faFaceGrinWide, faFlask } from "@fortawesome/free-solid-svg-icons";

const DOT_SIZE = 50;
const GAP = 150;
const OFFSET = DOT_SIZE / 5;
const ANIMATION_DURATION = 0.7;
const PAUSE_DURATION = 0.3;

function Dot({ color, time }) {
    function getRandomIcon() {
        const icons = [ faListUl, faMarker, faBook, faGraduationCap, faPencil, faChildReaching, faUsers, faHeart, faComment, faCode, faWrench, faMusic, faGamepad, faPaw, faAppleWhole, faPhone, faFaceGrinWide, faFlask ];
        return icons[Math.floor(Math.random() * icons.length)];
    }

    const randomIcon = getRandomIcon();

    return (
        <motion.div
            initial={{ x: 0, y: OFFSET }}
            animate={{ x: 0, y: OFFSET }}
            transition={{
                duration: ANIMATION_DURATION,
                repeat: Infinity,
                repeatType: "reverse",
                ease: "easeInOut",
                delay: time / 1000,
                repeatDelay: PAUSE_DURATION,
            }}
            style={{
                width: DOT_SIZE,
                height: DOT_SIZE,
                borderRadius: "50%",
                backgroundColor: color,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                position: "relative",
            }}
        >
            <motion.div
                initial={{ x: 0, y: 0 }}
                animate={{ x: -OFFSET, y: -OFFSET }}
                transition={{
                    duration: ANIMATION_DURATION,
                    repeat: Infinity,
                    repeatType: "reverse",
                    ease: "easeInOut",
                    delay: time / 1000,
                    repeatDelay: PAUSE_DURATION,
                }}
                style={{
                    width: DOT_SIZE,
                    height: DOT_SIZE,
                    borderRadius: "50%",
                    borderColor: color,
                    borderWidth: 2,
                    borderStyle: "solid",
                    backgroundColor: "white",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                }}>
                <FontAwesomeIcon icon={randomIcon} style={{ color, fontSize: DOT_SIZE / 2 }} />
            </motion.div>
        </motion.div>
    );
}

function getRandomColor() {
    const colors = ["#5BC0DE", "#00FFFF", "#98FB98", "#FF6B6B", "#FFD700", "#E6E6FA", "#CCCCFF", "#40E0D0"];
    return colors[Math.floor(Math.random() * colors.length)];
}
 

function Dots() {
    // Initialize the number of dots based on the initial window size
  const [numDots, setNumDots] = useState(calculateNumDots());

  // Calculate the number of dots
  function calculateNumDots() {
    const vw = Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0);
    const vh = Math.max(document.documentElement.clientHeight || 0, window.innerHeight || 0);
    const numDotsHorizontally = Math.ceil(vw / (DOT_SIZE + GAP));
    const numDotsVertically = Math.ceil(vh / (DOT_SIZE + GAP));
    return { horizontal: numDotsHorizontally, vertical: numDotsVertically };
  }

  // Update the number of dots when the window is resized
  function updateNumDots() {
    const newNumDots = calculateNumDots();
    setNumDots(newNumDots);
  }

  // Add a window resize event listener
  useEffect(() => {
    window.addEventListener('resize', updateNumDots);

    // Remove the event listener when the component unmounts
    return () => {
      window.removeEventListener('resize', updateNumDots);
    };
  }, []);

    return (
        <div className="d-flex justify-content-center">
            <div className="dot-container" style={{ display: 'grid', gridTemplateColumns: `repeat(${numDots.horizontal}, 1fr)`, gap: `${GAP}px` }}>
                {Array.from({ length: numDots.horizontal * numDots.vertical }, (_, i) => (
                    <Dot
                        key={i}
                        color={getRandomColor()}
                        time={Math.ceil(Math.random() * 2000)}
                    />
                ))}
            </div>
        </div>
    );
}

export default React.memo(Dots);
