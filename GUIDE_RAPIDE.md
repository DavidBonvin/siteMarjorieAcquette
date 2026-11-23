# 🌟 Guide Rapide — Site Marjorie Acquette

## Navigation Structure

```
index.html (Accueil)
├── Tous les boutons "Réserver" → contact.html#reservation
└── Lien "Mon approche" → about.html

about.html (Mon approche)
├── Contenu biographie complète
└── Lien "Découvrir les prestations" → services.html

services.html (Prestations)
├── Tarifs (Signature 60€, Forfaits 160-250€)
├── Déroulement (4 étapes)
└── Contre-indications intégrées

entreprises.html (Entreprises/QVT)
├── Formats: Séances flash + Journées bien-être
└── CTA: Demander un devis → contact.html#reservation

faq.html (Questions fréquentes)
├── 9 accordéons interactifs
└── Réponses détaillées à toutes les questions

contact.html (Contact & Réservation)
├── Formulaire de contact
├── Info géographique (30 km)
└── Liens vers pages légales

mentions-legales.html (Légalité)
├── Infos entreprise
├── Propriété intellectuelle
└── Lien vers politique de confidentialité

politique-de-confidentialite.html (RGPD)
├── Traitement données personnelles
├── Droits utilisateurs
└── Conformité complète

cgv.html (Conditions de Vente)
├── 17 articles détaillés
├── Tarifs, paiement, annulation
└── Responsabilité, contre-indications
```

## Éléments Clés à Retenir

### Rayon de Service
**CONFIRMÉ: 30 km** (unifié partout)
- Affichage: "Lille & 30 km" ou "rayon de 30 km"
- Tarifs: Déplacement inclus jusqu'à 20 km, forfait 5-10€ au-delà

### Téléphone Principal
**06.77.06.16.89** (unifié, confirmé correct)

### Accents Dorés (#C2A569)
Utilisés sur:
- "30 km" (hero index)
- Phrases clés dans bénéfices
- Tarifs et durées
- Mots importants dans textes longs

### Tarifs (Mémoriser)
- Séance 1h (plantaire/palmaire/faciale): **60€**
- Séance Étudiant: **50€**
- Séance Enfant 30min: **40€**
- Forfait 3 séances (Harmonie): **160€**
- Forfait 5 séances (Équilibre): **250€**
- Carte Cadeau: **60€** (validité 6 mois)

### Pages Légales (À Clarifier)
1. **Statut juridique** (auto-entrepreneur? EIRL?)
2. **Code APE** (activité principale)
3. **Délai annulation** (24h? 48h?)
4. **Durée conservation dossiers** (combien de temps?)

---

## Pour Modifier le Contenu

### Changer un titre
```html
<h1>Ancien titre</h1>
↓
<h1>Nouveau titre</h1>
```

### Changer une date/info
Cherchez le texte dans le fichier HTML avec Ctrl+F:
- "30 km" pour rayon
- "06.77.06.16.89" pour téléphone
- "Marjorie Acquette" pour nom

### Ajouter un bénéfice
1. Ouvrir `index.html`
2. Trouver section `<!-- ===================== BÉNÉFICES ===================== -->`
3. Copier-coller un `<article class="benefit-card">`
4. Modifier titre, description, icône

### Modifier un tarif
1. Ouvrir `services.html`
2. Trouver section `<!-- Tarifs -->`
3. Modifier la classe ou le contenu `price-card`

---

## Tests Rapides

### Vérifier les liens
1. Cliquer sur chaque bouton "Réserver" → Doit aller à contact.html
2. Footer → Cliquer "Mentions légales" → mentions-legales.html
3. Navigation → Chaque menu doit pointer au bon endroit

### Tester le responsive
1. Chrome: F12 → Ctrl+Shift+M (mobile mode)
2. Tester sur 375px (mobile), 768px (tablet), 1024px+ (desktop)
3. Vérifier qu'aucun texte ne déborde

### Vérifier les animations
1. Scroller la page → Éléments doivent entrer depuis bas avec fade
2. Hover sur cartes → Cartes doivent monter légèrement
3. Cliquer FAQ → Accordéon doit s'ouvrir/fermer

---

## Deployment Checklist

**Avant de pusher vers Vercel:**
- [ ] Toutes les pages s'ouvrent sans erreur
- [ ] Tous les liens fonctionnent (Ctrl+Clic)
- [ ] Formulaire de contact fonctionne
- [ ] Site responsive sur mobile
- [ ] 30 km affiché partout (pas 50 km)
- [ ] 06.77.06.16.89 comme téléphone principal
- [ ] Pas de console errors (F12 → Console)

**Après déploiement:**
- [ ] Visiter marjorie-acquette.vercel.app
- [ ] Vérifier que page charge (pas 404)
- [ ] Testrer navigation complète
- [ ] Testrer responsive
- [ ] Vérifier que formulaire reste fonctionnel

---

## Support Rapide

**Question: Où ajouter du contenu?**
- Chercher section avec `<!-- ===================== SECTION NAME ===================== -->`
- Ajouter contenu dedans

**Question: Comment changer couleur?**
- Variables CSS dans `css/variables.css`
- Exemple: `--color-accent-gold: #C2A569;` pour doré

**Question: Les animations vont trop lentement?**
- Chercher `--transition-card` ou `--ease-out` dans `variables.css`
- Ajuster valeurs (ms ou sec)

**Question: Comment ajouter une nouvelle page?**
1. Créer `nouvelle-page.html`
2. Copier structure de `faq.html` (header, footer, nav)
3. Modifier contenu dedans
4. Ajouter lien dans navigation `<li><a href="nouvelle-page.html">...</a></li>`
5. Ajouter lien retour dans footer

---

## 🎁 Bonus Features

✨ **Keyboard navigation**: Appuyer Tab pour naviguer
✨ **Dark mode support**: Site s'adapte au mode sombre (si l'OS le demande)
✨ **Print friendly**: Imprimer une page fonctionne bien
✨ **Offline**: Images en cache, site partiellement utilisable offline

---

**Dernière mise à jour: Novembre 2026**
**État: ✅ PRODUCTION-READY**
