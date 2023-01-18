function clearInput (arrInput) {

  arrInput.forEach(element => {
    $(element).attr('valid', '');
    const parentCol = $(element).parent('.content__table-column')[0];
    const errorBlock = $(parentCol).find('.content__form-input-error')[0];
    $(element).on('input', () => {
      errorBlock.innerHTML = '';
      $(element).attr('valid', '');
    })

  });
}

$(document).on('ready', () => {
  const form = $('#table-form');
  const formAlert = $('.form-alert')[0];
  if (form[0]) {
    const formInput = Array.from($('.content__form-input'));

    clearInput(formInput);

    $(form[0]).on('submit', (e) => {
      e.preventDefault();

      let valid = false;

      const cyrillic = /^[а-я" "]+$/i;
      const cyrillicUn = /^[а-я0-9" ",.:;!?]+$/i;
      const number = /^[0-9]+$/i;
      
      formInput.forEach(element => {
        const parentCol = $(element).parent('.content__table-column')[0];
        const errorBlock = $(parentCol).find('.content__form-input-error')[0];
        if (element.value.length <= 0) {
          $(element).attr('valid', false);
          errorBlock.innerHTML = 'Это поле необходимо заполнить';
        } else {
          if (($(element).attr('name') == 'vacation' ||$(element).attr('name') == 'initials') && !cyrillic.test(element.value)) {
            errorBlock.innerHTML = 'Пожалуйста, вводите только кириллицу';
            $(element).attr('valid', false);
          }
          else if ($(element).attr('name') == 'competence' && !cyrillicUn.test(element.value)) {
            errorBlock.innerHTML = 'Пожалуйста, вводите только кириллицу, числа и знаки пунктуации (,.:;!?)';
            $(element).attr('valid', false);
          }
          else if ($(element).attr('name') == 'age') {
            if (!number.test(element.value)) {
              errorBlock.innerHTML = 'Пожалуйста, вводите только числа';
              $(element).attr('valid', false);
            }
            if (Number(element.value) < 16 || Number(element.value) > 90) {
              errorBlock.innerHTML = 'Допустимый возраст не меньше 16 и не больше 89';
              $(element).attr('valid', false);
            }
          } 

        };
      });

      formInput.every(el => $(el).attr('valid') !== 'false' && $(el).attr('valid') !== undefined) === true ? valid = true : valid = false;

      if (valid) {
  
        const valueObj = {};
        formInput.forEach(el => {
          const attr = $(el).attr('name');

          attr == 'initials' ? valueObj.initials = el.value :
          attr == 'age' ? valueObj.age =  el.value : '';
          attr ==  'vacation'? valueObj.vacation =  el.value :
          attr == 'competence' ? valueObj.competence =  el.value : null;
          el.value = '';
        });

        console.log(JSON.stringify(valueObj));
        formAlert.classList.add('open');
        setTimeout(() => {
          formAlert.classList.remove('open');
        }, 2000);
        
          $.ajax({
            type: 'POST',
            url: '/assets/php/form.php',
            data: JSON.stringify(valueObj),
          }).done(function() {
            console.log('Отправлено, ответ смотреть в файле form.php')
          });
        }

    });
  }
});