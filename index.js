function playoffs(){

    var nhlwest = ["Anaheim Ducks", "Arizona Coyotes", "Calgary Flames", "Chicago Blackhawks", "Colorado Avalanche", "Dallas Stars", "Edmonton Oilers", "Los Angeles Kings", "Minnesota Wild", "Nashville Predators", "San Jose Sharks", "Seattle Kraken", "St. Louis Blues", "Vancouver Canucks", "Vegas Golden Knights", "Winnipeg Jets"]
    var nhleast = ["Boston Bruins", "Buffalo Sabres", "Carolina Hurricanes", "Columbus Blue Jackets", "Detroit Red Wings", "Florida Panthers", "Montreal Canadiens", "New Jersey Devils", "New York Islanders", "New York Rangers", "Ottawa Senators", "Philadelphia Flyers", "Pittsburgh Penguins", "Tampa Bay Lightning", "Toronto Maple Leafs", "Washington Capitals"]
  
  var W1 = Math.floor(Math.random()*16+1);
  var w1t = nhlwest[W1];
  nhlwest.splice(W1,1);
  console.log("After 1 - " + nhlwest);
  console.log("W1 Result is: " + W1);
  console.log("Team 1: " + w1t);
  var W2 = Math.floor(Math.random()*15+1);
  var w2t = nhlwest[W2];
  nhlwest.splice(W2,1);
  console.log("After 2 - " + nhlwest);
  console.log("W2 Result is: " + W2);
  console.log("Team 2: " + w2t);
  var W3 = Math.floor(Math.random()*14+1);
  var w3t = nhlwest[W3];
  nhlwest.splice(W3,1);
  console.log("After 3 - " + nhlwest);
  console.log("W3 Result is: " + W3);
  console.log("Team 3: " + w3t);
  var W4 = Math.floor(Math.random()*13+1);
  var w4t = nhlwest[W4];
  nhlwest.splice(W4,1);
  console.log("After 4 - " + nhlwest);
  console.log("W4 Result is: " + W4);
  console.log("Team 4: " + w4t);
  var W5 = Math.floor(Math.random()*12+1);
  var w5t = nhlwest[W5];
  nhlwest.splice(W5,1);
  console.log("After 5 - " + nhlwest);
  console.log("W5 Result is: " + W5);
  console.log("Team 5: " + w5t);
  var W6 = Math.floor(Math.random()*11+1);
  var w6t = nhlwest[W6];
  nhlwest.splice(W6,1);
  console.log("After 6 - " + nhlwest);
  console.log("W6 Result is: " + W6);
  console.log("Team 6: " + w6t);
  var W7 = Math.floor(Math.random()*10+1);
  var w7t = nhlwest[W7];
  nhlwest.splice(W7,1);
  console.log("After 7 - " + nhlwest);
  console.log("W7 Result is: " + W7);
  console.log("Team 7: " + w7t);
  var W8 = Math.floor(Math.random()*9+1);
  var w8t = nhlwest[W8];
  nhlwest.splice(W8,1);
  console.log("After 8 - " + nhlwest);
  console.log("W8 Result is: " + W8);
  console.log("Team 8: " + w8t);

  var E1 = Math.floor(Math.random()*16+1);
  var e1t = nhleast[E1];
  nhleast.splice(E1,1);
  var E2 = Math.floor(Math.random()*15+1);
  var e2t = nhleast[E2];
  nhleast.splice(E2,1);
  var E3 = Math.floor(Math.random()*14+1);
  var e3t = nhleast[E3];
  nhleast.splice(E3,1);
  var E4 = Math.floor(Math.random()*13+1);
  var e4t = nhleast[E4];
  nhleast.splice(E4,1);
  var E5 = Math.floor(Math.random()*12+1);
  var e5t = nhleast[E5];
  nhleast.splice(E5,1);
  var E6 = Math.floor(Math.random()*11+1);
  var e6t = nhleast[E6];
  nhleast.splice(E6,1);
  var E7 = Math.floor(Math.random()*10+1);
  var e7t = nhleast[E7];
  nhleast.splice(E7,1);
  var E8 = Math.floor(Math.random()*9+1);
  var e8t = nhleast[E8];
  nhleast.splice(E8,1);

  console.log("Western Teams DNQ: " + nhlwest);
  console.log("")
  console.log("Eastern Teams DNQ: " + nhleast);
  
  console.log("Western Conference: First Round")
  console.log(w1t + " vs. " + w8t);
  console.log(w2t + " vs. " + w7t);
  console.log(w3t + " vs. " + w6t);
  console.log(w4t + " vs. " + w5t);
  console.log("")
  console.log("Eastern Conference: First Round")
  console.log(e1t + " vs. " + e8t);
  console.log(e2t + " vs. " + e7t);
  console.log(e3t + " vs. " + e6t);
  console.log(e4t + " vs. " + e5t);
}

playoffs()