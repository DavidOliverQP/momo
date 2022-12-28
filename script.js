let buttonsim = document.querySelector("#sim");

buttonsim.addEventListener('click', () => {getSim()})


function getSim(button){
    let container1 = document.querySelector('#inicio');
    container1.classList.add('hide');

    let container2 = document.querySelector('#fim');
    container2.classList.remove('hide');
    container2.classList.add('show');

};