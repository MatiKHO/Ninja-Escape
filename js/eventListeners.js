window.addEventListener("keydown", (event) => {
  switch (event.key) {
    case "w":
      keys.w.pressed = true;
      break;
    case "a":
      keys.a.pressed = true;
      break;
    case "s":
      keys.s.pressed = true;
      break;
    case "d":
      keys.d.pressed = true;
      break;
    
    case ' ':
      event.preventDefault();
      player.attack();
      break;
    case "Enter":
      event.preventDefault();
      keys.enter.pressed = true;
      break;
  }
});

window.addEventListener("keyup", (event) => {
  switch (event.key) {
    case "w":
      keys.w.pressed = false;
      break;
    case "a":
      keys.a.pressed = false;
      break;
    case "s":
      keys.s.pressed = false;
      break;
    case "d":
      keys.d.pressed = false;
      break;
      case "Enter":
      event.preventDefault();
      keys.enter.pressed = true;
      break;
  }
});


window.addEventListener('gamepadconnected', (event) =>{
  console.log('Gamepad connected:', event.gamepad);
});

window.addEventListener('gamepaddisconnected', (event) =>{
  console.log('Gamepad disconnected:', event.gamepad);
});

// On return to game's tab, ensure delta time is reset
document.addEventListener("visibilitychange", () => {
  if (!document.hidden) {
    lastTime = performance.now();
  }
});




