import { motion, useScroll, useTransform } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { useRef } from "react"

export function Skills() {
  const containerRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  })

  const skillCategories = [
    {
      title: "Programming Languages",
      icon: "💻",
      skills: [
        { name: "C", level: 90, color: "from-blue-500 to-cyan-500" },
        { name: "Python", level: 80, color: "from-blue-600 to-indigo-600" },
        { name: "SQL", level: 80, color: "from-orange-500 to-red-500" },
        { name: "JavaScript", level: 70, color: "from-yellow-500 to-orange-500" },

      ]
    },
    // {
    //   title: "AI/ML Frameworks",
    //   icon: "🤖",
    //   skills: [
    //     { name: "TensorFlow", level: 85, color: "from-orange-500 to-red-500" },
    //     { name: "PyTorch", level: 80, color: "from-red-500 to-orange-500" },
    //     { name: "Scikit-learn", level: 90, color: "from-orange-400 to-yellow-400" },
    //     { name: "Pandas", level: 95, color: "from-blue-500 to-indigo-500" },
    //     { name: "NumPy", level: 90, color: "from-blue-400 to-purple-400" },
    //   ]
    // },
    
    {
      title: "Tools & Platforms",
      icon: "🛠️",
      skills: [
        { name: "Git", level: 85, color: "from-blue-500 to-cyan-500" },
        { name: "AWS", level: 65, color: "from-orange-400 to-yellow-400" },
        { name: "VS Code", level: 90, color: "from-blue-500 to-indigo-500" },
        { name: "Canva", level: 70, color: "from-blue-500 to-cyan-500" },
        { name: "Figma", level: 70, color: "from-blue-500 to-indigo-500" },

      ]
    }
  ]

  return (
    <section id="skills" className="py-20 bg-muted/30 relative overflow-hidden" ref={containerRef}>
      {/* Animated background elements */}
      {/* <motion.div
        className="absolute inset-0 bg-gradient-to-br from-background via-background to-background/80"
        style={{
          opacity: useTransform(scrollYProgress, [0, 0.5], [0.3, 0.1])
        }}
      /> */}
      <motion.div
        className="absolute w-[300px] h-[300px] rounded-full bg-gradient-to-r from-blue-600/10 to-purple-600/10 blur-lg"
        style={{
          x: useTransform(scrollYProgress, [0, 1], [0, 150]),
          y: useTransform(scrollYProgress, [0, 1], [0, -150]),
        }}
      />

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
            Skills & Expertise
          </motion.h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Here are the technologies and tools I work with to bring ideas to life
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: categoryIndex * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.02 }}
            >
              <Card className="h-full bg-background/80 border-muted/50 hover:border-muted/80 transition-colors">
                <CardHeader>
                  <div className="flex items-center gap-2">
                    <span className="text-2xl">{category.icon}</span>
                    <CardTitle className="text-xl">{category.title}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  {category.skills.map((skill, skillIndex) => (
                    <motion.div
                      key={skill.name}
                      className="space-y-2"
                      whileHover={{ x: 10 }}
                      transition={{ type: "spring", stiffness: 400, damping: 10 }}
                    >
                      <div className="flex justify-between text-sm">
                        <span className="font-medium">{skill.name}</span>
                        <span className="text-muted-foreground">{skill.level}%</span>
                      </div>
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: "100%" }}
                        transition={{ duration: 1, delay: (categoryIndex * 0.1) + (skillIndex * 0.1) }}
                        viewport={{ once: true }}
                        className="relative"
                      >
                        <div className={`absolute inset-0 bg-gradient-to-r ${skill.color} opacity-20 rounded-full`} />
                        <Progress 
                          value={skill.level} 
                          className="h-2 relative z-10"
                          style={{
                            background: `linear-gradient(to right, var(--${skill.color.split('-')[1]}-500), var(--${skill.color.split('-')[3]}-500))`
                          }}
                        />
                      </motion.div>
                    </motion.div>
                  ))}
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
