window.sr = ScrollReveal({ reset: true });

sr.reveal('.from_up', { duration: 1000, delay: 400, origin: 'top', distance: '50px' });
sr.reveal('.from_bottom', { duration: 1000, delay: 400, origin: 'bottom', distance: '50px' });
sr.reveal('.from_right', { duration: 1000, delay: 400, origin: 'right', distance: '50px' });
sr.reveal('.from_left', { duration: 1000, delay: 400, origin: 'left', distance: '50px' });
sr.reveal('.from_center', { duration: 1500, delay: 400, scale: 0.5 });
sr.reveal('.rotate', { duration: 1000, delay: 400, rotate: { x: 180, z: 180 } });

sr.reveal('.interval-left', { duration: 1000, interval: 250, origin: 'left', distance: '50px', delay: 250 });
sr.reveal('.interval-right', { duration: 1000, interval: 250, origin: 'right', distance: '50px', delay: 250 });
sr.reveal('.interval-up', { duration: 1000, interval: 250, origin: 'top', distance: '50px', delay: 250 });
sr.reveal('.interval-bottom', { duration: 1000, interval: 250, origin: 'bottom', distance: '50px', delay: 250 });
sr.reveal('.interval-center', { duration: 1500, interval: 250, delay: 400, scale: 0.5 });
