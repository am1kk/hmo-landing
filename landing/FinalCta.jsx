function FinalCta() {
  return (
    <section className="final" id="install">
      <h2>your server's daily <span className="accent">drama engine.</span></h2>
      <p>free forever. 30-second setup. one click away from the realest thing on discord.</p>
      <a className="btn-primary" href={INSTALL_URL} target="_blank" rel="noopener">
        <DiscordIcon/>
        install HMO on discord
      </a>
    </section>
  );
}
window.FinalCta = FinalCta;
