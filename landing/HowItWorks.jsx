function HowItWorks() {
  return (
    <section className="section" id="how">
      <div className="section-eyebrow">how it works</div>
      <div className="steps">
        <div className="step">
          <div className="step-num">1</div>
          <h3 className="step-title">add the bot</h3>
          <p className="step-body">install it in your server and pick the channel where daily questions will go.</p>
          <div className="step-visual">
            <div className="slash-cmd">
              <span className="slash">/</span>hmo-setup
              <span className="arg">#general</span>
              <span className="caret"/>
            </div>
          </div>
        </div>

        <div className="step">
          <div className="step-num">2</div>
          <h3 className="step-title">users tap join</h3>
          <p className="step-body">only people who opt in get DMs from the bot, including today's active question.</p>
          <div className="step-visual">
            <div className="join-card">
              <div className="join-card-msg">🔥 HMO is live: one question a day. post first, hear the crew after.</div>
              <button className="join-card-btn">Join HMO</button>
            </div>
          </div>
        </div>

        <div className="step">
          <div className="step-num">3</div>
          <h3 className="step-title">unleash the chaos</h3>
          <p className="step-body">hear what your friends really think about anything, and everyone.</p>
          <div className="step-visual">
            <div className="voice-reply">
              <img className="play-btn" src="assets/btn-play-green.png" alt=""/>
              <div className="wave">
                {Array.from({length: 22}, (_, i) => (
                  <span key={i} style={{animationDelay: `${i * 0.06}s`}}/>
                ))}
              </div>
              <span className="dur">0:14</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
window.HowItWorks = HowItWorks;
