import {Code2, Lightbulb,Users,Rocket} from "lucide-react";
const highlights=[
  {
    icon:Code2,
    title:"Clean Code",
    description:"Writing clean, maintainable, and efficient code following best practices."
  },
  {
    icon:Rocket,
    title:"Problem Solving",
    description:"Strong problem-solving skills with the ability to debug and optimize code effectively."
  },
  {
    icon:Users,
    title:"Collaboration",
    description:"Experience working in agile teams, collaborating effectively with cross-functional teams."
  },  {
    icon:Lightbulb,
    title:"Continuous Learning",
    description:"Committed to continuous learning and staying updated with the latest industry trends and technologies."
  }
]
export const About = () => {
  return <section id="about" className="py-32 relative overflow-hidden">
     <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Column */}
          <div className="space-y-8">
            <div className="animate-fade-in">
              <span className="text-secondary-foreground text-sm font-medium tracking-wider uppercase">
                About Me
              </span>
            </div>

            <h2 className="text-4xl md:text-5xl font-bold leading-tight animate-fade-in animation-delay-100 text-secondary-foreground">
              Building the future,
              <span className="font-serif italic font-normal text-white">
                {" "}
                one component at a time.
              </span>
            </h2>

            <div className="space-y-4 text-muted-foreground animate-fade-in animation-delay-200">
              <p>
                I’m a passionate software engineering student with a strong interest in web development and problem
                solving. My journey started with curiosity about how websites work, and over time it turned into building
                real projects and improving my coding skills every day.
              </p>
              <p>
                I work with modern frontend technologies like React, JavaScript, HTML, and CSS, and I actively practice
                Data Structures & Algorithms to strengthen my logical thinking. I enjoy building clean, responsive
                interfaces and continuously learning how to write better, scalable code.
                keen eye for design and user experience.
              </p>
              <p>
                When I’m not coding, I’m usually thinking of a DSA problems, exploring new technologies,
                or improving my existing projects to become a better developer.
              </p>
            </div>

            <div className="glass rounded-2xl p-6 glow-border animate-fade-in animation-delay-300">
              <p className="text-lg font-medium italic text-foreground">
                "My mission is to combine strong problem-solving skills with 
                 modern web development to create efficient
                 and reliable digital products".
              </p>
            </div>
          </div>

          {/* Right Column - Hilights */}
          <div className="grid sm:grid-cols-2 gap-6">
            {highlights.map((item, idx) => (
              <div
                key={idx}
                className="glass p-6 rounded-2xl animate-fade-in"
                style={{ animationDelay: `${(idx + 1) * 100}ms` }}
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 hover:bg-primary/20">
                  <item.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
  </section>
}