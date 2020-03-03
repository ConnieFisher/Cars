import axios from "axios";

export default axios.create({
  baseURL: "https://api.unsplash.com/",
    responseType: "json",
    headers: {
        Authorization: 'Client-ID bWbV24UyqfQnL9UxBJjb0XFo-FsHk0scUBX6mZLLgTM'
    }
});