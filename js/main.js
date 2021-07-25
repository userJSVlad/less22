let btn = document.querySelector('.download')

let downloadInfo = () => {
   fetch('http://127.0.0.1:5500/all/service.html').then(res => {
      return res.text();
   }).then(data => {
      let box = document.querySelector('.box')
      box.innerHTML += data;
   })
}
btn.addEventListener('click', downloadInfo)

let btn1 = document.querySelector('.btn1')
let btn2 = document.querySelector('.btn2')
let btn3 = document.querySelector('.btn3')
let btn4 = document.querySelector('.btn4')

let showInfoOne = () => {
   fetch('http://127.0.0.1:5500/all/service1.html').then(res => {
      return res.text();
   }).then(data => {
      let box = document.querySelector('.box')
      box.innerHTML += data;
   })
}

let showInfoTwo = () => {
   fetch('http://127.0.0.1:5500/all/service2.html').then(res => {
      return res.text();
   }).then(data => {
      let box = document.querySelector('.box')
      box.innerHTML += data;
   })
}

let showInfoThree = () => {
   fetch('http://127.0.0.1:5500/all/service3.html').then(res => {
      return res.text();
   }).then(data => {
      let box = document.querySelector('.box')
      box.innerHTML += data;
   })
}

let showInfoFour = () => {
   fetch('http://127.0.0.1:5500/all/service4.html').then(res => {
      return res.text();
   }).then(data => {
      let box = document.querySelector('.box')
      box.innerHTML += data;
   })
}


btn1.addEventListener('click', showInfoOne);
btn2.addEventListener('click', showInfoTwo);
btn3.addEventListener('click', showInfoThree);
btn4.addEventListener('click', showInfoFour);

let serv = document.querySelector('.serv')

let showTime = () => {
   fetch('http://127.0.0.1:5500/all/serv.html').then(res => {
      return res.text();
   }).then(data => {
      console.log(data)
      let ulElem = document.querySelector('.ul-time')
      ulElem.innerHTML += `
         <li class="time">${data}</li>
      `;
   })
}

serv.addEventListener('click', showTime)