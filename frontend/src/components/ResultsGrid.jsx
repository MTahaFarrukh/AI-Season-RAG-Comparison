import ResultCard from "./ResultCard";

function ResultsGrid({ results }) {
  if (!results) return null;

  return (
    <div className="mt-12 grid grid-cols-1 gap-8 lg:grid-cols-3 animate-[fadeIn_0.6s_ease-in-out]">

      <ResultCard
        title="Recursive Splitter"
        similarity={results.Recursive_similarity}
        mmr={results.Recursive_mmr}
      />

      <ResultCard
        title="Character Splitter"
        similarity={results.Character_similarity}
        mmr={results.Character_mmr}
      />

      <ResultCard
        title="Token Splitter"
        similarity={results.Token_similarity}
        mmr={results.Token_mmr}
      />

    </div>
  );
}

export default ResultsGrid;