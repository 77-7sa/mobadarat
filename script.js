// عدّل البيانات الموجودة في هذه القائمة لإضافة المبادرات وروابطها الحقيقية.
// أي رابط فارغ ("") لن تظهر أيقونته في البطاقة.
const initiatives = [
  {
    name: "Vortexa",
    college: "جميع كليات الجامعة",
    image: "assets/initiative-vortexa.jpg",
    color: "rgba(84,222,196,.24)",
    links: {
      facebook: "https://www.facebook.com/profile.php?id=61583873862492",
      instagram: "https://www.instagram.com/vorteam2025/",
      whatsapp: "https://chat.whatsapp.com/JDConZ7nUlZ0f3GRsJbkpE",
      website: "https://www.vortex-a.com/"
    }
  },
  {
    name: "فريق وطن الاقتصاد",
    college: "كلية الأعمال",
    image: "assets/initiative-watan.jpg",
    color: "rgba(255,123,107,.25)",
    links: {
      facebook: "https://www.facebook.com/share/1HzsutoyZd/",
      instagram: "https://www.instagram.com/watan_hu",
      whatsapp: "https://whatsapp.com/channel/0029VbBshS6FCCoPJyvCr50v",
      website: "https://wat962.site.je/"
    }
  },
  {
    name: "مبادرة بهجة",
    college: "كلية الملكة رانيا للطفولة",
    image: "assets/initiative-bahja.jpg",
    color: "rgba(255,191,105,.25)",
    links: {
      facebook: "https://www.facebook.com/share/g/1XphstBCSM/",
      instagram: "https://www.instagram.com/bahj.ahu",
      whatsapp: "https://chat.whatsapp.com/BpdCVqEgB0iBZYWlPg1fzv",
      website: ""
    }
  },
  {
    name: "Neuro Medical - نيورو ميديكال",
    college: "كلية العلوم الطبية التطبيقية والتمريض",
    image: "assets/initiative-neuro.jpg",
    color: "rgba(179,135,255,.24)",
    links: {
      facebook: "https://www.facebook.com/share/1BsKca6sef/",
      instagram: "https://www.instagram.com/neuro_medical",
      whatsapp: "https://whatsapp.com/channel/0029VbE9Jr1I7BeICvbXjk2o",
      website: "https://neurohu.netlify.app/"
    }
  },

  {
    name: "The Jordanian Medical Unity",
    college: "كلية التمريض والعلوم الطبية المساندة",
    image: "assets/initiative-jmu.jpg",
    color: "rgba(83,229,151,.23)",
    links: {
      facebook: "https://www.facebook.com/profile.php?id=61582180786736",
      instagram: "https://www.instagram.com/jordanian.medical.unity",
      whatsapp: "https://chat.whatsapp.com/IbfY8G4x0al0YLbce79dIk",
      website: "https://www.linkin1.com/TheJMU"
    }
  },
    {
    name: "فريق نشمي",
    college: "كلية العلوم الطبية وكلية الصيدلة وكلية التمريض",
    image: "assets/initiative-nashmi.jpg",
    color: "rgba(68,157,255,.24)",
    links: {
      facebook: "https://www.facebook.com/share/1VoDq8Yyhg/",
      instagram: "https://www.instagram.com/nashmi_team_hu",
      whatsapp: "https://whatsapp.com/channel/0029Vb8r5QUKAwEuOaJiKl1J",
      website: "http://nashmimedia.xyz"
    }
  },
  {
    name: "Evo Team",
    college: "كلية الأمير الحسين بن عبدالله الثاني لتكنولوجيا المعلومات",
    image: "assets/initiative-evo.jpg",
    color: "rgba(84,222,196,.24)",
    links: {
      facebook: "https://www.facebook.com/share/18PoEo75Wv/",
      instagram: "https://www.instagram.com/evo_team_hu",
      whatsapp: "https://chat.whatsapp.com/Jd8Pc7eYcVH9vOmgX6qOJU",
      website: ""
    }
  },
  {
    name: "أثر النشامى",
    college: "جميع كليات الجامعة",
    image: "assets/initiative-athar.jpg",
    color: "rgba(255,123,107,.25)",
    links: {
      facebook: "https://www.facebook.com/share/1F8vw3LWeo/",
      instagram: "https://www.instagram.com/athar_alnashama_team",
      whatsapp: "https://chat.whatsapp.com/JQdug9xc7Ps33PESoi2y3V",
      website: ""
    }
  },
  {
    name: "HUCC نادي القلب",
    college: "كلية الطب البشري",
    image: "assets/initiative-hucc.jpg",
    color: "rgba(255,191,105,.25)",
    links: {
      facebook: "https://www.facebook.com/share/1Bb4CLaVxL/",
      instagram: "https://www.instagram.com/hucardiology",
      whatsapp: "",
      website: ""
    }
  },
  {
    name: "Delta Team HU",
    college: "كلية الهندسة",
    image: "assets/initiative-delta.jpg",
    color: "rgba(179,135,255,.24)",
    links: {
      facebook: "https://www.facebook.com/share/1UAJdT5qG8/",
      instagram: "https://www.instagram.com/delta_team_hu",
      whatsapp: "https://chat.whatsapp.com/FUkbqsMNDJ1C21t3tkgIyh",
      website: ""
    }
  },
  {
    name: "Power | باور",
    college: "كلية الرياضة",
    image: "assets/initiative-power.jpg",
    color: "rgba(68,157,255,.24)",
    links: {
      facebook: "",
      instagram: "https://www.instagram.com/power.jo1",
      whatsapp: "https://chat.whatsapp.com/G8Ygp7GsyaKFUUDDMkuN4j",
      website: ""
    }
  },
  {
    name: "النادي الطبي",
    college: "كلية الطب البشري",
    image: "assets/initiative-medclub.jpg",
    color: "rgba(83,229,151,.23)",
    links: {
      facebook: "https://www.facebook.com/share/19PFymhPGW/",
      instagram: "https://www.instagram.com/medclub.hu",
      whatsapp: "https://chat.whatsapp.com/KSpynkdYiVoHCKQgyRyjSC",
      website: ""
    }
  },
  {
    name: "نشامى العلوم",
    college: "كلية العلوم",
    image: "assets/initiative-nashama-science.jpg",
    color: "rgba(255,123,107,.25)",
    links: {
      facebook: "https://www.facebook.com/share/1DdE4c6eUR/",
      instagram: "https://www.instagram.com/alnashama_science",
      whatsapp: "https://chat.whatsapp.com/Fm20A7lVawX82keSoeNnzd",
      website: ""
    }
  },
  {
    name: "حصاد التربوي",
    college: "كلية العلوم التربوية",
    image: "assets/initiative-hasaad.jpg",
    color: "rgba(83,229,151,.23)",
    links: {
      facebook: "https://www.facebook.com/share/17hGUN4jgP/",
      instagram: "https://www.instagram.com/hasaad._",
      whatsapp: "https://chat.whatsapp.com/HPijynTSEvjD3lO0EBJ18k",
      website: ""
    }
  },
  {
    name: "سُفراء الهاشمية | Afaq",
    college: "كلية الآداب",
    image: "assets/initiative-afaq.jpg",
    color: "rgba(68,157,255,.24)",
    links: {
      facebook: "https://www.facebook.com/share/g/1FzSxuUMWs/",
      instagram: "",
      whatsapp: "",
      website: ""
    }
  },
  {
    name: "نشامى التمريض",
    college: "كلية التمريض",
    image: "assets/initiative-nashama-nursing.jpg",
    color: "rgba(255,191,105,.25)",
    links: {
      facebook: "https://www.facebook.com/share/1DDZdoJWEQ/",
      instagram: "https://www.instagram.com/alnashama_nursing",
      whatsapp: "https://chat.whatsapp.com/GM03DK5tSOF8cUVkQze7au",
      website: ""
    }
  }
];

