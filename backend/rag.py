import warnings
warnings.filterwarnings("ignore", category=DeprecationWarning)

from dotenv import load_dotenv
from langchain_huggingface import HuggingFaceEmbeddings
from langchain_chroma import Chroma
from langchain_groq import ChatGroq
from langchain_core.prompts import ChatPromptTemplate

load_dotenv()
embedding_model = HuggingFaceEmbeddings(
    model_name="sentence-transformers/all-mpnet-base-v2"
)
llm = ChatGroq(
    model="llama-3.3-70b-versatile",
    temperature=0
)  
#prompt template
prompt = ChatPromptTemplate.from_messages(
        [
            (
                "system",
                """You are a helpful AI assistant.

    Use ONLY the provided context to answer the question.

    If the answer is not present in the context,
    say: "I could not find the answer in the document."
    """
            ),
            (
                "human",
                """Context:
    {context}

    Question:
    {question}
    """
            )
        ]
    )

def ask_question(db_path, search_type, query):

    #loading vector store
    vectorstore = Chroma(
        persist_directory=db_path,
        embedding_function=embedding_model
    )

    if search_type == "similarity":

        retriever = vectorstore.as_retriever(
            search_type="similarity",
            search_kwargs={"k":4}
        )

    elif search_type == "mmr":

        retriever = vectorstore.as_retriever(
            search_type="mmr",
            search_kwargs={
                "k":4,
                "fetch_k":10,
                "lambda_mult":0.5
            }
        )  
    
    else:
        raise ValueError(f"Invalid search type: {search_type}")
    docs = retriever.invoke(query)

    context = "\n\n".join(#to combine documents only page content
        [doc.page_content for doc in docs]
    )

    final_prompt = prompt.invoke({
        "context":context,
        "question":query
    })

    response = llm.invoke(final_prompt)
    return response.content    
