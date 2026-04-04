
    const rows = 100;
    const cols = 100;
    const GRASS = 0;
    const WATER = 1;
    const SOIL = 2;
    const map = [];

    for (let y = 0; y < rows; y++) {
        map[y] = [];
        for (let x = 0; x < cols; x++) {
            map[y][x] = GRASS;
        }
    }
    const player = {
        controls: { up: "w", down: "s", left: "a", right: "d" },
        lastDirX: 1,
        lastDirY:0, 
        id: "player1",
        px:2,
        py:2,
        speed: 0.1,
        color: Theme.colors.player1
    };
        
    const player2 = {
        controls: { up: "arrowup", down: "arrowdown", left: "arrowleft", right: "arrowright" },
        lastDirX: 1,
        lastDirY:0, 
        id: "player2",
        px:5,
        py:5,
        speed: 0.1,
        color: Theme.colors.player2
    };

    const entities = [player, player2];

    const keys = {};

    function createPatch(cx, cy, radius, type) {
        for (let y = -radius; y <= radius; y++) {
            for (let x = -radius; x <= radius; x++) {
                let dx = cx + x;
                let dy = cy + y;
                if (dx >= 0 && dx    < cols && dy >= 0 && dy < rows) {
                    if (x * x + y * y <= radius * radius) {
                        map[dy][dx] = type;
                    }
                }
            }
        }
    }

    createPatch(10, 8, 4, WATER);  // Lake 1
    createPatch(25, 5, 3, WATER);  // Lake 2
    createPatch(5, 12, 3, SOIL);   // Soil Patch 1
   


// renders the whole game
    function gameloop(){
        updatePlayer(player);
        updatePlayer(player2);
        updateBullets();
        draw();
        requestAnimationFrame(gameloop);
    }



    console.log(keys);
    window.onload = () => {
        resize();
        gameloop();
        console.log("Initial draw complete");
    };
    
    if (document.readyState === "complete") {
        resize();
    }
    