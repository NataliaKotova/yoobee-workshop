console.log("JS");
//write a loop that counts from 0 to 100 in 7s

// var n = 7;
// var result = 0;
// for(var i = 0; i <100; i++) {
//     if((result + 7) < 100) {
//         result = result + n;
//         document.getElementById('result').textContent += result + "\n";
//     }
   
// }

//Write a loop that outputs multiples of 2 up to 20,000,000.



//Using switch statements, write a set of nested loops that outputs every playing card: 

//Ranks: Ace, 2—10, Jack, Queen, King. Suits: Clubs, Diamonds, Hearts, Spades. 


var cardType = prompt("which card would you like? Enter one of the four options: clubs, heart, diamond, spades.");
console.log(cardType);

switch(cardType) {
    case 'diamond':
        document.getElementById('result').innerHTML += "dimond - ACE, diamond 2-10, diamond -Jack, Queen, King";
        break;

    case 'spades':
        document.getElementById('result').innerHTML += "spades - ACE, spades 2-10, spades -Jack, Queen, King";
        break;
    case 'heart':
        document.getElementById('result').innerHTML += "heart - ACE, heart 2-10, heart -Jack, Queen, King";
        break;
    case 'clubs':
        document.getElementById('result').innerHTML += "clubs - ACE, clubs 2-10, clubs -Jack, Queen, King";
        break;
    default:
        document.getElementById('result').innerHTML += "Sorry, wrong input";
  }
