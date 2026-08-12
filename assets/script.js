(function(){
  const data = window.SITE_DATA || {};
  const root = document.documentElement;
  const savedTheme = localStorage.getItem("shohel-theme");
  if (savedTheme) root.dataset.theme = savedTheme;
  function qs(sel, ctx=document){ return ctx.querySelector(sel); }
  function qsa(sel, ctx=document){ return [...ctx.querySelectorAll(sel)]; }

  const themeBtn = qs("#themeToggle");
  if(themeBtn){
    themeBtn.addEventListener("click", ()=>{
      const next = root.dataset.theme === "dark" ? "light" : "dark";
      root.dataset.theme = next;
      localStorage.setItem("shohel-theme", next);
    });
  }

  const menuBtn = qs("#menuToggle"), nav = qs("#navLinks");
  if(menuBtn && nav){
    menuBtn.addEventListener("click", ()=>{
      nav.classList.toggle("open");
      menuBtn.setAttribute("aria-expanded", nav.classList.contains("open"));
    });
    qsa("a", nav).forEach(a=>a.addEventListener("click", ()=>nav.classList.remove("open")));
  }

  const progress = qs("#progress");
  function updateProgress(){
    if(!progress) return;
    const max = document.documentElement.scrollHeight - innerHeight;
    progress.style.width = (max > 0 ? (scrollY/max)*100 : 0) + "%";
  }
  addEventListener("scroll", updateProgress, {passive:true}); updateProgress();

  const observer = new IntersectionObserver(entries=>{
    entries.forEach(entry=>{
      if(entry.isIntersecting){ entry.target.classList.add("visible"); observer.unobserve(entry.target); }
    });
  }, {threshold:.08});
  qsa(".reveal").forEach(el=>observer.observe(el));

  qsa("[data-count]").forEach(el=>{
    const target = Number(el.dataset.count), suffix = el.dataset.suffix || "";
    let started=false;
    const o = new IntersectionObserver(es=>es.forEach(e=>{
      if(e.isIntersecting && !started){
        started=true; const start=performance.now(), duration=900;
        function tick(now){
          const p=Math.min(1,(now-start)/duration);
          el.textContent=Math.round(target*(1-Math.pow(1-p,3)))+suffix;
          if(p<1) requestAnimationFrame(tick);
        } requestAnimationFrame(tick); o.disconnect();
      }
    }),{threshold:.5}); o.observe(el);
  });

  const typeTarget = qs("#typeTarget");
  if(typeTarget){
    const lines = [
      "Behavioural plasticity and foraging dynamics",
      "Trait-structured ODE/PDE ecological models",
      "Data-driven mathematical biology and causal dynamics",
      "Environmental and infectious-disease modelling"
    ];
    let i=0,j=0,deleting=false;
    function type(){
      const line=lines[i];
      j += deleting ? -1 : 1;
      typeTarget.textContent=line.slice(0,j);
      let delay=deleting?28:48;
      if(!deleting && j===line.length){ deleting=true; delay=1250; }
      else if(deleting && j===0){ deleting=false; i=(i+1)%lines.length; delay=220; }
      setTimeout(type,delay);
    } type();
  }

  const year = qs("#year"); if(year) year.textContent = new Date().getFullYear();
  function tagList(tags){ return `<div class="chips">${tags.map(t=>`<span class="chip">${t}</span>`).join("")}</div>`; }

  const researchGrid = qs("#researchGrid");
  if(researchGrid && data.researchAreas){
    researchGrid.innerHTML=data.researchAreas.map(r=>`
      <article class="card lift reveal">
        <div class="card-top"><h3>${r.title}</h3><span class="status">${r.methods[0]}</span></div>
        <p>${r.description}</p>${tagList(r.methods)}
      </article>`).join("");
    qsa(".reveal",researchGrid).forEach(el=>observer.observe(el));
  }

  const featuredGrid=qs("#featuredProjects");
  if(featuredGrid && data.featuredProjects){
    featuredGrid.innerHTML=data.featuredProjects.map((p,idx)=>`
      <article class="card lift project-card reveal" data-category="${p.category.toLowerCase()}">
        <div class="card-top"><h3>${p.title}</h3><span class="status">${p.status}</span></div>
        <p>${p.description}</p>
        <button type="button" aria-expanded="false">Details +</button>
        <div class="project-extra"><strong>Collaborators:</strong> ${p.collaborators}<br><strong>Context:</strong> ${p.venue}</div>
      </article>`).join("");
    qsa(".project-card button",featuredGrid).forEach(btn=>btn.addEventListener("click",()=>{
      const card=btn.closest(".project-card"); card.classList.toggle("open");
      const open=card.classList.contains("open"); btn.textContent=open?"Details −":"Details +"; btn.setAttribute("aria-expanded",open);
    }));
    qsa(".reveal",featuredGrid).forEach(el=>observer.observe(el));
  }

  function renderTimeline(id, items, formatter){
    const el=qs(id); if(!el || !items) return;
    el.innerHTML=items.map(formatter).join("");
  }

  renderTimeline("#talkTimeline",data.talks,x=>`<div class="timeline-row"><div class="timeline-date">${x.date}</div><div><div class="timeline-title">${x.title}</div><div class="timeline-sub">${x.event} · ${x.place}</div></div></div>`);
  renderTimeline("#teachingTimeline",data.teaching,x=>`<div class="timeline-row"><div class="timeline-date">${x.date}</div><div><div class="timeline-title">${x.title}</div><div class="timeline-sub">${x.place}</div></div></div>`);
  renderTimeline("#educationTimeline",data.education,x=>`<div class="timeline-row"><div class="timeline-date">${x.date}</div><div><div class="timeline-title">${x.title}</div><div class="timeline-sub">${x.place}${x.note?` · ${x.note}`:""}</div></div></div>`);
  renderTimeline("#mentorshipTimeline",data.mentorship,x=>`<div class="timeline-row"><div class="timeline-date">${x.date}</div><div><div class="timeline-title">${x.student}</div><div class="timeline-sub">${x.program} · ${x.home}</div></div></div>`);
  renderTimeline("#awardTimeline",data.awards,x=>`<div class="timeline-row"><div class="timeline-date">${x.year}</div><div><div class="timeline-title">${x.title}</div><div class="timeline-sub">${x.note}</div></div></div>`);
  renderTimeline("#serviceTimeline",data.service,x=>`<div class="timeline-row"><div class="timeline-date">${x.date}</div><div><div class="timeline-title">${x.title}</div><div class="timeline-sub">${x.note}</div></div></div>`);

  const pubList=qs("#publicationList");
  if(pubList && data.publications){
    const search=qs("#pubSearch"), type=qs("#pubType"), yearSel=qs("#pubYear"), sort=qs("#pubSort"), count=qs("#pubCount");
    const years=[...new Set(data.publications.map(p=>p.year).filter(Boolean))].sort((a,b)=>b-a);
    if(yearSel) yearSel.innerHTML='<option value="all">All years</option>'+years.map(y=>`<option value="${y}">${y}</option>`).join("");
    function renderPubs(){
      const q=(search?.value||"").toLowerCase().trim(), t=type?.value||"all", y=yearSel?.value||"all", s=sort?.value||"newest";
      let rows=data.publications.filter(p=>{
        const hay=`${p.title} ${p.authors} ${p.venue} ${p.details} ${p.year||""}`.toLowerCase();
        return (!q||hay.includes(q)) && (t==="all"||p.type===t) && (y==="all"||String(p.year)===y);
      });
      rows.sort((a,b)=>s==="oldest"?(a.year||9999)-(b.year||9999):(b.year||0)-(a.year||0));
      pubList.innerHTML=rows.map((p,i)=>`<article class="pub-item">
        <div class="pub-title">${p.title}</div>
        <div class="pub-meta">${p.authors}</div>
        <div class="pub-meta"><span class="pub-year">${p.year||"Current"}</span> · ${p.venue}${p.details?` · ${p.details}`:""} · ${p.type==="published"?"Published / accepted":p.type==="review"?"Under review / submitted":"In preparation"}</div>
      </article>`).join("") || '<p class="intro">No matching publications found.</p>';
      if(count) count.textContent=`${rows.length} item${rows.length===1?"":"s"}`;
    }
    [search,type,yearSel,sort].filter(Boolean).forEach(el=>el.addEventListener(el.tagName==="INPUT"?"input":"change",renderPubs));
    renderPubs();
  }

  const projectSearch=qs("#projectSearch");
  const projectButtons=qsa("[data-project-filter]");
  if(projectSearch || projectButtons.length){
    let active="all";
    function filterProjects(){
      const q=(projectSearch?.value||"").toLowerCase().trim();
      qsa(".project-card").forEach(card=>{
        const matchCat=active==="all"||card.dataset.category===active;
        const matchText=!q||card.textContent.toLowerCase().includes(q);
        card.style.display=matchCat&&matchText?"":"none";
      });
    }
    projectButtons.forEach(btn=>btn.addEventListener("click",()=>{
      projectButtons.forEach(b=>b.classList.remove("active"));btn.classList.add("active");active=btn.dataset.projectFilter;filterProjects();
    }));
    projectSearch?.addEventListener("input",filterProjects);
  }

  const emailCopy=qs("#copyEmail");
  if(emailCopy){
    emailCopy.addEventListener("click", async ()=>{
      try{ await navigator.clipboard.writeText(data.profile.email); emailCopy.textContent="Email copied ✓"; setTimeout(()=>emailCopy.textContent="Copy email",1600); }
      catch{ location.href="mailto:"+data.profile.email; }
    });
  }
})();