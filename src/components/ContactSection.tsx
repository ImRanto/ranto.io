"use client";

import React, { useRef, useState, useEffect } from "react";
import emailjs from "@emailjs/browser";
import { AnimatePresence, motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import {
  Mail,
  Phone,
  MapPin,
  Send,
  Lock,
  LogOut,
  User as UserIcon,
  CheckCircle2,
  AlertCircle,
} from "lucide-react";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import ReCAPTCHA from "react-google-recaptcha";

import {
  useUser,
  SignInButton,
  UserButton,
  SignOutButton,
} from "@clerk/nextjs";

const formSchema = z.object({
  name: z.string().min(2, {
    message: "Le nom doit contenir au moins 2 caractères.",
  }),
  email: z
    .string()
    .email({ message: "Veuillez entrer une adresse email valide." }),
  message: z
    .string()
    .min(10, { message: "Le message doit contenir au moins 10 caractères." }),
});

const ContactSection = () => {
  const { user } = useUser();
  const [isSending, setIsSending] = useState(false);
  const [recaptchaToken, setRecaptchaToken] = useState<string | null>(null);
  const recaptchaRef = useRef<ReCAPTCHA>(null);
  const [status, setStatus] = useState<{
    type: "success" | "error" | "info" | null;
    message: string | null;
  }>({ type: null, message: null });

    // SCROLL AUTO vers contact après connexion
    useEffect(() => {
      if (user) {
        document.getElementById("contact")?.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }
    }, [user]);

  // Effet pour faire disparaître le message après 5 secondes
  useEffect(() => {
    if (status.message) {
      const timer = setTimeout(
        () => setStatus({ type: null, message: null }),
        5000
      );
      return () => clearTimeout(timer);
    }
  }, [status]);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  });

  useEffect(() => {
    if (user) {
      form.setValue("name", user.fullName || "");
      form.setValue("email", user.primaryEmailAddress?.emailAddress || "");
    }
  }, [user, form]);

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    if (!user) return;

    if (!recaptchaToken) {
      setStatus({ type: "info", message: "Veuillez valider le reCAPTCHA." });
      return;
    }

    const now = Date.now();
    const DAY_MS = 24 * 60 * 60 * 1000;

    const savedTimes =
      typeof window !== "undefined"
        ? localStorage.getItem("emailSentTimes")
        : null;
    let currentSentTimes: number[] = JSON.parse(savedTimes || "[]");

    currentSentTimes = currentSentTimes.filter(
      (timestamp) => now - timestamp < DAY_MS
    );

    if (currentSentTimes.length >= 2) {
      setStatus({
        type: "info",
        message: "Limite atteinte (2 messages/24h). À demain ! 🚀",
      });
      return;
    }

    setIsSending(true);

    try {
      await emailjs.send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID_USER!,
        { ...values, "g-recaptcha-response": recaptchaToken },
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!
      );

      await emailjs.send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID_REPLY!,
        { to_name: values.name, to_email: values.email },
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!
      );

      setStatus({
        type: "success",
        message: "Message envoyé avec succès !",
      });

      currentSentTimes.push(now);
      localStorage.setItem("emailSentTimes", JSON.stringify(currentSentTimes));

      form.reset({ ...values, message: "" });
      recaptchaRef.current?.reset();
      setRecaptchaToken(null);
    } catch (error) {
      setStatus({
        type: "error",
        message: "Oups ! Erreur lors de l'envoi. Réessayez.",
      });
      console.error(error);
    } finally {
      setIsSending(false);
    }
  };

  const contactInfo = [
    {
      icon: Mail,
      title: "Email",
      value: "hei.ranto.2@gmail.com",
      link: "mailto:hei.ranto.2@gmail.com",
    },
    {
      icon: Phone,
      title: "Téléphone",
      value: "+261 38 13 277 37",
      link: "tel:+261381327737",
    },
    {
      icon: MapPin,
      title: "Localisation",
      value: "Antananarivo, Madagascar",
      link: "#",
    },
  ];

  <div className="space-y-4">
    {[
      { icon: Mail, text: "hei.ranto.2@gmail.com" },
      { icon: Phone, text: "+261 38 13 277 37" },
      { icon: MapPin, text: "Antananarivo, Madagascar" },
    ].map((item, idx) => (
      <div
        key={idx}
        className="flex items-center gap-4 p-4 rounded-2xl bg-slate-50 dark:bg-slate-900/50 border border-slate-100 dark:border-slate-800"
      >
        <item.icon className="text-cyan-500" size={20} />
        <span className="text-sm font-medium">{item.text}</span>
      </div>
    ))}
  </div>;

  return (
      <section
        id="contact"
        className="py-24 bg-slate-50/50 dark:bg-slate-900/20"
      >
        <div className="container mx-auto px-6">
          <motion.div
            className="mb-16 text-center max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              Contactez <span className="text-cyan-500">Moi</span>
            </h2>
            <p className="text-slate-600 dark:text-slate-400">
              Le formulaire est ouvert à tous. Connectez-vous simplement pour
              valider l'envoi.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Colonne Infos */}
            <div className="space-y-6">
              {contactInfo.map((info, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Card className="group relative overflow-hidden border border-slate-100 dark:border-slate-800 bg-white/50 dark:bg-slate-900/50 backdrop-blur-sm transition-all duration-300 hover:border-cyan-500/50 hover:shadow-2xl hover:shadow-cyan-500/10 rounded-[1.5rem]">
                    {/* Petit éclat de lumière au survol */}
                    <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/0 via-cyan-500/5 to-cyan-500/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000" />

                    <CardContent className="p-6 flex items-center gap-5 relative z-10">
                      {/* Container de l'icône avec un cercle doux */}
                      <div className="relative">
                        <div className="absolute inset-0 bg-cyan-500/20 blur-xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
                        <div className="relative p-4 rounded-2xl bg-slate-50 dark:bg-slate-800 text-slate-600 dark:text-slate-400 group-hover:bg-cyan-500 group-hover:text-white transition-all duration-300 shadow-inner">
                          <info.icon size={22} strokeWidth={1.5} />
                        </div>
                      </div>

                      <div className="flex flex-col">
                        <span className="text-[10px] font-bold uppercase tracking-[0.15em] text-slate-400 dark:text-slate-500 mb-1">
                          {info.title}
                        </span>
                        <a
                          href={info.link}
                          className="text-sm font-bold text-slate-700 dark:text-slate-200 group-hover:text-cyan-600 dark:group-hover:text-cyan-400 transition-colors duration-300"
                        >
                          {info.value}
                        </a>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>

            {/* Colonne Formulaire */}
            <div className="lg:col-span-2">
              <Card className="group relative border-none shadow-2xl rounded-[2rem] overflow-hidden bg-white/80 dark:bg-slate-900/80 backdrop-blur-md transition-all duration-500 hover:shadow-cyan-500/10">
                <CardContent className="p-8">
                  <Form {...form}>
                    <form
                      onSubmit={form.handleSubmit(onSubmit)}
                      className="space-y-6"
                    >
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <FormField
                          control={form.control}
                          name="name"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Nom</FormLabel>
                              <FormControl>
                                <Input
                                  placeholder="Votre nom..."
                                  {...field}
                                  readOnly={!!user}
                                  className="rounded-xl"
                                />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                        <FormField
                          control={form.control}
                          name="email"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Adresse Email</FormLabel>
                              <FormControl>
                                <Input
                                  placeholder="exemple@gmail.com"
                                  {...field}
                                  readOnly={!!user}
                                  className="rounded-xl"
                                />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                      </div>

                      <FormField
                        control={form.control}
                        name="message"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Votre Projet / Message</FormLabel>
                            <FormControl>
                              <Textarea
                                placeholder="Décrivez-moi votre besoin..."
                                className="min-h-[150px] rounded-xl"
                                {...field}
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <AnimatePresence>
                        {status.message && (
                          <motion.div
                            initial={{ opacity: 0, y: 10, scale: 0.95 }}
                            animate={{ opacity: 1, y: 0, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.95 }}
                            className={`p-4 rounded-2xl flex items-center gap-3 border ${
                              status.type === "success"
                                ? "bg-emerald-500/10 border-emerald-500/20 text-emerald-600 dark:text-emerald-400"
                                : status.type === "error"
                                ? "bg-red-500/10 border-red-500/20 text-red-600 dark:text-red-400"
                                : "bg-cyan-500/10 border-cyan-500/20 text-cyan-600 dark:text-cyan-400"
                            }`}
                          >
                            <div
                              className={`p-1.5 rounded-full ${
                                status.type === "success"
                                  ? "bg-emerald-500 text-white"
                                  : status.type === "error"
                                  ? "bg-red-500 text-white"
                                  : "bg-cyan-500 text-white"
                              }`}
                            >
                              {status.type === "success" ? (
                                <CheckCircle2 size={16} />
                              ) : (
                                <AlertCircle size={16} />
                              )}
                            </div>
                            <p className="text-sm font-bold tracking-tight">
                              {status.message}
                            </p>

                            <button
                              onClick={() =>
                                setStatus({ type: null, message: null })
                              }
                              className="ml-auto opacity-50 hover:opacity-100 transition-opacity"
                            >
                              <LogOut size={14} className="rotate-45" />{" "}
                              {/* Simple petite croix */}
                            </button>
                          </motion.div>
                        )}
                      </AnimatePresence>

                      <div className="flex justify-center py-2">
                        <ReCAPTCHA
                          ref={recaptchaRef}
                          sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY!}
                          onChange={(t) => setRecaptchaToken(t)}
                          theme="dark"
                        />
                      </div>

                      {/* Actions d'authentification et envoi */}
                      <div className="pt-6 border-t border-slate-100 dark:border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-6">
                        {!user ? (
                          <div className="flex flex-col items-center sm:items-start gap-3 w-full">
                            <p className="text-xs text-slate-500 flex items-center gap-2">
                              <Lock size={12} /> Une connexion est requise pour
                              envoyer
                            </p>
                            <SignInButton mode="modal">
                              <Button
                                type="button"
                                size="lg"
                                className="w-full sm:w-auto bg-cyan-600 hover:bg-cyan-700 rounded-xl px-8 font-bold"
                              >
                                <UserIcon className="mr-2 h-4 w-4" /> Se
                                connecter
                              </Button>
                            </SignInButton>
                          </div>
                        ) : (
                          <div className="flex flex-col sm:flex-row items-center justify-between w-full gap-4">
                            <div className="flex items-center gap-3 bg-slate-50 dark:bg-slate-800 p-2 pr-4 rounded-2xl border border-slate-100 dark:border-slate-800">
                              <UserButton afterSignOutUrl="/" />
                              <div className="hidden sm:block">
                                <p className="text-[10px] font-bold text-slate-400 uppercase leading-none">
                                  Connecté
                                </p>
                                <p className="text-sm font-bold">
                                  {user.firstName}
                                </p>
                              </div>
                              <SignOutButton>
                                <button
                                  title="Déconnexion"
                                  className="ml-2 p-1.5 text-slate-400 hover:text-red-500 transition-colors"
                                >
                                  <LogOut size={16} />
                                </button>
                              </SignOutButton>
                            </div>

                            <Button
                              type="submit"
                              disabled={isSending}
                              size="lg"
                              className="w-full sm:w-auto bg-slate-900 dark:bg-white dark:text-slate-900 rounded-xl px-10 font-bold"
                            >
                              {isSending ? "Envoi..." : "Envoyer"}
                              <Send className="ml-2 h-4 w-4" />
                            </Button>
                          </div>
                        )}
                      </div>
                    </form>
                  </Form>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
  );
};

export default ContactSection;
