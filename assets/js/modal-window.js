$(document).on('ready', () => {
  const modal = $('.modal')[0];
  const modalCloseBtn = $('.modal__btn-cancel')[0];

  $(modal).on('click', (e) => {
    if (e.target == modal) {
      modal.classList.remove('open');
    }
    
  })

  $(modalCloseBtn).on('click', (e) => {
    if (e.target == modalCloseBtn) {
      modal.classList.remove('open');
    }
  })
})