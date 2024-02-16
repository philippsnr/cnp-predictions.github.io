// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.2/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.7.2/firebase-analytics.js";

import { getFirestore, collection, getDocs } from 'firebase/firestore/lite';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAEfhHIJa7Er-RSMjXVJZ6q8tiGx6WFPhU",
  authDomain: "cnp-predictions.firebaseapp.com",
  projectId: "cnp-predictions",
  storageBucket: "cnp-predictions.appspot.com",
  messagingSenderId: "100648861648",
  appId: "1:100648861648:web:a49000994a76b1864943d5",
  measurementId: "G-VBTJSCG3XC"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app);

function query2(sql_order) {
    var link = "https://proxy.cnp-predictions.de/query2.php?sql=";
    var sql_order = encodeURIComponent(sql_order);
    var theUrl = link + sql_order;

    return fetch(theUrl)
        .then(response => response.json())
        .catch(error => {
            console.error('Error:', error);
        });
}

async function reveal_prediction(game_number) {
    var game = document.getElementById(`game${game_number}`);

    var prediction_button = game.getElementsByClassName("prediction-button")[0];
    prediction_button.classList.add("hidden");

    var spinner = game.getElementsByClassName("spinner")[0];
    spinner.classList.remove("hidden");

    await delay(3000);

    var spinnerRect = spinner.getBoundingClientRect();
    var spinnerX = spinnerRect.left + spinnerRect.width / 2;
    var spinnerY = spinnerRect.top + spinnerRect.height / 2;
    spinner.classList.add("hidden");

    var result = game.getElementsByClassName("result")[0];
    result.classList.remove("hidden");

    confetti({
        particleCount: 50,
        spread: 45,
        startVelocity: 15,
        ticks: 100,
        colors: ["00D1CD", "#F8FABB"],
        origin: { x: spinnerX / window.innerWidth, y: (spinnerY + 50) / window.innerHeight }
    });
}


const delay = (delayInms) => {
    return new Promise(resolve => setTimeout(resolve, delayInms));
};

async function get_games_from_matchday(liga, season, matchday) {
    const gamesRef = database.ref(`${liga}`).orderByChild("Saison").equalTo(season).orderByChild("Spieltag").equalTo(matchday);
    
    try {
      const gamesSnapshot = await gamesRef.once('value');
      const gamesData = gamesSnapshot.val();
  
      if (!gamesData) {
        console.error("Keine Spiele gefunden.");
        return null;
      }
  
      const games = Object.values(gamesData);
      const predictions = [];
  
      for (let i = 0; i < games.length; i++) {
        const predictionsRef = database.ref('Predictions').orderByChild('ID').equalTo(games[i].ID);
        const predictionsSnapshot = await predictionsRef.once('value');
        const predictionData = predictionsSnapshot.val();
        
        if (predictionData) {
          const prediction = Object.values(predictionData)[0].Prediction;
          predictions.push(prediction);
        } else {
          predictions.push(null);
        }
      }
  
      return [games, predictions];
    } catch (error) {
      console.error("Fehler beim Abrufen der Daten:", error);
      return null;
    }
  }

async function get_games_from_matchday2(liga, season, matchday) {
    const games = await query2(`SELECT * FROM ${liga} WHERE Saison = '${season}' AND Spieltag = ${matchday} ORDER BY ID`);
    predictions = []
    for (i = 0; i < games.length; i++) {
        r = await query2(`SELECT * FROM Predictions WHERE ID = "${games[i]["ID"]}"`);
        predictions.push(r[0]["Prediction"]);
    }
    return [games, predictions];
}

async function update_ui() {
    var i1 = parent.document.URL.indexOf('?') + 1;
    var i2 = parent.document.URL.length;
    var league = parent.document.URL.substring(i1, i2);
    console.log(league);

    var matchday = await get_matchday(league);
    console.log("matchday" + matchday);
    const all_games = document.getElementById("all-games");
    const spieltag = document.createElement("div");
    spieltag.textContent = "Spieltag " + matchday;
    spieltag.classList.add("spieltag");
    all_games.appendChild(spieltag);

    var comp = competitions[league];
    var [games, predictions] = await get_games_from_matchday(comp, "2023-2024", matchday);
    
    if(games.length == 0) {
        var wait_div = document.createElement("p");
        wait_div.textContent = "This matchday will be available soon...!"
        wait_div.classList.add("matchday-wait");
        var gameslist = document.getElementById("all-games");
        gameslist.appendChild(wait_div);
        return;
    }

    /*games = games.concat(games);*/
    for (var i = 0; i < games.length; i++) {
        game = games[i];
        game_id = game["ID"];

        hg = predictions[i].split(":")[0]
        ag = predictions[i].split(":")[1]

        var result = `${hg} : ${ag}`;

        th = game["HomeTeam"];
        ta = game["AwayTeam"];

        date = game["Date"];
        time = game["Time"];

        add_game(game_id, league, th, result, ta, date, time);
    }
}

