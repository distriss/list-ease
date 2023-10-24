import React, { useState, useEffect } from 'react';
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAnchor, faCalendarDay, faHammer, faScissors, faChildReaching, faCakeCandles, faCamera, faStethoscope, faPaw, faPenClip, faFaceLaugh, faFaceLaughSquint, faFaceLaughWink, faPizzaSlice, faEarthEurope, faMusic, faPhone, faMugHot, faShoppingCart, faDog, faFrog, faCat, faCheck } from "@fortawesome/free-solid-svg-icons";


const DOT_SIZE = 50; // Define the dot size here
const GAP = 120; // Define the gap between dots here
const OFFSET = DOT_SIZE / 5;
const ANIMATION_DURATION = 0.7;
const PAUSE_DURATION = 0.3;


function Dot({ color, time }) {
    function getRandomIcon() {
        const icons = [
            faAnchor,
            faCalendarDay,
            faHammer,
            faScissors,
            faChildReaching,
            faCakeCandles,
            faCamera,
            faStethoscope,
            faPaw,
            faPenClip,
            faFaceLaughSquint,
            faFaceLaughWink,
            faPizzaSlice,
            faEarthEurope,
            faMusic,
            faPhone,
            faMugHot,
            faShoppingCart,
            faDog,
            faFrog,
            faCat,
            faCheck
          ];
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
                <FontAwesomeIcon icon={randomIcon} style={{ color, fontSize: DOT_SIZE / 2 }} /></motion.div>
            
        </motion.div>
    );
}

export default function Dots() {
    const [numDots, setNumDots] = useState({ horizontal: 0, vertical: 0 });

    useEffect(() => {
        function updateNumDots() {
            const vw = Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0);
            const vh = Math.max(document.documentElement.clientHeight || 0, window.innerHeight || 0);
          
            const numDotsHorizontally = Math.ceil(vw / (DOT_SIZE + GAP));
            const numDotsVertically = Math.ceil(vh /  (DOT_SIZE + GAP));
          
            setNumDots({ horizontal: numDotsHorizontally, vertical: numDotsVertically });
        }

        // Initial render
        updateNumDots();

        // Listen for window resize
        window.addEventListener('resize', updateNumDots);

        // Unmount Listener
        return () => {
          window.removeEventListener('resize', updateNumDots);
        };
    }, []);

    return (
        <div className="">
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

    function getRandomColor() {
        const colors = ["#5BC0DE", "#00FFFF", "#98FB98", "#FF6B6B", "#FFD700", "#E6E6FA", "#CCCCFF", "#40E0D0"];

        return colors[Math.floor(Math.random() * colors.length)];
    }

    function getRandomIcon() {
        const icons = [
            faAnchor,
            faCalendarDay,
            faHammer,
            faScissors,
            faChildReaching,
            faCakeCandles,
            faCamera,
            faStethoscope,
            faPaw,
            faPenClip,
            faFaceLaugh,
        ];
    
        return icons[Math.floor(Math.random() * icons.length)];
    }

}