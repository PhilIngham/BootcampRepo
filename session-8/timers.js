const TIMER_SECONDS = 5000;

// Timeout - does the function after the time
const sayMessage = () => {
  console.log("Hello from say message");
};

setTimeout(sayMessage, TIMER_SECONDS);

// Interval - does the function every time interval

const timer = setInterval(() => {
  console.log("Running every 2 seconds");
}, TIMER_SECONDS);

// Remove in the interval

clearInterval(timer);
