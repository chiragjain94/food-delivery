var carouselHomepage = $("#carouselHomepage");
var contactWrapper = $("#contactWrapper");
var aboutWrapper = $("#aboutWrapper");
contactWrapper.hide();
aboutWrapper.hide();

var aboutUs = document.getElementById("aboutUs");
aboutUs.onclick = function() {
  carouselHomepage.hide();
  contactWrapper.hide();
  aboutWrapper.show();
};

var contactUs = document.getElementById("contactUs");
contactUs.onclick = function() {
  carouselHomepage.hide();
  contactWrapper.show();
  aboutWrapper.hide();
};

var homePage = document.getElementById("homePage");
homePage.onclick = function() {
  carouselHomepage.show();
  contactWrapper.hide();
  aboutWrapper.hide();
};

var brandPage = document.getElementById("brand");
brandPage.onclick = function() {
  carouselHomepage.show();
  contactWrapper.hide();
  aboutWrapper.hide();
};

var orderNow = document.getElementById("orderNow");
orderNow.onclick = function() {
  carouselHomepage.hide();
  contactWrapper.hide();
  aboutWrapper.hide();
};
