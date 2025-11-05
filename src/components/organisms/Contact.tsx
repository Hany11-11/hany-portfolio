import React, { useState } from "react";
import { Mail, MapPin, Send, Github, Linkedin, Twitter } from "lucide-react";
import { Card, CardContent } from "@/components/atoms/card";
import { Button } from "@/components/atoms/button";
import { Input } from "@/components/atoms/input";
import { Textarea } from "@/components/atoms/textarea";
import { useToast } from "@/hooks/use-toast";
import { portfolioData } from "@/mockData";

interface FormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

const Contact: React.FC = () => {
  const { personal, social } = portfolioData;
  const { toast } = useToast();
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const target = e.target as HTMLInputElement | HTMLTextAreaElement;
    const { name, value } = target;
    setFormData((prev) => ({ ...prev, [name]: value } as FormData));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Support both CRA and Vite env var names just in case
      const BACKEND_URL =
        (process.env.REACT_APP_BACKEND_URL as string) ||
        (import.meta.env?.VITE_BACKEND_URL as string) ||
        "";
      const API = `${BACKEND_URL}/api`;

      const response = await fetch(`${API}/contact/`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok && data.success) {
        toast({
          title: "Message Sent!",
          description:
            data.message ||
            "Thank you for reaching out. I'll get back to you soon!",
        });
        setFormData({ name: "", email: "", subject: "", message: "" });
      } else {
        throw new Error(data.message || "Failed to send message");
      }
    } catch (error: any) {
      toast({
        title: "Error",
        description:
          error?.message || "Failed to send message. Please try again later.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const socialIconMap: Record<string, React.ComponentType<any>> = {
    Github,
    Linkedin,
    Twitter,
  };

  return (
    <section
      id="contact"
      className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-50 dark:bg-slate-950"
    >
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-slate-900 dark:text-white mb-4">
            Get In <span className="text-teal-500">Touch</span>
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
            Have a project in mind or want to collaborate? Feel free to reach
            out!
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Contact Info */}
          <div className="lg:col-span-1 space-y-6">
            <Card className="border-2 border-slate-200 dark:border-slate-800 hover:border-teal-500 dark:hover:border-teal-400 transition-all duration-300 hover:shadow-xl">
              <CardContent className="p-6 space-y-6">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-teal-100 dark:bg-teal-900/30 rounded-lg">
                    <Mail className="w-6 h-6 text-teal-500" />
                  </div>
                  <div>
                    <p className="font-semibold text-slate-900 dark:text-white mb-1">
                      Email
                    </p>
                    <a
                      href={`mailto:${personal.email}`}
                      className="text-slate-600 dark:text-slate-400 hover:text-teal-500 dark:hover:text-teal-400 transition-colors break-all"
                    >
                      {personal.email}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-3 bg-teal-100 dark:bg-teal-900/30 rounded-lg">
                    <MapPin className="w-6 h-6 text-teal-500" />
                  </div>
                  <div>
                    <p className="font-semibold text-slate-900 dark:text-white mb-1">
                      Location
                    </p>
                    <p className="text-slate-600 dark:text-slate-400">
                      {personal.location}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Social Links */}
            <Card className="border-2 border-slate-200 dark:border-slate-800 hover:border-teal-500 dark:hover:border-teal-400 transition-all duration-300 hover:shadow-xl">
              <CardContent className="p-6">
                <p className="font-semibold text-slate-900 dark:text-white mb-4">
                  Follow Me
                </p>
                <div className="flex gap-3">
                  {social.map((platform) => {
                    const IconComponent = socialIconMap[platform.icon];
                    return (
                      <a
                        key={platform.name}
                        href={platform.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-3 rounded-full border-2 border-slate-300 dark:border-slate-700 hover:border-teal-500 dark:hover:border-teal-400 hover:bg-teal-50 dark:hover:bg-teal-900/20 transition-all duration-300 transform hover:scale-110"
                        aria-label={platform.name}
                      >
                        {IconComponent ? (
                          <IconComponent className="w-5 h-5 text-slate-700 dark:text-slate-300" />
                        ) : null}
                      </a>
                    );
                  })}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <Card className="border-2 border-slate-200 dark:border-slate-800 hover:border-teal-500 dark:hover:border-teal-400 transition-all duration-300 hover:shadow-xl">
              <CardContent className="p-8">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid sm:grid-cols-2 gap-6">
                    <div>
                      <label
                        htmlFor="name"
                        className="block text-sm font-medium text-slate-900 dark:text-white mb-2"
                      >
                        Your Name
                      </label>
                      <Input
                        id="name"
                        name="name"
                        type="text"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="John Doe"
                        className="border-2 border-slate-300 dark:border-slate-700 focus:border-teal-500 dark:focus:border-teal-400"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="email"
                        className="block text-sm font-medium text-slate-900 dark:text-white mb-2"
                      >
                        Your Email
                      </label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="john@example.com"
                        className="border-2 border-slate-300 dark:border-slate-700 focus:border-teal-500 dark:focus:border-teal-400"
                      />
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="subject"
                      className="block text-sm font-medium text-slate-900 dark:text-white mb-2"
                    >
                      Subject
                    </label>
                    <Input
                      id="subject"
                      name="subject"
                      type="text"
                      required
                      value={formData.subject}
                      onChange={handleChange}
                      placeholder="Project Inquiry"
                      className="border-2 border-slate-300 dark:border-slate-700 focus:border-teal-500 dark:focus:border-teal-400"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="message"
                      className="block text-sm font-medium text-slate-900 dark:text-white mb-2"
                    >
                      Message
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      required
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Tell me about your project..."
                      rows={6}
                      className="border-2 border-slate-300 dark:border-slate-700 focus:border-teal-500 dark:focus:border-teal-400 resize-none"
                    />
                  </div>

                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-teal-500 hover:bg-teal-600 text-white py-6 text-lg rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
                  >
                    {isSubmitting ? (
                      "Sending..."
                    ) : (
                      <>
                        <Send className="w-5 h-5 mr-2" />
                        Send Message
                      </>
                    )}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

