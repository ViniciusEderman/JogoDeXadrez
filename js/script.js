// criação de variáveis:
let x = document.querySelector(".x");
let o = document.querySelector(".o");
let boxes = document.querySelectorAll(".box");
let buttons = document.querySelectorAll("#buttons-container button");
let messages = document.querySelector("#message");
let messagesText = document.querySelector("#message p");
let secondPLayer;
let player1 = 0;
let player2 = 0;

// algoritmo: 
for(let i = 0; i < boxes.length; i++) {

    boxes[i].addEventListener("click", function() {
        let element = checarElemento(player1, player2);

        if(this.childNodes.length == 0) {

            let cloneElement = element.cloneNode(true);
            this.appendChild(cloneElement);

            if(player1 ==  player2) {
                player1++;
                if(secondPLayer == 'contraComputador') {
                    computerPlay();
                    player2++;
                }
            }
            else {
                player2++
            }
            checharCondicaoVitoria();
        }
    });
}

for(let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener("click", function() {
        secondPLayer = this.getAttribute("id");

        for(j = 0; j < buttons.length; j++) {
            buttons[j].style.display = 'none';
        }

        setTimeout(function() {
            let container = document.querySelector("#container");
            container.classList.remove("hide");
        }, 500);
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

function checharCondicaoVitoria() {
     let box1 = document.getElementById("box-1");
     let box2 = document.getElementById("box-2");
     let box3 = document.getElementById("box-3");
     let box4 = document.getElementById("box-4");
     let box5 = document.getElementById("box-5");
     let box6 = document.getElementById("box-6");
     let box7 = document.getElementById("box-7");
     let box8 = document.getElementById("box-8");
     let box9 = document.getElementById("box-9");

     // verificação horizontal:
     if((box1.childNodes.length > 0) && (box2.childNodes.length > 0) && (box3.childNodes.length > 0)) {
        let box1Child = box1.childNodes[0].className;
        let box2Child = box2.childNodes[0].className;
        let box3Child = box3.childNodes[0].className;

        if(box1Child == 'x' && box2Child == 'x' && box3Child == 'x') {
            declarVencer('x');
        }
        else if(box1Child == 'o' && box2Child == 'o' && box3Child == 'o') {
            declarVencer('o');
        }
     }

     if((box4.childNodes.length > 0) && (box5.childNodes.length > 0) && (box6.childNodes.length > 0)) {
        let box4Child = box4.childNodes[0].className;
        let box5Child = box5.childNodes[0].className;
        let box6Child = box6.childNodes[0].className;

        if(box4Child == 'x' && box5Child == 'x' && box6Child == 'x') {
            declarVencer('x');
        }
        else if(box4Child == 'o' && box5Child == 'o' && box6Child == 'o') {
            declarVencer('o');
        }
     }

     if((box7.childNodes.length > 0) && (box8.childNodes.length > 0) && (box9.childNodes.length > 0)) {
        let box7Child = box7.childNodes[0].className;
        let box8Child = box8.childNodes[0].className;
        let box9Child = box9.childNodes[0].className;

        if(box7Child == 'x' && box8Child == 'x' && box9Child == 'x') {
            declarVencer('x');
        }
        else if(box7Child == 'o' && box8Child == 'o' && box9Child == 'o') {
            declarVencer('o');
        }
     }

     // verificação vertical:
     if((box1.childNodes.length > 0) && (box4.childNodes.length > 0) && (box7.childNodes.length > 0)) {
        let box1Child = box1.childNodes[0].className;
        let box4Child = box4.childNodes[0].className;
        let box7Child = box7.childNodes[0].className;

        if(box1Child == 'x' && box4Child == 'x' && box7Child == 'x') {
            declarVencer('x');
        }
        else if(box1Child == 'o' && box4Child == 'o' && box7Child == 'o') {
            declarVencer('o');
        }
     }

     if((box2.childNodes.length > 0) && (box5.childNodes.length > 0) && (box8.childNodes.length > 0)) {
        let box2Child = box2.childNodes[0].className;
        let box5Child = box5.childNodes[0].className;
        let box8Child = box8.childNodes[0].className;

        if(box2Child == 'x' && box5Child == 'x' && box8Child == 'x') {
            declarVencer('x');
        }
        else if(box2Child == 'o' && box5Child == 'o' && box8Child == 'o') {
            declarVencer('o');
        }
     }

     if((box3.childNodes.length > 0) && (box6.childNodes.length > 0) && (box9.childNodes.length > 0)) {
        let box3Child = box3.childNodes[0].className;
        let box6Child = box6.childNodes[0].className;
        let box9Child = box9.childNodes[0].className;

        if(box3Child == 'x' && box6Child == 'x' && box9Child == 'x') {
            declarVencer('x');
        }
        else if(box3Child == 'o' && box6Child == 'o' && box9Child == 'o') {
            declarVencer('o');
        }
     }

     // verifacação de vitória na diagonal:
     if((box1.childNodes.length > 0) && (box5.childNodes.length > 0) && (box9.childNodes.length > 0)) {
        let box1Child = box1.childNodes[0].className;
        let box5Child = box5.childNodes[0].className;
        let box9Child = box9.childNodes[0].className;

        if(box1Child == 'x' && box5Child == 'x' && box9Child == 'x') {
            declarVencer('x');
        }
        else if(box1Child == 'o' && box5Child == 'o' && box9Child == 'o') {
            declarVencer('o');
        }
     }

     if((box3.childNodes.length > 0) && (box5.childNodes.length > 0) && (box7.childNodes.length > 0)) {
        let box3Child = box3.childNodes[0].className;
        let box5Child = box5.childNodes[0].className;
        let box7Child = box7.childNodes[0].className;

        if(box3Child == 'x' && box5Child == 'x' && box7Child == 'x') {
            declarVencer('x');
        }
        else if(box3Child == 'o' && box5Child == 'o' && box7Child == 'o') {
            declarVencer('o');
        }
     }
     //condição de empate:
     let counter = 0;
     for(let i = 0; i < boxes.length; i++) {
        if(boxes[i].childNodes[0] != undefined) {
            counter++;
        }
     }

     if(counter == 9) {
        declarVencer("Deu velha");
     }
}

function declarVencer(winner) {
    let scoreBoardX = document.querySelector("#score-1");
    let scoreBoardO = document.querySelector("#score-2");
    let msg = '';

    if(winner == 'x') {
        scoreBoardX.textContent = parseInt(scoreBoardX.textContent) + 1;
        msg = 'O jogador um ganhou o jogo';
    }
    else if(winner == 'o') {
        scoreBoardO.textContent = parseInt(scoreBoardO.textContent) + 1;
        msg = 'O jogador dois ganhou o jogo';
    }
    else {
        msg = 'Deu velha';
    }

    messagesText.innerHTML = msg;
    message.classList.remove("hide");

    setTimeout(function () {
        message.classList.add("hide");
    }, 3000);

    player1 = 0;
    player2 = 0;

    let boxesRemove = document.querySelectorAll(".box div");

    for(let i = 0; i < boxesRemove.length; i++) {
        boxesRemove[i].parentNode.removeChild(boxesRemove[i]);
    }
}

function computerPlay() {
    let cloneO = o.cloneNode(true);
    counter = 0;
    filled = 0;

    for(let i = 0; i < boxes.length; i++) {
        let randomNumber = Math.floor(Math.random() * 5);

        if(boxes[i].childNodes[0] == undefined) {
            if(randomNumber <= 1) {
                boxes[i].appendChild(cloneO);
                counter++;
                break;
            }
        }
        else {
            filled++;
        }
    }
    if(counter == 0 && filled < 9) {
        computerPlay();
    }
}