const urlParams = new URLSearchParams(window.location.search); // lấy thông tin tử URL(data-product-id)
const productId = urlParams.get('productId'); // get lấy đến id của data-product-id

const searchParams = new URLSearchParams(window.location.search);
const searchId = urlParams.get('searchId');
const productList = [
  {
    id: null,
    img: 'https://ananas.vn/wp-content/uploads/Pro_A6T014_3.jpeg',
    zoom: 'https://ananas.vn/wp-content/themes/ananas/fe-assets/images/svg/icon_zoom.svg',
    img_2: 'https://ananas.vn/wp-content/uploads/Pro_A6T014_2-500x500.jpeg',
    img_3: 'https://ananas.vn/wp-content/uploads/Pro_A6T014_4.jpeg',
    img_4: 'https://ananas.vn/wp-content/uploads/Pro_A6T014_3.jpeg',
    img_5: 'https://ananas.vn/wp-content/uploads/Pro_A6T014_5.jpeg',
    img_6: 'https://ananas.vn/wp-content/uploads/Pro_A6T014_6.jpeg',
    img_7: 'https://ananas.vn/wp-content/uploads/Untitled-Session214230.jpeg',
    iconLove:
      '	https://ananas.vn/wp-content/themes/ananas/fe-assets/images/svg/Heart_product_1.svg',
    iconLove_hover:
      'https://ananas.vn/wp-content/themes/ananas/fe-assets/images/svg/Heart_product_2.svg',
    error: 'anh loi',
    title: 'New Arrival',
    name: 'Track 6 2.Blues - Low Top',
    note: 'Navy Blue',
    code: 'A6T',
    price: '1.190.000 VND',
  },
  {
    id: null,
    img: '	https://ananas.vn/wp-content/uploads/Pro_A6T015_1.jpeg',
    zoom: 'https://ananas.vn/wp-content/themes/ananas/fe-assets/images/svg/icon_zoom.svg',
    img_2: 'https://ananas.vn/wp-content/uploads/Pro_A6T015_2.jpeg',
    img_3: 'https://ananas.vn/wp-content/uploads/Pro_A6T015_3.jpeg',
    img_4: 'https://ananas.vn/wp-content/uploads/Pro_A6T015_5.jpeg',
    img_5: 'https://ananas.vn/wp-content/uploads/Pro_A6T015_4.jpeg',
    img_6: 'https://ananas.vn/wp-content/uploads/Pro_A6T015_6.jpeg',
    img_7: 'https://ananas.vn/wp-content/uploads/Pro_A6T015_2.jpeg',
    iconLove:
      '	https://ananas.vn/wp-content/themes/ananas/fe-assets/images/svg/Heart_product_1.svg',
    iconLove_hover:
      'https://ananas.vn/wp-content/themes/ananas/fe-assets/images/svg/Heart_product_2.svg',
    error: 'anh loi',
    title: 'New Arrival',
    name: 'Track 6 2.Blues - Low Top',
    note: 'Bluewash',
    code: 'A6T',
    price: '1.290.000 VND',
  },
  {
    id: null,
    img: 'https://ananas.vn/wp-content/uploads/Pro_AHCS002_1.jpeg',
    zoom: 'https://ananas.vn/wp-content/themes/ananas/fe-assets/images/svg/icon_zoom.svg',
    img_2: 'https://ananas.vn/wp-content/uploads/Pro_AHCS002_2.jpg',
    img_3: 'https://ananas.vn/wp-content/uploads/Pro_AHCS002_3.jpg',
    img_4: 'https://ananas.vn/wp-content/uploads/Pro_AHCS002_2.jpg',
    img_5: 'https://ananas.vn/wp-content/uploads/Pro_AHCS002_3.jpg',
    img_6: 'https://ananas.vn/wp-content/uploads/Pro_AHCS002_3.jpg',
    img_7: 'https://ananas.vn/wp-content/uploads/Pro_AHCS002_2.jpg',
    error: 'anh loi',
    iconLove:
      '	https://ananas.vn/wp-content/themes/ananas/fe-assets/images/svg/Heart_product_1.svg',
    iconLove_hover:
      'https://ananas.vn/wp-content/themes/ananas/fe-assets/images/svg/Heart_product_2.svg',
    title: 'New Arrival',
    name: 'High Crew Socks - Ananas Puppet Club',
    note: 'Tie Dye',
    code: 'AHCS',
    price: '119.000 VND',
  },
  {
    id: null,
    img: 'https://ananas.vn/wp-content/uploads/Pro_AHCS003_1.jpeg',
    zoom: 'https://ananas.vn/wp-content/themes/ananas/fe-assets/images/svg/icon_zoom.svg',
    img_2: 'https://ananas.vn/wp-content/uploads/Pro_AHCS003_2.jpg',
    img_3: 'https://ananas.vn/wp-content/uploads/Pro_AHCS003_3.jpg',
    img_4: 'https://ananas.vn/wp-content/uploads/Pro_AHCS003_2.jpg',
    img_5: 'https://ananas.vn/wp-content/uploads/Pro_AHCS003_3.jpg',
    img_6: 'https://ananas.vn/wp-content/uploads/Pro_AHCS003_1.jpeg',
    img_7: 'https://ananas.vn/wp-content/uploads/Pro_AHCS003_2.jpg',
    error: 'anh loi',
    iconLove:
      '	https://ananas.vn/wp-content/themes/ananas/fe-assets/images/svg/Heart_product_1.svg',
    iconLove_hover:
      'https://ananas.vn/wp-content/themes/ananas/fe-assets/images/svg/Heart_product_2.svg',
    title: 'New Arrival',
    name: 'High Crew Socks - Ananas Puppet Club',
    note: 'Tie Dye',
    code: 'AHCS',
    price: '119.000 VND',
  },
  {
    id: null,
    img: '	https://ananas.vn/wp-content/uploads/Pro_AHCS004_1.jpeg',
    zoom: 'https://ananas.vn/wp-content/themes/ananas/fe-assets/images/svg/icon_zoom.svg',
    img_2: 'https://ananas.vn/wp-content/uploads/Pro_AHCS004_2.jpg',
    img_3: 'https://ananas.vn/wp-content/uploads/Pro_AHCS004_3.jpg',
    img_4: 'https://ananas.vn/wp-content/uploads/Pro_AHCS004_2.jpg',
    img_5: 'https://ananas.vn/wp-content/uploads/Pro_AHCS004_3.jpg',
    img_6: 'https://ananas.vn/wp-content/uploads/Pro_AHCS004_1.jpeg',
    img_7: 'https://ananas.vn/wp-content/uploads/Pro_AHCS004_2.jpg',
    error: 'anh loi',
    iconLove:
      '	https://ananas.vn/wp-content/themes/ananas/fe-assets/images/svg/Heart_product_1.svg',
    iconLove_hover:
      'https://ananas.vn/wp-content/themes/ananas/fe-assets/images/svg/Heart_product_2.svg',
    title: 'New Arrival',
    name: 'High Crew Socks - Ananas Puppet Club',
    note: 'Tie Dye',
    code: 'AHCS',
    price: '119.000 VND',
  },
  {
    id: null,
    img: 'https://ananas.vn/wp-content/uploads/Pro_AV00167_1.jpeg',
    zoom: 'https://ananas.vn/wp-content/themes/ananas/fe-assets/images/svg/icon_zoom.svg',
    img_2: 'https://ananas.vn/wp-content/uploads/Pro_AV00167_2.jpeg',
    img_3: 'https://ananas.vn/wp-content/uploads/Pro_AV00167_3.jpeg',
    img_4: 'https://ananas.vn/wp-content/uploads/Pro_AV00167_4.jpeg',
    img_5: 'https://ananas.vn/wp-content/uploads/Pro_AV00167_5.jpeg',
    img_6: 'https://ananas.vn/wp-content/uploads/Pro_AV00167_6.jpeg',
    img_7: 'https://ananas.vn/wp-content/uploads/Pro_AV00167_7.jpeg',
    error: 'anh loi',
    iconLove:
      '	https://ananas.vn/wp-content/themes/ananas/fe-assets/images/svg/Heart_product_1.svg',
    iconLove_hover:
      'https://ananas.vn/wp-content/themes/ananas/fe-assets/images/svg/Heart_product_2.svg',
    title: 'New Arrival',
    name: 'Urbas Corluray Mix - High Top',
    note: 'Corluray Mix',
    code: 'AV00',
    price: '650.000 VND',
  },
  {
    id: null,
    img: 'https://ananas.vn/wp-content/uploads/Pro_AV00165_1.jpeg',
    zoom: 'https://ananas.vn/wp-content/themes/ananas/fe-assets/images/svg/icon_zoom.svg',
    img_2: 'https://ananas.vn/wp-content/uploads/Pro_AV00165_2.jpeg',
    img_3: 'https://ananas.vn/wp-content/uploads/Pro_AV00165_3.jpeg',
    img_4: 'https://ananas.vn/wp-content/uploads/Pro_AV00165_4.jpeg',
    img_5: 'https://ananas.vn/wp-content/uploads/Pro_AV00165_5.jpeg',
    img_6: 'https://ananas.vn/wp-content/uploads/Pro_AV00165_6.jpeg',
    img_7: 'https://ananas.vn/wp-content/uploads/Pro_AV00165_7.jpeg',
    error: 'anh loi',
    iconLove:
      '	https://ananas.vn/wp-content/themes/ananas/fe-assets/images/svg/Heart_product_1.svg',
    iconLove_hover:
      'https://ananas.vn/wp-content/themes/ananas/fe-assets/images/svg/Heart_product_2.svg',
    title: 'New Arrival',
    name: 'Track 6 2.Blues - Low Top',
    note: 'Navy Blue',
    price: '1.190.000 VND',
    code: 'AV00',
  },
  {
    id: null,
    img: 'https://ananas.vn/wp-content/uploads/Pro_AV00174_1.jpeg',
    zoom: 'https://ananas.vn/wp-content/themes/ananas/fe-assets/images/svg/icon_zoom.svg',
    img_2: 'https://ananas.vn/wp-content/uploads/Pro_AV00174_2.jpeg',
    img_3: 'https://ananas.vn/wp-content/uploads/Pro_AV00174_3.jpeg',
    img_4: 'https://ananas.vn/wp-content/uploads/Pro_AV00174_4.jpeg',
    img_5: 'https://ananas.vn/wp-content/uploads/Pro_AV00174_5.jpeg',
    img_6: 'https://ananas.vn/wp-content/uploads/Pro_AV00174_6.jpeg',
    img_7: 'https://ananas.vn/wp-content/uploads/Pro_AV00174_7.jpeg',
    error: 'anh loi',
    iconLove:
      '	https://ananas.vn/wp-content/themes/ananas/fe-assets/images/svg/Heart_product_1.svg',
    iconLove_hover:
      'https://ananas.vn/wp-content/themes/ananas/fe-assets/images/svg/Heart_product_2.svg',
    title: 'New Arrival',
    name: 'Urbas Corluray Mix - Low Top',
    note: 'Corluray Mix',
    price: '610.000 VND',
    code: 'AV00',
  },
  {
    id: null,
    img: 'https://ananas.vn/wp-content/uploads/Pro_AV00173_1.jpeg',
    zoom: 'https://ananas.vn/wp-content/themes/ananas/fe-assets/images/svg/icon_zoom.svg',
    img_2: 'https://ananas.vn/wp-content/uploads/Pro_AV00173_2.jpeg',
    img_3: 'https://ananas.vn/wp-content/uploads/Pro_AV00173_3.jpeg',
    img_4: 'https://ananas.vn/wp-content/uploads/Pro_AV00173_4.jpeg',
    img_5: 'https://ananas.vn/wp-content/uploads/Pro_AV00173_5.jpeg',
    img_6: 'https://ananas.vn/wp-content/uploads/Pro_AV00173_6.jpeg',
    img_7: 'https://ananas.vn/wp-content/uploads/Pro_AV00173_7.jpeg',
    error: 'anh loi',
    iconLove:
      '	https://ananas.vn/wp-content/themes/ananas/fe-assets/images/svg/Heart_product_1.svg',
    iconLove_hover:
      'https://ananas.vn/wp-content/themes/ananas/fe-assets/images/svg/Heart_product_2.svg',
    title: 'New Arrival',
    name: 'Vintas Jazico - Low Top',
    note: 'Royal White',
    price: '720.000 VND',
    code: 'AV00',
  },
  {
    id: null,
    img: 'https://ananas.vn/wp-content/uploads/Pro_A6T016_1.jpeg',
    zoom: 'https://ananas.vn/wp-content/themes/ananas/fe-assets/images/svg/icon_zoom.svg',
    img_2: 'https://ananas.vn/wp-content/uploads/Pro_A6T016_2.jpeg',
    img_3: 'https://ananas.vn/wp-content/uploads/Pro_A6T016_3.jpeg',
    img_4: 'https://ananas.vn/wp-content/uploads/Pro_A6T016_4.jpeg',
    img_5: 'https://ananas.vn/wp-content/uploads/Pro_A6T016_5.jpeg',
    img_6: 'https://ananas.vn/wp-content/uploads/Pro_A6T016_6.jpeg',
    img_7: 'https://ananas.vn/wp-content/uploads/Pro_A6T016_7.jpeg',
    error: 'anh loi',
    iconLove:
      '	https://ananas.vn/wp-content/themes/ananas/fe-assets/images/svg/Heart_product_1.svg',
    iconLove_hover:
      'https://ananas.vn/wp-content/themes/ananas/fe-assets/images/svg/Heart_product_2.svg',
    title: 'New Arrival',
    name: 'Track 6 2.Blues - Low Top',
    note: 'Royal White',
    price: '1.190.000 VND',
    code: 'AV00',
  },
  {
    id: null,
    img: 'https://ananas.vn/wp-content/uploads/Pro_A6T012_1.jpg',
    zoom: 'https://ananas.vn/wp-content/themes/ananas/fe-assets/images/svg/icon_zoom.svg',
    img_2: 'https://ananas.vn/wp-content/uploads/Pro_A6T012_2.jpg',
    img_3: 'https://ananas.vn/wp-content/uploads/Pro_A6T012_3.jpg',
    img_4: 'https://ananas.vn/wp-content/uploads/Pro_A6T012_4.jpg',
    img_5: 'https://ananas.vn/wp-content/uploads/Pro_A6T012_5.jpg',
    img_6: 'https://ananas.vn/wp-content/uploads/Pro_A6T012_6.jpg',
    img_7: 'https://ananas.vn/wp-content/uploads/Pro_A6T012_7.jpg',
    error: 'anh loi',
    iconLove:
      '	https://ananas.vn/wp-content/themes/ananas/fe-assets/images/svg/Heart_product_1.svg',
    iconLove_hover:
      'https://ananas.vn/wp-content/themes/ananas/fe-assets/images/svg/Heart_product_2.svg',
    title: 'New Arrival',
    name: 'Track 6 I.S.E.E',
    note: 'Pure White/Icy Blue',
    price: '1.490.000 VND',
    code: 'AV00',
  },
  {
    id: null,
    img: 'https://ananas.vn/wp-content/uploads/Pro_AV00154_1.jpg',
    zoom: 'https://ananas.vn/wp-content/themes/ananas/fe-assets/images/svg/icon_zoom.svg',
    img_2: 'https://ananas.vn/wp-content/uploads/Pro_AV00154_2.jpg',
    img_3: 'https://ananas.vn/wp-content/uploads/Pro_AV00154_3.jpg',
    img_4: 'https://ananas.vn/wp-content/uploads/Pro_AV00154_4.jpg',
    img_5: 'https://ananas.vn/wp-content/uploads/Pro_AV00154_5.jpg',
    img_6: 'https://ananas.vn/wp-content/uploads/Pro_AV00154_6.jpg',
    img_7: 'https://ananas.vn/wp-content/uploads/Pro_AV00154_7.jpg',
    error: 'anh loi',
    iconLove:
      'https://ananas.vn/wp-content/themes/ananas/fe-assets/images/svg/Heart_product_1.svg',
    iconLove_hover:
      'https://ananas.vn/wp-content/themes/ananas/fe-assets/images/svg/Heart_product_2.svg',
    title: 'New Arrival',
    name: 'Vintas Soda Pop - Low Top',
    note: 'Amparo Blue',
    price: '680.000 VND',
    code: 'AV00',
  },
  {
    id: null,
    img: 'https://ananas.vn/wp-content/uploads/Pro_AV00153_1.jpg',
    zoom: 'https://ananas.vn/wp-content/themes/ananas/fe-assets/images/svg/icon_zoom.svg',
    img_2: 'https://ananas.vn/wp-content/uploads/Pro_AV00153_2.jpg',
    img_3: 'https://ananas.vn/wp-content/uploads/Pro_AV00153_3.jpg',
    img_4: 'https://ananas.vn/wp-content/uploads/Pro_AV00153_4.jpg',
    img_5: 'https://ananas.vn/wp-content/uploads/Pro_AV00153_5.jpg',
    img_6: 'https://ananas.vn/wp-content/uploads/Pro_AV00153_6.jpg',
    img_7: 'https://ananas.vn/wp-content/uploads/Pro_AV00153_7.jpg',
    error: 'anh loi',
    iconLove:
      'https://ananas.vn/wp-content/themes/ananas/fe-assets/images/svg/Heart_product_1.svg',
    iconLove_hover:
      'https://ananas.vn/wp-content/themes/ananas/fe-assets/images/svg/Heart_product_2.svg',
    title: 'New Arrival',
    name: 'Vintas Soda Pop - Low Top',
    note: 'Emerald',
    price: '680.000 VND',
    code: 'AV00',
  },
  {
    id: null,
    img: 'https://ananas.vn/wp-content/uploads/Pro_AV00155_1.jpg',
    zoom: 'https://ananas.vn/wp-content/themes/ananas/fe-assets/images/svg/icon_zoom.svg',
    img_2: 'https://ananas.vn/wp-content/uploads/Pro_AV00155_2.jpg',
    img_3: 'https://ananas.vn/wp-content/uploads/Pro_AV00155_3.jpg',
    img_4: 'https://ananas.vn/wp-content/uploads/Pro_AV00155_4.jpg',
    img_5: 'https://ananas.vn/wp-content/uploads/Pro_AV00155_5.jpg',
    img_6: 'https://ananas.vn/wp-content/uploads/Pro_AV00155_6.jpg',
    img_7: 'https://ananas.vn/wp-content/uploads/Pro_AV00155_7.jpg',
    error: 'anh loi',
    iconLove:
      'https://ananas.vn/wp-content/themes/ananas/fe-assets/images/svg/Heart_product_1.svg',
    iconLove_hover:
      'https://ananas.vn/wp-content/themes/ananas/fe-assets/images/svg/Heart_product_2.svg',
    title: 'New Arrival',
    name: 'Vintas Soda Pop - Low Top',
    note: 'Red Violet',
    price: '720.000 VND',
    code: 'AV00',
  },
  {
    id: null,
    img: 'https://ananas.vn/wp-content/uploads/Lgbt8302-1.jpg',
    zoom: 'https://ananas.vn/wp-content/themes/ananas/fe-assets/images/svg/icon_zoom.svg',
    img_2: 'https://ananas.vn/wp-content/uploads/Lgbt3138-1.jpg',
    img_3: 'https://ananas.vn/wp-content/uploads/Lgbt2107-1.jpg',
    img_4: 'https://ananas.vn/wp-content/uploads/Lgbt3139-1.jpg',
    img_5: 'https://ananas.vn/wp-content/uploads/Lgbt2107-1.jpg',
    img_6: 'https://ananas.vn/wp-content/uploads/Lgbt2107-1.jpg',
    img_7: 'https://ananas.vn/wp-content/uploads/Lgbt3138-1.jpg',
    error: 'anh loi',
    iconLove:
      'https://ananas.vn/wp-content/themes/ananas/fe-assets/images/svg/Heart_product_1.svg',
    iconLove_hover:
      'https://ananas.vn/wp-content/themes/ananas/fe-assets/images/svg/Heart_product_2.svg',
    title: 'New Arrival',
    name: 'Urbas Love+ 22 - High Top',
    note: 'Rustic',
    price: '850.000 VND',
    code: 'AV00',
  },
  {
    id: null,
    img: 'https://ananas.vn/wp-content/uploads/Pro_AV00176_1.jpg',
    zoom: 'https://ananas.vn/wp-content/themes/ananas/fe-assets/images/svg/icon_zoom.svg',
    img_2: 'https://ananas.vn/wp-content/uploads/Pro_AV00176_2.jpg',
    img_3: 'https://ananas.vn/wp-content/uploads/Pro_AV00176_3.jpg',
    img_4: 'https://ananas.vn/wp-content/uploads/Pro_AV00176_4.jpg',
    img_5: 'https://ananas.vn/wp-content/uploads/Pro_AV00176_5.jpg',
    img_6: 'https://ananas.vn/wp-content/uploads/Pro_AV00176_6.jpg',
    img_7: 'https://ananas.vn/wp-content/uploads/Pro_AV00176_7.jpg',
    error: 'anh loi',
    iconLove:
      'https://ananas.vn/wp-content/themes/ananas/fe-assets/images/svg/Heart_product_1.svg',
    iconLove_hover:
      'https://ananas.vn/wp-content/themes/ananas/fe-assets/images/svg/Heart_product_2.svg',
    title: 'New Arrival',
    name: 'Vintas Soda Pop - Low Top',
    note: 'Rain Drum',
    price: '720.000 VND',
    code: 'AV00',
  },
  {
    id: null,
    img: 'https://ananas.vn/wp-content/uploads/Pro_AV00177_1.jpg',
    zoom: 'https://ananas.vn/wp-content/themes/ananas/fe-assets/images/svg/icon_zoom.svg',
    img_2: 'https://ananas.vn/wp-content/uploads/Pro_AV00177_2.jpg',
    img_3: 'https://ananas.vn/wp-content/uploads/Pro_AV00177_3.jpg',
    img_4: 'https://ananas.vn/wp-content/uploads/Pro_AV00177_4.jpg',
    img_5: 'https://ananas.vn/wp-content/uploads/Pro_AV00177_5.jpg',
    img_6: 'https://ananas.vn/wp-content/uploads/Pro_AV00177_6.jpg',
    img_7: 'https://ananas.vn/wp-content/uploads/Pro_AV00177_7.jpg',
    error: 'anh loi',
    iconLove:
      'https://ananas.vn/wp-content/themes/ananas/fe-assets/images/svg/Heart_product_1.svg',
    iconLove_hover:
      'https://ananas.vn/wp-content/themes/ananas/fe-assets/images/svg/Heart_product_2.svg',
    title: 'New Arrival',
    name: 'Vintas Soda Pop - Low Top',
    note: 'Green Moss',
    price: '720.000 VND',
    code: 'AV00',
  },
  {
    id: null,
    img: ' https://ananas.vn/wp-content/uploads/Pro_AV00175_1.jpg',
    zoom: 'https://ananas.vn/wp-content/themes/ananas/fe-assets/images/svg/icon_zoom.svg',
    img_2: 'https://ananas.vn/wp-content/uploads/Pro_AV00175_2.jpg',
    img_3: 'https://ananas.vn/wp-content/uploads/Pro_AV00175_3.jpg',
    img_4: 'https://ananas.vn/wp-content/uploads/Pro_AV00175_4.jpg',
    img_5: 'https://ananas.vn/wp-content/uploads/Pro_AV00175_5.jpg',
    img_6: 'https://ananas.vn/wp-content/uploads/Pro_AV00175_6.jpg',
    img_7: 'https://ananas.vn/wp-content/uploads/Pro_AV00175_7.jpg',
    error: 'anh loi',
    iconLove:
      'https://ananas.vn/wp-content/themes/ananas/fe-assets/images/svg/Heart_product_1.svg',
    iconLove_hover:
      'https://ananas.vn/wp-content/themes/ananas/fe-assets/images/svg/Heart_product_2.svg',
    title: 'New Arrival',
    name: 'Vintas Soda Pop - Low Top',
    note: 'Marmalade',
    price: '720.000 VND',
    code: 'AV00',
  },
  {
    id: null,
    img: ' https://ananas.vn/wp-content/uploads/Pro_AV00202_1.jpg',
    zoom: 'https://ananas.vn/wp-content/themes/ananas/fe-assets/images/svg/icon_zoom.svg',
    img_2: 'https://ananas.vn/wp-content/uploads/Pro_AV00202_2.jpg',
    img_3: 'https://ananas.vn/wp-content/uploads/Pro_AV00202_3.jpg',
    img_4: 'https://ananas.vn/wp-content/uploads/Pro_AV00202_4.jpg',
    img_5: 'https://ananas.vn/wp-content/uploads/Pro_AV00202_5.jpg',
    img_6: 'https://ananas.vn/wp-content/uploads/Pro_AV00202_1.jpg',
    img_7: 'https://ananas.vn/wp-content/uploads/Pro_AV00202_2.jpg',
    error: 'anh loi',
    iconLove:
      'https://ananas.vn/wp-content/themes/ananas/fe-assets/images/svg/Heart_product_1.svg',
    iconLove_hover:
      'https://ananas.vn/wp-content/themes/ananas/fe-assets/images/svg/Heart_product_2.svg',
    title: 'New Arrival',
    name: 'Urbas SC - Mule',
    note: 'Dusty Blue',
    price: '620.000 VND',
    code: 'AV00',
  },
  {
    id: null,
    img: ' https://ananas.vn/wp-content/uploads/Pro_AV00201_1.jpg',
    zoom: 'https://ananas.vn/wp-content/themes/ananas/fe-assets/images/svg/icon_zoom.svg',
    img_2: 'https://ananas.vn/wp-content/uploads/Pro_AV00201_2.jpg',
    img_3: 'https://ananas.vn/wp-content/uploads/Pro_AV00201_3.jpg',
    img_4: 'https://ananas.vn/wp-content/uploads/Pro_AV00201_4.jpg',
    img_5: 'https://ananas.vn/wp-content/uploads/Pro_AV00201_5.jpg',
    img_6: 'https://ananas.vn/wp-content/uploads/Pro_AV00201_1.jpg',
    img_7: 'https://ananas.vn/wp-content/uploads/Pro_AV00201_2.jpg',
    error: 'anh loi',
    iconLove:
      'https://ananas.vn/wp-content/themes/ananas/fe-assets/images/svg/Heart_product_1.svg',
    iconLove_hover:
      'https://ananas.vn/wp-content/themes/ananas/fe-assets/images/svg/Heart_product_2.svg',
    title: 'New Arrival',
    name: 'Urbas SC - Mule',
    note: 'Foliage',
    price: '580.000 VND',
    code: 'AV00',
  },
  {
    id: null,
    img: ' https://ananas.vn/wp-content/uploads/Pro_AV00198_1.jpg',
    zoom: 'https://ananas.vn/wp-content/themes/ananas/fe-assets/images/svg/icon_zoom.svg',
    img_2: 'https://ananas.vn/wp-content/uploads/Pro_AV00198_2.jpg',
    img_3: 'https://ananas.vn/wp-content/uploads/Pro_AV00198_3.jpg',
    img_4: 'https://ananas.vn/wp-content/uploads/Pro_AV00198_4.jpg',
    img_5: 'https://ananas.vn/wp-content/uploads/Pro_AV00198_5.jpg',
    img_6: 'https://ananas.vn/wp-content/uploads/Pro_AV00198_1.jpg',
    img_7: 'https://ananas.vn/wp-content/uploads/Pro_AV00198_2.jpg',
    error: 'anh loi',
    iconLove:
      'https://ananas.vn/wp-content/themes/ananas/fe-assets/images/svg/Heart_product_1.svg',
    iconLove_hover:
      'https://ananas.vn/wp-content/themes/ananas/fe-assets/images/svg/Heart_product_2.svg',
    title: 'New Arrival',
    name: 'Urbas SC - Mule',
    note: 'Aloe Wash',
    price: '580.000 VND',
    code: 'AV00',
  },
  {
    id: null,
    img: ' https://ananas.vn/wp-content/uploads/Pro_AV00196_1.jpg',
    zoom: 'https://ananas.vn/wp-content/themes/ananas/fe-assets/images/svg/icon_zoom.svg',
    img_2: 'https://ananas.vn/wp-content/uploads/Pro_AV00196_2.jpg',
    img_3: 'https://ananas.vn/wp-content/uploads/Pro_AV00196_3.jpg',
    img_4: 'https://ananas.vn/wp-content/uploads/Pro_AV00196_4.jpg',
    img_5: 'https://ananas.vn/wp-content/uploads/Pro_AV00196_5.jpg',
    img_6: 'https://ananas.vn/wp-content/uploads/Pro_AV00196_2.jpg',
    img_7: 'https://ananas.vn/wp-content/uploads/Pro_AV00196_4.jpg',
    error: 'anh loi',
    iconLove:
      'https://ananas.vn/wp-content/themes/ananas/fe-assets/images/svg/Heart_product_1.svg',
    iconLove_hover:
      'https://ananas.vn/wp-content/themes/ananas/fe-assets/images/svg/Heart_product_2.svg',
    title: 'New Arrival',
    name: 'Urbas SC - Mule',
    note: 'Dusty Blue',
    price: '580.000 VND',
    code: 'AV00',
  },
  {
    id: null,
    img: ' https://ananas.vn/wp-content/uploads/Pro_AV00199_1.jpg',
    zoom: 'https://ananas.vn/wp-content/themes/ananas/fe-assets/images/svg/icon_zoom.svg',
    img_2: 'https://ananas.vn/wp-content/uploads/Pro_AV00199_2.jpg',
    img_3: 'https://ananas.vn/wp-content/uploads/Pro_AV00199_3.jpg',
    img_4: 'https://ananas.vn/wp-content/uploads/Pro_AV00199_4.jpg',
    img_5: 'https://ananas.vn/wp-content/uploads/Pro_AV00199_5.jpg',
    img_6: 'https://ananas.vn/wp-content/uploads/Pro_AV00199_2.jpg',
    img_7: 'https://ananas.vn/wp-content/uploads/Pro_AV00199_1.jpg',
    error: 'anh loi',
    iconLove:
      'https://ananas.vn/wp-content/themes/ananas/fe-assets/images/svg/Heart_product_1.svg',
    iconLove_hover:
      'https://ananas.vn/wp-content/themes/ananas/fe-assets/images/svg/Heart_product_2.svg',
    title: 'New Arrival',
    name: 'Urbas SC - Mule',
    note: 'Fair Orchid',
    price: '580.000 VND',
    code: 'AV00',
  },
  {
    id: null,
    img: ' https://ananas.vn/wp-content/uploads/Pro_AV00200_1.jpg',
    zoom: 'https://ananas.vn/wp-content/themes/ananas/fe-assets/images/svg/icon_zoom.svg',
    img_2: 'https://ananas.vn/wp-content/uploads/Pro_AV00200_2.jpg',
    img_3: 'https://ananas.vn/wp-content/uploads/Pro_AV00200_3.jpg',
    img_4: 'https://ananas.vn/wp-content/uploads/Pro_AV00200_4.jpg',
    img_5: 'https://ananas.vn/wp-content/uploads/Pro_AV00200_5.jpg',
    img_6: 'https://ananas.vn/wp-content/uploads/Pro_AV00200_2.jpg',
    img_7: 'https://ananas.vn/wp-content/uploads/Pro_AV00200_1.jpg',
    error: 'anh loi',
    iconLove:
      'https://ananas.vn/wp-content/themes/ananas/fe-assets/images/svg/Heart_product_1.svg',
    iconLove_hover:
      'https://ananas.vn/wp-content/themes/ananas/fe-assets/images/svg/Heart_product_2.svg',
    title: 'New Arrival',
    name: 'Urbas SC - Mule',
    note: 'Cornsilk',
    price: '580.000 VND',
    code: 'AV00',
  },
  {
    id: null,
    img: ' 	https://ananas.vn/wp-content/uploads/Pro_AV00197_1.jpg',
    zoom: 'https://ananas.vn/wp-content/themes/ananas/fe-assets/images/svg/icon_zoom.svg',
    img_2: 'https://ananas.vn/wp-content/uploads/Pro_AV00197_2.jpg',
    img_3: 'https://ananas.vn/wp-content/uploads/Pro_AV00197_3.jpg',
    img_4: 'https://ananas.vn/wp-content/uploads/Pro_AV00197_4.jpg',
    img_5: 'https://ananas.vn/wp-content/uploads/Pro_AV00197_5.jpg',
    img_6: 'https://ananas.vn/wp-content/uploads/Pro_AV00197_2.jpg',
    img_7: 'https://ananas.vn/wp-content/uploads/Pro_AV00197_1.jpg',
    error: 'anh loi',
    iconLove:
      'https://ananas.vn/wp-content/themes/ananas/fe-assets/images/svg/Heart_product_1.svg',
    iconLove_hover:
      'https://ananas.vn/wp-content/themes/ananas/fe-assets/images/svg/Heart_product_2.svg',
    title: 'New Arrival',
    name: 'Urbas SC - Mule',
    note: 'Dark Purple',
    price: '580.000 VND',
    code: 'AV00',
  },
  {
    id: null,
    img: ' 	https://ananas.vn/wp-content/uploads/Pro_AV00195_1.jpg',
    zoom: 'https://ananas.vn/wp-content/themes/ananas/fe-assets/images/svg/icon_zoom.svg',
    img_2: 'https://ananas.vn/wp-content/uploads/Pro_AV00195_2.jpg',
    img_3: 'https://ananas.vn/wp-content/uploads/Pro_AV00195_3.jpg',
    img_4: 'https://ananas.vn/wp-content/uploads/Pro_AV00195_4.jpg',
    img_5: 'https://ananas.vn/wp-content/uploads/Pro_AV00195_5.jpg',
    img_6: 'https://ananas.vn/wp-content/uploads/Pro_AV00195_2.jpg',
    img_7: 'https://ananas.vn/wp-content/uploads/Pro_AV00195_1.jpg',
    error: 'anh loi',
    iconLove:
      'https://ananas.vn/wp-content/themes/ananas/fe-assets/images/svg/Heart_product_1.svg',
    iconLove_hover:
      'https://ananas.vn/wp-content/themes/ananas/fe-assets/images/svg/Heart_product_2.svg',
    title: 'New Arrival',
    name: 'Urbas SC - High Top',
    note: 'Aloe Wash',
    price: '650.000 VND',
    code: 'AV00',
  },
  {
    id: null,
    img: ' 	https://ananas.vn/wp-content/uploads/Pro_AV00194_1.jpg',
    zoom: 'https://ananas.vn/wp-content/themes/ananas/fe-assets/images/svg/icon_zoom.svg',
    img_2: 'https://ananas.vn/wp-content/uploads/Pro_AV00194_2.jpg',
    img_3: 'https://ananas.vn/wp-content/uploads/Pro_AV00194_3.jpg',
    img_4: 'https://ananas.vn/wp-content/uploads/Pro_AV00194_4.jpg',
    img_5: 'https://ananas.vn/wp-content/uploads/Pro_AV00194_5.jpg',
    img_6: 'https://ananas.vn/wp-content/uploads/Pro_AV00194_2.jpg',
    img_7: 'https://ananas.vn/wp-content/uploads/Pro_AV00194_1.jpg',
    error: 'anh loi',
    iconLove:
      'https://ananas.vn/wp-content/themes/ananas/fe-assets/images/svg/Heart_product_1.svg',
    iconLove_hover:
      'https://ananas.vn/wp-content/themes/ananas/fe-assets/images/svg/Heart_product_2.svg',
    title: 'New Arrival',
    name: 'Urbas SC - High Top',
    note: 'Foliage',
    price: '650.000 VND',
    code: 'AV00',
  },
  {
    id: null,
    img: ' 	https://ananas.vn/wp-content/uploads/Pro_AV00191_1.jpg',
    zoom: 'https://ananas.vn/wp-content/themes/ananas/fe-assets/images/svg/icon_zoom.svg',
    img_2: 'https://ananas.vn/wp-content/uploads/Pro_AV00191_2.jpg',
    img_3: 'https://ananas.vn/wp-content/uploads/Pro_AV00191_3.jpg',
    img_4: 'https://ananas.vn/wp-content/uploads/Pro_AV00191_4.jpg',
    img_5: 'https://ananas.vn/wp-content/uploads/Pro_AV00191_5.jpg',
    img_6: 'https://ananas.vn/wp-content/uploads/Pro_AV00191_2.jpg',
    img_7: 'https://ananas.vn/wp-content/uploads/Pro_AV00191_1.jpg',
    error: 'anh loi',
    iconLove:
      'https://ananas.vn/wp-content/themes/ananas/fe-assets/images/svg/Heart_product_1.svg',
    iconLove_hover:
      'https://ananas.vn/wp-content/themes/ananas/fe-assets/images/svg/Heart_product_2.svg',
    title: 'New Arrival',
    name: 'Urbas SC - High Top',
    note: 'Dusty Blue',
    price: '650.000 VND',
    code: 'AV00',
  },
  {
    id: null,
    img: ' 	https://ananas.vn/wp-content/uploads/Pro_AV00193_1.jpg',
    zoom: 'https://ananas.vn/wp-content/themes/ananas/fe-assets/images/svg/icon_zoom.svg',
    img_2: 'https://ananas.vn/wp-content/uploads/Pro_AV00193_2.jpg',
    img_3: 'https://ananas.vn/wp-content/uploads/Pro_AV00193_3.jpg',
    img_4: 'https://ananas.vn/wp-content/uploads/Pro_AV00193_4.jpg',
    img_5: 'https://ananas.vn/wp-content/uploads/Pro_AV00193_5.jpg',
    img_6: 'https://ananas.vn/wp-content/uploads/Pro_AV00193_2.jpg',
    img_7: 'https://ananas.vn/wp-content/uploads/Pro_AV00193_1.jpg',
    error: 'anh loi',
    iconLove:
      'https://ananas.vn/wp-content/themes/ananas/fe-assets/images/svg/Heart_product_1.svg',
    iconLove_hover:
      'https://ananas.vn/wp-content/themes/ananas/fe-assets/images/svg/Heart_product_2.svg',
    title: 'New Arrival',
    name: 'Urbas SC - High Top',
    note: 'Fair Orchid',
    price: '650.000 VND',
    code: 'AV00',
  },
  {
    id: null,
    img: ' 	https://ananas.vn/wp-content/uploads/Pro_AV00192_1.jpg',
    zoom: 'https://ananas.vn/wp-content/themes/ananas/fe-assets/images/svg/icon_zoom.svg',
    img_2: 'https://ananas.vn/wp-content/uploads/Pro_AV00192_2.jpg',
    img_3: 'https://ananas.vn/wp-content/uploads/Pro_AV00192_3.jpg',
    img_4: 'https://ananas.vn/wp-content/uploads/Pro_AV00192_4.jpg',
    img_5: 'https://ananas.vn/wp-content/uploads/Pro_AV00192_5.jpg',
    img_6: 'https://ananas.vn/wp-content/uploads/Pro_AV00192_2.jpg',
    img_7: 'https://ananas.vn/wp-content/uploads/Pro_AV00192_1.jpg',
    error: 'anh loi',
    iconLove:
      'https://ananas.vn/wp-content/themes/ananas/fe-assets/images/svg/Heart_product_1.svg',
    iconLove_hover:
      'https://ananas.vn/wp-content/themes/ananas/fe-assets/images/svg/Heart_product_2.svg',
    title: 'New Arrival',
    name: 'Urbas SC - High Top',
    note: 'Cornsilk',
    price: '650.000 VND',
    code: 'AV00',
  },
  {
    id: null,
    img: ' 	https://ananas.vn/wp-content/uploads/Pro_AV00200_1.jpg',
    zoom: 'https://ananas.vn/wp-content/themes/ananas/fe-assets/images/svg/icon_zoom.svg',
    img_2: 'https://ananas.vn/wp-content/uploads/Pro_AV00200_2.jpg',
    img_3: 'https://ananas.vn/wp-content/uploads/Pro_AV00200_3.jpg',
    img_4: 'https://ananas.vn/wp-content/uploads/Pro_AV00200_4.jpg',
    img_5: 'https://ananas.vn/wp-content/uploads/Pro_AV00200_5.jpg',
    img_6: 'https://ananas.vn/wp-content/uploads/Pro_AV00200_2.jpg',
    img_7: 'https://ananas.vn/wp-content/uploads/Pro_AV00200_1.jpg',
    error: 'anh loi',
    iconLove:
      'https://ananas.vn/wp-content/themes/ananas/fe-assets/images/svg/Heart_product_1.svg',
    iconLove_hover:
      'https://ananas.vn/wp-content/themes/ananas/fe-assets/images/svg/Heart_product_2.svg',
    title: 'New Arrival',
    name: 'Urbas SC - High Top',
    note: 'Cornsilk',
    price: '650.000 VND',
    code: 'AV00',
  },
  {
    id: null,
    img: ' 	https://ananas.vn/wp-content/uploads/pro_A61107_1.jpg',
    zoom: 'https://ananas.vn/wp-content/themes/ananas/fe-assets/images/svg/icon_zoom.svg',
    img_2: 'https://ananas.vn/wp-content/uploads/pro_A61107_2.jpg',
    img_3: 'https://ananas.vn/wp-content/uploads/pro_A61107_3.jpg',
    img_4: 'https://ananas.vn/wp-content/uploads/pro_A61107_5.jpg',
    img_5: 'https://ananas.vn/wp-content/uploads/pro_A61107_4.jpg',
    img_6: 'https://ananas.vn/wp-content/uploads/pro_A61107_1.jpg',
    img_7: 'https://ananas.vn/wp-content/uploads/pro_A61107_2.jpg',
    error: 'anh loi',
    iconLove:
      'https://ananas.vn/wp-content/themes/ananas/fe-assets/images/svg/Heart_product_1.svg',
    iconLove_hover:
      'https://ananas.vn/wp-content/themes/ananas/fe-assets/images/svg/Heart_product_2.svg',
    title: 'New Arrival',
    name: 'Urbas Unsettling - High Top',
    note: 'Insignia/Sulphur',
    price: '550.000 VND',
    code: 'AV00',
  },
  {
    id: null,
    img: '	https://ananas.vn/wp-content/uploads/pro_A61103_1.jpg',
    zoom: 'https://ananas.vn/wp-content/themes/ananas/fe-assets/images/svg/icon_zoom.svg',
    img_2: 'https://ananas.vn/wp-content/uploads/pro_A61103_2.jpg',
    img_3: 'https://ananas.vn/wp-content/uploads/pro_A61103_3.jpg',
    img_4: 'https://ananas.vn/wp-content/uploads/pro_A61103_5.jpg',
    img_5: 'https://ananas.vn/wp-content/uploads/pro_A61103_4.jpg',
    img_6: 'https://ananas.vn/wp-content/uploads/pro_A61103_1.jpg',
    img_7: 'https://ananas.vn/wp-content/uploads/pro_A61103_2.jpg',
    error: 'anh loi',
    iconLove:
      'https://ananas.vn/wp-content/themes/ananas/fe-assets/images/svg/Heart_product_1.svg',
    iconLove_hover:
      'https://ananas.vn/wp-content/themes/ananas/fe-assets/images/svg/Heart_product_2.svg',
    title: 'New Arrival',
    name: 'Urbas Unsettling - Low Top',
    note: 'Insignia/Sulphur',
    price: '490.000 VND',
    code: 'AV00',
  },
];

