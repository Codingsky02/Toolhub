// Category Tabs filtering
const categoryTabs = document.querySelector('.category-tabs');
const toolGrid = document.querySelector('.tool-grid');

// Add tabs dynamically (example)
const categories = ['All', 'PDF', 'Images', 'Developer'];
categories.forEach(cat => {
  const button = document.createElement('button');
  button.textContent = cat;
  button.addEventListener('click', () => filterTools(cat));
  if (cat === 'All') button.classList.add('active');
  categoryTabs.appendChild(button);
});

function filterTools(category) {
  // Simulate loading
  toolGrid.querySelectorAll('.tool-card').forEach(card => {
    card.classList.add('skeleton');
    setTimeout(() => card.classList.remove('skeleton'), 800);
  });

  // Update active tab
  document.querySelectorAll('.category-tabs button').forEach(btn => {
    btn.classList.toggle('active', btn.textContent === category);
  });
}

// Tool card "glow" effect
document.querySelectorAll('.tool-card').forEach(card => {
  card.addEventListener('mousemove', (e) => {
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    card.style.setProperty('--mouse-x', `${x}px`);
    card.style.setProperty('--mouse-y', `${y}px`);
  });
});