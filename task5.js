import axios from "axios"

async function* fetchPagesWithStopCondition(urls, maxPages) {
    let counter = 0

    for (const url of urls) {
        if (counter >= maxPages) break

        try {
            const response = await axios.get(url)
            yield response.data
            counter++
        } catch (error) {
            console.log(`Ошибка в ${url}: ${error.message}`)
            break
        }
    }
}

(async () => {
    const urls = [
        "https://jsonplaceholder.typicode.com/posts/1",
        "https://jsonplaceholder.typicode.com/posts/2",
        "https://kakapopa.com/",
        "https://jsonplaceholder.typicode.com/posts/3"
    ];
    const maxPages = 3

    for await (const data of fetchPagesWithStopCondition(urls, maxPages)) {
        console.log("Успешные данные:", data)
    }
})();
