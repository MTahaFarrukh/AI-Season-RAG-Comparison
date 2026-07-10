# 🤖 AI Season RAG Comparison

![React](https://img.shields.io/badge/React-19-blue?logo=react)
![FastAPI](https://img.shields.io/badge/FastAPI-0.116-green?logo=fastapi)
![LangChain](https://img.shields.io/badge/LangChain-RAG-yellow)
![ChromaDB](https://img.shields.io/badge/ChromaDB-VectorDB-orange)
![Groq](https://img.shields.io/badge/Groq-LLM-red)
![TailwindCSS](https://img.shields.io/badge/TailwindCSS-v4-38BDF8?logo=tailwindcss)

A Retrieval-Augmented Generation (RAG) application built with **React**, **FastAPI**, **LangChain**, **ChromaDB**, and **Groq** to compare different chunking strategies and retrieval techniques.

---

## 📌 Overview

This project compares the performance of three document chunking strategies with two retrieval methods to evaluate how different RAG pipelines affect answer quality.

For every user query, the application generates **6 responses**:

- Recursive + Similarity
- Recursive + MMR
- Character + Similarity
- Character + MMR
- Token + Similarity
- Token + MMR

This enables side-by-side comparison of different chunking and retrieval combinations.

---

## ✨ Features

- Compare 3 Chunking Strategies
- Compare 2 Retrieval Methods
- FastAPI Backend
- React Frontend
- Chroma Vector Database
- HuggingFace Embeddings
- Groq Llama 3.3 70B
- Modern Tailwind CSS UI
- Interactive Question Answering

---

## 🛠 Tech Stack

### Frontend

- React
- Tailwind CSS
- Axios
- Vite

### Backend

- FastAPI
- LangChain
- ChromaDB
- HuggingFace Embeddings
- Groq API

---

## 📂 Project Structure

```text
AI-Season-RAG/
│
├── backend/
│   ├── app.py
│   ├── rag.py
│   ├── create_database.py
│   ├── requirements.txt
│   ├── chroma_recursive/
│   ├── chroma_character/
│   ├── chroma_token/
│   └── aiseason-document.txt
│
├── frontend/
│   ├── src/
│   ├── package.json
│   ├── vite.config.js
│   └── public/
│
└── README.md
```

---

## ⚙️ Installation

### Clone Repository

```bash
git clone https://github.com/YOUR_USERNAME/AI-Season-RAG.git
```

---

### Backend Setup

```bash
cd backend

python -m venv venv

# Windows
venv\Scripts\activate

# macOS/Linux
source venv/bin/activate

pip install -r requirements.txt
```

Create a `.env` file inside the backend folder:

```env
GROQ_API_KEY=your_groq_api_key
```

Run the backend:

```bash
uvicorn app:app --reload
```

---

### Frontend Setup

```bash
cd frontend

npm install

npm run dev
```

---

## 📸 Screenshots

### Home Screen

<img width="953" height="437" alt="image" src="https://github.com/user-attachments/assets/ad0502fc-4320-4472-8805-2065a4d0b881" />

<img width="933" height="437" alt="image" src="https://github.com/user-attachments/assets/23b29da2-3b11-4686-a110-258d4d814b3b" />


### Comparison Results

<img width="932" height="431" alt="image" src="https://github.com/user-attachments/assets/301b487b-50ca-4b99-800c-5b51e68b7757" />

---

## 📊 Comparison Methods

| Chunking Strategy | Similarity | MMR |
|-------------------|------------|-----|
| Recursive         | ✅         | ✅  |
| Character         | ✅         | ✅  |
| Token             | ✅         | ✅  |

---

## 🚀 Future Improvements

- Backend Deployment
- Frontend Deployment
- Streaming Responses
- Conversation Memory
- File Upload Support
- Evaluation Metrics

---
## 📈 Key Findings

After testing all six combinations, I observed:

- Recursive chunking produced the most balanced results for this document.
- MMR reduced repetitive context compared to similarity search.
- Token-based chunking worked well for smaller factual queries but sometimes lost contextual continuity.
- Retrieval quality depends on both chunking strategy and retriever choice rather than either one alone.

---
## 👨‍💻 Author

**Muhammad Taha Farrukh**

If you found this project helpful, consider giving it a ⭐ on GitHub.
