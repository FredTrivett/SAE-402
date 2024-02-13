

// quand je clique sur la barre espace
document.addEventListener('keydown', function (event) {
    if (event.keyCode == 32) {
        var sceneEl = document.querySelector('a-scene');
        var entityEl = document.createElement('a-entity');
        sceneEl.appendChild(entityEl);
    }
});

