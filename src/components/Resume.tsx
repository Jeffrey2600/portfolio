import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Download, Eye } from "lucide-react"

export function Resume() {
  return (
    <section id="resume" className="py-6 relative overflow-hidden">
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
          className="text-center mb-4"
        >
          <h2 className="text-4xl font-bold mb-2">Resume</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Download my complete resume or view it online
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <Card className="overflow-hidden mt-0">
              <CardContent className="p-0">
                <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white p-4">
                  <div className="flex flex-col md:flex-row items-center justify-between gap-4">
                    <div className="text-center md:text-left">
                      <h3 className="text-2xl font-bold mb-2">Jeff's Resume</h3>
                      <p className="text-blue-100">
                        AI & Data Science Student | Full-Stack Developer
                      </p>
                      <p className="text-blue-200 text-sm mt-2">
                        Last updated: December 2024
                      </p>
                    </div>
                    
                    <div className="flex flex-col sm:flex-row gap-4">
                      <Button 
                        variant="secondary" 
                        size="lg"
                        className="bg-white text-blue-600 hover:bg-gray-100"
                        asChild
                      >
                        <a href="/CLUSTREX_RESUME.pdf" target="_blank" rel="noopener noreferrer">
                          <Eye className="mr-2 h-4 w-4" />
                          Preview Resume
                        </a>
                      </Button>
                      <Button 
                        variant="secondary" 
                        size="lg"
                        className="bg-white text-blue-600 hover:bg-gray-100"
                        asChild
                      >
                        <a href="/CLUSTREX_RESUME.pdf" download="Jeffrey_Benson_Resume.pdf">
                          <Download className="mr-2 h-4 w-4" />
                          Download PDF
                        </a>
                      </Button>
                    </div>
                  </div>
                </div>
                
                <div className="p-0 bg-muted/30">
                  <div className="aspect-[8.5/11] bg-white rounded-lg shadow-lg overflow-hidden flex items-center justify-center">
                    <embed
                      src="/CLUSTREX_RESUME.pdf#toolbar=0&navpanes=0&scrollbar=0"
                      type="application/pdf"
                      className="w-full h-[80vh] min-h-[600px] border-0"
                    />
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
