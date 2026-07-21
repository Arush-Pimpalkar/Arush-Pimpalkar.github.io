document.addEventListener("DOMContentLoaded", () => {
  const target = document.getElementById("typing-text");
  if (!target) return;

  const words = [
    "study Black Holes.",
    "build Machine Learning Models.",
    "build Control Loops.",
    "play Basketball 🏀.",
  ];

  // Split into code points, so characters made of more than one UTF-16 unit
  // (the emoji) are never cut in half mid-keystroke.
  const letters = words.map((word) => Array.from(word));

  const motionQuery = window.matchMedia("(prefers-reduced-motion: reduce)");

  let wordIndex = 0;
  let charIndex = 0;
  let deleting = false;
  let timer;

  const render = () => {
    target.textContent = letters[wordIndex].slice(0, charIndex).join("");
  };

  // The caret rides on the text itself, so the width is reserved on the
  // wrapper around it — put it on the text and the caret parks at the far
  // edge of the reserved space instead of following the last character.
  const box =
    target.parentElement && target.parentElement.classList.contains("typing")
      ? target.parentElement
      : target;

  // Hold the width of the longest phrase, so the centred line stops
  // shifting left and right as the text grows and shrinks.
  const reserveWidth = () => {
    const current = target.textContent;
    let widest = 0;

    box.style.minWidth = "";
    words.forEach((word) => {
      target.textContent = word;
      widest = Math.max(widest, target.scrollWidth);
    });
    target.textContent = current;

    const available = box.parentElement ? box.parentElement.clientWidth : 0;
    const reserved = available ? Math.min(widest, available) : widest;
    box.style.minWidth = `${Math.ceil(reserved)}px`;
  };

  const pause = (delay) => {
    target.classList.remove("is-typing");
    timer = window.setTimeout(step, delay);
  };

  function step() {
    target.classList.add("is-typing");

    if (deleting) {
      charIndex -= 1;
      render();

      if (charIndex === 0) {
        deleting = false;
        wordIndex = (wordIndex + 1) % words.length;
        pause(600);
        return;
      }
    } else {
      charIndex += 1;
      render();

      if (charIndex === letters[wordIndex].length) {
        deleting = true;
        pause(1400);
        return;
      }
    }

    timer = window.setTimeout(step, deleting ? 40 : 90);
  }

  const start = () => {
    window.clearTimeout(timer);

    if (motionQuery.matches) {
      target.classList.remove("is-typing");
      charIndex = letters[wordIndex].length;
      render();
      return;
    }

    pause(900);
  };

  // Carry on from the phrase already in the markup rather than blanking it,
  // so the line does not flash its contents away on load.
  const initial = words.indexOf(target.textContent.trim());
  if (initial === -1) {
    render();
  } else {
    wordIndex = initial;
    charIndex = letters[initial].length;
    deleting = true;
  }

  reserveWidth();
  start();

  let resizeTimer;
  window.addEventListener("resize", () => {
    window.clearTimeout(resizeTimer);
    resizeTimer = window.setTimeout(reserveWidth, 150);
  });

  motionQuery.addEventListener("change", start);
});
