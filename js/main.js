

// quand je clique sur la barre espace
let scaleRatio = 0.6;



function createObject(common, object) {
    const SCENE = document.querySelector('a-scene');


    let entity = document.createElement('a-entity');
    entity.setAttribute('geometry', object.geometry);
    entity.setAttribute('dynamic-body', {});
    entity.setAttribute('position', object.boxPosition);
    entity.setAttribute('material', common.material);
    entity.classList.add(common.class);
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

function createTrash(common, trashes) {
    const SCENE = document.querySelector('a-scene');

    let parent = document.createElement('a-entity');
    parent.setAttribute('position', trashes.itemPosition);
    parent.setAttribute('rotation', { x: 30, y: 0, z: 0 });
    parent.setAttribute('class', trashes.class);




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
            entityChild.setAttribute('class', 'trashHitbox');

        }

        parent.appendChild(entityChild);

    }

    SCENE.appendChild(parent);
}


let object = {
    0: {
        "name": "postit",
        "boxPosition": {
            "x": 1.4,
            "y": 2.5,
            "z": 2
        },
        "childPosition": {
            "x": 0,
            "y": 0,
            "z": 0
        },
        "geometry": {
            "primitive": "box",
            "width": 0.09,
            "height": 0.06,
            "depth": 0.09
        },
        "class": "pink"
    },

    1: {
        "name": "peach",
        "boxPosition": {
            "x": 1.6,
            "y": 2.5,
            "z": 2
        },
        "childPosition": {
            "x": 0,
            "y": 0,
            "z": 0
        },
        "geometry": {
            "primitive": "sphere",
            "radius": 0.12
        },
        "class": "green"
    },

    2: {
        "name": "paper",
        "boxPosition": {
            "x": 1,
            "y": 2.5,
            "z": 2
        },
        "childPosition": {
            "x": 0,
            "y": 0,
            "z": 0
        },
        "geometry": {
            "primitive": "box",
            "width": 0.24,
            "height": 0.06,
            "depth": 0.24
        },
        "class": "pink"
    },

    3: {
        "name": "obergine",
        "boxPosition": {
            "x": 0.8,
            "y": 2.5,
            "z": 2
        },
        "childPosition": {
            "x": 0,
            "y": 0,
            "z": 0
        },
        "geometry": {
            "primitive": "box",
            "width": 0.06,
            "height": 0.18,
            "depth": 0.18
        },
        "class": "green"
    },

    4: {
        "name": "mac",
        "boxPosition": {
            "x": 0.6,
            "y": 2.5,
            "z": 2
        },
        "childPosition": {
            "x": 0,
            "y": -0.1,
            "z": 0
        },
        "geometry": {
            "primitive": "box",
            "width": 0.18,
            "height": 0.24,
            "depth": 0.3
        },
        "class": "blue"
    },

    5: {
        "name": "knife",
        "boxPosition": {
            "x": 0.4,
            "y": 2.5,
            "z": 2
        },
        "childPosition": {
            "x": 0,
            "y": 0,
            "z": 0
        },
        "geometry": {
            "primitive": "box",
            "width": 0.06,
            "height": 0.06,
            "depth": 0.36
        },
        "class": "red"
    },

    6: {
        "name": "keyboard",
        "boxPosition": {
            "x": 0.2,
            "y": 2.5,
            "z": 2
        },
        "childPosition": {
            "x": 0,
            "y": 0,
            "z": 0
        },
        "geometry": {
            "primitive": "box",
            "width": 0.24,
            "height": 0.06,
            "depth": 0.09
        },
        "class": "blue"
    },

    7: {
        "name": "ketchup",
        "boxPosition": {
            "x": 0,
            "y": 2.5,
            "z": 2
        },
        "childPosition": {
            "x": 0,
            "y": -0.2,
            "z": 0
        },
        "geometry": {
            "primitive": "cylinder",
            "radius": 0.06,
            "height": 0.42
        },
        "class": "yellow"
    },

    8: {
        "name": "headphones",
        "boxPosition": {
            "x": -0.2,
            "y": 2.5,
            "z": 2
        },
        "childPosition": {
            "x": 0,
            "y": 0,
            "z": 0
        },
        "geometry": {
            "primitive": "box",
            "width": 0.282,
            "height": 0.24,
            "depth": 0.09
        },
        "class": "blue"
    },

    9: {
        "name": "glass",
        "boxPosition": {
            "x": -0.4,
            "y": 2.5,
            "z": 2
        },
        "childPosition": {
            "x": 0,
            "y": -0.05,
            "z": 0
        },
        "geometry": {
            "primitive": "cylinder",
            "radius": 0.06,
            "height": 0.3
        },
        "class": "orange"
    },

    10: {
        "name": "coca",
        "boxPosition": {
            "x": -0.6,
            "y": 2.5,
            "z": 2
        },
        "childPosition": {
            "x": 0,
            "y": 0,
            "z": 0
        },
        "geometry": {
            "primitive": "cylinder",
            "radius": 0.06,
            "height": 0.18
        },
        "class": "red"
    },

    11: {
        "name": "brocolis",
        "boxPosition": {
            "x": -0.8,
            "y": 2.5,
            "z": 2
        },
        "childPosition": {
            "x": 0,
            "y": 0,
            "z": 0
        },
        "geometry": {
            "primitive": "sphere",
            "radius": 0.09
        },
        "class": "green"
    },

    12: {
        "name": "book",
        "boxPosition": {
            "x": -1,
            "y": 2.5,
            "z": 2
        },
        "childPosition": {
            "x": 0,
            "y": 0,
            "z": 0
        },
        "geometry": {
            "primitive": "box",
            "width": 0.12,
            "height": 0.03,
            "depth": 0.15
        },
        "class": "pink"
    },

    13: {
        "name": "bocale",
        "boxPosition": {
            "x": -1.2,
            "y": 2.5,
            "z": 2
        },
        "childPosition": {
            "x": 0,
            "y": 0,
            "z": 0
        },
        "geometry": {
            "primitive": "cylinder",
            "radius": 0.06,
            "height": 0.21
        },
        "class": "orange"
    },

    14: {
        "name": "bag",
        "boxPosition": {
            "x": -1.4,
            "y": 2.5,
            "z": 2
        },
        "childPosition": {
            "x": 0,
            "y": 0,
            "z": 0
        },
        "geometry": {
            "primitive": "box",
            "width": 0.24,
            "height": 0.06,
            "depth": 0.15
        },
        "class": "yellow"
    },

    15: {
        "name": "tin",
        "boxPosition": {
            "x": -1,
            "y": 2.5,
            "z": 1.8
        },
        "childPosition": {
            "x": 0,
            "y": 0,
            "z": 0
        },
        "geometry": {
            "primitive": "cylinder",
            "radius": 0.09,
            "height": 0.24
        },
        "class": "red"
    },

    16: {
        "name": "water",
        "boxPosition": {
            "x": -0.8,
            "y": 2.5,
            "z": 1.8
        },
        "childPosition": {
            "x": 0,
            "y": -0.0,
            "z": 0
        },
        "geometry": {
            "primitive": "cylinder",
            "radius": 0.06,
            "height": 0.3
        },
        "class": "yellow"
    },

    17: {
        "name": "wine",
        "boxPosition": {
            "x": -0.6,
            "y": 2.5,
            "z": 1.8
        },
        "childPosition": {
            "x": 0,
            "y": -0.1,
            "z": 0
        },
        "geometry": {
            "primitive": "cylinder",
            "radius": 0.06,
            "height": 0.42
        },
        "class": "orange"
    }


}

