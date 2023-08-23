// const paRam = new URLSearchParams(window.location.search);
// console.log(paRam.get('shopItem'));

// dieu huong ve danh sach san pham product
const navProduct = document.querySelector('.shop-footer > button:last-child');
navProduct.addEventListener('click', () => {
  window.location.href = '../product/product.html';
});

const productList = [
  {
    id: null,
    img: 'https://ananas.vn/wp-content/uploads/Pro_A6T014_1-500x500.jpeg',
    img_hover: 'https://ananas.vn/wp-content/uploads/Pro_A6T014_2-500x500.jpeg',
    error: 'anh loi',
    iconLove:
      '	https://ananas.vn/wp-content/themes/ananas/fe-assets/images/svg/Heart_product_1.svg',
    iconLove_hover:
      'https://ananas.vn/wp-content/themes/ananas/fe-assets/images/svg/Heart_product_2.svg',
    title: 'New Arrival',
    name: 'Track 6 2.Blues - Low Top',
    note: 'Navy Blue',
    price: '1.190.000 VND',
  },
  {
    id: null,
    img: 'https://ananas.vn/wp-content/uploads/Pro_A6T015_1-500x500.jpeg',
    img_hover: 'https://ananas.vn/wp-content/uploads/Pro_A6T015_2-500x500.jpeg',
    error: 'anh loi',
    iconLove:
      '	https://ananas.vn/wp-content/themes/ananas/fe-assets/images/svg/Heart_product_1.svg',
    iconLove_hover:
      'https://ananas.vn/wp-content/themes/ananas/fe-assets/images/svg/Heart_product_2.svg',
    title: 'New Arrival',
    name: 'Track 6 2.Blues - Low Top',
    note: 'Bluewash',
    price: '1.290.000 VND',
  },
  {
    id: null,
    img: 'https://ananas.vn/wp-content/uploads/Pro_AHCS002_1-500x500.jpeg',
    img_hover: 'https://ananas.vn/wp-content/uploads/Pro_AHCS002_2-500x500.jpg',
    error: 'anh loi',
    iconLove:
      '	https://ananas.vn/wp-content/themes/ananas/fe-assets/images/svg/Heart_product_1.svg',
    iconLove_hover:
      'https://ananas.vn/wp-content/themes/ananas/fe-assets/images/svg/Heart_product_2.svg',
    title: 'New Arrival',
    name: 'High Crew Socks - Ananas Puppet Club',
    note: 'Tie Dye',
    price: '119.000 VND',
  },
  {
    id: null,
    img: 'https://ananas.vn/wp-content/uploads/Pro_AHCS003_1-500x500.jpeg',
    img_hover: 'https://ananas.vn/wp-content/uploads/Pro_AHCS003_2-500x500.jpg',
    error: 'anh loi',
    iconLove:
      '	https://ananas.vn/wp-content/themes/ananas/fe-assets/images/svg/Heart_product_1.svg',
    iconLove_hover:
      'https://ananas.vn/wp-content/themes/ananas/fe-assets/images/svg/Heart_product_2.svg',
    title: 'New Arrival',
    name: 'High Crew Socks - Ananas Puppet Club',
    note: 'Tie Dye',
    price: '119.000 VND',
  },
  {
    id: null,
    img: 'https://ananas.vn/wp-content/uploads/Pro_AHCS004_1-500x500.jpeg',
    img_hover: '	https://ananas.vn/wp-content/uploads/Pro_AHCS004_2-500x500.jpg',
    error: 'anh loi',
    iconLove:
      '	https://ananas.vn/wp-content/themes/ananas/fe-assets/images/svg/Heart_product_1.svg',
    iconLove_hover:
      'https://ananas.vn/wp-content/themes/ananas/fe-assets/images/svg/Heart_product_2.svg',
    title: 'New Arrival',
    name: 'High Crew Socks - Ananas Puppet Club',
    note: 'Tie Dye',
    price: '119.000 VND',
  },
  {
    id: null,
    img: 'https://ananas.vn/wp-content/uploads/Pro_AV00167_1-500x500.jpeg',
    img_hover:
      'https://ananas.vn/wp-content/uploads/Pro_AV00167_2-500x500.jpeg',
    error: 'anh loi',
    iconLove:
      '	https://ananas.vn/wp-content/themes/ananas/fe-assets/images/svg/Heart_product_1.svg',
    iconLove_hover:
      'https://ananas.vn/wp-content/themes/ananas/fe-assets/images/svg/Heart_product_2.svg',
    title: 'New Arrival',
    name: 'Urbas Corluray Mix - High Top',
    note: 'Corluray Mix',
    price: '650.000 VND',
  },
  {
    id: null,
    img: '	https://ananas.vn/wp-content/uploads/Pro_AV00165_1-500x500.jpeg',
    img_hover:
      'https://ananas.vn/wp-content/uploads/Pro_AV00165_2-500x500.jpeg',
    error: 'anh loi',
    iconLove:
      '	https://ananas.vn/wp-content/themes/ananas/fe-assets/images/svg/Heart_product_1.svg',
    iconLove_hover:
      'https://ananas.vn/wp-content/themes/ananas/fe-assets/images/svg/Heart_product_2.svg',
    title: 'New Arrival',
    name: 'Track 6 2.Blues - Low Top',
    note: 'Navy Blue',
    price: '1.190.000 VND',
  },
  {
    id: null,
    img: 'https://ananas.vn/wp-content/uploads/Pro_AV00174_1-500x500.jpeg',
    img_hover:
      'https://ananas.vn/wp-content/uploads/Pro_AV00174_2-500x500.jpeg',
    error: 'anh loi',
    iconLove:
      '	https://ananas.vn/wp-content/themes/ananas/fe-assets/images/svg/Heart_product_1.svg',
    iconLove_hover:
      'https://ananas.vn/wp-content/themes/ananas/fe-assets/images/svg/Heart_product_2.svg',
    title: 'New Arrival',
    name: 'Urbas Corluray Mix - Low Top',
    note: 'Corluray Mix',
    price: '610.000 VND',
  },
  {
    id: null,
    img: 'https://ananas.vn/wp-content/uploads/Pro_AV00173_1-500x500.jpeg',
    img_hover:
      '	https://ananas.vn/wp-content/uploads/Pro_AV00173_2-500x500.jpeg',
    error: 'anh loi',
    iconLove:
      '	https://ananas.vn/wp-content/themes/ananas/fe-assets/images/svg/Heart_product_1.svg',
    iconLove_hover:
      'https://ananas.vn/wp-content/themes/ananas/fe-assets/images/svg/Heart_product_2.svg',
    title: 'New Arrival',
    name: 'Vintas Jazico - Low Top',
    note: 'Royal White',
    price: '720.000 VND',
  },
  {
    id: null,
    img: '	https://ananas.vn/wp-content/uploads/Pro_A6T016_1-500x500.jpeg',
    img_hover: '		https://ananas.vn/wp-content/uploads/Pro_A6T016_2-500x500.jpeg',
    error: 'anh loi',
    iconLove:
      '	https://ananas.vn/wp-content/themes/ananas/fe-assets/images/svg/Heart_product_1.svg',
    iconLove_hover:
      'https://ananas.vn/wp-content/themes/ananas/fe-assets/images/svg/Heart_product_2.svg',
    title: 'New Arrival',
    name: 'Track 6 2.Blues - Low Top',
    note: 'Royal White',
    price: '1.190.000 VND',
  },
  {
    id: null,
    img: 'https://ananas.vn/wp-content/uploads/Pro_A6T012_1-500x500.jpg',
    img_hover: '	https://ananas.vn/wp-content/uploads/Pro_A6T012_2-500x500.jpg',
    error: 'anh loi',
    iconLove:
      '	https://ananas.vn/wp-content/themes/ananas/fe-assets/images/svg/Heart_product_1.svg',
    iconLove_hover:
      'https://ananas.vn/wp-content/themes/ananas/fe-assets/images/svg/Heart_product_2.svg',
    title: 'New Arrival',
    name: 'Track 6 I.S.E.E',
    note: 'Pure White/Icy Blue',
    price: '1.490.000 VND',
  },
  {
    id: null,
    img: 'https://ananas.vn/wp-content/uploads/Pro_AV00154_1-500x500.jpg',
    img_hover: 'https://ananas.vn/wp-content/uploads/Pro_AV00154_2-500x500.jpg',
    error: 'anh loi',
    iconLove:
      'https://ananas.vn/wp-content/themes/ananas/fe-assets/images/svg/Heart_product_1.svg',
    iconLove_hover:
      'https://ananas.vn/wp-content/themes/ananas/fe-assets/images/svg/Heart_product_2.svg',
    title: 'New Arrival',
    name: 'Vintas Soda Pop - Low Top',
    note: 'Amparo Blue',
    price: '680.000 VND',
  },
  {
    id: null,
    img: 'https://ananas.vn/wp-content/uploads/Pro_AV00153_1-500x500.jpg',
    img_hover: 'https://ananas.vn/wp-content/uploads/Pro_AV00153_2-500x500.jpg',
    error: 'anh loi',
    iconLove:
      'https://ananas.vn/wp-content/themes/ananas/fe-assets/images/svg/Heart_product_1.svg',
    iconLove_hover:
      'https://ananas.vn/wp-content/themes/ananas/fe-assets/images/svg/Heart_product_2.svg',
    title: 'New Arrival',
    name: 'Vintas Soda Pop - Low Top',
    note: 'Emerald',
    price: '680.000 VND',
  },
  {
    id: null,
    img: '	https://ananas.vn/wp-content/uploads/Pro_AV00155_1-500x500.jpg',
    img_hover: 'https://ananas.vn/wp-content/uploads/Pro_AV00155_2-500x500.jpg',
    error: 'anh loi',
    iconLove:
      'https://ananas.vn/wp-content/themes/ananas/fe-assets/images/svg/Heart_product_1.svg',
    iconLove_hover:
      'https://ananas.vn/wp-content/themes/ananas/fe-assets/images/svg/Heart_product_2.svg',
    title: 'New Arrival',
    name: 'Vintas Soda Pop - Low Top',
    note: 'Red Violet',
    price: '720.000 VND',
  },
  {
    id: null,
    img: 'https://ananas.vn/wp-content/uploads/Lgbt1080-1-500x500.jpg',
    img_hover: 'https://ananas.vn/wp-content/uploads/Lgbt97222-1-500x500.jpg',
    error: 'anh loi',
    iconLove:
      'https://ananas.vn/wp-content/themes/ananas/fe-assets/images/svg/Heart_product_1.svg',
    iconLove_hover:
      'https://ananas.vn/wp-content/themes/ananas/fe-assets/images/svg/Heart_product_2.svg',
    title: 'New Arrival',
    name: 'Urbas Love+ 22 - High Top',
    note: 'Rustic',
    price: '850.000 VND',
  },
  {
    id: null,
    img: 'https://ananas.vn/wp-content/uploads/Pro_AV00176_1-500x500.jpg',
    img_hover: 'https://ananas.vn/wp-content/uploads/Pro_AV00176_2-500x500.jpg',
    error: 'anh loi',
    iconLove:
      'https://ananas.vn/wp-content/themes/ananas/fe-assets/images/svg/Heart_product_1.svg',
    iconLove_hover:
      'https://ananas.vn/wp-content/themes/ananas/fe-assets/images/svg/Heart_product_2.svg',
    title: 'New Arrival',
    name: 'Vintas Soda Pop - Low Top',
    note: 'Rain Drum',
    price: '720.000 VND',
  },
  {
    id: null,
    img: 'https://ananas.vn/wp-content/uploads/Pro_AV00177_1-500x500.jpg',
    img_hover: 'https://ananas.vn/wp-content/uploads/Pro_AV00177_2-500x500.jpg',
    error: 'anh loi',
    iconLove:
      'https://ananas.vn/wp-content/themes/ananas/fe-assets/images/svg/Heart_product_1.svg',
    iconLove_hover:
      'https://ananas.vn/wp-content/themes/ananas/fe-assets/images/svg/Heart_product_2.svg',
    title: 'New Arrival',
    name: 'Vintas Soda Pop - Low Top',
    note: 'Green Moss',
    price: '720.000 VND',
  },
  {
    id: null,
    img: 'https://ananas.vn/wp-content/uploads/Pro_AV00175_1-500x500.jpg',
    img_hover: '	https://ananas.vn/wp-content/uploads/Pro_AV00175_2-500x500.jpg',
    error: 'anh loi',
    iconLove:
      'https://ananas.vn/wp-content/themes/ananas/fe-assets/images/svg/Heart_product_1.svg',
    iconLove_hover:
      'https://ananas.vn/wp-content/themes/ananas/fe-assets/images/svg/Heart_product_2.svg',
    title: 'New Arrival',
    name: 'Vintas Soda Pop - Low Top',
    note: 'Marmalade',
    price: '720.000 VND',
  },
  {
    id: null,
    img: 'https://ananas.vn/wp-content/uploads/Pro_AV00202_1-500x500.jpg',
    img_hover: 'https://ananas.vn/wp-content/uploads/Pro_AV00202_2-500x500.jpg',
    error: 'anh loi',
    iconLove:
      'https://ananas.vn/wp-content/themes/ananas/fe-assets/images/svg/Heart_product_1.svg',
    iconLove_hover:
      'https://ananas.vn/wp-content/themes/ananas/fe-assets/images/svg/Heart_product_2.svg',
    title: 'New Arrival',
    name: 'Urbas SC - Mule',
    note: 'Dusty Blue',
    price: '620.000 VND',
  },
  {
    id: null,
    img: 'https://ananas.vn/wp-content/uploads/Pro_AV00201_1-500x500.jpg',
    img_hover: 'https://ananas.vn/wp-content/uploads/Pro_AV00201_2-500x500.jpg',
    error: 'anh loi',
    iconLove:
      'https://ananas.vn/wp-content/themes/ananas/fe-assets/images/svg/Heart_product_1.svg',
    iconLove_hover:
      'https://ananas.vn/wp-content/themes/ananas/fe-assets/images/svg/Heart_product_2.svg',
    title: 'New Arrival',
    name: 'Urbas SC - Mule',
    note: 'Foliage',
    price: '580.000 VND',
  },
  {
    id: null,
    img: 'https://ananas.vn/wp-content/uploads/Pro_AV00198_1-500x500.jpg',
    img_hover: 'https://ananas.vn/wp-content/uploads/Pro_AV00198_2-500x500.jpg',
    error: 'anh loi',
    iconLove:
      'https://ananas.vn/wp-content/themes/ananas/fe-assets/images/svg/Heart_product_1.svg',
    iconLove_hover:
      'https://ananas.vn/wp-content/themes/ananas/fe-assets/images/svg/Heart_product_2.svg',
    title: 'New Arrival',
    name: 'Urbas SC - Mule',
    note: 'Aloe Wash',
    price: '580.000 VND',
  },
  {
    id: null,
    img: 'https://ananas.vn/wp-content/uploads/Pro_AV00196_1-500x500.jpg',
    img_hover: 'https://ananas.vn/wp-content/uploads/Pro_AV00196_2-500x500.jpg',
    error: 'anh loi',
    iconLove:
      'https://ananas.vn/wp-content/themes/ananas/fe-assets/images/svg/Heart_product_1.svg',
    iconLove_hover:
      'https://ananas.vn/wp-content/themes/ananas/fe-assets/images/svg/Heart_product_2.svg',
    title: 'New Arrival',
    name: 'Urbas SC - Mule',
    note: 'Dusty Blue',
    price: '580.000 VND',
  },
  {
    id: null,
    img: 'https://ananas.vn/wp-content/uploads/Pro_AV00199_1-500x500.jpg',
    img_hover: 'https://ananas.vn/wp-content/uploads/Pro_AV00199_2-500x500.jpg',
    error: 'anh loi',
    iconLove:
      'https://ananas.vn/wp-content/themes/ananas/fe-assets/images/svg/Heart_product_1.svg',
    iconLove_hover:
      'https://ananas.vn/wp-content/themes/ananas/fe-assets/images/svg/Heart_product_2.svg',
    title: 'New Arrival',
    name: 'Urbas SC - Mule',
    note: 'Fair Orchid',
    price: '580.000 VND',
  },
  {
    id: null,
    img: 'https://ananas.vn/wp-content/uploads/Pro_AV00200_1-500x500.jpg',
    img_hover: '	https://ananas.vn/wp-content/uploads/Pro_AV00200_2-500x500.jpg',
    error: 'anh loi',
    iconLove:
      'https://ananas.vn/wp-content/themes/ananas/fe-assets/images/svg/Heart_product_1.svg',
    iconLove_hover:
      'https://ananas.vn/wp-content/themes/ananas/fe-assets/images/svg/Heart_product_2.svg',
    title: 'New Arrival',
    name: 'Urbas SC - Mule',
    note: 'Cornsilk',
    price: '580.000 VND',
  },
  {
    id: null,
    img: '	https://ananas.vn/wp-content/uploads/Pro_AV00197_1-500x500.jpg',
    img_hover: '	https://ananas.vn/wp-content/uploads/Pro_AV00197_2-500x500.jpg',
    error: 'anh loi',
    iconLove:
      'https://ananas.vn/wp-content/themes/ananas/fe-assets/images/svg/Heart_product_1.svg',
    iconLove_hover:
      'https://ananas.vn/wp-content/themes/ananas/fe-assets/images/svg/Heart_product_2.svg',
    title: 'New Arrival',
    name: 'Urbas SC - Mule',
    note: 'Dark Purple',
    price: '580.000 VND',
  },
  {
    id: null,
    img: 'https://ananas.vn/wp-content/uploads/Pro_AV00195_1-500x500.jpg',
    img_hover: 'https://ananas.vn/wp-content/uploads/Pro_AV00195_2-500x500.jpg',
    error: 'anh loi',
    iconLove:
      'https://ananas.vn/wp-content/themes/ananas/fe-assets/images/svg/Heart_product_1.svg',
    iconLove_hover:
      'https://ananas.vn/wp-content/themes/ananas/fe-assets/images/svg/Heart_product_2.svg',
    title: 'New Arrival',
    name: 'Urbas SC - High Top',
    note: 'Aloe Wash',
    price: '650.000 VND',
  },
  {
    id: null,
    img: '	https://ananas.vn/wp-content/uploads/Pro_AV00194_1-500x500.jpg',
    img_hover: 'https://ananas.vn/wp-content/uploads/Pro_AV00194_2-500x500.jpg',
    error: 'anh loi',
    iconLove:
      'https://ananas.vn/wp-content/themes/ananas/fe-assets/images/svg/Heart_product_1.svg',
    iconLove_hover:
      'https://ananas.vn/wp-content/themes/ananas/fe-assets/images/svg/Heart_product_2.svg',
    title: 'New Arrival',
    name: 'Urbas SC - High Top',
    note: 'Foliage',
    price: '650.000 VND',
  },
  {
    id: null,
    img: 'https://ananas.vn/wp-content/uploads/Pro_AV00191_1-500x500.jpg',
    img_hover: '	https://ananas.vn/wp-content/uploads/Pro_AV00191_2-500x500.jpg',
    error: 'anh loi',
    iconLove:
      'https://ananas.vn/wp-content/themes/ananas/fe-assets/images/svg/Heart_product_1.svg',
    iconLove_hover:
      'https://ananas.vn/wp-content/themes/ananas/fe-assets/images/svg/Heart_product_2.svg',
    title: 'New Arrival',
    name: 'Urbas SC - High Top',
    note: 'Dusty Blue',
    price: '650.000 VND',
  },
  {
    id: null,
    img: 'https://ananas.vn/wp-content/uploads/Pro_AV00193_1-500x500.jpg',
    img_hover: '	https://ananas.vn/wp-content/uploads/Pro_AV00193_2-500x500.jpg',
    error: 'anh loi',
    iconLove:
      'https://ananas.vn/wp-content/themes/ananas/fe-assets/images/svg/Heart_product_1.svg',
    iconLove_hover:
      'https://ananas.vn/wp-content/themes/ananas/fe-assets/images/svg/Heart_product_2.svg',
    title: 'New Arrival',
    name: 'Urbas SC - High Top',
    note: 'Fair Orchid',
    price: '650.000 VND',
  },
  {
    id: null,
    img: '	https://ananas.vn/wp-content/uploads/Pro_AV00192_1-500x500.jpg',
    img_hover: 'https://ananas.vn/wp-content/uploads/Pro_AV00192_2-500x500.jpg',
    error: 'anh loi',
    iconLove:
      'https://ananas.vn/wp-content/themes/ananas/fe-assets/images/svg/Heart_product_1.svg',
    iconLove_hover:
      'https://ananas.vn/wp-content/themes/ananas/fe-assets/images/svg/Heart_product_2.svg',
    title: 'New Arrival',
    name: 'Urbas SC - High Top',
    note: 'Cornsilk',
    price: '650.000 VND',
  },
  {
    id: null,
    img: '	https://ananas.vn/wp-content/uploads/Pro_AV00186_1-500x500.jpg',
    img_hover: 'https://ananas.vn/wp-content/uploads/Pro_AV00186_2-500x500.jpg',
    error: 'anh loi',
    iconLove:
      'https://ananas.vn/wp-content/themes/ananas/fe-assets/images/svg/Heart_product_1.svg',
    iconLove_hover:
      'https://ananas.vn/wp-content/themes/ananas/fe-assets/images/svg/Heart_product_2.svg',
    title: 'New Arrival',
    name: 'Urbas SC - High Top',
    note: 'Cornsilk',
    price: '650.000 VND',
  },
  {
    id: null,
    img: '	https://ananas.vn/wp-content/uploads/pro_A61107_1-500x500.jpg',
    img_hover: '	https://ananas.vn/wp-content/uploads/pro_A61107_2-500x500.jpg',
    error: 'anh loi',
    iconLove:
      'https://ananas.vn/wp-content/themes/ananas/fe-assets/images/svg/Heart_product_1.svg',
    iconLove_hover:
      'https://ananas.vn/wp-content/themes/ananas/fe-assets/images/svg/Heart_product_2.svg',
    title: 'New Arrival',
    name: 'Urbas Unsettling - High Top',
    note: 'Insignia/Sulphur',
    price: '550.000 VND',
  },
  {
    id: null,
    img: 'https://ananas.vn/wp-content/uploads/pro_A61103_1-500x500.jpg',
    img_hover: 'https://ananas.vn/wp-content/uploads/pro_A61103_2-500x500.jpg',
    error: 'anh loi',
    iconLove:
      'https://ananas.vn/wp-content/themes/ananas/fe-assets/images/svg/Heart_product_1.svg',
    iconLove_hover:
      'https://ananas.vn/wp-content/themes/ananas/fe-assets/images/svg/Heart_product_2.svg',
    title: 'New Arrival',
    name: 'Urbas Unsettling - Low Top',
    note: 'Insignia/Sulphur',
    price: '490.000 VND',
  },
];
// String
const data = JSON.parse(localStorage.getItem('shop-item'));
// const group = Array.from(data).filter((item) => item.includes(item));
const filterShop = productList.filter((item, index) => {
  //includes tìm kiếm ở phần tử data có index + 1 == với phần tử con nó chưa ko
  return data.includes(String(index + 1));
});
// product-bonus
const productRelated = [
  {
    name: 'Vintas Flannel - High Top',
    color: 'Cement',
    sku: 'AV00118',
    price: '720.000',
    image: 'https://ananas.vn/wp-content/uploads/pro_AV00118_1.jpg',
  },
  {
    name: 'Urbas Lego - Low Top',
    color: 'Deep Mimosa',
    sku: 'A61053',
    price: '450.000',
    image: 'https://ananas.vn/wp-content/uploads/pro_urbas_A61053_1-1.jpg',
  },
  {
    name: 'Vintas Monoguso - Low Top',
    color: 'Moonbeam/Green',
    sku: 'AV00119',
    price: '720.000',
    image: 'https://ananas.vn/wp-content/uploads/Pro_AV00119_1.jpeg',
  },
  {
    name: 'Basas Simple Life NE - High Top',
    color: 'Black',
    sku: 'AV00077',
    price: '580.000',
    image: 'https://ananas.vn/wp-content/uploads/Pro_AV00077_1.jpg',
  },
  {
    name: 'Track 6 Utility Gum Sole - Low Top',
    color: 'Navy Peony/Gum',
    sku: 'A6T008',
    price: '1.090.000',
    image: 'https://ananas.vn/wp-content/uploads/pro_A67008_1.jpg',
  },
  {
    name: 'Pattas Polka Dots - Low Top',
    color: 'True Blue',
    sku: 'AV00171',
    price: '720.000',
    image: 'https://ananas.vn/wp-content/uploads/pro_AV00171_1.jpg',
  },
  {
    name: 'Pattas Polka Dots - Low Top',
    color: 'Coral Rose',
    sku: 'AV00159',
    price: '720.000',
    image: 'https://ananas.vn/wp-content/uploads/Pro_AV00159_1.jpg',
  },
  {
    name: 'Basas Workaday - Low Top',
    color: 'Black',
    sku: 'AV00149',
    price: '580.000',
    image: 'https://ananas.vn/wp-content/uploads/Pro_AV00149_1.jpg',
  },
  {
    name: 'Pattas Polka Dots - High Top',
    color: 'Offwhite',
    sku: 'AV00158',
    price: '750.000',
    image: 'https://ananas.vn/wp-content/uploads/pro_AV00158_1.jpg',
  },
  {
    name: 'Urbas SC - Low Top',
    color: 'Aloe Wash',
    sku: 'AV00187',
    price: '580.000',
    image: 'https://ananas.vn/wp-content/uploads/Pro_AV00187_1.jpg',
  },
  {
    name: 'Urbas Bloody - Low Top',
    color: 'Haute Red',
    sku: 'A61054',
    price: '580.000',
    image: 'https://ananas.vn/wp-content/uploads/pro_urbas_A61054_1.jpg',
  },
  {
    name: 'Urbas SC - Low Top',
    color: 'Foliage',
    sku: 'AV00184',
    price: '580.000',
    image: 'https://ananas.vn/wp-content/uploads/Pro_AV00184_1.jpg',
  },
  {
    name: 'Urbas SC - High Top',
    color: 'Fair Orchid',
    sku: 'AV00193',
    price: '650.000',
    image: 'https://ananas.vn/wp-content/uploads/Pro_AV00193_1.jpg',
  },
  {
    name: 'Basas Workaday - High Top',
    color: 'Real Teal',
    sku: 'AV00151',
    price: '650.000',
    image: 'https://ananas.vn/wp-content/uploads/Pro_AV00151_1.jpg',
  },
  {
    name: 'Basas Bumper Gum NE - Low Top',
    color: 'Offwhite/Gum',
    sku: 'AV00008',
    price: '520.000',
    image: 'https://ananas.vn/wp-content/uploads/Pro_AV00008_1.jpg',
  },
  {
    name: 'Urbas Ruler - Low Top',
    color: 'Silver Pink',
    sku: 'AV00126',
    price: '590.000',
    image: 'https://ananas.vn/wp-content/uploads/Pro_AV00126_1.jpg',
  },
  {
    name: 'Vintas Flannel - Low Top',
    color: 'Cement',
    sku: 'AV00117',
    price: '690.000',
    image: 'https://ananas.vn/wp-content/uploads/pro_AV00117_1.jpg',
  },
  {
    name: 'Track 6 2.Blues - Low Top',
    color: 'Navy Blue',
    sku: 'A6T014',
    image: 'https://ananas.vn/wp-content/uploads/Pro_A6T014_1.jpeg',
  },
  {
    name: 'Vintas Mister - Low Top',
    color: 'Narcissuede',
    sku: 'A61039',
    price: '580.000',
    image: 'https://ananas.vn/wp-content/uploads/pro_vintas_A61039_1.jpg',
  },
  {
    name: 'Urbas Irrelevant NE - Low Top',
    color: 'Storm/A.Gold',
    sku: 'AV00104',
    price: '650.000',
    image: 'https://ananas.vn/wp-content/uploads/pro_AV00104_1-1.jpg',
  },
  // {
  //   name: 'Urbas Retrospective - Low Top',
  //   color: 'Popular Blue',
  //   sku: 'AV00128',
  //   price: '650.000',
  //   image: 'https://ananas.vn/wp-content/uploads/Pro_AV00128_1.jpg',
  // },
  // {
  //   name: 'Urbas SC - Mule',
  //   color: 'Fair Orchid',
  //   sku: 'AV00199',
  //   price: '580.000',
  //   image: 'https://ananas.vn/wp-content/uploads/Pro_AV00199_1.jpg',
  // },
  // {
  //   name: 'Urbas SC - Low Top',
  //   color: 'Fair Orchid',
  //   sku: 'AV00190',
  //   price: '620.000',
  //   image: 'https://ananas.vn/wp-content/uploads/Pro_AV00190_1.jpg',
  // },
  // {
  //   name: 'Vintas Jazico - Low Top',
  //   color: 'Royal White',
  //   sku: 'AV00173',
  //   price: '720.000',
  //   image: 'https://ananas.vn/wp-content/uploads/Pro_AV00173_1.jpeg',
  // },
  // {
  //   name: 'Urbas SC - Mule',
  //   color: 'Aloe Wash',
  //   sku: 'AV00198',
  //   price: '580.000',
  //   image: 'https://ananas.vn/wp-content/uploads/Pro_AV00198_1.jpg',
  // },
  // {
  //   name: 'Track 6 Triple White - Low Top',
  //   color: 'White',
  //   sku: 'A6T002',
  //   price: '990.000',
  //   image: 'https://ananas.vn/wp-content/uploads/pro_track6_A6T002_1.jpg',
  // },
  // {
  //   name: 'Basas Bumper Gum NE - Mule',
  //   color: 'Offwhite/Gum',
  //   sku: 'AV00006',
  //   price: '520.000',
  //   image: 'https://ananas.vn/wp-content/uploads/Pro_AV00006_1.jpeg',
  // },
  // {
  //   name: 'Vintas Mister NE - High Top',
  //   color: 'Chocolate Brown',
  //   sku: 'AV00101',
  //   price: '650.000',
  //   image: 'https://ananas.vn/wp-content/uploads/pro_AV00101_1.jpg',
  // },
  // {
  //   name: 'Urbas Corluray Mix - Low Top',
  //   color: 'Corluray Mix',
  //   sku: 'AV00165',
  //   price: '610.000',
  //   image: 'https://ananas.vn/wp-content/uploads/Pro_AV00165_1.jpeg',
  // },
  // {
  //   name: 'Vintas Bleached Sand NE - Low Top',
  //   color: 'Beached Sand',
  //   sku: 'AV00025',
  //   price: '560.000',
  //   image: 'https://ananas.vn/wp-content/uploads/Pro_AV00025_1.jpg',
  // },
  // {
  //   name: 'Vintas Landforms - Low Top',
  //   color: 'Rain Drum',
  //   sku: 'AV00176',
  //   price: '720.000',
  //   image: 'https://ananas.vn/wp-content/uploads/Pro_AV00176_1.jpg',
  // },
  // {
  //   name: 'Track 6 Suede Moonphase - Low Top',
  //   color: 'Winterize',
  //   sku: 'A6T007',
  //   price: '990.000',
  //   image: 'https://ananas.vn/wp-content/uploads/pro_A6T007_1.jpg',
  // },
  // {
  //   name: 'Urbas Love+ 22 - High Top',
  //   color: 'Rustic',
  //   sku: 'ALP2022',
  //   price: '850.000',
  //   image: 'https://ananas.vn/wp-content/uploads/Lgbt1080-1.jpg',
  // },
  // {
  //   name: 'Track 6 Triple Black - Low Top',
  //   color: 'Black',
  //   sku: 'A6T003',
  //   price: '990.000',
  //   image: 'https://ananas.vn/wp-content/uploads/pro_track6_A6T003_1.jpg',
  // },
  // {
  //   name: 'Basas Evergreen - Low Top',
  //   color: 'Evergreen',
  //   sku: 'AV00142',
  //   price: '580.000',
  //   image: 'https://ananas.vn/wp-content/uploads/pro_AV00142_1.jpg',
  // },
  // {
  //   name: 'Pattas Polka Dots - Low Top',
  //   color: 'Black',
  //   sku: 'AV00157',
  //   price: '720.000',
  //   image: 'https://ananas.vn/wp-content/uploads/pro_AV00157_1.jpg',
  // },
  // {
  //   name: 'Urbas Ruler - Low Top',
  //   color: 'Icelandic Blue',
  //   sku: 'AV00125',
  //   price: '590.000',
  //   image: 'https://ananas.vn/wp-content/uploads/Pro_AV00125_1.jpg',
  // },
  // {
  //   name: 'Basas RAW - Low Top',
  //   color: 'Rustic',
  //   sku: 'AV00135',
  //   price: '610.000',
  //   image: 'https://ananas.vn/wp-content/uploads/pro_AV00135_1.jpg',
  // },
  // {
  //   name: 'Track 6 OG - Low Top',
  //   color: '70s White',
  //   sku: 'A6T001',
  //   price: '990.000',
  //   image: 'https://ananas.vn/wp-content/uploads/pro_track6_A6T001_1.jpg',
  // },
  // {
  //   name: 'Vintas Landforms - Low Top',
  //   color: 'Green Moss',
  //   sku: 'AV00177',
  //   price: '720.000',
  //   image: 'https://ananas.vn/wp-content/uploads/Pro_AV00177_1.jpg',
  // },
  // {
  //   name: 'Vintas Aunter - Low Top',
  //   color: 'Dusty Blue',
  //   sku: 'AV00123',
  //   price: '690.000',
  //   image: 'https://ananas.vn/wp-content/uploads/Pro_AV00123_1.jpg',
  // },
  // {
  //   name: 'Urbas SC - Mule',
  //   color: 'Dusty Blue',
  //   sku: 'AV00202',
  //   price: '620.000',
  //   image: 'https://ananas.vn/wp-content/uploads/Pro_AV00202_1.jpg',
  // },
  // {
  //   name: 'Basas Simple Life NE -  Mule',
  //   color: 'Black',
  //   sku: 'AV00003',
  //   price: '490.000',
  //   image: 'https://ananas.vn/wp-content/uploads/Pro_AV00003_1.jpeg',
  // },
  // {
  //   name: 'Urbas SC - Low Top',
  //   color: 'Dark Purple',
  //   sku: 'AV00183',
  //   price: '580.000',
  //   image: 'https://ananas.vn/wp-content/uploads/Pro_AV00183_1.jpg',
  // },
  // {
  //   name: 'Urbas Ruler - Low Top',
  //   color: 'Granite Green',
  //   sku: 'AV00124',
  //   price: '590.000',
  //   image: 'https://ananas.vn/wp-content/uploads/Pro_AV00124_1.jpg',
  // },
];
const productBonus = document.querySelector('.shop-centent_bonus');
const bonusRender = productRelated.map((item) => {
  return `
   <div class="bonus-warrap">
     <div class="shop-bonus_item">
      <div class="shop-bonus_img">
        <a href=""><img src=${item.image} alt="error"></a>
      </div>
      <div class="shop-bonus_content">
        <div class="flex-derection">
          <a href="" class="shop-bonus_name">${item.name}</a>
          <span class="shop-bonus_note">${item.color}</span>
          <span class="shop-bonus_price">${item.price}</span>
        </div>
        <button type="submit">THÊM</button>
      </div>
    </div>
   </div>
  `;
});
productBonus.innerHTML = bonusRender.join('');
// product-list
const shopContent = document.querySelector('.shop-content_list');
const renderShop = filterShop.map((item, index) => {
  return `
        <div class="shop-item">
          <div class="shop-item_flex">
               <div class="shop-item_img">
                <img src=${item.img} alt="">
            </div>
            <div class="shop-item_wrapper">
             <div class="flex-derection">
               <h3 class="shop-item_name">${item.name} - ${item.note}</h3>
              <span class="shop-item_price">Giá: ${item.price}</span>
             </div>
              <div class="shop-item_group">
                <div class="shop-item_size">
                  <span>Size</span>
                  <div class="shop-item_btn">
                    <span>43</span>
                    <img src="../logo/down-arrow.svg" alt="">
                  </div>
                </div>
                <div class="shop-item_size">
                  <span>Số lượng</span>
                  <div class="shop-item_btn">
                    <span>1</span>
                    <img src="../logo/down-arrow.svg" alt="">
                  </div>
                </div>
              </div>
            </div>
          </div>
            <div class="shop-item_buy">
              <div class="flex">
                <h3 class="total">${item.price}</h3>
                <span>Còn hàng</span>
              </div>
              <div class="shop-item_detail">
                <button type="submit"><img src=${item.iconLove} alt=""></button>
                <button type="submit"><img src="../logo/icon-delete.svg" alt=""></button>
              </div>
            </div>
        </div>
        <div class="bg-divider"></div>
    `;
});

