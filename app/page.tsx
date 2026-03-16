"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

export default function Home() {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");


  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);

    // Intersection Observer for scroll animations
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-fadeIn");
          }
        });
      },
      { threshold: 0.1 }
    );

    document.querySelectorAll(".reveal-on-scroll").forEach((el) => observer.observe(el));

    // Intersection Observer for active nav link
    const sectionObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.4 }
    );

    document.querySelectorAll("section[id], header[id]").forEach((el) => sectionObserver.observe(el));

    return () => {
      window.removeEventListener("scroll", handleScroll);
      observer.disconnect();
      sectionObserver.disconnect();
    };
  }, []);

  return (
    <main>
      <div className="blob-bg"></div>
      <div className="blob-bg-2"></div>

      {/* Navbar */}
      <nav className={`navbar ${scrolled ? "navbar-scrolled" : ""}`}>
        <div className="logo">MZ</div>
        <ul className="nav-links">
          <li><a href="#home" className={activeSection === "home" ? "active" : ""}>Home</a></li>
          <li><a href="#about" className={activeSection === "about" ? "active" : ""}>About</a></li>
          <li><a href="#skills" className={activeSection === "skills" ? "active" : ""}>Skills</a></li>
          <li><a href="#projects" className={activeSection === "projects" ? "active" : ""}>Projects</a></li>
          <li><a href="#experience" className={activeSection === "experience" ? "active" : ""}>Experience</a></li>
          <li><a href="#contact" className={activeSection === "contact" ? "active" : ""}>Contact</a></li>
        </ul>
      </nav>

      {/* Hero Section */}
      <header id="home" className="hero">
        <div className="hero-content">
          <h2 className="greeting">Hi, I'm</h2>
          <h1 className="name">Muhammad Zamin</h1>
          <h3 className="role">Flutter Developer</h3>
          <p className="summary">
            Flutter Developer with 1 year + of hands-on experience in building high-quality, responsive
            mobile applications. Specialized in Dart, UI/UX design, and complex state management.
          </p>
          <div className="hero-btns">
            <a href="#projects" className="btn btn-primary">View Projects</a>
            <a href="#contact" className="btn btn-secondary">Get In Touch</a>
          </div>
        </div>
        <div className="hero-image">
          <div className="image-container">
            <Image
              src="/profile_Image.jpeg"
              alt="Muhammad Zamin"
              fill
              style={{ objectFit: 'cover' }}
              priority
            />
          </div>
        </div>
      </header>

      {/* About Section */}
      <section id="about" className="section">
        <div className="container">
          <div className="section-title reveal-on-scroll">
            <h2>About Me</h2>
            <div className="underline"></div>
          </div>
          <div className="about-grid">
            <div className="about-text reveal-on-scroll">
              <p>
                I am passionate about writing clean, maintainable code and continuously learning
                new technologies to deliver outstanding user experiences. Skilled in Dart programming,
                UI/UX design, API integration, and state management using <strong>GetX</strong> and <strong>RiverPod</strong>.
              </p>
              <div className="info-list">
                <div className="info-item"><i className="fas fa-map-marker-alt"></i> Islamabad, Pakistan</div>
                <div className="info-item"><i className="fas fa-graduation-cap"></i> Bachelor of Software Engineering</div>
                <div className="info-item"><i className="fas fa-university"></i> Comsats University Abbottabad</div>
              </div>
            </div>
            <div className="education-box reveal-on-scroll">
              <h3>Education</h3>
              <div className="edu-card">
                <span className="year">2020 – 2024</span>
                <h4>Bachelor of Software Engineering</h4>
                <p>Comsats University Abbottabad</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="section secondary-bg">
        <div className="container">
          <div className="section-title reveal-on-scroll">
            <h2>My Expertise</h2>
            <div className="underline"></div>
          </div>
          <div className="skills-grid">
            {[
              { icon: "fab fa-google", title: "Flutter & Dart", desc: "Responsive/Adaptive UI development" },
              { icon: "fas fa-project-diagram", title: "State Management", desc: "GetX, RiverPod, Provider, Streams" },
              { icon: "fas fa-cloud", title: "Backend & APIs", desc: "Firebase, Firestore, RESTful APIs" },
              { icon: "fas fa-code", title: "Java & OOP", desc: "Strong foundation in OOP principles" },
              { icon: "fas fa-language", title: "Localization", desc: "Multi-language support implementation" },
              { icon: "fab fa-git-alt", title: "Git & Version Control", desc: "GitHub, Collaborative workflows" }
            ].map((skill, i) => (
              <div key={i} className="skill-card reveal-on-scroll">
                <i className={`${skill.icon} skill-icon`}></i>
                <h3>{skill.title}</h3>
                <p>{skill.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="section">
        <div className="container">
          <div className="section-title reveal-on-scroll">
            <h2>Featured Projects</h2>
            <div className="underline"></div>
          </div>
          <div className="projects-grid">
            {[
              {
                title: "Tawil",
                desc: "Optimized user experience with clean architecture.",
                tech: "MVVM, Riverpod",
                img: "/tawil_logo.png",
                appStore: "https://apps.apple.com/pk/app/tawil-trulyislam/id6754604567",
                playStore: "https://play.google.com/store/apps/details?id=com.tawil.tawil"
              },
              {
                title: "The Tuitionist",
                desc: "Educational platform for students and tutors.",
                tech: "GetX, REST API",
                img: "/the-tuititionist_Logo.png",
                appStore: "https://apps.apple.com/pk/app/the-tuitionist/id6759322713",
                playStore: "https://play.google.com/store/apps/details?id=com.release.thetuitionist&hl=en"
              },
              {
                title: "Jazb",
                desc: "Seamlessly integrated Flutter mobile application.",
                tech: "Flutter, Dart",
                img: "/jazb_logo.png",
                appStore: "https://apps.apple.com/pk/app/jazb/id6748350679",
                playStore: "https://play.google.com/store/apps/details?id=com.jazb.thetuitionist&hl=en"
              },
              {
                title: "Rise Rich",
                desc: "High-performance financial application. Available on App Store.",
                tech: "Flutter, Firebase",
                img: "/Rise_Rich_Logo.png",
                appStore: "https://apps.apple.com/pk/app/rise-rich/id6754073725",
                playStore: "https://play.google.com/store/apps/details?id=com.rise_rich.app&hl=en"
              }
            ].map((proj, i) => {
              const isLogo = !!(proj as any).img;
              return (
                <div key={i} className="project-card reveal-on-scroll">
                  <div className="project-img" style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    padding: isLogo ? '30px' : '0',
                    background: isLogo ? 'rgba(30, 41, 59, 0.6)' : undefined
                  }}>
                    <Image
                      src={(proj as any).img || "/project_default.jpg"}
                      alt={proj.title}
                      fill={!isLogo}
                      width={isLogo ? 200 : undefined}
                      height={isLogo ? 200 : undefined}
                      style={{
                        objectFit: isLogo ? 'contain' : 'cover',
                        opacity: isLogo ? 1 : 0.7,
                        position: isLogo ? 'relative' : 'absolute'
                      }}
                    />
                    <div className="project-badge">Mobile App</div>
                  </div>
                  <div className="project-info">
                    <h3>{proj.title}</h3>
                    <p>{proj.desc}</p>
                    <div className="project-cta-group">
                      {(proj as any).appStore && (
                        <a href={(proj as any).appStore} target="_blank" rel="noopener noreferrer" className="project-cta">
                          <i className="fab fa-apple"></i>
                          <span>App Store</span>
                        </a>
                      )}
                      {(proj as any).playStore && (
                        <a href={(proj as any).playStore} target="_blank" rel="noopener noreferrer" className="project-cta playstore">
                          <i className="fab fa-google-play"></i>
                          <span>Play Store</span>
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
          <div className="more-projects reveal-on-scroll">
            <h3>Other Notable Work:</h3>
            <div className="project-list-minimal">
              Covid Tracer &bull; Level Plus app &bull; Raabta App &bull; BabyBU &bull; Red Balloon
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="section secondary-bg">
        <div className="container">
          <div className="section-title reveal-on-scroll">
            <h2>Professional Experience</h2>
            <div className="underline"></div>
          </div>
          <div className="experience-timeline">
            <div className="timeline-item reveal-on-scroll">
              <div className="timeline-dot"></div>
              <div className="timeline-content">
                <div className="exp-header">
                  <h3>Flutter Developer</h3>
                  <span className="company">The Tuitionist</span>
                </div>
                <p className="exp-location">Islamabad</p>
                <ul className="exp-list">
                  <li>Developed Responsive/Adaptive Widgets for diverse screen sizes.</li>
                  <li>Implemented multi-language support (Localization).</li>
                  <li>Created Custom Themes (Light & Dark Mode) and smooth Animations.</li>
                  <li>Followed MVC Architecture for maintainable codebases.</li>
                  <li>Integrated RESTful APIs (Postman) and State Management (Provider & Getx).</li>
                  <li>Managed Firebase & Firestore integration with Social Logins.</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="section">
        <div className="container">
          <div className="section-title reveal-on-scroll">
            <h2>Get In Touch</h2>
            <div className="underline"></div>
          </div>
          <div className="contact-grid">
            <div className="contact-info reveal-on-scroll">
              <div className="contact-card">
                <i className="fas fa-envelope"></i>
                <p>mzamin15102@gmail.com</p>
              </div>
              <div className="contact-card">
                <i className="fas fa-phone"></i>
                <p>03420918034</p>
              </div>
              <div className="contact-card">
                <i className="fab fa-linkedin"></i>
                <p>linkedin.com/in/muhammad-zamin-580547343</p>
              </div>
            </div>
            <form className="contact-form reveal-on-scroll">
              <div className="form-group">
                <input type="text" placeholder="Your Name" required />
              </div>
              <div className="form-group">
                <input type="email" placeholder="Your Email" required />
              </div>
              <div className="form-group">
                <textarea placeholder="Your Message" rows={5} required></textarea>
              </div>
              <button type="submit" className="btn btn-primary">Send Message</button>
            </form>
          </div>
        </div>
      </section>

      <footer>
        <p>&copy; 2026 Muhammad Zamin. All rights reserved.</p>
      </footer>
    </main>
  );
}
