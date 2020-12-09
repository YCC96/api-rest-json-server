// database-faker.js
let faker = require('faker');
let generateData = () => {
    let data = []
    for (let id = 0; id < 50; id++) {
        data.push({
            id: id,
            name: faker.name.findName(),
            firstSurname: faker.name.firstName(),
            lastSurname: faker.name.lastName(),
            age: faker.random.number(),
            gender: 'M',
            mail: faker.internet.email(),
            telephone: faker.phone.phoneNumber(),
            updateDate: faker.date.recent()
        });
    }
    return { "data": data }
}
module.exports = generateData