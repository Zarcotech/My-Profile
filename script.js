const numRaindrops = 100;

for (let i = 0; i < numRaindrops; i++) {
    const raindrop = document.createElement('div');
    raindrop.classList.add('raindrop');
    const randomX = Math.random() * 100;
    const randomDelay = Math.random() * 2;

    raindrop.style.left = `${randomX}vw`;
    raindrop.style.animationDuration = `${Math.random() * 6 + 1}s`;
    raindrop.style.animationDelay = `-${randomDelay}s`;

    document.body.appendChild(raindrop);
}
