function ResultCard({ title, similarity, mmr }) {
  return (
    <div className="bg-slate-800 rounded-2xl p-6 shadow-lg border border-slate-700 hover:border-cyan-400 hover:-translate-y-2 transition-all duration-300">

      <h2 className="text-2xl font-bold text-cyan-400 mb-6">
          📄 {title}
      </h2>

      <div className="mb-6">

        <h3 className="text-lg font-semibold text-white mb-2">
          🔍 Similarity Search
        </h3>

        <div className="bg-slate-900 rounded-xl p-4 text-slate-300 leading-7">
          {similarity}
        </div>

      </div>

      <div>

        <h3 className="text-lg font-semibold text-white mb-2">
          ♻️ MMR Search
        </h3>

        <div className="bg-slate-900 rounded-xl p-4 text-slate-300 leading-7">
          {mmr}
        </div>

      </div>

    </div>
  );
}

export default ResultCard;