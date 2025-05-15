'use client'
import { motion } from "framer-motion"
import Link from "next/link";
import Template from "./template";
import Items from "@/components/list";
import ScrollAnimation from "@/components/ScrollAnimation";

export default function Home() {
  return (
    <Template>
      <main className="min-h-screen bg-gradient-to-b from-gray-700 to-black text-white">
        {/* Hero Section */}
        <section className="container mx-auto px-4 py-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-purple-300 to-pink-700">
              Welcome to Our Platform
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8">
              Discover amazing features and transform your experience
            </p>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link
                href="/about"
                className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-8 py-3 rounded-full text-lg font-semibold hover:shadow-lg transition-all"
              >
                Learn More
              </Link>
            </motion.div>
          </motion.div>
        </section>

        {/* Features Section */}
        <section className="container mx-auto px-4 py-20">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="bg-gray-800 p-6 rounded-xl hover:bg-gray-700 transition-colors"
              >
                <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                <p className="text-gray-400">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* CTA Section */}
        <section className="container mx-auto px-4 py-20">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Get Started?
            </h2>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link
                href="/about"
                className="inline-block bg-white text-gray-900 px-8 py-3 rounded-full text-lg font-semibold hover:shadow-lg transition-all"
              >
                Explore More
              </Link>
            </motion.div>
          </motion.div>
        </section>
      </main>

      <Items />
      <ScrollAnimation>
        Hello World
      </ScrollAnimation>
    </Template>
  );
}

const features = [
  {
    title: "Modern Design",
    description: "Clean and intuitive interface that makes your experience seamless."
  },
  {
    title: "Powerful Features",
    description: "Access to advanced tools and capabilities to enhance your workflow."
  },
  {
    title: "24/7 Support",
    description: "Round-the-clock assistance to help you with any questions."
  }
];