async function get_matchday(league) {
    var shedule = await load_schedule(league);
    console.log("shedule", shedule);
    var now = new Date();
    now.setHours(0, 0, 0, 0);

    for (let i in shedule) {
        matchday = shedule[i];
        t2 = matchday["t2"];

        // Extrahiere Tag, Monat und Jahr aus dem String
        var endDate = t2.split(".");
        var tag = parseInt(endDate[0]);
        var monat = parseInt(endDate[1]) - 1; // Monate in JavaScript starten bei 0 (Januar ist 0, Februar ist 1, usw.)
        var jahr = parseInt(endDate[2]);

        // Erstelle ein Date-Objekt aus dem vorgegebenen Datum
        var datum = new Date(jahr, monat, tag);

        if (datum < now) {
            continue;
        }
        return i.slice(1, i.length)
    }
}

async function load_schedule(league) {
    let response = await fetch('../spielplaene/' + league + '.json');
    let data = await response.json();
    return data;
}


function add_game(game_id, league, th, res, ta, date, time) {
    const all_games = document.getElementById("all-games");
    const game = document.createElement("div");

    //info = createInfo(date, time);

    //game.appendChild(info);

    row = createGameRow(game_id, league, th, res, ta);

    game.appendChild(row);

    game_number = game_id.split("-")[4]
    game.setAttribute("id", `game${game_number}`)

    all_games.appendChild(game);
}

function createInfo(date, time) {
    info = document.createElement("div");
    info.classList.add("info");

    i = document.createElement("button");
    i.textContent = "i";
    i.classList.add("info-button");
    info.appendChild(i);

    content = document.createElement("span");
    content.textContent = date + " " + time;
    content.classList.add("info-content");
    info.appendChild(content);

    return info;
}

function createGameRow(game_id, league, th, res, ta) {
    trikot1 = create_img('assets/trikots/' + league + '/' + th + '.png', "trikot");
    th_div = create_div(th, "th");

    middle = document.createElement("div");
    middle.classList.add("middle")

    prediction_button = create_prediction_button(game_id);
    middle.appendChild(prediction_button)
    spinner = create_spinner();
    middle.appendChild(spinner)
    res_div = create_div(res, "result");
    res_div.classList.add("hidden");
    middle.appendChild(res_div)

    ta_div = create_div(ta, "ta");
    trikot2 = create_img('assets/trikots/' + league + '/' + ta + '.png', "trikot");

    const row = document.createElement("div");
    row.appendChild(trikot1);
    row.appendChild(th_div);
    row.appendChild(middle);
    row.appendChild(ta_div);
    row.appendChild(trikot2);
    row.classList.add("row")

    return row;
}

function create_prediction_button(game_id) {

    const predict_icon = document.createElement("img");
    predict_icon.setAttribute("src", "assets/calculator.png")
    predict_icon.classList.add("predict-icon");

    const new_div = document.createElement("div");
    new_div.appendChild(predict_icon);
    new_div.classList.add("prediction-button")

    game_number = game_id.split("-")[4]
    new_div.setAttribute("onclick", `reveal_prediction(${game_number})`)

    return new_div;
}

function create_spinner() {
    var spinner_div = document.createElement("div");
    spinner_div.classList.add("spinner");
    spinner_div.classList.add("hidden")
    return spinner_div;
}

function create_div(text, class_name) {
    const textnode = document.createTextNode(text);
    if (window.mobileCheck() == true) {
        textnode.textContent = get_shortname(text);
    }
    const text_element = document.createElement("p");
    text_element.appendChild(textnode);
    const new_div = document.createElement("div");
    new_div.appendChild(text_element);
    new_div.classList.add(class_name)

    return new_div;
}

function create_img(src, class_name) {
    const image = document.createElement("img");
    image.setAttribute("src", src);
    image.classList.add(class_name);

    return image;
}

function get_shortname(longname) {
    if (longname in bundesliga) {
        return bundesliga[longname];
    }
    if (longname in premierleague) {
        return premierleague[longname];
    }
    if (longname in seriea) {
        return seriea[longname];
    }
    if (longname in laliga) {
        return laliga[longname];
    }
    if (longname in ligue1) {
        return ligue1[longname];
    }
    return longname;
}

window.mobileCheck = function () {
    let check = false;
    (function (a) { if (/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(a) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0, 4))) check = true; })(navigator.userAgent || navigator.vendor || window.opera);
    return check;
};

