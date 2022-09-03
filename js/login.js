const loginContainer = document.getElementById("login");
const loginForm = document.getElementById("login-form");
const idInput = document.getElementById("id-input");
const pwInput = document.getElementById("password-input");
const loginBtn = document.getElementById("login-btn");
const signBtn = document.getElementById("sign-btn");

const USERINFO_KEY = "userInfo";
let userList = [];

function signUp(event) {
  event.preventDefault();
  const userId = idInput.value;
  const userPw = pwInput.value;
  if (checkSameId(userId)) {
    alert("동일한 아이디가 존재합니다.");
  } else {
    newUser = {
      id: userId,
      pw: userPw,
    };
    userList.push(newUser);
    saveUser(userList);
    alert("회원가입되었습니다.");
  }
  idInput.value = "";
  pwInput.value = "";
}
// 동일 아이디가 있는지 체크
function checkSameId(userId) {
  const savedUserInfo = JSON.parse(localStorage.getItem(USERINFO_KEY));
  console.log(savedUserInfo);
  let result = false;
  if (savedUserInfo === null) {
  } else {
    for (i = 0; i < savedUserInfo.length; i++) {
      if (userId === savedUserInfo[i].id) {
        result = true;
      }
    }
  }
  return result;
}
// 회원등록
function saveUser(userList) {
  localStorage.setItem(USERINFO_KEY, JSON.stringify(userList));
  console.log(JSON.parse(localStorage.getItem(USERINFO_KEY)));
}

signBtn.addEventListener("click", signUp);
