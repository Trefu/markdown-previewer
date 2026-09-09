const TextEditor = ({ text, changeText }) => {
  const handleChange = (e) => changeText(e.target.value);

  return (
    <section className="group relative h-full rounded-2xl border border-slate-200 border-opacity-80 dark:border-slate-800 dark:border-opacity-80 bg-white bg-opacity-80 dark:bg-ink-900 dark:bg-opacity-70 backdrop-blur-sm shadow-soft overflow-hidden transition-all duration-300 ease-out-expo hover:shadow-glow hover:-translate-y-0.5">
      <header className="flex items-center justify-between px-5 py-3 border-b border-slate-100 dark:border-slate-800 bg-gradient-to-r from-indigo-50 from-opacity-60 to-transparent dark:from-indigo-500 dark:from-opacity-5 dark:to-transparent transition-colors duration-500">
        <div className="flex items-center gap-2">
          <span className="w-1.5 h-1.5 rounded-full bg-indigo-400 dark:bg-indigo-500 group-hover:bg-indigo-600 dark:group-hover:bg-indigo-300 transition-colors duration-300" />
          <h2 className="text-[11px] font-semibold uppercase tracking-[0.14em] text-indigo-700 dark:text-indigo-300">
            Editor
          </h2>
          <span className="text-[10px] font-mono text-slate-400 dark:text-slate-500 uppercase tracking-wider ml-1">
            markdown
          </span>
        </div>
        <span className="text-[10px] font-mono text-slate-400 dark:text-slate-500">
          .md
        </span>
      </header>
      <textarea
        id="editor"
        name="editor"
        value={text}
        onChange={handleChange}
        spellCheck="false"
        className="block w-full px-5 py-4 bg-transparent text-slate-800 dark:text-slate-100 text-sm leading-relaxed placeholder:text-slate-400 dark:placeholder:text-slate-600 focus:bg-indigo-50 focus:bg-opacity-30 dark:focus:bg-indigo-500 dark:focus:bg-opacity-5 transition-colors duration-300"
        placeholder="Start writing markdown..."
      />
    </section>
  );
};

export default TextEditor;
