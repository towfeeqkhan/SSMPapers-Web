// Add loading state to download button
const downloadButton = document.querySelector(".btn-download");
if (downloadButton) {
  downloadButton.addEventListener("click", function (e) {
    e.preventDefault();

    // Save original button text
    const originalText = this.innerHTML;

    // Add loading state immediately
    this.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Downloading...';
    this.disabled = true;

    // ✅ Send Google Analytics event
    gtag("event", "download_clicked", {
      event_category: "Download",
      event_label: "Hero Download Button",
      value: 1,
    });

    // Redirect to download URL immediately
    window.location.href = "https://ssmpapers.xyz/apk/V-1.0.0/SSM%20Papers.apk";

    // If user cancels download or it takes too long, restore button after 5 seconds
    setTimeout(() => {
      this.innerHTML = originalText;
      this.disabled = false;
    }, 5000);
  });
}

// Smooth scrolling for anchor links
document
  .querySelectorAll('a[href^="#"]')
  .not(".btn-download")
  .forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute("href"));
      if (target) {
        target.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }
    });
  });

// Animation on scroll
const animateOnScroll = () => {
  const elements = document.querySelectorAll(".hero-content, .hero-image");
  elements.forEach((element) => {
    const elementPosition = element.getBoundingClientRect().top;
    const screenPosition = window.innerHeight / 1.2;

    if (elementPosition < screenPosition) {
      element.style.opacity = "1";
      element.style.transform = "translateY(0)";
    }
  });
};

// Set initial styles for animation
window.addEventListener("load", () => {
  const heroContent = document.querySelector(".hero-content");
  const heroImage = document.querySelector(".hero-image");

  heroContent.style.opacity = "0";
  heroContent.style.transform = "translateY(20px)";
  heroContent.style.transition = "opacity 0.8s ease, transform 0.8s ease";

  heroImage.style.opacity = "0";
  heroImage.style.transform = "translateY(20px)";
  heroImage.style.transition =
    "opacity 0.8s ease 0.3s, transform 0.8s ease 0.3s";

  // Trigger reflow
  heroContent.offsetHeight;

  // Apply animation
  heroContent.style.opacity = "1";
  heroContent.style.transform = "translateY(0)";
  heroImage.style.opacity = "1";
  heroImage.style.transform = "translateY(0)";

  // Add scroll event listener for animations
  window.addEventListener("scroll", animateOnScroll);
});
