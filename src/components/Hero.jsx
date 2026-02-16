import { motion } from "framer-motion";
import { Link } from "react-scroll";
import { ArrowRight, Github, Linkedin, Mail } from "lucide-react";

const Hero = () => {
    return (
        <section id="hero" className="min-h-screen flex items-center justify-center pt-16 bg-gradient-to-br from-white to-blue-50 dark:from-gray-900 dark:to-gray-800 transition-colors duration-300">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col-reverse md:flex-row items-center justify-center gap-12 text-center md:text-left">
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5 }}
                    className="flex-1 space-y-6"
                >
                    <h2 className="text-xl sm:text-2xl font-medium text-blue-600 dark:text-blue-400">
                        Hello, I'm ND.Lokesh
                    </h2>
                    <h1 className="text-5xl sm:text-7xl font-extrabold tracking-tight text-gray-900 dark:text-white">
                        <span className="block">Computer Science</span>
                        <span className="block mt-2 bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                            Enthusiast & Developer
                        </span>
                    </h1>
                    <p className="max-w-2xl text-xl text-gray-600 dark:text-gray-300 mx-auto md:mx-0">
                        "Bridging technical precision with innovative software solutions."
                    </p>

                    <div className="flex justify-center md:justify-start gap-4 mt-8">
                        <a href="https://github.com/ndlokesh" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400 transition-colors">
                            <Github size={24} />
                        </a>
                        <a href="https://www.linkedin.com/in/lokesh-nd-4b9124306" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400 transition-colors">
                            <Linkedin size={24} />
                        </a>
                        <a href="mailto:nd.lokesh14@gmail.com" className="text-gray-600 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400 transition-colors">
                            <Mail size={24} />
                        </a>
                        <a href="#" className="text-gray-600 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400 transition-colors">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-instagram"><rect width="20" height="20" x="2" y="2" rx="5" ry="5" /><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" /><line x1="17.5" x2="17.51" y1="6.5" y2="6.5" /></svg>
                        </a>
                    </div>

                    <div className="mt-10 flex justify-center md:justify-start gap-4">
                        <Link
                            to="projects"
                            smooth={true}
                            duration={500}
                            className="px-8 py-3 rounded-full bg-blue-600 text-white font-medium hover:bg-blue-700 transition-colors flex items-center gap-2 cursor-pointer shadow-lg hover:shadow-blue-500/25"
                        >
                            View My Work
                            <ArrowRight size={20} />
                        </Link>
                        <Link
                            to="contact"
                            smooth={true}
                            duration={500}
                            className="px-8 py-3 rounded-full border border-gray-300 dark:border-gray-700 text-gray-700 dark:text-gray-300 font-medium hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors cursor-pointer"
                        >
                            Contact Me
                        </Link>
                    </div>
                </motion.div>

                {/* Profile Image */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6 }}
                    className="flex-shrink-0 flex justify-center"
                >
                    <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-white dark:border-gray-700 shadow-2xl ring-4 ring-blue-500/20">
                        <img
                            src="/profile.jpg"
                            alt="ND.Lokesh Profile"
                            className="w-full h-full object-cover"
                        />
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Hero;
