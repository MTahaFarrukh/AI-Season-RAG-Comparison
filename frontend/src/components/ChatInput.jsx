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
                className="flex-1 rounded-xl bg-[#171717] border border-[#2A2A2A] px-5 py-4 text-white placeholder:text-gray-500 outline-none focus:border-amber-400 focus:ring-2 focus:ring-amber-400/30 transition-all"

            />

            <button
                onClick={askQuestion}
                disabled={loading}
                className={`px-8 py-4 rounded-xl font-semibold text-black transition-all duration-300
                ${
                    loading
                        ? "bg-gray-600 cursor-not-allowed text-white"
                        : "bg-gradient-to-r from-yellow-300 via-amber-400 to-orange-500 hover:from-yellow-400 hover:via-amber-500 hover:to-orange-600 shadow-lg hover:shadow-amber-500/30 hover:scale-105"
                }`}
            >
                {loading ? "Thinking..." : "Ask Question"}
            </button>

        </div>

    )

}

export default ChatInput;