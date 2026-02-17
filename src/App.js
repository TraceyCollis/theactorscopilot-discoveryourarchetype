import React, { useState, useEffect } from "react";

// --- ICONS (Embedded directly so you don't need dependencies) ---
const IconWrapper = ({
  children,
  size = 24,
  color = "currentColor",
  className = "",
}) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke={color}
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    {children}
  </svg>
);

const Zap = (props) => (
  <IconWrapper {...props}>
    <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
  </IconWrapper>
);
const Sun = (props) => (
  <IconWrapper {...props}>
    <circle cx="12" cy="12" r="5" />
    <line x1="12" y1="1" x2="12" y2="3" />
    <line x1="12" y1="21" x2="12" y2="23" />
    <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
    <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
    <line x1="1" y1="12" x2="3" y2="12" />
    <line x1="21" y1="12" x2="23" y2="12" />
    <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
    <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
  </IconWrapper>
);
const Ghost = (props) => (
  <IconWrapper {...props}>
    <path d="M9 22v-2c0-1.1.9-2 2-2h2a2 2 0 0 1 2 2v2" />
    <path d="M9 22v-2a2 2 0 0 0-2-2 2 2 0 0 0-2 2v2" />
    <path d="M15 22v-2a2 2 0 0 1 2-2 2 2 0 0 1 2 2v2" />
    <path d="M12 2a7 7 0 0 0-7 7v13h14V9a7 7 0 0 0-7-7z" />
    <path d="M8 10h.01" />
    <path d="M16 10h.01" />
  </IconWrapper>
);
const Heart = (props) => (
  <IconWrapper {...props}>
    <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
  </IconWrapper>
);
const Smile = (props) => (
  <IconWrapper {...props}>
    <circle cx="12" cy="12" r="10" />
    <path d="M8 14s1.5 2 4 2 4-2 4-2" />
    <line x1="9" y1="9" x2="9.01" y2="9" />
    <line x1="15" y1="9" x2="15.01" y2="9" />
  </IconWrapper>
);
const Anchor = (props) => (
  <IconWrapper {...props}>
    <circle cx="12" cy="5" r="3" />
    <line x1="12" y1="22" x2="12" y2="8" />
    <path d="M5 12H2a10 10 0 0 0 20 0h-3" />
  </IconWrapper>
);
const User = (props) => (
  <IconWrapper {...props}>
    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
    <circle cx="12" cy="7" r="4" />
  </IconWrapper>
);
const Mic = (props) => (
  <IconWrapper {...props}>
    <path d="M12 1a3 3 0 0 0-3 3v8a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3z" />
    <path d="M19 10v2a7 7 0 0 1-14 0v-2" />
    <line x1="12" y1="19" x2="12" y2="23" />
    <line x1="8" y1="23" x2="16" y2="23" />
  </IconWrapper>
);
const BookOpen = (props) => (
  <IconWrapper {...props}>
    <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" />
    <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
  </IconWrapper>
);
const Crown = (props) => (
  <IconWrapper {...props}>
    <path d="m2 4 3 12h14l3-12-6 7-4-7-4 7-6-7zm3 16h14" />
  </IconWrapper>
);
const ChevronRight = (props) => (
  <IconWrapper {...props}>
    <polyline points="9 18 15 12 9 6" />
  </IconWrapper>
);
const RefreshCw = (props) => (
  <IconWrapper {...props}>
    <polyline points="23 4 23 10 17 10" />
    <polyline points="1 20 1 14 7 14" />
    <path d="M3.51 9a9 9 0 0 1 14.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0 0 20.49 15" />
  </IconWrapper>
);
const Printer = (props) => (
  <IconWrapper {...props}>
    <polyline points="6 9 6 2 18 2 18 9" />
    <path d="M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2" />
    <rect x="6" y="14" width="12" height="8" />
  </IconWrapper>
);
const Download = (props) => (
  <IconWrapper {...props}>
    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
    <polyline points="7 10 12 15 17 10" />
    <line x1="12" y1="15" x2="12" y2="3" />
  </IconWrapper>
);
const Star = (props) => (
  <IconWrapper {...props}>
    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
  </IconWrapper>
);

// --- DATA & CONFIGURATION ---

const THEME = {
  colors: {
    bg: "#0d2224", // Deep Teal (Main Background)
    card: "#ecd4b3", // Bone/Beige (Card Background)
    accent: "#9f865a", // Gold (Stars/Accents)
    text: "#0d2224", // Dark text for cards
    textLight: "#ecd4b3", // Light text for dark bg
    orange: "#ff751f", // Highlight
    slate: "#65746a", // Secondary Text
  },
};

