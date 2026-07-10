function ResultCard({ title, similarity, mmr }) {
  return (
    <div className="group bg-[#171717]/80 backdrop-blur-sm rounded-2xl p-6 border border-[#2A2A2A] shadow-xl transition-all duration-300 hover:-translate-y-2 hover:border-amber-400 hover:shadow-[0_0_30px_rgba(245,158,11,0.20)]">

      <h2 className="mb-6 text-2xl font-bold bg-gradient-to-r from-yellow-300 via-amber-400 to-orange-500 bg-clip-text text-transparent">
        📄 {title}
      </h2>

      <div className="mb-6">

        <h3 className="mb-3 flex items-center gap-2 text-lg font-semibold text-amber-300">
          🔍 Similarity Search
        </h3>

        <div className="rounded-xl border border-[#2A2A2A] bg-[#0F0F0F] p-4 leading-7 text-gray-300">
          {similarity}
        </div>

      </div>

      <div>

        <h3 className="mb-3 flex items-center gap-2 text-lg font-semibold text-amber-300">
          ♻️ MMR Search
        </h3>

        <div className="rounded-xl border border-[#2A2A2A] bg-[#0F0F0F] p-4 leading-7 text-gray-300">
          {mmr}
        </div>

      </div>

    </div>
  );
}

export default ResultCard;