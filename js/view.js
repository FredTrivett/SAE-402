
let V = {}

V.createObject = function (common, object) {
    const SCENE = document.querySelector('a-scene');

    let entity = document.createElement('a-entity');
    entity.setAttribute('geometry', object.geometry);
    entity.setAttribute('dynamic-body', {});
    entity.setAttribute('position', object.boxPosition);
    entity.setAttribute('material', common.material);
    entity.classList.add(object.class);
    entity.classList.add(common.selector);
    // entity.classList.add(common.class);
    entity.setAttribute('id', object.name + '-box');

    let entityChild = document.createElement('a-entity');
    entityChild.setAttribute('gltf-model', '#' + object.name + '-glb');
    entityChild.setAttribute('id', object.name + '-object');
    entityChild.setAttribute('scale', common.scale);
    entityChild.setAttribute('position', object.childPosition);

    entity.appendChild(entityChild);

    SCENE.appendChild(entity);
}

V.createTrash = function (common, trash) {
    const SCENE = document.querySelector('a-scene');

    let parent = document.createElement('a-entity');
    parent.setAttribute('position', trash.itemPosition);
    parent.setAttribute('rotation', trash.itemRotation);

    let entity = document.createElement('a-entity');
    entity.setAttribute('gltf-model', '#' + trash.model);
    entity.setAttribute('scale', common.trash.objectScale);
    entity.setAttribute('id', trash.model + '-model');

    parent.appendChild(entity);

    for (let elt in common.trash.boxesData) {
        let entityChild = document.createElement('a-entity');
        entityChild.setAttribute('material', common.material);
        entityChild.setAttribute('geometry', common.trash.boxesData[elt].geometry);
        entityChild.setAttribute('static-body', {});
        entityChild.setAttribute('position', common.trash.boxesData[elt].position);
        entityChild.setAttribute('scale', common.trash.boxesSizes);



        if (elt == 5) {
            entityChild.setAttribute('id', trash.model + '-bottom');
            entityChild.classList.add(trash.class);
            entityChild.classList.add('trashHitbox');

        }

        parent.appendChild(entityChild);
    }

    SCENE.appendChild(parent);
}

V.setScore = function (score) {
    if (score < 0) {
        score = 0;
    }
    let pointsText = document.querySelector('#pointsText');
    pointsText.setAttribute('text', 'value:Points: ' + score);
}

V.createScore = function (score) {

    let textNode = document.createElement('a-entity');
    textNode.setAttribute('text', 'value:' + score);
    textNode.setAttribute('position', { x: 0, y: 1.6, z: -0.8 });
    textNode.setAttribute('scale', { x: 3, y: 3, z: 3 });
    textNode.setAttribute('class', 'text');

    document.querySelector('a-scene').appendChild(textNode);

    gsap.to(textNode.object3D.position, { y: 1.5, }, 2)

    // setTimeout(function () {
    //     textNode.parentNode.removeChild(textNode);
    // }, 2000);

    return textNode;
}

export { V }