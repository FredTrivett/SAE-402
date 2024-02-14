

// quand je clique sur la barre espace



function createObject(common, object) {
    const SCENE = document.querySelector('a-scene');


    let entity = document.createElement('a-entity');
    entity.setAttribute('geometry', object.geometry);
    entity.setAttribute('dynamic-body', {});
    entity.setAttribute('position', object.boxPosition);
    entity.setAttribute('material', common.material);
    entity.setAttribute('class', common.class);
    entity.setAttribute('id', object.name + '-box');
    entity.setAttribute('scale', common.hbScale);




    let entityChild = document.createElement('a-entity');
    entityChild.setAttribute('gltf-model', '#' + object.name + '-glb');
    entityChild.setAttribute('class', common.class);
    entityChild.setAttribute('id', object.name + '-object');
    entityChild.setAttribute('scale', common.scale);
    entityChild.setAttribute('position', object.childPosition);



    entity.appendChild(entityChild);

    SCENE.appendChild(entity);
}

let object = {
    0: {
        "name": "postit",
        "boxPosition": {
            "x": 1,
            "y": 12.25,
            "z": 1
        },
        "childPosition": {
            "x": 0,
            "y": 0,
            "z": 0
        },
        "geometry": {
            "primitive": "box",
            "width": 0.15,
            "height": 0.1,
            "depth": 0.15
        }
    },

    1: {
        "name": "peach",
        "boxPosition": {
            "x": 1,
            "y": 11.25,
            "z": 1
        },
        "childPosition": {
            "x": 0,
            "y": 0,
            "z": 0
        },
        "geometry": {
            "primitive": "sphere",
            "radius": 0.2
        }
    },

    2: {
        "name": "paper",
        "boxPosition": {
            "x": 1,
            "y": 10.25,
            "z": 1
        },
        "childPosition": {
            "x": 0,
            "y": 0,
            "z": 0
        },
        "geometry": {
            "primitive": "box",
            "width": 0.4,
            "height": 0.1,
            "depth": 0.4
        }
    },

    3: {
        "name": "obergine",
        "boxPosition": {
            "x": 1,
            "y": 9.25,
            "z": 1
        },
        "childPosition": {
            "x": 0,
            "y": 0,
            "z": 0
        },
        "geometry": {
            "primitive": "box",
            "width": 0.1,
            "height": 0.3,
            "depth": 0.3
        }
    },

    4: {
        "name": "mac",
        "boxPosition": {
            "x": 1,
            "y": 8.25,
            "z": 1
        },
        "childPosition": {
            "x": 0,
            "y": -0.1,
            "z": 0
        },
        "geometry": {
            "primitive": "box",
            "width": 0.3,
            "height": 0.25,
            "depth": 0.5
        }
    },

    5: {
        "name": "knife",
        "boxPosition": {
            "x": 1,
            "y": 7.25,
            "z": 1
        },
        "childPosition": {
            "x": 0,
            "y": 0,
            "z": 0
        },
        "geometry": {
            "primitive": "box",
            "width": 0.1,
            "height": 0.1,
            "depth": 0.6
        }
    },

    6: {
        "name": "keyboard",
        "boxPosition": {
            "x": 1,
            "y": 6.25,
            "z": 1
        },
        "childPosition": {
            "x": 0,
            "y": 0,
            "z": 0
        },
        "geometry": {
            "primitive": "box",
            "width": 0.4,
            "height": 0.1,
            "depth": 0.15
        }
    },

    7: {
        "name": "ketchup",
        "boxPosition": {
            "x": 1,
            "y": 5.25,
            "z": 1
        },
        "childPosition": {
            "x": 0,
            "y": -0.35,
            "z": 0
        },
        "geometry": {
            "primitive": "cylinder",
            "radius": 0.1,
            "height": 0.7
        }
    },

    8: {
        "name": "headphones",
        "boxPosition": {
            "x": 1,
            "y": 4.25,
            "z": 1
        },
        "childPosition": {
            "x": 0,
            "y": 0,
            "z": 0
        },
        "geometry": {
            "primitive": "box",
            "width": 0.5,
            "height": 0.4,
            "depth": 0.15
        }
    },

    9: {
        "name": "glass",
        "boxPosition": {
            "x": 1,
            "y": 3.25,
            "z": 1
        },
        "childPosition": {
            "x": 0,
            "y": -0.1,
            "z": 0
        },
        "geometry": {
            "primitive": "cylinder",
            "radius": 0.1,
            "height": 0.5
        }
    },

    10: {
        "name": "coca",
        "boxPosition": {
            "x": 1,
            "y": 2.25,
            "z": 1
        },
        "childPosition": {
            "x": 0,
            "y": 0,
            "z": 0
        },
        "geometry": {
            "primitive": "cylinder",
            "radius": 0.1,
            "height": 0.3
        }
    },

    11: {
        "name": "brocolis",
        "boxPosition": {
            "x": 1,
            "y": 1.25,
            "z": 1
        },
        "childPosition": {
            "x": 0,
            "y": 0,
            "z": 0
        },
        "geometry": {
            "primitive": "sphere",
            "radius": 0.15
        }
    },

    12: {
        "name": "book",
        "boxPosition": {
            "x": -1,
            "y": 1.25,
            "z": 1
        },
        "childPosition": {
            "x": 0,
            "y": 0,
            "z": 0
        },
        "geometry": {
            "primitive": "box",
            "width": 0.2,
            "height": 0.05,
            "depth": 0.25
        }
    },

    13: {
        "name": "bocale",
        "boxPosition": {
            "x": -1,
            "y": 1.25,
            "z": -1
        },
        "childPosition": {
            "x": 0,
            "y": 0,
            "z": 0
        },
        "geometry": {
            "primitive": "cylinder",
            "radius": 0.1,
            "height": 0.35
        }
    },

    14: {
        "name": "bag",
        "boxPosition": {
            "x": -1,
            "y": 1.25,
            "z": 0
        },
        "childPosition": {
            "x": 0,
            "y": 0,
            "z": 0
        },
        "geometry": {
            "primitive": "box",
            "width": 0.4,
            "height": 0.1,
            "depth": 0.25
        }
    },

    15: {
        "name": "tin",
        "boxPosition": {
            "x": 1,
            "y": 13.25,
            "z": 1
        },
        "childPosition": {
            "x": 0,
            "y": 0,
            "z": 0
        },
        "geometry": {
            "primitive": "cylinder",
            "radius": 0.15,
            "height": 0.4
        }
    },

    16: {
        "name": "water",
        "boxPosition": {
            "x": 1,
            "y": 14.25,
            "z": 1
        },
        "childPosition": {
            "x": 0,
            "y": -0.25,
            "z": 0
        },
        "geometry": {
            "primitive": "cylinder",
            "radius": 0.1,
            "height": 0.5
        }
    },

    17: {
        "name": "wine",
        "boxPosition": {
            "x": 1,
            "y": 15.25,
            "z": 1
        },
        "childPosition": {
            "x": 0,
            "y": -0.1,
            "z": 0
        },
        "geometry": {
            "primitive": "cylinder",
            "radius": 0.1,
            "height": 0.7
        }
    }


}

let scaleRatio = 0.6;


let common = {
    "class": "cube",
    "material": {
        "transparent": true,
        "opacity": 0
    },
    "scale": {
        "x": 0.5 * scaleRatio,
        "y": 0.5 * scaleRatio,
        "z": 0.5 * scaleRatio
    },

    "hbScale": {
        "x": 1 * scaleRatio,
        "y": 1 * scaleRatio,
        "z": 1 * scaleRatio
    },
}

// document.addEventListener('keydown', function (event) {
//     if (event.keyCode == 32) {

//     }
// });

for (let i = 0; i < Object.keys(object).length; i++) {
    createObject(common, object[i]);
}
