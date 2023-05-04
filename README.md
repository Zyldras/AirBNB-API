# AirBNB-API

### 1. Lancer un container Mongo
- `docker run -p 27017:27017 mongo`


### 2. Importer les données
- `mongoimport --db nodemonsite --collection usercollection --headerline --type=csv --file listings.csv`


### 3. Tester commande find
- `db.usercollection.find()`
- `db.usercollection.count()` 

### 4. Combien d'offre pour le quartier (neighbourhood) de Bègles avec count
- `db.usercollection.find({'neighbourhood': /Bègles/}).count()`

### 5. Lister les offres du même quartier avec find
- `db.usercollection.find({'neighbourhood': /Bègles/})`
 
### 6. Le top 3 des meilleurs ratings, dans le même quartier
- `db.usercollection.find({'neighbourhood': /Bègles/, 'number_of_reviews': {$gt: 0}, 'review_scores_rating': {$ne: ""}}).sort({'review_scores_rating': -1}).limit(3)`

### 7. Augmanter le prix du logement ayant l'id: 6891646 $190.00 -> $210.00
- `db.usercollection.updateOne({'id': 6891646}, {'$set': {'price': '$210.00'}})`

### 8. Compter le nombrre de logements ayant un réfrigérateur (Refrigerator)
- `db.usercollection.find({'amenities': /Refrigerator/}).count()`

### 9. Trouver le logement le plus cher
- `db.usercollection.find().sort({price: -1}).limit(1)`

### 10. Supprimer tous les logements du Host GuestReady en 1 seule commande
- `db.usercollection.deleteMany({host_name: 'GuestReady'})`

### 11. Faire une root /ranking?page=1&perPage=10
skip((page-1)*perPage).limit(perPage)

### 12. Trouver un moyen d'avoir le nombre de logements par quartier (avec aggregate)
