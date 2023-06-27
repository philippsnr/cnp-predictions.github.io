function query(sql_order) {
    var link = "https://proxy.cnp-predictions.de/query2.php?sql=";
    var sql_order = encodeURIComponent(sql_order);
    var theUrl = link + sql_order;

    return fetch(theUrl)
        .then(response => response.json())
        .then(data => data)
        .catch(error => {
            console.error('Error:', error);
        });
}

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

async function get_games_from_matchday(liga, season, matchday) {
    const result = await query2(`SELECT * FROM ${liga} WHERE Saison = '${season}' AND Spieltag = ${matchday}`);
    return result;
}

async function update_ui() {
    var games = await get_games_from_matchday("Bundesliga", "2022-2023", 1);
    console.log(games);
    const s1th = document.getElementById('s1th');
    for(var i = 0; i < 3; i++)
    {
        const sth = document.getElementById(`s${i+1}th`);
        const res = document.getElementById(`s${i+1}res`);
        const sta = document.getElementById(`s${i+1}ta`);

        hg = games[i]["FTHG"];
        ag = games[i]["FTAG"];

        var result = `${hg} : ${ag}`;

        sth.textContent = games[i]["HomeTeam"];
        res.textContent = result;
        sta.textContent = games[i]["AwayTeam"];
    }
    s1th.textContent = games[0]["HomeTeam"];
}

document.addEventListener("DOMContentLoaded", function () {
    update_ui();
});