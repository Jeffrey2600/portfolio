import { motion } from "framer-motion"
import { Github, Linkedin, Mail, Heart } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Footer() {
  return (
    <footer className="relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-background/80">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,rgba(120,119,198,0.2),rgba(255,255,255,0))]" />
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/5 via-purple-600/5 to-pink-600/5" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid md:grid-cols-3 gap-8">
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="text-xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Jeff.dev
            </h3>
            <p className="text-muted-foreground mb-4">
              AI & Data Science Student passionate about building intelligent systems 
              that make a difference in the world.
            </p>
            <div className="flex gap-3">
              <Button variant="ghost" size="icon">
                <Github className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon">
                <Linkedin className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon">
                <Mail className="h-5 w-5" />
              </Button>
            </div>
          </motion.div>

          <motion.div
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-muted-foreground">
              <li><a href="#about" className="hover:text-foreground transition-colors">About</a></li>
              <li><a href="#skills" className="hover:text-foreground transition-colors">Skills</a></li>
              <li><a href="#projects" className="hover:text-foreground transition-colors">Projects</a></li>
              <li><a href="#contact" className="hover:text-foreground transition-colors">Contact</a></li>
            </ul>
          </motion.div>

          <motion.div
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h4 className="font-semibold mb-4">Technologies</h4>
            <ul className="space-y-2 text-muted-foreground">
              <li>Machine Learning</li>
              <li>Data Science</li>
              <li>Web Development</li>
              <li>Cloud Computing</li>
            </ul>
          </motion.div>
        </div>

        <motion.div
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
          className="border-t pt-8 mt-8 text-center text-muted-foreground"
        >
          <p className="flex items-center justify-center gap-2">
            Made with <Heart className="h-4 w-4 text-red-500" /> by Jeff
          </p>
          <p className="mt-2 text-sm">
            © 2024 Jeff.dev. All rights reserved.
          </p>
        </motion.div>
      </div>
    </footer>
  )
}