const ARCHETYPES = {
  HERO: {
    name: "The Hero",
    motto: "Where there's a will, there's a way.",
    desire: "To prove worth through courageous action.",
    synthesisAction: "fights for what is right, no matter the cost",
    icon: Zap,
  },
  CREATOR: {
    name: "The Creator",
    motto: "If you can imagine it, it can be done.",
    desire: "To create something of enduring value.",
    synthesisAction: "sees potential where others see only chaos",
    icon: Sun,
  },
  MAGICIAN: {
    name: "The Magician",
    motto: "I make the impossible possible.",
    desire: "To make things happen / Transformation.",
    synthesisAction: "changes the energy of every room they enter",
    icon: Ghost,
  },
  CAREGIVER: {
    name: "The Care-Giver",
    motto: "Love your neighbor as yourself.",
    desire: "To protect and care for others.",
    synthesisAction: "protects the vulnerable with fierce intensity",
    icon: Heart,
  },
  JESTER: {
    name: "The Jester",
    motto: "If I can't dance, I don't want to be part of your revolution.",
    desire: "To live in the moment with full enjoyment.",
    synthesisAction: "speaks the uncomfortable truth through a joke",
    icon: Smile,
  },
  LOVE_INTEREST: {
    name: "The Love Interest",
    motto: "You're the only one.",
    desire: "Intimacy and experience.",
    synthesisAction: "is willing to lose everything for connection",
    icon: Heart,
  },
  INNOCENT: {
    name: "The Innocent",
    motto: "Free to be you and me.",
    desire: "To get to paradise / Safety.",
    synthesisAction: "holds onto hope when everyone else has given up",
    icon: Anchor,
  },
  VILLAIN: {
    name: "The Villain",
    motto: "Better to reign in Hell than serve in Heaven.",
    desire: "Power, revenge, or disruption.",
    synthesisAction: "justifies their cruelty as necessary for order",
    icon: User,
  },
  SIDEKICK: {
    name: "The Side-Kick",
    motto: "All for one and one for all.",
    desire: "Connection and belonging.",
    synthesisAction: "is the glue holding the entire story together",
    icon: User,
  },
  REBEL: {
    name: "The Rebel",
    motto: "Rules are made to be broken.",
    desire: "Revolution / Overturning what isn't working.",
    synthesisAction: "breaks the rules because they know the system is broken",
    icon: Mic,
  },
  MENTOR: {
    name: "The Mentor",
    motto: "The truth will set you free.",
    desire: "To understand the world / Teach truth.",
    synthesisAction:
      "guides others through the darkness of their own experience",
    icon: BookOpen,
  },
  RULER: {
    name: "The Ruler",
    motto: "Power isn't everything, it's the only thing.",
    desire: "Control / Creating a prosperous community.",
    synthesisAction: "takes command when leadership is absent",
    icon: Crown,
  },
};

