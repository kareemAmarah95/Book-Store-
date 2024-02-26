import axios from "axios";

const BASE_URL = "http://localhost:9000";

export const getAllBooks = () => {
  return axios.get(`${BASE_URL}/books`);
};

export const getBookById = (id) => {
  return axios.get(`${BASE_URL}/books/${id}`);
};

export const addBook = (book) => {
  return axios.post(`${BASE_URL}/books`, book);
};

export const deleteBook = (id) => {
  return axios.delete(`${BASE_URL}/books/${id}`);
};
