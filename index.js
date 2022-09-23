import fs from 'fs';
import datei from './datei.json' assert {type: 'json'};
// Warum laut Aufgabe der Import? Wurde nicht benötigt, und man greift durch readFile drauf zu.


fs.readFile('./datei.json', (err, data) => {
    if (err) {
        console.log(err)
    }

    const obj = JSON.parse(data)

    obj.map((item) => {
        fs.appendFile('./datei.txt', `${item.id} – ${item.title}
${item.description}

`, (err) => {
            if (err) console.log(err)
        })
    })
})
