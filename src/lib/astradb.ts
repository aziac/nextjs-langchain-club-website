import { DataAPIClient } from "@datastax/astra-db-ts";
import { AstraDBVectorStore } from "@langchain/community/vectorstores/astradb";
import { OpenAIEmbeddings } from "@langchain/openai";

const endpoint = process.env.ASTRA_DB_ENDPOINT || "";
const token = process.env.ASTRA_DB_APPLICATION_TOKEN || "";
const collection = process.env.ASTRA_DB_COLLECTION || "";

if (!token || !endpoint || !collection) {
  throw new Error("Please set AstraDB credentials in env file");
}

export async function getVectorStore() {
  return AstraDBVectorStore.fromExistingIndex(
    //abstraction created by langchain
    new OpenAIEmbeddings({ modelName: "text-embedding-3-small" }),
    {
      token,
      endpoint,
      collection,
      collectionOptions: {
        vector: {
          dimension: 1536, // decided how many numbers are in vector embedding array, is the number of dimensions openAI model generates
          metric: "cosine",
        },
      },
    },
  );
}

export async function getEmbeddingsCollection() {
  return new DataAPIClient(token).db(endpoint).collection(collection);
}
