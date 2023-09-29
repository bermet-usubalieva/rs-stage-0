console.log('оценка за задание 200 баллов, думаю что выполнила все критерии')

//burger

let btn = document.getElementById('burger');
let header = document.querySelector('.header');
let menu = document.getElementById('menu');
let linkAbout = document.getElementById('link-about')
let linkFavorites = document.getElementById('link-favorites')
let linkCoffee = document.getElementById('link-coffee')
let linkContacts = document.getElementById('link-contacts')
let linkLibrary = document.getElementById('link-library')


//carousel
const slide = document.querySelector('.slider-line');
const leftBtn = document.querySelector('.arrow-left');
const rightBtn = document.querySelector('.arrow-right');
const dots = document.querySelectorAll('.about-button-wrap');
const img = document.querySelector('.first')
const arrow1 = document.querySelector('.arrow1');
const arrow2 = document.querySelector('.arrow2')

//favorites
const seasons = ['winter', 'spring', 'summer', 'autumn'];
const cards = {
    winter: document.querySelector('.card-winter'),
    spring: document.querySelector('.card-spring'),
    summer: document.querySelector('.card-summer'),
    autumn: document.querySelector('.card-autumn')
};
const labels = {
    winter: document.querySelector('.favorites-label-winter'),
    spring: document.querySelector('.favorites-label-spring'),
    summer: document.querySelector('.favorites-label-summer'),
    autumn: document.querySelector('.favorites-label-autumn')
};

//Modal Login and Register
const userButton = document.querySelector('.user-link');
const userButtonTitle = userButton.title;
const authorModal = document.querySelector('.authorization');
const registBtn = document.querySelector('.authorization-register')

//Modal Register
const registerButton = document.querySelector('.authorization-register');
const registerModal = document.querySelector('.registerModal');
const closeButton = document.querySelector('.close');
const registrationForm = document.querySelector('.registrationForm');
const firstNameInput = document.getElementById('firstName');
const lastNameInput = document.getElementById('lastName');
const emailInput = document.getElementById('email');
const passwordInput = document.getElementById('password');
const libraryRegBtn = document.querySelector('.library-sign');
const registLogIn = document.querySelector('.register-log');

//My Profile Modal Window
const profileWindow = document.querySelector('.myProfile-window')
let button = document.createElement("button");
let cardNum = document.querySelector('.myProfile-number')
const logOutBtn = document.querySelector('.myProfile-log');

//Card Name in Labrary Section
const labrInputName = document.getElementById('username');
const labrInputCard = document.getElementById('card');
const labrText = document.querySelector('.registartion');
const labrNexText = document.querySelector('.labrary-profile');
const labrCountVisit = document.querySelector('.myProfile-window-footer');
const labrBtn = document.querySelector('.library-button')
const formLibrary = document.querySelector('.form-library')
const labrLogIn = document.querySelector('.library-log')
let visitCounter = document.querySelector('.visit-counter')

//LOGIN WINDOW
const logIn = document.querySelector('.authorization-logIn')
const LogInWindow = document.querySelector('.login-window')
const logInClose = document.querySelector('.login-close');
const loginRegistBtn = document.querySelector('.login-log')
const loginBtn = document.querySelector('.login-button')
const loginForm = document.querySelector('.loginForm')
let logInEmail = document.getElementById('emailOrCard')
let logInpassword = document.getElementById('passwordLog');
const myProfileBtn = document.querySelector('.myProfile-btn');
const myProfileView = document.querySelector('.myProfile-view');
const viewRightClose = document.querySelector('.view-right-close');
const viewRightCardNum = document.querySelector('.view-right-cardNum');
const shortName = document.querySelector('.short-name');
const fullName = document.querySelector('.full-name');
const visitCounterView = document.querySelector('.visit-counter-view');
const viewRightUl = document.querySelector('.view-right-ul');
const closeText = document.querySelector('.view-right-li-start');
const listItem = document.createElement('li');
const libraryProfileBtn = document.querySelector('.library-profile-btn');
const booksCounter = document.querySelector('.books-counter');
const bookCounter = document.querySelector('.book-counter');
const copyText = document.querySelector('.copyText');
let copy1
//svg
const svgElement = document.createElementNS("http://www.w3.org/2000/svg", "svg");
svgElement.setAttribute('width', '14');
svgElement.setAttribute('height', '12');
svgElement.setAttribute('viewBox', '0 0 14 12');
svgElement.setAttribute('fill', 'none');
const rect1Element = document.createElementNS("http://www.w3.org/2000/svg", "rect");
rect1Element.setAttribute('x', '2.46826');
rect1Element.setAttribute('y', '0.25');
rect1Element.setAttribute('width', '10.5917');
rect1Element.setAttribute('height', '9.5');
rect1Element.setAttribute('rx', '0.75');
rect1Element.setAttribute('stroke', 'black');
rect1Element.setAttribute('stroke-width', '0.5');
const rect2Element = document.createElementNS("http://www.w3.org/2000/svg", "rect");
rect2Element.setAttribute('x', '0.25');
rect2Element.setAttribute('y', '2.25');
rect2Element.setAttribute('width', '10.5917');
rect2Element.setAttribute('height', '9.5');
rect2Element.setAttribute('rx', '0.75');
rect2Element.setAttribute('fill', 'white');
rect2Element.setAttribute('stroke', 'black');
rect2Element.setAttribute('stroke-width', '0.5');
svgElement.appendChild(rect1Element);
svgElement.appendChild(rect2Element);

