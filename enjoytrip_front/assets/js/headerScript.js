const generateHeader = () => {
    const header = document.createElement('header');

    header.setAttribute('class', 'pageHeader');
    header.innerHTML = `
        <div class="wrapper">
            <h1 class="pageHeaderTitle">
                <a href="/index.html">Enjoy Trip</a>
            </h1>
            <nav>
                <ul class="pageNavList">
                    <li>
                        <a href="/location.html">지역별 관광지</a>
                    </li>
                    <li class="notExistUser">
                        <button class="showModal">회원가입</button>
                    </li>
                    <li class="notExistUser">
                        <button class="showModal">로그인</button>
                    </li>
                    <li class="existUser">
                        <button class="showModal">회원정보</button>
                    </li>
                    <li class="existUser">
                        <button class="logout">로그아웃</button>
                    </li>
                </ul>
            </nav>
        </div>
        <article class="headerArticle pageHeaderArticleSignup">
            <h2 class="irOnly">회원가입</h2>
            <form class="userInput articleSignup" action="/">
                <fieldset>
                    <legend class="irOnly">아이디 입력 영역</legend>
                    <label for="idInputRegister">아이디</label>
                    <input type="text" id="idInputRegister">
                </fieldset>
                <fieldset>
                    <legend class="irOnly">비밀번호 입력 영역</legend>
                    <label for="passwordInputRegiter">비밀번호</label>
                    <input type="password" id="passwordInputRegiter">
                </fieldset>
                <fieldset>
                    <legend class="irOnly">비밀번호 입력 영역</legend>
                    <label for="passwordConfirmInput">비밀번호 확인</label>
                    <input type="password" id="passwordConfirmInput">
                </fieldset>
                <fieldset>
                    <legend class="irOnly">이름 입력 영역</legend>
                    <label for="nameInput">이름</label>
                    <input type="text" id="nameInput">
                </fieldset>
                <fieldset class="phoneField">
                    <legend class="irOnly">전화번호 입력 영역</legend>
                    <p>전화번호</p>
                    <button class="phoneFieldSelect">010</button>
                    <ul class="phoneFieldList">
                        <li>
                            <button class="selected">010</button>
                        </li>
                        <li>
                            <button>011</button>
                        </li>
                        <li>
                            <button>012</button>
                        </li>
                        <li>
                            <button>018</button>
                        </li>
                        <li>
                            <button>019</button>
                        </li>
                    </ul>
                    <label class="irOnly" for="phoneMiddleInput">전화번호 가운데 자리</label>
                    <input type="number" id="phoneMiddleInput">
                    <label class="irOnly" for="phoneLastInput">전화번호 마지막 자리</label>
                    <input type="number" id="phoneLastInput">
                </fieldset>
                <button class="submitButton">회원가입</button>
            </form>
        </article>
        <article class="headerArticle articleLogin">
            <h2 class="irOnly">로그인</h2>
            <form class="userInput" action="/">
                <fieldset>
                    <legend class="irOnly">아이디 입력 영역</legend>
                    <label for="idInput">아이디</label>
                    <input type="text" id="idInput">
                </fieldset>
                <fieldset>
                    <legend class="irOnly">비밀번호 입력 영역</legend>
                    <label for="passwordInput">비밀번호</label>
                    <input type="password" id="passwordInput">
                </fieldset>
                <button class="submitButton">로그인</button>
            </form>
        </article>
        <article class="headerArticle pageHeaderArticleUserInfo">
            <h2 class="irOnly">회원가입</h2>
            <form class="userInput articleUserInfo" action="/">
                <fieldset>
                    <legend class="irOnly">아이디 입력 영역</legend>
                    <label for="idInputUserInfo">아이디</label>
                    <input type="text" id="idInputUserInfo">
                </fieldset>
                <fieldset>
                    <legend class="irOnly">비밀번호 입력 영역</legend>
                    <label for="passwordInputUserInfo">비밀번호</label>
                    <input type="password" id="passwordInputUserInfo">
                </fieldset>
                <fieldset>
                    <legend class="irOnly">비밀번호 입력 영역</legend>
                    <label for="passwordConfirmInputUserInfo">비밀번호 확인</label>
                    <input type="password" id="passwordConfirmInputUserInfo">
                </fieldset>
                <fieldset>
                    <legend class="irOnly">이름 입력 영역</legend>
                    <label for="nameInputUserInfo">이름</label>
                    <input type="text" id="nameInputUserInfo">
                </fieldset>
                <fieldset class="phoneField">
                    <legend class="irOnly">전화번호 입력 영역</legend>
                    <p>전화번호</p>
                    <button class="phoneFieldSelect">010</button>
                    <ul class="phoneFieldList">
                        <li>
                            <button class="selected">010</button>
                        </li>
                        <li>
                            <button>011</button>
                        </li>
                        <li>
                            <button>012</button>
                        </li>
                        <li>
                            <button>018</button>
                        </li>
                        <li>
                            <button>019</button>
                        </li>
                    </ul>
                    <label class="irOnly" for="phoneMiddleInput">전화번호 가운데 자리</label>
                    <input type="number" id="phoneMiddleInputUserInfo">
                    <label class="irOnly" for="phoneLastInput">전화번호 마지막 자리</label>
                    <input type="number" id="phoneLastInputUserInfo">
                </fieldset>
                <button class="submitButton">회원 정보 수정</button>
                <button class="submitButton secessionButton">회원탈퇴</button>
            </form>
        </article>
    `;

    document.querySelector('main').before(header);
}

