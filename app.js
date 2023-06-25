const express = require('express')
const app = express()
const dotenv = require('dotenv').config()
//const MongoClient = require('mongodb').MongoClient;

const port = process.env.PORT
const mongoURL = process.env.MONGO


app.get('/', function (req, res) {
	console.log(mongoURL)
	// MongoClient.connect(mongoURL, function(err, client) {
	// 	console.log("TEST")
	// 	if (err) {
	// 	  console.error('Erreur de connexion à la base de données :', err);
	// 	  return;
	// 	}
	  
	// 	console.log('Connecté à la base de données');
	  
	// 	// Vous pouvez maintenant exécuter la requête
	// 	const db = client.db();
	// 	const user = db.collection('usercollection');
	  
	// 	user.find().toArray(function(err, documents) {
	// 	  if (err) {
	// 		console.error('Erreur lors de l\'exécution de la requête :', err);
	// 		return;
	// 	  }
	  
	// 	  console.log('Résultat de la requête :', documents);
	  
	// 	  // Faites ce que vous voulez avec les documents récupérés ici
	  
	// 	  // N'oubliez pas de fermer la connexion à la base de données
	// 	  client.close();
	// 	});
	//   });
  	res.send('Hello World')
})

app.get('/ranking', (req, res) => {
	var page = req.query.page
	var perPage = req.query.perPage
	res.send(`page ${page} ; perPage ${perPage}`)
})

app.listen(port, () => {
	console.log(`Server running on port ${ port }`)
})