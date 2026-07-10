function Header() {
  return (
    <div className="text-center mb-10">

      <h1 className="text-6xl font-bold text-cyan-400">
        AI Season RAG Comparison
      </h1>

      <p className="text-slate-400 mt-3 text-xl">
        Compare Chunking Strategies & Retrieval Techniques
      </p>
      <div className="flex flex-wrap justify-center gap-3 mt-6">

  <span className="bg-slate-800 px-4 py-2 rounded-full text-cyan-400">
    React
  </span>

  <span className="bg-slate-800 px-4 py-2 rounded-full text-cyan-400">
    FastAPI
  </span>

  <span className="bg-slate-800 px-4 py-2 rounded-full text-cyan-400">
    LangChain
  </span>

  <span className="bg-slate-800 px-4 py-2 rounded-full text-cyan-400">
    ChromaDB
  </span>

  <span className="bg-slate-800 px-4 py-2 rounded-full text-cyan-400">
    Groq
  </span>

</div>

    </div>
    
  );
}

export default Header;