const checkRegistered = () => {
    if (!localStorage.getItem('registered')) {
        localStorage.setItem('registered', JSON.stringify([]));
    }
}

const renderUser = () => {
    const notExistUser = document.querySelectorAll('.notExistUser');
    const existUser = document.querySelectorAll('.existUser');

    if (localStorage.getItem('user')) {
        notExistUser.forEach(element => {
            element.classList.remove('show');
        });

        existUser.forEach(element => {
            element.classList.add('show');
        });
    } else {
        notExistUser.forEach(element => {
            element.classList.add('show');
        });

        existUser.forEach(element => {
            element.classList.remove('show');
        });
    }
}

const initNav = () => {
    const header = document.querySelector('.pageHeader');
    const articles = header.querySelectorAll('.headerArticle');
    const buttons = header.querySelectorAll('.showModal');

    buttons.forEach((button, index) => {
        button.addEventListener('click', () => {
            articles[index].style.display = 'block';
        });
    });

    header.querySelector('.logout').addEventListener('click', () => {
        localStorage.removeItem('user');
        window.location.reload();
    });
}

const initModal = () => {
    const articles = document.querySelectorAll('.headerArticle');
    const forms = document.querySelectorAll('.headerArticle .userInput');

    forms.forEach(form => {
        form.addEventListener('click', (event) => {
            event.preventDefault();

        });
    });

    forms.forEach(form => {
        form.addEventListener('mousedown', (event) => {
            event.stopPropagation();

        });
    });

    articles.forEach(article => {
        article.addEventListener('mousedown', () => {
            article.style.display = 'none';
        });
    });
}

const initSignup = () => {
    const article = document.querySelector('.articleSignup');

    const phoneField = article.querySelector('.phoneField');
    const phoneButton = phoneField.querySelector('.phoneFieldSelect');
    const phoneList = phoneField.querySelector('.phoneFieldList');
    const phoneSelectButtons = phoneList.querySelectorAll('button');

    const toggle = () => {
        phoneButton.classList.toggle('selected');
        phoneList.classList.toggle('show');
    }

    phoneButton.addEventListener('click', () => {
        toggle();
    });

    phoneSelectButtons.forEach(button => {
        button.addEventListener('click', () => {
            phoneSelectButtons.forEach(e => {
                e.classList.remove('selected');
            });

            button.classList.add('selected');
            phoneButton.textContent = button.textContent;
            toggle();
        });
    });

    const id = article.querySelector('#idInputRegister');
    const password = article.querySelector('#passwordInputRegiter');
    const password_codfirm = article.querySelector('#passwordConfirmInput');
    const name = article.querySelector('#nameInput');
    const phone_middle = article.querySelector('#phoneMiddleInput');
    const phone_last = article.querySelector('#phoneLastInput');
    const submit = article.querySelector('.submitButton');
    const registered = JSON.parse(localStorage.getItem('registered'));

    submit.addEventListener('click', (e) => {
        e.preventDefault();

        if (!id.value) {
            alert('아이디를 입력해주세요!');
            return;
        }

        if (!password.value) {
            alert('비밀번호를 입력해주세요!');
            return;
        }

        if (password.value !== password_codfirm.value) {
            alert('비밀번호가 다릅니다!');
            return;
        }

        if (!name.value) {
            alert('이름을 입력해주세요!');
            return;
        }

        if (!phone_middle.value || !phone_last.value) {
            alert('전화번호를 입력해주세요!');
            return;
        }

        registered.forEach(u => {
            if (u.id === id.value) {
                alert('아이디가 이미 존재합니다!');
                return;
            }
        });

        localStorage.setItem('registered', JSON.stringify([...registered, {
            id: id.value,
            password: password.value,
            name: name.value,
            phone: phoneButton.textContent + "-" + phone_middle.value + "-" + phone_last.value,
        }]));
        window.location.reload();
    });
}

