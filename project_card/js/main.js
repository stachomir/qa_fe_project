




let countries = Object.keys(country_leagues);
countries.sort();

// home team elements
let home_left_country_arrow = document.querySelector(".teams-selection__team--home .teams-selection__arrow--country-left");
let home_right_country_arrow = document.querySelector(".teams-selection__team--home .teams-selection__arrow--country-right");
let home_country = document.querySelector(".teams-selection__team--home .teams-selection__country-name");
let home_country_flag = document.querySelector(".teams-selection__team--home .teams-selection__country-image img");
let home_team = document.querySelector(".teams-selection__team--home .teams-selection__team--name");
let home_team_crest = document.querySelector(".teams-selection__team--home .teams-selection__team--image img");
let home_left_team_arrow = document.querySelector(".teams-selection__team--home .teams-selection__arrow--team-left");
let home_right_team_arrow = document.querySelector(".teams-selection__team--home .teams-selection__arrow--team-right");

// away team elements
let away_left_country_arrow = document.querySelector(".teams-selection__team--away .teams-selection__arrow--country-left");
let away_right_country_arrow = document.querySelector(".teams-selection__team--away .teams-selection__arrow--country-right");
let away_country = document.querySelector(".teams-selection__team--away .teams-selection__country-name");
let away_country_flag = document.querySelector(".teams-selection__team--away .teams-selection__country-image img");
let away_team = document.querySelector(".teams-selection__team--away .teams-selection__team--name");
let away_team_crest = document.querySelector(".teams-selection__team--away .teams-selection__team--image img");
let away_left_team_arrow = document.querySelector(".teams-selection__team--away .teams-selection__arrow--team-left");
let away_right_team_arrow = document.querySelector(".teams-selection__team--away .teams-selection__arrow--team-right");

// home side default values
let a = 0;
home_country.textContent = countries[a];
let home_default_team = country_leagues[countries[a]].sort()
home_team.textContent = home_default_team[0];
home_country_flag.src = "../img/flags/"+home_country.textContent+".png";
home_team_crest.src = "../img/crests/"+home_team.textContent+".png";

// away side default values
let b = 1;
away_country.textContent = countries[b];
let away_default_team = country_leagues[countries[b]].sort()
away_team.textContent = away_default_team[0];
away_country_flag.src = "../img/flags/"+away_country.textContent+".png";
away_team_crest.src = "../img/crests/"+away_team.textContent+".png";

home_left_country_arrow.addEventListener('click', function(){
    a = a-1;
    if (a === -1) {a = countries.length-1}
    home_country.textContent = countries[a];
    home_country_flag.src = "../img/flags/"+home_country.textContent+".png";
    let teams = country_leagues[countries[a]].sort();
    home_team.textContent = teams[0];
    home_team_crest.src = "../img/crests/"+home_team.textContent+".png";

})
home_right_country_arrow.addEventListener('click', function(){
    a = (a+1)%countries.length;
    home_country.textContent = countries[a];
    home_country_flag.src = "../img/flags/"+home_country.textContent+".png";
    let teams = country_leagues[countries[a]].sort();
    home_team.textContent = teams[0];
    home_team_crest.src = "../img/crests/"+home_team.textContent+".png";
})

home_left_team_arrow.addEventListener('click', function () {
    let current_country = home_country.textContent;
    let current_team = home_team.textContent;
    let league_list = country_leagues[current_country];
    let index = league_list.indexOf(current_team);
    index = index - 1;
    if (index === -1) {index = league_list.length-1}
    home_team.textContent = league_list[index];
    home_team_crest.src = "../img/crests/"+home_team.textContent+".png";
})

home_right_team_arrow.addEventListener('click', function () {
    let current_country = home_country.textContent;
    let current_team = home_team.textContent;
    let league_list = country_leagues[current_country];
    let index = league_list.indexOf(current_team);
    index = (index+1)%league_list.length;
    home_team.textContent = league_list[index];
    home_team_crest.src = "../img/crests/"+home_team.textContent+".png";
})

away_left_country_arrow.addEventListener('click', function(){
    b = b-1;
    if (b === -1) {b = countries.length-1}
    away_country.textContent = countries[b];
    away_country_flag.src = "../img/flags/"+away_country.textContent+".png";
    let teams = country_leagues[countries[b]].sort();
    away_team.textContent = teams[0];
    away_team_crest.src = "../img/crests/"+away_team.textContent+".png";

})

away_right_country_arrow.addEventListener('click', function(){
    b = (b+1)%countries.length;
    away_country.textContent = countries[b];
    away_country_flag.src = "../img/flags/"+away_country.textContent+".png";
    let teams = country_leagues[countries[b]].sort();
    away_team.textContent = teams[0];
    away_team_crest.src = "../img/crests/"+away_team.textContent+".png";
})

away_left_team_arrow.addEventListener('click', function () {
    let current_country = away_country.textContent;
    let current_team = away_team.textContent;
    let league_list = country_leagues[current_country];
    let index = league_list.indexOf(current_team);
    index = index - 1;
    if (index === -1) {index = league_list.length-1}
    away_team.textContent = league_list[index];
    away_team_crest.src = "../img/crests/"+away_team.textContent+".png";
})

away_right_team_arrow.addEventListener('click', function () {
    let current_country = away_country.textContent;
    let current_team = away_team.textContent;
    let league_list = country_leagues[current_country];
    let index = league_list.indexOf(current_team);
    index = (index+1)%league_list.length;
    away_team.textContent = league_list[index];
    away_team_crest.src = "../img/crests/"+away_team.textContent+".png";
})