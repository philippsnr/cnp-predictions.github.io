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
    /*games = games.concat(games);*/
    console.log(games);
    for(var i = 0; i < games.length; i++)
    {
        game = games[i];
        hg = game["FTHG"];
        ag = game["FTAG"];

        var result = `${hg} : ${ag}`;

        th = game["HomeTeam"];
        ta = game["AwayTeam"];
        add_game(th, result, ta);
    }
}

function add_game(th, res, ta)
{
    const all_games = document.getElementById("all-games");
    const row = document.createElement("div");

    trikot1 = create_img("assets\\trikots\\arsenal.png");
    th_div = create_div(th, "th");
    res_div = create_div(res, "result");
    ta_div = create_div(ta, "ta");
    trikot2 = create_img("assets\\trikots\\arsenal.png");
    
    row.appendChild(trikot1);
    row.appendChild(th_div);
    row.appendChild(res_div);
    row.appendChild(ta_div);
    row.appendChild(trikot2);

    row.classList.add("row")

    all_games.appendChild(row);
}

function create_div(text, class_name)
{
    const textnode = document.createTextNode(text);
    const text_element = document.createElement("p");
    text_element.appendChild(textnode);
    const new_div = document.createElement("div");
    new_div.appendChild(text_element);
    new_div.classList.add(class_name)

    return new_div;
}

function create_img(src)
{
    const image = document.createElement("img");
    image.setAttribute("src", src);
    image.classList.add("trikot");

    return image;
}

document.addEventListener("DOMContentLoaded", function () {
    update_ui();
});