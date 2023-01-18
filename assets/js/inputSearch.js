$(document).on('ready', () => {
  const inputSearch = $('.header__search')[0];
  
  $(inputSearch).on('input', (e) => {
    const tRow = Array.from($('.content__table').find('tbody tr'));
    const value = e.target.value;
    if (tRow.length > 0 && value.length > 0) {
      tRow.forEach(el => {
        if (Array.from($(el).find('td')).every(column => !column.textContent.includes(value))) {
          el.style.display = 'none';
        } else {
          el.style.display = 'grid';
        }
      })
    };

    if (value.length == 0) {
      tRow.forEach(el => el.style.display = 'grid');
    };

  })
})