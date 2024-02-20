
let V = {}

V.createObject = function (common, object) {
    const SCENE = document.querySelector('a-scene');

    let entity = document.createElement('a-entity');
    entity.setAttribute('geometry', object.geometry);
    entity.setAttribute('dynamic-body', {});
    entity.setAttribute('position', object.boxPosition);
    entity.setAttribute('material', common.material);
    entity.classList.add(common.class);
    entity.classList.add(common.selector);
    entity.classList.add(object.class);
    entity.setAttribute('id', object.name + '-box');

    let entityChild = document.createElement('a-entity');
    entityChild.setAttribute('gltf-model', '#' + object.name + '-glb');
    entityChild.setAttribute('id', object.name + '-object');
    entityChild.setAttribute('scale', common.scale);
    entityChild.setAttribute('position', object.childPosition);

    entity.appendChild(entityChild);

    SCENE.appendChild(entity);
}

V.createTrash = function (common, trashes) {
    const SCENE = document.querySelector('a-scene');

    let parent = document.createElement('a-entity');
    parent.setAttribute('position', trashes.itemPosition);
    parent.setAttribute('rotation', { x: 0, y: 0, z: 0 });

    let entity = document.createElement('a-entity');
    entity.setAttribute('gltf-model', '#' + trashes.model);
    entity.setAttribute('scale', trashes.objectScale);
    entity.setAttribute('id', trashes.model + '-model');

    parent.appendChild(entity);

    for (let elt in trashes.boxesData) {
        let entityChild = document.createElement('a-entity');
        entityChild.setAttribute('material', common.material);
        entityChild.setAttribute('geometry', trashes.boxesData[elt].geometry);
        entityChild.setAttribute('static-body', {});
        entityChild.setAttribute('position', trashes.boxesData[elt].position);
        entityChild.setAttribute('scale', common.trash.boxesSizes);

        if (elt == 5) {
            entityChild.setAttribute('id', trashes.model + '-bottom');
            entityChild.classList.add('trashHitbox');
            entityChild.classList.add(trashes.class);

        }

        parent.appendChild(entityChild);
    }

    SCENE.appendChild(parent);
}

export { V }