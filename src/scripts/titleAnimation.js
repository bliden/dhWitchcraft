let titleCard = document.querySelector('.title-card');

// on load, show body to prevent FOUC
// begin title card fade in
document.addEventListener("DOMContentLoaded", function(){
    document.body.style.visibility = 'visible';
    titleCard.classList.remove('is-transitioning');
});