let common = {
    "class": "cube",
    "material": {
        "transparent": true,
        "opacity": 0
    },
    "scale": {
        "x": 0.3,
        "y": 0.3,
        "z": 0.3
    },
    "trash": {
        "boxesSizes": {
            "x": 0.3,
            "y": 0.3,
            "z": 0.3
        },
        "geometry": {

        }
    }
}

let trashes = {
    0: {
        "itemPosition": {
            "x": -2.5,
            "y": 0.5,
            "z": -3
        },

        "boxesData": {
            1: {
                "position": {
                    "x": 0,
                    "y": 0.1,
                    "z": 0.35
                },
                "geometry": {
                    "primitive": "box",
                    "width": 2.6,
                    "height": 4,
                    "depth": 0.3
                }
            },
            2: {
                "position": {
                    "x": 0,
                    "y": 0.1,
                    "z": -0.25
                },
                "geometry": {
                    "primitive": "box",
                    "width": 2.6,
                    "height": 4,
                    "depth": 0.3
                }
            },
            3: {
                "position": {
                    "x": 0.35,
                    "y": 0.1,
                    "z": 0
                },
                "geometry": {
                    "primitive": "box",
                    "width": 0.3,
                    "height": 4,
                    "depth": 2
                }
            },
            4: {
                "position": {
                    "x": -0.35,
                    "y": 0.1,
                    "z": 0
                },
                "geometry": {
                    "primitive": "box",
                    "width": 0.3,
                    "height": 4,
                    "depth": 2
                }
            },
            5: {
                "position": {
                    "x": 0,
                    "y": -0.1,
                    "z": 0
                },
                "geometry": {
                    "primitive": "box",
                    "width": 2.6,
                    "height": 0.3,
                    "depth": 2
                }
            }

        },
        "model": "bin_orange",
        "class": "orange",
        "objectScale": {
            "x": 0.3,
            "y": 0.3,
            "z": 0.5
        }
    },
    1: {
        "itemPosition": {
            "x": -1.5,
            "y": 0.5,
            "z": -3
        },

        "boxesData": {
            1: {
                "position": {
                    "x": 0,
                    "y": 0.1,
                    "z": 0.35
                },
                "geometry": {
                    "primitive": "box",
                    "width": 2.6,
                    "height": 4,
                    "depth": 0.3
                }
            },
            2: {
                "position": {
                    "x": 0,
                    "y": 0.1,
                    "z": -0.25
                },
                "geometry": {
                    "primitive": "box",
                    "width": 2.6,
                    "height": 4,
                    "depth": 0.3
                }
            },
            3: {
                "position": {
                    "x": 0.35,
                    "y": 0.1,
                    "z": 0
                },
                "geometry": {
                    "primitive": "box",
                    "width": 0.3,
                    "height": 4,
                    "depth": 2
                }
            },
            4: {
                "position": {
                    "x": -0.35,
                    "y": 0.1,
                    "z": 0
                },
                "geometry": {
                    "primitive": "box",
                    "width": 0.3,
                    "height": 4,
                    "depth": 2
                }
            },
            5: {
                "position": {
                    "x": 0,
                    "y": -0.1,
                    "z": 0
                },
                "geometry": {
                    "primitive": "box",
                    "width": 2.6,
                    "height": 0.3,
                    "depth": 2
                }
            }

        },
        "model": "bin_blue",
        "class": "blue",
        "objectScale": {
            "x": 0.3,
            "y": 0.3,
            "z": 0.5
        }
    },
    2: {
        "itemPosition": {
            "x": -0.5,
            "y": 0.5,
            "z": -3
        },

        "boxesData": {
            1: {
                "position": {
                    "x": 0,
                    "y": 0.1,
                    "z": 0.35
                },
                "geometry": {
                    "primitive": "box",
                    "width": 2.6,
                    "height": 4,
                    "depth": 0.3
                }
            },
            2: {
                "position": {
                    "x": 0,
                    "y": 0.1,
                    "z": -0.25
                },
                "geometry": {
                    "primitive": "box",
                    "width": 2.6,
                    "height": 4,
                    "depth": 0.3
                }
            },
            3: {
                "position": {
                    "x": 0.35,
                    "y": 0.1,
                    "z": 0
                },
                "geometry": {
                    "primitive": "box",
                    "width": 0.3,
                    "height": 4,
                    "depth": 2
                }
            },
            4: {
                "position": {
                    "x": -0.35,
                    "y": 0.1,
                    "z": 0
                },
                "geometry": {
                    "primitive": "box",
                    "width": 0.3,
                    "height": 4,
                    "depth": 2
                }
            },
            5: {
                "position": {
                    "x": 0,
                    "y": -0.1,
                    "z": 0
                },
                "geometry": {
                    "primitive": "box",
                    "width": 2.6,
                    "height": 0.3,
                    "depth": 2
                }
            }

        },
        "model": "bin_green",
        "class": "green",
        "objectScale": {
            "x": 0.3,
            "y": 0.3,
            "z": 0.5
        }
    },
    3: {
        "itemPosition": {
            "x": 0.5,
            "y": 0.5,
            "z": -3
        },

        "boxesData": {
            1: {
                "position": {
                    "x": 0,
                    "y": 0.1,
                    "z": 0.35
                },
                "geometry": {
                    "primitive": "box",
                    "width": 2.6,
                    "height": 4,
                    "depth": 0.3
                }
            },
            2: {
                "position": {
                    "x": 0,
                    "y": 0.1,
                    "z": -0.25
                },
                "geometry": {
                    "primitive": "box",
                    "width": 2.6,
                    "height": 4,
                    "depth": 0.3
                }
            },
            3: {
                "position": {
                    "x": 0.35,
                    "y": 0.1,
                    "z": 0
                },
                "geometry": {
                    "primitive": "box",
                    "width": 0.3,
                    "height": 4,
                    "depth": 2
                }
            },
            4: {
                "position": {
                    "x": -0.35,
                    "y": 0.1,
                    "z": 0
                },
                "geometry": {
                    "primitive": "box",
                    "width": 0.3,
                    "height": 4,
                    "depth": 2
                }
            },
            5: {
                "position": {
                    "x": 0,
                    "y": -0.1,
                    "z": 0
                },
                "geometry": {
                    "primitive": "box",
                    "width": 2.6,
                    "height": 0.3,
                    "depth": 2
                }
            }

        },
        "model": "bin_pink",
        "class": "pink",
        "objectScale": {
            "x": 0.3,
            "y": 0.3,
            "z": 0.5
        }
    },
    4: {
        "itemPosition": {
            "x": 1.5,
            "y": 0.5,
            "z": -3
        },

        "boxesData": {
            1: {
                "position": {
                    "x": 0,
                    "y": 0.1,
                    "z": 0.35
                },
                "geometry": {
                    "primitive": "box",
                    "width": 2.6,
                    "height": 4,
                    "depth": 0.3
                }
            },
            2: {
                "position": {
                    "x": 0,
                    "y": 0.1,
                    "z": -0.25
                },
                "geometry": {
                    "primitive": "box",
                    "width": 2.6,
                    "height": 4,
                    "depth": 0.3
                }
            },
            3: {
                "position": {
                    "x": 0.35,
                    "y": 0.1,
                    "z": 0
                },
                "geometry": {
                    "primitive": "box",
                    "width": 0.3,
                    "height": 4,
                    "depth": 2
                }
            },
            4: {
                "position": {
                    "x": -0.35,
                    "y": 0.1,
                    "z": 0
                },
                "geometry": {
                    "primitive": "box",
                    "width": 0.3,
                    "height": 4,
                    "depth": 2
                }
            },
            5: {
                "position": {
                    "x": 0,
                    "y": -0.1,
                    "z": 0
                },
                "geometry": {
                    "primitive": "box",
                    "width": 2.6,
                    "height": 0.3,
                    "depth": 2
                }
            }

        },
        "model": "bin_red",
        "class": "red",
        "objectScale": {
            "x": 0.3,
            "y": 0.3,
            "z": 0.5
        }
    },
    5: {
        "itemPosition": {
            "x": 2.5,
            "y": 0.5,
            "z": -3
        },

        "boxesData": {
            1: {
                "position": {
                    "x": 0,
                    "y": 0.1,
                    "z": 0.35
                },
                "geometry": {
                    "primitive": "box",
                    "width": 2.6,
                    "height": 4,
                    "depth": 0.3
                }
            },
            2: {
                "position": {
                    "x": 0,
                    "y": 0.1,
                    "z": -0.25
                },
                "geometry": {
                    "primitive": "box",
                    "width": 2.6,
                    "height": 4,
                    "depth": 0.3
                }
            },
            3: {
                "position": {
                    "x": 0.35,
                    "y": 0.1,
                    "z": 0
                },
                "geometry": {
                    "primitive": "box",
                    "width": 0.3,
                    "height": 4,
                    "depth": 2
                }
            },
            4: {
                "position": {
                    "x": -0.35,
                    "y": 0.1,
                    "z": 0
                },
                "geometry": {
                    "primitive": "box",
                    "width": 0.3,
                    "height": 4,
                    "depth": 2
                }
            },
            5: {
                "position": {
                    "x": 0,
                    "y": -0.1,
                    "z": 0
                },
                "geometry": {
                    "primitive": "box",
                    "width": 2.6,
                    "height": 0.3,
                    "depth": 2
                }
            }

        },
        "model": "bin_yellow",
        "class": "yellow",
        "objectScale": {
            "x": 0.3,
            "y": 0.3,
            "z": 0.5
        }
    },

}


for (let i = 0; i < Object.keys(object).length; i++) {
    createObject(common, object[i]);
}

for (let i = 0; i < Object.keys(trashes).length; i++) {
    createTrash(common, trashes[i]);
}

var playerEl = document.querySelector('#ground');
playerEl.addEventListener('collide', function (e) {
    setTimeout(function () {
        let id = e.detail.body.el.id;
        let element = e.detail.body.el;

        element.parentNode.removeChild(element);

        for (let elt in object) {
            console.log(object[elt].name + '-box');
            console.log(id);
            if (id == object[elt].name + '-box') {
                createObject(common, object[elt]);

            }
        }
    }, 0);

});

document.querySelectorAll('.trashHitbox').forEach(item => {
    item.addEventListener('collide', function (e) {
        setTimeout(function () {
            document.querySelector('#text').setAttribute('text', 'value: ' + e.detail.body.el.id);
            // delete element
            let element = document.querySelector('#' + e.detail.body.el.id);
            element.parentNode.removeChild(element);
        }, 0);

    });
});







