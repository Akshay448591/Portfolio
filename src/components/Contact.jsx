import { useRef, useState } from "react";
import { motion } from "framer-motion";
import emailjs from "emailjs-com";

export default function Contact() {
  const formRef = useRef();
  const [loading, setLoading] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .sendForm(
        "service_nppbb7q",   // replace with your EmailJS service ID
        "template_31gi2wq",  // replace with your EmailJS template ID
        formRef.current,
        "YZEW9G8lWXMLWUUTk"    // replace with your EmailJS public key
      )
      .then(
        (result) => {
          console.log(result.text);
          alert("Message sent successfully!");
          setLoading(false);
          formRef.current.reset();
        },
        (error) => {
          console.log(error.text);
          alert("Failed to send message. Try again later.");
          setLoading(false);
        }
      );
  };

  return (
    <section
      id="contact"
      className="w-full bg-gray-900 text-white px-8 md:px-16 py-28 flex flex-col items-center justify-center"
    >
      {/* Section Title */}
      <motion.h2
        className="text-4xl md:text-5xl font-extrabold text-center text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500 mb-6"
        animate={{ y: [0, -6, 0] }}
        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
      >
        Contact Me
      </motion.h2>

      {/* Subtitle */}
      <p className="text-gray-300 text-lg md:text-xl mb-12 text-center max-w-2xl">
        Have a question or want to work together? Fill out the form below and I’ll get back to you as soon as possible.
      </p>

      {/* Contact Form */}
      <motion.form
        ref={formRef}
        onSubmit={sendEmail}
        className="w-full max-w-xl bg-gray-800 rounded-2xl p-8 shadow-lg flex flex-col space-y-6"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          required
          className="w-full px-4 py-3 rounded-lg bg-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-yellow-400 transition"
        />
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          required
          className="w-full px-4 py-3 rounded-lg bg-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-yellow-400 transition"
        />
        <textarea
          name="message"
          rows="5"
          placeholder="Your Message"
          required
          className="w-full px-4 py-3 rounded-lg bg-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-yellow-400 transition resize-none"
        ></textarea>

        <motion.button
          type="submit"
          disabled={loading}
          className="w-full py-3 font-medium rounded-lg bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500 text-white shadow-lg hover:scale-105 transition-transform duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
          whileHover={{ scale: 1.05, y: -2 }}
          whileTap={{ scale: 0.95 }}
        >
          {loading ? "Sending..." : "Send Message"}
        </motion.button>
      </motion.form>
    </section>
  );
}
