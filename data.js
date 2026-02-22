// Saudi Pro League 2025-26 Season Data (Live as of Feb 21, 2026)

const STANDINGS = [
  { team: "Al-Hilal", p: 22, w: 17, d: 5, l: 0, gf: 57, ga: 18, gd: 39, pts: 56, form: ["W", "W", "W", "D", "W"] },
  { team: "Al-Ahli", p: 23, w: 17, d: 5, l: 1, gf: 53, ga: 25, gd: 28, pts: 56, form: ["W", "W", "W", "W", "W"] },
  { team: "Al-Nassr", p: 22, w: 18, d: 1, l: 3, gf: 55, ga: 18, gd: 37, pts: 55, form: ["W", "W", "W", "W", "L"] },
  { team: "Al-Qadsiah", p: 23, w: 16, d: 5, l: 2, gf: 51, ga: 22, gd: 29, pts: 53, form: ["W", "W", "W", "W", "L"] },
  { team: "Al-Taawoun", p: 23, w: 11, d: 6, l: 6, gf: 38, ga: 26, gd: 12, pts: 39, form: ["L", "D", "L", "W", "L"] },
  { team: "Al-Ittihad", p: 22, w: 11, d: 4, l: 7, gf: 40, ga: 29, gd: 11, pts: 37, form: ["W", "W", "L", "L", "W"] },
  { team: "Al-Shabab", p: 23, w: 10, d: 6, l: 7, gf: 37, ga: 41, gd: -4, pts: 36, form: ["W", "L", "W", "D", "W"] },
  { team: "Al-Ettifaq", p: 23, w: 10, d: 5, l: 8, gf: 32, ga: 35, gd: -3, pts: 35, form: ["W", "L", "D", "W", "L"] },
  { team: "Damac", p: 23, w: 7, d: 6, l: 10, gf: 32, ga: 40, gd: -8, pts: 27, form: ["L", "L", "W", "L", "D"] },
  { team: "Al-Fateh", p: 23, w: 7, d: 5, l: 11, gf: 29, ga: 44, gd: -15, pts: 26, form: ["L", "L", "D", "W", "L"] },
  { team: "Al-Khaleej", p: 22, w: 6, d: 8, l: 8, gf: 26, ga: 33, gd: -7, pts: 26, form: ["D", "D", "L", "W", "D"] },
  { team: "Al-Fayha", p: 23, w: 7, d: 6, l: 10, gf: 24, ga: 43, gd: -19, pts: 24, form: ["W", "L", "L", "L", "D"] },
  { team: "Al-Riyadh", p: 23, w: 6, d: 6, l: 11, gf: 21, ga: 43, gd: -22, pts: 24, form: ["W", "D", "L", "D", "L"] },
  { team: "Al-Raed", p: 21, w: 6, d: 5, l: 10, gf: 22, ga: 36, gd: -14, pts: 23, form: ["L", "D", "L", "W", "D"] },
  { team: "Al-Wehda", p: 21, w: 4, d: 5, l: 12, gf: 22, ga: 45, gd: -23, pts: 17, form: ["L", "L", "W", "L", "D"] },
  { team: "Al-Okhdood", p: 23, w: 4, d: 4, l: 15, gf: 20, ga: 54, gd: -34, pts: 16, form: ["L", "L", "D", "W", "L"] },
  { team: "Al-Orobah", p: 21, w: 3, d: 5, l: 13, gf: 14, ga: 52, gd: -38, pts: 14, form: ["L", "L", "D", "L", "L"] },
  { team: "Al-Kholood", p: 23, w: 5, d: 4, l: 14, gf: 15, ga: 62, gd: -47, pts: 19, form: ["L", "W", "L", "L", "L"] },
];

const RESULTS = [
  { home: "Damac", away: "Al-Shabab", homeScore: 1, awayScore: 3, date: "2026-02-20", matchday: 23 },
  { home: "Al-Okhdood", away: "Al-Qadsiah", homeScore: 2, awayScore: 4, date: "2026-02-20", matchday: 23 },
  { home: "Al-Taawoun", away: "Al-Fayha", homeScore: 2, awayScore: 3, date: "2026-02-20", matchday: 23 },
  { home: "Al-Ahli", away: "Al-Najmah", homeScore: 4, awayScore: 1, date: "2026-02-19", matchday: 23 },
  { home: "Al-Ettifaq", away: "Al-Fateh", homeScore: 4, awayScore: 3, date: "2026-02-19", matchday: 23 },
  { home: "Al-Kholood", away: "Al-Riyadh", homeScore: 0, awayScore: 2, date: "2026-02-19", matchday: 23 },
  { home: "Al-Nassr", away: "Al-Fateh", homeScore: 2, awayScore: 0, date: "2026-02-14", matchday: 22 },
  { home: "Al-Hilal", away: "Al-Ettifaq", homeScore: 2, awayScore: 0, date: "2026-02-13", matchday: 22 },
  { home: "Al-Ahli", away: "Al-Shabab", homeScore: 5, awayScore: 2, date: "2026-02-13", matchday: 22 },
];

