
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
        li.remove();
        remove.remove();
        edit.remove();
        input.value = li.innerText;
    });
    edit.innerHTML = 'Edit';
     
    li.innerText = input.value;
    
    li.append(remove);
    li.append(edit);
    list.append(li);
    products.push(input.value);

    // products.forEach ((item) => {
    //     remove.remove();
    //     edit.remove();
    //     if(item === li.innerText) {
    //         console.log('Уже есть');
    //     }
    // })

    if (input.value === input.value) {
        input.value = '';
    };
});





