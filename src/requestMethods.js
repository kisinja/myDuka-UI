import axios from 'axios';

const BASE_URL = 'https://myduka-server.onrender.com/api';

const TOKEN = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY2NDlkY2Q1MjA3NWI5NGFlYjkyOGEyMyIsImlzQWRtaW4iOnRydWUsImlhdCI6MTcxNjEyMzA2NSwiZXhwIjoxNzE2MzgyMjY1fQ.B2BBdq1pNDB24oP_cozeJAul3f7BaI8WZMlew_LYlE0";

export const publicRequest = axios.create({
    baseURL: `${BASE_URL}`,
});

export const userRequest = axios.create({
    baseURL: `${BASE_URL}`,
    header: {
        token: `Bearer ${TOKEN}`
    }
});