//Favorites Book Buy
const booksBuy = document.querySelectorAll('.book-buy')
const buyCardWrap = document.querySelector('.buy-card-wrap')
const buyCardClose = document.querySelector('.buy-card-close')


function moveMyProfile() {
    myProfileView.classList.toggle('act');
    authorModal.classList.remove('act');
    header.classList.remove('open');
    registerModal.style.display = 'none';
    profileWindow.classList.remove('act');
}


function moveAuthor() {
    authorModal.classList.toggle('act');
    header.classList.remove('open');
    registerModal.style.display = 'none';
    profileWindow.classList.remove('act');
}
function moveHeader() {
    header.classList.toggle('open');
    authorModal.classList.remove('act');
    registerModal.style.display = 'none';
    profileWindow.classList.remove('act');
}
function moveProfile() {
    profileWindow.classList.toggle('act');
    header.classList.remove('open');
    authorModal.classList.remove('act');
    registerModal.style.display = 'none';
}
document.addEventListener('DOMContentLoaded', function () {
    btn.addEventListener('click', moveHeader)
    linkAbout.addEventListener('click', moveHeader)
    linkFavorites.addEventListener('click', moveHeader)
    linkCoffee.addEventListener('click', moveHeader)
    linkContacts.addEventListener('click', moveHeader)
    linkLibrary.addEventListener('click', moveHeader)
    userButton.addEventListener('click', moveAuthor)
    button.addEventListener('click', moveProfile)
    myProfileBtn.addEventListener('click', moveMyProfile)
    libraryProfileBtn.addEventListener('click', moveMyProfile)
});
button.addEventListener('click', event => {
    event._isClickWithInMenu = true;
});
userButton.addEventListener('click', event => {
    event._isClickWithInMenu = true;
});
menu.addEventListener('click', event => {
    event._isClickWithInMenu = true;
});
btn.addEventListener('click', event => {
    event._isClickWithInMenu = true;
});
document.body.addEventListener('click', event => {
    if (event._isClickWithInMenu) return;

    header.classList.remove('open');
    authorModal.classList.remove('act');
    profileWindow.classList.remove('act');
    authorModal.classList.remove('act');
});


//Carousel
let position = 0;
let dotIndex = 0;


//Неактивные стрелочки
function updateButtonState() {
    if (position <= 0) {
        leftBtn.style.opacity = 0.5;
    } else {
        leftBtn.style.opacity = 1;
    }
    if (position >= (dots.length - 1) * (img.offsetWidth + 25)) {
        rightBtn.style.opacity = 0.5;
    } else {
        rightBtn.style.opacity = 1;
    }
}

function updateButtonCount() {
    if (window.innerWidth > 768) {
        dots.length = 3
    }
}
// Неактивные крайние точки
function updateDotActivity() {
    for (let i = 0; i < dots.length; i++) {
        if (i === dotIndex && window.innerWidth <= 768) {
            dots[i].classList.add('last');
        } else if (i === dotIndex && window.innerWidth > 768) {
            dots[i].classList.add('last');
        } else {
            dots[i].classList.remove('last');
        }
    }
}



