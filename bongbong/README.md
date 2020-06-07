
GET
Hämtar datan 

POST
Skapar data och lägger till

PUT
Ersätter hela innehållet på positionen i pathen, eller skapar en ny om ingen existerar på den positionen.

PATCH
Ersätter en eller flera delar av datan på positionen i pathen om innehåller är soom modellen, eller skapar en ny om ingen existerar på den positionen.

DELETE
Tar bort användare med innehållet av id

    
http://: Är protokollet som används
localhost: Är domännamnet
3000: Är portnumret
users: Är pathen
?username=something: är förfrågnings-parametrar 


### Backend: 
backend delen hanterar student functionaliteten
### Frontend: 
i frontend delen så har du fältar där du fyller på, därefter trycker man på add knappen vilket gör så att de dycker på sidan, de angivna informationen.

så här ser det ut, efter att man fyllt på fältarna, det som visas på skärmen då
students: {
"_id": "<unikt uuid>
"email": "pelle.kanin@ecut.com"
"name": "Pelle kanin",
"address": {
   "gata": " Framtidsvägen 10A",
   "postnummer": "352 57",
   "ort": "Växjö"   
   }
}

And with these methods

/students GET lista alla studenter som en array
/students/?name=Pelle+kanin hämtar alla studenter med namn
/students POST skapa en ny student
/students/{id} GET visar en viss student student
/students/{id} PUT skapa eller uppdatera en student
/students/{id} DELETE ta bort en ny student
___

## Frontend

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`
runs the frontend-part

### `npm run dev`
runs the backend-part