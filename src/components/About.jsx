import { motion } from "framer-motion";
import { Code, Globe, Terminal, Cpu } from "lucide-react";

const About = () => {
    const cards = [
        {
            icon: <Code className="h-8 w-8 text-blue-500" />,
            title: "Frontend Development",
            description: "Building responsive, accessible, and performant user interfaces using React and Tailwind CSS."
        },
        {
            icon: <Terminal className="h-8 w-8 text-green-500" />,
            title: "Network Programming",
            description: "Experience with TCP/IP protocols, creating robust network applications like chat systems."
        },
        {
            icon: <Cpu className="h-8 w-8 text-purple-500" />,
            title: "AI & Prompt Engineering",
            description: "Constructing advanced prompts for AI models to optimize workflows and generate creative assets."
        },
        {
            icon: <Globe className="h-8 w-8 text-orange-500" />,
            title: "Web Deployment",
            description: "Deploying and managing applications on platforms like Vercel and Netlify for global access."
        }
    ];

    return (
        <section id="about" className="py-20 bg-white dark:bg-gray-900 transition-colors duration-300">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent mb-4">
                        About Me
                    </h2>
                    <p className="max-w-2xl mx-auto text-gray-600 dark:text-gray-300 text-lg">
                        "Based in Hyderabad, India. I am a passionate Computer Science student aiming for a Master's in Germany. I specialize in building efficient, scalable web applications and exploring the depths of network programming."
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {cards.map((card, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="p-6 bg-gray-50 dark:bg-gray-800 rounded-xl hover:shadow-xl transition-shadow border border-gray-100 dark:border-gray-700"
                        >
                            <div className="mb-4 bg-white dark:bg-gray-700 w-16 h-16 rounded-full flex items-center justify-center shadow-sm">
                                {card.icon}
                            </div>
                            <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white">
                                {card.title}
                            </h3>
                            <p className="text-gray-600 dark:text-gray-400">
                                {card.description}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default About;
