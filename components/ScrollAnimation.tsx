'use client'
import { motion, useInView } from 'framer-motion'
import React, { useRef } from 'react'

export default function ScrollAnimation({ children }: { children: React.ReactNode }) {
    const ref = useRef(null)
    const isInView = useInView(ref, {
        once: true
    })


    return (
        <motion.div
            ref={ref}
            initial={{
                opacity: 0,
                y: 50
            }}
            animate={
                isInView ? { opacity: 1, y: 0 } : {opacity:0, y:50}
            }
            transition={{
                duration:0.5
            }}
            className='p-6 bg-blue-100 rounded-md'
        >
            This element animates when it comes into view  
        </motion.div>
    )
}

