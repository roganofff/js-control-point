import axios from 'axios'


async function fetchWithRetryAndTimeout(url, timeout, retries) {
    for (let try_attempt = 1; try_attempt <= retries; try_attempt++) {
        try {
            const response = await axios.get(url, { timeout })
            return response
        } catch (error) {
            if (error.code === 'ECONNABORTED') {
                console.log(`Вышло время ожидания`)
            } else {
                throw error
            }

            if (try_attempt === retries) {
                throw new Error(`Все ${retries} попытки закончилися`)
            }
        }
    }
}

const url = "https://google.com"
const timeout = 5000
const retries = 3

fetchWithRetryAndTimeout(url, timeout, retries)
    .then(response => console.log("ВСё клёво:", response.status))
    .catch(error => console.error("Ошибка:", error.message))
