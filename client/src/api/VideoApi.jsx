import axios from "axios";

const API = import.meta.env.VITE_API;

export const fetchVideos = async (page, limit) => await axios.get(`${API}?page=${page}&limit=${limit}`)

export const searchVideos = async (query) => await axios.get(`${API}/search?q=${query}`);