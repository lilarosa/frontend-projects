const buttons = document.querySelectorAll('[data-target]');

buttons.forEach((button) => {
  button.addEventListener('click', () => {
    const target = document.getElementById(button.dataset.target);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  });
});

const answers = document.querySelectorAll('.answer');
answers.forEach((answer) => {
  answer.addEventListener('click', () => {
    answers.forEach((btn) => btn.classList.remove('is-selected'));
    answer.classList.add('is-selected');
  });
});
