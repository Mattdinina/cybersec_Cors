const express = require('express');
const app = express();
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: true }));

app.post('/submit-form', (req, res) => {
    const pseudo = req.body.pseudo;
    const password = req.body.password;
    console.log(`Pseudo: ${pseudo}, Password: ${password}`);
    // Traitez les données du formulaire ici
    res.send('Formulaire soumis avec succès');
});

app.listen(3000, () => {
    console.log('Serveur en écoute sur le port 3000');
});
