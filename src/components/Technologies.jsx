import { RiReactjsLine } from "react-icons/ri";
import { DiMongodb } from "react-icons/di";
import { RiNextjsFill } from "react-icons/ri";
import { SiExpress } from "react-icons/si";
import { DiJavascript } from "react-icons/di";
import { SiTypescript } from "react-icons/si";
import { FaNodeJs } from "react-icons/fa";
import { animate, motion } from "framer-motion";

const iconVariants = (duration) => ({
    initial: { y: -10 },
    animate: {
        y: [-10, 10],
        transition: {
            duration: duration,
            ease: "linear",
            repeat: Infinity,
            repeatType: "reverse",
        },
    },
});

const Technologies = () => {
    return (
        <div className='border-b border-neutral-800 pb-24'>
            <motion.h2
                whileInView={{ opacity: 1, y: 0 }}
                initial={{ opacity: 0, y: -100 }}
                transition={{ duration: 1.5 }}
                className='my-20 text-center text-4xl'>
                Technologies
            </motion.h2>
            <motion.div
                whileInView={{ opacity: 1, x: 0 }}
                initial={{ opacity: 0, x: -100 }}
                transition={{ duration: 1.5 }}
                className="flex flex-wrap items-center justify-center gap-4">
                <motion.div
                    variants={iconVariants(2.5)}
                    initial="initial"
                    animate="animate"
                    className="rounded-2xl border-4 border-neutral-800 p-4">
                    <RiReactjsLine style={{ fontSize: '4rem', color: '#61DBFB' }} />
                </motion.div>
                <motion.div
                    variants={iconVariants(3)}
                    initial="initial"
                    animate="animate"
                    className="rounded-2xl border-4 border-neutral-800 p-4">
                    <DiMongodb style={{ fontSize: '4rem', color: '#4DB33D' }} />
                </motion.div>
                <motion.div
                    variants={iconVariants(3.5)}
                    initial="initial"
                    animate="animate"
                    className="rounded-2xl border-4 border-neutral-800 p-4">
                    <RiNextjsFill style={{ fontSize: '4rem', color: '#000000' }} />
                </motion.div>
                <motion.div
                    variants={iconVariants(4.5)}
                    initial="initial"
                    animate="animate"
                    className="rounded-2xl border-4 border-neutral-800 p-4">
                    <SiExpress style={{ fontSize: '4rem', color: '#ffffff' }} />
                </motion.div>
                <motion.div
                    variants={iconVariants(5.5)}
                    initial="initial"
                    animate="animate"
                    className="rounded-2xl border-4 border-neutral-800 p-4">
                    <DiJavascript style={{ fontSize: '4rem', color: '#F0DB4F' }} />
                </motion.div>
                <motion.div
                    variants={iconVariants(6.5)}
                    initial="initial"
                    animate="animate"
                    className="rounded-2xl border-4 border-neutral-800 p-4">
                    <SiTypescript style={{ fontSize: '4rem', color: '#007ACC' }} />
                </motion.div>
                <motion.div
                    variants={iconVariants(7.5)}
                    initial="initial"
                    animate="animate"
                    className="rounded-2xl border-4 border-neutral-800 p-4">
                    <FaNodeJs style={{ fontSize: '4rem', color: '#68A063' }} />
                </motion.div>
            </motion.div>
        </div>
    );
};

export default Technologies;
