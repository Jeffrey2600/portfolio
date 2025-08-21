import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Github, Linkedin, Mail, Phone, MapPin, Code2, Instagram } from "lucide-react"

export function Contact() {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
    console.log("Form submitted")
  }

  return (
    <section id="contact" className="py-20 relative overflow-hidden">
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
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4">Get In Touch</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Let's connect! Whether you have a project in mind or just want to chat about AI and data science
          </p>
        </motion.div>

        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12">
          <motion.div
            initial={{ x: -50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-2xl font-semibold mb-6">Contact Information</h3>
              
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                    <Mail className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <p className="font-medium">Email</p>
                    <p className="text-muted-foreground">jeffreystaffin@gmail.com</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                    <Phone className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <p className="font-medium">Phone</p>
                    <p className="text-muted-foreground">+91 9894705498</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                    <MapPin className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <p className="font-medium">Location</p>
                    <p className="text-muted-foreground">16 b Balasubramaniyan nagar, Thirunagar 7th stop , Thiruparankundram,Madurai-625005,Tamil Nadu, India</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-4">Follow Me</h4>
              <div className="flex gap-4">
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
                      className={`group relative w-12 h-12 rounded-full bg-background/50 backdrop-blur-sm border border-muted/50 hover:border-muted/80 ${item.color} transition-all duration-300`}
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
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ x: 50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <Card className="backdrop-blur-sm bg-background/30 border-muted/30 hover:border-muted/50">
              <CardHeader>
                <CardTitle className="bg-gradient-to-r from-blue-500/90 to-purple-500/90 bg-clip-text text-transparent">Send me a message</CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="firstName" className="text-muted-foreground/80">First Name</Label>
                      <Input id="firstName" placeholder="John" required className="bg-background/30 border-muted/30 focus:border-blue-500/30" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="lastName" className="text-muted-foreground/80">Last Name</Label>
                      <Input id="lastName" placeholder="Doe" required className="bg-background/30 border-muted/30 focus:border-blue-500/30" />
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="email" className="text-muted-foreground/80">Email</Label>
                    <Input id="email" type="email" placeholder="john@example.com" required className="bg-background/30 border-muted/30 focus:border-blue-500/30" />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="subject" className="text-muted-foreground/80">Subject</Label>
                    <Input id="subject" placeholder="Let's work together!" required className="bg-background/30 border-muted/30 focus:border-blue-500/30" />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="message" className="text-muted-foreground/80">Message</Label>
                    <Textarea 
                      id="message" 
                      placeholder="Tell me about your project or just say hello!"
                      className="min-h-[120px] bg-background/30 border-muted/30 focus:border-blue-500/30"
                      required 
                    />
                  </div>
                  
                  <Button type="submit" className="w-full bg-gradient-to-r from-blue-500/90 to-purple-500/90 hover:from-blue-600/90 hover:to-purple-600/90">
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
