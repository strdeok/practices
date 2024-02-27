function updateClock() {
    const clock = document.getElementById("clock");
    const now = new Date();
    let hours = now.getHours();
    let minutes = now.getMinutes();
    let seconds = now.getSeconds();
    let ampm = hours >= 12 ? 'pm' : 'am';
    hours = hours % 12;
    hours = hours ? hours : 12; 
    minutes = minutes < 10 ? '0'+ minutes : minutes;
    seconds = seconds < 10 ? '0'+ seconds : seconds;
    const time = hours + ':' + minutes + ':' + seconds + ' ' + ampm;
    clock.textContent = time;
    setTimeout(updateClock, 1000);
  }
  
  updateClock();