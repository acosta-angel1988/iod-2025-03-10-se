const cardData = [
    { title: "Card 1", content: "This is the first card." },
    { title: "Card 2", content: "This is the second card." },
    { title: "Card 3", content: "This is the third card." },];
const container = document.getElementById("card-container"); 
cardData.forEach((card) => {
    const cardElement = document.createElement("div");
    cardElement.classList.add("card");
    const titleElement = document.createElement("h2");
    titleElement.textContent = card.title;
    const contentElement = document.createElement("p");
    contentElement.textContent = card.content;
    cardElement.appendChild(titleElement);
    cardElement.appendChild(contentElement);
    container.appendChild(cardElement);
});