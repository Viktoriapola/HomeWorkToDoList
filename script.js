
const input = document.querySelector('#input');
const button = document.querySelector('#button');
const list = document.querySelector('#list');
let products = [];

button.addEventListener('click', () => {
    const li = document.createElement('li');

    const remove = document.createElement('button');
    remove.addEventListener('click', () => {
        li.remove();
    });
    remove.innerHTML = 'Remove';

    const edit = document.createElement('button');
    edit.addEventListener('click', () => {
        let inputEdit = document.createElement('input');
        let ret = document.createElement('button');
        ret.innerHTML = 'Return';
        li.replaceWith(inputEdit, ret);
        // ret.addEventListener('click', () => {
        //     li.innerHTML = inputEdit.value;   
        // });
    });
    edit.innerHTML = 'Edit';

    li.innerHTML = input.value;
    li.append(remove);
    li.append(edit);
    list.append(li);

    // products.forEach((item) => {
    //     if (item === input.value) {
    //         alert('Уже есть');
    //     } else {
    //         products.push(input.value);         
    //         li.append(remove);
    //         li.append(edit);
    //         list.append(li);
    //     };
    // });


    if (input.value == input.value) {
        input.value = '';
    };
});





