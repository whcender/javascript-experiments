const questions = document.querySelectorAll('.question');


questions.forEach((quesiton) => {
    // console.log(quesiton);
    const btn = quesiton.querySelector('.question-btn');

    btn.addEventListener('click', () => {
        quesiton.classList.toggle('show-text')
    });
});