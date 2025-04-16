function sendit(){
    const username=document.getElementById('username')
const email=document.getElementById('email')
const userpw=document.getElementById('userpw')
const userpw_re=document.getElementById('userpw_re')
const ssn1=document.getElementById('ssn1')
const ssn2=document.getElementById('ssn2')

const expNameText =/^[가-힣]+$/
const expEmailText=/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
const expPwText=/^(?=.*[A-Za-z])(?=.*\d)(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{8,20}$/;
const expSsn = /^\d{13}$/;

if (!expNameText.test(username.value)){
    alert("이름은 한글로 입력하세요.")
    username.focus()
    return false
}
if(!expEmailText.test(email.value)){
    alert('올바른 형식의 이메일을 입력해주세요')
    email.focus()
    return false
}
if(!expPwText.test(userpw.value)){
    alert('비밀번호는 8자이상 20자이하의 영문자, 숫자, 특수문자를 한 자이상 꼭 포함해야합니다.')
    userpw.focus()
    return false
}
if(userpw.value != userpw_re.value){
    alert('비밀번호와 비밀번호 확인이 일치하지 않습니다.')
    userpw_re.focus()
    return false
}
const ssn = ssn1.value + ssn2.value;

if (!expSsn.test(ssn)) {
    alert('주민등록번호는 숫자 6자리 - 7자리로 입력해주세요.');
    ssn1.focus();
    return false;
}

const weights = [2, 3, 4, 5, 6, 7, 8, 9, 2, 3, 4, 5];
let sum = 0;

for (let i = 0; i < 12; i++) {
    sum += parseInt(ssn.charAt(i)) * weights[i];
}

const checkDigit = (11 - (sum % 11)) % 10;

if (checkDigit !== parseInt(ssn.charAt(12))) {
    alert("유효하지 않은 주민등록번호입니다.");
    ssn1.focus();
    return false;
}
return true
}

