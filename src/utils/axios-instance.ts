import axios from 'axios';

export const axiosInstance = axios.create({
    baseURL: "https://company-profile-fitness.vercel.app/api"
})

// Perlu diganti URL nya pas deploy
//  localhost