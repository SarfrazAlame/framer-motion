'use client'
import { motion } from "framer-motion"
import Link from 'next/link'

export default function About() {
    return (
        <main className="min-h-screen bg-gradient-to-b from-gray-700 to-black text-white">
            {/* Header Section */}
            <section className="container mx-auto px-4 py-20">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="text-center"
                >
                    <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600">
                        About Us
                    </h1>
                    <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto">
                        We're passionate about creating innovative solutions that make a difference
                    </p>
                </motion.div>
            </section>

            {/* Mission Section */}
            <section className="container mx-auto px-4 py-20">
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="bg-gray-800 rounded-2xl p-8 md:p-12"
                >
                    <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Mission</h2>
                    <p className="text-gray-300 text-lg leading-relaxed">
                        We strive to empower individuals and businesses through cutting-edge technology
                        and innovative solutions. Our commitment to excellence drives us to create
                        products that not only meet but exceed expectations.
                    </p>
                </motion.div>
            </section>

            {/* Team Section */}
            <section className="container mx-auto px-4 py-20">
                <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">Our Team</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {team.map((member, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.2 }}
                            viewport={{ once: true }}
                            className="bg-gray-800 rounded-xl p-6 text-center"
                        >
                            <div className="w-32 h-32 mx-auto mb-4 rounded-full bg-gradient-to-r from-purple-500 to-pink-500" />
                            <h3 className="text-xl font-semibold mb-2">{member.name}</h3>
                            <p className="text-gray-400">{member.role}</p>
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* Back to Home */}
            <section className="container mx-auto px-4 py-20 text-center">
                <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                >
                    <Link
                        href="/"
                        className="inline-block bg-gradient-to-r from-purple-500 to-pink-500 text-white px-8 py-3 rounded-full text-lg font-semibold hover:shadow-lg transition-all"
                    >
                        Back to Home
                    </Link>
                </motion.div>
            </section>
        </main>
    )
}

const team = [
    {
        name: "John Doe",
        role: "CEO & Founder"
    },
    {
        name: "Jane Smith",
        role: "Lead Developer"
    },
    {
        name: "Mike Johnson",
        role: "Creative Director"
    }
];