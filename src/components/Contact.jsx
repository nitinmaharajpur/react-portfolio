import { CONTACT } from "../constants";
import { motion } from "framer-motion";

const Contact = () => {
  return (
    <div className="border-b border-neutral-900 pb-10 sm:pb-20 px-4">
      <motion.h2 
        whileInView={{ opacity: 1, y: 0 }} 
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 0.5 }}
        className="my-8 sm:my-10 text-center text-3xl sm:text-4xl">
        Get in Touch
      </motion.h2>
      <div className="text-center tracking-tighter space-y-4">
        <motion.p 
          whileInView={{ opacity: 1, y: 0 }} 
          initial={{ opacity: 0, x: 0 }}
          transition={{ duration: 1.5 }}
          className="text-sm sm:text-base my-2 sm:my-4">
          {CONTACT.address}
        </motion.p>
        
        <motion.p 
          whileInView={{ opacity: 1, y: 0 }} 
          initial={{ opacity: 0, x: 25 }}
          transition={{ duration: 2 }}
          className="text-sm sm:text-base my-2 sm:my-4">
          {CONTACT.phoneNo}
        </motion.p>
        <a href="#" className="text-sm sm:text-base border-b border-neutral-500 hover:border-neutral-700">
          {CONTACT.email}
        </a>
      </div>
    </div>
  );
}

export default Contact;