const QUESTIONS = [
  // Innocent
  {
    id: 1,
    text: "I am naturally drawn to characters who trust others, perhaps too easily.",
    target: "INNOCENT",
  },
  {
    id: 2,
    text: "I would prefer to tell stories that highlight optimism, even in dark situations.",
    target: "INNOCENT",
  },
  {
    id: 3,
    text: "I find it difficult to connect with characters who are inherently cynical or manipulative.",
    target: "INNOCENT",
  },
  {
    id: 4,
    text: "I relate most to characters whose primary goal is simply to be happy.",
    target: "INNOCENT",
  },
  // Side-Kick
  {
    id: 5,
    text: "I don't need to be the center of attention; I enjoy the idea of supporting the main action.",
    target: "SIDEKICK",
  },
  {
    id: 6,
    text: "I want to play the character the audience relates to most easily.",
    target: "SIDEKICK",
  },
  {
    id: 7,
    text: "I like the idea of being the 'grounded' person in a chaotic world.",
    target: "SIDEKICK",
  },
  {
    id: 8,
    text: "I value connection and belonging more than power and prestige.",
    target: "SIDEKICK",
  },
  // Hero
  {
    id: 9,
    text: "When entering a room, I feel an instinct to stand tall and take up space.",
    target: "HERO",
  },
  {
    id: 10,
    text: "I am excited by roles that require overcoming massive physical or emotional obstacles.",
    target: "HERO",
  },
  {
    id: 11,
    text: "In a group setting, I often feel an impulse to drive the pace and energy.",
    target: "HERO",
  },
  {
    id: 12,
    text: "I want my characters to be defined by their courage.",
    target: "HERO",
  },
  // Care-Giver
  {
    id: 13,
    text: "My instinct is to comfort others if they seem distressed.",
    target: "CAREGIVER",
  },
  {
    id: 14,
    text: "I gravitate toward stories involving self-sacrifice for the greater good.",
    target: "CAREGIVER",
  },
  {
    id: 15,
    text: "I feel my greatest strength as a performer would be empathy and warmth.",
    target: "CAREGIVER",
  },
  {
    id: 16,
    text: "I can easily see myself playing the parent, the nurse, or the protective friend.",
    target: "CAREGIVER",
  },
  // Creator
  {
    id: 17,
    text: "I am bored by clichés; I want to make weird or unique choices.",
    target: "CREATOR",
  },
  {
    id: 18,
    text: "I am drawn to characters who are visionaries, artists, or dreamers.",
    target: "CREATOR",
  },
  {
    id: 19,
    text: "I feel stifled when told exactly what to do; I need room to invent.",
    target: "CREATOR",
  },
  {
    id: 20,
    text: "I want to express a vision that is unique to me.",
    target: "CREATOR",
  },
  // Love Interest
  {
    id: 21,
    text: "I am comfortable with the idea of silence and intense eye contact.",
    target: "LOVE_INTEREST",
  },
  {
    id: 22,
    text: "I am interested in characters driven by a specific passion for another person.",
    target: "LOVE_INTEREST",
  },
  {
    id: 23,
    text: "I feel I would excel at creating chemistry with a partner.",
    target: "LOVE_INTEREST",
  },
  {
    id: 24,
    text: "I empathize with characters who fear being alone or unwanted.",
    target: "LOVE_INTEREST",
  },
  // Rebel
  {
    id: 25,
    text: "I would love to play characters who shock the audience or break social taboos.",
    target: "REBEL",
  },
  {
    id: 26,
    text: "I feel I have a natural 'edge' or 'grit' to bring to a role.",
    target: "REBEL",
  },
  {
    id: 27,
    text: "I have little interest in playing characters who follow the rules without question.",
    target: "REBEL",
  },
  {
    id: 28,
    text: "I want to play the character who overturns the status quo.",
    target: "REBEL",
  },
  // Magician
  {
    id: 29,
    text: "I enjoy the idea of playing characters who are mysterious or know things others don't.",
    target: "MAGICIAN",
  },
  {
    id: 30,
    text: "I am drawn to roles involving transformation, intellect, or psychological depth.",
    target: "MAGICIAN",
  },
  {
    id: 31,
    text: "I have been told I have a 'charismatic' or 'magnetic' presence.",
    target: "MAGICIAN",
  },
  {
    id: 32,
    text: "I want to play characters who change the reality of the world around them.",
    target: "MAGICIAN",
  },
  // Jester
  {
    id: 33,
    text: "I often use humor to navigate difficult situations in my own life.",
    target: "JESTER",
  },
  {
    id: 34,
    text: "I am not afraid to look foolish or ugly to get a reaction.",
    target: "JESTER",
  },
  {
    id: 35,
    text: "I love the character who points out the absurdity of the situation.",
    target: "JESTER",
  },
  {
    id: 36,
    text: "High energy and physical comedy feel natural to me.",
    target: "JESTER",
  },
  // Ruler
  {
    id: 37,
    text: "I naturally gravitate toward characters with high status or authority.",
    target: "RULER",
  },
  {
    id: 38,
    text: "I feel confident using my voice to command a room.",
    target: "RULER",
  },
  {
    id: 39,
    text: "I would enjoy playing characters who have to make hard decisions for the group.",
    target: "RULER",
  },
  {
    id: 40,
    text: "I have little interest in playing characters who are submissive or weak-willed.",
    target: "RULER",
  },
  // Mentor
  {
    id: 41,
    text: "I can see myself playing the expert, the detective, or the old soul.",
    target: "MENTOR",
  },
  {
    id: 42,
    text: "I prefer dialogue that is intellectual, analytical, or philosophical.",
    target: "MENTOR",
  },
  {
    id: 43,
    text: "I am drawn to characters who are seeking the truth.",
    target: "MENTOR",
  },
  {
    id: 44,
    text: "I value stillness and observation over chaotic movement.",
    target: "MENTOR",
  },
  // Villain
  {
    id: 45,
    text: "I am fascinated by the darker, repressed sides of human nature.",
    target: "VILLAIN",
  },
  {
    id: 46,
    text: "I would be comfortable playing characters who are selfish or lack empathy.",
    target: "VILLAIN",
  },
  {
    id: 47,
    text: "I find 'good guy' roles boring; I want the role with the complex, hidden agenda.",
    target: "VILLAIN",
  },
  {
    id: 48,
    text: "I feel I could easily tap into anger, jealousy, or a desire for control.",
    target: "VILLAIN",
  },
  // Tie Breakers
  {
    id: 49,
    text: "When in doubt, I prefer to do something physically rather than talk about it.",
    target: "TIE_A",
    boost: ["HERO", "REBEL", "RULER", "JESTER"],
  },
  {
    id: 50,
    text: "When in doubt, I prefer to internalize the emotion and think.",
    target: "TIE_B",
    boost: ["MENTOR", "INNOCENT", "MAGICIAN", "CREATOR"],
  },
];

