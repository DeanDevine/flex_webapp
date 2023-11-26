import axios from "axios";

const flexApi = axios.create({
  baseURL: "https://flex-ao8b.onrender.com/api",
});

export const getArticles = () => {
  return flexApi.get("articles").then(({ data }) => {
    return data.articles;
  });
};
