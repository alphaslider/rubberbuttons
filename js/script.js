const grid = document.getElementById('sequencer-grid');

for (let i = 0; i < 64; i++) {
    const btn = document.createElement('button');
    btn.className = 'rubber-button';
    btn.addEventListener('click', () => btn.classList.toggle('recessed'));
    grid.appendChild(btn);
}
