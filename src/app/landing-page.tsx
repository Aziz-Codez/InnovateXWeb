'use client'

import { useState, useEffect, useRef } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { motion, useScroll, useTransform } from 'framer-motion'
import { Button } from "@/components/ui/Button"
import { Input } from "@/components/ui/Input"
import { Laptop, Smartphone, Cloud, Megaphone, Share2, Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"

export default function LandingPage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => setMounted(true), [])

  const { scrollYProgress } = useScroll()
  const y = useTransform(scrollYProgress, [0, 1], ['0%', '50%'])

  const starRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleScroll = () => {
      if (starRef.current) {
        const scrollY = window.scrollY
        starRef.current.style.transform = `translateY(${scrollY * 0.5}px) rotate(${scrollY * 0.1}deg)`
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  }

  return (
    <div className="flex flex-col min-h-screen bg-white dark:bg-gray-900 text-gray-800 dark:text-gray-200">
      <header className="px-4 lg:px-6 h-20 flex items-center justify-between bg-white dark:bg-gray-900 shadow-sm">
        <Link href="/" className="flex items-center justify-center">
          <Image
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/innovateX-removebg-preview%20(1)-YAzDQSyoU3U6thvOfhbDhJ2zItAMfL.png"
            alt="InnovateX Tech Logo"
            width={200}
            height={50}
          />
        </Link>
        <div className="flex items-center gap-4">
          <button
            className="lg:hidden text-gray-800 dark:text-gray-200"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? 'Close' : 'Menu'}
          </button>
          <nav className={`${isMenuOpen ? 'block' : 'hidden'} lg:block`}>
            <ul className="flex flex-col lg:flex-row gap-4 lg:gap-6">
              <motion.li whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
                <Link className="text-sm font-medium hover:text-green-500 dark:hover:text-green-400" href="#services">Services</Link>
              </motion.li>
              <motion.li whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
                <Link className="text-sm font-medium hover:text-green-500 dark:hover:text-green-400" href="#about">About</Link>
              </motion.li>
              <motion.li whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
                <Link className="text-sm font-medium hover:text-green-500 dark:hover:text-green-400" href="#contact">Contact</Link>
              </motion.li>
            </ul>
          </nav>
          {mounted && (
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
              aria-label="Toggle theme"
            >
              {theme === 'light' ? <Moon className="h-6 w-6" /> : <Sun className="h-6 w-6" />}
            </Button>
          )}
        </div>
      </header>
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 bg-white dark:bg-gray-900 relative overflow-hidden">
          <div className="container px-4 md:px-6 mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <motion.div
                className="flex flex-col space-y-4"
                initial="initial"
                animate="animate"
                variants={fadeInUp}
              >
                <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl/none text-gray-800 dark:text-white">
                  Innovate with <span className="text-green-500 dark:text-green-400">Community</span>
                </h1>
                <p className="max-w-[600px] text-gray-500 dark:text-gray-400 md:text-xl">
                  Empowering businesses through collaborative innovation and professional excellence.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button className="bg-green-500 hover:bg-green-600 text-white dark:bg-green-600 dark:hover:bg-green-700">Get Started</Button>
                  <Button variant="outline" className="text-green-500 border-green-500 hover:bg-green-50 dark:text-green-400 dark:border-green-400 dark:hover:bg-gray-800">Learn More</Button>
                </div>
              </motion.div>
              <motion.div
                className="relative w-full h-[400px]"
                initial="initial"
                animate="animate"
                variants={fadeInUp}
              >
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Team%20work-cuate-WArE0eyr42OOxSFrLKa9CkOBe6dOMP.svg"
                  alt="Team work illustration"
                  layout="fill"
                  objectFit="contain"
                />
              </motion.div>
            </div>
          </div>
          <div ref={starRef} className="absolute top-10 right-10 w-8 h-8 text-yellow-400">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" />
            </svg>
          </div>
        </section>
        <motion.section
          id="services"
          className="w-full py-12 md:py-24 lg:py-32 bg-gray-50 dark:bg-gray-800"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="container px-4 md:px-6 mx-auto">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-12 text-gray-800 dark:text-white">Our Services</h2>
            <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
              {[
                { icon: Laptop, title: "Website Development", description: "Custom-built, responsive websites tailored to your business needs." },
                { icon: Smartphone, title: "Mobile App Development", description: "Innovative mobile applications for iOS and Android platforms." },
                { icon: Cloud, title: "Cloud Integration", description: "Seamless cloud solutions to enhance your business operations." },
                { icon: Megaphone, title: "Digital Marketing", description: "Comprehensive digital marketing strategies to boost your online presence." },
                { icon: Share2, title: "Social Media Management", description: "Effective social media strategies to engage your audience and grow your brand." }
              ].map((service, index) => (
                <motion.div
                  key={index}
                  className="flex flex-col items-center space-y-2 p-6 bg-white dark:bg-gray-700 rounded-lg shadow-md"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <service.icon className="h-12 w-12 mb-2 text-green-500 dark:text-green-400" />
                  <h3 className="text-xl font-bold text-gray-800 dark:text-white">{service.title}</h3>
                  <p className="text-sm text-gray-500 dark:text-gray-300 text-center">{service.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.section>
        <motion.section
          id="about"
          className="w-full py-12 md:py-24 lg:py-32 bg-white dark:bg-gray-900"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="container px-4 md:px-6 mx-auto">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-12 text-gray-800 dark:text-white">About Us</h2>
            <p className="mx-auto max-w-[700px] text-gray-500 dark:text-gray-400 md:text-xl text-center">
              InnovateX Tech is a cutting-edge software company dedicated to providing innovative solutions for businesses of all sizes. With our team of expert developers and strategists, we help our clients leverage technology to achieve their goals and stay ahead in the digital landscape.
            </p>
          </div>
        </motion.section>
        <motion.section
          id="contact"
          className="w-full py-12 md:py-24 lg:py-32 bg-gray-50 dark:bg-gray-800"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="container px-4 md:px-6 mx-auto">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-12 text-gray-800 dark:text-white">Contact Us</h2>
            <div className="mx-auto max-w-[500px]">
              <form className="space-y-4">
                <Input placeholder="Your Name" className="bg-white dark:bg-gray-700 text-gray-800 dark:text-gray-200 border-gray-300 dark:border-gray-600" />
                <Input type="email" placeholder="Your Email" className="bg-white dark:bg-gray-700 text-gray-800 dark:text-gray-200 border-gray-300 dark:border-gray-600" />
                <Input placeholder="Subject" className="bg-white dark:bg-gray-700 text-gray-800 dark:text-gray-200 border-gray-300 dark:border-gray-600" />
                <textarea
                  className="w-full h-32 px-3 py-2 text-gray-800 dark:text-gray-200 bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:border-green-500 dark:focus:border-green-400 resize-none"
                  placeholder="Your Message"
                ></textarea>
                <Button className="w-full bg-green-500 hover:bg-green-600 text-white dark:bg-green-600 dark:hover:bg-green-700">Send Message</Button>
              </form>
            </div>
          </div>
        </motion.section>
      </main>
      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t border-gray-100 dark:border-gray-800">
        <p className="text-xs text-gray-500 dark:text-gray-400">© 2024 InnovateX Tech. All rights reserved.</p>
        <nav className="sm:ml-auto flex gap-4 sm:gap-6">
          <Link className="text-xs hover:underline underline-offset-4 text-gray-500 hover:text-green-500 dark:text-gray-400 dark:hover:text-green-400" href="#">
            Terms of Service
          </Link>
          <Link className="text-xs hover:underline underline-offset-4 text-gray-500 hover:text-green-500 dark:text-gray-400 dark:hover:text-green-400" href="#">
            Privacy
          </Link>
        </nav>
      </footer>
    </div>
  )
}