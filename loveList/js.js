const fomrLove = document.querySelector('.form-love');
const showErrow = document.querySelectorAll('.show-errow');
const inputvalue = document.querySelectorAll('.form-control');

function checkLogin(fomrLove, inputvalue, showErrow) {
  fomrLove.addEventListener('submit', (e) => {
    let obj = [];
    inputvalue.forEach((item, index) => {
      const value = item.value;
      if (value.trim() === '') {
        e.preventDefault();
        obj.fullName = 'Vui lòng nhập mã đơn hàng';
        obj.password = 'Vui lòng nhập email / số điện thoại';
        showErrow[index].textContent = obj.fullName;
        if (item.type == 'password') {
          showErrow[index].textContent = obj.password;
        }
      }
    });
  });
  inputvalue.forEach((item, index) => {
    item.addEventListener('input', (e) => {
      const value = e.target.value;
      if (value) {
        showErrow[index].textContent = '';
      }
    });
  });
}
checkLogin(fomrLove, inputvalue, showErrow);
