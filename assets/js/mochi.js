(function () {
  var mochi = document.querySelector('[data-mochi]');
  var pet = document.querySelector('[data-mochi-pet]');
  var message = document.querySelector('[data-mochi-message]');
  if (!mochi || !pet || !message) return;

  var greetings = [
    "Hi, I'm Mochi!",
    "Welcome to Ethan's homepage!",
    'Nice to meet you!',
    "Let's explore together!"
  ];
  var hideTimer;
  var nextGreetingTimer;
  var idleFrames = ['0%', '14.2857%', '28.5714%', '42.8571%', '57.1429%', '71.4286%', '85.7143%', '100%'];
  var idleFrame = 0;

  function playIdleFrame() {
    pet.style.backgroundPosition = idleFrames[idleFrame] + ' 0';
    idleFrame = (idleFrame + 1) % idleFrames.length;
  }

  if (!window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    playIdleFrame();
    window.setInterval(playIdleFrame, 300);
  }

  function scheduleGreeting() {
    window.clearTimeout(nextGreetingTimer);
    nextGreetingTimer = window.setTimeout(function () {
      showGreeting();
    }, 18000 + Math.random() * 14000);
  }

  function showGreeting(text) {
    window.clearTimeout(hideTimer);
    message.textContent = text || greetings[Math.floor(Math.random() * greetings.length)];
    mochi.classList.add('is-speaking');
    pet.classList.add('is-greeting');

    hideTimer = window.setTimeout(function () {
      mochi.classList.remove('is-speaking');
      pet.classList.remove('is-greeting');
    }, 4600);
    scheduleGreeting();
  }

  window.setTimeout(function () {
    showGreeting("Hi, I'm Mochi! Welcome to Ethan's homepage!");
  }, 3200);

  pet.addEventListener('click', function () {
    showGreeting('Thanks for the pat!');
  });
})();
