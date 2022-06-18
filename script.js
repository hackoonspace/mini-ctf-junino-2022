//mlcq{jwtwcetizahkrc}
//chave: você conhece

const form = document.querySelector('.form');

form.addEventListener('submit', event => {
    event.preventDefault();

    const userInput = document.querySelector('.userInput').value;
    const passwordInput = document.querySelector('.passwordInput').value;

    if(userInput == 'admin' && passwordInput == 'admin') {
        //window.open('admin.txt');
        var link = document.createElement('a');
        link.href = 'admin.txt';
        link.download = 'admin.txt';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    } else {
        document.location.reload(true);
    }
})