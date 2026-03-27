document.addEventListener('DOMContentLoaded', () => {
    /* --- Matrix Rain Effect --- */
    const canvas = document.getElementById('matrix');
    if (canvas) {
        const ctx = canvas.getContext('2d');
        const fontSize = 14;
        let columns = 0;
        let drops = [];

        const setCanvasSize = () => {
            canvas.width = canvas.parentElement.offsetWidth;
            canvas.height = canvas.parentElement.offsetHeight;
            columns = canvas.width / fontSize;
            drops = [];
            for (let x = 0; x < columns; x++) {
                drops[x] = 1; /* Start y-coordinate for each column */
            }
        };

        // Initial setup
        setCanvasSize();
        // Adjust on resize
        window.addEventListener('resize', setCanvasSize);

        const matrixChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789@#$%^&*()<>{}[]|";
        const characters = matrixChars.split('');

        const drawMatrix = () => {
            // Semi-transparent deep slate background to create trail effect
            ctx.fillStyle = "rgba(15, 23, 42, 0.1)";
            ctx.fillRect(0, 0, canvas.width, canvas.height);

            // Text color (using Vue's green for consistency)
            ctx.fillStyle = "#42b883";
            ctx.font = fontSize + "px 'JetBrains Mono', monospace";

            for (let i = 0; i < drops.length; i++) {
                const text = characters[Math.floor(Math.random() * characters.length)];
                ctx.fillText(text, i * fontSize, drops[i] * fontSize);

                // If the drop is off-screen and randomly chosen, restart it at the top
                if (drops[i] * fontSize > canvas.height && Math.random() > 0.95) {
                    drops[i] = 0;
                }

                // Move down
                drops[i]++;
            }
        };

        // Render at ~20 frames per second
        setInterval(drawMatrix, 50);
    }
});