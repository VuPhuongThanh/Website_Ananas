// render-form-login
function renderForm() {
  const login = document.querySelector('.header-search_user');
  const form_login = document.querySelector('.form');
  const blur = document.querySelector('.blur');
  const close = document.querySelectorAll('.close');
  close.forEach((item) => {
    item.addEventListener('click', () => {
      blur.style.display = 'none';
      form_login.style.display = 'none';
    });
  });
  blur.addEventListener('click', () => {
    blur.style.display = 'none';
    form_login.style.display = 'none';
  });
  let isForm = true;

  login.addEventListener('click', () => {
    if (isForm) {
      form_login.style.display = 'block';
      blur.style.display = 'block';
      isForm = false;
    } else {
      isForm = true;
      form_login.style.display = 'none';
      blur.style.display = 'none';
    }
  });
}

// show-pass
function showPass() {
  const showInput = document.querySelectorAll('.password');
  const pass = document.querySelectorAll('.check-password');
  const pass_x = document.querySelectorAll('.check-password-2');
  pass.forEach((item, index) => {
    item.addEventListener('click', () => {
      item.style.display = 'none';
      pass_x[index].style.display = 'block';
      showInput[index].type = 'text';
    });
  });
  pass_x.forEach((item, index) => {
    item.addEventListener('click', () => {
      item.style.display = 'none';
      pass[index].style.display = 'block';
      showInput[index].type = 'password';
    });
  });
}

// random-login-register
function loginRegister() {
  const form_menu1 = document.querySelector('.menu-right');
  const form_menu2 = document.querySelector('.form-register');
  const change_form = document.querySelector('.change-form');

  change_form.addEventListener('click', () => {
    form_menu1.style.display = 'none';
    form_menu2.style.display = 'block';
  });
  const user_2 = document.querySelector('.user-2');
  user_2.addEventListener('click', () => {
    form_menu1.style.display = 'block';
    form_menu2.style.display = 'none';
  });
}
//

// icon-bar   // show-menu-mobile
function barMenu() {
  const icon_bar = document.querySelector('.icon-bar');
  const icon_item = document.querySelectorAll('.icon-bar > span');
  const header_menu = document.querySelector('.header-menu');
  let isXState = true;
  icon_bar.addEventListener('click', () => {
    if (isXState) {
      header_menu.style.display = 'block';
      icon_item.forEach((item, index) => {
        if (index === 0) {
          item.style.top = '10px';
          item.style.rotate = '35deg';
          item.style.transition = '.8s';
        } else if (index === 1) {
          // item.style.display = 'none';
          item.style.opacity = '0';
        } else {
          item.style.top = '-8px';
          item.style.rotate = '-35deg';
          item.style.transition = '.8s';
        }
      });
      isXState = false;
    } else {
      header_menu.style.display = 'none';
      icon_item.forEach((item, index) => {
        if (index === 0) {
          item.style.top = '0';
          item.style.rotate = '0deg';
          item.style.transition = '.8s';
        } else if (index === 1) {
          item.style.opacity = '1';
        } else {
          item.style.top = '0';
          item.style.rotate = '0deg';
          item.style.transition = '.8s';
        }
      });
      isXState = true;
    }
  });
}
// lick-product
const showMenu = document.querySelectorAll('.click-product_show');
const click_product = document.querySelector('.click-product');
const header_hover = document.querySelector('.header-menu_hover');
let isItem = true;

showMenu.forEach((item, index) => {
  console.log(item[index]);
  item.addEventListener('click', (event) => {
    if (isItem) {
      event.preventDefault();
      click_product.style.display = 'block';
      isItem = false;
    } else {
      click_product.style.display = 'none';
      isItem = true;
    }
  });
});
// render - Hot
const new_hot = document.querySelector('.new-info');
const list_new = [
  {
    name: 'BUY 2 GET 10% OFF - ÁP DỤNG VỚI TẤT CẢ BASIC TEE',
    href: '#',
  },
  {
    name: 'FREE SHIPPING VỚI HOÁ ĐƠN TỪ 800K !',
    href: '#',
  },
  {
    name: 'HÀNG 2 TUẦN NHẬN ĐỔI - GIÀY NỬA NĂM BẢO HÀNH',
    href: '#',
  },
  {
    name: 'BUY MORE PAY LESS - ÁP DỤNG KHI MUA PHỤ KIỆN',
    href: '#',
  },
];

