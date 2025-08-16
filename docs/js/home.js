var typed = new Typed("#typed-text", {
  strings: [
    "Usman Iqbal",
    "MSc Computer Science",
    "Web Developer",
    "Software Developer",
  ],
  typeSpeed: 50,
  backSpeed: 40,
  backDelay: 1800,
  loop: true,
  showCursor: true,
  cursorChar: "|",
});

tsParticles.load("tsparticles", {
  fpsLimit: 30,
  particles: {
    number: { value: 40 },
    links: { enable: true, distance: 120, opacity: 0.3 },
    move: { enable: true, speed: 0.5 },
    size: { value: 2 },
  },
  interactivity: { events: {} },
});
