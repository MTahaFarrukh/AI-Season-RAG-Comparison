import { useState } from "react";
import api from "./services/api";

import Header from "./components/Header";
import ChatInput from "./components/ChatInput";
import LoadingSpinner from "./components/LoadingSpinner";
import ResultsGrid from "./components/ResultsGrid";
import Footer from "./components/Footer";

function App() {

  const [question, setQuestion] = useState("");
  const [results, setResults] = useState(null);
  const [loading, setLoading] = useState(false);

  const askQuestion = async () => {

    if (!question.trim()) return;
    setResults(null);
    setLoading(true);

    try {

      const response = await api.post("/chat", {
        question: question.trim(),
      });

      setResults(response.data);

    } catch (error) {

      console.error(error);
      alert("Error connecting to backend.");

    }

    setLoading(false);

  };

  return (

    <div className="min-h-screen bg-gradient-to-br from-[#16120A] via-[#0A0A0A] to-black text-white">

      <div className="max-w-screen-2xl mx-auto px-8 py-12">

        <Header />

        <ChatInput
          question={question}
          setQuestion={setQuestion}
          askQuestion={askQuestion}
          loading={loading}
        />

        {loading ? (
          <LoadingSpinner />
        ) : results ? (
          
          <ResultsGrid results={results} />
        ) : (
            <div className="text-center text-slate-400 mt-20">
              Ask a question to compare all 6 RAG combinations.
            </div>
        )}
        <Footer/>
      </div>

    </div>

  );

}

export default App;