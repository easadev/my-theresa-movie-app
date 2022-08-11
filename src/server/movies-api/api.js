import { APPLICATION_KEY, BASE_URL } from '../config';

import fetch from 'node-fetch'

export async function makeRequest({ path, method = 'GET' }) {
    const url = `${BASE_URL}/${path}?api_key=${APPLICATION_KEY}`;
    const result = fetch(
        url,
        {
            method,
        }
    );

    return (await result).json();
}