// Get value
myCaption = document.getElementById("myCaption");
infomation_title = document.getElementById("infomation_title");
experience = document.getElementById("experience");
handled_project_github = document.getElementById("handled_project_github");
clients = document.getElementById("clients");
// Get value infomation
fristName = document.getElementById("fristName");
lastName = document.getElementById("lastName");
nickName = document.getElementById("nickName");
age = document.getElementById("age");
sex = document.getElementById("sex");
based_in = document.getElementById("based_in");

// Get value project
project_1 = document.getElementById("project_1");
project_2 = document.getElementById("project_2");
project_3 = document.getElementById("project_3");

// Get value seeAll
seeAll = document.getElementById("seeAll");

// Get value social
social_facebook = document.getElementById("social_facebook");
social_ig = document.getElementById("social_ig");
social_github = document.getElementById("social_github");

// Get value About
infomation = document.getElementById("infomation");

// Open See All Project
seeAll.addEventListener("click", () => {
  window.open("https://infoweb.iot-cm.com");
});

// Open Once Project
project_1.addEventListener("click", () => {
  window.open("https://infoweb.iot-cm.com/MYNEWLP/");
});

project_2.addEventListener("click", () => {
  window.open("https://infoweb.iot-cm.com/TravelWebsiteDesign/");
});

project_3.addEventListener("click", () => {
  window.open("https://infoweb.iot-cm.com/WebService/");
});

project_3.addEventListener("click", () => {
  window.open("https://infoweb.iot-cm.com/WebService/");
});

// Open Social
social_facebook.addEventListener("click", () => {
  window.open("https://www.facebook.com/ChanisonAupathin");
});
social_ig.addEventListener("click", () => {
  window.open("https://github.com/ChanisonM");
});
social_github.addEventListener("click", () => {
  window.open("https://www.instagram.com/chanison_aupathin/");
});

// function calculation age
function calAge() {
  let nowDate = moment().year(); //Get curren year
  const birthday = 1998;
  age.innerHTML = nowDate - birthday;
}

infomationObj = {
  myCaption: "Life is just a game",
  infomation_title: "INFORMATION",
  fristName: "Chanison",
  lastName: "Aupathin",
  nickName: "Mon",
  age: calAge(),
  sex: "Male",
  based_in: "Chiang Mai , Thailand",
  experience: 1,
  handled_project_github: 27,
  clients: 0,
};
infomation_title.innerHTML = `${infomationObj.infomation_title}`;
myCaption.innerHTML = `${infomationObj.myCaption} <i class="ri-gamepad-line"></i>`;
fristName.innerHTML = infomationObj.fristName;
lastName.innerHTML = infomationObj.lastName;
nickName.innerHTML = infomationObj.nickName;
sex.innerHTML = infomationObj.sex;
based_in.innerHTML = infomationObj.based_in;
experience.innerHTML = ` < ${infomationObj.experience} <br> Experience`;
handled_project_github.innerHTML = `${infomationObj.handled_project_github} <br> Project`;
clients.innerHTML = `${infomationObj.clients} <br> Clients`;
