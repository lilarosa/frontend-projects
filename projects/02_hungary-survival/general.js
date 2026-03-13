function showAnswer(button) {
  // 找到当前问题块
  const currentItem = button.closest('.qa-item');
  const currentAnswer = currentItem.querySelector('.qa-answer');

  // 1️⃣ 先关闭所有已经打开的答案
  const allAnswers = document.querySelectorAll('.qa-answer');
  allAnswers.forEach(answer => {
    answer.style.display = 'none';
  });

  // 2️⃣ 再打开当前点击的这个
  currentAnswer.style.display = 'block';
}
function showDetail(type) {
    const card = document.getElementById('detail-card');
    const text = document.getElementById('card-text');
    
    const contents = {
        'location': '<h3>📍 欧洲交换机</h3><p>匈牙利地处欧洲心脏，是内陆国家。虽然没海，但它是低价航空 Wizz Air 的大本营。从布达佩斯出发，20欧飞全欧洲不是梦！</p>',
        'weather': '<h3>🌡️ 气候变量</h3><p>这里没有南方那种湿冷的“法术攻击”。冬天暖气非常足，只需准备一件厚羽绒服即可。夏天虽然热，但树荫下非常凉快。</p>',
        'population': '<h3>👥 空间感</h3><p>这里的人口密度对亚洲人来说极度友好。你不用担心早高峰挤不上地铁，在这里，你的私人空间（Personal Space）可以得到极大扩展。</p>',
        'geography': '<h3>🌊 多瑙河的故事</h3><p>布达是布，佩斯是斯？不，布达是山，佩斯是平原。如果你喜欢爬山看日落，去布达；如果你喜欢派对和剁手，去佩斯。</p>',
        'funfacts': '<h3>💡 匈牙利Buff</h3><p>匈牙利语里，“我爱你”是 Szeretlek。这里的人姓名顺序和中国一样。还有，魔方是这里发明的，别忘了去魔方雕塑打个卡！</p>'
    };

    text.innerHTML = contents[type];
    card.style.display = 'block';
    card.scrollIntoView({ behavior: 'smooth' });
}

function closeCard() {
    document.getElementById('detail-card').style.display = 'none';
}