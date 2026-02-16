import { Github, Linkedin, Mail } from "lucide-react";

const Footer = () => {
    return (
        <footer className="bg-white dark:bg-gray-900 border-t border-gray-100 dark:border-gray-800 py-12 transition-colors duration-300">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col md:flex-row justify-between items-center">
                    <div className="mb-4 md:mb-0">
                        <span className="text-xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                            ND.Lokesh
                        </span>
                        <p className="text-gray-500 dark:text-gray-400 mt-2 text-sm">
                            © {new Date().getFullYear()} All rights reserved.
                        </p>
                    </div>

                    <div className="flex space-x-6">
                        <a href="https://github.com/ndlokesh" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                            <Github size={20} />
                        </a>
                        <a href="https://www.linkedin.com/in/lokesh-nd-4b9124306" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                            <Linkedin size={20} />
                        </a>
                        <a href="mailto:nd.lokesh14@gmail.com" className="text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                            <Mail size={20} />
                        </a>
                        <a href="https://www.instagram.com/__lokesh__1405" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5" /><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" /><line x1="17.5" x2="17.51" y1="6.5" y2="6.5" /></svg>
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
