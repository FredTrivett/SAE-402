import common from './data/common.js';
import objects from './data/objects.js';
import trashes from './data/trashes.js';
import startTimer from './timer.js';
import { V } from './view.js';

let score = 0;


startTimer();

for (let i = 0; i < Object.keys(objects).length; i++) {
    V.createObject(common, objects[i]);
}

for (let i = 0; i < Object.keys(trashes).length; i++) {
    V.createTrash(common, trashes[i]);
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
        let targetNode = e.detail.body.el;
        let trashclass = e.detail.target.el.classList.item(1);
        let objectclass = e.detail.body.el.classList.item(1);

        targetNode.parentNode.removeChild(targetNode);

        let pointsText = document.querySelector('#pointText');
        if (trashclass == objectclass) {
            score += 2;
        } else {
            score -= 1;
        }
        pointsText.setAttribute('text', 'value:Points: ' + score);
    }, 0);

}

document.querySelector('#ground').addEventListener('collide', groundCollision);

document.querySelectorAll('.trashHitbox').forEach(item => { item.addEventListener('collide', trashCollision); });