const img = document.querySelector('.detail-content');
let isLike = true;
const handleIconlove = (event) => {
  if (isLike) {
    const icon = productList[1].iconLove_hover;
    event.setAttribute('src', icon);
    isLike = false;
  } else {
    const icon = productList[1].iconLove;
    event.setAttribute('src', icon);
    isLike = true;
  }
};
const item = productList.map((item, index) => {
  if (index + 1 === Number(productId) || item.name === searchId) {
    return `
    <div class="detail-header">
        <ul>
            <li>
              <a href="">Giày</a>
            </li> 
            <li>
              <span class="carot"></span>
            </li> 
             <li>
              <a href="">${item.note}</a>
            </li>
            <li>
              <span class="carot"></span>
            </li>
             <li>
              <a href="">${item.name}</a>
            </li>    
        </ul>
    </div>
      <div class="detail-main">
            <div class="detail-product">
              <div class="detail-first">
                  <img src=${item.img} alt=${item.error}>
                  <img src=${item.zoom} alt="">
              </div>
              <div class="detail-list">
                  <div class="detail-list_item">
                      <img src=${item.img} alt=${item.error}>
                  </div>
                  <div class="detail-list_item"> 
                      <img src=${item.img_2} alt=${item.error}>
                  </div>
                  <div class="detail-list_item">
                      <img src=${item.img_3} alt=${item.error}>
                  </div>
                  <div class="detail-list_item"> 
                      <img src=${item.img_4} alt=${item.error}>
                  </div>
                  <div class="detail-list_item"> 
                      <img src=${item.img_4} alt=${item.error}>
                  </div>
                  <div class="detail-list_item">
                      <img src=${item.img_5} alt=${item.error}>
                  </div>
                  <div class="detail-list_item"> 
                      <img src=${item.img_6} alt=${item.error}>
                  </div>
                  <div class="detail-list_item"> 
                      <img src=${item.img_7} alt=${item.error}>
                  </div>
              </div>
          </div>
          <div class="detail-info">
              <h3 class="detail-title">${item.name} - ${item.note}</h3>
              <div class="detail-caption">
                  <p>Mã sản phẩm:<span>${item.code}${Math.floor(
      Math.random(item.code) * 1000
    )}</span></p>
                  ${
                    index + 1 <= 7
                      ? `<p>Tình trạng: <span>${item.title}</span></p>`
                      : ''
                  }
              </div>
              <span class="detail-price">${item.price}</span>
              <div class="detail-color">
                  <span></span>
                  <span></span>
              </div>
              <div class="detail-numbers">
                  <div>
                      <h3>SIZE</h3>
                      <button type"button" class="detail-size">
                          <span></span>
                          <img src="../logo/down-arrow.svg" alt="">
                      </button>
                  </div>
                  <div>
                      <h3>SỐ LƯỢNG</h3>
                      <button type"button" class="detail-size">
                          <span></span>
                          <img src="../logo/down-arrow.svg" alt="">
                      </button>
                  </div>
              </div>
              <div class="detail-group">
                <div class="detail-group_add">
                  <button type="submit" class="add" data-shop-item=${
                    index + 1
                  }>THÊM VÀO GIỎ HÀNG</button>
                    <div class="detail-group_img">
                      <img src=${
                        item.iconLove
                      } onClick="handleIconlove(this)" alt=${
      item.iconLove_hover
    } />
                    </div>
                </div>
                <a href="" class="detail-group_pay">THANH TOÁN</a>
              </div>
              <div class="detail-panel">
                <div class="detail-panel_item ">
                  <h3 class="detail-panel_title " >THÔNG TIN SẢN PHẨM <img src="../logo/down-arrow.svg" alt=""></h3>
                  <ul>
                    <li>
                      Gender: Unisex
                    </li>
                    <li>
                      Size run: 35 – 46
                    </li>
                    <li>
                      Upper: Corduroy
                    </li>
                    <li>
                      Outsole: Rubber
                    </li>
                    <li class="detail-panel_img">
                      <img src="https://ananas.vn/wp-content/uploads/Ananas_SizeChart.jpg" alt="">
                    </li>
                  </ul>
                </div>
                  <div class="detail-panel_item">
                  <h3 class="detail-panel_title">QUY ĐỊNH ĐỔI SẢN PHẨM <img src="../logo/down-arrow.svg" alt=""></h3>
                    <ul>
                      <li>Chỉ đổi hàng 1 lần duy nhất, mong bạn cân nhắc kĩ trước khi quyết định.</li>
                      <li>Thời hạn đổi sản phẩm khi mua trực tiếp tại cửa hàng là 07 ngày, kể từ ngày mua. Đổi sản phẩm khi mua online là 14 ngày, kể từ ngày nhận hàng.</li>
                      <li>Sản phẩm đổi phải kèm hóa đơn. Bắt buộc phải còn nguyên tem, hộp, nhãn mác.</li>
                      <li>Sản phẩm đổi không có dấu hiệu đã qua sử dụng, không giặt tẩy, bám bẩn, biến dạng.</li>
                      <li>Ananas chỉ ưu tiên hỗ trợ đổi size. Trong trường hợp sản phẩm hết size cần đổi, bạn có thể đổi sang 01 sản phẩm khác:<br>
                      - Nếu sản phẩm muốn đổi ngang giá trị hoặc có giá trị cao hơn, bạn sẽ cần bù khoảng chênh lệch tại thời điểm đổi (nếu có).<br>
                      - Nếu bạn mong muốn đổi sản phẩm có giá trị thấp hơn, chúng tôi sẽ không hoàn lại tiền.</li>
                      <li>Trong trường hợp sản phẩm - size bạn muốn đổi không còn hàng trong hệ thống. Vui lòng chọn sản phẩm khác.</li>
                      <li>Không hoàn trả bằng tiền mặt dù bất cứ trong trường hợp nào. Mong bạn thông cảm.</li>
                    </ul>
                </div>
                  <div class="detail-panel_item ">
                      <h3 class="detail-panel_title">BẢO HÀNH THẾ NÀO ? <img src="../logo/down-arrow.svg" alt=""></h3>
                      <ul>
                          <li> 
                          Mỗi đôi giày Ananas trước khi xuất xưởng đều trải qua nhiều khâu kiểm tra. Tuy vậy, trong quá trình sử dụng, nếu nhận thấy các lỗi: gãy đế, hở đế, đứt chỉ may,...trong thời gian 6 tháng từ ngày mua hàng, mong bạn sớm gửi sản phẩm về Ananas nhằm giúp chúng tôi có cơ hội phục vụ bạn tốt hơn. Vui lòng gửi sản phẩm về bất kỳ cửa hàng Ananas nào, hoặc gửi đến trung tâm bảo hành Ananas ngay trong trung tâm TP.HCM trong giờ hành chính:
                        </li>
                        <li>
                          Địa chỉ: 5C Tân Cảng, P.25, Q.Bình Thạnh , TP. Hồ Chí Minh.
                          Hotline: 028 2211 0067
                        </li>
                      </ul>
                </div>
              </div>
          </div>
        </div>
        
    `;
  }
});
img.innerHTML = item.join('');

