import React, { useEffect, useRef, useState } from "react";
import { ArrowDownRight, ArrowRight, Instagram, Youtube, Facebook, Menu, X, MapPin, Phone, Mail } from "lucide-react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const programs = [
  { no: "01", title: "STRENGTH", text: "Build strength and improve overall performance.", image: "https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?auto=format&fit=crop&w=1400&q=85" },
  { no: "02", title: "MUSCLE BUILDING", text: "Structured training focused on progressive development.", image: "https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?auto=format&fit=crop&w=1400&q=85" },
  { no: "03", title: "FAT LOSS", text: "Training built around fitness, movement and consistency.", image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=1400&q=85" },
  { no: "04", title: "FUNCTIONAL FITNESS", text: "Improve movement, mobility and everyday performance.", image: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&w=1400&q=85" }
];

const trainers = [
  { name: "ARJUN SHARMA", role: "STRENGTH COACH", image: "https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?auto=format&fit=crop&w=900&q=85" },
  { name: "RIYA MEHRA", role: "FITNESS COACH", image: "https://images.unsplash.com/photo-1548690312-e3b507d8f53b?auto=format&fit=crop&w=900&q=85" },
  { name: "KABIR SINGH", role: "PERFORMANCE COACH", image: "https://images.unsplash.com/photo-1584863231364-a1d8e09a2b0c?auto=format&fit=crop&w=900&q=85" }
];

const gallery = [
  "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=1300&q=85",
  "https://images.unsplash.com/photo-1571902943202-507ec2618e8f?auto=format&fit=crop&w=1000&q=85",
  "https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?auto=format&fit=crop&w=1100&q=85",
  "https://images.unsplash.com/photo-1517832207067-4db24a2ae47c?auto=format&fit=crop&w=1100&q=85",
  "https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?auto=format&fit=crop&w=1000&q=85"
];

function App() {
  const root = useRef(null);
  const [menu, setMenu] = useState(false);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const intro = gsap.timeline();
      intro.from(".hero-kicker", { y: 18, opacity: 0, duration: .7, ease: "power3.out" })
        .from(".hero-title .line", { yPercent: 115, opacity: 0, filter: "blur(8px)", stagger: .08, duration: 1.1, ease: "power4.out" }, "-=.35")
        .from(".hero-copy, .hero-actions", { y: 20, opacity: 0, duration: .7, ease: "power3.out" }, "-=.6")
        .from(".hero-image", { scale: 1.12, opacity: 0, duration: 1.8, ease: "power3.out" }, "-=1.2");

      gsap.to(".hero-image", {
        yPercent: 10, scale: 1.06, ease: "none",
        scrollTrigger: { trigger: ".hero", start: "top top", end: "bottom top", scrub: true }
      });

      gsap.utils.toArray(".reveal").forEach((el) => {
        gsap.from(el, {
          y: 45, opacity: 0, duration: 1, ease: "power3.out",
          scrollTrigger: { trigger: el, start: "top 84%", once: true }
        });
      });

      gsap.utils.toArray(".mask-title").forEach((el) => {
        gsap.from(el.querySelector(".mask-inner"), {
          yPercent: 105, duration: 1.05, ease: "power4.out",
          scrollTrigger: { trigger: el, start: "top 86%", once: true }
        });
      });

      gsap.utils.toArray(".parallax").forEach((el) => {
        gsap.to(el, {
          yPercent: -8, ease: "none",
          scrollTrigger: { trigger: el, start: "top bottom", end: "bottom top", scrub: true }
        });
      });

      gsap.utils.toArray(".count").forEach((el) => {
        const target = Number(el.dataset.target);
        const obj = { value: 0 };
        gsap.to(obj, {
          value: target, duration: 1.5, ease: "power2.out",
          scrollTrigger: { trigger: el, start: "top 85%", once: true },
          onUpdate: () => { el.textContent = String(Math.round(obj.value)).padStart(2, "0"); }
        });
      });

      gsap.to(".marquee-track", {
        xPercent: -20, ease: "none",
        scrollTrigger: { trigger: ".marquee", start: "top bottom", end: "bottom top", scrub: 1 }
      });
    }, root);

    return () => ctx.revert();
  }, []);

  const closeMenu = () => setMenu(false);

  return (
    <div ref={root}>
      <header className="nav">
        <a className="logo" href="#home">ABC<span>.gym</span></a>
        <nav className={menu ? "nav-links open" : "nav-links"}>
          {["Home","About","Programs","Trainers","Membership","Contact"].map(item => (
            <a key={item} href={"#" + item.toLowerCase()} onClick={closeMenu}>{item}</a>
          ))}
        </nav>
        <button className="menu-btn" onClick={() => setMenu(!menu)} aria-label="Toggle menu">
          {menu ? <X size={22}/> : <Menu size={22}/>}
        </button>
      </header>

      <main>
        <section className="hero" id="home">
          <div className="hero-image" />
          <div className="hero-overlay" />
          <div className="grain" />
          <div className="hero-content">
            <p className="hero-kicker"><span /> Bhopal, Madhya Pradesh</p>
            <h1 className="hero-title">
              <span className="line-wrap"><span className="line">BUILD YOUR</span></span>
              <span className="line-wrap"><span className="line">STRONGER SELF.</span></span>
            </h1>
            <p className="hero-copy">Train harder. Move better. Become stronger.</p>
            <div className="hero-actions">
              <a href="#membership" className="btn btn-light">JOIN ABC.GYM <ArrowRight size={18}/></a>
              <a href="#programs" className="btn btn-ghost">EXPLORE GYM <ArrowDownRight size={18}/></a>
            </div>
          </div>
          <div className="scroll-cue"><span /> SCROLL TO EXPLORE</div>
          <div className="hero-corner">01 / 06</div>
        </section>

        <div className="marquee">
          <div className="marquee-track">STRENGTH <i>•</i> DISCIPLINE <i>•</i> MOVEMENT <i>•</i> COMMUNITY <i>•</i> STRENGTH <i>•</i> DISCIPLINE <i>•</i></div>
        </div>

        <section className="section about" id="about">
          <div className="section-label reveal">01 — THE ABC APPROACH</div>
          <div className="about-grid">
            <div className="about-photo reveal"><img className="parallax" src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=1400&q=85" alt="Gym training" /></div>
            <div className="about-copy">
              <div className="mask-title"><h2 className="mask-inner">MORE THAN<br/><em>A GYM.</em></h2></div>
              <p className="reveal">ABC.gym is a modern fitness space in Bhopal built for people who want more from training — more strength, more discipline, better movement and confidence that carries outside the gym.</p>
              <a className="text-link reveal" href="#programs">OUR APPROACH <ArrowRight size={16}/></a>
            </div>
          </div>
          <div className="stats">
            {[
              ["01","COMMUNITY","A place where consistency becomes collective."],
              ["02","TRAINING","Purposeful programming, not random workouts."],
              ["03","DISCIPLINE","Small sessions. Long-term results."]
            ].map(([no,title,text]) => (
              <div className="stat reveal" key={no}><span className="stat-no">{no}</span><strong>{title}</strong><p>{text}</p></div>
            ))}
          </div>
        </section>

        <section className="section programs" id="programs">
          <div className="program-head">
            <div className="section-label reveal">02 — TRAINING</div>
            <div className="mask-title"><h2 className="mask-inner">TRAIN WITH <em>PURPOSE.</em></h2></div>
          </div>
          <div className="program-list">
            {programs.map(p => (
              <article className="program reveal" key={p.no}>
                <div className="program-image"><img src={p.image} alt={p.title} loading="lazy"/></div>
                <div className="program-info"><span>{p.no}</span><h3>{p.title}</h3><p>{p.text}</p><ArrowRight className="program-arrow" size={22}/></div>
              </article>
            ))}
          </div>
        </section>

        <section className="statement">
          <div className="statement-inner reveal">
            <span>NO SHORTCUTS.</span>
            <h2>SHOW UP.<br/><em>PUT IN WORK.</em></h2>
          </div>
        </section>

        <section className="section trainers" id="trainers">
          <div className="section-label reveal">03 — THE COACHES</div>
          <div className="trainer-head">
            <div className="mask-title"><h2 className="mask-inner">MEET THE<br/><em>COACHES.</em></h2></div>
            <p className="reveal">Real coaching. Clear direction. A training environment designed to help you keep going.</p>
          </div>
          <div className="trainer-grid">
            {trainers.map(t => (
              <article className="trainer reveal" key={t.name}>
                <div className="trainer-img"><img src={t.image} alt={t.name} loading="lazy"/><div className="trainer-number">0{trainers.indexOf(t)+1}</div></div>
                <div className="trainer-meta"><h3>{t.name}</h3><p>{t.role}</p></div>
              </article>
            ))}
          </div>
        </section>

        <section className="section gallery" id="gallery">
          <div className="section-label reveal">04 — INSIDE ABC.GYM</div>
          <div className="gallery-head mask-title"><h2 className="mask-inner">THE <em>ENERGY.</em></h2></div>
          <div className="gallery-grid">
            {gallery.map((img,i) => <div className={"gallery-item g"+(i+1)+" reveal"} key={img}><img src={img} alt="ABC.gym training environment" loading="lazy"/></div>)}
          </div>
        </section>

        <section className="section membership" id="membership">
          <div className="section-label reveal">05 — MEMBERSHIP</div>
          <div className="membership-head">
            <div className="mask-title"><h2 className="mask-inner">READY TO<br/><em>START?</em></h2></div>
            <p className="reveal">Choose the level that fits your training. Prices below are placeholders and can be changed anytime.</p>
          </div>
          <div className="plans">
            {[
              ["BASIC","₹1,499","Gym access","Group training"],
              ["PRO","₹2,499","Gym access","Group training","Personal training intro"],
              ["ELITE","₹3,999","Full gym access","Group training","Personal training"]
            ].map(([name,price,...items],i) => (
              <div className={"plan reveal " + (i===1 ? "featured":"")} key={name}>
                {i===1 && <span className="plan-tag">MOST POPULAR</span>}
                <span className="plan-no">0{i+1}</span><h3>{name}</h3><div className="price">{price}<small>/ month</small></div>
                <ul>{items.map(x=><li key={x}>+ {x}</li>)}</ul>
                <a href="#contact">CHOOSE {name} <ArrowRight size={16}/></a>
              </div>
            ))}
          </div>
          <a className="big-cta reveal" href="#contact">START YOUR JOURNEY <ArrowRight size={28}/></a>
        </section>

        <section className="location" id="location">
          <div className="location-map">
            <div className="map-grid" />
            <div className="map-pin"><MapPin size={30}/></div>
            <span className="map-label">BHOPAL / MP / INDIA</span>
          </div>
          <div className="location-copy">
            <span className="section-label">06 — FIND US</span>
            <div className="mask-title"><h2 className="mask-inner">ABC.GYM —<br/><em>BHOPAL</em></h2></div>
            <p>Bhopal, Madhya Pradesh, India</p>
            <p className="muted">Actual gym address and map embed can be added here later.</p>
            <a className="text-link" href="#contact">GET DIRECTIONS <ArrowRight size={16}/></a>
          </div>
        </section>

        <section className="section contact" id="contact">
          <div className="contact-left">
            <span className="section-label">07 — CONTACT</span>
            <div className="mask-title"><h2 className="mask-inner">LET'S GET<br/><em>STRONGER.</em></h2></div>
            <div className="contact-details">
              <p><Phone size={16}/> +91 00000 00000</p>
              <p><Mail size={16}/> hello@abc.gym</p>
              <p><MapPin size={16}/> Bhopal, Madhya Pradesh</p>
            </div>
          </div>
          <form className="contact-form" onSubmit={(e)=>e.preventDefault()}>
            <label>NAME<input required placeholder="Your name"/></label>
            <label>PHONE<input placeholder="+91 ..."/></label>
            <label>EMAIL<input type="email" placeholder="you@example.com"/></label>
            <label>MESSAGE<textarea rows="4" placeholder="Tell us what you're training for..."/></label>
            <button className="form-submit">SEND MESSAGE <ArrowRight size={18}/></button>
          </form>
        </section>
      </main>

      <footer className="footer">
        <div><a className="logo" href="#home">ABC<span>.gym</span></a><p>Bhopal, Madhya Pradesh</p></div>
        <div className="footer-links"><a href="#home">Home</a><a href="#about">About</a><a href="#programs">Programs</a><a href="#trainers">Trainers</a><a href="#membership">Membership</a><a href="#contact">Contact</a></div>
        <div className="socials"><a href="#" aria-label="Instagram"><Instagram size={18}/></a><a href="#" aria-label="YouTube"><Youtube size={18}/></a><a href="#" aria-label="Facebook"><Facebook size={18}/></a></div>
        <small>© 2026 ABC.gym. All rights reserved.</small>
      </footer>
    </div>
  );
}

export default App;