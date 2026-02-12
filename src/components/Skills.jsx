import { motion } from "framer-motion";

const Skills = () => {
    const skills = [
        { name: "React", level: 90 },
        { name: "Tailwind CSS", level: 95 },
        { name: "JavaScript (ES6+)", level: 85 },
        { name: "Node.js", level: 80 },
        { name: "Git & GitHub", level: 85 },
        { name: "C++ / Python (Networking)", level: 75 },
        { name: "AI Prompt Engineering", level: 80 },
    ];

    return (
        <section id="skills" className="py-20 bg-white dark:bg-gray-900 transition-colors duration-300">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent mb-4">
                        Technical Proficiency
                    </h2>
                    <p className="max-w-2xl mx-auto text-gray-600 dark:text-gray-300">
                        A breakdown of my technical skills and tool proficiency.
                    </p>
                </motion.div>

                <div className="max-w-3xl mx-auto">
                    {skills.map((skill, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="mb-8"
                        >
                            <div className="flex justify-between mb-2">
                                <span className="text-gray-700 dark:text-gray-300 font-medium">{skill.name}</span>
                                <span className="text-gray-500 dark:text-gray-400">{skill.level}%</span>
                            </div>
                            <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5 overflow-hidden">
                                <motion.div
                                    initial={{ width: 0 }}
                                    whileInView={{ width: `${skill.level}%` }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 1, delay: 0.2 }}
                                    className="bg-gradient-to-r from-blue-500 to-indigo-600 h-2.5 rounded-full"
                                ></motion.div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Skills;
