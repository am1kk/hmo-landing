function App() {
  const [tweaks, setTweaks] = React.useState(() => ({ ...window.TWEAKS }));
  const [editActive, setEditActive] = React.useState(false);

  React.useEffect(() => {
    const a = ACCENTS[tweaks.accent] || ACCENTS.acid;
    document.documentElement.style.setProperty("--accent", a.color);
    document.documentElement.style.setProperty("--accent-rgb", a.rgb);
    document.body.classList.toggle("sticker-animated", tweaks.stickers === "animated");
  }, [tweaks]);

  React.useEffect(() => {
    const handler = (e) => {
      if (!e.data) return;
      if (e.data.type === "__activate_edit_mode") setEditActive(true);
      else if (e.data.type === "__deactivate_edit_mode") setEditActive(false);
    };
    window.addEventListener("message", handler);
    window.parent?.postMessage({ type: "__edit_mode_available" }, "*");
    return () => window.removeEventListener("message", handler);
  }, []);

  return (
    <>
      <nav className="nav">
        <div className="nav-brand"><span className="dot"/><span>Hear Me Out</span><span className="tag">· discord game</span></div>
        <a className="nav-cta" href={INSTALL_URL} target="_blank" rel="noopener"><DiscordIcon/>install</a>
      </nav>
      <Hero/>
      <HowItWorks/>
      <Prompts/>
      <BuiltFor/>
      <Testimonials/>
      <FinalCta/>
      <footer className="foot"><span>© HMO 2026 — voice-first, clout-free.</span><span>made for the group chat.</span></footer>

      <TweaksPanel tweaks={tweaks} setTweaks={setTweaks} active={editActive}/>
    </>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<App/>);
