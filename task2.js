function averageProperty(items) {
    let sum = 0
    let counter = 0
    for (let i = 0; i < items.length; i++) {
        sum += items[i].score
        counter++
    }

    return sum / counter
}

const items = [{ score: 20 }, { score: 30 }, { score: 40 }];
const items1 = [{ score: 100 }, { score: 100 }, { score: 10 }];
const items2 = [{ score: 3 }, { score: 0 }, { score: 0 }];
const items3 = [{ score: 7 }, { score: 8 }, { score: 10 }];
console.log(averageProperty(items))
console.log(averageProperty(items1))
console.log(averageProperty(items2))
console.log(averageProperty(items3))
