window.addEventListener("load", async () => {
    const deck = await getDeck();
    const response = await fetch(`https://www.deckofcardsapi.com/api/deck/${deck.deck_id}/draw/?count=8`)
    const cards = await response.json();
    const cardContainer = document.getElementsByClassName("cards-container")[0];
    cardContainer.removeChild(document.getElementsByClassName("loader")[0]);
    for (let i = 0; i < cards.cards.length; i++) {
        cardContainer.appendChild(createCard(cards.cards[i]["image"]));
    }
});

window.addEventListener("beforeunload", async () => {
    const deck = await getDeck();
    await fetch(`https://www.deckofcardsapi.com/api/deck/${deck.deck_id}/return/`);
});

async function getDeck() {
    let deck;
    const deckAsString = window.localStorage.getItem("deck");
    if (deckAsString == null) {
        const response = await fetch("https://www.deckofcardsapi.com/api/deck/new/shuffle/?cards=AS,AD,AC,AH,KS,KD,KC,KH,QS,QD,QC,QH,JS,JD,JC,JH,0S,0D,0C,0H,9S,9D,9C,9H");
        deck = await response.json();
        window.localStorage.setItem("deck", JSON.stringify(deck));
    } else {
        deck = JSON.parse(deckAsString);
    }

    return deck;
}

function createCard(image) {
    const card = document.createElement("img");
    card.setAttribute("src", image);
    card.setAttribute("class", "card");
    return card
}