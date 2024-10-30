const numRaindrops = 100;

for (let i = 0; i < numRaindrops; i++) {
    const raindrop = document.createElement('div');
    raindrop.classList.add('raindrop');
    const randomX = Math.random() * 100; // Random horizontal position
    const randomDelay = Math.random() * 2; // Random animation delay

    raindrop.style.left = `${randomX}vw`;
    raindrop.style.animationDuration = `${Math.random() * 6 + 1}s`; // Random duration between 1s and 3s
    raindrop.style.animationDelay = `-${randomDelay}s`; // Random delay

    document.body.appendChild(raindrop);
}