import { Header } from './components/Header';
import { GoogleSearchBox } from './components/GoogleSearchBox';
import { CookieConsent } from './components/CookieConsent';
import { useLanguage } from './hooks/useLanguage';
import { Globe, Heart, Users, BookOpen, Chrome, TrendingUp } from 'lucide-react';

function App() {
  const { t } = useLanguage();

  const handleSetAsDefault = () => {
    alert('Per impostare come motore di ricerca predefinito:\n\n1. Vai nelle impostazioni del browser\n2. Cerca "Motore di ricerca"\n3. Aggiungi un nuovo motore di ricerca personalizzato\n4. Inserisci questo URL: ' + window.location.origin);
  };

  return (
    <div className="min-h-screen bg-slate-50">
      <Header logo={t.hero.title} navItems={t.nav} />

      <section
        id="hero"
        className="relative min-h-screen flex items-center justify-center pt-20 bg-gradient-to-br from-slate-700 via-slate-600 to-teal-700"
        style={{
          backgroundImage: "url('https://images.pexels.com/photos/1250346/pexels-photo-1250346.jpeg?auto=compress&cs=tinysrgb&w=1920')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundBlendMode: 'multiply',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-slate-900/60 via-slate-800/50 to-slate-900/70"></div>

        <div className="relative z-10 container mx-auto px-4 sm:px-6 py-12 text-center">
          <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-white mb-4 drop-shadow-2xl">
            {t.hero.title}
          </h1>
          <p className="text-2xl sm:text-3xl md:text-4xl text-white/90 mb-12 font-light tracking-wide">
            {t.hero.subtitle}
          </p>

          <div id="search" className="mb-8">
            <GoogleSearchBox
              placeholder={t.hero.searchPlaceholder}
              buttonText={t.hero.searchButton}
            />
          </div>

          <button
            onClick={handleSetAsDefault}
            className="mb-8 px-6 py-3 bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white font-medium rounded-xl transition-all shadow-lg border border-white/30 flex items-center gap-2 mx-auto"
          >
            <Chrome className="w-5 h-5" />
            {t.buttons.setDefault}
          </button>

          <button
            onClick={() => {
              const element = document.getElementById('about');
              element?.scrollIntoView({ behavior: 'smooth' });
            }}
            className="px-8 py-3 bg-transparent border-2 border-white text-white hover:bg-white hover:text-slate-800 font-semibold rounded-xl transition-all shadow-lg"
          >
            {t.hero.discoverMore}
          </button>
        </div>
      </section>

      <section className="py-16 bg-slate-100">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-2xl mx-auto">
            <div className="bg-white rounded-2xl shadow-xl p-8 text-center transform hover:scale-105 transition-transform duration-300">
              <div className="flex items-center justify-center mb-4">
                <TrendingUp className="w-8 h-8 text-teal-600" />
              </div>
              <h3 className="text-xl md:text-2xl font-semibold text-slate-800 mb-4">{t.counter.title}</h3>
              <div className="text-5xl md:text-6xl font-bold text-teal-600 tracking-tight">
                12.345
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-slate-50 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow">
                <div className="w-16 h-16 bg-teal-600 rounded-full flex items-center justify-center mb-6 mx-auto">
                  <Heart className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-slate-800 mb-4 text-center">
                  {t.sections.about.title}
                </h3>
                <p className="text-slate-600 leading-relaxed text-center">
                  {t.sections.about.description}
                </p>
              </div>

              <div id="partners" className="bg-slate-50 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow">
                <div className="w-16 h-16 bg-teal-600 rounded-full flex items-center justify-center mb-6 mx-auto">
                  <Users className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-slate-800 mb-4 text-center">
                  {t.sections.partners.title}
                </h3>
                <p className="text-slate-600 leading-relaxed text-center">
                  {t.sections.partners.description}
                </p>
              </div>

              <div id="resources" className="bg-slate-50 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow">
                <div className="w-16 h-16 bg-teal-600 rounded-full flex items-center justify-center mb-6 mx-auto">
                  <BookOpen className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-slate-800 mb-4 text-center">
                  {t.sections.resources.title}
                </h3>
                <p className="text-slate-600 leading-relaxed text-center">
                  {t.sections.resources.description}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-slate-800 text-white py-12">
        <div className="container mx-auto px-4 sm:px-6 text-center">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Globe className="w-6 h-6 text-teal-400" />
            <p className="text-xl font-semibold">{t.hero.title}</p>
          </div>
          <p className="text-slate-400">
            {t.hero.subtitle}
          </p>
        </div>
      </footer>

      <CookieConsent
        message={t.cookies.message}
        acceptText={t.cookies.accept}
        declineText={t.cookies.decline}
      />
    </div>
  );
}

export default App;