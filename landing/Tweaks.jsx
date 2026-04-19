function TweaksPanel({ tweaks, setTweaks, active }) {
  const set = (key, val) => {
    const next = { ...tweaks, [key]: val };
    setTweaks(next);
    window.parent?.postMessage({ type: '__edit_mode_set_keys', edits: { [key]: val } }, '*');
  };

  const section = (label, children) => (
    <div className="tweak-row">
      <label>{label}</label>
      {children}
    </div>
  );
  const btn = (key, val, label) => (
    <button
      key={val}
      className={`tweak-btn ${tweaks[key] === val ? "on" : ""}`}
      onClick={() => set(key, val)}
    >{label}</button>
  );

  return (
    <div className={`tweaks-panel ${active ? "on" : ""}`}>
      <div className="tweaks-title">Tweaks <small>HMO</small></div>

      {section("Accent", (
        <div className="tweak-btns">
          {Object.entries(ACCENTS).map(([k, v]) => (
            <button
              key={k}
              className={`swatch ${tweaks.accent === k ? "on" : ""}`}
              style={{ background: v.color }}
              onClick={() => set("accent", k)}
              title={v.name}
            />
          ))}
        </div>
      ))}

      {section("Layout", (
        <div className="tweak-btns">
          {btn("layout", "asymmetric", "Asymmetric")}
          {btn("layout", "centered", "Centered")}
        </div>
      ))}

      {section("Stickers", (
        <div className="tweak-btns">
          {btn("stickers", "animated", "Animated")}
          {btn("stickers", "static", "Static")}
        </div>
      ))}
    </div>
  );
}
window.TweaksPanel = TweaksPanel;
