function LoadingSpinner() {
  return (
    <div className="mt-14 flex flex-col items-center">

      <div className="h-14 w-14 animate-spin rounded-full border-4 border-[#2A2A2A] border-t-amber-400"></div>

      <p className="mt-6 text-lg font-medium text-amber-300">
        Comparing all 6 RAG combinations...
      </p>

      <p className="mt-2 text-sm text-gray-500">
        Testing different chunking strategies and retrieval methods.
      </p>

    </div>
  );
}

export default LoadingSpinner;