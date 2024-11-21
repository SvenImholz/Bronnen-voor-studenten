console.log("script.js geladen");
/*
=================================
OPDRACHT 1: NAAM EN LEEFTIJD
=================================
1. Maak een functie om de leeftijd te berekenen op basis van de geboortedatum.
2. Vul de velden met de id's `welcomeName` en `age` in met de ingevoerde naam en berekende leeftijd.
3. Toon een welkomstbericht. Als de jonger is dan 18, pas dan een rode kleur toe op de tekst.
   Als de leeftijd 18 of ouder is, pas dan een groene kleur toe.
4. Controleer of alle invoervelden zijn ingevuld. Als dat niet het geval is, toon een foutmelding.

SCHRIJF DE CODE HIERONDER
*/





/*
=================================
OPDRACHT 2: PRODUCT SELECTIE
=================================
1. Vul de dropdown met de producten uit het JSON-object `products`.
2. Controleer of een product en hoeveelheid correct zijn geselecteerd.
3. Voeg een geselecteerd product en de hoeveelheid toe aan een array `cart`.
4. Werk de lijst in het winkelwagentje (`<ul id="cart">`) bij.
5. Bereken het totaalbedrag van de items in het winkelwagentje en toon dit in het veld met de id `total`.
6. Voeg een knop toe naast elk item in het winkelwagentje om het item te verwijderen.
7. Zorg ervoor dat "Verzenden" alleen mogelijk is als er minstens één product in het winkelwagentje zit.
8. Controleer dat "Speciaalbier" niet aan het winkelwagentje kan worden toegevoegd als de gebruiker jonger dan 18 jaar is.

SCHRIJF DE CODE HIERONDER
*/

// Vooraf gedefinieerde JSON-object met producten
const products = [
    { id: 1, name: "Cola", price: 2.29 },
    { id: 2, name: "Melk", price: 1.99 },
    { id: 3, name: "Speciaalbier", price: 4.99 }
];