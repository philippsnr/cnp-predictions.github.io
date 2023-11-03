async function load_game(){
    const urlParams = new URLSearchParams(window.location.search);
    league = urlParams.get('competition');
    game_id = urlParams.get('gameID');

    game = await get_game_by_id(league, game_id)

    insert_header(game);
    insert_names(game);

}

function insert_header(game){
    var header = document.getElementById("game-header");
    header.textContent = game["Date"];
}

function insert_names(game){
    var homeTeam_name = document.getElementById("team-left");
    homeTeam_name.textContent = game["HomeTeam"];
    var awayTeam_name = document.getElementById("team-right");
    awayTeam_name.textContent = game["AwayTeam"];
}

async function get_game_by_id(league, game_id){
    const sql = `SELECT * FROM ${league} WHERE ID = "${game_id}"`;
    r = await query(sql);
    return r[0]
}