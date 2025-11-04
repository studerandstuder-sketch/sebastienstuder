import React, { useMemo, useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Mail, Youtube, Instagram, Globe, BookOpen, Mic, Linkedin, Newspaper, ChevronRight, ExternalLink, Calendar, Ticket } from "lucide-react";

const copy = {
  en: {
    nav: { books: "Books", about: "About", press: "Press", events: "Events", contact: "Contact", amazon: "Amazon" },
    hero: {
      kicker: "Author · Entrepreneur · Creator",
      title: "Sébastien Studer",
      subtitle: "Writing at the intersection of love, money, and a life aligned. Essays and books that blend personal stories with practical frameworks.",
      ctaPrimary: "Explore Books",
      ctaSecondary: "Join Newsletter"
    },
    books: {
      heading: "Books",
      viewAll: "View all on Amazon",
      items: [
        { title: "Love Exposure: The Hidden Financial Risks of Marriage", tag: "Personal Finance · Relationships", blurb: "A clear-eyed guide to protecting love, assets, and peace of mind—with score-style assessments and real-world tools.", img: "/covers/love-exposure.jpg", links: { sample: "#", store: "#" } },
        { title: "Aligned: The Small Steps to a Healthier, Happier Life", tag: "Habits · Health · Clarity", blurb: "Tiny, compounding habits for energy, focus, and a calmer brain.", img: "/covers/aligned.jpg", links: { sample: "#", store: "#" } },
        { title: "Açaí (Novel)", tag: "Fiction · Family · Tech", blurb: "A modern fable about a boy, a family, and the cost of ‘fixing’ what makes us human.", img: "/covers/acai.png", links: { sample: "#", store: "#" } },
        { title: "Instinct: The Animal Inside You", tag: "Mindset · Purpose", blurb: "A sharp meditation on place, nature, and the inner compass.", img: "/covers/instinct.jpg", links: { sample: "#", store: "#" } },
        { title: "AI FIRST", tag: "Technology · Society", blurb: "How we handed our humanity to machines, one decision at a time.", img: "/covers/ai-first.jpg", links: { sample: "#", store: "#" } }
      ]
    },
    about: {
      heading: "About",
      bio: `Sébastien Studer has lived many lives in one. Entrepreneur, husband, father, investor, and writer — he has built, failed, rebuilt, and learned that success without peace is just noise.

Born in France and living between the United States and Brazil, Sébastien has spent years balancing work, health, and family across different worlds and time zones. Through his career in energy and real estate, and his ventures in personal development, he discovered one universal truth: peace begins with awareness — in our health, our habits, and our hearts.

After years of chasing results, Sébastien began simplifying everything — his routines, his priorities, his mindset. He realized that balance doesn’t come from doing more, but from doing less of what doesn’t matter and more of what makes you feel alive. His first priority is peace of mind. He takes time to observe, analyze, and act toward a healthier, happier, and freer life — guided by awareness, action, and peace, the three quiet pillars that hold a meaningful life together.

With clarity, transparency, and alignment, Sébastien continues to humbly improve his relationships, his mind, his health, and his finances — proving that harmony is not found, but created.

When he’s not writing or working, Sébastien enjoys tennis, traveling with his family, and long conversations about life, simplicity, and freedom.

“I don’t write to teach. I write to remember — and to share what balance really feels like when you finally stop chasing it.”

— Sébastien Studer`,
      highlights: ["Miami-based", "Non‑fiction & fiction", "YouTube & podcasts", "EN/FR/PT"]
    },
    press: { heading: "Press & Media", kit: "Download Media Kit", blurb: "Short and long bios, press photos, book one‑pagers, and brand assets. For interviews, speaking, and features.", samples: [
      { title: "Talking Love & Money", kind: "Podcast", cta: "Listen" },
      { title: "Aligned Habits, Real Life", kind: "YouTube", cta: "Watch" },
      { title: "The Love Exposure Score", kind: "Article", cta: "Read" }
    ] },
    events: { heading: "Events", sub: "Upcoming talks, signings, and interviews", empty: "New dates coming soon." },
    newsletter: { heading: "Get one thoughtful email / month", sub: "No spam. Just practical ideas and behind‑the‑scenes notes.", placeholder: "Your email", button: "Subscribe" },
    contact: { heading: "Contact", sub: "Speaking, media, rights, collaboration", name: "Your name", email: "Your email", message: "How can I help?", send: "Send Message" },
    footer: { rights: "All rights reserved." }
  }
};

