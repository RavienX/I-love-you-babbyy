document.addEventListener('DOMContentLoaded', () => {
    const loveButton = document.getElementById('loveButton');
    const container = document.querySelector('.container');
    const kittenContainer = document.getElementById('kittenContainer');
    let isKittenShown = false;

    // Updated GIF URL for a real kitten giving kisses
    const kittenGif = "kiss.gif";

    loveButton.addEventListener('click', () => {
        // Create heart elements
        for (let i = 0; i < 20; i++) {
            createHeart();
        }

        // Change background color
        document.body.style.backgroundColor = getRandomColor();

        // Show kitten if not already shown
        if (!isKittenShown) {
            showKitten();
            isKittenShown = true;
        } else {
            // Reset kitten animation
            kittenContainer.innerHTML = '';
            showKitten();
        }
    });

    function createHeart() {
        const heart = document.createElement('div');
        heart.classList.add('heart');
        heart.style.left = Math.random() * 100 + 'vw';
        heart.style.animationDuration = Math.random() * 2 + 3 + 's';
        heart.style.fontSize = Math.random() * 20 + 10 + 'px';
        heart.innerText = '❤️';
        document.body.appendChild(heart);

        // Remove heart after animation
        heart.addEventListener('animationend', () => {
            heart.remove();
        });
    }

    function showKitten() {
        const kittenImg = document.createElement('img');
        kittenImg.classList.add('kitten');
        kittenImg.src = kittenGif;
        kittenImg.alt = "Real kitten giving kisses";

        kittenContainer.appendChild(kittenImg);

        // Trigger animation
        setTimeout(() => {
            kittenImg.classList.add('show');
        }, 100);

        // Remove kitten after 3 seconds
        setTimeout(() => {
            kittenImg.classList.remove('show');
            setTimeout(() => {
                kittenContainer.innerHTML = '';
                isKittenShown = false;
            }, 500);
        }, 3000);
    }

    function getRandomColor() {
        const pastelColors = [
            '#FFD1DC', '#FFEBCD', '#E6E6FA', '#FFDAB9', '#F0FFF0',
            '#FFF0F5', '#F0FFFF', '#FFF5EE', '#F5FFFA', '#FFFACD'
        ];
        return pastelColors[Math.floor(Math.random() * pastelColors.length)];
    }
});
