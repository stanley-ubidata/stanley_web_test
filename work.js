
function getInformation() {
let information = localStorage.getItem('UBIDOCS::Auth:apiToken');
let info2 = 'some other info';

// put info2 on div class container
    let container = document.querySelector('.container');
    container.innerHTML = 'Token: ' + information + ' ' + info2;

}