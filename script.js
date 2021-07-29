

var NONE = 4,
    UP = 3,
    LEFT = 2,
    DOWN = 1,
    RIGHT = 11,
    WAITING = 5,
    PAUSE = 6,
    PLAYING = 7,
    COUNTDOWN = 8,
    EATEN_PAUSE = 9,
    DYING = 10,
    Pacman = {};

Pacman.FPS = 30;

Pacman.Ghost = function (game, map, colour) {

    var position = null,
        direction = null,
        eatable = null,
        eaten = null,
        due = null;

    function getNewCoord(dir, current) {

        var speed = isVunerable() ? 1 : isHidden() ? 4 : 2,
            xSpeed = (dir === LEFT && -speed || dir === RIGHT && speed || 0),
            ySpeed = (dir === DOWN && speed || dir === UP && -speed || 0);

        return {
            "x": addBounded(current.x, xSpeed),
            "y": addBounded(current.y, ySpeed)
        };
    }

    /* Collision detection(walls) is done when a ghost lands on an
     * exact block, make sure they dont skip over it 
     */
    function addBounded(x1, x2) {
        var rem = x1 % 10,
            result = rem + x2;
        if (rem !== 0 && result > 10) {
            return x1 + (10 - rem);
        } else if (rem > 0 && result < 0) {
            return x1 - rem;
        }
        return x1 + x2;
    }

    function isVunerable() {
        return eatable !== null;
    }

    function isDangerous() {
        return eaten === null;
    }

    function isHidden() {
        return eatable === null && eaten !== null;
    }

    function getRandomDirection() {
        var moves = (direction === LEFT || direction === RIGHT) ?
            [UP, DOWN] : [LEFT, RIGHT];
        return moves[Math.floor(Math.random() * 2)];



        }],

    [{
        "move": [2.5, 5.5]
    }, {
        "line": [3.5, 5.5]
    }],

    [{
            "move": [3, 2.5]
        },
        {
            "curve": [3.5, 2.5, 3.5, 3]
        },
        {
            "curve": [3.5, 3.5, 3, 3.5]
        },
        {
            "curve": [2.5, 3.5, 2.5, 3]
        },
        {
            "curve": [2.5, 2.5, 3, 2.5]
        }],

    [{
        "move": [15.5, 5.5]
    }, {
        "line": [16.5, 5.5]
    }],

    [{
            "move": [16, 2.5]
        }, {
            "curve": [16.5, 2.5, 16.5, 3]
        },
        {
            "curve": [16.5, 3.5, 16, 3.5]
        }, {
            "curve": [15.5, 3.5, 15.5, 3]
        },
        {
            "curve": [15.5, 2.5, 16, 2.5]
        }],

    [{
            "move": [6, 2.5]
        }, {
            "line": [7, 2.5]
        }, {
            "curve": [7.5, 2.5, 7.5, 3]
        },
        {
            "curve": [7.5, 3.5, 7, 3.5]
        }, {
            "line": [6, 3.5]
        },
        {
            "curve": [5.5, 3.5, 5.5, 3]
        }, {
            "curve": [5.5, 2.5, 6, 2.5]
        }],

    [{
            "move": [12, 2.5]
        }, {
            "line": [13, 2.5]
        }, {
            "curve": [13.5, 2.5, 13.5, 3]
        },
        {
            "curve": [13.5, 3.5, 13, 3.5]
        }, {
            "line": [12, 3.5]
        },
        {
            "curve": [11.5, 3.5, 11.5, 3]
        }, {
            "curve": [11.5, 2.5, 12, 2.5]
        }],

    [{
            "move": [7.5, 5.5]
        }, {
            "line": [9, 5.5]
        }, {
            "curve": [9.5, 5.5, 9.5, 6]
        },
        {
            "line": [9.5, 7.5]
        }],
    [{
            "move": [9.5, 6]
        }, {
            "curve": [9.5, 5.5, 10.5, 5.5]
        },
        {
            "line": [11.5, 5.5]
        }],


    [{
            "move": [5.5, 5.5]
        }, {
            "line": [5.5, 7]
        }, {
            "curve": [5.5, 7.5, 6, 7.5]
        },
        {
            "line": [7.5, 7.5]
        }],
    [{
        "move": [6, 7.5]
    }, {
        "curve": [5.5, 7.5, 5.5, 8]
    }, {
        "line": [5.5, 9.5]
    }],

    [{
            "move": [13.5, 5.5]
        }, {
            "line": [13.5, 7]
        },
        {
            "curve": [13.5, 7.5, 13, 7.5]
        }, {
            "line": [11.5, 7.5]
        }],
    [{
            "move": [13, 7.5]
        }, {
            "curve": [13.5, 7.5, 13.5, 8]
        },
        {
            "line": [13.5, 9.5]
        }],

    [{
            "move": [0, 11.5]
        }, {
            "line": [3, 11.5]
        }, {
            "curve": [3.5, 11.5, 3.5, 12]
        },
        {
            "line": [3.5, 13]
        }, {
            "curve": [3.5, 13.5, 3, 13.5]
        }, {
            "line": [1, 13.5]
        },
        {
            "curve": [0.5, 13.5, 0.5, 14]
        }, {
            "line": [0.5, 17]
        },
        {
            "curve": [0.5, 17.5, 1, 17.5]
        }, {
            "line": [1.5, 17.5]
        }],
    [{
            "move": [1, 17.5]
        }, {
            "curve": [0.5, 17.5, 0.5, 18]
        }, {
            "line": [0.5, 21]
        },
        {
            "curve": [0.5, 21.5, 1, 21.5]
        }, {
            "line": [18, 21.5]
        },
        {
            "curve": [18.5, 21.5, 18.5, 21]
        }, {
            "line": [18.5, 18]
        },
        {
            "curve": [18.5, 17.5, 18, 17.5]
        }, {
            "line": [17.5, 17.5]
        }],
    [{
            "move": [18, 17.5]
        }, {
            "curve": [18.5, 17.5, 18.5, 17]
        },
        {
            "line": [18.5, 14]
        }, {
            "curve": [18.5, 13.5, 18, 13.5]
        },
        {
            "line": [16, 13.5]
        }, {
            "curve": [15.5, 13.5, 15.5, 13]
        },
        {
            "line": [15.5, 12]
        }, {
            "curve": [15.5, 11.5, 16, 11.5]
        },
        {
            "line": [19, 11.5]
        }],

    [{
        "move": [5.5, 11.5]
    }, {
        "line": [5.5, 13.5]
    }],
    [{
        "move": [13.5, 11.5]
    }, {
        "line": [13.5, 13.5]
    }],

    [{
            "move": [2.5, 15.5]
        }, {
            "line": [3, 15.5]
        },
        {
            "curve": [3.5, 15.5, 3.5, 16]
        }, {
            "line": [3.5, 17.5]
        }],
    [{
            "move": [16.5, 15.5]
        }, {
            "line": [16, 15.5]
        },
        {
            "curve": [15.5, 15.5, 15.5, 16]
        }, {
            "line": [15.5, 17.5]
        }],

    [{
        "move": [5.5, 15.5]
    }, {
        "line": [7.5, 15.5]
    }],
    [{
        "move": [11.5, 15.5]
    }, {
        "line": [13.5, 15.5]
    }],

    [{
            "move": [2.5, 19.5]
        }, {
            "line": [5, 19.5]
        },
        {
            "curve": [5.5, 19.5, 5.5, 19]
        }, {
            "line": [5.5, 17.5]
        }],
    [{
            "move": [5.5, 19]
        }, {
            "curve": [5.5, 19.5, 6, 19.5]
        },
        {
            "line": [7.5, 19.5]
        }],

    [{
            "move": [11.5, 19.5]
        }, {
            "line": [13, 19.5]
        },
        {
            "curve": [13.5, 19.5, 13.5, 19]
        }, {
            "line": [13.5, 17.5]
        }],
    [{
            "move": [13.5, 19]
        }, {
            "curve": [13.5, 19.5, 14, 19.5]
        },
        {
            "line": [16.5, 19.5]
        }],

    [{
            "move": [7.5, 13.5]
        }, {
            "line": [9, 13.5]
        },
        {
            "curve": [9.5, 13.5, 9.5, 14]
        }, {
            "line": [9.5, 15.5]
        }],
    [{
            "move": [9.5, 14]
        }, {
            "curve": [9.5, 13.5, 10, 13.5]
        },
        {
            "line": [11.5, 13.5]
        }],

    [{
            "move": [7.5, 17.5]
        }, {
            "line": [9, 17.5]
        },
        {
            "curve": [9.5, 17.5, 9.5, 18]
        }, {
            "line": [9.5, 19.5]
        }],
    [{
            "move": [9.5, 18]
        }, {
            "curve": [9.5, 17.5, 10, 17.5]
        },
        {
            "line": [11.5, 17.5]
        }],

    [{
            "move": [8.5, 9.5]
        }, {
            "line": [8, 9.5]
        }, {
            "curve": [7.5, 9.5, 7.5, 10]
        },
        {
            "line": [7.5, 11]
        }, {
            "curve": [7.5, 11.5, 8, 11.5]
        },
        {
            "line": [11, 11.5]
        }, {
            "curve": [11.5, 11.5, 11.5, 11]
        },
        {
            "line": [11.5, 10]
        }, {
            "curve": [11.5, 9.5, 11, 9.5]
        },
        {
            "line": [10.5, 9.5]
        }]
];

