// footnote toggles

let footNotes = document.querySelectorAll('.footnote');

for( let note of footNotes ){
    note.addEventListener('click', function(e){
        this.firstElementChild.classList.toggle('is-active');
    });
};