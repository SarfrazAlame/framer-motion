'use client'
import { motion } from "framer-motion"

const items = [
    'Item 1',
    'Item 2',
    'Item 3',
    'Item 4',
    'Item 5',
]

const containerVariants = {
    hidden: {
        opcaity: 0
    },
    visible: {
        opacity: 1,
        transition: { staggerChildren: 0.1 }
    }
}

const itemVariants = {
    hidden: {
        opacity: 0,
        y: 20
    },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.5
        }
    }
}

export default function Items() {
    return (
        <motion.ul
            variants={containerVariants}
            initial='hidden'
            animate='visible'
            className="space-y-4"
        >
            {
                items.map((item, index) => {
                    return <motion.li key={index} variants={itemVariants} className="p-4 bg-gray-100 rounded-md">
                        {item}
                    </motion.li>
                })
            }
        </motion.ul>
    )
}