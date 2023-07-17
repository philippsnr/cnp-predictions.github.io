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

        date = game["Date"];
        time = game["Time"];

        add_game(th, result, ta, date, time);
    }
}

function add_game(th, res, ta, date, time)
{
    const all_games = document.getElementById("all-games");
    const game = document.createElement("div");

    info = createInfo(date, time);

    game.appendChild(info);

    row = createGameRow(th, res, ta);

    game.appendChild(row);

    all_games.appendChild(game);
}

function createInfo(date, time){
    info = document.createElement("div");
    info.classList.add("info");

    i = document.createElement("span");
    i.textContent = "i";
    i.classList.add("info-button");
    info.appendChild(i);

    content = document.createElement("span");
    content.textContent = date + " " + time;
    content.classList.add("info-content");
    info.appendChild(content);

    return info;
}

function createGameRow(th, res, ta)
{
    trikot1 = create_img('assets/trikots/' + th + '.png');
    th_div = create_div(th, "th");
    res_div = create_div(res, "result");
    ta_div = create_div(ta, "ta");
    trikot2 = create_img('assets/trikots/' + ta + '.png');
    
    const row = document.createElement("div");
    row.appendChild(trikot1);
    row.appendChild(th_div);
    row.appendChild(res_div);
    row.appendChild(ta_div);
    row.appendChild(trikot2);
    row.classList.add("row")

    return row;
}

function create_div(text, class_name)
{
    const textnode = document.createTextNode(text);
    if(window.mobileCheck() == true){
        textnode.textContent = get_shortname(text);
    }
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

function get_shortname(longname) {
    switch(longname) {
        case "FC Bayern":
          return "Bayern";
        case "Eintracht Frankfurt":
            return "Frankfurt";
        default:
          return longname;
      }
}

window.mobileCheck = function() {
    let check = false;
    (function(a){if(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(a)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0,4))) check = true;})(navigator.userAgent||navigator.vendor||window.opera);
    return check;
  };

document.addEventListener("DOMContentLoaded", function () {
    update_ui();
});