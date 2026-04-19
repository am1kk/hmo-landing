function Prompts() {
  const prompts = [
    { cat: "JUDGE", q: "Who in this chat is definitely on the Epstein files?", tone: "hot" },
    { cat: "CHAOS", q: "Which one of us would survive the least amount of time in prison?", tone: "chaos" },
    { cat: "TEA", q: "Who in this group has the most delusional body count claim?", tone: "tea" },
    { cat: "PRICE", q: "Who here would betray the whole group for the right amount of money, and what's the number?", tone: "vibe" },
    { cat: "CANCELED", q: "If our group chat got leaked, who is getting canceled first?", tone: "hot" },
    { cat: "CHAOS", q: "What's the dumbest lie you tell on dates that always works?", tone: "vibe" },
  ];
  const stickers = [
    "assets/emoji-fire.png",
    "assets/emoji-deny-red.png",
    "assets/emoji-chat-bubble.png",
    "assets/emoji-smile-green.png",
    "assets/emoji-globe.png",
    "assets/emoji-ear.png",
  ];
  return (
    <section className="section" id="prompts">
      <div className="section-eyebrow">the daily drama engine</div>
      <h2 className="section-title">the questions get <span className="accent">weird fast.</span></h2>

      <div className="prompts-grid">
        {prompts.map((p, i) => (
          <div key={i} className={`prompt-card ${p.tone}`}>
            <div className="blob-clip"><div className="bg-blob"/></div>
            <img className="sticker-peek" src={stickers[i % stickers.length]} alt=""/>
            <div className="tag">{p.cat}</div>
            <p className="q">{p.q}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
window.Prompts = Prompts;