const networks = [
  { key: "facebook", label: "فيسبوك", icon: "fa-brands fa-facebook-f" },
  { key: "instagram", label: "إنستغرام", icon: "fa-brands fa-instagram" },
  { key: "whatsapp", label: "واتساب", icon: "fa-brands fa-whatsapp" },
  { key: "website", label: "الموقع الإلكتروني", icon: "fa-solid fa-globe" }
];

const grid = document.querySelector("#initiativesGrid");
const searchInput = document.querySelector("#initiativeSearch");
const filtersWrap = document.querySelector("#collegeFilters");
const emptyState = document.querySelector("#emptyState");
const resultsCount = document.querySelector("#resultsCount");
let activeCollege = "الكل";

function socialLinkMarkup(initiative, network) {
  const url = initiative.links[network.key];
  if (!url) return "";

  return `
    <a class="social-link" href="${url}" data-network="${network.key}" target="_blank" rel="noopener noreferrer"
      aria-label="${network.label} — ${initiative.name}" title="${network.label}">
      <i class="${network.icon}"></i>
    </a>`;
}

function cardMarkup(initiative, index) {
  return `
    <article class="initiative-card reveal" style="--card-glow:${initiative.color}; transition-delay:${Math.min(index * 55, 220)}ms">
      <div class="initiative-avatar">
        <img src="${initiative.image}" alt="شعار ${initiative.name}" loading="lazy" />
      </div>
      <h3>${initiative.name}</h3>
      <p class="college"><i class="fa-solid fa-building-columns"></i>${initiative.college}</p>
      <div class="social-links" aria-label="روابط ${initiative.name}">
        ${networks.map((network) => socialLinkMarkup(initiative, network)).join("")}
      </div>
    </article>`;
}

