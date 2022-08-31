const loginContainer = document.getElementById("login");
const loginForm = document.getElementById("login-form");
const idInput = document.getElementById("id-input");
const pwInput = document.getElementById("password-input");
const loginBtn = document.getElementById("login-btn");
const signBtn = document.getElementById("sign-btn");

function signUp(event) {
  event.preventDefault();
  const id = idInput.value;
  const pw = pwInput.value;

  if (localStorage.getItem("id") === id) {
    alert("이미 존재하는 아이디입니다.");
  } else {
    localStorage.setItem("id", id);
    localStorage.setItem("pw", pw);

    alert("회원가입이 완료되었습니다.");
  }
}

function login(event) {
  event.preventDefault();
  const id = idInput.value;
  const pw = pwInput.value;

  if (localStorage.getItem("id") === id && localStorage.getItem("pw") === pw) {
    loginContainer.classList.add("hidden");
    alert("로그인되었습니다.");
  } else {
    alert("아이디 혹은 패스워드를 잘못 입력했습니다.");
  }
}
signBtn.addEventListener("click", signUp);
loginBtn.addEventListener("click", login);
