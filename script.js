// Get all elevated cards and dropdown contents
const elevatedCards = document.querySelectorAll('.elevated-card');

// Add click event listener to all elevated cards
elevatedCards.forEach(card => {
  card.addEventListener('click', (e) => {
    e.preventDefault();
    // Get target section and content
    const target = e.currentTarget.dataset.target;
    const content = e.currentTarget.dataset.content;
    const dropdownContents = document.querySelectorAll('.dropdown-content');
    const dropdownContent = document.querySelector(`${content}`);

    // Remove the "active" class from all cards
    elevatedCards.forEach(card => {
      card.classList.remove('active');
    });

    // Add the "active" class to the clicked card
    card.classList.add('active');

    // Hide all dropdown contents
    dropdownContents.forEach(content => {
      content.style.display = 'none';
    });

    // Display the target dropdown content
    dropdownContent.style.display = 'block';

    // Get the section title and update its text content
    const sectionTitle = document.querySelector('.section-title h2');

    if(sectionTitle) {
      sectionTitle.textContent = e.currentTarget.querySelector('.elevated-card-info h4').textContent;
    };

  });
});

// Add scroll event listener to window
window.addEventListener('scroll', function () {
  const header = document.querySelector('header');
  let heroTitle = document.querySelector('.hero-title');
  if (!heroTitle) {
    heroTitle = document.querySelector('.hero-text');
  }
  const heroTitleHeight = heroTitle ? heroTitle.offsetHeight : 0;
  
  if (window.pageYOffset > heroTitleHeight / 2) {
    header.classList.add('header-colored');
  } else {
    header.classList.remove('header-colored');
  }
});

// Add click event listener to hamburger button
const menuBtn = document.querySelector('.hamburger');
const mobileMenu = document.querySelector('.mobile-nav');

menuBtn.addEventListener('click', function () {
  menuBtn.classList.toggle('is-active');
  mobileMenu.classList.toggle('is-active');
});
