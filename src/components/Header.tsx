import { motion, useScroll, useTransform } from "framer-motion"
import { useState, useEffect } from "react"
import { Menu, X } from "lucide-react"
import { Button } from "./ui/button"

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const { scrollY } = useScroll()
  const headerY = useTransform(scrollY, [0, 100], [0, -100])
  const headerOpacity = useTransform(scrollY, [0, 100], [1, 0])

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navItems = [
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Certificates", href: "#certificates" },
    { name: "Resume", href: "#resume" },
    { name: "Contact", href: "#contact" },
  ]

  return (
    <motion.header
      style={{ y: headerY, opacity: headerOpacity }}
      className={`fixed top-0 w-full z-40 transition-all duration-300 ${
        isScrolled ? 'bg-background/90 shadow-lg' : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-6">
        {/* Logo and Navigation */}
        <div className="flex items-center justify-between py-4">
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent cursor-pointer"
          >
            Jeffrey.dev
          </motion.div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item, index) => (
              <motion.a
                key={item.name}
                href={item.href}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ 
                  scale: 1.05,
                  color: "rgb(37, 99, 235)" // blue-600
                }}
                className="text-foreground/80 hover:text-foreground transition-colors relative group"
              >
                {item.name}
                <motion.span
                  className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-600 to-purple-600"
                  whileHover={{ width: "100%" }}
                  transition={{ duration: 0.2 }}
                />
              </motion.a>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center space-x-4">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="relative z-50"
            >
              {isMobileMenuOpen ? <X /> : <Menu />}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <motion.div
        initial={false}
        animate={isMobileMenuOpen ? "open" : "closed"}
        variants={{
          open: { opacity: 1, height: "auto" },
          closed: { opacity: 0, height: 0 }
        }}
        transition={{ duration: 0.3 }}
        className="md:hidden bg-background/95 border-t"
      >
        <div className="container mx-auto px-6 py-4">
          <div className="flex flex-col space-y-4">
            {navItems.map((item, index) => (
              <motion.a
                key={item.name}
                href={item.href}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ x: 10 }}
                className="text-foreground/80 hover:text-foreground transition-colors py-2"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {item.name}
              </motion.a>
            ))}
          </div>
        </div>
      </motion.div>
    </motion.header>
  )
}
