<section id="books" className="container py-16">
  <div className="flex items-end justify-between gap-6">
    <div>
      <h2 className="h-display text-3xl md:text-4xl font-bold">{c.books.heading}</h2>
      <p className="prose-base mt-2">Non‑fiction that feels like a conversation. Fiction that lingers.</p>
    </div>
    <a href="https://amazon.com/" className="text-sm text-slate-600 hover:underline flex items-center gap-1">
      {c.books.viewAll}
    </a>
  </div>

  <div className="mt-8 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
    {c.books.items.map((b, i) => (
      <div key={i} className="card card-hover">
        <div className="p-4">
          <div className="cover-frame">
            <img src={b.img} alt={`${b.title} cover`} className="cover-img" />
          </div>
          <h3 className="mt-4 text-base font-semibold leading-snug">{b.title}</h3>
          <div className="mt-1 text-xs text-slate-500">{b.tag}</div>
          <p className="mt-2 text-sm text-slate-700 line-clamp-3">{b.blurb}</p>
          <div className="mt-4 flex gap-2">
            <a href={b.links.sample}><button className="rounded-xl bg-slate-900 text-white text-sm h-10 px-4">Sample</button></a>
            <a href={b.links.store}><button className="rounded-xl border border-slate-300 text-sm h-10 px-4">Amazon</button></a>
          </div>
        </div>
      </div>
    ))}
  </div>
</section>
