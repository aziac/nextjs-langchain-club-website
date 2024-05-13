## Getting Started

First, create a .env.local file and add in your OPENAI_API_KEY as well your information with ASTRA_DB_APPLICATION_TOKEN, ASTRA_DB_ENDPOINT, and ASTRA_DB_COLLECTION

Then, run the development server:

```bash
npm run generate
npm run dev
```
The generate command is what splits the documents and uploads the vector embeddings to the vector database to be retrieved later during OpenAI api calls

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.
