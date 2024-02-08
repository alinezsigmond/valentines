function changeNo() {
    const image = document.getElementById('main');
    const title = document.getElementById('title');
    const titleNo = document.getElementById('title-no');
    const buttonNo = document.getElementById('button-no');

    image.src='./img/073.png'
    title.classList.add('hidden');
    buttonNo.classList.add('hidden');
    titleNo.classList.remove('hidden');
}

function changeYes() {
    const image = document.getElementById('main');
    const title = document.getElementById('title');
    const titleNo = document.getElementById('title-no');
    const celebration = document.getElementById('celebration');
    const buttonNo = document.getElementById('button-no');
    const buttonYes = document.getElementById('button-yes');

    image.src='./img/076.png'
    titleNo.classList.add('hidden');
    buttonYes.classList.add('hidden');
    buttonNo.classList.add('hidden');
    title.classList.add('hidden');
    celebration.classList.remove('hidden');
}