import { motion } from "framer-motion";
import { ExternalLink, Github, Code2, Wifi, Activity } from "lucide-react";

const Projects = () => {
    const projects = [
        {
            title: "TCP Chat Application",
            description: "A robust real-time messaging system built using TCP sockets in C++/Python. Features multi-client support and reliable message delivery.",
            tech: ["C++", "Python", "TCP/IP", "Networking"],
            icon: <Wifi className="h-6 w-6" />,
            link: "#",
            github: "#"
        },
        {
            title: "Error Control Analyzer",
            description: "An analytical tool for simulating and visualizing error detection and correction algorithms in data transmission.",
            tech: ["Python", "Matplotlib", "Algorithms"],
            icon: <Activity className="h-6 w-6" />,
            link: "#",
            github: "#"
        },
        {
            title: "React Admin Dashboard",
            description: "A comprehensive dashboard for managing data, featuring interactive charts, dark mode, and responsive layout.",
            tech: ["React", "Tailwind CSS", "Recharts"],
            icon: <Code2 className="h-6 w-6" />,
            link: "#",
            github: "#"
        },
        {
            title: "Open Source Showcase",
            description: "A curated collection of my contributions to various open-source repositories and experimental projects.",
            tech: ["Git", "GitHub", "Collaboration"],
            icon: <Github className="h-6 w-6" />,
            link: "#",
            github: "#"
        }
    ];

    return (
        <section id="projects" className="py-20 bg-gray-50 dark:bg-gray-800 transition-colors duration-300">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
                        Featured Projects
                    </h2>
                    <p className="max-w-2xl mx-auto text-gray-600 dark:text-gray-300">
                        A selection of my technical projects, ranging from low-level network programming to modern web applications.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
                    {projects.map((project, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="group bg-white dark:bg-gray-900 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 dark:border-gray-800"
                        >
                            <div className="p-8">
                                <div className="flex items-center justify-between mb-6">
                                    <div className="p-3 bg-blue-100 dark:bg-blue-900/30 rounded-lg text-blue-600 dark:text-blue-400">
                                        {project.icon}
                                    </div>
                                    <div className="flex gap-4">
                                        <a href={project.github} className="text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors">
                                            <Github size={20} />
                                        </a>
                                        <a href={project.link} className="text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                                            <ExternalLink size={20} />
                                        </a>
                                    </div>
                                </div>

                                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                                    {project.title}
                                </h3>

                                <p className="text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">
                                    {project.description}
                                </p>

                                <div className="flex flex-wrap gap-2">
                                    {project.tech.map((tech, i) => (
                                        <span
                                            key={i}
                                            className="px-3 py-1 text-sm font-medium bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300 rounded-full"
                                        >
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;
