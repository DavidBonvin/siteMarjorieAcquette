/**
 * main.js — Interactions du site
 *  1. Menu mobile plein écran (hamburger)
 *  2. Header : état « scrolled »
 *  3. Scroll reveal (Intersection Observer)
 *  4. Onglets accessibles (services.html) + ouverture par ancre
 *  5. Formulaire de contact (génère un mailto:)
 */
(() => {
  'use strict';

  /* ---------- 1. Menu mobile ---------- */
  const burger = document.querySelector('.burger');
  const nav = document.querySelector('.nav');
  const desktopQuery = window.matchMedia('(min-width: 900px)');

  const setMenu = (open) => {
    if (!burger || !nav) return;
    burger.setAttribute('aria-expanded', String(open));
    burger.setAttribute('aria-label', open ? 'Fermer le menu' : 'Ouvrir le menu');
    nav.classList.toggle('is-open', open);
    document.body.classList.toggle('no-scroll', open);
  };

  if (burger && nav) {
    // Délai d'apparition en cascade pour chaque lien
    nav.querySelectorAll('.nav__link').forEach((link, i) => link.style.setProperty('--i', i));

    burger.addEventListener('click', () => setMenu(burger.getAttribute('aria-expanded') !== 'true'));
    nav.addEventListener('click', (e) => { if (e.target.closest('a')) setMenu(false); });
    document.addEventListener('keydown', (e) => { if (e.key === 'Escape') setMenu(false); });
    desktopQuery.addEventListener('change', (e) => { if (e.matches) setMenu(false); });
  }

  /* ---------- 2. Header au scroll ---------- */
  const header = document.querySelector('.site-header');
  if (header) {
    const onScroll = () => header.classList.toggle('is-scrolled', window.scrollY > 20);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
  }

  /* ---------- 3. Scroll reveal ---------- */
  const revealEls = document.querySelectorAll('.reveal');
  if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver((entries, obs) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add('is-visible');
        obs.unobserve(entry.target);   // animation jouée une seule fois

        // Après l'animation, on retire .reveal pour que le hover des cartes reprenne la main
        const el = entry.target;
        const delay = Number(el.dataset.delay) || 0;
        setTimeout(() => el.classList.remove('reveal', 'is-visible'), 900 + delay + 50);
      });
    }, { threshold: 0.15, rootMargin: '0px 0px -8% 0px' });

    revealEls.forEach((el) => {
      // data-delay (ms) permet un effet de cascade entre éléments frères
      if (el.dataset.delay) el.style.setProperty('--reveal-delay', `${el.dataset.delay}ms`);
      observer.observe(el);
    });
  } else {
    revealEls.forEach((el) => el.classList.add('is-visible'));
  }

  /* ---------- 4. Onglets (Déroulement / Tarifs) ---------- */
  const tabsRoot = document.querySelector('[data-tabs]');
  if (tabsRoot) {
    const tabs = [...tabsRoot.querySelectorAll('[role="tab"]')];
    const panels = tabs.map((tab) => document.getElementById(tab.getAttribute('aria-controls')));

    const activate = (tab, focus = false) => {
      tabs.forEach((t, i) => {
        const isActive = t === tab;
        t.setAttribute('aria-selected', String(isActive));
        t.tabIndex = isActive ? 0 : -1;
        panels[i].hidden = !isActive;
      });
      if (focus) tab.focus();
    };

    tabs.forEach((tab, i) => {
      tab.addEventListener('click', () => activate(tab));
      tab.addEventListener('keydown', (e) => {
        const last = tabs.length - 1;
        const next = { ArrowRight: i === last ? 0 : i + 1, ArrowLeft: i === 0 ? last : i - 1, Home: 0, End: last }[e.key];
        if (next === undefined) return;
        e.preventDefault();
        activate(tabs[next], true);
      });
    });

    // Ancres (#tarifs, #deroulement, #contre-indications) : ouvre l'onglet puis fait défiler
    const openFromHash = () => {
      const target = location.hash && document.getElementById(decodeURIComponent(location.hash.slice(1)));
      const panel = target && target.closest('[role="tabpanel"]');
      if (!panel || !tabsRoot.contains(panel)) return;
      activate(tabs[panels.indexOf(panel)]);
      if (target.tagName === 'DETAILS') target.open = true;
      (target.tagName === 'DETAILS' ? target : tabsRoot).scrollIntoView({ behavior: 'smooth', block: 'start' });
    };

    activate(tabs[0]);   // masque les panneaux inactifs (tous visibles sans JS)
    openFromHash();
    window.addEventListener('hashchange', openFromHash);
  }

  /* ---------- 5. Formulaire de contact ---------- */
  const form = document.querySelector('#contact-form');
  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const data = new FormData(form);
      const subject = `Demande de séance — ${data.get('type')}`;
      const body = [
        `Nom : ${data.get('name')}`,
        `Téléphone : ${data.get('phone') || 'non renseigné'}`,
        `Email : ${data.get('email')}`,
        '',
        data.get('message'),
      ].join('\n');
      window.location.href =
        `mailto:acquette.m@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    });
  }
})();
