import { getBaseClient } from "../utils/baseClient";

const getCredentials = (key: string) => {
  const value = process.env[key];
  if (!value) {
    throw new Error(`${key} is not set`);
  }
  return {apiKey: value};
};


export const openai = (
  { apiKey } = getCredentials("OPENAI_API_KEY")
) =>
  getBaseClient({
    baseURL: "https://eu.api.openai.com/v1",
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json",
    },
  });
