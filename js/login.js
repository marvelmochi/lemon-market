import { loginContainer, idInput, pwInput, loginBtn } from "./elements.js";
import { loadUser } from "./signUp.js";
import { toggleHidden, LOGINUSER_KEY } from "./utils.js";

function login(event) {
  event.preventDefault();
  let userList = loadUser();
  //console.log(userList);
  //console.log(userId, userPw);

  if (userList.length === 0) {
    alert("등록된 아이디가 없습니다.");
    // 이 경우뿐만 아니라, 아이디가 아예 존재하지 않는 경우도 추가해야함
  } else {
    let loginUser = checkLogin();
    if (loginUser) {
      //로그인 완료
      alert(`${idInput.value}님 환영합니다!`);
      toggleHidden(loginContainer);
      updateLoginUser(loginUser);
    } else {
      //로그인 불가
      alert("아이디나 비밀번호가 일치하지 않습니다.");
    }
  }
}

function checkLogin() {
  let userList = loadUser();
  //console.log(userList);
  let userId = idInput.value;
  let userPw = pwInput.value;
  let loginUser = null;
  for (let i = 0; i < userList.length; i++) {
    if (userId === userList[i].id && userPw === userList[i].pw) {
      loginUser = userList[i];
    }
  }
  return loginUser;
}
function updateLoginUser(loginUser) {
  localStorage.setItem(LOGINUSER_KEY, JSON.stringify(loginUser));
}
loginBtn.addEventListener("click", login);
