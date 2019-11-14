/*
// CrÃ©er la class Hero qui permet d'obtenir les logs en commentaire
const arthur = new Hero("Arthur", "knight");
const merlin = new Hero("Merlin", "mage");

arthur.hello(); // "Je suis Arthur, un chevalier qui possÃ¨de 100 points de vie"
merlin.hello(); // "Je suis Merlin, un magicien qui possÃ¨de 60 points de vie"

const zorb = new Hero("Zorb", "monster");

arthur.attack(zorb); // "Arthur attaque Zorb et lui inflige 15 points de dÃ©gÃ¢ts"

zorb.status(); // "Zorb a 35 points de vie."

merlin.attack(zorb); // "Merlin attaque Zorb et lui inflige 18 points de dÃ©gÃ¢ts"

zorb.status(); // "Zorb a 17 points de vie."
*/

console.log("Dompté le chat");
console.log("Protagoniste: 'Déborah', 'Madina' et le 'Chat'. ");
console.log("Commande possible: .hello(), .pet(), .status()");




class hero {
    constructor(nom,type,vie,degat){
        this.nom = nom;
        this.type = type;
        this.vie = vie;
        this.degat = degat;
    }
    hello(){
        return (
            "I'm " + this.nom +
            " , i'm " + this.type + 
            " and i'm " + this.vie + 
            " percent Happy."
            );
    }
    pet (opp) {
        let rngDegat = Math.floor(Math.random()*this.degat);
        //let dammage = opp.vie + rngDegat;
        let rngWork = Math.floor(Math.random()*11);
        console.log("rgnWork: "+rngWork);
        if(rngWork == 2 || rngWork == 7 || rngWork == 9 || rngWork == 10 || rngWork == 11 || rngWork == 1 || rngWork == 4 || rngWork == 5 || rngWork == 0 ){
            opp.vie = opp.vie + rngDegat;
            return this.nom + " pet " + opp.nom + " and feels better of " + rngDegat + " percent.";
        } else {
            opp.vie = opp.vie - (rngDegat*3);
            return this.nom + " bother " + opp.nom + " and feels bad of " + (rngDegat*3) + " percent.";
        }
    }
    status (){
        console.log("vie "+this.vie)
        if (this.vie<=0) {
            return (this.nom + " feels Bad..... ")
        }
        if(this.vie >0 && this.vie <=25){
            return (this.nom + " want to going back to sleep");
        }
        if(this.vie >25 && this.vie <= 50){
            return (this.nom + " feels OK.");
        }
        if(this.vie >50 && this.vie <= 75){
            return (this.nom + " feels Goood.");
        }
        if(this.vie >75 && this.vie <100){
            return (this.nom + " is so Happy.");
        }
        if(this.vie >= 100){
            return (this.nom + " want to Dance !!");
        }
    }
}
const Madina = new hero("Madina", "Grumpy",10,60);
const Déborah = new hero("Déborah", "Lazy",10,60);
const Cat = new hero ("a Cat", "useless",10,20);
/*  Bonus */
const Taeyeon = new hero("Taeyeon", "Incredible",100000,60);







