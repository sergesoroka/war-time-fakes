import { useState} from 'react'
import { motion } from "framer-motion";

export default function About() {
  const [pos, setPos] = useState(false)
  return (
    <div className={`m-4 flex justify-${pos ? 'start' : 'center'}`}>
      {/* <motion.div
      onClick={() => setPos(!pos)}
        layoutId="red-dot"
        className="h-5 w-5 rounded-full bg-red-500"
      ></motion.div> */}
    </div>
  );
}
