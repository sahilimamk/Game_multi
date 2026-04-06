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
    keys[key] = true;
});

window.addEventListener("keyup", (e) => {
    keys[e.key.toLowerCase()] = false;
});