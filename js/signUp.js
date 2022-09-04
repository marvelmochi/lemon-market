export { loadUser };
import { idInput, pwInput, signUpBtn } from "./elements.js";

const USERINFO_KEY = "userInfo";

let userList = loadUser();

function signUp(event) {
  event.preventDefault();
  const userId = idInput.value;
  const userPw = pwInput.value;
  if (checkSameId(userId) && userPw !== "") {
    alert("동일한 아이디가 존재합니다.");
  } else {
    if (userId !== "" && userPw !== "") {
      const newUser = {
        id: userId,
        pw: userPw,
        content: Date.now(),
      };
      userList.push(newUser);
      saveUser();
      alert("회원 등록이 완료되었습니다!");
    } else {
      alert("아이디 혹은 비밀번호를 입력해주세요.");
    }
  }
  idInput.value = "";
  pwInput.value = "";
}
// 동일 아이디가 있는지 체크
function checkSameId(userId) {
  const savedUserInfo = JSON.parse(localStorage.getItem(USERINFO_KEY));
  //console.log(savedUserInfo);
  let result = false;
  if (savedUserInfo !== null) {
    for (let i = 0; i < savedUserInfo.length; i++) {
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

signUpBtn.addEventListener("click", signUp);

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
