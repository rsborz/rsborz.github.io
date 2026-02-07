// =============================================
// INTRO ANIMATION
// Black hole → rabbit jumps in → white hole → book emerges
// =============================================

(function() {
  const canvas = document.getElementById('intro-canvas');
  const ctx = canvas.getContext('2d');
  const overlay = document.getElementById('intro-overlay');
  const skipBtn = document.getElementById('skip-intro');

  let W, H, cx, cy;
  let frame = 0;
  let phase = 0; // 0=black hole forming, 1=rabbit appears, 2=rabbit jumps, 3=inversion, 4=book appears, 5=fade out
  let animId;
  let startTime;
  let particles = [];
  let skipped = false;

  function resize() {
    W = canvas.width = window.innerWidth;
    H = canvas.height = window.innerHeight;
    cx = W / 2;
    cy = H / 2;
  }

  window.addEventListener('resize', resize);
  resize();

  // Particle system for black hole
  class Particle {
    constructor() {
      this.reset();
    }
    reset() {
      const angle = Math.random() * Math.PI * 2;
      const dist = 150 + Math.random() * 300;
      this.x = cx + Math.cos(angle) * dist;
      this.y = cy + Math.sin(angle) * dist;
      this.size = 1 + Math.random() * 2;
      this.alpha = 0.3 + Math.random() * 0.5;
      this.speed = 0.5 + Math.random() * 1.5;
      this.angle = angle;
    }
    update(attract) {
      if (attract) {
        const dx = cx - this.x;
        const dy = cy - this.y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < 5) { this.reset(); return; }
        this.x += (dx / dist) * this.speed * 2;
        this.y += (dy / dist) * this.speed * 2;
        this.angle += 0.03;
        this.x += Math.cos(this.angle) * 0.5;
        this.y += Math.sin(this.angle) * 0.5;
      }
    }
    draw() {
      ctx.beginPath();
      ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(196, 162, 101, ${this.alpha})`;
      ctx.fill();
    }
  }

  for (let i = 0; i < 80; i++) {
    particles.push(new Particle());
  }

  // Simple rabbit silhouette
  function drawRabbit(x, y, scale, alpha) {
    ctx.save();
    ctx.translate(x, y);
    ctx.scale(scale, scale);
    ctx.globalAlpha = alpha;
    ctx.fillStyle = '#1a1a1a';
    ctx.strokeStyle = 'rgba(196, 162, 101, 0.6)';
    ctx.lineWidth = 1;

    // Body
    ctx.beginPath();
    ctx.ellipse(0, 10, 12, 16, 0, 0, Math.PI * 2);
    ctx.fill();
    ctx.stroke();

    // Head
    ctx.beginPath();
    ctx.ellipse(0, -10, 9, 10, 0, 0, Math.PI * 2);
    ctx.fill();
    ctx.stroke();

    // Left ear
    ctx.beginPath();
    ctx.ellipse(-5, -30, 3, 12, -0.2, 0, Math.PI * 2);
    ctx.fill();
    ctx.stroke();

    // Right ear
    ctx.beginPath();
    ctx.ellipse(5, -30, 3, 12, 0.2, 0, Math.PI * 2);
    ctx.fill();
    ctx.stroke();

    // Eye
    ctx.beginPath();
    ctx.arc(3, -12, 1.5, 0, Math.PI * 2);
    ctx.fillStyle = 'rgba(196, 162, 101, 0.8)';
    ctx.fill();

    ctx.restore();
  }

  // Draw black/white hole
  function drawHole(x, y, radius, isWhite, glowIntensity) {
    const gradient = ctx.createRadialGradient(x, y, 0, x, y, radius * 2);
    if (isWhite) {
      gradient.addColorStop(0, `rgba(244, 232, 209, ${glowIntensity})`);
      gradient.addColorStop(0.3, `rgba(196, 162, 101, ${glowIntensity * 0.5})`);
      gradient.addColorStop(0.6, `rgba(100, 70, 30, ${glowIntensity * 0.2})`);
      gradient.addColorStop(1, 'rgba(0, 0, 0, 0)');
    } else {
      gradient.addColorStop(0, 'rgba(0, 0, 0, 1)');
      gradient.addColorStop(0.4, 'rgba(10, 5, 2, 0.8)');
      gradient.addColorStop(0.7, `rgba(139, 37, 0, ${glowIntensity * 0.15})`);
      gradient.addColorStop(1, 'rgba(0, 0, 0, 0)');
    }
    ctx.beginPath();
    ctx.arc(x, y, radius * 2, 0, Math.PI * 2);
    ctx.fillStyle = gradient;
    ctx.fill();

    // Core
    ctx.beginPath();
    ctx.arc(x, y, radius * 0.4, 0, Math.PI * 2);
    ctx.fillStyle = isWhite ? `rgba(244, 232, 209, ${glowIntensity})` : 'rgba(0,0,0,1)';
    ctx.fill();

    // Ring
    ctx.beginPath();
    ctx.arc(x, y, radius, 0, Math.PI * 2);
    ctx.strokeStyle = isWhite
      ? `rgba(196, 162, 101, ${glowIntensity * 0.6})`
      : `rgba(139, 37, 0, ${glowIntensity * 0.3})`;
    ctx.lineWidth = 1.5;
    ctx.stroke();
  }

  // Draw book
  function drawBook(x, y, scale, alpha) {
    ctx.save();
    ctx.translate(x, y);
    ctx.scale(scale, scale);
    ctx.globalAlpha = alpha;

    // Book body
    ctx.fillStyle = '#3a1f0e';
    ctx.strokeStyle = 'rgba(196, 162, 101, 0.4)';
    ctx.lineWidth = 1.5;

    // Back cover
    ctx.fillRect(-42, -56, 84, 112);
    ctx.strokeRect(-42, -56, 84, 112);

    // Spine shadow
    ctx.fillStyle = 'rgba(0,0,0,0.3)';
    ctx.fillRect(-42, -56, 8, 112);

    // Front cover detail
    ctx.strokeStyle = 'rgba(196, 162, 101, 0.3)';
    ctx.strokeRect(-34, -48, 68, 96);

    // Title
    ctx.fillStyle = 'rgba(196, 162, 101, 0.8)';
    ctx.font = '600 11px Cinzel, serif';
    ctx.textAlign = 'center';
    ctx.fillText('THE', 0, -14);
    ctx.font = '700 16px Cinzel, serif';
    ctx.fillText('STORY', 0, 6);

    // Decorative line
    ctx.beginPath();
    ctx.moveTo(-16, 16);
    ctx.lineTo(16, 16);
    ctx.strokeStyle = 'rgba(196, 162, 101, 0.4)';
    ctx.lineWidth = 0.8;
    ctx.stroke();

    ctx.restore();
  }

  // Text phrases that flash during descent
  const phrases = [
    "everything is a story",
    "you cannot step outside",
    "the map is not the territory",
    "cognition is narrative",
    "meaning is made, not found",
    "stay open to correction"
  ];

  function drawPhrase(text, alpha) {
    ctx.save();
    ctx.globalAlpha = alpha;
    ctx.fillStyle = 'rgba(196, 162, 101, 0.7)';
    ctx.font = 'italic 14px "IM Fell English", serif';
    ctx.textAlign = 'center';
    ctx.fillText(text, cx, cy + 120);
    ctx.restore();
  }

  // Animation phases and timing (seconds)
  const TIMING = {
    blackHoleForm: 2,     // 0-2: black hole forms
    rabbitAppear: 3,      // 2-3: rabbit walks to edge
    rabbitJump: 4.5,      // 3-4.5: rabbit jumps in, phrases flash
    inversion: 6,         // 4.5-6: black inverts to white
    bookAppear: 8,        // 6-8: book rises from white hole
    titleHold: 10,        // 8-10: title holds
    fadeOut: 11           // 10-11: fade to book cover
  };

  function animate(timestamp) {
    if (!startTime) startTime = timestamp;
    const elapsed = (timestamp - startTime) / 1000;

    ctx.clearRect(0, 0, W, H);
    ctx.fillStyle = '#000';
    ctx.fillRect(0, 0, W, H);

    // Phase: Black hole forming (0 - 2s)
    if (elapsed < TIMING.blackHoleForm) {
      const t = elapsed / TIMING.blackHoleForm;
      const radius = 30 + t * 40;
      drawHole(cx, cy, radius, false, t);
      particles.forEach(p => { p.update(true); p.draw(); });
    }

    // Phase: Rabbit appears (2 - 3s)
    else if (elapsed < TIMING.rabbitAppear) {
      drawHole(cx, cy, 70, false, 1);
      particles.forEach(p => { p.update(true); p.draw(); });
      const t = (elapsed - TIMING.blackHoleForm) / (TIMING.rabbitAppear - TIMING.blackHoleForm);
      const rabbitX = cx + 200 - t * 120;
      drawRabbit(rabbitX, cy + 5, 1.2, t);
    }

    // Phase: Rabbit jumps in (3 - 4.5s)
    else if (elapsed < TIMING.rabbitJump) {
      const t = (elapsed - TIMING.rabbitAppear) / (TIMING.rabbitJump - TIMING.rabbitAppear);
      drawHole(cx, cy, 70, false, 1);
      particles.forEach(p => { p.update(true); p.draw(); });

      // Rabbit moves toward center and shrinks
      const rabbitX = cx + 80 - t * 80;
      const rabbitScale = 1.2 * (1 - t);
      const rabbitY = cy + 5 + Math.sin(t * Math.PI) * -30;
      if (t < 0.85) drawRabbit(rabbitX, rabbitY, rabbitScale, 1 - t * 0.5);

      // Flash phrases
      const phraseIdx = Math.floor(t * phrases.length);
      if (phraseIdx < phrases.length) {
        const phraseT = (t * phrases.length) % 1;
        const phraseAlpha = phraseT < 0.5 ? phraseT * 2 : 2 - phraseT * 2;
        drawPhrase(phrases[phraseIdx], phraseAlpha * 0.5);
      }
    }

    // Phase: Inversion — black hole becomes white hole (4.5 - 6s)
    else if (elapsed < TIMING.inversion) {
      const t = (elapsed - TIMING.rabbitJump) / (TIMING.inversion - TIMING.rabbitJump);

      // Flash white
      if (t < 0.3) {
        const flashAlpha = Math.sin(t / 0.3 * Math.PI);
        ctx.fillStyle = `rgba(244, 232, 209, ${flashAlpha * 0.3})`;
        ctx.fillRect(0, 0, W, H);
      }

      // Transition from black to white hole
      const radius = 70 + t * 10;
      if (t < 0.5) {
        drawHole(cx, cy, radius, false, 1 - t * 2);
      }
      drawHole(cx, cy, radius, true, t);
    }

    // Phase: Book appears (6 - 8s)
    else if (elapsed < TIMING.bookAppear) {
      const t = (elapsed - TIMING.inversion) / (TIMING.bookAppear - TIMING.inversion);
      drawHole(cx, cy, 80, true, 1 - t * 0.3);

      // Book rises from center
      const bookY = cy + 40 - t * 40;
      const bookScale = 0.5 + t * 1.5;
      const bookAlpha = t;
      drawBook(cx, bookY, bookScale, bookAlpha);
    }

    // Phase: Title holds (8 - 10s)
    else if (elapsed < TIMING.titleHold) {
      const t = (elapsed - TIMING.bookAppear) / (TIMING.titleHold - TIMING.bookAppear);
      drawHole(cx, cy, 80, true, 0.7 - t * 0.5);
      drawBook(cx, cy, 2, 1);

      // Subtitle fades in
      ctx.save();
      ctx.globalAlpha = t;
      ctx.fillStyle = 'rgba(196, 162, 101, 0.5)';
      ctx.font = 'italic 13px "IM Fell English", serif';
      ctx.textAlign = 'center';
      ctx.fillText('The stories that build reality', cx, cy + 80);
      ctx.restore();
    }

    // Phase: Fade out (10 - 11s)
    else if (elapsed < TIMING.fadeOut) {
      const t = (elapsed - TIMING.titleHold) / (TIMING.fadeOut - TIMING.titleHold);
      drawBook(cx, cy, 2, 1 - t);

      ctx.save();
      ctx.globalAlpha = 1 - t;
      ctx.fillStyle = 'rgba(196, 162, 101, 0.5)';
      ctx.font = 'italic 13px "IM Fell English", serif';
      ctx.textAlign = 'center';
      ctx.fillText('The stories that build reality', cx, cy + 80);
      ctx.restore();
    }

    // Done
    else {
      endIntro();
      return;
    }

    animId = requestAnimationFrame(animate);
  }

  function endIntro() {
    if (skipped) return;
    skipped = true;
    cancelAnimationFrame(animId);
    overlay.style.transition = 'opacity 0.8s';
    overlay.style.opacity = '0';
    setTimeout(() => {
      overlay.style.display = 'none';
      document.getElementById('book-container').classList.remove('hidden');
    }, 800);
  }

  // Skip button
  skipBtn.addEventListener('click', endIntro);

  // Also skip on any key press
  document.addEventListener('keydown', function handler(e) {
    if (!skipped) {
      endIntro();
      document.removeEventListener('keydown', handler);
    }
  });

  // Start animation
  animId = requestAnimationFrame(animate);
})();
