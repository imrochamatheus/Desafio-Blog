const sr = ScroolReveal({
    origin: 'top',
    distance: '50px',
    duration: 2000,
    reset: true
})

ScroolReveal().reveal('.posts', {delay : 200})
ScroolReveal().reveal('.post-header', {delay : 400})
ScroolReveal().reveal('.post-title', {delay : 500})
ScroolReveal().reveal('.post-content', {delay : 600})