

document.querySelector('.nav-select-wrapper').addEventListener('click', function() {
    this.querySelector('.nav-select').classList.toggle('open');
})




for (const option of document.querySelectorAll(".nav-option")) {

    option.addEventListener('click', function() {
        if (!this.classList.contains('selected')) {
            this.parentNode.querySelector('.nav-option.selected').classList.remove('selected');
            this.classList.add('selected');
            this.closest('.nav-select').querySelector('.nav-select_trigger span').textContent = this.textContent;
        }
    })
}


window.addEventListener('click', function(e) {
    const select = document.querySelector('.nav-select')
    if (!select.contains(e.target)) {
        select.classList.remove('open');
    }
});
