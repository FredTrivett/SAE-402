

// quand je clique sur la barre espace
let scaleRatio = 0.6;



function createObject(common, object) {
    const SCENE = document.querySelector('a-scene');


    let entity = document.createElement('a-entity');
    entity.setAttribute('geometry', object.geometry);
    entity.setAttribute('dynamic-body', {});
    entity.setAttribute('position', object.boxPosition);
    entity.setAttribute('material', common.material);
    entity.setAttribute('class', common.class);
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



    let entity = document.createElement('a-entity');
    entity.setAttribute('gltf-model', '#' + trashes.model);
    entity.setAttribute('scale', trashes.objectScale);
    entity.setAttribute('id', trashes.model + '-box');

    parent.appendChild(entity);



    for (let elt in trashes.boxesData) {
        let entityChild = document.createElement('a-entity');
        entityChild.setAttribute('material', common.material);
        entityChild.setAttribute('geometry', trashes.boxesData[elt].geometry);
        entityChild.setAttribute('static-body', {});
        entityChild.setAttribute('position', trashes.boxesData[elt].position);
        entityChild.setAttribute('scale', common.trash.boxesSizes);
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
            "width": 0.15 * scaleRatio,
            "height": 0.1 * scaleRatio,
            "depth": 0.15 * scaleRatio
        }
    },

    1: {
        "name": "peach",
        "boxPosition": {
            "x": 1.2,
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
            "radius": 0.2 * scaleRatio
        }
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
            "width": 0.4 * scaleRatio,
            "height": 0.1 * scaleRatio,
            "depth": 0.4 * scaleRatio
        }
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
            "width": 0.1 * scaleRatio,
            "height": 0.3 * scaleRatio,
            "depth": 0.3 * scaleRatio
        }
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
            "width": 0.3 * scaleRatio,
            "height": 0.25 * scaleRatio,
            "depth": 0.5 * scaleRatio
        }
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
            "width": 0.1 * scaleRatio,
            "height": 0.1 * scaleRatio,
            "depth": 0.6 * scaleRatio
        }
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
            "width": 0.4 * scaleRatio,
            "height": 0.1 * scaleRatio,
            "depth": 0.15 * scaleRatio
        }
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
            "radius": 0.1 * scaleRatio,
            "height": 0.7 * scaleRatio
        }
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
            "width": 0.5 * scaleRatio,
            "height": 0.4 * scaleRatio,
            "depth": 0.15 * scaleRatio
        }
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
            "radius": 0.1 * scaleRatio,
            "height": 0.5 * scaleRatio
        }
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
            "radius": 0.1 * scaleRatio,
            "height": 0.3 * scaleRatio
        }
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
            "radius": 0.15 * scaleRatio
        }
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
            "width": 0.2 * scaleRatio,
            "height": 0.05 * scaleRatio,
            "depth": 0.25 * scaleRatio
        }
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
            "radius": 0.1 * scaleRatio,
            "height": 0.35 * scaleRatio
        }
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
            "width": 0.4 * scaleRatio,
            "height": 0.1 * scaleRatio,
            "depth": 0.25 * scaleRatio
        }
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
            "radius": 0.15 * scaleRatio,
            "height": 0.4 * scaleRatio
        }
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
            "radius": 0.1 * scaleRatio,
            "height": 0.5 * scaleRatio
        }
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
            "radius": 0.1 * scaleRatio,
            "height": 0.7 * scaleRatio
        }
    }


}

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
                    "y": -0.2,
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
                    "y": -0.2,
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
                    "y": -0.2,
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
                    "y": -0.2,
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
                    "y": -0.2,
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
                    "y": -0.2,
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
        "objectScale": {
            "x": 0.3,
            "y": 0.3,
            "z": 0.5
        }
    },

}



{/* <a-entity position="-2 0.5 -1">
<a-entity geometry="primitive: box; width: 2.6; height: 4; depth: 1.4" gltf-model="#bin_orange"
  scale="0.3 0.3 0.5"></a-entity>

<a-entity material="transparent:true; opacity:0;" geometry="primitive: box; width: 2.6; height: 4; depth: 0.3"
  static-body scale="0.3 0.3 0.3" position="0 0.1 0.35"></a-entity>

<a-entity material="transparent:true; opacity:0;" geometry="primitive: box; width: 2.6; height: 4; depth: 0.3"
  static-body scale="0.3 0.3 0.3" position="0 0.1 -0.25"></a-entity>

<a-entity material="transparent:true; opacity:0;" geometry="primitive: box; width: 0.3; height: 4; depth: 2"
  static-body scale="0.3 0.3 0.3" position="0.35 0.1 0"></a-entity>

<a-entity material="transparent:true; opacity:0;" geometry="primitive: box; width: 0.3; height: 4; depth: 2"
  static-body scale="0.3 0.3 0.3" position="-0.35 0.1 0"></a-entity>

<a-entity material="transparent:true; opacity:0;" geometry="primitive: box; width: 2.6; height: 0.3; depth: 2"
  static-body scale="0.3 0.3 0.3" position="-0 -0.2 0"></a-entity>

</a-entity> */}

// document.addEventListener('keydown', function (event) {
//     if (event.keyCode == 32) {

//     }
// });

for (let i = 0; i < Object.keys(object).length; i++) {
    createObject(common, object[i]);
}

for (let i = 0; i < Object.keys(trashes).length; i++) {
    createTrash(common, trashes[i]);
}

var playerEl = document.querySelector('#ererer');
playerEl.addEventListener('collide', function (e) {
    console.log('Player has collided with body #' + e.detail.body.el.id);
    document.getElementById(e.detail.body.el.id).remove();

});