// --- COMPONENTS ---

const LogoHeader = () => {
  const [imgError, setImgError] = useState(false);

  return (
    <div className="flex flex-col items-center justify-center mb-8">
      <div className="relative mb-2 flex items-center justify-center">
        {!imgError ? (
          <img
            src="Logo-no-bg.png"
            alt="The Actor's Copilot"
            className="h-32 md:h-40 object-contain drop-shadow-2xl print:block"
            onError={() => setImgError(true)}
          />
        ) : (
          /* Fallback Design if Image is Broken/Missing */
          <div
            className="flex flex-col items-center justify-center p-4 border-4 rounded-xl shadow-2xl"
            style={{
              borderColor: THEME.colors.accent,
              backgroundColor: THEME.colors.bg,
            }}
          >
            <div className="flex space-x-1 mb-2">
              {[1, 2, 3, 4, 5].map((i) => (
                <Star
                  key={i}
                  size={12}
                  fill={THEME.colors.accent}
                  color={THEME.colors.accent}
                />
              ))}
            </div>
            <h1 className="text-3xl font-black tracking-widest uppercase text-white leading-none">
              The
            </h1>
            <h1
              className="text-5xl font-black tracking-widest uppercase my-1 leading-none"
              style={{ color: THEME.colors.card }}
            >
              Actors
            </h1>
            <div
              className="px-4 py-1 rounded mt-1"
              style={{ backgroundColor: THEME.colors.accent }}
            >
              <span className="text-xl font-bold tracking-[0.2em] text-[#0d2224]">
                COPILOT
              </span>
            </div>
          </div>
        )}
      </div>
      <h2
        className="text-lg font-medium tracking-widest uppercase mt-4"
        style={{ color: THEME.colors.accent }}
      >
        Archetype Discovery Engine
      </h2>
    </div>
  );
};

const ProgressBar = ({ current, total }) => {
  const percentage = (current / total) * 100;
  return (
    <div
      className="w-full h-2 rounded-full mb-6"
      style={{ backgroundColor: "#2d3e40" }}
    >
      <div
        className="h-full rounded-full transition-all duration-500 ease-out"
        style={{
          width: `${percentage}%`,
          backgroundColor: THEME.colors.orange,
        }}
      />
    </div>
  );
};

