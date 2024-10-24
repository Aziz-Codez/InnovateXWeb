'use client'

import { useState, useEffect, useRef } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { motion, useScroll, useTransform } from 'framer-motion'
import { Globe, Smartphone, Cloud, Megaphone, Share2, Moon, Sun } from 'lucide-react'
import { useTheme } from 'next-themes'
import { Button } from "@/components/ui/Button"
// import { Input } from "@/components/ui/Input"
// import GetStartedButton from "@/components/animata/background/button/get-started-button"

const services = [
  { icon: Globe, title: 'Website Development', description: 'Custom-built, responsive websites tailored to your brand.' },
  { icon: Smartphone, title: 'Mobile App Development', description: 'Native and cross-platform apps for iOS and Android.' },
  { icon: Cloud, title: 'Cloud Integration', description: 'Seamless integration of cloud services for scalability and efficiency.' },
  { icon: Megaphone, title: 'Digital Marketing', description: 'Data-driven strategies to boost your online presence and ROI.' },
  { icon: Share2, title: 'Social Media Management', description: 'Engaging content and community management across platforms.' },
]

const cardVariants = {
  hidden: { opacity: 0, y: 50, scale: 0.9 },
  visible: { 
    opacity: 1, 
    y: 0, 
    scale: 1,
    transition: { 
      duration: 0.5,
      type: 'spring',
      stiffness: 100
    } 
  },
}

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
    <div className="flex flex-col min-h-screen bg-vanilla dark:bg-gray-900 text-gray-800 dark:text-gray-200">
      <header className="px-4 lg:px-6 h-20 flex items-center justify-between bg-white dark:bg-gray-900 shadow-sm">
        <Link href="/" className="flex items-center justify-center">
          <Image
            src="/images/logo.png"
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
                <Link className="text-sm font-medium hover:text-pineGreen dark:hover:text-green-400" href="#services">Services</Link>
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
              onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
              aria-label="Toggle theme"
            >
              {theme === 'dark' ? <Sun className="h-6 w-6" /> : <Moon className="h-6 w-6" />}
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
                  Innovate with <span className="text-pineGreen dark:text-green-400">Community</span>
                </h1>
                <p className="max-w-[600px] text-gray-500 dark:text-gray-400 md:text-xl">
                  Empowering businesses through collaborative innovation and professional excellence.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button className="bg-pineGreen hover:bg-pineGreen/90 text-white dark:bg-green-600 dark:hover:bg-green-700">Get Started</Button>
                  <Button variant="outline" className="text-pineGreen border-pineGreen hover:bg-pineGreen/10 dark:text-green-400 dark:border-green-400 dark:hover:bg-gray-800">Learn More</Button>
                </div>
              </motion.div>
              <motion.div
                className="relative w-full h-[400px]"
                initial="initial"
                animate="animate"
                variants={fadeInUp}
              >
                <Image
                  src="/images/Company-amico.svg"
                  alt="Team work illustration"
                  width={1000}
                  height={1000}
                  objectFit="contain"
                  style={{ width: '150%', height: '150%' }}
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
        <section className="py-24 bg-[#F0F7EE]">
          <div className="container mx-auto px-4">
            <div className="flex flex-col lg:flex-row items-center mb-16">
              <motion.div 
                className="lg:w-1/2 mb-10 lg:mb-0"
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
              >
                <h2 className="text-5xl font-extrabold mb-6 text-green-800 bg-clip-text bg-gradient-to-r from-green-500 to-blue-500 dark:from-green-300 dark:to-blue-400 leading-tight tracking-tight">
                  Our Services
                </h2>
                <p className="text-lg text-gray-700 dark:text-gray-800 mb-8 leading-relaxed">
                  We offer a comprehensive suite of digital solutions to help your business thrive in the online world.
                </p>
                <Image 
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Taking%20notes-cuate%20(1)-8E7cDBduXFLksAYfZE22vqjuwB9Nnk.svg" 
                  alt="Taking notes illustration" 
                  width={400} 
                  height={400}
                  className="w-full max-w-md mx-auto"
                />
              </motion.div>
              <div className="lg:w-1/2 grid grid-cols-1 md:grid-cols-2 gap-8">
                {services.map((service, index) => (
                  <motion.div
                    key={service.title}
                    variants={cardVariants}
                    initial="hidden"
                    animate="visible"
                    transition={{ delay: index * 0.1 }}
                    whileHover={{ scale: 1.05, boxShadow: '0 10px 20px rgba(0,0,0,0.1)' }}
                    className="bg-white rounded-lg overflow-hidden transform transition-all duration-300 hover:shadow-xl"
                  >
                    <motion.div 
                      className="p-6"
                      whileHover={{ backgroundColor: '#f3f4f6' }}
                      transition={{ duration: 0.2 }}
                    >
                      <motion.div
                        initial={{ scale: 1 }}
                        whileHover={{ scale: 1.1, rotate: 5 }}
                        transition={{ type: 'spring', stiffness: 300 }}
                      >
                        <service.icon className="w-12 h-12 text-emerald-800 mb-4" />
                      </motion.div>
                      <h3 className="text-xl font-semibold mb-2 text-gray-800">{service.title}</h3>
                      <p className="text-gray-600">{service.description}</p>
                    </motion.div>
                    <motion.div 
                      className="bg-emerald-800 h-1"
                      whileHover={{ scaleX: 1.1 }}
                      transition={{ duration: 0.2 }}
                    />
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t border-transparent">
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
