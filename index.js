const inputEl = document.querySelector('input');
const buttonEl = document.querySelector('button');
const timerEl = document.querySelector('span');

inputEl.addEventListener('input', () => { 
inputEl.value = inputEl.value.replace(/[^0-9]/g, '');
  // Очистите input так, чтобы в значении
  // оставались только числа
});

let time
const createTimerAnimator = () => {
  return (seconds) => {
    time = seconds;
    // console.log(seconds)
    setInterval(createTimer, 1000)
  };
};

const createTimer = () => { 
    sec =  Math.floor(time%60)
    min = Math.floor(time/60%60)
    hours = Math.floor(time/60/60%60)
    if (time <= 0) {
      clearInterval();
      timerEl.innerHTML = `00:00:00`;
    } else {
    let timer = `${hours < 10 ? '0' : ''}${hours}:${min < 10 ? '0' : ''}${min}:${sec < 10 ? '0' : ''}${sec}`;
    timerEl.innerHTML = timer;
    }
    --time;
  };

const animateTimer = createTimerAnimator();

buttonEl.addEventListener('click', () => {
  const seconds = Number(inputEl.value);
  animateTimer (seconds);

  inputEl.value = '';
});