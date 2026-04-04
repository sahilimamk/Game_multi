    const gameKeys = ["arrowup", "arrowdown", "arrowleft", "arrowright","w", "a", "s", "d", " "]

    window.addEventListener("resize", (e) =>{
        resize();
        draw();
    });


window.addEventListener("keydown", (e) => {
    const key = e.key.toLowerCase();

    if (gameKeys.includes(key)) {
        e.preventDefault();
    }
    if(key === " "){
        const bullet = {
            px: player.px,
            py: player.py,
            color : Theme.colors.bullet,
            isbullet: true,
            speedX: 1.5 * player.lastDirX,
            speedY: 1.5 * player.lastDirY
        }
        entities.push(bullet);
    }
    keys[key] = true;
});

window.addEventListener("keyup", (e) => {
    keys[e.key.toLowerCase()] = false;
});