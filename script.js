// Initialize AOS for scroll animations
AOS.init({
    duration: 1000,
    once: true,
  });
  
  // Toggle Scroll Animations
  const toggleButton = document.createElement('button');
  toggleButton.textContent = 'Toggle Animations';
  toggleButton.style.position = 'fixed';
  toggleButton.style.bottom = '20px';
  toggleButton.style.right = '20px';
  toggleButton.style.zIndex = '1000';
  toggleButton.style.padding = '10px 20px';
  toggleButton.style.backgroundColor = '#ff6f61';
  toggleButton.style.color = '#fff';
  toggleButton.style.border = 'none';
  toggleButton.style.borderRadius = '5px';
  toggleButton.style.cursor = 'pointer';
  document.body.appendChild(toggleButton);
  
  let animationsEnabled = true;
  
  toggleButton.addEventListener('click', () => {
    animationsEnabled = !animationsEnabled;
    if (animationsEnabled) {
      AOS.refresh();
      toggleButton.textContent = 'Disable Animations';
    } else {
      AOS.refreshHard();
      toggleButton.textContent = 'Enable Animations';
    }
  });