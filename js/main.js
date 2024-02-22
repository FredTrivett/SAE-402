import common from './data/common.js';
import objects from './data/objects.js';
import trashes from './data/trashes.js';
import startTimer from './timer.js';
import { V } from './view.js';

let score = 0;
let objectRemoved = 0;




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
            document.querySelector('#pointsText').setAttribute('text', 'value:Game over');

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
            startTimer();
            // delete play button

            document.querySelectorAll('.hand').forEach(item => {
                item.setAttribute('raycaster', { showLine: false });
            });
            let playButton = document.querySelector('#playButton');
            let rules = document.querySelector('#rulesbutton');
            playButton.parentNode.removeChild(playButton);
            rules.parentNode.removeChild(rulesbutton);
            for (let i = 0; i < Object.keys(objects).length; i++) {
                V.createObject(common, objects[i]);
            }

        });
    }
});

