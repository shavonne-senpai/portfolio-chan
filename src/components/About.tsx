import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export default function About() {
    const skills = [
        { category: "Frontend", techs: ["React", "TypeScript", "Next.js", "Angular"] },
        { category: "Styling", techs: ["Tailwind CSS", "CSS3", "Responsive Design"] },
        { category: "Tools", techs: ["Git", "Webpack", "Vite", "Jest"] },
        { category: "Backend", techs: ["Node.js", "REST APIs", "GraphQL"] }
    ]

    return (
        <section className="py-20 px-6 bg-gray-950">
            <div className="container mx-auto max-w-6xl">
                {/* Section Header */}
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                        About Me
                    </h2>
                    <p className="text-xl text-slate-400 max-w-2xl mx-auto">
                        Where psychology meets code - building interfaces that make sense to humans
                    </p>
                </div>

                <div className="grid md:grid-cols-2 gap-12 items-start">
                    {/* Story Side */}
                    <div className="space-y-6">
                        <Card className="p-8 bg-gray-900/50 border-slate-800 hover:bg-gray-900/70 transition-colors">
                            <h3 className="text-2xl font-semibold text-white mb-4 flex items-center">
                                🧠 The Psychology Connection
                            </h3>
                            <p className="text-slate-300 leading-relaxed mb-4">
                                My journey started in psychology, where I learned how people think, process information,
                                and interact with their environment. This foundation gives me a unique perspective on
                                user experience that goes beyond just making things look pretty.
                            </p>
                            <p className="text-gray-300 leading-relaxed">
                                When I discovered front-end development, it clicked immediately - I was essentially
                                designing digital environments that needed to work with human psychology, not against it.
                            </p>
                        </Card>

                        <Card className="p-8 bg-gray-900/50 border-gray-800 hover:bg-gray-900/70 transition-colors">
                            <h3 className="text-2xl font-semibold text-white mb-4 flex items-center">
                                💻 5 Years of Building
                            </h3>
                            <p className="text-slate-300 leading-relaxed mb-4">
                                Over the past 5 years, I've worked with React, Angular, and everything in between.
                                I've built complex enterprise applications, led frontend architecture decisions,
                                and mentored other developers.
                            </p>
                            <p className="text-slate-300 leading-relaxed">
                                Currently diving deep into modern tools like Next.js, Tailwind CSS, and the latest
                                React patterns. I believe in staying current while building on solid fundamentals.
                            </p>
                        </Card>

                        <Card className="p-8 bg-gray-900/50 border-gray-800 hover:bg-gray-900/70 transition-colors">
                            <h3 className="text-2xl font-semibold text-white mb-4 flex items-center">
                                🎯 What Drives Me
                            </h3>
                            <p className="text-slate-300 leading-relaxed">
                                I'm passionate about creating interfaces that feel intuitive, performant, and delightful.
                                Whether it's optimizing a complex form flow or building a responsive component library,
                                I approach every project thinking about the human on the other side of the screen.
                            </p>
                        </Card>
                    </div>

                    {/* Skills Side */}
                    <div className="space-y-6">
                        <div className="text-center md:text-left">
                            <h3 className="text-2xl font-semibold text-white mb-6">Technical Skills</h3>
                        </div>

                        {skills.map((skillGroup, index) => (
                            <Card key={index} className="p-6 bg-gray-900/50 border-gray-800 hover:bg-gray-900/70 transition-colors">
                                <h4 className="text-lg font-semibold text-fuchsia-400 mb-3">
                                    {skillGroup.category}
                                </h4>
                                <div className="flex flex-wrap gap-2">
                                    {skillGroup.techs.map((tech, techIndex) => (
                                        <Badge
                                            key={techIndex}
                                            variant="secondary"
                                            className="bg-gray-800 text-slate-300 hover:bg-fuchsia-900/30 hover:text-fuchsia-300 transition-colors"
                                        >
                                            {tech}
                                        </Badge>
                                    ))}
                                </div>
                            </Card>
                        ))}

                        {/* Fun Fact */}
                        <Card className="p-6 bg-gradient-to-br from-fuchsia-900/20 to-pink-900/20 border-fuchsia-800/30">
                            <h4 className="text-lg font-semibold text-fuchsia-300 mb-3 flex items-center">
                                ✨ Fun Fact
                            </h4>
                            <p className="text-slate-300">
                                I'm building an anime tracking app to showcase modern React patterns -
                                because the best way to learn new tech is to build something you're passionate about!
                            </p>
                        </Card>
                    </div>
                </div>
            </div>
        </section>
    )
}
