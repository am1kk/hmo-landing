function BuiltFor() {
  const servers = [
    {
      name: "locked in 🔒",
      tag: "friend server · 14 online",
      c: "#ff6a8b",
      msgs: [
        { u: "sabrina",  t: "y'all i dropped my take and it's UNHINGED", k: "ok" },
        { u: "jay",      t: "no bc the question today is so personal 😭", k: "ok" },
        { u: "mars",     t: "i need to hear what sabrina said NOW", k: "hot" },
      ],
    },
    {
      name: "yappers 📢",
      tag: "class server · 41 students",
      c: "#7aa7ff",
      msgs: [
        { u: "emi",      t: "bro HMO said \"rank your partners\" in a class server???", k: "hot" },
        { u: "alex",     t: "i will be answering that. i will also be judged.", k: "ok" },
        { u: "priya",    t: "the HMO q today is attacking me personally", k: "ok" },
      ],
    },
    {
      name: "the pit 🕳️",
      tag: "gaming squad · 8 regulars",
      c: "#00d4a3",
      msgs: [
        { u: "zero",     t: "post your takes before raid. losers go last.", k: "ok" },
        { u: "noxx",     t: "ok but benji's voice note was diabolical", k: "hot" },
        { u: "benji",    t: "that was a joke and you know it", k: "ok" },
      ],
    },
    {
      name: "NYU '26 🏛️",
      tag: "school server · 200+ seniors",
      c: "#ffb84d",
      msgs: [
        { u: "devon",    t: "today's Q literally exposed our whole grade", k: "hot" },
        { u: "kai",      t: "who's the most insufferable person in our year. GO.", k: "ok" },
        { u: "riya",     t: "answered. not saying who. listen and find out.", k: "ok" },
      ],
    },
  ];

  return (
    <section className="section" id="built-for">
      <div className="section-eyebrow">built for real friends</div>
      <h2 className="section-title">works best when the group <span className="accent">already knows each other.</span></h2>
      <p className="section-sub">HMO is not for big public discords. it's for servers where people actually care what their friends think — and get dragged when the takes land.</p>

      <div className="bf-servers">
        {servers.map((s, i) => (
          <div key={i} className="bf-server" style={{"--c": s.c}}>
            <div className="bf-head">
              <div className="bf-badge">#</div>
              <div className="bf-head-txt">
                <div className="bf-name">{s.name}</div>
                <div className="bf-tag"><span className="bf-live"/>{s.tag}</div>
              </div>
            </div>
            <div className="bf-chat">
              {s.msgs.map((m, j) => (
                <div key={j} className={`bf-msg ${m.k}`}>
                  <span className="bf-u">@{m.u}</span>
                  <span className="bf-t">{m.t}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
window.BuiltFor = BuiltFor;
