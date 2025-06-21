document.addEventListener('DOMContentLoaded', function() {
    const latestVersion = '2.0.0';
    
    // Update version text
    const versionElement = document.querySelector('.version');
    if (versionElement) {
        versionElement.textContent = `Version ${latestVersion} is now available`;
    }
    
    // Handle update button click
    const updateButton = document.querySelector('.btn-update');
    if (updateButton) {
        updateButton.addEventListener('click', function(e) {
            e.preventDefault();
            
            // alert('Redirecting to app store for update...');
            window.location.href = 'https://play.google.com/store/apps/details?id=com.example.app';
        });
    }
    
    // Add animation to update icon
    const updateIcon = document.querySelector('.update-icon i');
    if (updateIcon) {
        setInterval(() => {
            updateIcon.style.transform = 'rotate(360deg)';
            setTimeout(() => {
                updateIcon.style.transform = 'rotate(0deg)';
            }, 1000);
        }, 5000);
    }
});
