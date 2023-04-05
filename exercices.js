const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://protechgabes:iQYVAUCyL9sZ7Aez@cluster0.hfjjthx.mongodb.net/test', { 
        useNewUrlParser: true,
    
        useUnifiedTopology: true})
        .then(() => console.log('Connexion à la base de données réussie !'))
        .catch(() => console.log('Connexion à la base de données échouée !'));
const app = express();
const port = 4000;
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
const Client=require('./app/model/client.model');
const nouveauClient = new Client({
    nom: 'Dupont',
email: 'test@example.com',
dateDeNaissance: new Date('1980-01-01'),
adresse: '10 rue du Commerce, Paris'
});
nouveauClient.save()
.then(() => console.log('Le client a été ajouté à la base de données !'))
.catch((err) => console.log('Une erreur est survenue lors de l\'ajout du client.'+err));


app.get('/:nom', (req, res) => {
res.send(`hello ${req.params.nom}`);
});
app.post('/submit', (req, res) => {
    const { name, email } = req.body;
    const message = `Bonjour ${name}, votre e-mail est ${email}`;
    res.send(message);
    });

app.listen(port, () => {

console.log('server started on port ' + port);
});