export const EMBED_URL = "https://embed.twitch.tv/embed/v1.js";

const loadEmbedApi = callback => {
  const script = document.createElement("script");

  script.setAttribute("src", EMBED_URL);
  // Wait for DOM to finishing loading before we try loading embed
  script.addEventListener("load", callback);
  document.body.appendChild(script);
};

export { loadEmbedApi };
