const sr = ScrollReveal({
    origin: 'top',
    distance: '50px',
    duration: 2000,
    reset: true
})

ScrollReveal().reveal('.posts', {delay: 200})
ScrollReveal().reveal('.post-header', {delay: 400})
ScrollReveal().reveal('.post-title', {delay: 500})
ScrollReveal().reveal('.post-content', {delay: 600})