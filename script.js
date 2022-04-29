////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                 Hello__box

const hello = document.getElementById('hello')

let time = setTimeout(() => {
    addStyleTo(hello, 'Click to me!!!', '#66FCF1')
}, 4000)
function addStyleTo(check, text, color = 'red') {
    check.textContent = text // меняет значение текста 
    check.style.color = color // меняет цвет текста 
    check.style.textAlign = 'center'
    check.style.backgroundColor = '#1F2833'
    check.style.margin = '0 auto'
    check.style.fontSize = '40px'
    check.style.padding = '40px 0'
    check.style.display = 'block'
    check.style.width = '100%'
}
//const hellos = document.getElementsByClassName('hels')[0] // получаем коллекцию с тэгами(hels)
hello.onclick = () => {
    if (hello.textContent === 'Click to me!!!') {
        hello.textContent = 'super effect!!!'
    } else {
        hello.textContent = 'Click to me!!!'
    }
}

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                             checkbox__block


$(document).ready(function () {
    $.each($('.check'), function (index, val) {
        if ($(this).find('input').prop('checked') == true) {
            $(this).addClass('active');
        }
    });
    $(document).on('click', '.check', function (event) {
        if ($(this).hasClass('active')) {
            $(this).find('input').prop('checked', false);
        } else {
            $(this).find('input').prop('checked', true);
        }
        $(this).toggleClass('active');

        return false;
    });
});


document.querySelector('.check').onclick = function () {
    let checkbox = document.querySelector('.checkbox');
    let style = document.querySelector('body')
    if (checkbox.checked) {
        style.style.color = color = '#2F4454'
        style.style.backgroundColor = '#272727'

    } else {
        style.style.color = color = '#66FCF1'
        style.style.backgroundColor = '#0B0C10'
    }
}


////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                              Radio__block


document.querySelector('.Btn__radio').onclick = function () {
    let radio = document.getElementsByName('r1')
    for (let i = 0; i < radio.length; i++) {
        if (radio[i].checked) {

            let div = document.createElement('div');
            div.className = 'alert';
            let text = document.createTextNode(' ');
            let span = document.createElement('span');
            span.className = 'closebtn';
            span.textContent = 'x';

            let strong = document.createElement('strong');
            strong.className = 'strong';
            strong.textContent = 'checked ' + (i + 1) + ' elements';

            div.appendChild(text);
            div.appendChild(span);
            div.appendChild(strong);
            document.body.appendChild(div);

            let clos = document.getElementsByClassName('closebtn')
            for (let i = 0; i < clos.length; i++) {
                clos[i].onclick = function () {
                    let div = this.parentElement;
                    div.style.opacity = '0';
                    setTimeout(function () {
                        div.style.display = 'none';
                    }, 600)
                }
            }

        }
    }
}


////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                              Select__block


function select() {
    let sel = document.getElementById('mySelect').selectedIndex
    let option = document.getElementById('mySelect').options
    alert('select checked' + option[sel].text)
}


////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                               range__block


function range() {
    let range = document.querySelector('.range')
    let p = document.getElementById('x')
    let div = document.getElementById('test')
    div.style.width = range.value + 'px'


    p.value = range.value
    p.innerHTML = range.value
}

function genner() {
    let leftTop = document.getElementById('leftTop').value;
    let rightTop = document.getElementById('rightTop').value;
    let leftBottom = document.getElementById('leftBottom').value;
    let rightBottom = document.getElementById('rightBottom').value;

    let textLeftTop = document.getElementById('textLeftTop');
    let textRightTop = document.getElementById('textRightTop');
    let textLeftBottom = document.getElementById('textLeftBottom');
    let textRightBottom = document.getElementById('textRightBottom');

    let block = document.getElementById('block');

    textLeftTop.value = leftTop;
    textRightTop.value = rightTop;
    textLeftBottom.value = leftBottom;
    textRightBottom.value = rightBottom;

    block.style.borderRadius = leftTop + 'px ' + rightTop + 'px ' + leftBottom + 'px ' + rightBottom + 'px ';
}


////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                             navigation__block


document.getElementById('nav').onmouseover = function (event) {
    let target = event.target;
    if (target.className === 'menu-item') {
        let s = target.getElementsByClassName('submenu');
        closeMenu();
        s[0].style.display = 'block'
    }
}

