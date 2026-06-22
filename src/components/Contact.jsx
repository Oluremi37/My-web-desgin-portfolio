import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { FaEnvelope, FaPhone, FaMapMarkerAlt } from "react-icons/fa";
import FadeIn from "./FadeIn";

const Contact = () => {
  const form = useRef();
  const [status, setStatus] = useState({ type: "", message: "" });
  const [isLoading, setIsLoading] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    setIsLoading(true);
    setStatus({ type: "", message: "" });

    // ✅ Correct way for Vite
    const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

    console.log("📋 Environment Variables:");
    console.log("Service ID →", serviceId ? "✅ Loaded" : "❌ Missing");
    console.log("Template ID →", templateId ? "✅ Loaded" : "❌ Missing");
    console.log("Public Key →", publicKey ? "✅ Loaded" : "❌ Missing");

    if (!serviceId || !templateId || !publicKey) {
      setStatus({
        type: "error",
        message:
          "⚠️ EmailJS keys not found. Check .env file and restart server.",
      });
      setIsLoading(false);
      return;
    }

    emailjs
      .sendForm(serviceId, templateId, form.current, { publicKey })
      .then(
        (result) => {
          console.log("✅ SUCCESS!", result.text);
          setStatus({
            type: "success",
            message: "✅ Message sent successfully! I will reply soon.",
          });
          form.current.reset();
        },
        (error) => {
          console.error("❌ EmailJS Error:", error);
          setStatus({
            type: "error",
            message: `❌ ${error.text || "Failed to send message. Try again."}`,
          });
        },
      )
      .finally(() => setIsLoading(false));
  };

  return (
    <FadeIn>
      <section id="contact" className="py-24 bg-slate-950">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <p className="text-orange-500 font-semibold uppercase tracking-widest">
              Contact
            </p>
          <h2 className="text-4xl md:text-5xl font-bold text-white mt-3">
            Let's Work Together
          </h2>
          <p className="text-slate-300 mt-6 max-w-2xl mx-auto">
            Whether you need a website, a web application, or a developer to
            join your team, I'd love to hear about your project.
          </p>
        </div>

        {/* Contact Info Cards */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 text-center">
            <FaEnvelope className="text-orange-500 text-3xl mx-auto mb-4" />
            <h3 className="text-white text-xl font-semibold mb-2">Email</h3>
            <p className="text-slate-300 break-all">
              yetundesolanke2019@gmail.com
            </p>
          </div>

          <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 text-center">
            <FaPhone className="text-orange-500 text-3xl mx-auto mb-4" />
            <h3 className="text-white text-xl font-semibold mb-2">Phone</h3>
            <p className="text-slate-300">09069223721</p>
          </div>

          <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 text-center">
            <FaMapMarkerAlt className="text-orange-500 text-3xl mx-auto mb-4" />
            <h3 className="text-white text-xl font-semibold mb-2">Location</h3>
            <p className="text-slate-300">Lagos, Nigeria</p>
          </div>
        </div>

        {/* Contact Form */}
        <div className="max-w-2xl mx-auto">
          <form ref={form} onSubmit={sendEmail} className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-slate-400 mb-2 text-sm">
                  Your Name
                </label>
                <input
                  type="text"
                  name="from_name"
                  required
                  className="w-full bg-slate-900 border border-slate-700 rounded-xl px-5 py-3 text-white focus:outline-none focus:border-orange-500 transition"
                  placeholder="John Doe"
                />
              </div>
              <div>
                <label className="block text-slate-400 mb-2 text-sm">
                  Your Email
                </label>
                <input
                  type="email"
                  name="from_email"
                  required
                  className="w-full bg-slate-900 border border-slate-700 rounded-xl px-5 py-3 text-white focus:outline-none focus:border-orange-500 transition"
                  placeholder="john@example.com"
                />
              </div>
            </div>

            <div>
              <label className="block text-slate-400 mb-2 text-sm">
                Subject (Optional)
              </label>
              <input
                type="text"
                name="subject"
                className="w-full bg-slate-900 border border-slate-700 rounded-xl px-5 py-3 text-white focus:outline-none focus:border-orange-500 transition"
                placeholder="Project Inquiry"
              />
            </div>

            <div>
              <label className="block text-slate-400 mb-2 text-sm">
                Message
              </label>
              <textarea
                name="message"
                required
                rows="6"
                className="w-full bg-slate-900 border border-slate-700 rounded-xl px-5 py-3 text-white focus:outline-none focus:border-orange-500 transition"
                placeholder="Tell me about your project..."
              />
            </div>

            <div className="text-center">
              <button
                type="submit"
                disabled={isLoading}
                className="inline-block bg-orange-500 hover:bg-orange-600 disabled:bg-orange-700 text-white px-10 py-4 rounded-xl font-medium transition duration-300 w-full md:w-auto"
              >
                {isLoading ? "Sending Message..." : "Send Message"}
              </button>
            </div>

            {status.message && (
              <p
                className={`text-center text-sm font-medium mt-4 ${status.type === "success" ? "text-green-400" : "text-red-400"}`}
              >
                {status.message}
              </p>
            )}
          </form>
        </div>
      </div>
      </section>
    </FadeIn>
  );
};

export default Contact;
