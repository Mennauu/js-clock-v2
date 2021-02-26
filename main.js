const JS_HOOK_CLOCK_SECONDS = "[js-hook-clock-seconds]";
const JS_HOOK_CLOCK_MINUTES = "[js-hook-clock-minutes]";
const JS_HOOK_CLOCK_HOURS = "[js-hook-clock-hours]";

const secondsPointer = document.querySelector(JS_HOOK_CLOCK_SECONDS);
const minutesPointer = document.querySelector(JS_HOOK_CLOCK_MINUTES);
const hoursPointer = document.querySelector(JS_HOOK_CLOCK_HOURS);

const initClock = () => {
  rotateClock();

  setInterval(() => rotateClock(), 1000);
};

const rotateClock = () => {
  const time = getCurrentTime();
  const rotations = getRotationDegrees(time);

  secondsPointer.style.transform = `rotate(${rotations.seconds}deg)`;
  minutesPointer.style.transform = `rotate(${rotations.minutes}deg)`;
  hoursPointer.style.transform = `rotate(${rotations.hours}deg)`;
};

const getCurrentTime = (date = new Date()) => {
  const time = {
    hours: date.getHours(),
    minutes: date.getMinutes(),
    seconds: date.getSeconds(),
  };

  return time;
};

const getRotationDegrees = (time) => {
  const rotations = {
    hours: (360 / 24) * time.hours,
    minutes: (360 / 60) * time.minutes,
    seconds: (360 / 60) * time.seconds,
  };

  return rotations;
};

initClock();
