document.addEventListener("DOMContentLoaded", function () {
  const latestVersion = "2.0.0";

  // Update version text
  const versionElement = document.querySelector(".version");
  if (versionElement) {
    versionElement.textContent = `Version ${latestVersion} is now available`;
  }

  // Handle update button click
  const updateButton = document.querySelector(".btn-update");
  if (updateButton) {
    updateButton.addEventListener("click", function (e) {
      e.preventDefault();
      
      // Save original button text
      const originalText = this.innerHTML;
      
      // Add loading state immediately
      this.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Updating...';
      this.disabled = true;
      
      // Redirect to update URL immediately
      window.location.href = "https://ssmpapers.xyz/apk/V-2.0.0/SSM%20Papers.apk";
      
      // If update is canceled or takes too long, restore button after 5 seconds
      setTimeout(() => {
        this.innerHTML = originalText;
        this.disabled = false;
      }, 5000);
    });
  }

  // Add animation to update icon
  const updateIcon = document.querySelector(".update-icon i");
  if (updateIcon) {
    setInterval(() => {
      updateIcon.style.transform = "rotate(360deg)";
      setTimeout(() => {
        updateIcon.style.transform = "rotate(0deg)";
      }, 1000);
    }, 5000);
  }
});
