async function load_game() {
    const urlParams = new URLSearchParams(window.location.search);
    league = urlParams.get('competition');
    game_id = urlParams.get('gameID');

    game = await get_game_by_id(league, game_id)

    insert_header(game);
    insert_names(game);

}

function insert_header(game) {
    var header = document.getElementById("game-header");
    header.textContent = game["Date"];
}

function insert_names(game) {
    var homeTeam_name = document.getElementById("team-left");
    homeTeam_name.textContent = game["HomeTeam"];
    var awayTeam_name = document.getElementById("team-right");
    awayTeam_name.textContent = game["AwayTeam"];
}

async function get_game_by_id(league, game_id) {
    tabellenname = get_tablename(league);

    const sql = `SELECT * FROM ${tabellenname} WHERE ID = "${game_id}"`;
    r = await query(sql);
    return r[0]
}

function get_tablename(league) {
    switch (league) {
        case "Bundesliga":
            return "Bundesliga";
        case "PremierLeague":
            return "England";
        case "Ligue1":
            return "Frankreich";
        case "LaLiga":
            return "Spanien";
        case "SerieA":
            return "Italien";
        default:
            console.log("Error reading league");
    }
}