$(document).on('ready', () => {

  const removeBtn = $('.btn-remove')[0];
  const modalRemoveBtn = $('.modal__btn-remove')[0];
  
  if (removeBtn) {
    $(removeBtn).on('click', () => {
      const tBody = Array.from($('.content__table').find('tbody tr[to-remove*="true"]'));
      if (tBody.length == 0) {
        $('.content__table-error')[0].textContent = 'Выберите поля на удаление';
        setTimeout(() => {
          $('.content__table-error')[0].textContent = '';
        }, 1000)
      } else {
        const modal = $('.modal')[0];
        modal.classList.add('open');
        $(modalRemoveBtn).on('click', () => {
          tBody.forEach(el => el.remove());
          modal.classList.remove('open');
        })
        
      }
      
    })
  };

})