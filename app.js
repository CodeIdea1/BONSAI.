let menuIcon = document.querySelector('.menu-icon');
let ul = document.querySelector('.mobile-ul');
let x = document.querySelector('.x');
let ulA = document.querySelectorAll('.a');



menuIcon.onclick = function() {
    ul.classList.toggle('open');
}
x.onclick = function() {
    ul.classList.toggle('open');
}
ulA.forEach(a => {
    a.addEventListener('click', function() {
        ul.classList.toggle('open');
    })
})


let nameInput = document.getElementById('name');
nameInput.onclick = function() {
    nameInput.value = '';
} 
let emailInput = document.getElementById('email');
emailInput.onclick = function() {
    emailInput.value = '';
} 




window.addEventListener('scroll', function() {
    
    let header = this.document.querySelector('.header'); 
    let searchInput = this.document.querySelector('.search input');
    let searchIcon = this.document.querySelector('.search .icon');

    if (window.scrollY > 3) {
        header.classList.add('background');
        searchInput.classList.add('background');
        searchIcon.classList.add('background');
    }
    else {
        header.classList.remove('background');
        searchInput.classList.remove('background');
        searchIcon.classList.remove('background');
    }


    let icons = this.document.querySelectorAll('.icon');
    let titles = this.document.querySelectorAll('.feat-title');
    let info = this.document.querySelectorAll('.feat-info');

    if (window.scrollY > 100) {
        icons.forEach(icon => {
            icon.classList.add('animate')
        })

        titles.forEach(title => {
            title.classList.add('animate')
        })

        info.forEach(info => {
            info.classList.add('animate')
        })
    } else {
        icons.forEach(icon => {
            icon.classList.remove('animate')
        })

        titles.forEach(title => {
            title.classList.remove('animate')
        })

        info.forEach(info => {
            info.classList.remove('animate')
        })
    }

    let items = document.querySelectorAll('.item');
    if (window.scrollY > 400) {
        items.forEach(item => {
            item.classList.add('animate')
        })
    }
    else {
        items.forEach(item => {
            item.classList.remove('animate')
        })    
    }
    

    let contact = this.document.querySelector('.contact-us');
    if (window.scrollY > 1600) {
        contact.classList.add('animation');
    }else {
        contact.classList.remove('animation');
    }

    if (window.scrollY > 2600) {
        contact.classList.add('animation2');
    }else {
        contact.classList.remove('animation2');
    }
})

function getStars(rating) {
    const maxStars = 5;
    let stars = '';
    for (let i = 0; i < maxStars; i++) {
        stars += i < rating ? '★' : '☆';
    }
    return stars;
}



let cartTap = document.querySelector('.cartTab');
let closeButton = document.querySelector('.close');
let cartIcon = document.querySelector('.icon-cart');


cartIcon.onclick = function() {
    cartTap.classList.add('open');
}
closeButton.onclick = function() {
    cartTap.classList.remove('open');
}
