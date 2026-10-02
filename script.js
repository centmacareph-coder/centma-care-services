const menuBtn=document.querySelector('.menu-toggle');
const nav=document.querySelector('.nav');
menuBtn?.addEventListener('click',()=>{const open=nav.classList.toggle('open');menuBtn.setAttribute('aria-expanded',open);});
document.querySelectorAll('.nav a').forEach(a=>a.addEventListener('click',()=>nav.classList.remove('open')));


// Editable website content: values are read from content/site.json.
// When the site is connected to the CMS, changes made there appear here without editing HTML.
(async function loadEditableContent(){
  try {
    const res = await fetch('content/site.json', {cache:'no-store'});
    if(!res.ok) return;
    const content = await res.json();
    const get = (path) => path.split('.').reduce((o,k)=>o?.[k], content);
    document.querySelectorAll('[data-cms]').forEach(el => {
      const value = get(el.dataset.cms);
      if(typeof value === 'string') el.textContent = value;
    });
    document.querySelectorAll('[data-cms-bg]').forEach(el => {
      const value = get(el.dataset.cmsBg);
      if(typeof value === 'string' && value) el.style.backgroundImage = `url("${value}")`;
    });
    document.querySelectorAll('[data-cms-href]').forEach(el => {
      const value = get(el.dataset.cmsHref);
      if(typeof value === 'string') el.href = value;
    });
  } catch (e) {
    // The site still works with its built-in fallback content if the JSON is unavailable.
  }
})();