const TOP_SCORERS = [
  { name: "Cristiano Ronaldo", team: "Al-Nassr", goals: 23, matches: 21, nationality: "🇵🇹" },
  { name: "Aleksandar Mitrović", team: "Al-Hilal", goals: 22, matches: 22, nationality: "🇷🇸" },
  { name: "Ivan Toney", team: "Al-Ahli", goals: 20, matches: 23, nationality: "🏴󠁧󠁢󠁥󠁮󠁧󠁿" },
  { name: "Karim Benzema", team: "Al-Ittihad", goals: 19, matches: 20, nationality: "🇫🇷" },
  { name: "Abderrazak Hamdallah", team: "Al-Shabab", goals: 17, matches: 22, nationality: "🇲🇦" },
];

const TOP_ASSISTS = [
  { name: "Salem Al-Dawsari", team: "Al-Hilal", assists: 15, matches: 22, nationality: "🇸🇦" },
  { name: "Riyad Mahrez", team: "Al-Ahli", assists: 13, matches: 23, nationality: "🇩🇿" },
  { name: "Moussa Diaby", team: "Al-Ittihad", assists: 12, matches: 22, nationality: "🇫🇷" },
  { name: "Cristiano Ronaldo", team: "Al-Nassr", assists: 11, matches: 21, nationality: "🇵🇹" },
  { name: "Malcom", team: "Al-Hilal", assists: 10, matches: 21, nationality: "🇧🇷" },
];


const TEAM_COLORS = {
  "Al-Ittihad": { primary: "#000000", secondary: "#FDE01A" },
  "Al-Hilal": { primary: "#1B458F", secondary: "#FFFFFF" },
  "Al-Nassr": { primary: "#FDE01A", secondary: "#1B458F" },
  "Al-Ahli": { primary: "#006838", secondary: "#FFFFFF" },
  "Al-Shabab": { primary: "#000000", secondary: "#FFFFFF" },
  "Al-Taawoun": { primary: "#FDB913", secondary: "#1B458F" },
  "Al-Ettifaq": { primary: "#1B458F", secondary: "#006838" },
  "Al-Fateh": { primary: "#1B458F", secondary: "#006838" },
  "Damac": { primary: "#FDE01A", secondary: "#F40000" },
  "Al-Khaleej": { primary: "#006838", secondary: "#FDB913" },
  "Al-Raed": { primary: "#F40000", secondary: "#FFFFFF" },
  "Al-Fayha": { primary: "#F47920", secondary: "#1B458F" },
  "Al-Wehda": { primary: "#F40000", secondary: "#FFFFFF" },
  "Al-Riyadh": { primary: "#000000", secondary: "#F40000" },
  "Al-Okhdood": { primary: "#1B458F", secondary: "#F40000" },
  "Al-Qadsiah": { primary: "#F40000", secondary: "#FDB913" },
  "Al-Orobah": { primary: "#1B458F", secondary: "#F40000" },
  "Al-Kholood": { primary: "#4A148C", secondary: "#FFFFFF" },
};

// Helper functions shared across pages
function getTeamAbbr(name) {
  const abbrs = {
    "Al-Ittihad": "ITT", "Al-Hilal": "HIL", "Al-Nassr": "NAS",
    "Al-Ahli": "AHL", "Al-Shabab": "SHA", "Al-Taawoun": "TAA",
    "Al-Ettifaq": "ETT", "Al-Fateh": "FAT", "Damac": "DAM",
    "Al-Khaleej": "KHA", "Al-Raed": "RAE", "Al-Fayha": "FAY",
    "Al-Riyadh": "RIY", "Al-Wehda": "WEH", "Al-Okhdood": "OKH",
    "Al-Qadsiah": "QAD", "Al-Orobah": "ORO", "Al-Kholood": "KHO"
  };
  return abbrs[name] || name.substring(0, 3).toUpperCase();
}

function getTeamColor(name) {
  return TEAM_COLORS[name] ? TEAM_COLORS[name].primary : "#444";
}

function teamBadgeHTML(name, size = 32) {
  const logo = GENERATED_LOGOS ? GENERATED_LOGOS[name] : null;
  if (logo) {
    return `<img src="${logo}" alt="${name}" class="team-logo" style="width:${size}px;height:${size}px;">`;
  }
  const abbr = getTeamAbbr(name);
  const color = getTeamColor(name);
  const fs = Math.max(size * 0.28, 8);
  return `<div class="team-badge" style="background:${color};width:${size}px;height:${size}px;font-size:${fs}px">${abbr}</div>`;
} function playerImageHTML(name, size = 64) {
  const imgUrl = PLAYER_IMAGES ? PLAYER_IMAGES[name] : null;
  const initials = name.split(' ').map(n => n[0]).join('').slice(0, 2);
  if (imgUrl) {
    return `
      <div class="player-img-container" style="width:${size}px;height:${size}px;">
        <img src="${imgUrl}" alt="${name}" class="player-img" onerror="this.style.display='none';this.nextElementSibling.style.display='flex'">
        <div class="player-placeholder" style="display:none;width:100%;height:100%;align-items:center;justify-content:center;background:#2a2a2a;color:#555;font-weight:700;font-size:${size * 0.3}px">${initials}</div>
      </div>`;
  }
  return `<div class="player-img-container" style="width:${size}px;height:${size}px;background:#2a2a2a;display:flex;align-items:center;justify-content:center;color:#555;font-weight:700;font-size:${size * 0.3}px">${initials}</div>`;
}
