import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

export default function Contact() {
    const contactMethods = [
        {
            platform: "GitHub",
            handle: "@shavonne-senpai",
            url: "https://github.com/shavonne-senpai",
            description: "Check out my code, projects, and contributions",
            icon: "👩‍💻",
            primary: true
        },
        {
            platform: "LinkedIn",
            handle: "Connect with me",
            url: "#", // Add your LinkedIn URL
            description: "Let's connect professionally and discuss opportunities",
            icon: "💼"
        },
        {
            platform: "Email",
            handle: "your.email@domain.com", // Add your email
            url: "mailto:your.email@domain.com", // Add your email
            description: "Drop me a line about projects, opportunities, or just to say hi",
            icon: "📧"
        }
    ]

    return (
        <section className="py-20 px-6 bg-gray-950">
            <div className="container mx-auto max-w-4xl">
                {/* Section Header */}
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                        Let's Build Something Together
                    </h2>
                    <p className="text-xl text-slate-400 max-w-2xl mx-auto">
                        Always interested in new opportunities, collaborations, or just chatting about tech!
                    </p>
                </div>

                {/* Contact Methods */}
                <div className="grid md:grid-cols-3 gap-6 mb-12">
                    {contactMethods.map((contact, index) => (
                        <Card key={index} className={`p-6 bg-gray-900/50 border-gray-800 hover:bg-gray-900/70 transition-all duration-300 group ${contact.primary ? 'border-fuchsia-800/50' : ''}`}>
                            <div className="text-center space-y-4">
                                <div className="text-4xl">{contact.icon}</div>

                                <div>
                                    <h3 className={`text-xl font-semibold mb-2 ${contact.primary ? 'text-fuchsia-400' : 'text-white'}`}>
                                        {contact.platform}
                                    </h3>
                                    {contact.primary && (
                                        <Badge className="bg-fuchsia-600 text-white hover:bg-fuchsia-700 mb-2">
                                            Primary
                                        </Badge>
                                    )}
                                    <p className="text-slate-400 text-sm mb-3">
                                        {contact.description}
                                    </p>
                                </div>

                                <Button
                                    asChild
                                    className={contact.primary ?
                                        "bg-fuchsia-600 hover:bg-fuchsia-700 text-white w-full" :
                                        "bg-gray-800 hover:bg-gray-700 text-slate-300 w-full"
                                    }
                                >
                                    <a href={contact.url} target="_blank" rel="noopener noreferrer">
                                        {contact.handle}
                                    </a>
                                </Button>
                            </div>
                        </Card>
                    ))}
                </div>

                {/* Current Status */}
                <Card className="p-8 bg-gradient-to-br from-fuchsia-900/20 to-pink-900/20 border-fuchsia-800/30 text-center">
                    <div className="space-y-4">
                        <h3 className="text-2xl font-semibold text-white flex items-center justify-center gap-2">
                            Open to New Opportunities
                        </h3>
                        <p className="text-slate-300 leading-relaxed max-w-2xl mx-auto">
                            I'm passionate about contributing my React expertise, psychology-informed UX thinking, and love for building great user experiences to innovative teams and exciting projects. Always interested in connecting with fellow developers and exploring what's possible.
                        </p>
                    </div>
                </Card>

                {/* Fun CTA */}
                <div className="text-center mt-12">
                    <p className="text-slate-400 mb-6">
                        Anime fan? Developer? Psychology nerd? Let's definitely chat! 🌸
                    </p>
                    <Button
                        asChild
                        size="lg"
                        className="bg-fuchsia-600 hover:bg-fuchsia-700 text-white px-8 py-3 text-lg font-semibold transition-all hover:scale-105"
                    >
                        <a href="https://github.com/shavonne-senpai" target="_blank" rel="noopener noreferrer">
                            Start with GitHub ✨
                        </a>
                    </Button>
                </div>
            </div>
        </section>
    )
}