shopContent.innerHTML = renderShop.join('');
const iconLove = document.querySelectorAll(
  '.shop-item_detail > button:first-child > img'
);
const iconBtn = document.querySelectorAll(
  '.shop-item_detail > button:first-child'
);
let isLove = true;
iconBtn.forEach((item, index) => {
  item.addEventListener('click', (e) => {
    if (isLove) {
      iconLove[index].setAttribute(
        'src',
        'https://ananas.vn/wp-content/themes/ananas/fe-assets/images/svg/Heart_product_2.svg'
      );
      isLove = false;
    } else {
      iconLove[index].setAttribute(
        'src',
        'https://ananas.vn/wp-content/themes/ananas/fe-assets/images/svg/Heart_product_1.svg'
      );
      isLove = true;
    }
  });
});

// Xóa Item
const closeBtn = document.querySelectorAll(
  '.shop-item_detail > button:last-child'
);
const bg_diveder = document.querySelectorAll('.bg-divider');
const shopItem = document.querySelectorAll('.shop-item');
closeBtn.forEach((item, index) => {
  item.addEventListener('click', (e) => {
    shopItem[index].remove();
    bg_diveder[index].remove();
  });
});

// Xóa All
const closeAll = document.querySelector('.shop-footer > button:first-child');
closeAll.addEventListener('click', () => {
  shopItem.forEach((item) => item.remove());
  bg_diveder.forEach((item) => item.remove());
  localStorage.clear();
});

// total đơn hàng
const obj = [];
const total = document.querySelectorAll('.total');
total.forEach((item) => {
  let element = item.textContent;
  // parseFloat() để chuyển đổi giá trị sang kiểu số,
  const result = parseFloat(
    element.replace(/\./g, '').slice(0, element.length - 5)
    // replace(/\./g, '') => bỏ đi dấu chấm bằng biểu thức chính quy .replace(/\./g, '')
  );
  // Khi giá trị không phải là một số hợp lệ (NaN), isNaN() sẽ trả về true, và do đó, điều kiện !isNaN(result) sẽ trả về false.
  if (!isNaN(result)) {
    obj.push(result);
  } else {
    [];
  }
});
console.log(obj);
// tinh tổng giá tiền
const finaTotal = obj.reduce((value, item) => {
  return (value += item);
}, 0);

const price = document.querySelector('.shop-info_total');
const priceEnd = document.querySelector('.shop-info_relust');
const formatNumber = finaTotal.toLocaleString('vi-VN');
// convert số theo kiêu tiền tệ việt nam 100.000.000
price.textContent = formatNumber;
priceEnd.textContent = formatNumber;