export default function App() {
  const [screen, setScreen] = useState("welcome");
  const [answers, setAnswers] = useState({});
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [results, setResults] = useState(null);
  const [castingType, setCastingType] = useState("");
  const [showSynthesis, setShowSynthesis] = useState(false);
  const [isTransitioning, setIsTransitioning] = useState(false);

  // --- INJECT TAILWIND FOR STYLING (Restores the beautiful layout) ---
  useEffect(() => {
    if (!document.querySelector('script[src="https://cdn.tailwindcss.com"]')) {
      const script = document.createElement("script");
      script.src = "https://cdn.tailwindcss.com";
      document.head.appendChild(script);
    }
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [screen]);

  // Enhanced Print Styles
  useEffect(() => {
    const style = document.createElement("style");
    style.innerHTML = `
      @media print {
        @page { margin: 10px; size: auto; }
        body { 
          margin: 0 !important; 
          padding: 0 !important; 
          background-color: ${THEME.colors.bg} !important;
          -webkit-print-color-adjust: exact !important; 
          print-color-adjust: exact !important; 
        }
        .no-print { display: none !important; }
        .print-only-container { 
          display: block !important; 
          width: 100% !important;
          height: auto !important;
          background-color: ${THEME.colors.bg} !important;
          overflow: visible !important;
          padding: 20px !important;
        }
        .results-card {
           transform: none !important; 
           box-shadow: none !important;
           width: 100% !important;
           max-width: 100% !important;
           margin: 0 !important;
           border: 4px solid ${THEME.colors.card} !important;
           page-break-inside: avoid !important;
        }
        * { color-adjust: exact !important; -webkit-print-color-adjust: exact !important; }
        #root > div { padding: 0 !important; }
      }
    `;
    document.head.appendChild(style);
    return () => document.head.removeChild(style);
  }, []);

  const handleStart = () => setScreen("quiz");

  const handleAnswer = (score) => {
    if (isTransitioning) return;
    const question = QUESTIONS[currentQuestionIndex];
    if (!question) return;

    setIsTransitioning(true);
    const newAnswers = { ...answers, [question.id]: score };
    setAnswers(newAnswers);

    if (currentQuestionIndex < QUESTIONS.length - 1) {
      setTimeout(() => {
        setCurrentQuestionIndex((prev) => prev + 1);
        setIsTransitioning(false);
      }, 250);
    } else {
      calculateResults(newAnswers);
    }
  };

  const calculateResults = (finalAnswers) => {
    setScreen("calculating");
    let scores = {};
    Object.keys(ARCHETYPES).forEach((key) => (scores[key] = 0));

    QUESTIONS.forEach((q) => {
      const score = finalAnswers[q.id] || 0;
      if (q.id <= 48) {
        scores[q.target] += score;
      } else {
        if (score >= 4 && q.boost) {
          q.boost.forEach((archetype) => {
            scores[archetype] += 2;
          });
        }
      }
    });

    const sortedArchetypes = Object.entries(scores).sort(
      ([, scoreA], [, scoreB]) => scoreB - scoreA
    );

    setTimeout(() => {
      setResults({
        primary: sortedArchetypes[0],
        secondary: sortedArchetypes[1],
      });
      setScreen("results");
    }, 2000);
  };

  const getSynthesisResult = (type, archetypeKey) => {
    const arch = ARCHETYPES[archetypeKey];
    if (!type) return "Enter your type above to see the magic.";
    return `The ${type} who ${arch.synthesisAction}.`;
  };

  // --- NEW: Download standalone HTML file feature ---
  const handleDownloadHTML = () => {
    if (!results) return;
    const primary = ARCHETYPES[results.primary[0]];
    const secondary = ARCHETYPES[results.secondary[0]];

    // Construct a complete HTML file string
    const htmlContent = `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>The Actor's Copilot - Dossier</title>
    <style>
        body { margin: 0; padding: 40px; background-color: ${
          THEME.colors.bg
        }; font-family: sans-serif; display: flex; justify-content: center; }
        .card { 
            background-color: ${THEME.colors.card}; 
            color: ${THEME.colors.text}; 
            padding: 20px; 
            max-width: 600px; 
            width: 100%; 
            text-align: center; 
            border: 4px solid ${THEME.colors.card};
        }
        .inner-border { border: 4px solid ${
          THEME.colors.text
        }; padding: 30px; position: relative; }
        h1 { text-transform: uppercase; font-weight: 900; margin: 10px 0; font-size: 40px; letter-spacing: -1px; }
        .stamp { 
            position: absolute; top: 10px; right: 10px; 
            border: 3px solid #991b1b; color: #991b1b; 
            padding: 5px 10px; font-weight: 900; text-transform: uppercase; 
            transform: rotate(12deg); opacity: 0.8; font-size: 12px;
        }
        .motto { background-color: ${THEME.colors.text}; color: ${
      THEME.colors.textLight
    }; padding: 15px; font-style: italic; font-family: serif; font-size: 18px; margin: 20px 0; border-radius: 4px; }
        .details { text-align: left; font-size: 14px; line-height: 1.6; }
        .synthesis { margin-top: 20px; border: 2px dashed ${
          THEME.colors.text
        }; padding: 15px; background: rgba(255,255,255,0.3); }
    </style>
</head>
<body>
    <div class="card">
        <div class="inner-border">
            <div class="stamp">Confidential</div>
            <h3 style="text-transform: uppercase; letter-spacing: 3px; font-size: 10px; border-bottom: 1px solid #0d2224; padding-bottom: 10px; margin-bottom: 20px;">Subject Profile</h3>
            
            <h1 style="color: ${THEME.colors.text}">${primary.name}</h1>
            <p style="text-transform: uppercase; font-weight: bold; font-size: 12px; opacity: 0.7; letter-spacing: 2px;">Primary Archetype</p>
            
            <hr style="opacity: 0.2; margin: 20px 0; border-color: ${
              THEME.colors.text
            };">
            
            <p style="text-transform: uppercase; font-size: 12px; font-weight: bold;">With a shade of <span style="font-size: 16px;">${
              secondary.name
            }</span></p>
            
            <div class="motto">"${primary.motto}"</div>
            
            <div class="details">
                <p><strong>Core Desire:</strong> ${primary.desire}</p>
                <p><strong>Strategy:</strong> Leverage your ${
                  primary.name
                } energy to book roles that need ${primary.desire.toLowerCase()}.</p>
            </div>

            ${
              castingType
                ? `
            <div class="synthesis">
                <p style="font-weight: bold; text-transform: uppercase; font-size: 10px; margin-bottom: 5px;">Synthesis Analysis</p>
                <p style="font-family: serif; font-size: 18px;">"${getSynthesisResult(
                  castingType,
                  results.primary[0]
                )}"</p>
            </div>
            `
                : ""
            }
            
            <p style="margin-top: 30px; font-size: 10px; opacity: 0.4; text-transform: uppercase;">© 2026 The Actor's Copilot</p>
        </div>
    </div>
    <script>window.print();</script>
</body>
</html>
     `;

    const blob = new Blob([htmlContent], { type: "text/html" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "copilot-result.html";
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  // --- SCREENS ---

  if (screen === "welcome") {
    return (
      <div
        className="min-h-screen flex flex-col items-center justify-center p-6 text-center font-sans"
        style={{
          backgroundColor: THEME.colors.bg,
          color: THEME.colors.textLight,
        }}
      >
        <LogoHeader />

        <div
          className="max-w-md w-full p-8 rounded-2xl shadow-2xl space-y-6"
          style={{ backgroundColor: "#162e31" }}
        >
          <h1 className="text-2xl font-bold mb-2">Welcome to the Cockpit.</h1>
          <p className="opacity-90 leading-relaxed">
            This is not just a quiz. It is a diagnostic tool to separate your
            <span style={{ color: THEME.colors.orange }} className="font-bold">
              {" "}
              Casting Type{" "}
            </span>
            from your
            <span style={{ color: THEME.colors.accent }} className="font-bold">
              {" "}
              Archetype
            </span>
            .
          </p>

          {/* New Prominent Instructions Box */}
          <div className="bg-[#0d2224] border border-[#9f865a] p-4 rounded-lg mt-4 shadow-inner">
            <p className="text-sm font-bold uppercase tracking-widest text-[#9f865a] mb-1">
              Instructions
            </p>
            <p className="text-sm opacity-90 text-white">
              Rate each statement from <strong>Strongly Disagree (1)</strong> to{" "}
              <strong>Strongly Agree (5)</strong>.
            </p>
          </div>

          <button
            onClick={handleStart}
            className="w-full py-4 mt-4 rounded-xl font-bold text-lg uppercase tracking-widest shadow-lg transform transition active:scale-95 hover:brightness-110 flex items-center justify-center"
            style={{
              backgroundColor: THEME.colors.accent,
              color: THEME.colors.bg,
            }}
          >
            Initialize Engine <ChevronRight className="ml-2" />
          </button>
        </div>
      </div>
    );
  }

  if (screen === "quiz") {
    const question = QUESTIONS[currentQuestionIndex];
    if (!question) return null;

    return (
      <div
        className="min-h-screen flex flex-col items-center p-6 font-sans"
        style={{
          backgroundColor: THEME.colors.bg,
          color: THEME.colors.textLight,
        }}
      >
        <div className="w-full max-w-xl">
          <div className="flex justify-between items-center mb-4">
            <span className="text-xs font-bold tracking-widest opacity-50">
              QUESTION {currentQuestionIndex + 1} / {QUESTIONS.length}
            </span>
            <span className="text-xs font-bold tracking-widest opacity-50">
              ARCHETYPE DISCOVERY
            </span>
          </div>
          <ProgressBar
            current={currentQuestionIndex + 1}
            total={QUESTIONS.length}
          />

          <div
            className="min-h-[300px] flex flex-col justify-center items-center text-center p-8 rounded-3xl shadow-2xl mb-8 relative overflow-hidden"
            style={{
              backgroundColor: THEME.colors.card,
              color: THEME.colors.text,
            }}
          >
            <div
              className="absolute top-0 left-0 w-full h-2 opacity-50"
              style={{ backgroundColor: THEME.colors.accent }}
            ></div>

            <h2 className="text-2xl md:text-3xl font-bold leading-tight mb-4">
              "{question.text}"
            </h2>
            <p className="text-sm font-semibold opacity-50 uppercase tracking-wider">
              Answer honestly
            </p>
          </div>

          <div className="text-center mb-4">
            <p
              className="text-xs opacity-50 uppercase tracking-widest font-bold"
              style={{ color: THEME.colors.accent }}
            >
              Rate from Strongly Disagree (1) to Strongly Agree (5)
            </p>
          </div>

          <div className="grid grid-cols-1 gap-3">
            {[
              { val: 1, label: "Strongly Disagree" },
              { val: 2, label: "Disagree" },
              { val: 3, label: "Neutral" },
              { val: 4, label: "Agree" },
              { val: 5, label: "Strongly Agree" },
            ].map((opt) => (
              <button
                key={opt.val}
                onClick={() => handleAnswer(opt.val)}
                disabled={isTransitioning}
                className="w-full py-4 rounded-xl font-bold text-md transition-all duration-200 flex justify-between items-center px-6 hover:translate-x-1 disabled:opacity-50 disabled:cursor-not-allowed"
                style={{
                  backgroundColor: "#162e31",
                  color:
                    opt.val === 5
                      ? THEME.colors.orange
                      : opt.val === 1
                      ? "#65746a"
                      : "white",
                  borderLeft: `4px solid ${
                    opt.val === 5
                      ? THEME.colors.orange
                      : opt.val === 1
                      ? "#65746a"
                      : "transparent"
                  }`,
                }}
              >
                <span>{opt.label}</span>
                <span className="opacity-30 text-xs">{opt.val}</span>
              </button>
            ))}
          </div>
        </div>
      </div>
    );
  }

  if (screen === "calculating") {
    return (
      <div
        className="min-h-screen flex flex-col items-center justify-center p-6 text-center font-sans"
        style={{ backgroundColor: THEME.colors.bg, color: THEME.colors.accent }}
      >
        <RefreshCw className="animate-spin w-16 h-16 mb-6" />
        <h2 className="text-2xl font-bold tracking-widest uppercase animate-pulse">
          Analyzing Psychology...
        </h2>
        <p
          className="mt-4 text-sm opacity-70"
          style={{ color: THEME.colors.card }}
        >
          Identifying primary motivators...
        </p>
      </div>
    );
  }

  if (screen === "results" && results) {
    const PrimaryIcon = ARCHETYPES[results.primary[0]].icon;
    const SecondaryIcon = ARCHETYPES[results.secondary[0]].icon;
    const primaryData = ARCHETYPES[results.primary[0]];
    const secondaryData = ARCHETYPES[results.secondary[0]];

    return (
      <div
        className="min-h-screen font-sans"
        style={{
          backgroundColor: THEME.colors.bg,
          color: THEME.colors.textLight,
        }}
      >
        <div className="max-w-2xl mx-auto p-6 flex flex-col items-center print-only-container">
          <div className="no-print w-full">
            <LogoHeader />
          </div>

          {/* RESULTS CARD - Styled for Print Excellence */}
          <div className="results-card bg-[#ecd4b3] text-[#0d2224] rounded-sm p-1 shadow-2xl mb-8 transform -rotate-1 w-full">
            <div className="border-4 border-[#0d2224] p-8 flex flex-col items-center text-center relative h-full">
              {/* Stamp Effect */}
              <div className="absolute top-4 right-4 border-4 border-red-800 text-red-800 rounded px-2 py-1 transform rotate-12 opacity-80 font-black uppercase text-sm">
                Confidential
              </div>

              <h3 className="uppercase tracking-[0.3em] text-xs font-bold mb-6 border-b border-[#0d2224] pb-2 w-full">
                Subject Profile
              </h3>

              <div className="mb-6">
                <div
                  className="w-24 h-24 rounded-full flex items-center justify-center mx-auto mb-4 border-4 border-[#0d2224]"
                  style={{ backgroundColor: THEME.colors.accent }}
                >
                  <PrimaryIcon size={48} color="#0d2224" />
                </div>
                <h1 className="text-4xl font-black uppercase tracking-tighter mb-1">
                  {primaryData.name}
                </h1>
                <p className="text-sm font-bold opacity-70 uppercase tracking-widest">
                  Primary Archetype
                </p>
              </div>

              <div className="w-full bg-[#0d2224] h-px opacity-20 my-4"></div>

              <div className="flex items-center justify-center space-x-4 mb-6">
                <div className="text-right">
                  <p className="text-xs font-bold uppercase opacity-60">
                    With a shade of
                  </p>
                  <h4 className="font-black uppercase text-lg">
                    {secondaryData.name}
                  </h4>
                </div>
                <div
                  className="w-12 h-12 rounded-full flex items-center justify-center border-2 border-[#0d2224]"
                  style={{ backgroundColor: "#65746a" }}
                >
                  <SecondaryIcon size={24} color="#ecd4b3" />
                </div>
              </div>

              <div className="bg-[#0d2224] text-[#ecd4b3] p-4 rounded w-full mb-4">
                <p className="font-serif italic text-lg text-center">
                  "{primaryData.motto}"
                </p>
              </div>

              <div className="text-left w-full space-y-3 text-sm mb-6">
                <p>
                  <strong>Core Desire:</strong> {primaryData.desire}
                </p>
                <p>
                  <strong>The Strategy:</strong> Leverage your{" "}
                  {primaryData.name} energy to book roles that need{" "}
                  {primaryData.desire.toLowerCase()}
                </p>
              </div>

              {/* Synthesis Display in Card (if active) */}
              {showSynthesis && castingType && (
                <div className="w-full p-4 border-2 border-dashed border-[#0d2224] bg-white bg-opacity-30 rounded mt-2">
                  <p className="font-bold uppercase text-xs tracking-wider mb-2 opacity-50">
                    Synthesis Analysis
                  </p>
                  <p className="font-serif text-lg leading-relaxed">
                    "{getSynthesisResult(castingType, results.primary[0])}"
                  </p>
                </div>
              )}
            </div>
          </div>

          {/* THE SYNTHESIS TOOL - Input (Hidden on Print) */}
          <div
            className="no-print w-full rounded-xl p-6 mb-8 border border-opacity-20"
            style={{
              backgroundColor: "#162e31",
              borderColor: THEME.colors.accent,
            }}
          >
            <h3
              className="text-xl font-bold mb-4 flex items-center"
              style={{ color: THEME.colors.accent }}
            >
              <RefreshCw size={20} className="mr-2" /> The Co-Pilot Synthesis
            </h3>
            <p className="text-sm opacity-80 mb-4">
              This is where the magic happens. Your generic casting type gets
              you in the room. Your Archetype books the role. Combine them
              below.
            </p>

            {!showSynthesis ? (
              <div className="space-y-4">
                <div>
                  <label
                    className="block text-xs font-bold uppercase tracking-wider mb-2"
                    style={{ color: THEME.colors.orange }}
                  >
                    Step 1: Enter your Casting Type
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. News Anchor, Barista, Detective"
                    className="w-full p-4 rounded bg-[#0d2224] border border-[#65746a] text-white focus:outline-none focus:border-[#9f865a]"
                    value={castingType}
                    onChange={(e) => setCastingType(e.target.value)}
                  />
                </div>
                <button
                  disabled={!castingType}
                  onClick={() => setShowSynthesis(true)}
                  className="w-full py-3 rounded font-bold uppercase tracking-widest transition-opacity disabled:opacity-50"
                  style={{
                    backgroundColor: THEME.colors.accent,
                    color: THEME.colors.bg,
                  }}
                >
                  Synthesize
                </button>
              </div>
            ) : (
              <div className="animate-in fade-in slide-in-from-bottom-4 duration-700">
                <button
                  onClick={() => setShowSynthesis(false)}
                  className="text-xs underline mt-4 text-center w-full opacity-50 mb-2"
                >
                  Change Casting Type
                </button>
                <p className="text-center text-xs text-white opacity-70">
                  (Added to your dossier above)
                </p>
              </div>
            )}
          </div>

          {/* ACTIONABLE ADVICE (Hidden on Print if you want purely the card, or keep it) */}
          <div className="no-print space-y-4 mb-12 w-full">
            <h3 className="text-sm font-bold uppercase tracking-widest opacity-50 mb-2">
              Flight Instructions
            </h3>

            <div className="flex items-start space-x-4 p-4 rounded bg-[#162e31]">
              <Mic className="shrink-0" size={24} color={THEME.colors.accent} />
              <div>
                <h4 className="font-bold mb-1 text-[#ecd4b3]">
                  In The Audition
                </h4>
                <p className="text-sm opacity-80">
                  When you walk in, bring the energy of {primaryData.name}.
                  Don't just show your face, show your need to{" "}
                  {primaryData.desire.toLowerCase()}.
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4 p-4 rounded bg-[#162e31]">
              <BookOpen
                className="shrink-0"
                size={24}
                color={THEME.colors.accent}
              />
              <div>
                <h4 className="font-bold mb-1 text-[#ecd4b3]">Scene Study</h4>
                <p className="text-sm opacity-80">
                  Stuck on a beat? Ask yourself: "What would {primaryData.name}{" "}
                  do here?" Use that lens to unlock the scene.
                </p>
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-3 mb-12 no-print w-full">
            <button
              onClick={() => window.print()}
              className="w-full py-3 rounded border border-[#ecd4b3] text-[#ecd4b3] font-bold uppercase tracking-widest flex items-center justify-center hover:bg-[#ecd4b3] hover:text-[#0d2224] transition-colors"
            >
              <Printer size={18} className="mr-2" /> Print / Save PDF
            </button>

            {/* NEW BACKUP BUTTON FOR OFFLINE SAVING */}
            <button
              onClick={handleDownloadHTML}
              className="w-full py-3 rounded bg-[#65746a] text-white font-bold uppercase tracking-widest flex items-center justify-center hover:brightness-110 transition-colors"
            >
              <Download size={18} className="mr-2" /> Download Interactive Card
              (Backup)
            </button>
          </div>

          <p className="text-center text-xs opacity-30 pb-12 no-print">
            © 2026 The Actor's Copilot. Confidential.
          </p>
        </div>
      </div>
    );
  }

  return null;
}
