var messageCounter = 0;

window.addEventListener("submit", (msg) => {
    msg.preventDefault()
    let data = document.getElementById("message-form").value
    let chat = document.getElementsByClassName("chat-window")[0];

    if (data === "") {
        return;
    }

    let messageAuthorData = "123:";

    createMessage(chat, messageAuthorData, data);

    window.localStorage.setItem(messageCounter.toString(), JSON.stringify({
        "type":"msg", "author": messageAuthorData, "content": data
    }));
    messageCounter++;
});

window.addEventListener("load", () => {
    // window.localStorage.clear()
    let chat = document.getElementsByClassName("chat-window")[0];
    for (let i = 0; i < window.localStorage.length; i++) {
        let storageUnit = JSON.parse(window.localStorage.getItem(i.toString()));
        if (storageUnit.type === "msg") {
            createMessage(chat, storageUnit.author, storageUnit.content);
        }
    }
});

function createMessage(element, author, content) {
    let messageAuthor = document.createElement("span");
    messageAuthor.innerHTML = author;
    messageAuthor.setAttribute("class", "message-author");
    element.appendChild(messageAuthor);

    let messageContent = document.createElement("span");
    messageContent.innerHTML = content;
    messageContent.setAttribute("class", "message-content");
    element.appendChild(messageContent);
}