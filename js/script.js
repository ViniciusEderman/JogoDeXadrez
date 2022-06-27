
let x = document.querySelector(".x");
let o = document.querySelector(".o");
let boxes = document.querySelectorAll(".box");
let buttons = document.querySelectorAll("#buttons-container button");
let messages = document.querySelector("#message");
let messagesText = document.querySelector("#message p");

let secondPLayer;

let player1 = 0;
let player2 = 0;

for(let i = 0; i < boxes.length; i++) {

    boxes[i].addEventListener("click", function() {
        let element = checarElemento(player1, player2);

        if(this.childNodes.length == 0) {

            let cloneElement = element.cloneNode(true);
            this.appendChild(cloneElement);

            if(player1 ==  player2) {
                player1++;
            }
            else {
                player2++
            }
        }
    });
}

function checarElemento(player1, player2) {
    if(player1 == player2) {
        // player x
        element = x;
    }
    else {
        // player o
        element = o;
    }
    return element;
}