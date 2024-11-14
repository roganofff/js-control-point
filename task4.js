import axios from "axios";

async function loadSelectedData(urls) {
    const requests = urls.map(url =>
        axios.get(url).then(response => response.data).catch(() => null)
    );

    const results = await Promise.allSettled(requests);

    const successfulData = results
        .filter(result => result.status === 'fulfilled' && result.value !== null)
        .map(result => result.value);

    return successfulData;
}

const urls = [
    "https://jsonplaceholder.typicode.com/posts/1",
    "https://jsonplaceholder.typicode.com/posts/2",
    "https://kakapopa.com/" 
];

loadSelectedData(urls)
    .then(successfulData => console.log("Нормално загрузилось:", successfulData))
    .catch(error => console.error("Ошибка:", error.message));
