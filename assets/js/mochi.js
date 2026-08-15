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
  var idleFrameDurations = [360, 150, 150, 210, 210, 150, 150, 360];
  var idleFrame = 0;
  var idleTimer;

  function paintIdleFrame() {
    var frameWidth = parseFloat(window.getComputedStyle(pet).width);
    var frameHeight = parseFloat(window.getComputedStyle(pet).height);

    // Mochi uses an 8 × 11 Codex atlas. Pixel values keep every frame exactly
    // aligned to its 192 × 208 source cell at every responsive display size.
    pet.style.backgroundSize = (frameWidth * 8) + 'px ' + (frameHeight * 11) + 'px';
    pet.style.backgroundPosition = (-idleFrame * frameWidth) + 'px 0px';
  }

  function playIdleFrame() {
    var duration = idleFrameDurations[idleFrame];
    paintIdleFrame();
    idleFrame = (idleFrame + 1) % idleFrameDurations.length;
    idleTimer = window.setTimeout(playIdleFrame, duration);
  }

  if (!window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    playIdleFrame();
  } else {
    paintIdleFrame();
  }

  window.addEventListener('resize', function () {
    paintIdleFrame();
  });

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
