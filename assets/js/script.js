/**Sammensætning af navn:
 * Opret to variabler, fornavn og efternavn, og tildel dem dine fornavn og efternavn. 
 * Lav en ny variabel, fuldtNavn, der indeholder hele dit navn ved at sammensætte 
 * fornavn og efternavn. Udskriv fuldtNavn til konsollen.
*/
let fornavn = "Inthushan";
let efternavn = "Krishnanithy";
const fuldtNavn = fornavn + " " + efternavn;
console.log(fuldtNavn);


/**Velkomstbesked:
 * Lav en variabel, brugernavn, og tildel den værdien af dit valgte brugernavn. 
 * Opret en velkomstbesked, der siger "Velkommen, [brugernavn]!" ved at sammensætte 
 * strengen "Velkommen, " og brugernavn. Udskriv velkomstbeskeden til konsollen.
*/
let brugernavn = "Indo";
let welcomeMessage = "Velkommen, " + brugernavn + "!"
console.log(welcomeMessage);


/**Bynavn og Postnummer:
 * Opret to variabler, by og postnummer, og tildel dem værdierne af din by og dit postnummer. 
 * Brug string + string metoden til at sammensætte dem og gem resultatet 
 * i en ny variabel kaldet adresse. Udskriv adresse til konsollen.
*/
let by = "Svenstrup J";
let postnummer = 9230;
let adresse = by + ", " + postnummer;
console.log(adresse);

/**Ferieplanlægning:
 * Lav en variabel, ferieDestination, og tildel den værdien af dit ønskede feriemål. 
 * Opret en anden variabel, feriePlan, der indeholder en besked, der siger: 
 * "Jeg planlægger at tage til [ferieDestination] i næste uge." 
 * Brug string + string metoden til at sammensætte beskeden og udskriv den til konsollen.
*/
let ferieDestination = "Kreta";
let feriePlan = "Jeg planlægger at tage til " + ferieDestination + " i næste uge."
console.log(feriePlan);

/**Produktnavn og Pris:
 * Opret to variabler, produktNavn og produktPris, og tildel dem værdierne af et produkt 
 * og dets pris. Lav en besked, der siger: "Det valgte produkt er [produktNavn], 
 * og det koster [produktPris] dollars." Brug string + string metoden til at 
 * sammensætte beskeden og udskriv den til konsollen.
*/
let produktNavn = "Monster Zero";
let produktPris = 13;
let produktMessage = "Det valgte produkt er " + produktNavn + ", og det koster " + produktPris + " kroner";
console.log(produktMessage);




/**Sammensætning af navn med concat()
 * Opret to variabler, `fornavn` og `efternavn`, og tildel dem dine fornavn og efternavn. 
 * Lav en ny variabel, `fuldtNavn`, der indeholder hele dit navn ved hjælp af 
 * `concat()` funktionen. Udskriv `fuldtNavn` til konsollen.
 */
const fuldtNavnTwo = fornavn.concat(" ", efternavn);
console.log(fuldtNavnTwo);


/**Velkomstbesked med concat()
 * Lav en variabel, `brugernavn`, og tildel den værdien af dit valgte brugernavn. 
 * Opret en velkomstbesked ved hjælp af `concat()` funktionen, 
 * der siger "Velkommen, [brugernavn]!" Udskriv velkomstbeskeden til konsollen.
 */
const welcomeMessageTwo = "Velkommen, ".concat(brugernavn, "!")
console.log(welcomeMessageTwo);

/**Bynavn og Postnummer med concat()
 * Opret to variabler, `by` og `postnummer`, og tildel dem værdierne af din by og 
 * dit postnummer. Brug `concat()` funktionen til at sammensætte dem og gem resultatet 
 * i en ny variabel kaldet `adresse`. Udskriv `adresse` til konsollen.
 */
const adresseTwo = by.concat(" ,", postnummer);
console.log(adresseTwo);

/**Ferieplanlægning med concat()
 * Lav en variabel, `ferieDestination`, og tildel den værdien af dit ønskede feriemål. 
 * Opret en anden variabel, `feriePlan`, der indeholder en besked ved hjælp af 
 * `concat()` funktionen, der siger: "Jeg planlægger at tage til [ferieDestination] i 
 * næste uge." Udskriv `feriePlan` til konsollen.
 */
const feriePlanTwo = "Jeg planlægger at tage til ".concat(ferieDestination, " i næste uge");
console.log(feriePlanTwo);

/**Produktnavn og Pris med concat()
 * Opret to variabler, `produktNavn` og `produktPris`, og tildel dem værdierne af et 
 * produkt og dets pris. Lav en besked ved hjælp af `concat()` funktionen, der siger: 
 * "Det valgte produkt er [produktNavn], og det koster [produktPris] dollars." 
 * Udskriv beskeden til konsollen.
 */
const produktMessageTwo = "Det valgte produkt er ".concat(produktNavn, ", og det koster " + produktPris + " kroner");
console.log(produktMessageTwo);