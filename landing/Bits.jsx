// Shared bits — accent map, install URL, icons
const INSTALL_URL = "https://discord.com/oauth2/authorize?client_id=1475142178253705290&permissions=2147601536&integration_type=0&scope=bot+applications.commands";

const ACCENTS = {
  acid:    { name: "Acid",    color: "rgb(0,255,85)",   rgb: "0,255,85" },
  siren:   { name: "Siren",   color: "rgb(255,0,0)",    rgb: "255,0,0" },
  hotpink: { name: "Hotpink", color: "rgb(255,12,202)", rgb: "255,12,202" },
  butter:  { name: "Butter",  color: "rgb(255,212,0)",  rgb: "255,212,0" },
};

const HERO_COPY = {
  hear_me_out: {
    eyebrow: "now live on discord",
    title: (accent) => (<>
      one daily <span className="accent">voice drop</span>.<br/>
      your crew, <span className="strike">unfiltered</span>.
    </>),
    sub: "HMO is a discord bot that drops one spicy question a day, takes voice answers in DMs, and only unlocks your crew's takes after you post yours. no clout. no feed. just real takes from the people you actually know.",
    cta: "install the bot",
    micro: "free forever • takes 30 seconds • no credit card"
  },
  spill_the_tea: {
    eyebrow: "one question. zero clout.",
    title: (accent) => (<>
      spill the <span className="accent">tea</span>.<br/>
      post first, listen after.
    </>),
    sub: "HMO asks your server one unhinged question a day. answer with a voice note in DMs — and only then do you get to hear what everyone else said. lowkey chaotic, highkey addicting.",
    cta: "add HMO to server",
    micro: "works in any server • no setup fluff"
  },
  say_it_with_chest: {
    eyebrow: "voice > text, always",
    title: (accent) => (<>
      say it with your <span className="accent">whole chest</span>.
    </>),
    sub: "a discord bot for honest takes. one daily prompt, 15-second voice answers, locked until you post. your server's group chat just got a daily drama engine.",
    cta: "install HMO",
    micro: "free forever • 30-second setup"
  }
};

const PROMPT_POOLS = {
  spicy: [
    { cat: "TAKES", q: "what opinion would get you cooked online?", tone: "hot" },
    { cat: "PEOPLE", q: "who in this server would become unbearable if they got famous?", tone: "vibe" },
    { cat: "CULTURE", q: "what movie is universally loved but actually mid?", tone: "tea" },
    { cat: "CHAOS", q: "what's the dumbest lie you tell on dates that always works?", tone: "chaos" },
    { cat: "JUDGE", q: "who in this group would survive a reality show the longest?", tone: "vibe" },
    { cat: "ICK", q: "what's an immediate ick that no one talks about?", tone: "hot" },
  ],
  chaos: [
    { cat: "UNHINGED", q: "who's winning in a fight: a goose or a raccoon?", tone: "chaos" },
    { cat: "CONFESS", q: "what's a harmless thing that irrationally annoys you?", tone: "tea" },
    { cat: "SECRET", q: "what snack are you ashamed to love but would die for?", tone: "vibe" },
    { cat: "PEOPLE", q: "who do you trust the least with the aux?", tone: "hot" },
    { cat: "LATE-NIGHT", q: "what do you do when no one is watching?", tone: "chaos" },
    { cat: "FLEX", q: "what's the least impressive flex you still brag about?", tone: "vibe" },
  ],
  wholesome: [
    { cat: "GROUP", q: "who here has elite taste — be honest.", tone: "tea" },
    { cat: "TASTE", q: "one song that sums up your week — what is it?", tone: "vibe" },
    { cat: "TIMES", q: "funniest group chat moment of the year so far?", tone: "chaos" },
    { cat: "HOT TAKE", q: "which trend actually slaps and we're lying about?", tone: "hot" },
    { cat: "CREW", q: "who brings the best energy to the server?", tone: "vibe" },
    { cat: "REAL", q: "what's a compliment for someone here you never said?", tone: "tea" },
  ]
};

const PlayIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor"><path d="M8 5v14l11-7z"/></svg>
);
const DiscordIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor">
    <path d="M20.317 4.369a19.791 19.791 0 00-4.885-1.515.074.074 0 00-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 00-5.487 0 12.64 12.64 0 00-.617-1.25.077.077 0 00-.079-.037A19.736 19.736 0 003.677 4.37a.07.07 0 00-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 00.031.056 19.9 19.9 0 005.993 3.03.078.078 0 00.084-.028c.462-.63.873-1.295 1.226-1.994a.076.076 0 00-.042-.106 13.107 13.107 0 01-1.872-.892.077.077 0 01-.008-.128c.126-.094.252-.192.373-.291a.074.074 0 01.077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 01.078.009c.121.099.247.198.374.292a.077.077 0 01-.006.127 12.299 12.299 0 01-1.873.892.077.077 0 00-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 00.084.028 19.839 19.839 0 006.002-3.03.077.077 0 00.032-.055c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 00-.031-.028zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z"/>
  </svg>
);

Object.assign(window, {
  INSTALL_URL, ACCENTS, HERO_COPY, PROMPT_POOLS,
  PlayIcon, DiscordIcon
});
