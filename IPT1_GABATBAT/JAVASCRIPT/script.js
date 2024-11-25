
document.addEventListener("DOMContentLoaded", () => {
    const matrixContainer = document.createElement("div");
    matrixContainer.classList.add("matrix");
    document.body.appendChild(matrixContainer);

    const columns = Math.floor(window.innerWidth / 20); 
    const rows = Math.floor(window.innerHeight / 20); 

    
    for (let i = 0; i < columns; i++) {
        let matrixChar = document.createElement("div");
        matrixChar.classList.add("matrix-code");
        matrixChar.style.left = `${i * 20}px`;
        matrixChar.innerHTML = Math.random() > 0.5 ? '1' : '0'; 
        matrixContainer.appendChild(matrixChar);

       
        let speed = Math.random() * 5 + 1;
        matrixChar.style.animationDuration = `${speed}s`;

        
        setInterval(() => {
            matrixChar.innerHTML = Math.random() > 0.5 ? '1' : '0';
        }, 100);
    }
});
