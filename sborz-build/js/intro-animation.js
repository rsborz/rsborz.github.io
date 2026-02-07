// =============================================
// CINEMATIC INTRO ANIMATION — Canvas 2D
// Rabbit hops through black/white hole portals
// Book emerges from growing white light
// Ouroboros snake infinity on cover, eyes glow
// Book opens, spiral vortex, redirect
// ~15 seconds, fast and punchy
// =============================================

(function() {
  const canvas = document.getElementById('intro-canvas');
  const ctx = canvas.getContext('2d');
  const overlay = document.getElementById('intro-overlay');
  const skipBtn = document.getElementById('skip-intro');

  let W, H;
  let animId;
  let startTime = null;
  let ended = false;
  let trailParticles = [];

  function resize() {
    W = canvas.width = window.innerWidth;
    H = canvas.height = window.innerHeight;
    initStars();
  }
  window.addEventListener('resize', resize);
  resize();

  // ---- EASING ----
  function easeInOut(t) { return t < 0.5 ? 2*t*t : -1+(4-2*t)*t; }
  function easeOut(t) { return 1 - Math.pow(1 - t, 3); }
  function easeIn(t) { return t * t * t; }
  function easeOutBack(t) { const c = 1.7; return 1 + (c+1)*Math.pow(t-1,3) + c*Math.pow(t-1,2); }
  function lerp(a, b, t) { return a + (b - a) * Math.max(0, Math.min(1, t)); }
  function clamp(v, lo, hi) { return Math.max(lo, Math.min(hi, v)); }

  // ---- PORTAL POSITIONS ----
  function P() {
    return {
      bh1: { x: W*0.5,  y: H*0.5 },
      bh2: { x: W*0.25, y: H*0.72 },
      bh3: { x: W*0.75, y: H*0.75 },
      wh1: { x: W*0.2,  y: H*0.25 },
      wh2: { x: W*0.8,  y: H*0.22 },
    };
  }

  // ---- STARS ----
  let stars = [];
  function initStars() {
    stars = [];
    for (let i = 0; i < 100; i++) {
      stars.push({ x: Math.random()*W, y: Math.random()*H, s: 0.3+Math.random()*1.2, f: Math.random()*6.28, sp: 0.4+Math.random() });
    }
  }
  function drawStars(t) {
    for (const s of stars) {
      const a = 0.15 + Math.sin(t*s.sp + s.f) * 0.12;
      ctx.beginPath();
      ctx.arc(s.x, s.y, s.s, 0, 6.28);
      ctx.fillStyle = `rgba(196,162,101,${a})`;
      ctx.fill();
    }
  }

  // ---- TRAIL PARTICLES ----
  function addTrail(x, y) {
    trailParticles.push({ x, y, vx:(Math.random()-0.5)*2, vy:(Math.random()-0.5)*2, life:1, decay:0.025+Math.random()*0.03, size:1+Math.random()*1.5 });
  }
  function drawTrails() {
    for (let i = trailParticles.length-1; i >= 0; i--) {
      const p = trailParticles[i];
      p.x += p.vx; p.y += p.vy; p.life -= p.decay;
      if (p.life <= 0) { trailParticles.splice(i,1); continue; }
      ctx.beginPath();
      ctx.arc(p.x, p.y, p.size*p.life, 0, 6.28);
      ctx.fillStyle = `rgba(196,162,101,${p.life*0.5})`;
      ctx.fill();
    }
  }

  // ---- PORTAL ----
  function drawPortal(x, y, radius, isWhite, intensity, time) {
    if (intensity <= 0 || radius <= 0) return;
    ctx.save();
    ctx.translate(x, y);

    // Outer glow
    const g = ctx.createRadialGradient(0,0,0, 0,0,radius*2.5);
    if (isWhite) {
      g.addColorStop(0, `rgba(244,232,209,${intensity*0.5})`);
      g.addColorStop(0.3, `rgba(196,162,101,${intensity*0.2})`);
      g.addColorStop(1, 'rgba(0,0,0,0)');
    } else {
      g.addColorStop(0, `rgba(0,0,0,${intensity})`);
      g.addColorStop(0.4, `rgba(20,5,0,${intensity*0.6})`);
      g.addColorStop(0.7, `rgba(139,37,0,${intensity*0.1})`);
      g.addColorStop(1, 'rgba(0,0,0,0)');
    }
    ctx.beginPath(); ctx.arc(0,0,radius*2.5,0,6.28); ctx.fillStyle = g; ctx.fill();

    // Spinning ring particles
    const n = 14;
    for (let i = 0; i < n; i++) {
      const angle = (i/n)*6.28 + time * (isWhite ? 2.2 : -2.8);
      const dist = radius * (0.65 + Math.sin(time*3+i)*0.25);
      const px = Math.cos(angle)*dist, py = Math.sin(angle)*dist;
      ctx.beginPath(); ctx.arc(px, py, 1+Math.sin(time*2+i*0.5)*0.5, 0, 6.28);
      ctx.fillStyle = isWhite
        ? `rgba(244,232,209,${intensity*(0.25+Math.sin(time+i)*0.15)})`
        : `rgba(196,162,101,${intensity*(0.15+Math.sin(time+i)*0.1)})`;
      ctx.fill();
    }

    // Rings
    for (let i = 0; i < 3; i++) {
      ctx.beginPath(); ctx.arc(0,0,radius*(0.6+i*0.3),0,6.28);
      ctx.strokeStyle = isWhite
        ? `rgba(196,162,101,${intensity*(0.25-i*0.06)})`
        : `rgba(139,37,0,${intensity*(0.2-i*0.05)})`;
      ctx.lineWidth = 1.2-i*0.3; ctx.stroke();
    }

    // Core
    const cg = ctx.createRadialGradient(0,0,0, 0,0,radius*0.45);
    if (isWhite) {
      cg.addColorStop(0, `rgba(255,250,240,${intensity})`);
      cg.addColorStop(1, `rgba(244,232,209,${intensity*0.2})`);
    } else {
      cg.addColorStop(0, `rgba(0,0,0,${intensity})`);
      cg.addColorStop(1, `rgba(10,3,0,${intensity*0.4})`);
    }
    ctx.beginPath(); ctx.arc(0,0,radius*0.45,0,6.28); ctx.fillStyle = cg; ctx.fill();

    ctx.restore();
  }

  // ---- RABBIT ----
  function drawRabbit(x, y, scale, alpha, facingLeft, hopPhase) {
    ctx.save();
    ctx.translate(x, y);
    ctx.scale(facingLeft ? -scale : scale, scale);
    ctx.globalAlpha = clamp(alpha, 0, 1);

    const bounce = hopPhase ? Math.abs(Math.sin(hopPhase * Math.PI)) * -14 : 0;
    ctx.translate(0, bounce);

    // Shadow
    ctx.beginPath(); ctx.ellipse(0,28,9*(1-bounce*0.01),3,0,0,6.28);
    ctx.fillStyle = `rgba(0,0,0,${0.25+bounce*0.004})`; ctx.fill();

    // Body
    ctx.beginPath(); ctx.ellipse(0,12,12,16,0,0,6.28);
    const bg = ctx.createRadialGradient(-3,8,0,0,12,17);
    bg.addColorStop(0,'#e8ddd0'); bg.addColorStop(0.5,'#d4c8b8'); bg.addColorStop(1,'#b8a898');
    ctx.fillStyle = bg; ctx.fill();
    ctx.strokeStyle='rgba(196,162,101,0.25)'; ctx.lineWidth=0.7; ctx.stroke();

    // Tail
    ctx.beginPath(); ctx.arc(-12,18,4.5,0,6.28); ctx.fillStyle='#ede5da'; ctx.fill();

    // Head
    ctx.beginPath(); ctx.ellipse(2,-8,9.5,10.5,0,0,6.28);
    const hg = ctx.createRadialGradient(0,-10,0,2,-8,11);
    hg.addColorStop(0,'#ede5da'); hg.addColorStop(1,'#d4c8b8');
    ctx.fillStyle = hg; ctx.fill(); ctx.stroke();

    // Ears
    ctx.beginPath(); ctx.ellipse(-3,-27,3.5,12,-0.15,0,6.28); ctx.fillStyle='#d4c8b8'; ctx.fill(); ctx.stroke();
    ctx.beginPath(); ctx.ellipse(-3,-26,1.8,8,-0.15,0,6.28); ctx.fillStyle='rgba(180,130,120,0.25)'; ctx.fill();
    ctx.beginPath(); ctx.ellipse(6,-29,3.5,13,0.2,0,6.28); ctx.fillStyle='#d4c8b8'; ctx.fill(); ctx.stroke();
    ctx.beginPath(); ctx.ellipse(6,-28,1.8,9,0.2,0,6.28); ctx.fillStyle='rgba(180,130,120,0.25)'; ctx.fill();

    // Eye
    ctx.beginPath(); ctx.arc(7,-10,2.2,0,6.28); ctx.fillStyle='#2c1810'; ctx.fill();
    ctx.beginPath(); ctx.arc(7.8,-11,0.7,0,6.28); ctx.fillStyle='rgba(244,232,209,0.75)'; ctx.fill();

    // Nose
    ctx.beginPath(); ctx.arc(10.5,-6,1.3,0,6.28); ctx.fillStyle='rgba(180,130,120,0.5)'; ctx.fill();

    // Whiskers
    ctx.beginPath();
    ctx.moveTo(10,-5); ctx.lineTo(18,-7);
    ctx.moveTo(10,-4); ctx.lineTo(18,-3);
    ctx.strokeStyle='rgba(196,162,101,0.2)'; ctx.lineWidth=0.4; ctx.stroke();

    // Legs
    ctx.beginPath(); ctx.ellipse(5,25,3,5.5,0.1,0,6.28); ctx.fillStyle='#d4c8b8'; ctx.fill(); ctx.stroke();
    ctx.beginPath(); ctx.ellipse(-7,24,4.5,6.5,-0.15,0,6.28); ctx.fillStyle='#cfc2b0'; ctx.fill(); ctx.stroke();

    ctx.restore();
  }

  // Rabbit looking around
  function drawRabbitLook(x, y, scale, alpha, lookAngle) {
    ctx.save();
    ctx.translate(x, y);
    ctx.scale(scale, scale);
    ctx.globalAlpha = clamp(alpha, 0, 1);

    // Shadow
    ctx.beginPath(); ctx.ellipse(0,28,9,3,0,0,6.28);
    ctx.fillStyle='rgba(0,0,0,0.25)'; ctx.fill();

    // Body
    ctx.beginPath(); ctx.ellipse(0,12,12,16,0,0,6.28);
    const bg = ctx.createRadialGradient(-3,8,0,0,12,17);
    bg.addColorStop(0,'#e8ddd0'); bg.addColorStop(0.5,'#d4c8b8'); bg.addColorStop(1,'#b8a898');
    ctx.fillStyle=bg; ctx.fill();
    ctx.strokeStyle='rgba(196,162,101,0.25)'; ctx.lineWidth=0.7; ctx.stroke();

    // Head group with look rotation
    ctx.save();
    ctx.translate(2, -8);
    ctx.rotate(lookAngle * 0.12);

    ctx.beginPath(); ctx.ellipse(0,0,9.5,10.5,0,0,6.28);
    const hg = ctx.createRadialGradient(-2,-2,0,0,0,11);
    hg.addColorStop(0,'#ede5da'); hg.addColorStop(1,'#d4c8b8');
    ctx.fillStyle=hg; ctx.fill(); ctx.stroke();

    // Ears
    ctx.beginPath(); ctx.ellipse(-4,-19,3.5,12,-0.15+lookAngle*0.04,0,6.28); ctx.fillStyle='#d4c8b8'; ctx.fill(); ctx.stroke();
    ctx.beginPath(); ctx.ellipse(5,-21,3.5,13,0.2+lookAngle*0.04,0,6.28); ctx.fillStyle='#d4c8b8'; ctx.fill(); ctx.stroke();

    // Eye follows look direction
    const ex = lookAngle * 1.5;
    ctx.beginPath(); ctx.arc(5+ex,-2,2.2,0,6.28); ctx.fillStyle='#2c1810'; ctx.fill();
    ctx.beginPath(); ctx.arc(5.8+ex,-3,0.7,0,6.28); ctx.fillStyle='rgba(244,232,209,0.75)'; ctx.fill();
    ctx.beginPath(); ctx.arc(8.5+ex*0.4,2,1.3,0,6.28); ctx.fillStyle='rgba(180,130,120,0.5)'; ctx.fill();

    ctx.restore();

    // Legs
    ctx.beginPath(); ctx.ellipse(5,25,3,5.5,0.1,0,6.28); ctx.fillStyle='#d4c8b8'; ctx.fill(); ctx.stroke();
    ctx.beginPath(); ctx.ellipse(-7,24,4.5,6.5,-0.15,0,6.28); ctx.fillStyle='#cfc2b0'; ctx.fill(); ctx.stroke();

    ctx.restore();
  }

  // ---- OUROBOROS INFINITY ----
  function drawOuroboros(x, y, scale, alpha, eyeGlow) {
    ctx.save();
    ctx.translate(x, y);
    ctx.scale(scale, scale);
    ctx.globalAlpha = clamp(alpha, 0, 1);

    const a = 48, b = 24;
    const steps = 80;

    // Draw lemniscate path
    ctx.beginPath();
    for (let i = 0; i <= steps; i++) {
      const t = (i/steps) * 6.28;
      const d = 1 + Math.sin(t)*Math.sin(t);
      const px = a*Math.cos(t)/d;
      const py = b*Math.sin(t)*Math.cos(t)/d;
      i === 0 ? ctx.moveTo(px,py) : ctx.lineTo(px,py);
    }

    // Snake body layers
    ctx.strokeStyle = `rgba(196,162,101,${alpha*0.25})`; ctx.lineWidth = 9; ctx.stroke();
    ctx.strokeStyle = `rgba(50,80,40,${alpha*0.9})`; ctx.lineWidth = 7; ctx.stroke();
    ctx.strokeStyle = `rgba(80,120,60,${alpha*0.5})`; ctx.lineWidth = 5;
    ctx.setLineDash([2,3]); ctx.stroke(); ctx.setLineDash([]);
    ctx.strokeStyle = `rgba(30,50,25,${alpha*0.4})`; ctx.lineWidth = 2.5; ctx.stroke();

    // Head 1 (right)
    const hx1 = a*0.9, hy1 = 2;
    ctx.beginPath(); ctx.ellipse(hx1,hy1,6.5,4.5,0.1,0,6.28);
    ctx.fillStyle = `rgba(55,85,45,${alpha})`; ctx.fill();
    // Eye 1
    ctx.beginPath(); ctx.arc(hx1+3,hy1-1.5,1.8,0,6.28);
    ctx.fillStyle = `rgba(255,200,50,${eyeGlow})`; ctx.fill();
    if (eyeGlow > 0.3) {
      const eg = ctx.createRadialGradient(hx1+3,hy1-1.5,0,hx1+3,hy1-1.5,7);
      eg.addColorStop(0,`rgba(255,200,50,${eyeGlow*0.35})`);
      eg.addColorStop(1,'rgba(255,200,50,0)');
      ctx.beginPath(); ctx.arc(hx1+3,hy1-1.5,7,0,6.28); ctx.fillStyle=eg; ctx.fill();
    }
    ctx.beginPath(); ctx.ellipse(hx1+3,hy1-1.5,0.6,1.2,0,0,6.28);
    ctx.fillStyle=`rgba(0,0,0,${alpha})`; ctx.fill();

    // Head 2 (left)
    const hx2 = -a*0.9, hy2 = -2;
    ctx.beginPath(); ctx.ellipse(hx2,hy2,6.5,4.5,Math.PI+0.1,0,6.28);
    ctx.fillStyle = `rgba(55,85,45,${alpha})`; ctx.fill();
    ctx.beginPath(); ctx.arc(hx2-3,hy2+1.5,1.8,0,6.28);
    ctx.fillStyle = `rgba(255,200,50,${eyeGlow})`; ctx.fill();
    if (eyeGlow > 0.3) {
      const eg2 = ctx.createRadialGradient(hx2-3,hy2+1.5,0,hx2-3,hy2+1.5,7);
      eg2.addColorStop(0,`rgba(255,200,50,${eyeGlow*0.35})`);
      eg2.addColorStop(1,'rgba(255,200,50,0)');
      ctx.beginPath(); ctx.arc(hx2-3,hy2+1.5,7,0,6.28); ctx.fillStyle=eg2; ctx.fill();
    }
    ctx.beginPath(); ctx.ellipse(hx2-3,hy2+1.5,0.6,1.2,0,0,6.28);
    ctx.fillStyle=`rgba(0,0,0,${alpha})`; ctx.fill();

    // Encircling ring
    ctx.beginPath(); ctx.ellipse(0,0,a+12,b+12,0,0,6.28);
    ctx.strokeStyle=`rgba(196,162,101,${alpha*0.15})`; ctx.lineWidth=0.8; ctx.stroke();

    ctx.restore();
  }

  // ---- BOOK / TOME ----
  function drawTome(x, y, scale, alpha, eyeGlow) {
    ctx.save();
    ctx.translate(x, y);
    ctx.scale(scale, scale);
    ctx.globalAlpha = clamp(alpha, 0, 1);

    const bw = 110, bh = 150;

    // Shadow
    ctx.fillStyle = 'rgba(0,0,0,0.35)';
    ctx.fillRect(-bw+5, -bh+5, bw*2, bh*2);

    // Cover
    const lg = ctx.createLinearGradient(-bw,-bh,bw,bh);
    lg.addColorStop(0,'#3a1f0e'); lg.addColorStop(0.3,'#4a2a14');
    lg.addColorStop(0.5,'#3a1f0e'); lg.addColorStop(0.7,'#4a2a14'); lg.addColorStop(1,'#2a1508');
    ctx.fillStyle = lg;
    ctx.fillRect(-bw, -bh, bw*2, bh*2);

    // Borders
    ctx.strokeStyle='rgba(196,162,101,0.35)'; ctx.lineWidth=2;
    ctx.strokeRect(-bw+9,-bh+9,(bw-9)*2,(bh-9)*2);
    ctx.strokeStyle='rgba(196,162,101,0.18)'; ctx.lineWidth=1;
    ctx.strokeRect(-bw+15,-bh+15,(bw-15)*2,(bh-15)*2);

    // Corner dots
    [[-bw+12,-bh+12],[bw-12,-bh+12],[-bw+12,bh-12],[bw-12,bh-12]].forEach(([cx,cy]) => {
      ctx.beginPath(); ctx.arc(cx,cy,3,0,6.28);
      ctx.fillStyle='rgba(196,162,101,0.25)'; ctx.fill();
    });

    // Spine
    const sp = ctx.createLinearGradient(-bw,0,-bw+18,0);
    sp.addColorStop(0,'rgba(0,0,0,0.45)');
    sp.addColorStop(0.5,'rgba(0,0,0,0.08)');
    sp.addColorStop(1,'rgba(255,255,255,0.02)');
    ctx.fillStyle=sp; ctx.fillRect(-bw,-bh,18,bh*2);

    // Title
    ctx.fillStyle='rgba(196,162,101,0.85)';
    ctx.textAlign='center'; ctx.textBaseline='middle';
    ctx.font='600 16px Cinzel,serif'; ctx.fillText('THE',0,-38);
    ctx.font='700 26px Cinzel,serif'; ctx.fillText('STORY',0,-8);

    // Line
    ctx.beginPath(); ctx.moveTo(-28,10); ctx.lineTo(28,10);
    ctx.strokeStyle='rgba(196,162,101,0.4)'; ctx.lineWidth=1; ctx.stroke();

    // Ouroboros
    drawOuroboros(0, 58, 0.5, alpha, eyeGlow);

    // Author
    ctx.fillStyle='rgba(196,162,101,0.45)';
    ctx.font='italic 10px "IM Fell English",serif';
    ctx.fillText('Ronald Morris Sborz Jr.',0,112);

    ctx.restore();
  }

  // ---- SPIRAL VORTEX ----
  function drawVortex(x, y, radius, rot, alpha) {
    ctx.save();
    ctx.translate(x, y); ctx.rotate(rot); ctx.globalAlpha = clamp(alpha,0,1);
    for (let a = 0; a < 5; a++) {
      const armAngle = (a/5)*6.28;
      ctx.beginPath();
      for (let i = 0; i < 50; i++) {
        const t = i/50, r = radius*t, angle = armAngle + t*12.56;
        const px = Math.cos(angle)*r, py = Math.sin(angle)*r;
        i === 0 ? ctx.moveTo(px,py) : ctx.lineTo(px,py);
      }
      ctx.strokeStyle=`rgba(196,162,101,${alpha*(0.25-a*0.04)})`;
      ctx.lineWidth=1.8; ctx.stroke();
    }
    ctx.restore();
  }

  // ============================
  // TIMELINE (~15 seconds)
  // ============================
  // 0-1:    Rabbit hops from left, center BH forms
  // 1-2:    Rabbit jumps into center BH
  // 2-3:    WH upper-left, rabbit pops out, looks around
  // 3-4:    Rabbit hops to BH bottom-left, jumps in
  // 4-5:    WH upper-right, rabbit exits, looks around
  // 5-6:    Rabbit hops to BH bottom-right, gone
  // 6-8:    White dot center grows to circle
  // 8-10.5: Book approaches with ouroboros, eyes glow
  // 10.5-12: Book opens, intro text
  // 12-13.5: Spiral vortex, book vanishes
  // 13.5-15: Fade out, redirect

  function animate(ts) {
    if (!startTime) startTime = ts;
    const time = (ts - startTime) / 1000;
    const p = P();

    ctx.fillStyle = '#050208';
    ctx.fillRect(0, 0, W, H);
    drawStars(time);
    drawTrails();

    // ---- Phase 1: Rabbit enters, BH forms at center (0-1s) ----
    if (time < 1) {
      const t = easeOut(time);
      drawPortal(p.bh1.x, p.bh1.y, 22+t*12, false, t, time);
      const rx = lerp(-40, W*0.63, t);
      drawRabbit(rx, p.bh1.y+5, 0.75, t, false, t*4);
      if (Math.random()<0.3) addTrail(rx-8, p.bh1.y+22);
    }

    // ---- Phase 2: Rabbit jumps into center BH (1-2s) ----
    else if (time < 2) {
      const t = easeInOut(time - 1);
      drawPortal(p.bh1.x, p.bh1.y, 34, false, 1, time);
      if (t < 0.7) {
        const mt = t / 0.7;
        const rx = lerp(W*0.63, p.bh1.x, mt);
        const arc = mt > 0.3 ? Math.sin((mt-0.3)/0.7*Math.PI)*-38 : 0;
        drawRabbit(rx, p.bh1.y+5+arc, lerp(0.75,0.2,mt), 1-mt*0.4, false, (time-1)*6);
        addTrail(rx, p.bh1.y+18+arc);
      }
      if (t > 0.65) {
        drawPortal(p.bh1.x, p.bh1.y, 34+(t-0.65)/0.35*14, false, 1+(t-0.65), time);
      }
    }

    // ---- Phase 3: WH upper-left, rabbit pops out (2-3s) ----
    else if (time < 3) {
      const t = time - 2;
      drawPortal(p.bh1.x, p.bh1.y, 34, false, Math.max(0,1-t*3.5), time);
      const ws = easeOutBack(clamp(t*2,0,1));
      drawPortal(p.wh1.x, p.wh1.y, 24*ws, true, clamp(t*2.5,0,1), time);
      if (t > 0.28) {
        const rt = (t-0.28)/0.72;
        const ps = easeOutBack(clamp(rt*2,0,1));
        drawRabbitLook(p.wh1.x+28, p.wh1.y+10, 0.65*ps, clamp(rt*2,0,1), Math.sin(rt*9.4)*1.4);
      }
      if (t > 0.55) {
        const bt = (t-0.55)/0.45;
        drawPortal(p.bh2.x, p.bh2.y, 18+bt*12, false, bt*0.8, time);
      }
    }

    // ---- Phase 4: Rabbit hops to BH bottom-left (3-4s) ----
    else if (time < 4) {
      const t = time - 3;
      drawPortal(p.wh1.x, p.wh1.y, 24, true, Math.max(0,1-t*2.5), time);
      drawPortal(p.bh2.x, p.bh2.y, 30, false, 1, time);
      if (t < 0.55) {
        const mt = easeInOut(t/0.55);
        const rx = lerp(p.wh1.x+28, p.bh2.x, mt);
        const ry = lerp(p.wh1.y+10, p.bh2.y, mt);
        const arc = Math.sin(mt*Math.PI)*-32;
        drawRabbit(rx, ry+arc, lerp(0.65,0.45,mt), 1, true, t*6);
        addTrail(rx, ry+arc+14);
      } else {
        const st = (t-0.55)/0.45;
        const sc = lerp(0.45,0,easeIn(st));
        if (sc > 0.04) drawRabbit(p.bh2.x, p.bh2.y, sc, 1-st, true, t*6);
        drawPortal(p.bh2.x, p.bh2.y, 30+st*10, false, 1+st*0.3, time);
      }
    }

    // ---- Phase 5: WH upper-right, rabbit exits (4-5s) ----
    else if (time < 5) {
      const t = time - 4;
      drawPortal(p.bh2.x, p.bh2.y, 30, false, Math.max(0,1-t*3.5), time);
      const ws = easeOutBack(clamp(t*2,0,1));
      drawPortal(p.wh2.x, p.wh2.y, 24*ws, true, clamp(t*2.5,0,1), time);
      if (t > 0.22) {
        const rt = (t-0.22)/0.78;
        const ps = easeOutBack(clamp(rt*2,0,1));
        drawRabbitLook(p.wh2.x-24, p.wh2.y+10, 0.65*ps, clamp(rt*2,0,1), Math.sin(rt*7.8)*1.6);
      }
      if (t > 0.5) {
        const bt = (t-0.5)/0.5;
        drawPortal(p.bh3.x, p.bh3.y, 18+bt*12, false, bt*0.8, time);
      }
    }

    // ---- Phase 6: Rabbit hops to BH bottom-right and vanishes (5-6s) ----
    else if (time < 6) {
      const t = time - 5;
      drawPortal(p.wh2.x, p.wh2.y, 24, true, Math.max(0,1-t*2.8), time);
      drawPortal(p.bh3.x, p.bh3.y, 30, false, 1, time);
      if (t < 0.5) {
        const mt = easeInOut(t/0.5);
        const rx = lerp(p.wh2.x-24, p.bh3.x, mt);
        const ry = lerp(p.wh2.y+10, p.bh3.y, mt);
        const arc = Math.sin(mt*Math.PI)*-35;
        drawRabbit(rx, ry+arc, lerp(0.65,0.4,mt), 1, true, t*7);
        addTrail(rx, ry+arc+14);
      } else {
        const st = (t-0.5)/0.5;
        const sc = lerp(0.4,0,easeIn(st));
        if (sc > 0.04) drawRabbit(p.bh3.x, p.bh3.y, sc, 1-st, true, t*7);
        drawPortal(p.bh3.x, p.bh3.y, 30+st*12, false, 1+st*0.3, time);
      }
    }

    // ---- Phase 7: White dot grows at center (6-8s) ----
    else if (time < 8) {
      const t = (time-6)/2;
      // Fade last BH
      if (t < 0.25) drawPortal(p.bh3.x, p.bh3.y, 30, false, (1-t/0.25)*0.4, time);

      // Growing white dot
      const dotR = easeOut(t) * Math.min(W,H) * 0.22;
      const cg = ctx.createRadialGradient(W/2,H/2,0, W/2,H/2,dotR);
      cg.addColorStop(0, `rgba(255,252,245,${0.3+t*0.7})`);
      cg.addColorStop(0.35, `rgba(244,232,209,${0.2+t*0.5})`);
      cg.addColorStop(0.7, `rgba(196,162,101,${t*0.15})`);
      cg.addColorStop(1, 'rgba(0,0,0,0)');
      ctx.beginPath(); ctx.arc(W/2,H/2,dotR,0,6.28); ctx.fillStyle=cg; ctx.fill();

      // Circle outline
      if (t > 0.35) {
        const ct = (t-0.35)/0.65;
        ctx.beginPath();
        ctx.arc(W/2, H/2, dotR*0.55, -Math.PI/2, -Math.PI/2 + 6.28*easeOut(ct));
        ctx.strokeStyle=`rgba(196,162,101,${ct*0.55})`; ctx.lineWidth=1.8; ctx.stroke();
      }
    }

    // ---- Phase 8: Tome approaches with ouroboros, eyes glow (8-10.5s) ----
    else if (time < 10.5) {
      const t = (time-8)/2.5;

      // Bg glow
      const bg = ctx.createRadialGradient(W/2,H/2,0, W/2,H/2,Math.min(W,H)*0.35);
      bg.addColorStop(0,'rgba(244,232,209,0.06)'); bg.addColorStop(1,'rgba(0,0,0,0)');
      ctx.beginPath(); ctx.arc(W/2,H/2,Math.min(W,H)*0.35,0,6.28); ctx.fillStyle=bg; ctx.fill();

      const bookScale = easeOut(clamp(t*1.15,0,1)) * 1.7 + 0.25;
      const bookAlpha = easeOut(clamp(t*2,0,1));
      const eyeGlow = t > 0.35 ? easeInOut(clamp((t-0.35)/0.3,0,1)) : 0;

      drawTome(W/2, H/2, bookScale, bookAlpha, eyeGlow);
    }

    // ---- Phase 9: Book opens — intro text (10.5-12s) ----
    else if (time < 12) {
      const t = (time-10.5)/1.5;

      drawTome(W/2, H/2, 1.95, 1-t*0.35, 1);

      // Parchment spreading
      const ow = easeOut(t)*W*0.65, oh = easeOut(t)*H*0.55;
      const og = ctx.createRadialGradient(W/2,H/2,0, W/2,H/2,Math.max(ow,oh));
      og.addColorStop(0,`rgba(244,232,209,${t*0.82})`);
      og.addColorStop(0.7,`rgba(232,213,180,${t*0.55})`);
      og.addColorStop(1,'rgba(0,0,0,0)');
      ctx.fillStyle=og; ctx.fillRect(W/2-ow/2,H/2-oh/2,ow,oh);

      // Text
      if (t > 0.18) {
        const ta = easeOut(clamp((t-0.18)/0.35,0,1));
        ctx.save(); ctx.globalAlpha=ta;
        ctx.fillStyle='#2c1810'; ctx.textAlign='center'; ctx.textBaseline='middle';
        ctx.font='italic 15px "IM Fell English",serif';
        ctx.fillText('You are a thing that tells itself',W/2,H/2-28);
        ctx.fillText('stories about what it is.',W/2,H/2-6);
        ctx.font='italic 12px "IM Fell English",serif';
        ctx.fillStyle='rgba(44,24,16,0.55)';
        ctx.fillText('Those stories construct the reality you inhabit.',W/2,H/2+24);
        ctx.restore();
      }

      // Page turn
      if (t > 0.78) {
        const tt = (t-0.78)/0.22;
        ctx.fillStyle=`rgba(244,232,209,${tt*0.35})`;
        ctx.fillRect(W/2,0,W/2*tt,H);
      }
    }

    // ---- Phase 10: Spiral vortex (12-13.5s) ----
    else if (time < 13.5) {
      const t = (time-12)/1.5;
      const pa = 1-easeIn(t);
      const pg = ctx.createRadialGradient(W/2,H/2,0, W/2,H/2,Math.min(W,H)*0.35);
      pg.addColorStop(0,`rgba(244,232,209,${pa*0.6})`); pg.addColorStop(1,'rgba(0,0,0,0)');
      ctx.fillStyle=pg; ctx.fillRect(0,0,W,H);

      drawVortex(W/2, H/2, lerp(40,Math.min(W,H)*0.45,easeOut(t)), t*18.84, 1-t*0.55);

      if (t < 0.4) {
        ctx.save(); ctx.globalAlpha=(0.4-t)/0.4*0.5;
        ctx.fillStyle='#2c1810'; ctx.textAlign='center';
        ctx.font='italic 15px "IM Fell English",serif';
        ctx.fillText('You are a thing that tells itself',W/2,H/2-28);
        ctx.fillText('stories about what it is.',W/2,H/2-6);
        ctx.restore();
      }
    }

    // ---- Phase 11: Fade out (13.5-15s) ----
    else if (time < 15) {
      const t = (time-13.5)/1.5;
      if (t < 0.4) {
        const ga = (0.4-t)*0.25;
        const gg = ctx.createRadialGradient(W/2,H/2,0,W/2,H/2,80);
        gg.addColorStop(0,`rgba(196,162,101,${ga})`); gg.addColorStop(1,'rgba(0,0,0,0)');
        ctx.beginPath(); ctx.arc(W/2,H/2,80,0,6.28); ctx.fillStyle=gg; ctx.fill();
      }
      ctx.fillStyle=`rgba(26,14,5,${easeIn(t)})`; ctx.fillRect(0,0,W,H);
    }

    // Done
    else {
      endIntro();
      return;
    }

    animId = requestAnimationFrame(animate);
  }

  function endIntro() {
    if (ended) return;
    ended = true;
    cancelAnimationFrame(animId);
    window.location.href = 'index.html';
  }

  // Skip controls
  skipBtn.addEventListener('click', endIntro);
  document.addEventListener('keydown', function h(e) {
    if (!ended) { endIntro(); document.removeEventListener('keydown', h); }
  });
  canvas.addEventListener('touchstart', function h() {
    if (!ended) { endIntro(); canvas.removeEventListener('touchstart', h); }
  });

  // Start
  animId = requestAnimationFrame(animate);
})();
