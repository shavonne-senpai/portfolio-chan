import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

export default function Projects() {
    const projects = [
        {
            title: "Anime Tracker",
            description: "A clean, mobile-first anime tracking application built with modern React patterns. Features real-time search via the Jikan API, visual progress tracking, and persistent local storage.",
            longDescription: "This project showcases modern React development with TypeScript, responsive design, and thoughtful UX. Built as a portfolio piece to demonstrate technical skills while solving a real problem for anime fans who want simple, beautiful tracking without social media complexity.",
            tech: ["React", "TypeScript", "Tailwind CSS", "Jikan API", "Local Storage"],
            highlights: [
                "Real-time anime search with API integration",
                "Visual progress tracking with smart conditional rendering",
                "Mobile-first responsive design",
                "Complete CRUD operations with error handling"
            ],
            github: "https://github.com/shavonne-senpai/anime-tracker",
            demo: "https://senpai-anime-tracker.vercel.app",
            featured: true,
            image: "🎌" // Emoji placeholder - replace with real image later
        },
        {
            title: "Portfolio Site",
            description: "This very portfolio! Built with Next.js, shadcn/ui, and deployed on Vercel. Showcases modern React patterns, server-side rendering, and component-driven development.",
            tech: ["Next.js", "TypeScript", "Tailwind CSS", "shadcn/ui", "Vercel"],
            github: "https://github.com/shavonne-senpai/portfolio-chan",
            demo: "#", // Will be the live site
            image: "💜"
        },
        {
            title: "Coming Soon...",
            description: "I'm always working on something new! Follow my GitHub to see what I'm building next. Maybe a blog with MDX, or a component library, or something totally unexpected.",
            tech: ["React", "TypeScript", "???"],
            github: "https://github.com/shavonne-senpai",
            placeholder: true,
            image: "🚀"
        }
    ]

    return (
        <section className="py-20 px-6 bg-gray-900">
            <div className="container mx-auto max-w-7xl">
                {/* Section Header */}
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                        Featured Projects
                    </h2>
                    <p className="text-xl text-slate-400 max-w-2xl mx-auto">
                        Building with modern tools, focusing on user experience and clean code
                    </p>
                </div>

                {/* Projects Grid */}
                <div className="grid gap-8">
                    {projects.map((project, index) => (
                        <Card key={index} className={`group overflow-hidden bg-gray-950/50 border-gray-800 hover:bg-gray-950/80 transition-all duration-300 ${project.featured ? 'md:p-8 p-6' : 'p-6'}`}>
                            <div className={`${project.featured ? 'grid md:grid-cols-2 gap-8 items-center' : 'space-y-4'}`}>

                                {/* Project Image/Icon */}
                                <div className={`${project.featured ? 'order-2 md:order-1' : ''}`}>
                                    <div className="flex items-center justify-center h-48 bg-gradient-to-br from-fuchsia-900/20 to-pink-900/20 rounded-lg border border-fuchsia-800/20">
                                        <span className="text-6xl">{project.image}</span>
                                    </div>
                                </div>

                                {/* Project Details */}
                                <div className={`space-y-4 ${project.featured ? 'order-1 md:order-2' : ''}`}>

                                    {/* Title and Featured Badge */}
                                    <div className="flex items-center gap-3 flex-wrap">
                                        <h3 className={`font-bold text-white ${project.featured ? 'text-3xl' : 'text-2xl'}`}>
                                            {project.title}
                                        </h3>
                                        {project.featured && (
                                            <Badge className="bg-fuchsia-600 text-white hover:bg-fuchsia-700">
                                                Featured ⭐
                                            </Badge>
                                        )}
                                        {project.placeholder && (
                                            <Badge variant="outline" className="border-gray-600 text-slate-400">
                                                Coming Soon
                                            </Badge>
                                        )}
                                    </div>

                                    {/* Description */}
                                    <p className="text-slate-300 leading-relaxed">
                                        {project.description}
                                    </p>

                                    {/* Long Description for Featured */}
                                    {project.featured && project.longDescription && (
                                        <p className="text-slate-400 leading-relaxed">
                                            {project.longDescription}
                                        </p>
                                    )}

                                    {/* Highlights for Featured */}
                                    {project.featured && project.highlights && (
                                        <div className="space-y-2">
                                            <h4 className="text-fuchsia-400 font-semibold">Key Features:</h4>
                                            <ul className="space-y-1">
                                                {project.highlights.map((highlight, idx) => (
                                                    <li key={idx} className="text-slate-300 flex items-start">
                                                        <span className="text-fuchsia-400 mr-2">•</span>
                                                        {highlight}
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    )}

                                    {/* Tech Stack */}
                                    <div className="space-y-2">
                                        <h4 className="text-sm font-semibold text-slate-400 uppercase tracking-wide">
                                            Tech Stack
                                        </h4>
                                        <div className="flex flex-wrap gap-2">
                                            {project.tech.map((tech, techIndex) => (
                                                <Badge
                                                    key={techIndex}
                                                    variant="secondary"
                                                    className="bg-gray-800 text-slate-300 hover:bg-fuchsia-900/30 hover:text-fuchsia-300 transition-colors"
                                                >
                                                    {tech}
                                                </Badge>
                                            ))}
                                        </div>
                                    </div>

                                    {/* Action Buttons */}
                                    <div className="flex gap-3 pt-2">
                                        {!project.placeholder && (
                                            <>
                                                <Button
                                                    asChild
                                                    className="bg-fuchsia-600 hover:bg-fuchsia-700 text-white"
                                                >
                                                    <a href={project.demo} target="_blank" rel="noopener noreferrer">
                                                        View Live Demo
                                                    </a>
                                                </Button>
                                                <Button
                                                    asChild
                                                    variant="outline"
                                                    className="border-gray-600 text-slate-300 hover:bg-gray-800"
                                                >
                                                    <a href={project.github} target="_blank" rel="noopener noreferrer">
                                                        View Code
                                                    </a>
                                                </Button>
                                            </>
                                        )}
                                        {project.placeholder && (
                                            <Button
                                                asChild
                                                variant="outline"
                                                className="border-fuchsia-600/50 text-fuchsia-300 hover:bg-fuchsia-900/20"
                                            >
                                                <a href={project.github} target="_blank" rel="noopener noreferrer">
                                                    Follow My Work
                                                </a>
                                            </Button>
                                        )}
                                    </div>
                                </div>
                            </div>
                        </Card>
                    ))}
                </div>

                {/* CTA */}
                <div className="text-center mt-12">
                    <p className="text-slate-400 mb-6">
                        Want to see more? Check out my GitHub for additional projects and contributions.
                    </p>
                    <Button
                        asChild
                        size="lg"
                        variant="outline"
                        className="border-fuchsia-500/50 text-fuchsia-300 hover:bg-fuchsia-900/20 hover:border-fuchsia-400"
                    >
                        <a href="https://github.com/shavonne-senpai" target="_blank" rel="noopener noreferrer">
                            View All Projects on GitHub
                        </a>
                    </Button>
                </div>
            </div>
        </section>
    )
}