document.onmouseover = function (event) {
    let target = event.target
    if (target.className != 'menu-item' && target.className != 'submenu') {
        closeMenu()
    }
}

function closeMenu() {
    let subm = document.getElementsByClassName('submenu')

    for (let i = 0; i < subm.length; i++) {
        subm[i].style.display = 'none'
    }
}


////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                tab__block

let tab;
let tabContent;

window.onload = function () {
    tabContent = document.getElementsByClassName('tabecontent');
    tab = document.getElementsByClassName('tab');
    hideTabsContent(1);
}
function hideTabsContent(a) {
    for (let i = a; i < tabContent.length; i++) {
        tabContent[i].classList.remove('show');
        tabContent[i].classList.add('hide');
        tab[i].classList.remove('whiteborder');
    }
}
document.getElementById('tabs').onclick = function (event) {
    let target = event.target;
    if (target.className === 'tab') {
        for (let i = 0; i < tab.length; i++) {
            if (target === tab[i]) {
                showTabsContent(i);
                break;
            }

        }
    }
}
function showTabsContent(b) {
    if (tabContent[b].classList.contains('hide')) {
        hideTabsContent(0);
        tab[b].classList.add('whiteborder');
        tabContent[b].classList.remove('hide');
        tabContent[b].classList.add('show');
    }
}


////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                             openModal__block



let modal = document.querySelector('.modal__body');
let Btn = document.getElementById('myBtn');
let close = document.querySelector('.close');


Btn.onclick = function () {
    modal.style.display = 'block';
}
close.onclick = function () {
    modal.style.display = 'none';
}

window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
} // закрывает модальное окно если клик был за пределами контента


function popup() {
    let popup = document.getElementById('mypopup');
    popup.classList.toggle('show')
}


////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                              search__block 

function searchFunct() {
    let input, filter, ul, li, a, i;
    input = document.getElementById('searchInput');
    filter = input.value.toUpperCase();
    ul = document.getElementById('searchList');
    li = ul.getElementsByTagName('li');


    for (let i = 0; i < li.length; i++) {
        a = li[i].getElementsByTagName('a')[0];
        if (a.innerHTML.toUpperCase().indexOf(filter) > - 1) {
            li[i].style.display = '';
        } else {
            li[i].style.display = 'none';
        }
    }
}


////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                            progressBar__block 


function toggle() {
    let x = document.getElementById('progressBAR__div');
    if (x.style.display === 'none') {
        x.style.display = 'block';
    } else {
        x.style.display = 'none';
    }
}

function move() {
    let elem = document.getElementById('myBar');
    let width = 1;
    let id = setInterval(frame, 30);

    function frame() {
        if (width >= 100) {
            clearInterval(id);
        } else {
            width++;
            elem.style.width = width + '%';
            document.getElementById('lable').innerHTML = width * 1 + '%';
        }
    }
}


////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                   task__block 



let myNodeList = document.querySelectorAll('.lis');

for (let i = 0; i < myNodeList.length; i++) {
    let span = document.createElement('span');
    let txt = document.createTextNode("\u00D7");
    span.className = 'close__task';
    span.appendChild(txt);
    myNodeList[i].appendChild(span);
}

let close__task = document.getElementsByClassName('close__task');

for (let i = 0; i < close__task.length; i++) {
    close__task[i].onclick = function () {
        let div = this.parentElement;
        div.style.display = 'none';
    }
}


function newEl() {
    let li = document.createElement('li');
    let inputValue = document.getElementById('myInput').value;
    let t = document.createTextNode(inputValue);
    li.className = 'lis';

    li.appendChild(t);
    if (inputValue === '') {
        alert('input none')
    } else {
        document.getElementById('myUL').appendChild(li);
    }
    document.getElementById('myInput').value = '';

    let span = document.createElement('span');
    let txt = document.createTextNode("\u00D7");
    span.className = 'close__task';
    span.appendChild(txt);
    li.appendChild(span);

    for (let i = 0; i < close__task.length; i++) {
        close__task[i].onclick = function () {
            let div = this.parentElement;
            div.style.display = 'none';
        }
    }
}


////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                   aler__block

let clos = document.getElementsByClassName('alerts__closebtn')

for (let i = 0; i < clos.length; i++) {
    clos[i].onclick = function () {
        let div = this.parentElement;
        div.style.opacity = '0';
        setTimeout(function () {
            div.style.display = 'none';
        }, 600)
    }
}


