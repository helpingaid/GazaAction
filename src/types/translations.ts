export interface Translations {
  nav: {
    home: string;
    about: string;
    partners: string;
    resources: string;
    search: string;
  };
  hero: {
    title: string;
    subtitle: string;
    searchPlaceholder: string;
    searchButton: string;
    discoverMore: string;
  };
  counter: {
    title: string;
  };
  sections: {
    about: {
      title: string;
      description: string;
    };
    partners: {
      title: string;
      description: string;
    };
    resources: {
      title: string;
      description: string;
    };
  };
  buttons: {
    setDefault: string;
  };
  cookies: {
    message: string;
    accept: string;
    decline: string;
  };
}

export const translations: Record<string, Translations> = {
  it: {
    nav: {
      home: 'Home',
      about: 'Chi siamo',
      partners: 'Partner',
      resources: 'Risorse',
      search: 'Ricerca',
    },
    hero: {
      title: 'Gaza Action',
      subtitle: 'be a part of the change',
      searchPlaceholder: 'Cerca e sostieni Gaza...',
      searchButton: 'Cerca',
      discoverMore: 'Scopri di più',
    },
    counter: {
      title: 'Ricerche effettuate',
    },
    sections: {
      about: {
        title: 'Chi siamo',
        description: 'La nostre missione e il nostro impegno per aiutare Gaza nel lungo termine.',
      },
      partners: {
        title: 'Partner',
        description: 'Organizzazioni e aziende che sostengono il progetto.',
      },
      resources: {
        title: 'Risorse utili',
        description: 'Link, articoli e strumenti per chi vuole supportare Gaza (Skimlinks e altro)',
      },
    },
    buttons: {
      setDefault: 'Imposta come predefinito',
    },
    cookies: {
      message: 'Questo sito utilizza cookie per migliorare la tua esperienza di navigazione e per analisi statistiche.',
      accept: 'Accetta',
      decline: 'Rifiuta',
    },
  },
  en: {
    nav: {
      home: 'Home',
      about: 'About Us',
      partners: 'Partners',
      resources: 'Resources',
      search: 'Search',
    },
    hero: {
      title: 'Gaza Action',
      subtitle: 'be a part of the change',
      searchPlaceholder: 'Search and support Gaza...',
      searchButton: 'Search',
      discoverMore: 'Discover more',
    },
    counter: {
      title: 'Searches performed',
    },
    sections: {
      about: {
        title: 'About Us',
        description: 'Our mission and commitment to help Gaza in the long term.',
      },
      partners: {
        title: 'Partners',
        description: 'Organizations and companies supporting the project.',
      },
      resources: {
        title: 'Useful Resources',
        description: 'Links, articles and tools for those who want to support Gaza (Skimlinks and more)',
      },
    },
    buttons: {
      setDefault: 'Set as Default',
    },
    cookies: {
      message: 'This site uses cookies to improve your browsing experience and for statistical analysis.',
      accept: 'Accept',
      decline: 'Decline',
    },
  },
  es: {
    nav: {
      home: 'Inicio',
      about: 'Sobre Nosotros',
      partners: 'Socios',
      resources: 'Recursos',
      search: 'Buscar',
    },
    hero: {
      title: 'Gaza Action',
      subtitle: 'sé parte del cambio',
      searchPlaceholder: 'Busca y apoya a Gaza...',
      searchButton: 'Buscar',
      discoverMore: 'Descubre más',
    },
    counter: {
      title: 'Búsquedas realizadas',
    },
    sections: {
      about: {
        title: 'Sobre Nosotros',
        description: 'Nuestra misión y compromiso para ayudar a Gaza a largo plazo.',
      },
      partners: {
        title: 'Socios',
        description: 'Organizaciones y empresas que apoyan el proyecto.',
      },
      resources: {
        title: 'Recursos Útiles',
        description: 'Enlaces, artículos y herramientas para quienes quieren apoyar a Gaza (Skimlinks y más)',
      },
    },
    buttons: {
      setDefault: 'Establecer como Predeterminado',
    },
    cookies: {
      message: 'Este sitio utiliza cookies para mejorar tu experiencia de navegación y para análisis estadísticos.',
      accept: 'Aceptar',
      decline: 'Rechazar',
    },
  },
  fr: {
    nav: {
      home: 'Accueil',
      about: 'À Propos',
      partners: 'Partenaires',
      resources: 'Ressources',
      search: 'Recherche',
    },
    hero: {
      title: 'Gaza Action',
      subtitle: 'faites partie du changement',
      searchPlaceholder: 'Recherchez et soutenez Gaza...',
      searchButton: 'Rechercher',
      discoverMore: 'Découvrir plus',
    },
    counter: {
      title: 'Recherches effectuées',
    },
    sections: {
      about: {
        title: 'À Propos',
        description: 'Notre mission et notre engagement pour aider Gaza à long terme.',
      },
      partners: {
        title: 'Partenaires',
        description: 'Organisations et entreprises soutenant le projet.',
      },
      resources: {
        title: 'Ressources Utiles',
        description: 'Liens, articles et outils pour ceux qui veulent soutenir Gaza (Skimlinks et plus)',
      },
    },
    buttons: {
      setDefault: 'Définir par Défaut',
    },
    cookies: {
      message: 'Ce site utilise des cookies pour améliorer votre expérience de navigation et pour des analyses statistiques.',
      accept: 'Accepter',
      decline: 'Refuser',
    },
  },
  de: {
    nav: {
      home: 'Startseite',
      about: 'Über Uns',
      partners: 'Partner',
      resources: 'Ressourcen',
      search: 'Suche',
    },
    hero: {
      title: 'Gaza Action',
      subtitle: 'sei Teil der Veränderung',
      searchPlaceholder: 'Suchen und Gaza unterstützen...',
      searchButton: 'Suchen',
      discoverMore: 'Mehr entdecken',
    },
    counter: {
      title: 'Durchgeführte Suchen',
    },
    sections: {
      about: {
        title: 'Über Uns',
        description: 'Unsere Mission und unser Engagement, Gaza langfristig zu helfen.',
      },
      partners: {
        title: 'Partner',
        description: 'Organisationen und Unternehmen, die das Projekt unterstützen.',
      },
      resources: {
        title: 'Nützliche Ressourcen',
        description: 'Links, Artikel und Werkzeuge für diejenigen, die Gaza unterstützen möchten (Skimlinks und mehr)',
      },
    },
    buttons: {
      setDefault: 'Als Standard festlegen',
    },
    cookies: {
      message: 'Diese Website verwendet Cookies, um Ihr Surferlebnis zu verbessern und für statistische Analysen.',
      accept: 'Akzeptieren',
      decline: 'Ablehnen',
    },
  },
};
