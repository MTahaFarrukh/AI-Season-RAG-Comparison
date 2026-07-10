function Footer() {
  return (
    <footer className="mt-20 border-t border-[#2A2A2A] pt-8 text-center">

      <p className="text-gray-400">
        Built with <span className="text-red-500">❤️</span> using
      </p>

      <div className="mt-3 flex flex-wrap justify-center gap-3 text-sm">

        <span className="rounded-full border border-[#2A2A2A] bg-[#171717] px-3 py-1 text-amber-300">
          React
        </span>

        <span className="rounded-full border border-[#2A2A2A] bg-[#171717] px-3 py-1 text-amber-300">
          FastAPI
        </span>

        <span className="rounded-full border border-[#2A2A2A] bg-[#171717] px-3 py-1 text-amber-300">
          LangChain
        </span>

        <span className="rounded-full border border-[#2A2A2A] bg-[#171717] px-3 py-1 text-amber-300">
          ChromaDB
        </span>

        <span className="rounded-full border border-[#2A2A2A] bg-[#171717] px-3 py-1 text-amber-300">
          Groq
        </span>

      </div>

      <p className="mt-6 text-sm text-gray-500">
        © 2026 Muhammad Taha Farrukh
      </p>

    </footer>
  );
}

export default Footer;