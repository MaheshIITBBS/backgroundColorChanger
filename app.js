
    const button = document.querySelector('button');

    button.addEventListener('click', () => {
        // Generate a random hex color
        const randomColor = '#' + Math.floor(Math.random() * 16777215).toString(16);

        // Apply the color to the background
        document.body.style.backgroundColor = randomColor;
    });