const detailItem = document.querySelectorAll('.detail-list_item > img');
const detailFirst = document.querySelector('.detail-first > img');
detailItem.forEach((item) => {
  item.addEventListener('click', (event) => {
    const firstImg = event.currentTarget.getAttribute('src');
    detailFirst.setAttribute('src', firstImg);
  });
});

const detailPanel = document.querySelectorAll('.detail-panel_item > h3');
const panelIcon = document.querySelectorAll('.detail-panel_item > h3 > img');
const listPanel = document.querySelectorAll('.detail-panel_item > ul');
let isPannel = true;
detailPanel.forEach((item, index) => {
  item.addEventListener('click', (event) => {
    if (isPannel) {
      event.currentTarget.style.color = '#000';
      listPanel[index].style.display = 'none';
      panelIcon[index].style.rotate = '0deg';
      isPannel = false;
    } else {
      isPannel = true;
      panelIcon[index].style.rotate = '180deg';
      event.currentTarget.style.color = 'red';
      listPanel[index].style.display = 'block';
    }
  });
});
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
  {
    name: 'Urbas Retrospective - Low Top',
    color: 'Popular Blue',
    sku: 'AV00128',
    price: '650.000',
    image: 'https://ananas.vn/wp-content/uploads/Pro_AV00128_1.jpg',
  },
  {
    name: 'Urbas SC - Mule',
    color: 'Fair Orchid',
    sku: 'AV00199',
    price: '580.000',
    image: 'https://ananas.vn/wp-content/uploads/Pro_AV00199_1.jpg',
  },
  {
    name: 'Urbas SC - Low Top',
    color: 'Fair Orchid',
    sku: 'AV00190',
    price: '620.000',
    image: 'https://ananas.vn/wp-content/uploads/Pro_AV00190_1.jpg',
  },
  {
    name: 'Vintas Jazico - Low Top',
    color: 'Royal White',
    sku: 'AV00173',
    price: '720.000',
    image: 'https://ananas.vn/wp-content/uploads/Pro_AV00173_1.jpeg',
  },
  {
    name: 'Urbas SC - Mule',
    color: 'Aloe Wash',
    sku: 'AV00198',
    price: '580.000',
    image: 'https://ananas.vn/wp-content/uploads/Pro_AV00198_1.jpg',
  },
  {
    name: 'Track 6 Triple White - Low Top',
    color: 'White',
    sku: 'A6T002',
    price: '990.000',
    image: 'https://ananas.vn/wp-content/uploads/pro_track6_A6T002_1.jpg',
  },
  {
    name: 'Basas Bumper Gum NE - Mule',
    color: 'Offwhite/Gum',
    sku: 'AV00006',
    price: '520.000',
    image: 'https://ananas.vn/wp-content/uploads/Pro_AV00006_1.jpeg',
  },
  {
    name: 'Vintas Mister NE - High Top',
    color: 'Chocolate Brown',
    sku: 'AV00101',
    price: '650.000',
    image: 'https://ananas.vn/wp-content/uploads/pro_AV00101_1.jpg',
  },
  {
    name: 'Urbas Corluray Mix - Low Top',
    color: 'Corluray Mix',
    sku: 'AV00165',
    price: '610.000',
    image: 'https://ananas.vn/wp-content/uploads/Pro_AV00165_1.jpeg',
  },
  {
    name: 'Vintas Bleached Sand NE - Low Top',
    color: 'Beached Sand',
    sku: 'AV00025',
    price: '560.000',
    image: 'https://ananas.vn/wp-content/uploads/Pro_AV00025_1.jpg',
  },
  {
    name: 'Vintas Landforms - Low Top',
    color: 'Rain Drum',
    sku: 'AV00176',
    price: '720.000',
    image: 'https://ananas.vn/wp-content/uploads/Pro_AV00176_1.jpg',
  },
  {
    name: 'Track 6 Suede Moonphase - Low Top',
    color: 'Winterize',
    sku: 'A6T007',
    price: '990.000',
    image: 'https://ananas.vn/wp-content/uploads/pro_A6T007_1.jpg',
  },
  {
    name: 'Urbas Love+ 22 - High Top',
    color: 'Rustic',
    sku: 'ALP2022',
    price: '850.000',
    image: 'https://ananas.vn/wp-content/uploads/Lgbt1080-1.jpg',
  },
  {
    name: 'Track 6 Triple Black - Low Top',
    color: 'Black',
    sku: 'A6T003',
    price: '990.000',
    image: 'https://ananas.vn/wp-content/uploads/pro_track6_A6T003_1.jpg',
  },
  {
    name: 'Basas Evergreen - Low Top',
    color: 'Evergreen',
    sku: 'AV00142',
    price: '580.000',
    image: 'https://ananas.vn/wp-content/uploads/pro_AV00142_1.jpg',
  },
  {
    name: 'Pattas Polka Dots - Low Top',
    color: 'Black',
    sku: 'AV00157',
    price: '720.000',
    image: 'https://ananas.vn/wp-content/uploads/pro_AV00157_1.jpg',
  },
  {
    name: 'Urbas Ruler - Low Top',
    color: 'Icelandic Blue',
    sku: 'AV00125',
    price: '590.000',
    image: 'https://ananas.vn/wp-content/uploads/Pro_AV00125_1.jpg',
  },
  {
    name: 'Basas RAW - Low Top',
    color: 'Rustic',
    sku: 'AV00135',
    price: '610.000',
    image: 'https://ananas.vn/wp-content/uploads/pro_AV00135_1.jpg',
  },
  {
    name: 'Track 6 OG - Low Top',
    color: '70s White',
    sku: 'A6T001',
    price: '990.000',
    image: 'https://ananas.vn/wp-content/uploads/pro_track6_A6T001_1.jpg',
  },
  {
    name: 'Vintas Landforms - Low Top',
    color: 'Green Moss',
    sku: 'AV00177',
    price: '720.000',
    image: 'https://ananas.vn/wp-content/uploads/Pro_AV00177_1.jpg',
  },
  {
    name: 'Vintas Aunter - Low Top',
    color: 'Dusty Blue',
    sku: 'AV00123',
    price: '690.000',
    image: 'https://ananas.vn/wp-content/uploads/Pro_AV00123_1.jpg',
  },
  {
    name: 'Urbas SC - Mule',
    color: 'Dusty Blue',
    sku: 'AV00202',
    price: '620.000',
    image: 'https://ananas.vn/wp-content/uploads/Pro_AV00202_1.jpg',
  },
  {
    name: 'Basas Simple Life NE -  Mule',
    color: 'Black',
    sku: 'AV00003',
    price: '490.000',
    image: 'https://ananas.vn/wp-content/uploads/Pro_AV00003_1.jpeg',
  },
  {
    name: 'Urbas SC - Low Top',
    color: 'Dark Purple',
    sku: 'AV00183',
    price: '580.000',
    image: 'https://ananas.vn/wp-content/uploads/Pro_AV00183_1.jpg',
  },
  {
    name: 'Urbas Ruler - Low Top',
    color: 'Granite Green',
    sku: 'AV00124',
    price: '590.000',
    image: 'https://ananas.vn/wp-content/uploads/Pro_AV00124_1.jpg',
  },
];
const related = document.querySelector('.detail-related_content');
const renderRelated = productRelated.map((item, index) => {
  return `
    <div class="detail-related_item reveal ">
      <img class="detail-related_img" src=${item.image} alt="error">
      <div class="detail-related_info">
          <h3>${item.name}</h3>
          <span>${item.color}</span>
          <h3>${item.price}</h3>
      </div>
    </div>
  `;
});
related.innerHTML = renderRelated.join('');
//get data-shop localStorage
const addItem = document.querySelector('.add');
let isAddItem = true;
addItem.addEventListener('click', (event) => {
  if (isAddItem) {
    event.target.textContent = 'ĐÃ THÊM';
    isAddItem = false;
  } else {
    event.target.textContent = 'THÊM VÀO GIỎ HÀNG';
    isAddItem = true;
  }
  const data = event.currentTarget.dataset.shopItem;
  let getSave = localStorage.getItem('shop-item');
  if (getSave) {
    getSave = JSON.parse(getSave);
  } else {
    getSave = [];
  }
  // console.log(getSave);
  getSave.push(data);
  localStorage.setItem('shop-item', JSON.stringify(getSave));

  // const dataList =
  //   event.target.parentElement.parentElement.parentElement.parentElement;
});
