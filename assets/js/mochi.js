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

    hideTimer = window.setTimeout(function () {
      mochi.classList.remove('is-speaking');
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
