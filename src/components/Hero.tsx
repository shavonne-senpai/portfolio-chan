import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

export default function Hero() {
    return (
        <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 to-gray-950">
            <div className="container mx-auto px-6 text-center">
                {/* Main Content */}
                <div className="max-w-4xl mx-auto">
                    {/* Status Badge */}
                    <Badge
                        variant="outline"
                        className="mb-6 border-fuchsia-500/30 text-fuchsia-300 hover:border-fuchsia-400 transition-colors"
                    >
                        ✨ Available for new opportunities
                    </Badge>

                    {/* Main Heading */}
                    <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6">
                        Hi, I'm{" "}
                        <span className="bg-gradient-to-r from-fuchsia-400 to-pink-400 bg-clip-text text-transparent">
              Shavonne
            </span>
                    </h1>

                    {/* Subheading */}
                    <p className="text-xl md:text-2xl text-slate-300 mb-8 leading-relaxed">
                        Senior Front-End Engineer with a{" "}
                        <span className="text-fuchsia-400 font-semibold">psychology background</span>
                        {" "}who builds user experiences that actually make sense.
                    </p>

                    {/* Description */}
                    <p className="text-lg text-slate-400 mb-10 max-w-2xl mx-auto leading-relaxed">
                        I combine 5 years of React expertise with human psychology insights to create
                        interfaces that users love. Currently exploring modern tools like Next.js and Tailwind CSS.
                    </p>

                    {/* Tech Stack Pills */}
                    <div className="flex flex-wrap justify-center gap-3 mb-10">
                        {['React', 'TypeScript', 'Next.js', 'Tailwind CSS', 'Angular', 'Node.js'].map((tech) => (
                            <Badge
                                key={tech}
                                variant="secondary"
                                className="bg-gray-800/50 text-gray-300 hover:bg-fuchsia-900/30 hover:text-fuchsia-300 transition-all cursor-default"
                            >
                                {tech}
                            </Badge>
                        ))}
                    </div>

                    {/* CTA Buttons */}
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Button
                            size="lg"
                            className="bg-fuchsia-900 hover:bg-fuchsia-950 text-white px-8 py-3 text-lg font-semibold transition-all hover:scale-105"
                        >
                            View My Projects
                        </Button>
                        <Button
                            size="lg"
                            variant="outline"
                            className="border-fuchsia-500/50 text-fuchsia-300 hover:bg-fuchsia-900/20 hover:border-fuchsia-400 px-8 py-3 text-lg font-semibold transition-all"
                        >
                            Let's Connect
                        </Button>
                    </div>
                </div>

                {/* Scroll Indicator */}
                <div className="absolute bottom-8 left-1/2 transform -trangray-x-1/2 animate-bounce">
                    <div className="w-6 h-10 border-2 border-fuchsia-400/50 rounded-full flex justify-center">
                        <div className="w-1 h-3 bg-fuchsia-400 rounded-full mt-2 animate-pulse"></div>
                    </div>
                </div>
            </div>
        </section>
    )
}
