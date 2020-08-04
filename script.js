const $list = document.querySelector('ul')
const $product = document.querySelector('#product')
const $btn = document.querySelector('#btn')
const $reset = document.querySelector('#reset')

$btn.addEventListener('click', addProduct)

function addProduct() {
    const $item = `<li class="list-group-item">${$product.value}</li>`
    $list.innerHTML += $item
    $product.value = ''
    $product.focus()
}

$product.addEventListener('keydown', (e) => {
    if (e.keyCode === 13) {
        addProduct()
    }
})

$reset.addEventListener('click', removeElement)

function removeElement() {
    // Removes an element from the document
    const $ul = document.querySelector('#list');

    if ($ul.children[0]) {
        $ul.removeChild($ul.children[0])
    } else {
        alert('Sua lista já está vazia');
    }
}

