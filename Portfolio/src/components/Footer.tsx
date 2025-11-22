import { Github, Linkedin, Mail, Phone } from "lucide-react";

export default function Footer() {
    return (
        <footer className="bg-black border-t border-white/10 py-12">
            <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
                <div className="text-center md:text-left">
                    <h2 className="text-2xl font-bold text-white mb-2">Parvati Rana</h2>
                    <p className="text-gray-400">Software Engineer / Full-Stack Developer</p>
                </div>

                <div className="flex gap-6">
                    <a
                        href="https://github.com/parvatirana01"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-400 hover:text-primary transition-colors"
                    >
                        <Github className="w-6 h-6" />
                    </a>
                    <a
                        href="https://linkedin.com/in/parvati-rana/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-400 hover:text-primary transition-colors"
                    >
                        <Linkedin className="w-6 h-6" />
                    </a>
                    <a
                        href="mailto:parvatirana6780@gmail.com"
                        className="text-gray-400 hover:text-primary transition-colors"
                    >
                        <Mail className="w-6 h-6" />
                    </a>
                    <a
                        href="tel:+919588133931"
                        className="text-gray-400 hover:text-primary transition-colors"
                    >
                        <Phone className="w-6 h-6" />
                    </a>
                </div>

                <div className="text-gray-500 text-sm text-center md:text-right">
                    <p>&copy; {new Date().getFullYear()} Parvati Rana. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
}
