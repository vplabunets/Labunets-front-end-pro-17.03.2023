//Task #1

const birthYear = Number(prompt("Please, enter your birth year"));
const data = new Date();
const age = data.getFullYear() - birthYear;

if (birthYear) {
  alert(`Your age is ${age}`);
}

let residencePlace = prompt("Please, enter your residence place");
if (residencePlace) {
  residencePlace = residencePlace.toLowerCase();
}
let country = null;

if (residencePlace) {
  switch (residencePlace) {
    case "kyiv":
      country = "Ukraine";
      break;
    case "washington":
      country = "USA";
      break;
    case "london":
      country = "UK";
      break;
    default:
      alert(`You live in city of ${residencePlace}`);
  }
}

if (residencePlace && country) {
  alert(`You live in ${country}, which capital is ${residencePlace}`);
}

//Task #2
const champions = [
  {
    sport: "football",
    player: "Zinchenko",
  },
  {
    sport: "tennis",
    player: "Svitolina",
  },
  {
    sport: "jumping",
    player: "Mahuchikh",
  },
];

let favoriteSport = prompt("Please, enter your favorite sport");

if (!birthYear) {
  alert("It's a pity you didn't want to enter your birth year.");
}
if (!residencePlace) {
  alert("It's a pity you didn't want to enter your residence place.");
}
if (!favoriteSport) {
  alert("It's a pity you didn't want to enter your favorite sport.");
}

if (favoriteSport) {
  favoriteSport = favoriteSport.toLowerCase();
  for (let i = 0; i < champions.length; i += 1) {
    if (champions[i].sport === favoriteSport) {
      alert(`Wow! You want to be like ${champions[i].player}.`);
    }
  }
  alert(`I wish you to be a champion of ${favoriteSport}`);
}
