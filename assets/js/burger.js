$(document).on('ready', () => {

  const burgerBtn = $('.header__sidebar-burger')[0];
  const sidebar = $('.sidebar')[0];
  $(burgerBtn).on('click', () => {
    $(sidebar).toggleClass('open');
  })
})