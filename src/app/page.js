"use client";
import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Mail, Linkedin, Twitter, Send, Award } from "lucide-react";

export default function ExecIqPortfolio() {
  const [showIntro, setShowIntro] = useState(true);
  const [toast, setToast] = useState(null);

  useEffect(() => {
    const t = setTimeout(() => setShowIntro(false), 3000);
    return () => clearTimeout(t);
  }, []);

  // Real achievements
  const achievements = [
    {
      year: "2025",
      title: "Top 1 Leaderboard • Iraq",
      desc: "Ranked #1 in Iraq 2025 for vulnerability research",
      badge: "Rank #1",
    },
    {
      year: "2024",
      title: "Top 1 Leaderboard • Iraq",
      desc: "Maintained #1 rank in Iraq for 2024",
      badge: "Rank #1",
    },
    {
      year: "2024",
      title: "AWC 2024 • Iraq Team",
      desc: "Participated in Arab World Cybersecurity Competition",
      badge: "AWC",
    },
    {
      year: "Global",
      title: "Top 1 OWASP XSS worldwide",
      desc: "First place globally in XSS leaderboard",
      badge: "OWASP",
    },
    {
      year: "2025 Q1",
      title: "Top 1 VDP • Worldwide",
      desc: "Highest score in Vulnerability Disclosure Program (Quarter)",
      badge: "VDP",
    },
    {
      year: "2025 Q3",
      title: "Top 9 Leaderboard • Worldwide",
      desc: "Achieved top 10 global rank",
      badge: "Rank #9",
    },
    {
      year: "2022-2025",
      title: "785 Valid Vulnerabilities",
      desc: "Reported in 69 different companies, responsibly disclosed",
      badge: "785 Vulns",
    },
  ];

  const certifications = [
    { name: "eJPTv2", issuer: "INE" },
    { name: "eWPTxv3", issuer: "INE" },
    { name: "CAPT", issuer: "Cybersecurity Program" },
  ];

  const aboutBadges = [
    { text: "Bug Hunter" },
    { text: "Defensive Security" },
    { text: "Full-Stack" },
    { text: "JavaScript" },
    { text: "MySQL" },
    { text: "Secure Coder" },
  ];

  function handleContact(e) {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value.trim();
    const email = form.email.value.trim();
    const message = form.message.value.trim();
    if (!name || !email || !message) {
      setToast({ type: "error", text: "Please fill all fields." });
      setTimeout(() => setToast(null), 2500);
      return;
    }
    setToast({
      type: "success",
      text: "Message sent. Will contact soon (demo).",
    });
    setTimeout(() => setToast(null), 3000);
    form.reset();
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#0b0f14] via-[#07080b] to-[#050507] text-slate-200 antialiased">
      {/* Intro overlay */}
      <AnimatePresence>
        {showIntro && (
          <motion.div
            initial={{ opacity: 1 }}
            exit={{ opacity: 0, transition: { duration: 0.8 } }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm"
          >
            <motion.div
              initial={{ scale: 0.95, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center"
            >
              <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight mb-4">
                exec_iq
              </h1>
              <p className="text-lg md:text-2xl opacity-90">
                <span className="inline-block">
                  CyberSecurity Researcher from Iraq
                </span>
                <span className="inline-block ml-2 animate-pulse">▌</span>
              </p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Header */}
      <header className="max-w-6xl mx-auto px-6 py-6 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="text-xl font-bold tracking-wider">exec_iq</div>
          <div className="text-sm opacity-70">Ali Al-Akbar Azhar</div>
        </div>
        <nav className="hidden md:flex gap-4 items-center">
          <a href="#home" className="nav-link">Home</a>
          <a href="#achievements" className="nav-link">Achievements</a>
          <a href="#certifications" className="nav-link">Certifications</a>
          <a href="#about" className="nav-link">About</a>
          <a href="#contact" className="nav-link">Contact</a>
        </nav>
      </header>

      {/* Main */}
      <main className="max-w-6xl mx-auto px-6 pb-20">
        {/* Hero */}
        <section id="home" className="relative mt-6 flex flex-col md:flex-row items-center gap-12">
        <motion.div
          className="flex justify-center mb-6"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.img
            src="/4972008902862417866.jpg" // ضع صورتك هنا
            alt="Profile Picture"
            className="w-40 h-40 md:w-52 md:h-52 rounded-full border-4 border-indigo-500 shadow-xl object-cover cursor-pointer"
            whileHover={{ scale: 1.08, rotate: 2 }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 200 }}
          />
        </motion.div>

          <div className="flex-1">
            <motion.h2
              initial={{ x: -20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              className="text-3xl md:text-4xl font-extrabold leading-tight"
            >
              Ali Al-Akbar Azhar{" "}
              <span className="text-indigo-400">(exec_iq)</span>
              <span className="ml-2 inline-block animate-pulse">▌</span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="mt-4 text-slate-300 max-w-xl"
            >
              CyberSecurity Researcher: We aim to streamline the tasks of
              security and ensure the protection of your external assets.
            </motion.p>
          </div>
        </section>

        {/* Achievements */}
        <section id="achievements" className="mt-20">
          <h3 className="text-2xl font-bold mb-8">Achievements</h3>
          <div className="space-y-8">
            {achievements.map((a, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                className="p-5 rounded-2xl shadow-xl backdrop-blur-sm border border-white/5 bg-gradient-to-br from-[#071021] to-[#07111a] hover:translate-x-2 hover:text-indigo-400 transition-transform transition-colors duration-300 ease-in-out
"
              >
                <div className="flex items-center justify-between">
                  <div>
                    <div className="text-sm text-indigo-300 font-semibold">
                      {a.year}
                    </div>
                    <div className="text-lg font-bold mt-1">{a.title}</div>
                  </div>
                  <div className="text-xs px-2 py-1 rounded-md bg-white/5">
                    {a.badge}
                  </div>
                </div>
                <p className="mt-3 text-slate-300 text-sm">{a.desc}</p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Certifications */}
        <section id="certifications" className="mt-20">
          <h3 className="text-2xl font-bold mb-8">Certifications</h3>
          <div className="grid md:grid-cols-3 gap-6">
            {certifications.map((c, idx) => (
              <motion.div
                key={idx}
                initial={{ scale: 0.9, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                className="p-6 rounded-xl border border-white/5 shadow-lg bg-gradient-to-br from-[#0b1221] to-[#071124] flex items-center gap-4 hover:scale-105 hover:shadow-xl hover:border-indigo-500/60 hover:bg-slate-800/60
transition-transform transition-shadow transition-colors duration-300 ease-in-out
"
              >
                <Award className="text-indigo-400" />
                <div>
                  <div className="font-semibold">{c.name}</div>
                  <div className="text-xs opacity-70">{c.issuer}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* About */}
        <section id="about" className="mt-20">
          <h3 className="text-2xl font-bold mb-8">About</h3>
          <p className="text-slate-300 max-w-2xl">
            I focus on vulnerability research, responsible disclosure, and
            secure coding. With hundreds of valid reports across dozens of
            companies, I aim to raise the bar for application security in my
            region and globally.
          </p>
        </section>

        {/* Contact */}
<section id="contact" className="mt-20">
  <h3 className="text-2xl font-bold mb-8">Contact</h3>
  <div className="grid md:grid-cols-3 gap-6">

    {/* Email card */}
    <div className="p-6 rounded-2xl shadow-xl border border-white/5 bg-gradient-to-br from-[#071017] to-[#061016]
                    transform hover:scale-105 hover:shadow-2xl hover:border-indigo-500/60 hover:bg-slate-800/40
                    transition-all duration-300 ease-in-out">
      <div className="flex items-center gap-3 mb-4">
        <Mail size={18} />
        <div>
          <div className="font-semibold">Email</div>
          <div className="text-xs opacity-70">exec_iq@wearehackerone.com</div>
        </div>
      </div>

      <div className="flex gap-3 mt-4">
        <a className="social-card transform hover:scale-110 hover:shadow-lg hover:text-indigo-400 transition-all duration-300 ease-in-out" href="#" aria-label="LinkedIn">
          <Linkedin />
        </a>
        <a className="social-card transform hover:scale-110 hover:shadow-lg hover:text-indigo-400 transition-all duration-300 ease-in-out" href="#" aria-label="Twitter">
          <Twitter />
        </a>
        <a className="social-card transform hover:scale-110 hover:shadow-lg hover:text-indigo-400 transition-all duration-300 ease-in-out" href="#" aria-label="Telegram">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 240 240" fill="currentColor">
                <path d="M120 0C53.73 0 0 53.73 0 120s53.73 120 120 120 120-53.73 120-120S186.27 0 120 0zm56.41 84.67l-23.23 109.39c-1.75 7.64-6.37 9.52-12.92 5.95l-35.75-26.35-17.23 16.55c-1.91 1.91-3.51 3.51-7.2 3.51l2.59-36.22 65.88-59.46c2.87-2.59-.63-4.06-4.43-1.47l-81.62 51.47-35.18-11.01c-7.64-2.39-7.79-7.64 1.61-11.29l137.52-53.03c6.37-2.39 11.97 1.47 9.6 11.26z"/>
              </svg>
        </a>
        <a className="social-card transform hover:scale-110 hover:shadow-lg hover:text-indigo-400 transition-all duration-300 ease-in-out" href="#" aria-label="Telegram">
<svg
      xmlns="http://www.w3.org/2000/svg"
      fill="currentColor"
      viewBox="0 0 24 24"
      className="w-5 h-5"
    >
      <path d="M12 0C5.37 0 0 5.373 0 12c0 5.303 3.438 9.8 8.205 11.387.6.113.82-.26.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61-.546-1.387-1.333-1.756-1.333-1.756-1.09-.745.083-.73.083-.73 1.205.085 1.84 1.236 1.84 1.236 1.07 1.834 2.807 1.304 3.492.997.108-.774.418-1.305.76-1.605-2.665-.3-5.467-1.332-5.467-5.93 0-1.31.468-2.382 1.235-3.22-.123-.303-.535-1.523.117-3.176 0 0 1.008-.322 3.3 1.23a11.52 11.52 0 013.003-.404c1.02.005 2.045.137 3.003.404 2.292-1.552 3.3-1.23 3.3-1.23.653 1.653.241 2.873.118 3.176.77.838 1.235 1.91 1.235 3.22 0 4.61-2.807 5.625-5.48 5.922.43.372.823 1.103.823 2.222 0 1.606-.015 2.898-.015 3.293 0 .319.216.694.825.576C20.565 21.795 24 17.303 24 12c0-6.627-5.373-12-12-12z"/>
    </svg>
        </a>
      </div>
    </div>

    {/* Contact form card */}
    <div className="col-span-2 p-6 rounded-2xl shadow-2xl border border-white/5 bg-gradient-to-br from-[#071017] to-[#061016]
                    transform hover:scale-105 hover:shadow-3xl hover:border-indigo-500/60 hover:bg-slate-800/40
                    transition-all duration-300 ease-in-out">
      <form onSubmit={handleContact} className="space-y-4">
        <div className="grid md:grid-cols-2 gap-3">
          <input name="name" className="input transform hover:scale-105 hover:shadow-md transition-all duration-300 ease-in-out" placeholder="Your name" />
          <input name="email" className="input transform hover:scale-105 hover:shadow-md transition-all duration-300 ease-in-out" placeholder="Your email" />
        </div>
        <textarea
          name="message"
          rows={4}
          className="input resize-none transform hover:scale-105 hover:shadow-md transition-all duration-300 ease-in-out"
          placeholder="Message"
        ></textarea>
        <div className="flex items-center justify-end">
          <button type="submit" className="btn-primary inline-flex items-center gap-2
                                           transform hover:scale-105 hover:shadow-xl hover:bg-indigo-500
                                           transition-all duration-300 ease-in-out cursor-pointer">
            <Send size={16} /> Send Message
          </button>
        </div>
      </form>
    </div>

  </div>
</section>
      </main>

      <footer className="py-8 text-center text-sm opacity-70">
        <div>© {new Date().getFullYear()} exec_iq — Ali Al-Akbar Azhar</div>
      </footer>

      {/* Toast */}
      <AnimatePresence>
        {toast && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            className={`fixed right-6 bottom-6 z-50 p-3 rounded-lg shadow-xl ${
              toast.type === "success" ? "bg-emerald-600" : "bg-rose-600"
            }`}
          >
            {toast.text}
          </motion.div>
        )}
      </AnimatePresence>

      <style>{`
        .nav-link{ color: rgba(255,255,255,0.8); padding:6px 10px; border-radius:8px; transition:all .18s; }
        .nav-link:hover{ transform:translateY(-2px); color:#dbeafe; background: linear-gradient(90deg, rgba(124,58,237,0.08), rgba(6,182,212,0.04)); }
        .btn-primary{ background:linear-gradient(90deg,#06b6d4,#7c3aed); padding:10px 14px; border-radius:10px; font-weight:600 }
        .input{ background:rgba(255,255,255,0.02); border:1px solid rgba(255,255,255,0.04); padding:12px 14px; border-radius:10px; color:inherit; width:100%; }
        .input:focus{ outline:none; box-shadow:0 6px 24px rgba(124,58,237,0.12); transform:translateY(-2px) }
        .social-card{ display:inline-flex; align-items:center; justify-content:center; width:40px; height:40px; border-radius:10px; background:rgba(255,255,255,0.02); border:1px solid rgba(255,255,255,0.03); transition:all .18s }
        .social-card:hover{ transform:translateY(-6px) scale(1.03); box-shadow:0 12px 30px rgba(7,11,35,0.7) }
      `}</style>
    </div>
  );
}
