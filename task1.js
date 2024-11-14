function filterNestedProperty(data, propertyString) {
    let property = propertyString.split(".")[0]
    let subProperty = propertyString.split(".")[1]

    let newData = []
    for (let i = 0; i < data.length; i++) {
        if (data[i][property][subProperty]) {
            newData.push(data[i])
        }
    }

    return newData
}


const data = [ { name: 'item1', details: { active: true } }, { name: 'item2', details: { active: false} } ];
console.log(filterNestedProperty(data, "details.active"))