import axios from 'axios';


async function fetchWithRetryAndTimeout(url, timeout, retries) {
    for (let attempt = 1; attempt <= retries; attempt++) {
        try {
            const response = await axios.get(url, { timeout });
            return response;
        } catch (error) {
            if (error.code === 'ECONNABORTED') {
                console.log(`Вышло время ожидания`);
            } else {
                throw error;
            }

            if (attempt === retries) {
                throw new Error(`Все ${retries} попытки завершились неудачно.`);
            }
        }
    }
}

const url = "https://google.com";
const timeout = 5000;
const retries = 3; 

fetchWithRetryAndTimeout(url, timeout, retries)
    .then(response => console.log("ВСё клёво:", response.status))
    .catch(error => console.error("Ошибка:", error.message));
