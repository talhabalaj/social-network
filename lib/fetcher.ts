import axios from 'axios';

export const fetcher = axios.create(
    {
        withCredentials: true,
        headers: {
            'Content-Type': 'application/json',
        }
    }
)