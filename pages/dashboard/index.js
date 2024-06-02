const cardContainer = document.querySelector('.card-container');

const cardData = [
    { heading: "heading1", content: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eaque unde aperiam nulla sit. Accusantium blanditiis delectus maiores suscipit voluptates quo quas architecto veritatis. Odio consequuntur voluptatum suscipit vitae repellendus numquam.", id: 1 },
    { heading: "heading2", content: "Hello People", id: 2 },
    { heading: "heading3", content: "Hello People", id: 3 },
    { heading: "heading4", content: "Hello People", id: 4 },
    { heading: "heading5", content: "Hello People", id: 5 },
    { heading: "heading6", content: "Hello People", id: 6 },
    { heading: "heading7", content: "Hello People", id: 7 },
    { heading: "heading8", content: "Hello People", id: 8 },
];

const createArray = (array) => {
    array.forEach(cardObj => {
        const {heading, content, id} = cardObj;

        const card = document.createElement("div");
        card.classList.add(".card");
        card.id = id;

        const insideHtml = `<div class="card" id="1"><div class="card-header"><div class="card-heading">${heading}</div><a href="../UpdateNotes/updateNotes.html?noteId=${id}"><div class="edit-note"><img src="../../images/edit.svg" alt="edit" /></div></a></div><div class="card-content">${content}</div></div>`;
        card.innerHTML = insideHtml;
        cardContainer.appendChild(card);
    }) 
}

createArray(cardData);

const body = document.querySelector('body');

window.addEventListener('load', () => {
    body.classList.add("visible");
});