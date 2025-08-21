import { motion, useScroll, useTransform } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { useRef, useState } from "react"

export function Certificates() {
  const containerRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  })
  const [modalImage, setModalImage] = useState<string | null>(null)

  const certificates = [
    {
      title: " AWS Certified Cloud Practitioner (CLF-C02)",
      issuer: "AWS",
      date: "30 June 2025",
      image: "src/photos/aws.png",
      skills: ["AWS "," Cloud Computing "," IAM "," EC2 "," S3 ","Real-Time Cloud Integration"],
      gradient: "from-blue-500 to-cyan-500"
    },
    {
      title: "Advanced C Programming Certificate",
      issuer: "CodeTantra",
      date: "17 Feb 2024",
      image: "src/photos/codetantrazoom.jpg",
      skills: ["C Programming", "Data Structures", "Algorithms", "Problem Solving","Pointers "," Recursion","Memory Management"],
      credentialId: "DEF789012",
      gradient: "from-purple-500 to-pink-500"
    },
    {
      title: "Django course Certification",
      issuer: "HDLC",
      date: "9 Aug2024",
      image: "src/photos/hdlc_django.jpg",
      skills: ["Django", "Python", "Web Development", "REST APIs", "Database Management"],
      credentialId: "GHI345678",
      gradient: "from-orange-500 to-yellow-500"
    },
    {
      title: "Kaggle Competition Expert",
      issuer: "Kaggle",
      date: "2023",
      image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=200&h=200&fit=crop",
      skills: ["Data Science", "Machine Learning", "Competition"],
      credentialId: "KGL901234",
      gradient: "from-green-500 to-emerald-500"
    }
  ]

  return (
    <section id="certificates" className="py-20 bg-muted/30 relative overflow-hidden" ref={containerRef}>
      {/* Modal for enlarged certificate image */}
      {modalImage && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm" onClick={() => setModalImage(null)}>
          <div className="relative max-w-3xl w-full flex flex-col items-center" onClick={e => e.stopPropagation()}>
            <button className="absolute top-2 right-2 text-white text-2xl bg-black/40 rounded-full px-3 py-1 hover:bg-black/70 transition" onClick={() => setModalImage(null)}>&times;</button>
            <img src={modalImage} alt="Certificate Large" className="rounded-xl shadow-2xl max-h-[80vh] w-auto object-contain bg-white" />
          </div>
        </div>
      )}
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
          <motion.h2 
            className="text-4xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
          >
            Certificates & Achievements
          </motion.h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Professional certifications and recognition in AI, data science, and cloud technologies
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
          {certificates.map((cert, index) => (
            <motion.div
              key={cert.title}
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.02 }}
            >
              <Card className={`h-full transition-all duration-300 group flex flex-row items-center min-h-[200px] p-3 bg-[#f5f3ff]/90 border border-violet-200 shadow-xl`}>
                <CardContent className={`w-full flex flex-row items-center gap-6 p-0`}>
                  <div className={`flex-shrink-0 flex items-center justify-center w-40 h-40 md:w-52 md:h-52 rounded-xl overflow-hidden bg-white/80 border border-blue-200 shadow-lg`} style={{minWidth: '10rem', minHeight: '10rem'}}>
                    <motion.div 
                      className={`relative w-full h-full cursor-pointer`}
                      whileHover={{ scale: 1.05, rotate: 2 }}
                      transition={{ type: "spring", stiffness: 400, damping: 10 }}
                      onClick={() => setModalImage(cert.image)}
                    >
                      <img
                        src={cert.image}
                        alt={`${cert.issuer} logo`}
                        className={`rounded-xl object-contain w-full h-full max-h-52 max-w-52 bg-white`}
                      />
                    </motion.div>
                  </div>
                  <div className="flex-1 min-w-0">
                    <motion.h3 
                      className="font-semibold text-2xl mb-2 bg-gradient-to-r bg-clip-text text-transparent group-hover:opacity-80 transition-opacity from-blue-600 to-cyan-600"
                      style={{background: 'linear-gradient(to right, #2563eb, #06b6d4)', WebkitBackgroundClip: 'text', color: 'transparent'}}>
                      {cert.title}
                    </motion.h3>
                    <div className="space-y-2 mb-4">
                      <p className="text-muted-foreground font-medium text-lg">{cert.issuer}</p>
                      <p className="text-sm text-muted-foreground">Issued on: {cert.date}</p>
                      {/* <p className="text-xs text-muted-foreground">ID: {cert.credentialId}</p> */}
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {cert.skills.map((skill) => (
                        <motion.div
                          key={skill}
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                        >
                          <Badge 
                            variant="secondary" 
                            className="text-xs bg-background/50 backdrop-blur-sm hover:bg-background/80 transition-colors"
                          >
                            {skill}
                          </Badge>
                        </motion.div>
                      ))}
                    </div>
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
