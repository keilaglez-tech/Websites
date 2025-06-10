document.addEventListener('DOMContentLoaded', function() {
  const faqItems = document.querySelectorAll('.faq-item');

  faqItems.forEach(item => {
    item.querySelector('.faq-question').addEventListener('click', function() {
      item.classList.toggle('active');
    });
  });
});