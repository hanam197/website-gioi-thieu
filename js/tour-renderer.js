// Tour Renderer - Render tour items from JSON data
(function() {
  // Fetch and render tours
  async function renderTours() {
    try {
      const response = await fetch('/data/tour-data.json');
      if (!response.ok) throw new Error('Failed to fetch tour data');
      
      const tours = await response.json();
      const prodList = document.querySelector('.prod-list');
      
      if (!prodList) return;

      // Clear existing items (keep only first 3 or all based on preference)
      // For now, we'll use only first 8 tours as mentioned
      const toursToShow = tours.slice(0, 8);
      
      // Generate HTML for each tour
      const toursHTML = toursToShow.map(tour => `
        <div class="prod-item">
          <a class="prod-thumb" href="">
            <img src="${tour.image}" alt="${tour.name}">
          </a>
          <div class="prod-content">
            <h3><a href="">${tour.name}</a></h3>
            <p class="info"><a href="#">${tour.time}</a></p>
            <p class="desc">${tour.meta}</p>
            <div class="prod-action">
              <span class="price-discount">${tour.price}</span>
              <a class="btn" href="../pages/detailed-tour-page.html">ĐẶT TOUR</a>
            </div>
          </div>
        </div>
      `).join('');
      
      // Insert HTML into prodList
      prodList.innerHTML = toursHTML;
      
    } catch (error) {
      console.error('Error rendering tours:', error);
    }
  }

  // Run when DOM is ready
  document.addEventListener('DOMContentLoaded', renderTours);
})();
