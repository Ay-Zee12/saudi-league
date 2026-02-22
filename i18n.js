const TRANSLATIONS = {
    en: {
        home: "Home",
        standings: "Standings",
        results: "Results",
        scorers: "Top Scorers",
        assists: "Top Assists",
        title: "Saudi Pro League",
        season: "2025-26 Season",
        heroDescription: "Your complete destination for league standings, match results, top scorers, and assist leaders across the Kingdom's premier football competition.",
        teamsCount: "Teams",
        totalMatches: "Total Matches",
        goalsScored: "Goals Scored",
        matchday: "Matchday",
        standingsOverview: "Standings Overview",
        top5Teams: "Top 5 teams in the league",
        viewFullTable: "View Full Table",
        exploreStats: "Explore Stats",
        diveDeeper: "Dive deeper into every aspect of the league",
        leagueStandings: "League Standings",
        fullTableDescription: "Full table with 18 teams, points, goal difference, and form",
        matchResults: "Match Results",
        latestScoresDescription: "Latest scores and results across all matchdays",
        topScorers: "Top Scorers",
        leadingGoalScorers: "Leading goal scorers featuring the league's biggest stars",
        topAssists: "Top Assists",
        bestPlaymakers: "Best playmakers and assist providers in the league",
        latestResults: "Latest Results",
        mostRecentMatchday: "Most recent matchday",
        viewAllResults: "View All Results",
        footerText: "Saudi Pro League Stats Tracker — All data for illustration purposes.",
        madeBy: "Made By",
        team: "Team",
        p: "P",
        w: "W",
        d: "D",
        l: "L",
        gf: "GF",
        ga: "GA",
        gd: "GD",
        pts: "PTS",
        form: "Form",
        rank: "Rank",
        goals: "Goals",
        matches: "Matches",
        nationality: "Nationality",
        afcChampionsLeague: "AFC Champions League",
        relegationZone: "Relegation Zone",
        allMatchdays: "All Matchdays",
        switchTo: "العربية",
        switchToIcon: "🇸🇦",
        currentLang: "English",
        // Team names
        "Al-Hilal": "Al-Hilal",
        "Al-Ahli": "Al-Ahli",
        "Al-Nassr": "Al-Nassr",
        "Al-Qadsiah": "Al-Qadsiah",
        "Al-Taawoun": "Al-Taawoun",
        "Al-Ittihad": "Al-Ittihad",
        "Al-Shabab": "Al-Shabab",
        "Al-Ettifaq": "Al-Ettifaq",
        "Damac": "Damac",
        "Al-Fateh": "Al-Fateh",
        "Al-Khaleej": "Al-Khaleej",
        "Al-Fayha": "Al-Fayha",
        "Al-Riyadh": "Al-Riyadh",
        "Al-Raed": "Al-Raed",
        "Al-Wehda": "Al-Wehda",
        "Al-Okhdood": "Al-Okhdood",
        "Al-Orobah": "Al-Orobah",
        "Al-Kholood": "Al-Kholood",
        "Al-Najmah": "Al-Najmah"
    },
    ar: {
        home: "الرئيسية",
        standings: "الترتيب",
        results: "النتائج",
        scorers: "الهدافين",
        assists: "صناع اللعب",
        title: "دوري روشن السعودي",
        season: "موسم 2025-26",
        heroDescription: "وجهتك الكاملة لترتيب الدوري ونتائج المباريات وكبار الهدافين وقادة التمريرات الحاسمة في المسابقة الأولى لكرة القدم في المملكة.",
        teamsCount: "فرق",
        totalMatches: "مجموع المباريات",
        goalsScored: "الأهداف المسجلة",
        matchday: "جولة",
        standingsOverview: "نظرة عامة على الترتيب",
        top5Teams: "أفضل 5 فرق في الدوري",
        viewFullTable: "عرض الجدول الكامل",
        exploreStats: "استكشف الإحصائيات",
        diveDeeper: "تعمق أكثر في كل جوانب الدوري",
        leagueStandings: "ترتيب الدوري",
        fullTableDescription: "جدول كامل مع 18 فريقاً، النقاط، فارق الأهداف، وشكل الفريق",
        matchResults: "نتائج المباريات",
        latestScoresDescription: "أحدث النتائج والنتائج عبر جميع الجولات",
        topScorers: "قائمة الهدافين",
        leadingGoalScorers: "كبار الهدافين يضمون أكبر نجوم الدوري",
        topAssists: "قائمة الصناع",
        bestPlaymakers: "أفضل صانعي اللعب ومزودي التمريرات في الدوري",
        latestResults: "آخر النتائج",
        mostRecentMatchday: "آخر جولة",
        viewAllResults: "عرض جميع النتائج",
        footerText: "متتبع إحصائيات دوري روشن السعودي - جميع البيانات لأغراض توضيحية.",
        madeBy: "صنع بواسطة",
        team: "الفريق",
        p: "لعب",
        w: "فاز",
        d: "تعادل",
        l: "خسر",
        gf: "له",
        ga: "عليه",
        gd: "الفارق",
        pts: "نقاط",
        form: "آخر 5",
        rank: "المركز",
        goals: "الأهداف",
        matches: "المباريات",
        nationality: "الجنسية",
        afcChampionsLeague: "دوري أبطال آسيا للنخبة",
        relegationZone: "منطقة الهبوط",
        allMatchdays: "جميع الجولات",
        switchTo: "English",
        switchToIcon: "🇬🇧",
        currentLang: "العربية",
        // Team names
        "Al-Hilal": "الهلال",
        "Al-Ahli": "الأهلي",
        "Al-Nassr": "النصر",
        "Al-Qadsiah": "القادسية",
        "Al-Taawoun": "التعاون",
        "Al-Ittihad": "الاتحاد",
        "Al-Shabab": "الشباب",
        "Al-Ettifaq": "الاتفاق",
        "Damac": "ضمك",
        "Al-Fateh": "الفتح",
        "Al-Khaleej": "الخليج",
        "Al-Fayha": "الفيحاء",
        "Al-Riyadh": "الرياض",
        "Al-Raed": "الرائد",
        "Al-Wehda": "الوحدة",
        "Al-Okhdood": "الأخدود",
        "Al-Orobah": "العروبة",
        "Al-Kholood": "الخلود",
        "Al-Najmah": "النجمة"
    }
};

