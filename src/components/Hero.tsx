import { motion, useScroll, useTransform } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Github, Linkedin, Mail, Download, Code2, Instagram } from "lucide-react"
import { useEffect, useState } from "react"
import { ThemeToggle } from "./ThemeToggle"

export function Hero() {
  const { scrollY } = useScroll()
  const y = useTransform(scrollY, [0, 500], [0, 150])
  const opacity = useTransform(scrollY, [0, 300], [1, 0])
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }
    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  return (
    <section id="about" className="min-h-screen flex items-center justify-center pt-20 relative overflow-hidden bg-background">
      {/* Theme Toggle at top right of hero section */}
      <div className="absolute right-8 top-8 z-40">
        <ThemeToggle />
      </div>
      {/* Animated background elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-background/80">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,rgba(120,119,198,0.2),rgba(255,255,255,0))]" />
        <motion.div
          className="absolute w-[300px] h-[300px] rounded-full bg-gradient-to-r from-blue-600/10 to-purple-600/10 blur-lg"
          animate={{
            x: mousePosition.x - 150,
            y: mousePosition.y - 150,
          }}
          transition={{ type: "spring", damping: 30, stiffness: 200 }}
        />
      </div>

      <div className="container mx-auto px-6 relative z-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
            style={{ y, opacity }}
          >
            <motion.h1
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="text-5xl lg:text-6xl font-bold"
            >
              Hi, I'm{" "}
              <motion.span
                className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                Jeffrey Benson
              </motion.span>
            </motion.h1>

            <motion.h2
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="text-2xl lg:text-3xl text-muted-foreground"
            >
              AI & Data Science Student
            </motion.h2>

            <motion.p
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="text-lg text-muted-foreground max-w-lg"
            >
              Passionate B.Tech student specializing in Artificial Intelligence and Data Science. 
              I love building intelligent systems, analyzing data patterns, and creating innovative 
              solutions that make a difference.
            </motion.p>

            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.8, duration: 0.8 }}
              className="flex gap-4 flex-wrap"
            >
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button 
                  size="lg" 
                  className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 transition-all duration-300"
                  asChild
                >
                  <a 
                    href="/CLUSTREX_RESUME.pdf" 
                    download="Jeffrey_Benson_Resume.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Download className="mr-2 h-4 w-4" />
                    Download Resume
                  </a>
                </Button>
              </motion.div>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button variant="outline" size="lg" className="hover:bg-gradient-to-r hover:from-blue-600/10 hover:to-purple-600/10 transition-all duration-300">
                  View Projects
                </Button>
              </motion.div>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ x: 100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="flex flex-col items-center gap-8"
            style={{ y, opacity }}
          >
            <div className="relative">
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 blur-md opacity-30"
              />
              <motion.div
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                <img
                  src="/coat1copy.jpg"
                  alt="Jeffrey's Profile"
                  className="relative w-80 h-80 rounded-full object-cover border-4 border-background shadow-2xl"
                />
              </motion.div>
            </div>

            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 1, duration: 0.8 }}
              className="flex gap-6"
            >
              {[
                { 
                  icon: Github, 
                  href: "https://github.com/Jeffrey2600", 
                  label: "GitHub",
                  color: "hover:text-gray-800 dark:hover:text-gray-200"
                },
                { 
                  icon: Linkedin, 
                  href: "https://www.linkedin.com/in/jeffrey-benson-2891bb252/", 
                  label: "LinkedIn",
                  color: "hover:text-blue-600 dark:hover:text-blue-400"
                },
                { 
                  icon: Code2, 
                  href: "https://leetcode.com/Jeffrey2600/", 
                  label: "LeetCode",
                  color: "hover:text-orange-600 dark:hover:text-orange-400"
                },
                { 
                  icon: Instagram, 
                  href: "https://www.instagram.com/jeff_the_mad_shifter/", 
                  label: "Instagram",
                  color: "hover:text-pink-600 dark:hover:text-pink-400"
                },
                { 
                  icon: Mail, 
                  href: "#contact", 
                  label: "Contact",
                  color: "hover:text-purple-600 dark:hover:text-purple-400"
                }
              ].map((item, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.2, rotate: 5 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <Button 
                    variant="ghost" 
                    size="icon" 
                    className={`group relative w-12 h-12 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 text-white border-none hover:from-blue-700 hover:to-purple-700 transition-all duration-300 ${item.color}`}
                    asChild
                  >
                    <a 
                      href={item.href} 
                      target={item.href.startsWith('http') ? "_blank" : undefined} 
                      rel={item.href.startsWith('http') ? "noopener noreferrer" : undefined}
                    >
                      <item.icon className="h-7 w-7 transition-transform group-hover:scale-110" />
                      <span className="absolute -bottom-10 left-1/2 -translate-x-1/2 bg-background/80 backdrop-blur-sm border border-muted/50 px-3 py-1.5 rounded-full text-sm font-medium opacity-0 group-hover:opacity-100 transition-all duration-200 whitespace-nowrap shadow-sm">
                        {item.label}
                      </span>
                    </a>
                  </Button>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
