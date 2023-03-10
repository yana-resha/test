$(document).on('ready', () => {
    const addBtn = $('.btn-add')[0];
    const tBody = $('.content__table').find('tbody');
    
    $(addBtn).on('click', () => {
        const formInput = Array.from($('.content__form-input'));
        
    
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
              if (($(element).attr('name') == 'vacation' ||$(element).attr('name') == 'name') && !cyrillic.test(element.value)) {
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
            const newRow = $('<tr class="content__table-row">');
            formInput.forEach(el => {
               const td = $(`<td class="content__table-column">${el.value}</td>`);
               newRow.append(td);
               $(td).on('click', (e) => {
                $(newRow).toggleClass( "active" );
                $(newRow).attr('to-remove', function(index, attr){
                  return attr == true ? null : true;
              });
               })
            })
            tBody.append(newRow);
          }
        });
    
 });