function moveRight() {
    if (position < (dots.length - 1) * (img.offsetWidth)) {
        position += (img.offsetWidth + 25)
        dotIndex++
    } else if (position > (dots.length - 1) * (img.offsetWidth + 25)) {
        position = 0;
        dotIndex = 0;

    }
    slide.style.left = -position + 'px';
    updateDotActivity();
    updateButtonState();
    moveSlider(dotIndex)

}

function moveLeft() {
    if (position > 0) {
        position -= (img.offsetWidth + 25);
        dotIndex--

    } else if (position < (dots.length - 1) * (img.offsetWidth + 25)) {
        position = 0;
        dotIndex = 0
    }
    slide.style.left = -position + 'px';
    updateDotActivity()
    updateButtonState();
    moveSlider(dotIndex)

}
function moveSlider(index) {
    for (let dot of dots) {
        dot.classList.remove('active');
    }
    dots[index].classList.add('active');
}

updateButtonState();
rightBtn.addEventListener('click', moveRight);
leftBtn.addEventListener('click', moveLeft);

dots.forEach((dot, index) => {
    dot.addEventListener('click', () => {
        position = ((img.offsetWidth + 25) * index);
        slide.style.left = -position + 'px';
        dotIndex = index
        updateDotActivity()
        updateButtonState();
        moveSlider(dotIndex)

    })
})




//favorites
const fadeIn = (el, timeout, display) => {
    el.style.opacity = 0;
    el.classList.remove('card-invisible');
    el.style.transition = `opacity ${timeout}ms`;
    setTimeout(() => {
        el.style.opacity = 1;
    }, 10);
};

const fadeOut = (el, timeout) => {
    el.style.opacity = 1;
    el.style.transition = `opacity ${timeout}ms`;
    el.style.opacity = 0;
    setTimeout(() => {
        el.classList.add('card-invisible');
    }, timeout);
};

seasons.forEach(season => {
    const seasonElement = document.getElementById(season);

    seasonElement.addEventListener('click', (e) => {
        seasons.forEach(s => {
            if (s === season) {
                fadeIn(cards[s], 2000, 'grid');
                labels[s].classList.add('active-input');
            } else {
                fadeOut(cards[s], 2000);
                labels[s].classList.remove('active-input');
            }
        });
    });
});
//сверху новая функция затухания: оставлю старую сдесь
// seasons.forEach(season => {
//     const seasonElement = document.getElementById(season);

//     seasonElement.addEventListener('click', (e) => {
//         seasons.forEach(s => {
//             if (s === season) {
//                 fadeIn(cards[s], 2000, 'grid');
//                 labels[s].classList.add('active-input');
//             } else {
//                 cards[s].classList.add('card-invisible');
//                 labels[s].classList.remove('active-input');
//             }
//         });
//     });
// });

//LogIn Window
viewRightClose.addEventListener('click', () => {
    myProfileView.classList.remove('act');
})
window.addEventListener('click', (event) => {
    if (event.target === myProfileView) {
        myProfileView.classList.remove('act');
    }
});

registLogIn.addEventListener('click', () => {
    LogInWindow.style.display = 'block';
});
logIn.addEventListener('click', () => {
    LogInWindow.style.display = 'block';
});

logInClose.addEventListener('click', () => {
    LogInWindow.style.display = 'none';
});
labrLogIn.addEventListener('click', () => {
    LogInWindow.style.display = 'block';
});
window.addEventListener('click', (event) => {
    if (event.target === LogInWindow || event.target === loginRegistBtn) {
        LogInWindow.style.display = 'none';
    }
});

// //Modal Register
loginRegistBtn.addEventListener('click', () => {
    registerModal.style.display = 'block';
});


registerButton.addEventListener('click', () => {
    registerModal.style.display = 'block';
});

closeButton.addEventListener('click', () => {
    registerModal.style.display = 'none';
});

window.addEventListener('click', (event) => {
    if (event.target === registerModal || event.target === registLogIn) {
        registerModal.style.display = 'none';
    }
});
let bookTitle
let uniqueKey

