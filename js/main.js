import common from './data/common.js';
import objects from './data/objects.js';
import trashes from './data/trashes.js';
import startTimer from './timer.js';
import { V } from './view.js';

let score = 0;
let objectRemoved = 0;
const { stopTimer, resetTimer } = startTimer();



function playSound(type) {
    var audio = document.getElementById("sound" + type);
    audio.play();
}


function groundCollision(e) {
    setTimeout(function () {
        let targetId = e.detail.target.el.id;
        let targetNode = e.detail.target.el;


        for (let object in objects) {
            if (targetId == objects[object].name + '-box') {
                V.createObject(common, objects[object]);
            }
        }

        if (targetId != 'plaquette' && targetId != 'ground' && targetId != 'radio') {
            targetNode.parentNode.removeChild(targetNode);
        }
    }, 1);

}



function trashCollision(e) {
    setTimeout(function () {
        let targetNode = e.detail.target.el;
        let objectclass = e.detail.target.el.classList.item(0);
        let trashclass = e.detail.body.el.classList.item(0);

        if (targetNode.classList.contains('trashHitbox')) {
            targetNode = e.detail.body.el;
        }
        targetNode.parentNode.removeChild(targetNode);
        objectRemoved++;

        if (trashclass == objectclass) {
            score += 100;
            playSound('+');
        } else if (trashclass != null && objectclass != null) {
            score -= 50;
            playSound('-');
        }
        if (score < 0) {
            score = 0;
        }
        document.querySelector('#pointsText').setAttribute('text', 'value:Points: ' + score);

        if (objectRemoved >= Object.keys(objects).length) {

            console.log('Game over');
            // create text element game over
            let gameOver = document.createElement('a-text');
            gameOver.setAttribute('id', 'gameOver');
            gameOver.setAttribute('value', 'Game Over');
            gameOver.setAttribute('position', '0 2 -5');
            gameOver.setAttribute('color', 'red');
            gameOver.setAttribute('align', 'center');
            gameOver.setAttribute('width', '10');
            document.querySelector('a-scene').appendChild(gameOver);

            // create play button
            let playButton = document.createElement('a-image');
            playButton.setAttribute('id', 'playbutton');
            playButton.setAttribute('class', 'collidable');
            playButton.setAttribute('src', '#play');
            playButton.setAttribute('position', '0 1.2 -1');
            playButton.setAttribute('width', '0.54');
            playButton.setAttribute('height', '0.25');
            document.querySelector('a-scene').appendChild(playButton);
            objectRemoved = 0;
            setTimeout(stopTimer, 0);

        }
    }, 0);

}





for (let i = 0; i < Object.keys(trashes).length; i++) {
    V.createTrash(common, trashes[i]);

}

AFRAME.registerComponent('collider-check', {
    dependencies: ['raycaster'],

    init: function () {


        document.querySelector('#ground').addEventListener('collide', groundCollision);

        document.querySelectorAll('.trashHitbox').forEach(item => { item.addEventListener('collide', trashCollision); });

        this.el.addEventListener('click', function () {
            console.log('Player clicked something!');
            score = 0;
            document.querySelector('#pointsText').setAttribute('text', 'value:Points: ' + score);
            setTimeout(resetTimer, 0);
            // delete play button

            document.querySelectorAll('.hand').forEach(item => {
                item.setAttribute('raycaster', { showLine: false });
            });
            let playButton = document.querySelector('#playButton');
            let rules = document.querySelector('#rulesbutton');
            // try to remove game over
            try {
                let gameOver = document.querySelector('#gameOver');
                gameOver.parentNode.removeChild(gameOver);
            }
            catch (e) {
                console.log('no game over');
            }
            playButton.parentNode.removeChild(playButton);
            try {
                rules.parentNode.removeChild(rulesbutton);
            }
            catch (e) {
                console.log('no rules button');
            }

            for (let i = 0; i < Object.keys(objects).length; i++) {
                V.createObject(common, objects[i]);
            }

        });
    }
});

