// "use client";

// import React from "react";
// import { motion } from "framer-motion";
// import { Button } from "@/components/ui/button";
// import { Input } from "@/components/ui/input";
// import { Textarea } from "@/components/ui/textarea";
// import { Card, CardContent } from "@/components/ui/card";
// import { Mail, Phone, MapPin, Send } from "lucide-react";
// import {
//   Form,
//   FormControl,
//   FormField,
//   FormItem,
//   FormLabel,
//   FormMessage,
// } from "@/components/ui/form";
// import { zodResolver } from "@hookform/resolvers/zod";
// import { useForm } from "react-hook-form";
// import * as z from "zod";

// const formSchema = z.object({
//   name: z.string().min(2, {
//     message: "Le nom doit contenir au moins 2 caractères.",
//   }),
//   email: z.string().email({
//     message: "Veuillez entrer une adresse email valide.",
//   }),
//   message: z.string().min(10, {
//     message: "Le message doit contenir au moins 10 caractères.",
//   }),
// });

// const ContactSection = () => {
//   const form = useForm<z.infer<typeof formSchema>>({
//     resolver: zodResolver(formSchema),
//     defaultValues: {
//       name: "",
//       email: "",
//       message: "",
//     },
//   });

//   function onSubmit(values: z.infer<typeof formSchema>) {
//     console.log(values);
//     // In a real application, you would handle form submission here
//     form.reset();
//   }

//   const contactInfo = [
//     {
//       icon: Mail,
//       title: "Email",
//       value: "contact@ranto.dev",
//       link: "mailto:contact@ranto.dev",
//     },
//     {
//       icon: Phone,
//       title: "Téléphone",
//       value: "+33 6 12 34 56 78",
//       link: "tel:+33612345678",
//     },
//     {
//       icon: MapPin,
//       title: "Localisation",
//       value: "Paris, France",
//       link: "#",
//     },
//   ];

//   return (
//     <section id="contact" className="py-24 bg-gray-50/50 dark:bg-gray-900/20">
//       <div className="container mx-auto px-6">
//         <motion.div
//           className="mb-16 text-center max-w-3xl mx-auto"
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.7 }}
//         >
//           <h2 className="text-3xl md:text-4xl font-bold mb-6 relative inline-block">
//             Contactez Moi
//             <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-20 h-1 bg-cyan-500 rounded-full"></div>
//           </h2>
//           <p className="text-lg text-muted-foreground">
//             Vous avez un projet en tête ou vous souhaitez simplement discuter ?
//             N'hésitez pas à me contacter !
//           </p>
//         </motion.div>

//         <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
//           <div className="lg:col-span-1 space-y-4">
//             {contactInfo.map((info, index) => (
//               <motion.div
//                 key={info.title}
//                 initial={{ opacity: 0, y: 20 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 viewport={{ once: true }}
//                 transition={{ delay: index * 0.1, duration: 0.5 }}
//               >
//                 <Card className="border-none shadow-md hover:shadow-lg transition-shadow">
//                   <CardContent className="p-6">
//                     <div className="flex items-center">
//                       <div className="p-3 rounded-full bg-cyan-100 dark:bg-cyan-900/30 text-cyan-600 dark:text-cyan-400 mr-4">
//                         <info.icon className="h-6 w-6" />
//                       </div>
//                       <div>
//                         <h3 className="font-medium text-foreground">
//                           {info.title}
//                         </h3>
//                         <a
//                           href={info.link}
//                           className="text-muted-foreground hover:text-cyan-500 dark:hover:text-cyan-400 transition-colors"
//                         >
//                           {info.value}
//                         </a>
//                       </div>
//                     </div>
//                   </CardContent>
//                 </Card>
//               </motion.div>
//             ))}
//           </div>

//           <motion.div
//             className="lg:col-span-2"
//             initial={{ opacity: 0, y: 20 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             transition={{ delay: 0.2, duration: 0.7 }}
//           >
//             <Card className="border-none shadow-md">
//               <CardContent className="p-6">
//                 <Form {...form}>
//                   <form
//                     onSubmit={form.handleSubmit(onSubmit)}
//                     className="space-y-6"
//                   >
//                     <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//                       <FormField
//                         control={form.control}
//                         name="name"
//                         render={({ field }) => (
//                           <FormItem>
//                             <FormLabel>Nom</FormLabel>
//                             <FormControl>
//                               <Input placeholder="Votre nom" {...field} />
//                             </FormControl>
//                             <FormMessage />
//                           </FormItem>
//                         )}
//                       />
//                       <FormField
//                         control={form.control}
//                         name="email"
//                         render={({ field }) => (
//                           <FormItem>
//                             <FormLabel>Email</FormLabel>
//                             <FormControl>
//                               <Input placeholder="Votre email" {...field} />
//                             </FormControl>
//                             <FormMessage />
//                           </FormItem>
//                         )}
//                       />
//                     </div>
//                     <FormField
//                       control={form.control}
//                       name="message"
//                       render={({ field }) => (
//                         <FormItem>
//                           <FormLabel>Message</FormLabel>
//                           <FormControl>
//                             <Textarea
//                               placeholder="Votre message"
//                               className="min-h-32"
//                               {...field}
//                             />
//                           </FormControl>
//                           <FormMessage />
//                         </FormItem>
//                       )}
//                     />
//                     <Button
//                       type="submit"
//                       className="w-full md:w-auto"
//                       size="lg"
//                     >
//                       <Send className="mr-2 h-4 w-4" /> Envoyer le message
//                     </Button>
//                   </form>
//                 </Form>
//               </CardContent>
//             </Card>
//           </motion.div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default ContactSection;