const PLAYER_TRANSLATIONS = {
    "Cristiano Ronaldo": "كريستيانو رونالدو",
    "Aleksandar Mitrović": "ألكساندر ميتروفيتش",
    "Ivan Toney": "إيفان توني",
    "Karim Benzema": "كريم بنزيما",
    "Abderrazak Hamdallah": "عبد الرزاق حمد الله",
    "Salem Al-Dawsari": "سالم الدوسري",
    "Riyad Mahrez": "رياض محرز",
    "Moussa Diaby": "موسى ديابي",
    "Malcom": "مالكوم"
};

let currentLang = localStorage.getItem("spl_lang") || "en";

function i18n(key) {
    return TRANSLATIONS[currentLang][key] || key;
}

function translatePlayer(name) {
    if (currentLang === "ar") {
        return PLAYER_TRANSLATIONS[name] || name;
    }
    return name;
}

function translateTeam(name) {
    if (currentLang === "ar") {
        return TRANSLATIONS.ar[name] || name;
    }
    return name;
}

function updatePageLanguage() {
    document.documentElement.lang = currentLang;
    document.documentElement.dir = currentLang === "ar" ? "rtl" : "ltr";

    if (currentLang === "ar") {
        document.body.classList.add("rtl");
    } else {
        document.body.classList.remove("rtl");
    }

    const elements = document.querySelectorAll("[data-i18n]");
    elements.forEach(el => {
        const key = el.getAttribute("data-i18n");
        if (TRANSLATIONS[currentLang][key]) {
            el.textContent = TRANSLATIONS[currentLang][key];
        }
    });

    // Update language toggle buttons text/icon
    const langToggles = document.querySelectorAll(".lang-text, .lang-label");
    langToggles.forEach(el => {
        el.textContent = i18n("switchTo");
    });

    // Update dynamic content
    if (typeof renderPageContent === "function") {
        renderPageContent();
    } else {
        // Fallsback if page has its own DOMContentLoaded logic we can't easily re-trigger
        // Most of our pages have logic inside DOMContentLoaded
        // We might need to dispatch an event or just reload
        window.location.reload();
    }
}

function toggleLanguage() {
    currentLang = currentLang === "en" ? "ar" : "en";
    localStorage.setItem("spl_lang", currentLang);
    updatePageLanguage();
}

document.addEventListener("DOMContentLoaded", () => {
    // Initial update
    document.documentElement.lang = currentLang;
    document.documentElement.dir = currentLang === "ar" ? "rtl" : "ltr";
    if (currentLang === "ar") {
        document.body.classList.add("rtl");
    }

    const elements = document.querySelectorAll("[data-i18n]");
    elements.forEach(el => {
        const key = el.getAttribute("data-i18n");
        if (TRANSLATIONS[currentLang][key]) {
            el.textContent = TRANSLATIONS[currentLang][key];
        }
    });

    // Update language toggle buttons text
    const langToggles = document.querySelectorAll(".lang-text, .lang-label");
    langToggles.forEach(el => {
        el.textContent = i18n("switchTo");
    });

    const langIcons = document.querySelectorAll(".lang-icon, .lang-flag");
    langIcons.forEach(el => {
        el.textContent = i18n("switchToIcon");
    });

    // Delegate language toggle events
    document.addEventListener("click", (e) => {
        const target = e.target.closest("#langToggle, #langToggleBox, .lang-btn, .lang-box-btn");
        if (target) {
            e.preventDefault();
            toggleLanguage();
        }
    });
});
