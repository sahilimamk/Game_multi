
    console.log("Map initialized:", map);
    function canMove(x, y){
        return (map[y][x] !== WATER && map[y][x] !== SOIL
        ) 
    }
   
   
   function updatePlayer(p){
        let newX = p.px;
        let newY = p.py;
        let dirX = 0;
        let dirY = 0;

        if (keys[p.controls.up]) dirY -= p.speed;
        if (keys[p.controls.down]) dirY += p.speed;
        if (keys[p.controls.left]) dirX -= p.speed;
        if (keys[p.controls.right]) dirX += p.speed;
        
        if(dirX !== 0 || dirY !== 0){
            p.lastDirX = dirX;
            p.lastDirY = dirY;
        }
        newX += dirX;
        newY += dirY;
        let gridX =  Math.floor(newX);
        let gridY = Math.floor(newY);
        
        if (
            gridY >= 0 && gridY < rows &&
            gridX >= 0 && gridX < cols &&
            canMove(gridX, gridY)
        ) {
            p.px =  newX;
            p.py = newY;
        }
    }

// physics for bullet
    function updateBullets(){
        for(let i = 0; i < entities.length; i++){
            let crnent = entities[i];
            if(crnent.isbullet){
                crnent.px += crnent.speedX; 
                crnent.py += crnent.speedY;
            }
        }
    }