const AMAZON_AUTHOR_URL = "https://www.amazon.com/stores/Sebastien-Studer/author/B0FWD1YYGS?ref=ap_rdr&isDramIntegrated=true&shoppingPortalEnabled=true&ccs_id=d1d7f8d8-5d07-4cda-bbae-f4fdec7eebd0";

const social = [
  { name: "Email", href: "mailto:hello@sebastienstuder.com", icon: Mail },
  { name: "YouTube", href: "https://youtube.com/", icon: Youtube },
  { name: "Instagram", href: "https://instagram.com/", icon: Instagram },
  { name: "LinkedIn", href: "https://www.linkedin.com/", icon: Linkedin },
  { name: "Press", href: "#press", icon: Newspaper },
  { name: "Events", href: "#events", icon: Calendar }
];

const Section = ({ id, children }) => (
  <section id={id} className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-16 md:py-24">{children}</section>
);

export default function AuthorSite() {
  const [lang] = useState("en");
  const c = useMemo(() => copy[lang], [lang]);

  useEffect(() => {
    const data = { "@context": "https://schema.org", "@type": "Person", name: "Sébastien Studer", url: "https://sebastienstuder.com", jobTitle: "Author", sameAs: social.filter(s=>s.href.startsWith("http")).map(s=>s.href) };
    const el = document.createElement("script");
    el.type = "application/ld+json";
    el.innerHTML = JSON.stringify(data);
    document.head.appendChild(el);
    return () => { document.head.removeChild(el); };
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-slate-50 text-slate-900">
      <header className="sticky top-0 z-50 backdrop-blur bg-white/70 border-b border-slate-200">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <a href="#top" className="font-semibold tracking-tight text-slate-900">Sébastien Studer</a>
          <nav className="hidden md:flex items-center gap-6 text-sm">
            <a href="#books" className="hover:text-slate-900/70">{c.nav.books}</a>
            <a href="#about" className="hover:text-slate-900/70">{c.nav.about}</a>
            <a href="#press" className="hover:text-slate-900/70">{c.nav.press}</a>
            <a href="#events" className="hover:text-slate-900/70">{c.nav.events}</a>
            <a href="#contact" className="hover:text-slate-900/70">{c.nav.contact}</a>
            <a href={AMAZON_AUTHOR_URL} target="_blank" rel="noopener noreferrer" className="hover:underline">{c.nav.amazon}</a>
          </nav>
        </div>
      </header>

      <Section id="top">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <motion.div initial={{opacity:0, y:10}} animate={{opacity:1, y:0}} transition={{duration:0.6}}>
            <p className="text-sm uppercase tracking-widest text-slate-500">{c.hero.kicker}</p>
            <h1 className="mt-3 text-4xl md:text-5xl font-extrabold leading-tight">{c.hero.title}</h1>
            <p className="mt-4 text-lg text-slate-700 max-w-prose">{c.hero.subtitle}</p>
            <div className="mt-6 flex items-center gap-3">
              <a href="#books"><Button size="lg" className="rounded-2xl">{c.hero.ctaPrimary} <ChevronRight className="ml-2 h-4 w-4"/></Button></a>
              <a href="#press"><Button size="lg" variant="outline" className="rounded-2xl">Media <ExternalLink className="ml-2 h-4 w-4"/></Button></a>
            </div>
            <div className="mt-6 flex flex-wrap gap-3">
              {social.map(({name, href, icon:Icon}) => (
                <a key={name} href={href} className="inline-flex items-center gap-2 text-slate-600 hover:text-slate-900 text-sm">
                  <Icon className="h-4 w-4"/>{name}
                </a>
              ))}
            </div>
          </motion.div>
          <motion.div initial={{opacity:0, y:10}} animate={{opacity:1, y:0}} transition={{duration:0.6, delay:0.1}} className="md:justify-self-end w-full max-w-sm">
            <Card className="rounded-2xl shadow-sm overflow-hidden">
              <img src="/author.jpg" alt="Sébastien Studer portrait" className="w-full h-56 md:h-64 object-cover"/>
              <CardContent className="p-6">
                <div className="flex items-center gap-4">
                  <Avatar className="h-12 w-12 rounded-xl">
                    <AvatarImage src="/author.jpg" alt="Sébastien Studer"/><AvatarFallback>SS</AvatarFallback>
                  </Avatar>
                  <div><h3 className="font-semibold">Newsletter</h3><p className="text-sm text-slate-600">{c.newsletter.sub}</p></div>
                </div>
                <form name="newsletter" method="POST" action="/__forms.html" data-netlify="true" className="mt-4 flex gap-2">
                  <input type="hidden" name="form-name" value="newsletter" />
                  <Input required name="email" placeholder={c.newsletter.placeholder} className="flex-1"/>
                  <Button type="submit">{c.newsletter.button}</Button>
                </form>
                <p className="mt-2 text-xs text-slate-500">1 click unsubscribe. Privacy‑first.</p>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </Section>

      <Section id="about">
        <div className="grid md:grid-cols-3 gap-8 items-start">
          <div className="md:col-span-2">
            <h2 className="text-3xl font-bold">{c.about.heading}</h2>
            <div className="mt-3 text-slate-700 leading-relaxed whitespace-pre-line">{c.about.bio}</div>
            <ul className="mt-4 flex flex-wrap gap-2">
              {c.about.highlights.map((h, i) => (<li key={i}><Badge variant="outline" className="rounded-xl">{h}</Badge></li>))}
            </ul>
          </div>
          <Card className="rounded-2xl">
            <CardHeader><CardTitle>Now</CardTitle></CardHeader>
            <CardContent className="text-sm text-slate-700 space-y-2">
              <div>• Finishing edits for <strong>Aligned</strong> audiobook.</div>
              <div>• Drafting new essays on <strong>family finance</strong> & <strong>habits</strong>.</div>
              <div>• Tennis 2×/week; writing early mornings.</div>
            </CardContent>
          </Card>
        </div>
      </Section>

      <Section id="books">
        <div className="flex items-end justify-between gap-6">
          <div>
            <h2 className="text-3xl font-bold">{c.books.heading}</h2>
            <p className="text-slate-600 mt-2">Non‑fiction that feels like a conversation. Fiction that lingers.</p>
          </div>
          <a href={AMAZON_AUTHOR_URL} target="_blank" rel="noopener noreferrer" className="text-sm inline-flex items-center gap-1 hover:underline">
            {c.books.viewAll} <ExternalLink className="h-3.5 w-3.5"/>
          </a>
        </div>
        <div className="mt-8 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6 justify-items-center">
          {c.books.items.map((b, i) => (
            <Card key={i} className="w-full max-w-[220px] rounded-2xl shadow-sm hover:shadow-md transition-shadow">
              <CardHeader>
                <div className="aspect-[2/3] w-full overflow-hidden rounded-xl bg-slate-100">
                  <img src={b.img} alt={`${b.title} cover`} className="h-full w-full object-cover"/>
                </div>
                <CardTitle className="mt-4 text-base leading-snug">{b.title}</CardTitle>
                <div className="mt-1"><Badge variant="secondary">{b.tag}</Badge></div>
              </CardHeader>
              <CardContent>
                <p className="text-slate-700 text-sm leading-relaxed line-clamp-3">{b.blurb}</p>
                <div className="mt-4 flex gap-2">
                  <a href={b.links.sample}><Button size="sm" className="rounded-xl"><BookOpen className="mr-2 h-4 w-4"/>Sample</Button></a>
                  <a href={b.links.store}><Button size="sm" variant="outline" className="rounded-xl"><Globe className="mr-2 h-4 w-4"/>Amazon</Button></a>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </Section>
    </div>
  );
}
