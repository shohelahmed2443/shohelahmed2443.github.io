// ===== Site interactions =====
(function(){
  if (window.__siteInit) return; window.__siteInit = true;
  const root = document.documentElement;
  const header = document.querySelector('.site-header');
  const progress = document.getElementById('progress');

  // Theme toggle
  const saved = localStorage.getItem('theme');
  if (saved === 'dark') root.classList.add('theme-dark');
  document.getElementById('themeToggle')?.addEventListener('click', ()=>{
    root.classList.toggle('theme-dark');
    localStorage.setItem('theme', root.classList.contains('theme-dark') ? 'dark' : 'light');
  });

  // Mobile nav
  const tgl = document.querySelector('.nav-toggle');
  const menu = document.getElementById('menu');
  tgl?.addEventListener('click', ()=>{
    const e = tgl.getAttribute('aria-expanded') === 'true';
    tgl.setAttribute('aria-expanded', (!e).toString());
    menu?.classList.toggle('show');
  });

  // Scroll progress + header shrink
  window.addEventListener('scroll', ()=>{
    if (header) header.classList.toggle('shrink', window.scrollY > 10);
    if (progress){
      const h = document.documentElement;
      progress.style.width = (h.scrollTop/(h.scrollHeight - h.clientHeight) * 100) + '%';
    }
  }, {passive:true});

  // Reveal on scroll
  const io = new IntersectionObserver((entries)=>{
    entries.forEach(e => { if (e.isIntersecting){ e.target.classList.add('show'); io.unobserve(e.target); } });
  }, {threshold:.12});
  document.querySelectorAll('.reveal').forEach(el => io.observe(el));

  // Home page extras (typewriter, particles, KPIs)
  if (document.body.classList.contains('page-home')){
    const typeTarget = document.getElementById('typeTarget');
    try {
      if (typeTarget){
        const lines = JSON.parse(typeTarget.getAttribute('data-lines')||'[]');
        let i=0, j=0, del=false;
        const tick = () => {
          if (!lines.length) return;
          if (!del && j <= lines[i].length){ typeTarget.textContent = lines[i].slice(0, j++); }
          else if (del && j >= 0){ typeTarget.textContent = lines[i].slice(0, j--); }
          if (j === lines[i].length + 1){ del = true; setTimeout(tick, 1100); return; }
          if (j === -1){ del = false; i = (i+1) % lines.length; j = 0; }
          setTimeout(tick, del ? 24 : 30);
        };
        tick();
      }
    } catch {}

    const canvas = document.getElementById('particles');
    if (canvas){
      const ctx = canvas.getContext('2d'); let w,h,pts;
      function resize(){
        const p = canvas.parentElement.getBoundingClientRect();
        canvas.width = Math.max(320, p.width + 40);
        canvas.height = Math.max(260, p.height + 40);
        w = canvas.width; h = canvas.height;
        pts = Array.from({length: 42}, () => ({ x: Math.random()*w, y: Math.random()*h, vx:(Math.random()-.5)*.6, vy:(Math.random()-.5)*.6 }));
      }
      function step(){
        ctx.clearRect(0,0,w,h);
        for(const a of pts){
          a.x+=a.vx; a.y+=a.vy;
          if(a.x<0||a.x>w) a.vx*=-1;
          if(a.y<0||a.y>h) a.vy*=-1;
          ctx.fillStyle='rgba(91,160,255,.85)';
          ctx.beginPath(); ctx.arc(a.x,a.y,2,0,Math.PI*2); ctx.fill();
          for(const b of pts){
            const dx=a.x-b.x, dy=a.y-b.y, d=dx*dx+dy*dy;
            if(d<900){ ctx.strokeStyle='rgba(122,91,255,.15)'; ctx.lineWidth=.6; ctx.beginPath(); ctx.moveTo(a.x,a.y); ctx.lineTo(b.x,b.y); ctx.stroke(); }
          }
        }
        requestAnimationFrame(step);
      }
      resize(); step(); window.addEventListener('resize', resize);
    }

    document.querySelectorAll('.kpi-num').forEach(el=>{
      const target = Number(el.dataset.count||'0'); const start = performance.now(); const dur = 900;
      const step = t => { const p = Math.min(1,(t-start)/dur); el.textContent = Math.round(p*target); if(p<1) requestAnimationFrame(step); };
      requestAnimationFrame(step);
    });
  }

  // Research filters
  if (document.body.classList.contains('page-research')){
    const search = document.getElementById('searchProjects');
    const chips = Array.from(document.querySelectorAll('.chip')).filter(c=>c.dataset.tag!=='all');
    const cards = Array.from(document.querySelectorAll('.project'));
    function apply(){
      const q = (search?.value || "").toLowerCase();
      const active = Array.from(document.querySelectorAll('.chip.active')).map(c=>c.dataset.tag).filter(t=>t!=='all');
      cards.forEach(card=>{
        const text = card.innerText.toLowerCase();
        const tags = (card.dataset.tags||"").split(',');
        const matchQ = !q || text.includes(q);
        const matchTags = !active.length || active.every(t=>tags.includes(t));
        card.style.display = (matchQ && matchTags) ? "" : "none";
      });
    }
    document.querySelectorAll('.chip').forEach(c=>c.addEventListener('click', ()=>{ c.classList.toggle('active'); if(c.dataset.tag==='all'){document.querySelectorAll('.chip').forEach(x=>x.classList.remove('active')); c.classList.add('active');} apply(); }));
    search?.addEventListener('input', apply);
    apply();
  }

  // Publications controls
  if (document.body.classList.contains('page-pubs')){
    const search = document.getElementById('pubSearch');
    const yearSel = document.getElementById('yearSel');
    const items = Array.from(document.querySelectorAll('ol.papers > li'));
    function apply(){
      const q = (search?.value || "").toLowerCase();
      const y = yearSel?.value || "all";
      items.forEach(li=>{
        const ly = li.dataset.year;
        const t = li.innerText.toLowerCase();
        const okY = (y === "all" || y === ly);
        const okQ = (!q || t.includes(q));
        li.style.display = (okY && okQ) ? "" : "none";
      });
    }
    search?.addEventListener('input', apply);
    yearSel?.addEventListener('change', apply);
    apply();

    document.getElementById('copyBib')?.addEventListener('click', ()=>{
      const entries = Array.from(document.querySelectorAll('pre.bibtex')).map(p=>p.textContent.trim()).join("\n\n");
      navigator.clipboard.writeText(entries).then(()=>{
        const btn = document.getElementById('copyBib'); btn.textContent = 'Copied!'; setTimeout(()=>btn.textContent='Copy BibTeX', 1200);
      });
    });
    document.getElementById('dlBib')?.addEventListener('click', ()=>{
      const entries = Array.from(document.querySelectorAll('pre.bibtex')).map(p=>p.textContent.trim()).join("\n\n");
      const blob = new Blob([entries], {type:'text/plain'});
      const a = document.createElement('a'); a.href = URL.createObjectURL(blob); a.download = 'publications.bib'; a.click();
    });
  }

  const y = document.getElementById('year'); if (y) y.textContent = new Date().getFullYear();
  const lu = document.getElementById('lastUpdated'); if (lu) lu.textContent = document.lastModified.split(' ')[0];
})();