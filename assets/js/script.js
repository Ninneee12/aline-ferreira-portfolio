(function () {
  const THEME_KEY = "theme";
  const LANG_KEY = "lang";
  const root = document.documentElement;

  // ===== THEME =====
  const savedTheme = localStorage.getItem(THEME_KEY);
  const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
  root.setAttribute(
    "data-theme",
    savedTheme || (prefersDark ? "dark" : "light"),
  );

  // ===== LANGUAGE =====
  const translations = {
    en: {
      "page.title": "Aline Ferreira | Senior Front-End Developer Portfolio",
      "page.description":
        "Senior Front-End Developer with experience in Vue.js, React, TypeScript and Node.js. I build modern, scalable and accessible web interfaces with a focus on performance, design systems and clean code.",
      "nav.home": "Home",
      "nav.skills": "Skills",
      "nav.experience": "Experience",
      "nav.projects": "Projects",
      "nav.contact": "Contact",
      "home.greeting": 'Hi, I\'m <span class="highlight">Aline Ferreira</span>',
      "home.role": "Senior Front-End Developer",
      "home.bio1":
        "I'm a Front-End Developer who loves turning ideas into modern, responsive and scalable interfaces. I work daily with Vue.js, React, JavaScript and TypeScript, and I'm also comfortable across the stack — from automated testing and API integration to Node.js, PostgreSQL, Docker and CI/CD pipelines.",
      "home.bio2":
        "I'm passionate about technology, continuous learning, and crafting products that bring together great user experience, performance and clean, maintainable code. My goal is to transform ideas into high-quality digital products by combining intuitive design with efficient engineering.",
      "skills.title": "Skills",
      "skills.subtitle": "Senior Front-End Developer",
      "skills.core": "Core Technologies",
      "skills.frameworks": "Frameworks &amp; Libraries",
      "skills.testing": "Testing",
      "skills.cloud": "Cloud, DevOps &amp; Tools",
      "skills.architecture": "Architecture &amp; Software Engineering",
      "skills.performance": "Performance &amp; Quality",
      "skills.ai": "Artificial Intelligence",
      "skills.methodologies": "Methodologies &amp; Collaboration",
      "skills.soft": "Soft Skills",
      "experience.title": "Experience",
      "exp.kyndryl.role": "Frontend Developer",
      "exp.kyndryl.company": "Kyndryl",
      "exp.kyndryl.desc":
        "HTML5, CSS3, JavaScript ES6+, Vue.js, Component-Based Architecture, State Management, Routing, Git, NPM, Vue DevTools, Testing, Agile Methodologies",
      "exp.dobber.role": "Software Development Analyst",
      "exp.dobber.company": "Dobber Commerce and Representation",
      "exp.dobber.desc":
        "Full Stack Development, Vue.js, JavaScript, CSS3, HTML5, Version Control, Package Management, Component Architecture, Testing, Agile Practices",
      "exp.qualittas.role": "Support",
      "exp.qualittas.company": "Qualittas Institute - Veterinary Postgraduate",
      "exp.qualittas.desc":
        "Technical Support, HTML5, CSS3, JavaScript, Vue.js, Git, Problem Solving, Documentation, Team Collaboration, Learning & Development",
      "exp.tech.role": "Full Stack Developer",
      "exp.tech.company": "Tech Projects",
      "exp.tech.desc":
        "Frontend & Backend, React, Node.js, Python, MongoDB, PostgreSQL, API Development, REST Services, Cloud Deployment, Continuous Integration",
      "projects.title": "Projects",
      "project.pong.title": "Pong",
      "project.pong.desc":
        "A modern reimplementation of the classic Pong, built with pure p5.js (no build step, no framework) and grown incrementally with the help of GitHub Copilot. The project starts as a simple game and gains a full HUD layer, menus, voice narration, arena selection, scoreboard, win condition and organized assets.",
      "contact.title": "Contact",
      "footer.built": "Built with care by",
      "footer.rights": "All rights reserved.",
      "aria.theme": "Toggle theme",
      "aria.lang": "Change language",
    },
    pt: {
      "page.title":
        "Aline Ferreira | Portfólio Desenvolvedora Front-End Sênior",
      "page.description":
        "Desenvolvedora Front-End Sênior com experiência em Vue.js, React, TypeScript e Node.js. Construo interfaces web modernas, escaláveis e acessíveis, com foco em performance, design systems e código limpo.",
      "nav.home": "Início",
      "nav.skills": "Habilidades",
      "nav.experience": "Experiência",
      "nav.projects": "Projetos",
      "nav.contact": "Contato",
      "home.greeting":
        'Olá, eu sou <span class="highlight">Aline Ferreira</span>',
      "home.role": "Desenvolvedora Front-End Sênior",
      "home.bio1":
        "Sou uma Desenvolvedora Front-End apaixonada por transformar ideias em interfaces modernas, responsivas e escaláveis. Trabalho diariamente com Vue.js, React, JavaScript e TypeScript, e também tenho conforto em toda a stack — de testes automatizados e integração com APIs a Node.js, PostgreSQL, Docker e pipelines de CI/CD.",
      "home.bio2":
        "Sou apaixonada por tecnologia, aprendizado contínuo e pela criação de produtos que unem ótima experiência do usuário, performance e código limpo e sustentável. Meu objetivo é transformar ideias em produtos digitais de alta qualidade, combinando design intuitivo com engenharia eficiente.",
      "skills.title": "Habilidades",
      "skills.subtitle": "Desenvolvedora Front-End Sênior",
      "skills.core": "Tecnologias Principais",
      "skills.frameworks": "Frameworks e Bibliotecas",
      "skills.testing": "Testes",
      "skills.cloud": "Cloud, DevOps e Ferramentas",
      "skills.architecture": "Arquitetura e Engenharia de Software",
      "skills.performance": "Performance e Qualidade",
      "skills.ai": "Inteligência Artificial",
      "skills.methodologies": "Metodologias e Colaboração",
      "skills.soft": "Soft Skills",
      "experience.title": "Experiência",
      "exp.kyndryl.role": "Desenvolvedora Front-End",
      "exp.kyndryl.company": "Kyndryl",
      "exp.kyndryl.desc":
        "HTML5, CSS3, JavaScript ES6+, Vue.js, Arquitetura Baseada em Componentes, Gerenciamento de Estado, Roteamento, Git, NPM, Vue DevTools, Testes, Metodologias \u00c1geis",
      "exp.dobber.role": "Analista de Desenvolvimento de Software",
      "exp.dobber.company": "Dobber Comércio e Representação",
      "exp.dobber.desc":
        "Desenvolvimento Full Stack, Vue.js, JavaScript, CSS3, HTML5, Controle de Versão, Gerenciamento de Pacotes, Arquitetura de Componentes, Testes, Práticas \u00c1geis",
      "exp.qualittas.role": "Suporte Técnico",
      "exp.qualittas.company":
        "Instituto Qualittas - Pós-Graduação Veterinária",
      "exp.qualittas.desc":
        "Suporte Técnico, HTML5, CSS3, JavaScript, Vue.js, Git, Resolução de Problemas, Documentação, Colaboração em Equipe, Aprendizado & Desenvolvimento",
      "exp.tech.role": "Desenvolvedora Full Stack",
      "exp.tech.company": "Projetos de Tecnologia",
      "exp.tech.desc":
        "Frontend & Backend, React, Node.js, Python, MongoDB, PostgreSQL, Desenvolvimento de APIs, Serviços REST, Deploy em Cloud, Integração Contínua",
      "projects.title": "Projetos",
      "project.pong.title": "Pong",
      "project.pong.desc":
        "Uma releitura moderna do clássico Pong, construída em p5.js puro (sem build, sem framework) e desenvolvida de forma incremental com a ajuda do GitHub Copilot. O projeto começa como um jogo simples e ganha uma camada completa de HUD, menus, narração por voz, seleção de arena, placar, condição de vitória e assets organizados.",
      "contact.title": "Contato",
      "footer.built": "Desenvolvido com carinho por",
      "footer.rights": "Todos os direitos reservados.",
      "aria.theme": "Alternar tema",
      "aria.lang": "Mudar idioma",
    },
  };

  function applyLanguage(lang) {
    const dict = translations[lang] || translations.en;
    root.setAttribute("data-lang", lang);
    root.setAttribute("lang", lang === "pt" ? "pt-BR" : "en");

    document.querySelectorAll("[data-i18n]").forEach((el) => {
      const key = el.getAttribute("data-i18n");
      if (dict[key] !== undefined) {
        el.innerHTML = dict[key];
      }
    });

    if (dict["page.title"]) {
      document.title = dict["page.title"];
    }

    // Update SEO meta tags for the active language
    if (dict["page.description"]) {
      const desc = dict["page.description"];
      const setMeta = (selector, value) => {
        const el = document.querySelector(selector);
        if (el) el.setAttribute("content", value);
      };
      setMeta('meta[name="description"]', desc);
      setMeta('meta[property="og:description"]', desc);
      setMeta('meta[name="twitter:description"]', desc);
      setMeta('meta[property="og:title"]', dict["page.title"]);
      setMeta('meta[name="twitter:title"]', dict["page.title"]);
      setMeta('meta[property="og:locale"]', lang === "pt" ? "pt_BR" : "en_US");
    }

    const themeBtn = document.getElementById("themeToggle");
    if (themeBtn && dict["aria.theme"]) {
      themeBtn.setAttribute("aria-label", dict["aria.theme"]);
      themeBtn.setAttribute("title", dict["aria.theme"]);
    }
    const langBtn = document.getElementById("langToggle");
    if (langBtn && dict["aria.lang"]) {
      langBtn.setAttribute("aria-label", dict["aria.lang"]);
      langBtn.setAttribute("title", dict["aria.lang"]);
    }
  }

  const savedLang = localStorage.getItem(LANG_KEY);
  const browserLang = (navigator.language || "en").toLowerCase();
  const initialLang = savedLang || (browserLang.startsWith("pt") ? "pt" : "en");

  document.addEventListener("DOMContentLoaded", () => {
    applyLanguage(initialLang);

    const themeToggle = document.getElementById("themeToggle");
    if (themeToggle) {
      themeToggle.addEventListener("click", () => {
        const current =
          root.getAttribute("data-theme") === "dark" ? "dark" : "light";
        const next = current === "dark" ? "light" : "dark";
        root.setAttribute("data-theme", next);
        localStorage.setItem(THEME_KEY, next);
      });
    }

    const langToggle = document.getElementById("langToggle");
    if (langToggle) {
      langToggle.addEventListener("click", () => {
        const current = root.getAttribute("data-lang") === "pt" ? "pt" : "en";
        const next = current === "pt" ? "en" : "pt";
        applyLanguage(next);
        localStorage.setItem(LANG_KEY, next);
      });
    }

    const yearEl = document.getElementById("footerYear");
    if (yearEl) {
      yearEl.textContent = new Date().getFullYear();
    }
  });
})();
