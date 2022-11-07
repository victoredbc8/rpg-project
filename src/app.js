import express from "express";

const app = express();

app.use(express.json());

const classes = [
    {id:1, "name": "Bard"},
    {id:2, "name": "Warrior"},
]

app.get('/', (req, res) => {
    res.status(200).send('rpg project')
})

app.get('/classes', (req, res) => {
    res.status(200).json(classes)
})

app.get('/classes/:id', (req, res) => {
    let index = searchClass(req.params.id);
    res.json(classes[index]);
})

app.post('/classes', (req, res) => {
     classes.push(req.body);
     res.status(201).send('new class')
})

app.put('/classes/:id', (req, res) => {
    let index = searchClass(req.params.id);
    classes[index].name = req.body.name;
    res.json(classes);
})

app.delete('/classes/:id', (req, res) => {
    let {id} = req.params
    let index = searchClass(id);
    classes.splice(index, 1)
    res.send('class removed');
})

function searchClass(id) {
    return classes.findIndex(classe => classe.id == id)
}

export default app
