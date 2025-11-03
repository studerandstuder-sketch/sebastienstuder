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

// --------------------------------------------------------------------
// Static asset convention: place these files in your Next.js /public/covers/
// /public/covers/love-exposure.jpg
// /public/covers/aligned.jpg
// /public/covers/acai.png
// /public/covers/instinct.jpg
// /public/covers/ai-first.jpg
// --------------------------------------------------------------------

// ---------- Utility: Simple i18n (EN/FR/PT) ----------
const copy = {
  en: {
    nav: { books: "Books", about: "About", press: "Press", events: "Events", contact: "Contact" },
    hero: {
      kicker: "Author · Entrepreneur · Creator",
      title: "Sébastien Studer",
      subtitle:
        "Writing at the intersection of love, money, and a life aligned. Essays and books that blend personal stories with practical frameworks.",
      ctaPrimary: "Explore Books",
      ctaSecondary: "Join Newsletter",
    },
    books: {
      heading: "Books",
      viewAll: "View all on Amazon",
      items: [
        {
          title: "Love Exposure: The Hidden Financial Risks of Marriage",
          tag: "Personal Finance · Relationships",
          blurb: "A clear-eyed guide to protecting love, assets, and peace of mind—with score-style assessments and real-world tools.",
          img: "/covers/love-exposure.jpg",
          links: { sample: "#", store: "#" },
        },
        {
          title: "Aligned: The Small Steps to a Healthier, Happier Life",
          tag: "Habits · Health · Clarity",
          blurb: "Tiny, compounding habits for energy, focus, and a calmer brain.",
          img: "/covers/aligned.jpg",
          links: { sample: "#", store: "#" },
        },
        {
          title: "Açaí (Novel)",
          tag: "Fiction · Family · Tech",
          blurb: "A modern fable about a boy, a family, and the cost of ‘fixing’ what makes us human.",
          img: "/covers/acai.png",
          links: { sample: "#", store: "#" },
        },
        {
          title: "Instinct: The Animal Inside You",
          tag: "Mindset · Purpose",
          blurb: "A sharp meditation on place, nature, and the inner compass.",
          img: "/covers/instinct.jpg",
          links: { sample: "#", store: "#" },
        },
        {
          title: "AI FIRST",
          tag: "Technology · Society",
          blurb: "How we handed our humanity to machines, one decision at a time.",
          img: "/covers/ai-first.jpg",
          links: { sample: "#", store: "#" },
        },
      ],
    },
    about: {
      heading: "About",
      bio:
        "Sébastien Studer is a French-American-Brazilian author and entrepreneur based in Miami. He writes practical books and thoughtful fiction across money, health, and modern family life. When he’s not writing, he’s building ventures, playing tennis, and exploring Miami with his family.",
      highlights: ["Miami-based", "Non‑fiction & fiction", "YouTube & podcasts", "EN/FR/PT"],
    },
    press: {
      heading: "Press & Media",
      kit: "Download Media Kit",
      blurb:
        "Short and long bios, press photos, book one‑pagers, and brand assets. For interviews, speaking, and features.",
      samples: [
        { title: "Talking Love & Money", kind: "Podcast", cta: "Listen" },
        { title: "Aligned Habits, Real Life", kind: "YouTube", cta: "Watch" },
        { title: "The Love Exposure Score", kind: "Article", cta: "Read" },
      ],
    },
    events: {
      heading: "Events",
      sub: "Upcoming talks, signings, and interviews",
      empty: "New dates coming soon.",
    },
    newsletter: {
      heading: "Get one thoughtful email / month",
      sub: "No spam. Just practical ideas and behind‑the‑scenes notes.",
      placeholder: "Your email",
      button: "Subscribe",
    },
    contact: {
      heading: "Contact",
      sub: "Speaking, media, rights, collaboration",
      name: "Your name",
      email: "Your email",
      message: "How can I help?",
      send: "Send Message",
    },
    footer: {
      rights: "All rights reserved.",
    },
  },
  fr: {
    nav: { books: "Livres", about: "À propos", press: "Presse", events: "Événements", contact: "Contact" },
    hero: {
      kicker: "Auteur · Entrepreneur · Créateur",
      title: "Sébastien Studer",
      subtitle:
        "Écrire à l’angle de l’amour, de l’argent et d’une vie alignée. Des livres mêlant récits personnels et outils concrets.",
      ctaPrimary: "Découvrir les livres",
      ctaSecondary: "S’abonner à la newsletter",
    },
    books: {
      heading: "Livres",
      viewAll: "Voir tous sur Amazon",
      items: [
        { title: "Love Exposure", tag: "Finances · Couple", blurb: "Protéger l’amour, le patrimoine et la sérénité.", img: "/covers/love-exposure.jpg", links: { sample: "#", store: "#" } },
        { title: "Aligned", tag: "Habitudes · Santé", blurb: "De petits pas qui composent de grands changements.", img: "/covers/aligned.jpg", links: { sample: "#", store: "#" } },
        { title: "Açaí (Roman)", tag: "Fiction · Famille · Tech", blurb: "Un conte moderne sur ce qui nous rend humains.", img: "/covers/acai.png", links: { sample: "#", store: "#" } },
        { title: "Instinct", tag: "Esprit · Sens", blurb: "Méditation sur la place et la boussole intérieure.", img: "/covers/instinct.jpg", links: { sample: "#", store: "#" } },
        { title: "AI FIRST", tag: "Technologie · Société", blurb: "Comment nous avons cédé à la machine.", img: "/covers/ai-first.jpg", links: { sample: "#", store: "#" } },
      ],
    },
    about: {
      heading: "À propos",
      bio:
        "Auteur franco-américano-brésilien installé à Miami, Sébastien écrit des essais pratiques et de la fiction intime sur l’argent, la santé et la famille.",
      highlights: ["Basé à Miami", "Non‑fiction & fiction", "YouTube & podcasts", "FR/EN/PT"],
    },
    press: {
      heading: "Presse & médias",
      kit: "Télécharger le kit presse",
      blurb:
        "Bios courtes/longues, photos presse, fiches livres et éléments de marque.",
      samples: [
        { title: "Parler d’amour & d’argent", kind: "Podcast", cta: "Écouter" },
        { title: "Habitudes alignées", kind: "YouTube", cta: "Voir" },
        { title: "Le Love Exposure Score", kind: "Article", cta: "Lire" },
      ],
    },
    events: { heading: "Événements", sub: "À venir", empty: "Nouvelles dates bientôt." },
    newsletter: {
      heading: "Un email réfléchi par mois",
      sub: "Sans spam. Des idées concrètes et des coulisses.",
      placeholder: "Votre email",
      button: "S’abonner",
    },
    contact: { heading: "Contact", sub: "Conférences, médias, droits", name: "Votre nom", email: "Votre email", message: "Votre message", send: "Envoyer" },
    footer: { rights: "Tous droits réservés." },
  },
  pt: {
    nav: { books: "Livros", about: "Sobre", press: "Imprensa", events: "Eventos", contact: "Contato" },
    hero: {
      kicker: "Autor · Empreendedor · Criador",
      title: "Sébastien Studer",
      subtitle:
        "Escrevendo onde amor, dinheiro e vida alinhada se encontram. Histórias reais com ferramentas práticas.",
      ctaPrimary: "Ver livros",
      ctaSecondary: "Assinar newsletter",
    },
    books: {
      heading: "Livros",
      viewAll: "Ver todos na Amazon",
      items: [
        { title: "Love Exposure", tag: "Finanças · Relações", blurb: "Proteja o amor, os bens e a paz.", img: "/covers/love-exposure.jpg", links: { sample: "#", store: "#" } },
        { title: "Aligned", tag: "Hábitos · Saúde", blurb: "Passos pequenos que acumulam.", img: "/covers/aligned.jpg", links: { sample: "#", store: "#" } },
        { title: "Açaí (Romance)", tag: "Ficção · Família · Tech", blurb: "Um conto moderno sobre humanidade.", img: "/covers/acai.png", links: { sample: "#", store: "#" } },
        { title: "Instinct", tag: "Mente · Propósito", blurb: "Uma meditação sobre bússola interior.", img: "/covers/instinct.jpg", links: { sample: "#", store: "#" } },
        { title: "AI FIRST", tag: "Tecnologia · Sociedade", blurb: "Como cedemos à máquina.", img: "/covers/ai-first.jpg", links: { sample: "#", store: "#" } },
      ],
    },
    about: {
      heading: "Sobre",
      bio:
        "Autor franco‑americano‑brasileiro em Miami, escreve não‑ficção prática e ficção sobre dinheiro, saúde e família.",
      highlights: ["Baseado em Miami", "Não‑ficção & ficção", "YouTube & podcasts", "PT/EN/FR"],
    },
    press: { heading: "Imprensa & mídia", kit: "Baixar press kit", blurb: "Bios, fotos, fichas e marca.", samples: [] },
    events: { heading: "Eventos", sub: "Próximos", empty: "Novas datas em breve." },
    newsletter: { heading: "Um email por mês", sub: "Sem spam.", placeholder: "Seu email", button: "Inscrever" },
    contact: { heading: "Contato", sub: "Palestras, mídia, direitos", name: "Seu nome", email: "Seu email", message: "Sua mensagem", send: "Enviar" },
    footer: { rights: "Todos os direitos reservados." },
  },
};