const competitions = {
    "Bundesliga": "Bundesliga",
    "PremierLeague": "England",
    "SerieA": "Italien",
    "LaLiga": "Spanien",
    "Ligue1": "Frankreich"
}

const bundesliga = {
    "FC Bayern": "Bayern",
    "Eintracht Frankfurt": "Frankfurt",
    "FC Augsburg": "Augsburg",
    "SC Freiburg": "Freiburg",
    "VfL Bochum": "Bochum",
    "Mainz 05": "Mainz",
    "Werder Bremen": "Bremen",
    "Borussia Dortmund": "Dortmund",
    "VfB Stuttgart": "Stuttgart",
    "RB Leipzig": "Leipzig",
    "VfL Wolfsburg": "Wolfsburg",
    "Bayer Leverkusen": "Leverkusen",
    "FC Heidenheim": "Heidenheim",
    "SV Darmstadt 98": "Darmstadt",
    "Union Berlin": "Union Berlin",
    "FC Köln": "Köln",
    "B. M.Gladbach": "Gladbach",
    "TSG Hoffenheim": "Hoffenheim",
}

const premierleague = {
    "FC Burnley": "Burnley",
    "Manchester City": "Man. City",
    "FC Arsenal": "Arsenal",
    "Nottingham Forest": "Nottingham",
    "AFC Bournemouth": "Bournemouth",
    "West Ham United": "West Ham",
    "FC Brighton": "Brighton",
    "Luton Town": "Luton Town",
    "FC Everton": "Everton",
    "FC Fulham": "Fulham",
    "Sheffield United": "Sheffield",
    "Crystal Palace": "Crystal Palace",
    "Newcastle United": "Newcastle",
    "Aston Villa": "Aston Villa",
    "FC Brentford": "Brentford",
    "Tottenham Hotspur": "Tottenham",
    "FC Chelsea": "Chelsea",
    "FC Liverpool": "Liverpool",
    "Manchester United": "Man. United",
    "Wolverhampton": "Wolves"
};

const seriea = {
    "FC Empoli": "Empoli",
    "Hellas Verona": "Verona",
    "Frosinone Calcio": "Frosinone",
    "SSC Napoli": "Napoli",
    "CFC Genoa": "Genoa",
    "ACF Fiorentina": "Fiorentina",
    "Inter Milan": "Inter",
    "AC Monza": "Monza",
    "AS Roma": "Roma",
    "US Salernitana": "Salernitana",
    "US Sassuolo": "Sassuolo",
    "Atalanta Bergamo": "Atalanta",
    "US Lecce": "Lecce",
    "SS Lazio": "Lazio",
    "Udinese Calcio": "Udinese",
    "Juventus Turin": "Juventus",
    "FC Torino": "Torino",
    "Cagliari Calcio": "Cagliari",
    "FC Bologna": "Bologna",
    "AC Milan": "Milan"
};

const laliga = {
    "UD Almeria": "Almeria",
    "Rayo Vallecano": "Rayo Vallecano",
    "FC Sevilla": "Sevilla",
    "FC Valencia": "Valencia",
    "Real Sociedad": "Real Sociedad",
    "FC Girona": "Girona",
    "UD Las Palmas": "Las Palmas",
    "RCD Mallorca": "Mallorca",
    "Athletic Bilbao": "Bilbao",
    "Real Madrid": "Real Madrid",
    "Celta Vigo": "Celta Vigo",
    "CA Osasuna": "Osasuna",
    "FC Villarreal": "Villarreal",
    "Real Betis": "Real Betis",
    "FC Getafe": "Getafe",
    "FC Barcelona": "Barcelona",
    "FC Cadiz": "Cadiz",
    "CD Alaves": "Alaves",
    "Atletico Madrid": "Atletico Madrid",
    "CF Granada": "Granada"
};

const ligue1 = {
    "Clermont Foot": "Clermont",
    "AS Monaco": "Monaco",
    "FC Nantes": "Nantes",
    "FC Toulouse": "Toulouse",
    "HSC Montpellier": "Montpellier",
    "Havre AC": "Havre AC",
    "OGC Nice": "Nice",
    "LOSC Lille": "Lille",
    "Olympique Marseille": "Marseille",
    "Stade Reims": "Reims",
    "Paris Saint-Germain": "Paris SG",
    "FC Lorient": "Lorient",
    "RC Strasbourg": "Strasbourg",
    "Olympique Lyonnais": "Lyon",
    "Stade Brestois": "Brest",
    "RC Lens": "Lens",
    "Stade Rennes": "Rennes",
    "FC Metz": "Metz"
};