function Testimonials() {
  const quotes = [
    { u: "@sabrina.exe",     q: "nah this actually got us talking",              c: "#ff6a8b" },
    { u: "@jaycarta",        q: "this is group chat lore now",                    c: "#7aa7ff" },
    { u: "@mars.coded",      q: "this exposed everybody lmao",                    c: "#00d4a3" },
    { u: "@theobongos",      q: "deadass this was too crazy",                     c: "#ffb84d" },
    { u: "@kaylannnn",       q: "my friends were too honest bro",                 c: "#c084fc" },
    { u: "@dannyboi24",      q: "not us becoming oversharers",                    c: "#ff8fb1" },
    { u: "@rxssita",         q: "the questions are lowkey brutal",                c: "#5eead4" },
    { u: "@benji.ssb",       q: "wait why is this so addictive",                  c: "#fbbf24" },
    { u: "@princess.loop",   q: "this is literally the best part of our server",  c: "#f472b6" },
    { u: "@kxlvin",          q: "everyone got cooked respectfully",               c: "#a78bfa" },
    { u: "@mimi.jpg",        q: "we learned way too much",                        c: "#34d399" },
  ];
  // Avatar = initial on colored circle
  const Avatar = ({u, c}) => {
    const letter = (u.replace(/^@/, "")[0] || "?").toUpperCase();
    return (
      <span className="avatar" style={{background: c}}>
        <span>{letter}</span>
      </span>
    );
  };
  // Two tracks, duplicated for seamless loop
  const doubled = [...quotes, ...quotes];
  return (
    <section className="ticker-section">
      <div className="ticker">
        <div className="ticker-track">
          {doubled.map((t, i) => (
            <div key={i} className="testi">
              <Avatar u={t.u} c={t.c}/>
              <div className="testi-body">
                <div className="testi-q">"{t.q}"</div>
                <div className="testi-u">{t.u}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="ticker ticker-reverse">
        <div className="ticker-track">
          {[...doubled].reverse().map((t, i) => (
            <div key={i} className="testi">
              <Avatar u={t.u} c={t.c}/>
              <div className="testi-body">
                <div className="testi-q">"{t.q}"</div>
                <div className="testi-u">{t.u}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
window.Testimonials = Testimonials;
