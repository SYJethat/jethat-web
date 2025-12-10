document.addEventListener('DOMContentLoaded', () => {
    
    // --- Mobile Menu Toggle ---
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');

    hamburger.addEventListener('click', () => {
        navLinks.style.display = navLinks.style.display === 'flex' ? 'none' : 'flex';
        if(navLinks.style.display === 'flex') {
            navLinks.style.flexDirection = 'column';
            navLinks.style.position = 'absolute';
            navLinks.style.top = '70px';
            navLinks.style.left = '0';
            navLinks.style.width = '100%';
            navLinks.style.background = 'rgba(5, 10, 16, 0.98)';
            navLinks.style.padding = '20px';
        }
    });

    // --- Terminal Typing Effect ---
    const terminalContent = document.getElementById('terminal-content');
    const lines = [
        "> System initialized...",
        "> Connecting to secure server...",
        "> Access granted.",
        "> Running initial security scan...",
        "> [SUCCESS] Firewall: Active",
        "> [SUCCESS] Threat Level: Low",
        "> [INFO] AI Monitoring: ON",
        "> Ready for input...",
        "<span class='cursor'>_</span>"
    ];

    let lineIndex = 0;
    let charIndex = 0;
    
    function typeLine() {
        if (lineIndex < lines.length - 1) {
            let currentLine = lines[lineIndex];
            
            // Create a new div for the line
            if (charIndex === 0) {
                const lineDiv = document.createElement('div');
                lineDiv.className = 'line';
                terminalContent.appendChild(lineDiv);
            }

            // Get the current line div
            const currentLineDiv = terminalContent.lastElementChild;
            
            // Type characters
            if (charIndex < currentLine.length) {
                currentLineDiv.textContent += currentLine.charAt(charIndex);
                charIndex++;
                setTimeout(typeLine, 30); // Typing speed
            } else {
                lineIndex++;
                charIndex = 0;
                setTimeout(typeLine, 300); // Pause between lines
            }
        } else {
            // Add the blinking cursor line at the end
            const cursorDiv = document.createElement('div');
            cursorDiv.innerHTML = lines[lines.length - 1];
            terminalContent.appendChild(cursorDiv);
            
            // CSS Animation for blinking is handled via class (add in CSS if needed, or simple opacity loop)
            setInterval(() => {
                const cursor = document.querySelector('.cursor');
                if(cursor) cursor.style.opacity = cursor.style.opacity === '0' ? '1' : '0';
            }, 500);
        }
    }

    // Start typing when section is in view (Intersection Observer)
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                typeLine();
                observer.disconnect(); // Run only once
            }
        });
    });

    observer.observe(document.querySelector('.terminal-section'));

});