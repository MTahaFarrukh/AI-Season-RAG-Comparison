function Header() {
  return (
    <div className="text-center mb-10">

      <h1 className="text-6xl md:text-7xl font-extrabold bg-gradient-to-r from-yellow-300 via-amber-400 to-orange-500 bg-clip-text text-transparent">
            AI Season RAG Comparison
      </h1>

      <p className="mt-5 text-lg text-gray-400 max-w-2xl mx-auto">
        Compare three chunking strategies with two retrieval techniques and analyze
        how different RAG pipelines influence response quality.
      </p>
      <div className="flex flex-wrap justify-center gap-3 mt-6">

  <span className="rounded-full border border-amber-400/20 bg-[#171717] px-4 py-2 text-sm font-medium text-amber-300 transition-all duration-300 hover:border-amber-400 hover:bg-[#202020] hover:scale-105">
    ⚡ React
  </span>

  <span className="rounded-full border border-amber-400/20 bg-[#171717] px-4 py-2 text-sm font-medium text-amber-300 transition-all duration-300 hover:border-amber-400 hover:bg-[#202020] hover:scale-105">
    🚀 FastAPI
  </span>

  <span className="rounded-full border border-amber-400/20 bg-[#171717] px-4 py-2 text-sm font-medium text-amber-300 transition-all duration-300 hover:border-amber-400 hover:bg-[#202020] hover:scale-105">
    🦜 LangChain
  </span>

  <span className="rounded-full border border-amber-400/20 bg-[#171717] px-4 py-2 text-sm font-medium text-amber-300 transition-all duration-300 hover:border-amber-400 hover:bg-[#202020] hover:scale-105">
    🗄️ ChromaDB
  </span>

  <span className="rounded-full border border-amber-400/20 bg-[#171717] px-4 py-2 text-sm font-medium text-amber-300 transition-all duration-300 hover:border-amber-400 hover:bg-[#202020] hover:scale-105">
    ⚡ Groq
  </span>

</div>

    </div>
    
  );
}

export default Header;