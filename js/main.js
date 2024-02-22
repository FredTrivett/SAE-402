import common from './data/common.js';
import objects from './data/objects.js';
import trashes from './data/trashes.js';
import startTimer from './timer.js';
import { V } from './view.js';

let score = 0;




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

        if (targetId != 'plaquette' && targetId != 'ground') {
            targetNode.parentNode.removeChild(targetNode);
        }
    }, 1);

}




function trashCollision(e) {
    setTimeout(function () {
        let targetNode = e.detail.target.el;
        let objectclass = e.detail.target.el.classList.item(0);
        let trashclass = e.detail.body.el.classList.item(0);

        console.log(e.detail.target.el)
        console.log(e.detail.body.el)
        console.log('-----------------------------')
        console.log(objectclass);
        console.log(trashclass);

        if (targetNode.classList.contains('trashHitbox')) {
            targetNode = e.detail.body.el;
        }
        targetNode.parentNode.removeChild(targetNode);

        console.log(objectclass);
        console.log(trashclass);



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
        console.log(score);
        let pointsText = document.querySelector('#pointsText');
        pointsText.setAttribute('text', 'value:Points: ' + score);
    }, 0);

}

document.querySelector('#ground').addEventListener('collide', groundCollision);

document.querySelectorAll('.trashHitbox').forEach(item => { item.addEventListener('collide', trashCollision); });

for (let i = 0; i < Object.keys(objects).length; i++) {
    V.createObject(common, objects[i]);
}

for (let i = 0; i < Object.keys(trashes).length; i++) {
    V.createTrash(common, trashes[i]);

}

AFRAME.registerComponent('collider-check', {
    dependencies: ['raycaster'],

    init: function () {
        this.el.addEventListener('raycaster-intersection', function () {
            console.log('Player hit something!');

        });

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
            document.querySelectorAll('.object').forEach(item => {
                item.classList.add('cube');
            });

        });
    }
});

