import warnings
warnings.filterwarnings("ignore", category=DeprecationWarning)
from langchain_community.document_loaders import TextLoader
from langchain_text_splitters import (
    RecursiveCharacterTextSplitter,
    CharacterTextSplitter,
    TokenTextSplitter,
)
from langchain_huggingface import HuggingFaceEmbeddings
from langchain_community.vectorstores import Chroma
from dotenv import load_dotenv

load_dotenv()

data = TextLoader("aiseason-document.txt")
docs = data.load()

#chunking

splitters = {

    "Recursive": RecursiveCharacterTextSplitter(
        chunk_size = 500,
        chunk_overlap = 50
    ),
#character based splitting
    "Character": CharacterTextSplitter( 
        separator= "\n", #
        chunk_size = 500, 
        chunk_overlap=50 
    ),

#token based splitting
    "Token": TokenTextSplitter(
        chunk_size = 200,
        chunk_overlap = 20    
    )
}


embedding_model = HuggingFaceEmbeddings(model_name = "sentence-transformers/all-mpnet-base-v2")

for name, splitter in splitters.items():

    print(f"Creating {name} Database...")
    chunks = splitter.split_documents(docs)

    vectorstore = Chroma.from_documents(
        documents=chunks,
        embedding=embedding_model,
        persist_directory=f"chroma_{name.lower()}"
    )

    vectorstore.persist()
    print(f"{name} database created successfully.")
