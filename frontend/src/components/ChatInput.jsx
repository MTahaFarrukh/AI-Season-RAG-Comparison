function ChatInput({
    question,
    setQuestion,
    askQuestion,
    loading
}) {

    return (

        <div className="flex gap-4 mb-10">

            <input

                type="text"

                placeholder="Ask anything from the document..."

                value={question}

                onChange={(e)=>setQuestion(e.target.value)}
                onKeyDown={(e) => {
                    if (e.key === "Enter") {
                        askQuestion();
                    }
                }}
                className="flex-1 rounded-xl bg-slate-800 border border-slate-700 px-5 py-4 text-white outline-none focus:border-cyan-400"

            />

            <button
                onClick={askQuestion}
                disabled={loading}
                className={`px-8 rounded-xl font-semibold transition-all
                ${
                    loading
                        ? "bg-gray-600 cursor-not-allowed"
                        : "bg-cyan-500 hover:bg-cyan-600"
                }`}
            >
                {loading ? "Loading..." : "Ask"}
            </button>

        </div>

    )

}

export default ChatInput;