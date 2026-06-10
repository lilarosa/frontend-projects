function showAnswer(button) {
  // Find current question block
  const currentItem = button.closest('.qa-item');
  const currentAnswer = currentItem.querySelector('.qa-answer');

  // 1️⃣ Close all open answers first
  const allAnswers = document.querySelectorAll('.qa-answer');
  allAnswers.forEach(answer => {
    answer.style.display = 'none';
  });

  // 2️⃣ Open the clicked answer
  currentAnswer.style.display = 'block';
}
function showDetail(type) {
    const card = document.getElementById('detail-card');
    const text = document.getElementById('card-text');

    const contents = {
        'location': '<h3>📍 European hub</h3><p>Hungary sits in the heart of Europe. Budapest is a useful low-cost travel base, especially with Wizz Air routes.</p>',
        'weather': '<h3>🌡️ Climate notes</h3><p>Winters are cold but indoor heating is usually strong. Summers can be hot, but shade and evening walks are pleasant.</p>',
        'population': '<h3>👥 Space and density</h3><p>Budapest generally feels less dense than many large Asian cities, with more personal space in daily life.</p>',
        'geography': '<h3>🌊 The Danube story</h3><p>Buda is hillier and quieter; Pest is flatter, busier, and stronger for nightlife and shopping.</p>',
        'funfacts': '<h3>💡 Hungary fun facts</h3><p>Hungarian family names usually come first. The Rubik\'s Cube was invented in Hungary, and Szeretlek means I love you.</p>'
    };

    text.innerHTML = contents[type];
    card.style.display = 'block';
    card.scrollIntoView({ behavior: 'smooth' });
}

function closeCard() {
    document.getElementById('detail-card').style.display = 'none';
}