document.addEventListener('DOMContentLoaded', function (e) {
    e.preventDefault();

    const loggedInUser = JSON.parse(localStorage.getItem('loggedInUser'));
    const registeredPasswords = [];


    if (loggedInUser) {
        const purchasedBooks = JSON.parse(localStorage.getItem(`purchasedBooks_${loggedInUser.userKey}`));
        if (purchasedBooks && purchasedBooks.length > 0) {
            purchasedBooks.forEach(bookTitle => {
                closeText.style.display = 'none'
                const listItem = document.createElement('li');
                listItem.setAttribute('class', 'view-right-li');
                listItem.textContent = bookTitle;
                viewRightUl.append(listItem);
            });
        }
        increaseBooksCounter();
        booksBuy.forEach(bookBuyBtn => {
            const bookTitle = bookBuyBtn.getAttribute('data-book');
            const bookBuyBtnText = localStorage.getItem(`${loggedInUser.userKey}_${bookTitle}`);
            const bookBuyBtnDisabled = localStorage.getItem(`${loggedInUser.userKey}_${bookTitle}`);

            if (bookBuyBtnText === 'Own' || bookBuyBtnDisabled === 'true') {
                bookBuyBtn.textContent = 'Own';
                bookBuyBtn.disabled = true;
            }
        });

        copyText.appendChild(svgElement);
        button.textContent = `${loggedInUser.firstName.charAt(0).toUpperCase()}${loggedInUser.lastName.charAt(0).toUpperCase()}`;
        button.setAttribute("class", "my-div-class");
        button.setAttribute('title', `${loggedInUser.firstName} ${loggedInUser.lastName}`)
        userButton.parentNode.replaceChild(button, userButton);
        cardNum.textContent = `${loggedInUser.cardNumber}`;

        labrInputName.value = `${loggedInUser.firstName} ${loggedInUser.lastName}`;
        labrInputCard.value = `${loggedInUser.cardNumber}`;
        labrText.style.display = 'none';
        labrNexText.style.display = 'flex';
        labrCountVisit.style.display = 'flex';
        labrBtn.style.display = 'none';
        visitCounter.textContent = `${loggedInUser.loginCounter}`;
        viewRightCardNum.textContent = `${loggedInUser.cardNumber}`;
        shortName.textContent = `${loggedInUser.firstName.charAt(0).toUpperCase()}${loggedInUser.lastName.charAt(0).toUpperCase()}`;
        fullName.textContent = `${loggedInUser.firstName.charAt(0).toUpperCase()}${loggedInUser.firstName.slice(1)} ${loggedInUser.lastName.charAt(0).toUpperCase()}${loggedInUser.lastName.slice(1)}`;
        visitCounterView.textContent = `${loggedInUser.loginCounter}`;


        copyText.onclick = function () {
            const tempInput = document.createElement('input');
            tempInput.value = `${loggedInUser.cardNumber}`;
            document.body.appendChild(tempInput);
            tempInput.select();
            document.execCommand('copy');
            document.body.removeChild(tempInput);
        }



        logOutBtn.addEventListener('click', function () {
            localStorage.removeItem('loggedInUser');
            button.textContent = 'User';
        });

    }


    registrationForm.addEventListener('submit', function (e) {
        e.preventDefault();
        const firstName = document.getElementById('firstName').value;
        const lastName = document.getElementById('lastName').value;
        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;
        const userKey = `user_${email}`;


        if (localStorage.getItem(userKey)) {
            alert('This email is already registered. Please choose a different email.');
            return;
        }


        if (password.length < 8) {
            alert('Password must be at least 8 characters long.');
            return;
        }

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            alert('Please enter a valid email address.');
            return;
        }
        const cardNumber = generateCardNumber();
        const users = JSON.parse(localStorage.getItem('users')) || [];
        const purchasedBooks = [];


        const user = { firstName, lastName, email, password, cardNumber, userKey, loginCounter: 1, isLoggedIn: true, isCard: false, purchasedBooks, bookNum: 0 };
        users.push(user);

        registeredPasswords.push(password)

        localStorage.setItem('users', JSON.stringify(users));
        localStorage.setItem(userKey, JSON.stringify(user));



        labrInputName.value = `${firstName} ${lastName}`;
        labrInputCard.value = cardNumber;
        cardNum.textContent = cardNumber;
        logInEmail = `${email}`;
        logInpassword = `${password}`;



        localStorage.setItem(userKey, JSON.stringify(user));
        localStorage.setItem('loggedInUser', JSON.stringify(user));
        localStorage.setItem(`isCard_${userKey}`, 'false');

        userButton.parentNode.replaceChild(button, userButton);
        button.textContent = `${firstName.charAt(0).toUpperCase()}${lastName.charAt(0).toUpperCase()}`;
        button.setAttribute("class", "my-div-class");
        button.setAttribute('title', `${firstName} ${lastName}`);

        visitCounter.textContent = '1';
        labrText.style.display = 'none';
        labrNexText.style.display = 'flex';
        labrCountVisit.style.display = 'flex';
        labrBtn.style.display = 'none';
        viewRightCardNum.textContent = cardNumber;
        shortName.textContent = `${firstName.charAt(0).toUpperCase()}${lastName.charAt(0).toUpperCase()}`;
        fullName.textContent = `${firstName.charAt(0).toUpperCase()}${firstName.slice(1)} ${lastName.charAt(0).toUpperCase()}${lastName.slice(1)}`;
        visitCounterView.textContent = '1';
        copyText.appendChild(svgElement);
        copyText.addEventListener('click', () => {
        })
        copyText.onclick = function () {
            const tempInput = document.createElement('input');
            tempInput.value = `${cardNumber}`;
            document.body.appendChild(tempInput);
            tempInput.select();
            document.execCommand('copy');
            document.body.removeChild(tempInput);
        }

        registerModal.style.display = 'none';
        registrationForm.reset();
    });

    function increaseBooksCounter() {
        const loggedInUser = JSON.parse(localStorage.getItem('loggedInUser'));
        if (loggedInUser) {
            const purchasedBooks = JSON.parse(localStorage.getItem(`purchasedBooks_${loggedInUser.userKey}`));
            if (purchasedBooks) {
                booksCounter.textContent = purchasedBooks.length;
                bookCounter.textContent = purchasedBooks.length;
            }
        }
    }


    loginForm.addEventListener('submit', (event) => {
        event.preventDefault()


        const emailOrCard = logInEmail.value;
        const cardNumber = logInpassword.value;

        const users = JSON.parse(localStorage.getItem('users')) || [];
        const loggedInUser = JSON.parse(localStorage.getItem('loggedInUser'));
        let matchedUser;

        for (const user of users) {
            if (user.email === emailOrCard || user.cardNumber === emailOrCard) {
                if (user.password === cardNumber) {
                    matchedUser = user;
                    break;
                }
            }
        }

        if (matchedUser) {


            const loggedInUser = JSON.parse(localStorage.getItem('matchedUser'));
            localStorage.setItem('loggedInUser', JSON.stringify(matchedUser));

            increaseBooksCounter();
            const purchasedBooks = JSON.parse(localStorage.getItem(`purchasedBooks_${matchedUser.userKey}`));

            if (purchasedBooks) {
                if (purchasedBooks && purchasedBooks.length > 0) {
                    purchasedBooks.forEach(bookTitle => {
                        closeText.style.display = 'none'
                        const listItem = document.createElement('li');
                        listItem.setAttribute('class', 'view-right-li');
                        listItem.textContent = bookTitle;
                        viewRightUl.append(listItem);
                    });
                }
            }


            booksBuy.forEach(bookBuyBtn => {

                const bookTitle = bookBuyBtn.getAttribute('data-book');
                const bookBuyBtnText = localStorage.getItem(`${matchedUser.userKey}_${bookTitle}`);
                const bookBuyBtnDisabled = localStorage.getItem(`${matchedUser.userKey}_${bookTitle}`);


                if (bookBuyBtnText === 'Own' || bookBuyBtnDisabled === 'true') {
                    bookBuyBtn.textContent = 'Own';
                    bookBuyBtn.disabled = true;
                }
            });

            localStorage.setItem('isLoggedIn', 'true');
            matchedUser.loginCounter++;
            localStorage.setItem('loggedInUser', JSON.stringify(matchedUser));
            localStorage.setItem('users', JSON.stringify(users));
            localStorage.setItem('loginCounter', matchedUser.loginCounter);
            visitCounter.textContent = matchedUser.loginCounter
            visitCounterView.textContent = matchedUser.loginCounter
            cardNum.textContent = matchedUser.cardNumber;
            viewRightCardNum.textContent = `${matchedUser.cardNumber}`;
            copyText.appendChild(svgElement);

            copyText.onclick = function () {
                const tempInput = document.createElement('input');
                tempInput.value = `${matchedUser.cardNumber}`;
                document.body.appendChild(tempInput);
                tempInput.select();
                document.execCommand('copy');
                document.body.removeChild(tempInput);
            }

            labrBtn.style.display = 'none';
            labrText.style.display = 'none';
            labrNexText.style.display = 'flex';
            labrCountVisit.style.display = 'flex';
            const firstName = matchedUser.firstName;
            const lastName = matchedUser.lastName;
            const cardNumb = matchedUser.cardNumber;

            const initials = `${firstName.charAt(0).toUpperCase()}${lastName.charAt(0).toUpperCase()}`;
            labrInputName.value = `${firstName} ${lastName}`;
            labrInputCard.value = `${cardNumb}`;
            button.textContent = initials;
            button.setAttribute("class", "my-div-class");
            userButton.parentNode.replaceChild(button, userButton);
            shortName.textContent = `${firstName.charAt(0).toUpperCase()}${lastName.charAt(0).toUpperCase()}`;
            fullName.textContent = `${firstName.charAt(0).toUpperCase()}${firstName.slice(1)} ${lastName.charAt(0).toUpperCase()}${lastName.slice(1)}`;
            logInEmail.value = '';
            logInpassword.value = '';
            LogInWindow.style.display = 'none'


        } else {
            alert('Invalid card data. Please try again.');
        }
    })

    function generateCardNumber() {
        const cardNumber = Math.floor(Math.random() * 0xFFFFFFFFF).toString(16).toUpperCase();
        return cardNumber.padStart(9, '0');
    }



    booksBuy.forEach(bookBuyBtn => {
        bookBuyBtn.addEventListener('click', () => {
            const loggedInUser = JSON.parse(localStorage.getItem('loggedInUser'));
            if (loggedInUser) {
                const isCard = localStorage.getItem(`isCard_${loggedInUser.userKey}`);
                if (isCard === 'true') {
                    bookTitle = bookBuyBtn.getAttribute('data-book');
                    bookId = bookBuyBtn.id
                    purchasedBooks = JSON.parse(localStorage.getItem(`purchasedBooks_${loggedInUser.userKey}`)) || [];

                    if (!purchasedBooks.includes(bookTitle)) {
                        purchasedBooks.push(bookTitle);

                        const listItem = document.createElement('li');
                        listItem.setAttribute("class", "view-right-li");
                        listItem.textContent = bookTitle;
                        viewRightUl.append(listItem)

                        localStorage.setItem(`purchasedBooks_${loggedInUser.userKey}`, JSON.stringify(purchasedBooks));
                        increaseBooksCounter();

                        closeText.style.display = 'none'
                        bookBuyBtn.textContent = 'Own'
                        bookBuyBtn.disabled = true;
                        localStorage.setItem(`${loggedInUser.userKey}_${bookTitle}`, 'Own');
                        localStorage.setItem(`${loggedInUser.userKey}_${bookTitle}`, 'true');

                    }
                } else {
                    buyCardWrap.style.display = 'block';
                }
            } else {
                LogInWindow.style.display = 'block';
            }
        });
    });
    buyCardClose.addEventListener('click', () => {
        buyCardWrap.style.display = 'none';
        buyCardForm.reset();
    })

    window.addEventListener('click', (event) => {
        if (event.target === buyCardWrap) {
            buyCardWrap.style.display = 'none';
            buyCardForm.reset();
        }
    });
});

