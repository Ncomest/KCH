"use strict";

var userDeviceArray = [
  {device: 'Android', platform: /Android/},
  {device: 'iPhone', platform: /iPhone/},
  {device: 'iPad', platform: /iPad/},
  {device: 'Symbian', platform: /Symbian/},
  {device: 'Windows Phone', platform: /Windows Phone/},
  {device: 'Tablet OS', platform: /Tablet OS/},
  {device: 'Linux', platform: /Linux/},
  {device: 'Windows', platform: /Windows NT/},
  {device: 'Macintosh', platform: /Macintosh/}
];

var platform = navigator.userAgent;

function getPlatform() {
  for (var i in userDeviceArray) {
      if (userDeviceArray[i].platform.test(platform)) {
          return userDeviceArray[i].device;
      }
  }
  return 'Неизвестная платформа!' + platform;
}

console.log('Ваша платформа: ' + getPlatform());

const iconMenu = document.querySelector(".menu__icon");
const menuBody = document.querySelector(".menu__body");
if (iconMenu) {
  iconMenu.addEventListener("click", function (e) {
    iconMenu.classList.toggle("_active");
    menuBody.classList.toggle("_active");
  });
}
