import { useState, useEffect } from "react";
import example from "./example";
import Previewer from "./components/Previewer";
import TextEditor from "./components/TextEditor";

const GITHUB_URL = "https://github.com/trefu";
const STORAGE_KEY = "mp-theme";

const getInitialTheme = () => {
  if (typeof window === "undefined") return "dark";
  const saved = window.localStorage.getItem(STORAGE_KEY);
  if (saved === "dark" || saved === "light") return saved;
  return "dark";
};

function App() {
  const [text, setText] = useState(example());
  const [theme, setTheme] = useState(getInitialTheme);

  useEffect(() => {
    const root = document.documentElement;
    root.classList.toggle("dark", theme === "dark");
    window.localStorage.setItem(STORAGE_KEY, theme);
  }, [theme]);

  useEffect(() => {
    const wrapper = document.getElementById("fcc_test_suite_wrapper");
    if (!wrapper) return undefined;

    const positionWrapper = () => {
      wrapper.style.setProperty("position", "fixed", "important");
      wrapper.style.setProperty("top", "auto", "important");
      wrapper.style.setProperty("bottom", "16px", "important");
      wrapper.style.setProperty("left", "auto", "important");
      wrapper.style.setProperty("right", "16px", "important");
      wrapper.style.setProperty("z-index", "99999", "important");
    };
    positionWrapper();

    const observer = new MutationObserver(positionWrapper);
    observer.observe(wrapper, { attributes: true, attributeFilter: ["style"] });

    return () => observer.disconnect();
  }, []);

  const toggleTheme = () =>
    setTheme((prev) => (prev === "dark" ? "light" : "dark"));

  return (
    <div className="min-h-screen flex flex-col text-slate-800 dark:text-slate-200 font-sans antialiased transition-colors duration-200 ease-out-expo">
      <div className="fixed inset-0 -z-10 bg-gradient-to-br from-indigo-50 via-white to-emerald-50 dark:from-ink-950 dark:via-ink-900 dark:to-indigo-950 transition-colors duration-200" />
      <div className="fixed inset-0 -z-10 bg-aurora-light dark:bg-aurora-dark animate-aurora" />

      <header className="sticky top-0 z-10 animate-slide-up">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between gap-4 backdrop-blur-md bg-white bg-opacity-60 dark:bg-ink-950 dark:bg-opacity-50 border-b border-slate-200 border-opacity-60 dark:border-slate-800 dark:border-opacity-60 transition-colors duration-200">
          <div className="flex items-center gap-2.5 min-w-0">
            <span className="h-1.5 w-1.5 rounded-full bg-gradient-to-br from-indigo-500 to-violet-500 shadow-glow animate-pulse-dot" aria-hidden="true" />
            <h1 className="text-[15px] font-semibold tracking-tight text-slate-900 dark:text-white whitespace-nowrap">
              Markdown<span className="text-indigo-600 dark:text-indigo-400">.</span>studio
            </h1>
          </div>

          <button
            type="button"
            onClick={toggleTheme}
            aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
            title={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
            className="relative w-9 h-9 inline-flex items-center justify-center rounded-full border border-slate-200 dark:border-slate-700 text-slate-500 dark:text-slate-400 hover:text-indigo-600 dark:hover:text-indigo-300 hover:border-indigo-300 dark:hover:border-indigo-500 hover:bg-indigo-50 dark:hover:bg-indigo-500 dark:hover:bg-opacity-10 transition-all duration-300 ease-out-expo"
          >
            <i
              className={`fas fa-sun text-sm absolute transition-all duration-300 ease-out-expo ${
                theme === "dark"
                  ? "opacity-0 -rotate-90 scale-50"
                  : "opacity-100 rotate-0 scale-100"
              }`}
              aria-hidden="true"
            ></i>
            <i
              className={`fas fa-moon text-sm absolute transition-all duration-300 ease-out-expo ${
                theme === "dark"
                  ? "opacity-100 rotate-0 scale-100"
                  : "opacity-0 rotate-90 scale-50"
              }`}
              aria-hidden="true"
            ></i>
          </button>
        </div>
      </header>

      <main className="flex-1 w-full max-w-6xl mx-auto px-4 sm:px-6 py-8 sm:py-10">
        <div className="grid gap-5 sm:gap-6 lg:grid-cols-2">
          <div className="animate-slide-up" style={{ animationDelay: "80ms" }}>
            <TextEditor text={text} changeText={setText} />
          </div>
          <div className="animate-slide-up" style={{ animationDelay: "180ms" }}>
            <Previewer text={text} />
          </div>
        </div>
      </main>

      <footer className="border-t border-slate-200 border-opacity-60 dark:border-slate-800 dark:border-opacity-60 backdrop-blur-sm bg-white bg-opacity-40 dark:bg-ink-950 dark:bg-opacity-40 transition-colors duration-200">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 h-14 flex items-center justify-center text-xs text-slate-500 dark:text-slate-400">
          <a
            href={GITHUB_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-1.5 font-medium hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors duration-200"
          >
            <i className="fab fa-github text-sm transition-transform duration-300 group-hover:rotate-[8deg]" aria-hidden="true"></i>
            <span>github.com/trefu</span>
            <i className="fas fa-arrow-up-right-from-square text-[10px] opacity-50 group-hover:opacity-100 transition-opacity duration-200" aria-hidden="true"></i>
          </a>
        </div>
      </footer>
    </div>
  );
}

export default App;
