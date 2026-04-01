document.addEventListener('DOMContentLoaded', () => {
    /* --- Translation Logic --- */
    const translations = {
        en: {
            'nav.home': 'Home',
            'nav.journey': 'Journey',
            'nav.projects': 'Projects',
            'nav.contact': 'Contact',
            'hero.badge': 'Available for hire',
            'hero.title': 'Fullstack Developer',
            'hero.subtitle': 'Specialist',
            'hero.pitch': 'I design robust, performant and scalable web applications, specializing in the creation of <strong>SaaS software</strong>. My approach combines a solid PHP backend architecture with dynamic and reactive user interfaces.',
            'hero.action1': 'View Projects',
            'hero.action2': 'Contact Me',

            'journey.title': 'My<span class="dot">.</span>Journey',
            'journey.desc': 'My technical arsenal and my evolution.',
            'journey.stack': 'Tech Stack',
            'journey.xp': 'Key Experiences',
            'journey.cert': 'Certifications',
            
            'xp1.date': '2023 - Present',
            'xp1.title': 'Fullstack Developer',
            'xp1.loc': 'Dijon',
            'xp1.desc': 'Design and development of custom web solutions and <strong>SaaS software</strong>. Creation of robust backend architectures and reactive interfaces.',
            
            'xp2.date': '2022 - Present',
            'xp2.title': 'Co-founder & Tech Lead',
            'xp2.desc': 'Launch and technical management of a specialized shop (IPTV Services). Complete management of the project lifecycle.',
            
            'xp3.title': 'Senior Web Developer',
            'xp3.desc': 'Development of multiple web applications in an agency. Mastery of web fundamentals and continuous technical optimization.',
            
            'xp4.title': 'Web & Print Graphic Designer',
            'xp4.loc': 'Ready-to-wear',
            'xp4.desc': 'Creation of visual communication materials. This experience forged my analytical eye for UI/UX design today.',
            
            'journey.cert': 'Certifications',
            
            'projects.title': 'My<span class="dot">.</span>Projects',
            'projects.desc': 'Proof of skills and feedback.',
            
            'proj1.link': '<i class="fa-solid fa-link"></i> View Project',
            'proj1.cat': 'Web Development / E-Health',
            'proj1.role': 'Role: Lead Fullstack Dev • Team of 4 developers',
            
            'proj.pres': '<i class="fa-solid fa-bullseye"></i> Presentation',
            'proj.prob': '<i class="fa-solid fa-bullseye"></i> Problematic',
            'proj.stack': '<i class="fa-solid fa-layer-group"></i> Tech Stack',
            'proj.ref': '💡 Reflective Posture (Feedback)',
            
            'proj1.desc': '<strong>International SaaS software (project based in France)</strong>. It offers a complete online appointment booking and patient record management solution for practitioners working in an aesthetic medical center.',
            'proj1.ref1.t': 'Data Complexity',
            'proj1.ref1.d': 'Managing real-time cross agendas and patient records required a robust MySQL database, leveraging the full power of the Eloquent ORM.',
            'proj1.ref2.t': 'Data Visualization',
            'proj1.ref2.d': 'Extensive integration of the <strong>amCharts</strong> library to provide health professionals with dynamic and interactive activity statistics.',
            'proj1.ref3.t': 'Performance (SPA)',
            'proj1.ref3.d': 'The combined use of <strong>Laravel, Vue.js and Inertia.js</strong> gives the interface absolute reactivity. No page reloading: it is a real business software hosted on the web.',
            
            'proj2.link': '<i class="fa-solid fa-hourglass-half"></i> Soon on GitHub',
            'proj2.cat': 'Personal Project / Social Network',
            'proj2.role': 'Role: Personal Project (From idea to production)',
            'proj2.desc': 'Design and develop from scratch an interactive community platform for travelers. The system requires latency-free interactions for news feeds, messaging, and relational systems (Follow/Like).',
            
            'proj2.ref1.t': 'Interaction Optimization (Likes)',
            'proj2.ref1.d': 'On a social network, "Like" or "Follow" actions are highly solicited. I had to implement front-end safeguards (Vue.js) to prevent server overload during multiple rapid clicks on hearts.',
            'proj2.ref2.t': 'UI and State Complexity',
            'proj2.ref2.d': 'Maintaining an accurate notification badge (likes, comments, follows) that persists across refreshes and synchronizing complex messaging modals (e.g., <code>ChatModal.vue</code> with default avatars) was a real challenge in asynchronous state management.',
            
            'contact.title': 'Ready to collaborate?',
            'contact.desc': 'I am actively looking for a full-time (CDI) or Freelance opportunity.',
            'contact.email': 'Email',
            'contact.loc': 'Location',
            'contact.city': 'Tunis & Remote',
            
            'footer.text': '&copy; 2026 Gazzoun. Built with passion in HTML/CSS/JS (because fundamentals matter).'
        },
        fr: {
            'nav.home': 'Accueil',
            'nav.journey': 'Parcours',
            'nav.projects': 'Réalisations',
            'nav.contact': 'Contact',
            'hero.badge': 'Disponible pour embauche',
            'hero.title': 'Développeur Fullstack',
            'hero.subtitle': 'Spécialiste',
            'hero.pitch': 'Je conçois des applications web robustes, performantes et scalables, spécialisé dans la création de <strong>logiciels en mode SaaS</strong>.\n Mon approche allie une architecture backend solide en PHP avec des interfaces utilisateur dynamiques et réactives.',
            'hero.action1': 'Voir les preuves',
            'hero.action2': 'Me contacter',

            'journey.title': 'Mon<span class="dot">.</span>Parcours',
            'journey.desc': 'Mon arsenal technique et mon évolution.',
            'journey.stack': 'Stack Technique',
            'journey.xp': 'Expériences clés',
            
            'xp1.date': '2023 - Aujourd\'hui',
            'xp1.title': 'Développeur Fullstack',
            'xp1.loc': 'Dijon',
            'xp1.desc': 'Conception et développement de solutions web sur mesure et de <strong>logiciels en mode SaaS</strong>. Création d\'architectures backend robustes et d\'interfaces réactives.',
            
            'xp2.date': '2022 - Aujourd\'hui',
            'xp2.title': 'Co-fondateur & Tech Lead',
            'xp2.desc': 'Lancement et gestion technique d\'une boutique spécialisée (Services IPTV). Gestion complète du cycle de vie du projet.',
            
            'xp3.title': 'Développeur Web Confirmé',
            'xp3.desc': 'Développement de multiples applications web en agence. Maîtrise des fondamentaux du web et optimisation technique continue.',
            
            'xp4.title': 'Infographiste Web & Print',
            'xp4.loc': 'Prêt-à-porter',
            'xp4.desc': 'Création de supports de communication visuels. Cette expérience forge aujourd\'hui mon œil analytique pour l\'UI/UX design.',
            
            'journey.cert': 'Certifications',
            
            'projects.title': 'Mes<span class="dot">.</span>Réalisations',
            'projects.desc': 'Preuves de compétences et retours d\'expériences.',
            
            'proj1.link': '<i class="fa-solid fa-link"></i> Voir le projet',
            'proj1.cat': 'Développement Web / E-Santé',
            'proj1.role': 'Rôle : Lead Dev Fullstack • Équipe de 4 développeurs',
            
            'proj.pres': '<i class="fa-solid fa-bullseye"></i> Présentation',
            'proj.prob': '<i class="fa-solid fa-bullseye"></i> Problématique',
            'proj.stack': '<i class="fa-solid fa-layer-group"></i> Stack Technique',
            'proj.ref': '💡 Posture Réflexive (Retours d\'expérience)',
            
            'proj1.desc': '<strong>Logiciel en mode SaaS d\'envergure internationale (projet basé en France)</strong>. Il offre une solution complète de prise de rendez-vous en ligne et de gestion de dossiers patients à destination des praticiens qui exercent leur activité dans un centre médical esthétique.',
            'proj1.ref1.t': 'Complexité des données',
            'proj1.ref1.d': 'Gérer les agendas croisés en temps réel et les dossiers des patients a nécessité une base de données MySQL robuste, exploitant toute la puissance de l\'ORM Eloquent.',
            'proj1.ref2.t': 'Data Visualisation',
            'proj1.ref2.d': 'Intégration poussée de la librairie <strong>amCharts</strong> afin d\'offrir aux professionnels de santé des statistiques d\'activité dynamiques et interactives.',
            'proj1.ref3.t': 'Performance (SPA)',
            'proj1.ref3.d': 'L\'utilisation combinée de <strong>Laravel, Vue.js et Inertia.js</strong> donne à l\'interface une réactivité absolue. Pas de rechargement de page : c\'est un vrai logiciel métier hébergé sur le web.',
            
            'proj2.link': '<i class="fa-solid fa-hourglass-half"></i> Bientôt sur GitHub',
            'proj2.cat': 'Projet Libre / Réseau Social',
            'proj2.role': 'Rôle : Projet Personnel (De l\'idée à la production)',
            'proj2.desc': 'Concevoir et développer de zéro une plateforme communautaire interactive pour les voyageurs. Le système exige des interactions sans latence pour les fils d\'actualités, les messageries et les systèmes relationnels (Follow/Like).',
            
            'proj2.ref1.t': 'Optimisation des Interactions (Likes)',
            'proj2.ref1.d': 'Sur un réseau social, les actions "Like" ou "Follow" sont extrêmement sollicitées. J\'ai dû implémenter des garde-fous côté front-end (Vue.js) pour empêcher la surcharge du serveur lors de clics rapides multiples sur les cœurs.',
            'proj2.ref2.t': 'Complexité de l\'UI et des États',
            'proj2.ref2.d': 'Maintenir un badge de notification précis (likes, commentaires, follows) qui persiste entre les rafraîchissements et synchroniser les modales complexes de messagerie (ex: <code>ChatModal.vue</code> avec avatars par défaut) fut un vrai défi en matière de gestion de l\'état asynchrone.',
            
            'contact.title': 'Prêt à collaborer ?',
            'contact.desc': 'Je suis activement à la recherche d\'une opportunité en CDI ou Freelance.',
            'contact.email': 'Email',
            'contact.loc': 'Localisation',
            'contact.city': 'Tunis & Remote',
            
            'footer.text': '&copy; 2026 Gazzoun. Construit avec passion en HTML/CSS/JS (parce que les fondamentaux, ça compte).'
        }
    };

    const langToggle = document.getElementById('lang-toggle');
    const labelEn = document.getElementById('label-en');
    const labelFr = document.getElementById('label-fr');

    if (langToggle) {
        const updateLanguage = () => {
            const currentLang = langToggle.checked ? 'fr' : 'en';
            
            if (currentLang === 'fr') {
                if(labelFr) labelFr.classList.add('active');
                if(labelEn) labelEn.classList.remove('active');
                document.documentElement.lang = 'fr';
            } else {
                if(labelEn) labelEn.classList.add('active');
                if(labelFr) labelFr.classList.remove('active');
                document.documentElement.lang = 'en';
            }

            document.querySelectorAll('[data-i18n]').forEach(el => {
                const key = el.getAttribute('data-i18n');
                if (translations[currentLang] && translations[currentLang][key]) {
                    el.innerHTML = translations[currentLang][key];
                    if (el.hasAttribute('data-text')) {
                        el.setAttribute('data-text', translations[currentLang][key]);
                    }
                }
            });
        };

        langToggle.addEventListener('change', updateLanguage);
        updateLanguage();
    }
});