function renderInitiatives() {
  const query = searchInput.value.trim().toLocaleLowerCase("ar");
  const filtered = initiatives.filter((initiative) => {
    const matchesCollege = activeCollege === "الكل" || initiative.college === activeCollege;
    const searchable = `${initiative.name} ${initiative.college}`.toLocaleLowerCase("ar");
    return matchesCollege && searchable.includes(query);
  });

  grid.innerHTML = filtered.map(cardMarkup).join("");
  emptyState.hidden = filtered.length > 0;
  resultsCount.textContent = filtered.length
    ? `يعرض ${filtered.length} من أصل ${initiatives.length} مبادرات`
    : "لا توجد مبادرات مطابقة";

  observeRevealElements();
}

function renderFilters() {
  const colleges = ["الكل", ...new Set(initiatives.map((item) => item.college))];
  filtersWrap.innerHTML = colleges
    .map(
      (college) => `
        <button class="filter-chip${college === activeCollege ? " active" : ""}" type="button" data-college="${college}">
          ${college}
        </button>`
    )
    .join("");
}

let revealObserver;
function observeRevealElements() {
  if (!revealObserver) {
    revealObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            revealObserver.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12 }
    );
  }

  document.querySelectorAll(".reveal:not(.is-visible)").forEach((element) => revealObserver.observe(element));
}

filtersWrap.addEventListener("click", (event) => {
  const button = event.target.closest("[data-college]");
  if (!button) return;
  activeCollege = button.dataset.college;
  renderFilters();
  renderInitiatives();
});

searchInput.addEventListener("input", renderInitiatives);

window.addEventListener("load", () => {
  window.setTimeout(() => document.querySelector("#pageLoader").classList.add("is-hidden"), 2050);
});

const siteHeader = document.querySelector(".site-header");
window.addEventListener(
  "scroll",
  () => siteHeader.classList.toggle("is-scrolled", window.scrollY > 24),
  { passive: true }
);

renderFilters();
renderInitiatives();
observeRevealElements();
