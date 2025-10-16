const injectHeader = async () => {
  const container = document.querySelector('[data-header]');
  if (!container) return;

  try {
    const response = await fetch('/header.html');
    if (!response.ok) {
      throw new Error(`Failed to load header.html: ${response.status}`);
    }

    const markup = await response.text();
    container.innerHTML = markup;
    
    // Set the active page based on current URL
    const currentPath = window.location.pathname;
    const navLinks = container.querySelectorAll('.nav_link');
    
    navLinks.forEach(link => {
      const linkPath = new URL(link.href).pathname;
      // Remove any existing aria-current
      link.removeAttribute('aria-current');
      
      // Check if this is the current page
      if (currentPath === linkPath || 
          (currentPath.startsWith(linkPath) && linkPath !== '/')) {
        link.setAttribute('aria-current', 'page');
      }
    });
    
    document.dispatchEvent(
      new CustomEvent('header-loaded', { detail: { container } })
    );
  } catch (error) {
    console.error('Unable to load header.', error);
  }
};

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', injectHeader, { once: true });
} else {
  injectHeader();
}
