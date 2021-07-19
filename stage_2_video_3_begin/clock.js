const clockSection = document.getElementById("clock");

function getTime() {
  function pad(number) {
    if (number < 10) {
      return "0" + number;
    } else {
      return number;
    }
  }

  const now = new Date();

  const hh = pad(now.getHours());
  const mm = pad(now.getMinutes());
  const ss = pad(now.getSeconds());

  return `${hh}:${mm}:${ss}`;
}

function tickClock() {
  clockSection.textContent = getTime();
}

tickClock(); // call it manually first so it loads inmmediately.
setInterval(tickClock, 1000);

// With an anonymous function
// setInterval(() => clockSection.textContent = getTime(), 1000);
// an anonymous function is not ideal in this case because we can manually make the clock load inmediately. The 'clock goes here' sign shows first before the clock. In this case the arrow function works better.
