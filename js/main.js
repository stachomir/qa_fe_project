

let project1_banner = document.querySelector(".portfolio__project1");

project1_banner.addEventListener('click', function(){
    window.open("project_card/index.html", "_blank")
})






// example functions to attach html

function attachHTML(container, content) {
    container.appendChild(content);
}

function getCard() {
    let cardHMTLContent = '';
    cardHMTLContent += getCardHeader();
    cardHMTLContent += getCardBody();

    const cardHTML = document.createElement('div');
    cardHTML.innerHTML = cardHMTLContent;

    return cardHTML;
}

function getCardHeader() {
    return `
 <div class="card-header">
 <div class="player-card__player-basic-data">
 <div class="player-card__data-row player-card__data-row--main">
 <p></p>
 </div>
 <div class="player-card__data-row">
 <p>CF</p>
 </div>
 <div class="player-card__data-row">
 <img class="player-card__crest_image" alt="france flag" src="img/flags/france.png">
 </div>
 <div class="player-card__data-row">
 <img class="player-card__crest_image" alt="parma crest" src="img/crests/parma.png">
 </div>
 </div>
 <div>
 <img class="player-card__player-image" alt="thierry henry" src="img/players/henry.png">
 </div>
 </div>
 </div>
 `
}

function getCardBody() {

    return `
 <div class="card-body">
 <div class="player-card__player_name">
 <p>Henry</p>
 </div>
 <div class="player-card__statistic_row">
 <div class="player-card__attribute">attack</div>
 <div class="player-card__value">93</div>
 </div>
 <div class="player-card__statistic_row">
 <div class="player-card__attribute">defence</div>
 <div class="player-card__value">56</div>
 </div>
 <div class="player-card__statistic_row">
 <div class="player-card__attribute">stamina</div>
 <div class="player-card__value">92</div>
 </div>
 </div>
 `;
}