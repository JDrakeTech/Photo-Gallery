let images = ['./img/bild1.jpg', './img/bild2.jpg', './img/bild3.jpg', './img/bild4.jpg', './img/bild5.jpg', './img/bild6.jpg', './img/bild7.jpg', './img/bild8.jpg', './img/bild9.jpg', './img/bild10.jpg', './img/bild11.jpg', './img/bild12.jpg', './img/bild13.jpg', './img/bild14.jpg', './img/bild15.jpg', './img/bild16.jpg', './img/bild17.jpg', './img/bild18.jpg', './img/bild19.jpg', './img/bild20.jpg',];

function load() {
  for (let i = 0; i < images.length; i++) {
    document.getElementById('imgcontainer').innerHTML += `
        <div onclick="openImage(${i})" class="imgbox">
          <img src="${images[i]}">
        </div>`;
  }
}

function openImage(i) {
  document.getElementById('showImgContainer').innerHTML = `
  <img class="menu-icon" src="./img/close-bt.png" alt="" onclick="closeImage()">

  <div class="goBack-container" onclick="backClick(${i})">
      <img class="goNext-Icon" src="./img/go-back-bt.png" alt="">
  </div>

  <div id="showImg" class="showImg"><img id="myimg" src="${images[i]}" alt=""></div>

  <div class="goForward-container" onclick="forwardClick(${i})">
      <img class="goNext-Icon" src="./img/go-forward-bt.png" alt="">
  </div>`;
  document.getElementById('showImgContainer').classList.remove('d-none');
}

function closeImage() {
  document.getElementById('showImgContainer').classList.add('d-none');
}

function forwardClick(i) {
  i = i < images.length - 1 ? (i + 1) : 0;
  openImage(i);
}


function backClick(i) {
  i = i > 0 ? (i - 1) : images.length - 1;
  openImage(i);
}