const cms = document.querySelectorAll('.cm');

cms.forEach(cm => {
    cm.addEventListener('click', () => {
        removeActiveClasses();
        cm.classList.add('active');
    })
})

function removeActiveClasses(){
    cms.forEach(cm => {
        cm.classList.remove('active');
    })
}
