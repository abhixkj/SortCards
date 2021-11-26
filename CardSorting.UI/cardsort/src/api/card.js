import axios from "./axios/axios";
import { resolve } from "./resolve.js";

export async function SortCards(cards) {
  return await resolve(axios.post("/cards/sort", cards).then((res) => res.data));
}