// const number = [0, 1, 2, 3];
function renderText(text) {
  const randomNew = text.map((item, index) => {
    return `
      <div class="new-info_item">
        <a href=${item.href}>${item.name}</a>
      </div>
    `;
  });
  new_hot.innerHTML = randomNew.join('');
}
renderText(list_new);

// show item
const reveal = () => {
  const reveals = document.querySelectorAll('.reveal');
  reveals.forEach((item) => {
    const windowHeight = window.innerHeight;
    let revealTop = item.getBoundingClientRect().top;
    let revealPoint = 100;
    if (revealTop < windowHeight - revealPoint) {
      item.classList.add('active');
    } else {
      item.classList.remove('active');
    }
  });
};
window.addEventListener('scroll', reveal);
function footerNav() {
  const footer_show = document.querySelectorAll('.footer-show');
  const footer_list = document.querySelectorAll('.footer-list');
  const footerIcon = document.querySelectorAll('.footer-icon_arrow');
  let isFooter = true;
  footer_show.forEach((item, index) => {
    item.addEventListener('click', () => {
      if (isFooter) {
        footer_list[index].style.display = 'block';
        footerIcon[index].style.rotate = '180deg';
        isFooter = false;
      } else {
        footer_list[index].style.display = 'none';
        footerIcon[index].style.rotate = '0deg';
        isFooter = true;
      }
    });
  });
}

function productShow() {
  const productItem = document.querySelectorAll('.product-nav_item');
  const productList = document.querySelectorAll('.product-nav_list-2');
  const productIcon = document.querySelectorAll('.product-icon');
  isProduct = true;
  productItem.forEach((item, index) => {
    item.addEventListener('click', () => {
      if (isProduct) {
        productList[index + 1].style.display = 'none';
        productIcon[index].style.rotate = '180deg';
        isProduct = false;
      } else {
        productList[index + 1].style.display = 'block';
        productIcon[index].style.rotate = '0deg';
        isProduct = true;
      }
    });
  });
}
function iconClose() {
  const clickProduct = document.querySelectorAll('.product-nav_item-2');
  const productCLose = document.querySelectorAll('.product-icon_close');
  const productFocus = document.querySelectorAll('.product-focus');
  let isClose = true;
  clickProduct.forEach((item, index) => {
    item.addEventListener('click', (event) => {
      event.preventDefault();
      if (isClose) {
        productFocus[index].removeAttribute('href');
        productCLose[index].style.display = 'block';
        productFocus[index].style.fontWeight = '1000';
        item.style.background = '#F1F1F1';
        isClose = false;
      } else {
        productCLose[index].style.display = 'none';
        item.style.background = 'transparent';
        productFocus[index].style.fontWeight = '500';
        isClose = true;
      }
    });
  });
}
const fixed = document.querySelector('.fixed-logo');
const fixed_shop = document.querySelector('.fixed-shop > span');
function sumProduct() {
  let saveItem = localStorage.getItem('shop-item');
  saveItem = JSON.parse(saveItem);
  const newSaveItem = new Set(saveItem); // lọc các value giống nhau
  fixed_shop.textContent = Array.from(newSaveItem).length; // convert sang mảng
}
sumProduct();
fixed.addEventListener('click', () => {
  window.location.href = './shop/shop.html';
});
function App() {
  renderForm();
  showPass();
  loginRegister();
  barMenu();
  footerNav();
  productShow();
  iconClose();
}
App();
