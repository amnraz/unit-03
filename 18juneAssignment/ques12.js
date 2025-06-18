let list = document.querySelector('#list')
let button = document.querySelector('#btn')
button.addEventListener('click', () => {
   let newItem = document.createElement('li')

     let itemNumber = list.children.length + 1
     newItem.innerText = "item" + itemNumber

     if (itemNumber % 2 === 0) {
        newItem.classList.add('even');
      } else {
        newItem.classList.add('odd');
      }

      list.appendChild(newItem);

})
