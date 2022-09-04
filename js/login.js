const loginContainer = document.getElementById("login");
const loginForm = document.getElementById("login-form");
const idInput = document.getElementById("id-input");
const pwInput = document.getElementById("password-input");
const loginBtn = document.getElementById("login-btn");
const signBtn = document.getElementById("sign-btn");

const USERINFO_KEY = "userInfo";

let userList = loadUser();

function signUp(event) {
  event.preventDefault();
  const userId = idInput.value;
  const userPw = pwInput.value;
  if (checkSameId(userId)) {
    console.log("동일한 아이디가 존재합니다.");
  } else {
    newUser = {
      id: userId,
      pw: userPw,
      content: Date.now(),
    };
    userList.push(newUser);
    saveUser();
    console.log("회원가입되었습니다!");
  }
  idInput.value = "";
  pwInput.value = "";
}
// 동일 아이디가 있는지 체크
function checkSameId(userId) {
  const savedUserInfo = JSON.parse(localStorage.getItem(USERINFO_KEY));
  console.log(savedUserInfo);
  let result = false;
  if (savedUserInfo !== null) {
    for (i = 0; i < savedUserInfo.length; i++) {
      if (userId === savedUserInfo[i].id) {
        result = true;
      }
    }
  }
  return result;
}
// 회원등록
function saveUser() {
  localStorage.setItem(USERINFO_KEY, JSON.stringify(userList));
}

signBtn.addEventListener("click", signUp);

// 로컬스토리지 데이터 로드
function loadUser() {
  let loadList = localStorage.getItem(USERINFO_KEY);
  if (loadList !== null) {
    //console.log(loadList);
    return JSON.parse(loadList);
  } else {
    return [];
  }
}
