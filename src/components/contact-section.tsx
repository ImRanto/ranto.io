"use client";

import React, { useRef, useState, useEffect } from "react";
import emailjs from "@emailjs/browser";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import { Mail, Phone, MapPin, Send } from "lucide-react";
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

import { useUser, SignInButton, UserButton, SignOutButton } from "@clerk/nextjs";

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

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: user?.fullName || "",
      email: user?.primaryEmailAddress?.emailAddress || "",
      message: "",
    },
  });

  useEffect(() => {
    form.reset({
      name: user?.fullName || "",
      email: user?.primaryEmailAddress?.emailAddress || "",
      message: "",
    });
  }, [user]);

  const handleRecaptchaChange = (token: string | null) => {
    setRecaptchaToken(token);
  };

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    if (!user) {
      alert("Veuillez vous connecter pour envoyer un message.");
      return;
    }

    if (!recaptchaToken) {
      alert("Veuillez valider le reCAPTCHA.");
      return;
    }

    const now = Date.now();
    const DAY_MS = 24 * 60 * 60 * 1000;
    let sentTimes: number[] = JSON.parse(
      localStorage.getItem("emailSentTimes") || "[]"
    );
    sentTimes = sentTimes.filter((timestamp) => now - timestamp < DAY_MS);

    if (sentTimes.length >= 1) {
      alert(
        "Vous avez déjà envoyé un message aujourd'hui. Veuillez réessayer demain."
      );
      return;
    }

    setIsSending(true);

    const userMessageParams = {
      from_name: values.name,
      from_email: values.email,
      message: values.message,
      "g-recaptcha-response": recaptchaToken,
    };

    const autoReplyParams = {
      to_name: values.name,
      to_email: values.email,
    };

    try {
      await emailjs.send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID_USER!,
        userMessageParams,
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!
      );

      await emailjs.send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID_REPLY!,
        autoReplyParams,
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!
      );

      alert("Message envoyé avec succès !");
      sentTimes.push(now);
      localStorage.setItem("emailSentTimes", JSON.stringify(sentTimes));
      form.reset();
      setRecaptchaToken(null);
      recaptchaRef.current?.reset();
    } catch (error) {
      alert("Erreur lors de l'envoi du message.");
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

  return (
    <section id="contact" className="py-24 bg-gray-50/50 dark:bg-gray-900/20">
      <div className="container mx-auto px-6">
        <motion.div
          className="mb-16 text-center max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6 relative inline-block">
            Contactez Moi
            <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-20 h-1 bg-cyan-500 rounded-full"></div>
          </h2>
          <p className="text-lg text-muted-foreground">
            Vous avez un projet en tête ou vous souhaitez simplement discuter ?
            N&apos;hésitez pas à me contacter !
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-1 space-y-4">
            {contactInfo.map((info, index) => (
              <motion.div
                key={info.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
              >
                <Card className="border-none shadow-md hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <div className="flex items-center">
                      <div className="p-3 rounded-full bg-cyan-100 dark:bg-cyan-900/30 text-cyan-600 dark:text-cyan-400 mr-4">
                        <info.icon className="h-6 w-6" />
                      </div>
                      <div>
                        <h3 className="font-medium text-foreground">
                          {info.title}
                        </h3>
                        <a
                          href={info.link}
                          className="text-muted-foreground hover:text-cyan-500 dark:hover:text-cyan-400 transition-colors"
                        >
                          {info.value}
                        </a>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          <motion.div
            className="lg:col-span-2"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.7 }}
          >
            <Card className="border-none shadow-md">
              <CardContent className="p-6">
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
                                placeholder="Votre nom"
                                readOnly={!!user}
                                {...field}
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
                            <FormLabel>Email</FormLabel>
                            <FormControl>
                              <Input
                                placeholder="Votre email"
                                readOnly={!!user}
                                {...field}
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
                          <FormLabel>Message</FormLabel>
                          <FormControl>
                            <Textarea
                              placeholder="Votre message"
                              className="min-h-32"
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <div className="flex justify-center">
                      <ReCAPTCHA
                        ref={recaptchaRef}
                        sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY!}
                        theme="light"
                        onChange={handleRecaptchaChange}
                      />
                    </div>
                    {/* Boutons envoyés et connexion côte à côte */}
                    <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between w-full">
                      {/* Bloc gauche : bouton envoyer + connexion */}
                      <div className="flex flex-col sm:flex-row gap-2 w-full md:w-auto">
                        <Button
                          type="submit"
                          className="w-full sm:w-auto"
                          size="lg"
                          disabled={isSending || !user}
                        >
                          <Send className="mr-2 h-4 w-4" />
                          {isSending ? "Envoi..." : "Envoyer le message"}
                        </Button>

                        <SignInButton mode="modal">
                          <Button
                            type="button"
                            variant="outline"
                            size="lg"
                            disabled={!!user}
                            className="w-full sm:w-auto"
                          >
                            {user ? "Connecté" : "Se connecter"}
                          </Button>
                        </SignInButton>
                      </div>

                      {/* Bloc droit : info user + déconnexion */}
                      {user && (
                        <div className="flex flex-col sm:flex-row items-center gap-2 text-sm text-muted-foreground">
                          <div className="flex items-center gap-2">
                            <UserButton />
                            <span>
                              Connecté en tant que{" "}
                              <strong>{user.fullName}</strong>
                            </span>
                          </div>
                          <SignOutButton>
                            <button className="px-3 py-1 rounded bg-red-500 text-white hover:bg-red-600">
                              Déconnexion
                            </button>
                          </SignOutButton>
                        </div>
                      )}
                    </div>
                  </form>
                </Form>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