const initLogin = () => {
    const article = document.querySelector('.articleLogin');
    const id = article.querySelector('#idInput');
    const password = article.querySelector('#passwordInput');
    const submit = article.querySelector('.submitButton');
    const registered = JSON.parse(localStorage.getItem('registered'));

    let check = false;

    submit.addEventListener('click', (e) => {
        e.preventDefault();

        if (!id.value) {
            alert('아이디를 입력해주세요!');
            return;
        }

        if (!password.value) {
            alert('비밀번호를 입력해주세요!');
            return;
        }

        registered.forEach(u => {
            if (u.id !== id.value || u.password !== password.value) {
                return;
            }

            localStorage.setItem('user', JSON.stringify({ ...u }));
            check = true;
            window.location.reload();
        });

        if (!check) {
            alert('아이디 혹은 비밀번호가 일치하지 않습니다!');
        }
    });
}

const initUserInfo = () => {
    let user = JSON.parse(localStorage.getItem('user'));

    if (!user) {
        return;
    }

    let registered = JSON.parse(localStorage.getItem('registered'));

    const article = document.querySelector('.articleUserInfo');

    const phoneField = article.querySelector('.phoneField');
    const phoneButton = phoneField.querySelector('.phoneFieldSelect');
    const phoneList = phoneField.querySelector('.phoneFieldList');
    const phoneSelectButtons = phoneList.querySelectorAll('button');

    const toggle = () => {
        phoneButton.classList.toggle('selected');
        phoneList.classList.toggle('show');
    }

    phoneButton.addEventListener('click', () => {
        toggle();
    });

    phoneSelectButtons.forEach(button => {
        button.addEventListener('click', () => {
            phoneSelectButtons.forEach(e => {
                e.classList.remove('selected');
            });

            button.classList.add('selected');
            phoneButton.textContent = button.textContent;
            toggle();
        });
    });

    const id = article.querySelector('#idInputUserInfo');
    const password = article.querySelector('#passwordInputUserInfo');
    const password_codfirm = article.querySelector('#passwordConfirmInputUserInfo');
    const name = article.querySelector('#nameInputUserInfo');
    const phone_middle = article.querySelector('#phoneMiddleInputUserInfo');
    const phone_last = article.querySelector('#phoneLastInputUserInfo');
    const submit = article.querySelector('.submitButton');
    const secession = article.querySelector('.secessionButton');

    id.setAttribute('readonly', true);
    id.style.backgroundColor = '#ddd';
    id.value = user.id;
    name.value = user.name;
    phone_middle.value = user.phone.split("-")[1];
    phone_last.value = user.phone.split("-")[2];

    submit.addEventListener('click', (e) => {
        e.preventDefault();

        if (!password.value) {
            alert('비밀번호를 입력해주세요!');
            return;
        }

        if (password.value !== password_codfirm.value) {
            alert('비밀번호가 다릅니다!');
            return;
        }

        if (!name.value) {
            alert('이름을 입력해주세요!');
            return;
        }

        if (!phone_middle.value || !phone_last.value) {
            alert('전화번호를 입력해주세요!');
            return;
        }

        registered.forEach(u => {
            if (u.id === user.id) {
                u.password = user.password = password.value;
                u.name = user.name = name.value;
                u.phone = user.phone = phoneButton.textContent + "-" + phone_middle.value + "-" + phone_last.value;
                localStorage.setItem('registered', JSON.stringify(registered));
                localStorage.setItem('user', JSON.stringify(user));
                window.location.reload();
            }
        });
    });

    secession.addEventListener('click', () => {
        registered = registered.filter(e => {
            if (e.id === user.id) {
                return false;
            }

            return true;
        });

        localStorage.setItem('registered', JSON.stringify(registered));
        localStorage.removeItem('user');
        window.location.reload();
    });
}

const initHeader = () => {
    generateHeader();
    checkRegistered();
    renderUser();
    initNav();
    initModal();
    initSignup();
    initLogin();
    initUserInfo();
}

export { initHeader };