function generateUniqueKey() {
    let key;
    do {
        key = Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
    } while (localStorage.getItem(key));

    return key;
}



libraryRegBtn.addEventListener('click', () => {
    registerModal.style.display = 'block';
});

function simulateRefresh() {
    window.location.hash = '';
    history.go(0);
}


logOutBtn.addEventListener('click', function () {
    localStorage.removeItem('loggedInUser');

    const loggedInUser = JSON.parse(localStorage.getItem('loggedInUser'));
    if (loggedInUser) {
        localStorage.removeItem(`purchasedBooks_${loggedInUser.userKey}`);
        localStorage.removeItem(`loggedInUser.booksCounter`);
    }

    localStorage.setItem('isLoggedIn', 'false');

    button.parentNode.replaceChild(userButton, button);
    labrText.style.display = 'flex';
    labrNexText.style.display = 'none';
    labrCountVisit.style.display = 'none';
    labrBtn.style.display = 'flex';
    labrInputName.value = '';
    labrInputCard.value = '';
    logInEmail.value = '';
    logInpassword.value = '';
    simulateRefresh()


});


labrBtn.addEventListener('click', function (event) {
    event.preventDefault()
    const cardName = labrInputName.value;
    const cardNumber = labrInputCard.value;


    const users = JSON.parse(localStorage.getItem('users')) || [];
    const loggedInUser = JSON.parse(localStorage.getItem('loggedInUser'));

    const matchedUser = users.find(user => {
        return user.firstName === cardName.split(' ')[0] && user.cardNumber === cardNumber;
    });

    if (matchedUser) {
        const loggedInUser = JSON.parse(localStorage.getItem('matchedUser'));
        const purchasedBooks = JSON.parse(localStorage.getItem(`purchasedBooks_${matchedUser.userKey}`));


        if (purchasedBooks) {
            bookCounter.textContent = purchasedBooks.length
        }

        visitCounter.textContent = matchedUser.loginCounter;
        visitCounterView.textContent = matchedUser.loginCounter;
        cardNum.textContent = matchedUser.cardNumber;

        labrBtn.style.display = 'none';
        labrCountVisit.style.display = 'flex';
        const firstName = matchedUser.firstName;
        const lastName = matchedUser.lastName;

        const initials = `${firstName.charAt(0).toUpperCase()}${lastName.charAt(0).toUpperCase()}`;
        labrInputName.value = `${firstName} ${lastName}`;
        button.textContent = initials;
        button.setAttribute("class", "my-div-class");
        userButton.parentNode.replaceChild(button, userButton);


        setTimeout(function () {
            labrInputName.value = '';
            labrInputCard.value = '';
            labrText.style.display = 'flex';
            labrBtn.style.display = 'flex';
            labrNexText.style.display = 'none';
            labrCountVisit.style.display = 'none';
            button.parentNode.replaceChild(userButton, button);
            bookCounter.textContent = purchasedBooks.length


        }, 10000);
    }
})

