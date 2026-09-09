import marked from "marked";

const Previewer = ({ text }) => {
  const markup = marked(text, { breaks: true });

  return (
    <section className="group relative h-full rounded-2xl border border-slate-200 border-opacity-80 dark:border-slate-800 dark:border-opacity-80 bg-white bg-opacity-80 dark:bg-ink-900 dark:bg-opacity-70 backdrop-blur-sm shadow-soft overflow-hidden transition-all duration-300 ease-out-expo hover:shadow-glow hover:-translate-y-0.5">
      <header className="flex items-center justify-between px-5 py-3 border-b border-slate-100 dark:border-slate-800 bg-gradient-to-r from-emerald-50 from-opacity-60 to-transparent dark:from-emerald-500 dark:from-opacity-5 dark:to-transparent transition-colors duration-500">
        <div className="flex items-center gap-2">
          <span className="relative inline-flex w-2 h-2">
            <span className="absolute inset-0 rounded-full bg-emerald-400 dark:bg-emerald-500 animate-pulse-dot" />
            <span className="absolute inset-0 rounded-full bg-emerald-400 dark:bg-emerald-500 opacity-50 animate-ping" />
          </span>
          <h2 className="text-[11px] font-semibold uppercase tracking-[0.14em] text-emerald-700 dark:text-emerald-300">
            Preview
          </h2>
          <span className="text-[10px] font-mono text-slate-400 dark:text-slate-500 uppercase tracking-wider ml-1">
            rendered
          </span>
        </div>
        <span className="text-[10px] font-mono text-slate-400 dark:text-slate-500">
          html
        </span>
      </header>
      <div
        id="preview"
        className="px-6 py-5 transition-opacity duration-300 ease-out-expo"
        dangerouslySetInnerHTML={{ __html: markup }}
      />
    </section>
  );
};

export default Previewer;
