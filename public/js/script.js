document.addEventListener('DOMContentLoaded', () => {
    // Get elements
    const notification = document.getElementById('notification');
    const modal = document.getElementById('modal');
    const closeModal = document.querySelector('.close');
    const noThanksButton = document.getElementById('no-thanks');
  
    // Show modal when notification is clicked
    notification.addEventListener('click', () => {
      modal.classList.remove('hidden');
    });
  
    // Close modal when 'x' is clicked
    closeModal.addEventListener('click', () => {
      modal.classList.add('hidden');
    });
  
    // Close modal when 'No, thanks' is clicked
    noThanksButton.addEventListener('click', () => {
      modal.classList.add('hidden');
    });
  
    // Optional: Close modal when clicking outside of it
    window.addEventListener('click', (e) => {
      if (e.target === modal) {
        modal.classList.add('hidden');
      }
    });
  });
  