const buyCardForm = document.querySelector('.buy-card-form');
const buyCardButton = document.querySelector('.buy-card-button')

const bankNumber = document.getElementById('bankNumber');
const expirationCode = document.getElementById('expirationCode');
const expirationYear = document.getElementById('expirationYear');
const cvc = document.getElementById('cvc');
const cardholderName = document.getElementById('cardholderName');
const postalCode = document.getElementById('postalCode');
const city = document.getElementById('city');



function checkInputValidity(input) {
    return input.checkValidity();
}

bankNumber.addEventListener('input', updateBuyCardButtonState);
expirationCode.addEventListener('input', updateBuyCardButtonState);
expirationYear.addEventListener('input', updateBuyCardButtonState);
cvc.addEventListener('input', updateBuyCardButtonState);
cardholderName.addEventListener('input', updateBuyCardButtonState);
postalCode.addEventListener('input', updateBuyCardButtonState);
city.addEventListener('input', updateBuyCardButtonState);

function updateBuyCardButtonState() {
    const isCardNumberValid = checkInputValidity(bankNumber);
    const isExpirationMonthValid = checkInputValidity(expirationCode);
    const isExpirationYearValid = checkInputValidity(expirationYear);
    const isCvcValid = checkInputValidity(cvc);
    const isCardholderNameValid = checkInputValidity(cardholderName);
    const isPostalCodeValid = checkInputValidity(postalCode);
    const isCityValid = checkInputValidity(city);

    const isFormValid = isCardNumberValid && isExpirationMonthValid && isExpirationYearValid &&
        isCvcValid && isCardholderNameValid && isPostalCodeValid && isCityValid;

    buyCardButton.disabled = !isFormValid;
}

buyCardForm.addEventListener('submit', function (event) {
    event.preventDefault();

    const loggedInUser = JSON.parse(localStorage.getItem('loggedInUser'));
    if (loggedInUser) {
        localStorage.setItem(`isCard_${loggedInUser.userKey}`, 'true');
    }


    buyCardWrap.style.display = 'none';
    buyCardForm.reset();

});
