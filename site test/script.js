// Simulate loading delay
window.addEventListener('DOMContentLoaded', () => {
    setTimeout(() => {
        document.getElementById('loadingScreen').style.opacity = '0';
        setTimeout(() => {
            document.getElementById('loadingScreen').style.display = 'none';
            document.getElementById('appContainer').style.opacity = '1';
        }, 500);
    }, 2000); // 2-second loading screen

    // Fake IP tracking
    document.getElementById('trackButton').addEventListener('click', () => {
        const username = document.getElementById('usernameInput').value;
        if (!username) return;

        const statusText = document.getElementById('statusText');
        statusText.textContent = "Locating target...";
        statusText.style.color = "#7a4dff";

        // Simulate delay
        setTimeout(() => {
            const fakeIP = `${Math.floor(Math.random() * 255)}.${Math.floor(Math.random() * 255)}.${Math.floor(Math.random() * 255)}.${Math.floor(Math.random() * 255)}`;
            const dataBox = document.getElementById('dataBox');
            dataBox.innerHTML += `<div>✅ <strong>${username}</strong>: ${fakeIP}</div>`;
            statusText.textContent = "Target acquired!";
            statusText.style.color = "#4dff7a";
        }, 1500 + Math.random() * 2000); // Random delay between 1.5-3.5s
    });
});