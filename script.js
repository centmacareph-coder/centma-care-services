const menuBtn=document.querySelector('.menu-toggle');
const nav=document.querySelector('.nav');
menuBtn?.addEventListener('click',()=>{const open=nav.classList.toggle('open');menuBtn.setAttribute('aria-expanded',open);});
document.querySelectorAll('.nav a').forEach(a=>a.addEventListener('click',()=>nav.classList.remove('open')));

document.getElementById('contactForm')?.addEventListener('submit',function(e){
  e.preventDefault();
  const data=new FormData(this);
  const name=data.get('name')||'';
  const phone=data.get('phone')||'';
  const service=data.get('service')||'';
  const message=data.get('message')||'';
  const text=`Hello Centma Care Services,%0A%0AMy name is ${encodeURIComponent(name)}.%0APhone/WhatsApp: ${encodeURIComponent(phone)}.%0AService: ${encodeURIComponent(service)}.%0AMessage: ${encodeURIComponent(message)}.%0A%0AI would like to make an enquiry.`;
  window.open(`https://wa.me/2349160006043?text=${text}`,'_blank');
});

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
