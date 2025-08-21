import { motion, useScroll, useTransform } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Github, ExternalLink, Play } from "lucide-react"
import { useRef } from "react"
import attendanceImg from "@/photos/attendance.png"
import attendanceVideo from "@/photos/attendance.mp4"
import ecommerceImg from "@/photos/ecommerce.png"
import ecommerceVideo from "@/photos/ecommerce_video.mp4"
import kamarajImg from "@/photos/kamarajwebsite.png"
import kamarajVideo from "@/photos/kamaraj_website_video.mp4"
import n8nImg from "@/photos/n8n.png"
import n8nVideo from "@/photos/n8n.mp4"

export function Projects() {
  const containerRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  })

  const projects = [
    {
      title: "AI-Based Real-Time Face Recognition Attendance System",
      description: "A smart attendance system that uses face recognition for real-time identification and automatic logging. Built with a Python backend and a React.js frontend, it features live video recognition, recent attendance display, and a teacher dashboard for attendance management.\n",
      image: attendanceImg,
      tech: ["Python", "opencv", "arcface","retinaface","react", "mysql","face-recognition"],
      github: "https://github.com/jeff/stock-predictor",
      demo: "https://stock-predictor-demo.com",
      video: attendanceVideo,
      gradient: "from-blue-500 to-cyan-500"
    },
    {
      title: "E-commerce Platform Development",
      description: "Developed a comprehensive e-commerce platform for a retail company, featuring product catalog, shopping cart, payment gateway integration, and order management system to enable smooth online transactions and user experience.",
      image: ecommerceImg,
      tech: ["React.js ", "Node.js", "REST APIs", "MongoDB","Responsive Design"],
      github: "https://github.com/jeff/campus-assistant",
      demo: "https://campus-assistant-demo.com",
      video: ecommerceVideo,
      gradient: "from-purple-500 to-pink-500"
    },
    {
      title: "Climate Data Analyzer",
      description: "Built and deployed a modern, responsive college symposium website using HTML, CSS, Bootstrap, and Netlify. Integrated Google Forms for registration, leading to 200+ user signups in the first week.",
      image: kamarajImg,
      tech: ["Netlify ", "Bootstrap", "GitHub ", "Google Forms Integration", "Responsive Web Design"],
      github: "https://github.com/jeff/climate-analyzer",
      demo: "https://climate-analyzer-demo.com",
      video: kamarajVideo,
      gradient: "from-green-500 to-emerald-500"
    },
    {
      title: "Smart Resume-Based Job Finder using n8n",
      description: "An automated workflow built with n8n that parses user resumes, extracts key skills using NLP, and matches them with real-time job listings from public APIs. The system dynamically sends matched job opportunities to the user via email — fully automated with no manual input.",
      image: n8nImg,
      tech: ["n8n", "Python", "NLP", "API Integration", "Email Automation"],
      github: "https://github.com/jeff/face-attendance",
      demo: "https://face-attendance-demo.com",
      video: n8nVideo,
      gradient: "from-orange-500 to-red-500"
    }
  ]

  return (
    <section id="projects" className="py-16 relative overflow-hidden bg-background" ref={containerRef}>
      {/* Animated background elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-background/80">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,rgba(120,119,198,0.2),rgba(255,255,255,0))]" />
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/5 via-purple-600/5 to-pink-600/5" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <motion.h2 
            className="text-4xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
          >
            Featured Projects
          </motion.h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            A showcase of my work in AI, data science, and web development
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.02 }}
            >
              <Card className="h-full overflow-hidden group hover:shadow-lg transition-all duration-300 bg-background/80 border-muted/50 hover:border-muted/80">
                <div className="relative overflow-hidden">
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r opacity-0 group-hover:opacity-20 transition-opacity duration-300"
                    style={{
                      background: `linear-gradient(to right, var(--${project.gradient.split('-')[1]}-500), var(--${project.gradient.split('-')[3]}-500))`
                    }}
                  />
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <Button 
                      size="sm" 
                      variant="secondary" 
                      className="bg-background/90"
                      asChild
                    >
                      <a href={project.video} target="_blank" rel="noopener noreferrer">
                        <Play className="mr-2 h-4 w-4" />
                        Watch Demo
                      </a>
                    </Button>
                  </div>
                </div>
                
                <CardHeader className="pb-0 pt-2">
                  <CardTitle className="text-xl bg-gradient-to-r bg-clip-text text-transparent" style={{
                    background: `linear-gradient(to right, var(--${project.gradient.split('-')[1]}-500), var(--${project.gradient.split('-')[3]}-500))`
                  }}>
                    {project.title}
                  </CardTitle>
                </CardHeader>
                
                <CardContent className="space-y-2 pt-1">
                  <p className="text-muted-foreground text-sm leading-relaxed">{project.description}</p>
                  
                  <div className="flex flex-wrap gap-1">
                    {project.tech.map((tech) => (
                      <Badge 
                        key={tech} 
                        variant="secondary"
                        className="bg-background/70 hover:bg-background/90 transition-colors text-xs"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                  
                  <div className="flex gap-2">
                    <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                      <Button variant="outline" size="sm" asChild className="hover:bg-gradient-to-r hover:from-blue-600/10 hover:to-purple-600/10">
                        <a href={project.github} target="_blank" rel="noopener noreferrer">
                          <Github className="mr-2 h-4 w-4" />
                          Code
                        </a>
                      </Button>
                    </motion.div>
                    <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                      <Button variant="outline" size="sm" asChild className="hover:bg-gradient-to-r hover:from-blue-600/10 hover:to-purple-600/10">
                        <a href={project.demo} target="_blank" rel="noopener noreferrer">
                          <ExternalLink className="mr-2 h-4 w-4" />
                          Live Demo
                        </a>
                      </Button>
                    </motion.div>
                    <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                      <Button variant="ghost" size="sm" className="hover:bg-gradient-to-r hover:from-blue-600/10 hover:to-purple-600/10">
                        Read More
                      </Button>
                    </motion.div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
