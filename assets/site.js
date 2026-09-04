// ===== 공통 스크립트: 내비게이션, 푸터, 언어 전환, 목록 렌더링 =====

const NAV_ITEMS = [
  { href: "index.html",        ko: "홈",        en: "Home" },
  { href: "research.html",     ko: "연구분야",   en: "Research" },
  { href: "professor.html",    ko: "교수소개",   en: "Professor" },
  { href: "members.html",      ko: "구성원",     en: "Members" },
  { href: "publications.html", ko: "논문",      en: "Publications" },
  { href: "news.html",         ko: "소식",      en: "News" },
  { href: "contact.html",      ko: "연락처",     en: "Contact" }
];

function currentPage() {
  const p = location.pathname.split("/").pop();
  return p === "" ? "index.html" : p;
}

function getLang() {
  try { return localStorage.getItem("cmslab-lang") || "ko"; }
  catch (e) { return document.documentElement.dataset.lang || "ko"; }
}

function setLang(lang) {
  document.documentElement.dataset.lang = lang;
  document.documentElement.lang = lang;
  try { localStorage.setItem("cmslab-lang", lang); } catch (e) {}
  renderDynamic();
}

function toggleLang() {
  setLang(document.documentElement.dataset.lang === "ko" ? "en" : "ko");
}

function renderNav() {
  const cur = currentPage();
  const links = NAV_ITEMS.map(function (it) {
    const cls = it.href === cur ? ' class="active"' : "";
    return '<a href="' + it.href + '"' + cls + '><span class="lang-ko">' + it.ko +
           '</span><span class="lang-en">' + it.en + "</span></a>";
  }).join("");
  document.getElementById("site-nav").innerHTML =
    '<div class="wrap nav-in">' +
    '<a class="logo" href="index.html"><b>CMS</b>Lab</a>' +
    '<div class="menu" id="menu">' + links + "</div>" +
    '<button class="menu-btn" onclick="document.getElementById(\'menu\').classList.toggle(\'show\')">☰</button>' +
    '<button class="lang-btn" onclick="toggleLang()"><span class="lang-ko">ENG</span><span class="lang-en">KOR</span></button>' +
    "</div>";
}

function renderFooter() {
  const el = document.getElementById("site-footer");
  if (!el) return;
  el.innerHTML =
    '<div class="wrap">' +
    '<div><span class="lang-ko">전산재료과학연구실 · 국립금오공과대학교 재료공학부 신소재공학전공</span>' +
    '<span class="lang-en">Computational Materials Science Laboratory · Dept. of Materials Science and Engineering, Kumoh National Institute of Technology</span></div>' +
    '<div class="mono">youngtae.park@kumoh.ac.kr · 054-478-7729</div>' +
    "</div>";
}

// 논문 목록 (publications.html)
function renderPublications() {
  const el = document.getElementById("pub-list");
  if (!el) return;
  let html = "";
  let lastYear = null;
  PUBLICATIONS.forEach(function (p) {
    if (p.year !== lastYear) {
      html += '<div class="pub-year">' + p.year + "</div>";
      lastYear = p.year;
    }
    const authors = p.authors.replace(/Y\. Park/g, "<b>Y. Park</b>");
    html += '<div class="pub-item">' +
      '<div class="t">' + p.title + "</div>" +
      '<div class="a">' + authors + "</div>" +
      '<div class="v">' + p.journal + ", " + p.volume + (p.note ? " · " + p.note : "") + "</div></div>";
  });
  el.innerHTML = html;
}

// 최근 논문 3편 (index.html)
function renderRecentPubs() {
  const el = document.getElementById("recent-pubs");
  if (!el) return;
  const picks = PUBLICATIONS.filter(function (p) { return p.highlight; }).slice(0, 3);
  el.innerHTML = picks.map(function (p) {
    return '<div class="pub"><div class="j">' + p.journal + " · " + p.year +
           '</div><p>' + p.title + "</p></div>";
  }).join("");
}

// 소식 목록 (index.html에는 3건, news.html에는 전체)
function renderNews() {
  const el = document.getElementById("news-list");
  if (!el) return;
  const limit = el.dataset.limit ? parseInt(el.dataset.limit, 10) : NEWS.length;
  el.innerHTML = NEWS.slice(0, limit).map(function (n) {
    return '<li><span class="d">' + n.date + '</span><span><span class="lang-ko">' +
           n.ko + '</span><span class="lang-en">' + n.en + "</span></span></li>";
  }).join("");
}

function renderDynamic() {
  renderPublications();
  renderRecentPubs();
  renderNews();
}

document.addEventListener("DOMContentLoaded", function () {
  document.documentElement.dataset.lang = getLang();
  document.documentElement.lang = getLang();
  renderNav();
  renderFooter();
  renderDynamic();
});
