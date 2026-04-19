function Hero() {
  return (
    <section className="hero" data-layout={window.TWEAKS.layout || 'asymmetric'}>
      <div className="hero-copy">
        <div className="hero-eyebrow">
          <span className="dot"/>
          now live on discord
        </div>
        <h1 className="hero-title">a daily <span className="accent">voice game</span><br/>for your friend server.</h1>
        <p className="hero-sub">HMO is a Discord bot that drops one spicy question a day. You answer privately with voice notes. After you post, you hear what everyone else said. It feels like group chat, but with actual stakes.</p>
        <div className="cta-row">
          <a className="btn-primary" href={INSTALL_URL} target="_blank" rel="noopener">
            <DiscordIcon/>
            Add to Discord
          </a>
          <span className="hero-micro">free forever • 30-second setup</span>
        </div>
      </div>
      <div className="hero-art">
        <div className="mic-waves"><i/><i/><i/></div>
        <img className="big-ear" src="assets/emoji-ear.png" alt=""/>
        <img className="float-sticker s1" style={{"--rot":"8deg"}} src="assets/emoji-fire.png" alt=""/>
        <img className="float-sticker s2" style={{"--rot":"-6deg"}} src="assets/emoji-chat-bubble.png" alt=""/>
        <img className="float-sticker s3" style={{"--rot":"12deg"}} src="assets/btn-play-green.png" alt=""/>
        <img className="float-sticker s4" style={{"--rot":"-10deg"}} src="assets/emoji-smile-green.png" alt=""/>
        <img className="float-sticker s5" style={{"--rot":"4deg"}} src="assets/emoji-globe.png" alt=""/>
        <div className="live-count"><span className="dot"/>REC · 127 takes today</div>
      </div>
    </section>
  );
}
window.Hero = Hero;
