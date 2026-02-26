"use client"

import { motion, useScroll } from "motion/react"

export default function ScrollLinked() {
  const { scrollYProgress } = useScroll()
  return (
    <motion.div
        id="scroll-indicator"
        style={{
         scaleX : scrollYProgress,
          position: "fixed",
          top: 76,
          left: 0,
          right: 0,
          height: 4,
          originX: 0,
          backgroundColor: "#FFAA00",
            zIndex: 999,
        }}
    />
  )
}
