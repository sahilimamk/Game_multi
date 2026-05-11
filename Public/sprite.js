// Public/sprite.js
const p1Image = new Image();
p1Image.src = '/srccs/robo_run.png';
const p2Image = new Image();
p2Image.src = '/srccs/chicken2_recolor3.png';

const swidth = 112;
const sheight = 96;

const s2Height = 35;
const s2Width = 32;

// You will eventually add p2Image, bulletImage, etc. here.
        let gameFrame = 0;


const animationStates = [
    {
        name: 'idle',
        frame:  5,
    },
    {
        name: 'left',
        frame: 8,
    },
    {
        name: 'right',
        frame: 8,
    },
    {
        name: 'up',
        frame: 8,
    },
    {
        name: 'down',
        frame: 8,
    },
    {
        name: 'shoot',
        frame: 8,
    }
]

const spriteAnimations = {};
animationStates.forEach((state, index) => {
    let frames = {
        loc: [],
    }

    for(let j = 0; j < state.frame; j++){
        let posX = j * s2Width;
        let posY = index * s2Height;

        frames.loc.push({x: posX, y: posY});
    }

    spriteAnimations[state.name] = frames;
});

console.log(animationStates);
function drawEntity(ctx, entity, cameraX, cameraY) {
    if (entity.id === "player1") {
        const imageScale = 2; // Adjust if needed
        const scaledSize = Theme.sizes.tile * imageScale;
        const offsetX = (scaledSize - Theme.sizes.tile) / 2;
        const offsetY = (scaledSize - Theme.sizes.tile) / 2;
        let sttgframe = 7  ;
        let posn = Math.floor(gameFrame/sttgframe) % 9;
        let frmX = posn * swidth;
        
        let drawX = (entity.px * Theme.sizes.tile - cameraX) - offsetX;
        let drawY = (entity.py * Theme.sizes.tile - cameraY) - offsetY;

        ctx.save();
        if (entity.lastDirX < 0) {
            // Flip the context horizontally around the center of the sprite
            ctx.translate(drawX + scaledSize / 2, drawY + scaledSize / 2);
            ctx.scale(-1, 1);
            ctx.translate(-(drawX + scaledSize / 2), -(drawY + scaledSize / 2));
        }

        ctx.drawImage(p1Image,
            frmX, 0*sheight, swidth, sheight, // Later you will change these math values for animation frames!
            drawX,
            drawY,
            scaledSize,
            scaledSize);
            
        ctx.restore();
        
    } else if (entity.id === "player2") {
        const imageScale = 2; // Adjust if needed
        const scaledSizeX = s2Width * imageScale;
        const scaledSizeY = s2Height * imageScale;
        const offsetX = (scaledSizeX - Theme.sizes.tile) / 2;
        const offsetY = (scaledSizeY - Theme.sizes.tile) / 2;
        
        let sttgframe = 7;
        let posn = Math.floor(gameFrame/sttgframe) % 4;
        let frmX = posn * s2Width;
        
        let drawX = (entity.px * Theme.sizes.tile - cameraX) - offsetX;
        let drawY = (entity.py * Theme.sizes.tile - cameraY) - offsetY;

        ctx.drawImage(p2Image,
            frmX, 0 * s2Height, s2Width, s2Height,
            drawX,
            drawY,
            scaledSizeX,
            scaledSizeY);
            
    } else {
        // Draw standard boxes for other entities (like bullets or player 2 for now)
        ctx.fillStyle = entity.color;
        ctx.fillRect(
            entity.px * Theme.sizes.tile - cameraX,
            entity.py * Theme.sizes.tile - cameraY,
            Theme.sizes.tile,
            Theme.sizes.tile
        );
    }
}