const social = [
  { name: "Email", href: "mailto:hello@sebastienstuder.com", icon: Mail },
  { name: "YouTube", href: "https://youtube.com/", icon: Youtube },
  { name: "Instagram", href: "https://instagram.com/", icon: Instagram },
  { name: "LinkedIn", href: "https://www.linkedin.com/", icon: Linkedin },
  { name: "Press", href: "#press", icon: Newspaper },
  { name: "Events", href: "#events", icon: Calendar },
];

const Section = ({ id, children }) => (
  <section id={id} className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-16 md:py-24">{children}</section>
);

export default function AuthorSite() {
  const [lang, setLang] = useState("en");
  const c = useMemo(() => copy[lang], [lang]);

  useEffect(() => {
    // JSON-LD basic schema for Person/Author
    const data = {
      "@context": "https://schema.org",
      "@type": "Person",
      name: "Sébastien Studer",
      url: "https://sebastienstuder.com",
      jobTitle: "Author",
      sameAs: social.filter(s=>s.href.startsWith("http")).map(s=>s.href),
    };
    const el = document.createElement("script");
    el.type = "application/ld+json";
    el.innerHTML = JSON.stringify(data);
    document.head.appendChild(el);
    return () => { document.head.removeChild(el); };
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-slate-50 text-slate-900">
      {/* NAVBAR */}
      <header className="sticky top-0 z-50 backdrop-blur bg-white/70 border-b border-slate-200">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <a href="#top" className="font-semibold tracking-tight text-slate-900">Sébastien Studer</a>
          <nav className="hidden md:flex items-center gap-6 text-sm">
            <a href="#books" className="hover:text-slate-900/70">{c.nav.books}</a>
            <a href="#about" className="hover:text-slate-900/70">{c.nav.about}</a>
            <a href="#press" className="hover:text-slate-900/70">{c.nav.press}</a>
            <a href="#events" className="hover:text-slate-900/70">{c.nav.events}</a>
            <a href="#contact" className="hover:text-slate-900/70">{c.nav.contact}</a>
          </nav>
          <div className="flex items-center gap-2">
            <select value={lang} onChange={(e)=>setLang(e.target.value)} className="text-sm border rounded-md px-2 py-1">
              <option value="en">EN</option>
              <option value="fr">FR</option>
              <option value="pt">PT</option>
            </select>
            <a href="#newsletter"><Button size="sm" variant="secondary">{c.hero.ctaSecondary}</Button></a>
          </div>
        </div>
      </header>

      {/* HERO */}
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
          <motion.div initial={{opacity:0, y:10}} animate={{opacity:1, y:0}} transition={{duration:0.6, delay:0.1}} className="md:justify-self-end">
            <Card className="rounded-2xl shadow-sm">
              <CardContent className="p-6">
                <div className="flex items-center gap-4">
                  <Avatar className="h-16 w-16 rounded-2xl">
                    <AvatarImage src="/covers/aligned.jpg" alt="Sebastien"/>
                    <AvatarFallback>SS</AvatarFallback>
                  </Avatar>
                  <div>
                    <h3 className="font-semibold">Newsletter</h3>
                    <p className="text-sm text-slate-600">{c.newsletter.sub}</p>
                  </div>
                </div>
                <form name="newsletter" method="POST" data-netlify="true" className="mt-4 flex gap-2">
                  <input type="hidden" name="form-name" value="newsletter"/>
                  <Input required name="email" placeholder={c.newsletter.placeholder} className="flex-1"/>
                  <Button type="submit">{c.newsletter.button}</Button>
                </form>
                <p className="mt-2 text-xs text-slate-500">1 click unsubscribe. Privacy‑first.</p>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </Section>

      {/* BOOKS */}
      <Section id="books">
        <div className="flex items-end justify-between gap-6">
          <div>
            <h2 className="text-3xl font-bold">{c.books.heading}</h2>
            <p className="text-slate-600 mt-2">Non‑fiction that feels like a conversation. Fiction that lingers.</p>
          </div>
          <a href="https://amazon.com/" className="text-sm inline-flex items-center gap-1 hover:underline">{c.books.viewAll} <ExternalLink className="h-3.5 w-3.5"/></a>
        </div>
        <div className="mt-8 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {c.books.items.map((b, i) => (
            <Card key={i} className="rounded-2xl shadow-sm hover:shadow-md transition-shadow">
              <CardHeader>
                <div className="aspect-[3/4] w-full overflow-hidden rounded-xl bg-slate-100">
                  <img src={b.img} alt={`${b.title} cover`} className="h-full w-full object-cover"/>
                </div>
                <CardTitle className="mt-4 text-lg leading-snug">{b.title}</CardTitle>
                <div className="mt-1"><Badge variant="secondary">{b.tag}</Badge></div>
              </CardHeader>
              <CardContent>
                <p className="text-slate-700 text-sm leading-relaxed line-clamp-4">{b.blurb}</p>
                <div className="mt-4 flex gap-2">
                  <a href={b.links.sample}><Button size="sm" className="rounded-xl"><BookOpen className="mr-2 h-4 w-4"/>Sample</Button></a>
                  <a href={b.links.store}><Button size="sm" variant="outline" className="rounded-xl"><Globe className="mr-2 h-4 w-4"/>Amazon</Button></a>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </Section>

      {/* ABOUT */}
      <Section id="about">
        <div className="grid md:grid-cols-3 gap-8 items-start">
          <div className="md:col-span-2">
            <h2 className="text-3xl font-bold">{c.about.heading}</h2>
            <p className="mt-3 text-slate-700 leading-relaxed">{c.about.bio}</p>
            <ul className="mt-4 flex flex-wrap gap-2">
              {c.about.highlights.map((h, i) => (
                <li key={i}><Badge variant="outline" className="rounded-xl">{h}</Badge></li>
              ))}
            </ul>
          </div>
          <Card className="rounded-2xl">
            <CardHeader>
              <CardTitle>Now</CardTitle>
            </CardHeader>
            <CardContent className="text-sm text-slate-700 space-y-2">
              <div>• Finishing edits for <strong>Aligned</strong> audiobook.</div>
              <div>• Drafting new essays on <strong>family finance</strong> & <strong>habits</strong>.</div>
              <div>• Tennis 2×/week; writing early mornings.</div>
            </CardContent>
          </Card>
        </div>
      </Section>

      {/* PRESS */}
      <Section id="press">
        <div className="grid md:grid-cols-3 gap-8 items-start">
          <div className="md:col-span-2">
            <h2 className="text-3xl font-bold">{c.press.heading}</h2>
            <p className="mt-2 text-slate-700 max-w-prose">{c.press.blurb}</p>
            <div className="mt-6 grid sm:grid-cols-2 gap-4">
              {c.press.samples.map((s, i) => (
                <Card key={i} className="rounded-2xl">
                  <CardHeader>
                    <CardTitle className="text-base flex items-center gap-2"><Mic className="h-4 w-4"/>{s.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <Button variant="outline" className="rounded-xl">{s.cta} <ExternalLink className="ml-2 h-4 w-4"/></Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
          <Card className="rounded-2xl border-slate-200">
            <CardHeader>
              <CardTitle>Media Kit</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-slate-700">Bio (short/long), photos, book one‑pagers, brand assets.</p>
              <a href="/media-kit.zip"><Button className="mt-4 w-full rounded-xl">{c.press.kit}</Button></a>
            </CardContent>
          </Card>
        </div>
      </Section>

      {/* EVENTS */}
      <Section id="events">
        <div className="flex items-end justify-between">
          <div>
            <h2 className="text-3xl font-bold">{c.events.heading}</h2>
            <p className="text-slate-600 mt-2">{c.events.sub}</p>
          </div>
          <Button variant="outline" className="rounded-xl"><Ticket className="mr-2 h-4 w-4"/>Request a talk</Button>
        </div>
        <div className="mt-6 text-slate-600">{c.events.empty}</div>
      </Section>

      {/* CONTACT */}
      <Section id="contact">
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <h2 className="text-3xl font-bold">{c.contact.heading}</h2>
            <p className="text-slate-700 mt-2">{c.contact.sub}</p>
            <Separator className="my-6"/>
            <div className="space-y-3 text-sm">
              <a className="flex items-center gap-2" href="mailto:hello@sebastienstuder.com"><Mail className="h-4 w-4"/>hello@sebastienstuder.com</a>
              <a className="flex items-center gap-2" href="https://instagram.com/"><Instagram className="h-4 w-4"/>Instagram</a>
              <a className="flex items-center gap-2" href="https://youtube.com/"><Youtube className="h-4 w-4"/>YouTube</a>
              <a className="flex items-center gap-2" href="https://www.linkedin.com/"><Linkedin className="h-4 w-4"/>LinkedIn</a>
            </div>
          </div>
          <Card className="rounded-2xl">
            <CardHeader>
              <CardTitle>Say hello</CardTitle>
            </CardHeader>
            <CardContent>
              <form name="contact" method="POST" data-netlify="true" className="space-y-3">
                <input type="hidden" name="form-name" value="contact"/>
                <Input required name="name" placeholder={c.contact.name}/>
                <Input required type="email" name="email" placeholder={c.contact.email}/>
                <Textarea required name="message" placeholder={c.contact.message} rows={5}/>
                <Button type="submit" className="rounded-xl">{c.contact.send}</Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </Section>

      {/* FOOTER */}
      <footer className="border-t border-slate-200 py-10">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 text-sm text-slate-600 flex flex-col gap-3 md:flex-row items-center justify-between">
          <div>© {new Date().getFullYear()} Sébastien Studer. {c.footer.rights}</div>
          <div className="flex items-center gap-4">
            <a className="hover:underline" href="#privacy">Privacy</a>
            <a className="hover:underline" href="#terms">Terms</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
