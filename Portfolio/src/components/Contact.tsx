"use client";

import { motion } from "framer-motion";
import { Mail, Phone, MapPin } from "lucide-react";

export default function Contact() {
    return (
        <section id="contact" className="py-20">
            <div className="container mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-12 text-center">
                        Get In <span className="text-primary">Touch</span>
                    </h2>

                    <div className="max-w-2xl mx-auto">
                        <div className="space-y-8">
                            <h3 className="text-2xl font-bold text-white">Let&apos;s Talk</h3>
                            <p className="text-gray-400">
                                I&apos;m currently open to new opportunities and collaborations. Whether you have a question or just want to say hi, feel free to reach out!
                            </p>

                            <div className="space-y-6">
                                <a href="mailto:parvatirana6780@gmail.com" className="flex items-center gap-4 text-gray-300 hover:text-primary transition-colors group">
                                    <div className="p-3 bg-white/5 rounded-lg group-hover:bg-primary/20 transition-colors">
                                        <Mail className="w-6 h-6" />
                                    </div>
                                    <div>
                                        <p className="text-sm text-gray-500">Email</p>
                                        <p className="font-medium">parvatirana6780@gmail.com</p>
                                    </div>
                                </a>

                                <a href="tel:+919588133931" className="flex items-center gap-4 text-gray-300 hover:text-primary transition-colors group">
                                    <div className="p-3 bg-white/5 rounded-lg group-hover:bg-primary/20 transition-colors">
                                        <Phone className="w-6 h-6" />
                                    </div>
                                    <div>
                                        <p className="text-sm text-gray-500">Phone</p>
                                        <p className="font-medium">+91-95881-33931</p>
                                    </div>
                                </a>

                                <div className="flex items-center gap-4 text-gray-300">
                                    <div className="p-3 bg-white/5 rounded-lg">
                                        <MapPin className="w-6 h-6" />
                                    </div>
                                    <div>
                                        <p className="text-sm text-gray-500">Location</p>
                                        <p className="font-medium">Himachal Pradesh, India</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
