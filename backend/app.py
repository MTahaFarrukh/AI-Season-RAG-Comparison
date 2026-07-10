from fastapi import FastAPI
from pydantic import BaseModel
from fastapi.middleware.cors import CORSMiddleware

from rag import ask_question

app = FastAPI(
    title="AI Season RAG API"
)
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:5173"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)
class QuestionRequest(BaseModel):
    question: str


@app.post("/chat")
def chat(request: QuestionRequest):

    splitters = {
        "Recursive": "chroma_recursive",
        "Character": "chroma_character",
        "Token": "chroma_token"
    }

    retrieval_methods = [
        "similarity",
        "mmr"
    ]

    results = {}

    for chunk_name, db in splitters.items():

        for method in retrieval_methods:

            key = f"{chunk_name}_{method}"

            results[key] = ask_question(
                db_path=db,
                search_type=method,
                query=request.question
            )

    return results