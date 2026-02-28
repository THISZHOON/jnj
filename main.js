document.addEventListener('DOMContentLoaded', () => {
  const generateBtn = document.getElementById('generate-btn');
  const ballDisplay = document.getElementById('ball-display');
  const themeToggle = document.getElementById('theme-toggle');
  const body = document.body;

  // Theme Logic
  const savedTheme = localStorage.getItem('theme') || 'dark-mode';
  body.className = savedTheme;

  themeToggle.addEventListener('click', () => {
    let newTheme;
    if (body.classList.contains('dark-mode')) {
      newTheme = 'light-mode';
      body.classList.replace('dark-mode', 'light-mode');
    } else {
      newTheme = 'dark-mode';
      body.classList.replace('light-mode', 'dark-mode');
    }
    localStorage.setItem('theme', newTheme);
    
    // Sync Cusdis Theme
    if (window.CUSDIS) {
      window.CUSDIS.setTheme(newTheme === 'dark-mode' ? 'dark' : 'light');
    }
  });

  // Lotto Logic
  const getBallColorClass = (num) => {
    if (num <= 10) return 'ball-range-1';
    if (num <= 20) return 'ball-range-2';
    if (num <= 30) return 'ball-range-3';
    if (num <= 40) return 'ball-range-4';
    return 'ball-range-5';
  };

  const generateLottoNumbers = () => {
    const numbers = new Set();
    while (numbers.size < 6) {
      numbers.add(Math.floor(Math.random() * 45) + 1);
    }
    
    const sortedNumbers = Array.from(numbers).sort((a, b) => a - b);
    
    let bonus;
    do {
      bonus = Math.floor(Math.random() * 45) + 1;
    } while (numbers.has(bonus));

    return { main: sortedNumbers, bonus };
  };

  const createBall = (num, isBonus = false, delay = 0) => {
    const ball = document.createElement('div');
    ball.className = `ball ${getBallColorClass(num)} ${isBonus ? 'bonus' : ''}`;
    ball.textContent = num;
    ball.style.animationDelay = `${delay}s`;
    return ball;
  };

  const renderNumbers = () => {
    generateBtn.disabled = true;
    generateBtn.style.opacity = '0.5';
    generateBtn.style.cursor = 'not-allowed';

    ballDisplay.innerHTML = '';

    const { main, bonus } = generateLottoNumbers();

    main.forEach((num, index) => {
      const ball = createBall(num, false, index * 0.15);
      ballDisplay.appendChild(ball);
    });

    const bonusBall = createBall(bonus, true, main.length * 0.15 + 0.2);
    ballDisplay.appendChild(bonusBall);

    setTimeout(() => {
      generateBtn.disabled = false;
      generateBtn.style.opacity = '1';
      generateBtn.style.cursor = 'pointer';
    }, (main.length + 1) * 150 + 500);
  };

  generateBtn.addEventListener('click', renderNumbers);
});
