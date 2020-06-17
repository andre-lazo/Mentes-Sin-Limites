window.sr=ScrollReveal();
sr.reveal('.navbar',{
  duration: 2000,
  origin: 'bottom'
});
sr.reveal('.header-content-left',{
  duration: 2000,
  origin: 'top',
  distance:'300px'
});
sr.reveal('.header-content-right',{
  duration: 2000,
  origin: 'right',
  distance:'300px'
});
sr.reveal('.header-btn',{
  duration: 2000,
  origin: 'bottom',
  delay:1000
});
sr.reveal('#testimonio',{
  duration: 2000,
  origin: 'left',
  distance:'300px',
  viewfactor:0.2
});
sr.reveal('#info1',{
  duration: 2000,
  origin: 'bottom'
});
sr.reveal('.info-right',{
  duration: 2000,
  origin: 'right',
  distance:'300px'
});
sr.reveal('.info2-right',{
  duration: 2000,
  origin: 'right',
  distance:'300px'
});
sr.reveal('.info2-left',{
  duration: 2000,
  origin: 'left',
    distance:'300px'
});
sr.reveal('#contact',{
  duration: 2000,
  origin: 'bottom',
  distance:'300px',
  viewfactor:0.2
});
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});
