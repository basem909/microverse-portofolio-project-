const hamburgerIcon = document.querySelector('.image');
const xIcon = document.querySelector('.image2');
const navbar = document.querySelector('.navigator');
const upper = document.querySelector('.upper');
const linkMenu = document.querySelectorAll('.nav-link');

hamburgerIcon.addEventListener('click', () => {
  navbar.classList.toggle('menu-open');
  upper.classList.toggle('upper-menu-open');
  hamburgerIcon.classList.toggle('image-menu-open');
  upper.classList.toggle('link-menu-open');
  xIcon.classList.toggle('image-menu-appear');
});

const closeMenu = () => {
  navbar.classList.remove('menu-open');
  upper.classList.remove('upper-menu-open');
  hamburgerIcon.classList.remove('image-menu-open');
  upper.classList.remove('link-menu-open');
  xIcon.classList.remove('image-menu-appear');
};
xIcon.addEventListener('click', closeMenu);

linkMenu.forEach((link) => {
  link.addEventListener('click', closeMenu);
});

const email = document.getElementById('mail');
const form = document.getElementById('contact-form1');
const messageError = document.getElementById('error');

form.addEventListener('submit', (e) => {
  if (email.value !== email.value.toLowerCase()) {
    e.preventDefault();
    messageError.innerText = 'unfortunatlly the message was not submitted, The email address needs to be all small characters';
  }
});

const Name = document.getElementById('name');
const msg = document.getElementById('msg');
let formObj = { name: '', email: '', message: '' };
let storageItem = JSON.stringify(formObj);

function saveLocal(element, key) {
  element.addEventListener('input', (letter) => {
    formObj[key] = letter.target.value;
    storageItem = JSON.stringify(formObj);
    localStorage.setItem('form', storageItem);
  });
}
saveLocal(Name, 'name');
saveLocal(email, 'email');
saveLocal(msg, 'message');

const storageItem2 = localStorage.getItem('form');
const formObj2 = JSON.parse(storageItem2);
formObj = {
  name: formObj2.name,
  email: formObj2.email,
  message: formObj2.message,
};
function showLocal(obj, key) {
  obj.value = formObj2[key];
}

showLocal(Name, 'name');
showLocal(email, 'email');
showLocal(msg, 'message');

// array of project objects
const popUp = [
  {
    Title: 'Hi guys this Bassem',
    Technologies: ['HTML/CSS', 'Ruby on rails', 'Javascript'],
    Image: 'assests/images/Rectangle21.png',
    Description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Itaque repudiandae tempora nisi minima non beatae aspernatur praesentium ipsa? Quia quidem debitis error tenetur, ea eos facere natus tempor neque ducimus doloribus assumenda aspernatur iusto soluta enim ataccusantium impedit ratione quasi perferendis cum hic esse ipsum sit!\n \n Atque corrupti unde impedit commodi voluptate cum inventore tenetur sequi accusantium fugiat consectetur provident voluptatem blanditiis quae excepturi repudiandae sunt rem ipsam, magni voluptas ullam ab nulla vero exercitationem! Tempora, consequatur velit! Hic aut explicabo voluptates sed ipsum eos praesentium a inventore fuga mollitia nostrum, ducimus incidunt! Quos quo in rerum blanditiis perferendis!',
    LinkLive: 'https://basem909.github.io/portfolio/',
    LinkSource: 'https://github.com/',
  },
  {
    Title: 'project name goes here',
    Technologies: ['HTML/CSS', 'Ruby on rails', 'Javascript'],
    Image: 'assests/images/Rectangle27.png',
    Description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Itaque repudiandae tempora nisi minima non beatae aspernatur praesentium ipsa? Quia quidem debitis error tenetur, ea eos facere natus tempor neque ducimus doloribus assumenda aspernatur iusto soluta enim ataccusantium impedit ratione quasi perferendis cum hic esse ipsum sit!\n \n Atque corrupti unde impedit commodi voluptate cum inventore tenetur sequi accusantium fugiat consectetur provident voluptatem blanditiis quae excepturi repudiandae sunt rem ipsam, magni voluptas ullam ab nulla vero exercitationem! Tempora, consequatur velit! Hic aut explicabo voluptates sed ipsum eos praesentium a inventore fuga mollitia nostrum, ducimus incidunt! Quos quo in rerum blanditiis perferendis!',
    LinkLive: 'https://basem909.github.io/portfolio/',
    LinkSource: 'https://github.com/',
  },
  {
    Title: 'project name goes here',
    Technologies: ['HTML/CSS', 'Ruby on rails', 'Javascript'],
    Image: 'assests/images/Rectangle211.png',
    Description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Itaque repudiandae tempora nisi minima non beatae aspernatur praesentium ipsa? Quia quidem debitis error tenetur, ea eos facere natus tempor neque ducimus doloribus assumenda aspernatur iusto soluta enim ataccusantium impedit ratione quasi perferendis cum hic esse ipsum sit!\n \n Atque corrupti unde impedit commodi voluptate cum inventore tenetur sequi accusantium fugiat consectetur provident voluptatem blanditiis quae excepturi repudiandae sunt rem ipsam, magni voluptas ullam ab nulla vero exercitationem! Tempora, consequatur velit! Hic aut explicabo voluptates sed ipsum eos praesentium a inventore fuga mollitia nostrum, ducimus incidunt! Quos quo in rerum blanditiis perferendis!',
    LinkLive: 'https://basem909.github.io/portfolio/',
    LinkSource: 'https://github.com/',
  },
  {
    Title: 'project name goes here',
    Technologies: ['HTML/CSS', 'Ruby on rails', 'Javascript'],
    Image: 'assests/images/Rectangle213.png',
    Description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Itaque repudiandae tempora nisi minima non beatae aspernatur praesentium ipsa? Quia quidem debitis error tenetur, ea eos facere natus tempor neque ducimus doloribus assumenda aspernatur iusto soluta enim ataccusantium impedit ratione quasi perferendis cum hic esse ipsum sit!\n \n Atque corrupti unde impedit commodi voluptate cum inventore tenetur sequi accusantium fugiat consectetur provident voluptatem blanditiis quae excepturi repudiandae sunt rem ipsam, magni voluptas ullam ab nulla vero exercitationem! Tempora, consequatur velit! Hic aut explicabo voluptates sed ipsum eos praesentium a inventore fuga mollitia nostrum, ducimus incidunt! Quos quo in rerum blanditiis perferendis!',
    LinkLive: 'https://basem909.github.io/portfolio/',
    LinkSource: 'https://github.com/',
  },
  {
    Title: 'project name goes here',
    Technologies: ['HTML/CSS', 'Ruby on rails', 'Javascript'],
    Image: 'assests/images/Rectangle214.png',
    Description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Itaque repudiandae tempora nisi minima non beatae aspernatur praesentium ipsa? Quia quidem debitis error tenetur, ea eos facere natus tempor neque ducimus doloribus assumenda aspernatur iusto soluta enim ataccusantium impedit ratione quasi perferendis cum hic esse ipsum sit!\n \n Atque corrupti unde impedit commodi voluptate cum inventore tenetur sequi accusantium fugiat consectetur provident voluptatem blanditiis quae excepturi repudiandae sunt rem ipsam, magni voluptas ullam ab nulla vero exercitationem! Tempora, consequatur velit! Hic aut explicabo voluptates sed ipsum eos praesentium a inventore fuga mollitia nostrum, ducimus incidunt! Quos quo in rerum blanditiis perferendis!',
    LinkLive: 'https://basem909.github.io/portfolio/',
    LinkSource: 'https://github.com/',
  },
  {
    Title: 'project name goes here',
    Technologies: ['HTML/CSS', 'Ruby on rails', 'Javascript'],
    Image: 'assests/images/Rectangle215.png',
    Description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Itaque repudiandae tempora nisi minima non beatae aspernatur praesentium ipsa? Quia quidem debitis error tenetur, ea eos facere natus tempor neque ducimus doloribus assumenda aspernatur iusto soluta enim ataccusantium impedit ratione quasi perferendis cum hic esse ipsum sit!\n \n Atque corrupti unde impedit commodi voluptate cum inventore tenetur sequi accusantium fugiat consectetur provident voluptatem blanditiis quae excepturi repudiandae sunt rem ipsam, magni voluptas ullam ab nulla vero exercitationem! Tempora, consequatur velit! Hic aut explicabo voluptates sed ipsum eos praesentium a inventore fuga mollitia nostrum, ducimus incidunt! Quos quo in rerum blanditiis perferendis!',
    LinkLive: 'https://basem909.github.io/portfolio/',
    LinkSource: 'https://github.com/',
  },
];

// the project card layout
const projectSection = document.querySelector('.project');
const window1 = document.querySelector('.popup-window');
const container = document.querySelector('.pop-container');
const header1 = document.createElement('div');
const xButton = document.createElement('a');
const xImage = document.createElement('img');
xButton.setAttribute('href', '#projects');
xButton.appendChild(xImage);
header1.appendChild(xButton);
header1.setAttribute('id', 'header12');
container.appendChild(header1);
xImage.setAttribute('src', 'assests/images/Union.svg');
const head = document.createElement('h3');
head.textContent = 'Project name goes here';
container.appendChild(head);
const list = document.createElement('ul');
const li1 = document.createElement('li');
const li2 = document.createElement('li');
const li3 = document.createElement('li');
list.appendChild(li1);
list.appendChild(li2);
list.appendChild(li3);
container.appendChild(list);
li1.textContent = 'HTML/CSS';
li2.textContent = 'Rubi on rails';
li3.textContent = 'Javascript';
const imgContainer = document.createElement('div');
const imgBig = document.createElement('img');
const imgSmall1 = document.createElement('img');
const imgSmall2 = document.createElement('img');
const imgSmall3 = document.createElement('img');
const imgSmall4 = document.createElement('img');
imgBig.setAttribute('src', 'assests/images/Rectangle21.png');
imgSmall1.setAttribute('src', 'assests/images/Rectangle21.png');
imgSmall2.setAttribute('src', 'assests/images/Rectangle21.png');
imgSmall3.setAttribute('src', 'assests/images/Rectangle21.png');
imgSmall4.setAttribute('src', 'assests/images/Rectangle21.png');
imgContainer.appendChild(imgBig);
imgContainer.appendChild(imgSmall1);
imgContainer.appendChild(imgSmall2);
imgContainer.appendChild(imgSmall3);
imgContainer.appendChild(imgSmall4);
container.appendChild(imgContainer);
const popParagraph = document.createElement('p');
popParagraph.textContent = 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Itaque repudiandae tempora nisi minima non beatae aspernatur praesentium ipsa? Quia quidem debitis error tenetur, ea eos facere natus tempor neque ducimus doloribus assumenda aspernatur iusto soluta enim ataccusantium impedit ratione quasi perferendis cum hic esse ipsum sit! Atque corrupti unde impedit commodi voluptate cum inventore tenetur sequi accusantium fugiat consectetur provident voluptatem blanditiis quae excepturi repudiandae sunt rem ipsam, magni voluptas ullam ab nulla vero exercitationem! Tempora, consequatur velit! Hic aut explicabo voluptates sed ipsum eos praesentium a inventore fuga mollitia nostrum, ducimus incidunt! Quos quo in rerum blanditiis perferendis!';
container.appendChild(popParagraph);
const btnBox = document.createElement('div');
const tealLink = document.createElement('img');
tealLink.setAttribute('src', 'assests/images/ic_link_teal.png');
const liveBtn = document.createElement('button');
const sourceBtn = document.createElement('button');
liveBtn.textContent = 'See live';
liveBtn.appendChild(tealLink);
sourceBtn.textContent = 'See source';
btnBox.appendChild(liveBtn);
btnBox.appendChild(sourceBtn);
container.appendChild(btnBox);
const footer = document.createElement('footer');
const seeNext = document.createElement('a');
const nextLink = document.createElement('img');
nextLink.setAttribute('src', 'assests/images/arrow-right.svg');
seeNext.textContent = 'Next project';
seeNext.appendChild(nextLink);
seeNext.setAttribute('href', '#');
const seePrevious = document.createElement('a');
const previousLink = document.createElement('img');
seePrevious.textContent = 'Previous project';
previousLink.setAttribute('src', 'assests/images/arrow-left.svg');
seePrevious.appendChild(previousLink);
seePrevious.style.flexDirection = 'row-reverse';
seePrevious.setAttribute('href', '#');
footer.appendChild(seePrevious);
footer.appendChild(seeNext);
container.appendChild(footer);
container.classList.toggle('pop-project1');
header1.classList.toggle('pop-header');
xButton.classList.toggle('pop-close');
head.classList.toggle('pop-heading1');
head.setAttribute('id', 'heading1');
list.classList.toggle('pop-ulist1');
li1.classList.toggle('pop-li1');
li2.classList.toggle('pop-li1');
li3.classList.toggle('pop-li1');
imgContainer.classList.toggle('pop-image1');
imgBig.classList.toggle('pop-big');
imgSmall1.classList.toggle('pop-small');
imgSmall2.classList.toggle('pop-small');
imgSmall3.classList.toggle('pop-small');
imgSmall4.classList.toggle('pop-small');
popParagraph.classList.toggle('pop-paragraph1');
btnBox.classList.toggle('btn-box');
liveBtn.classList.toggle('pop-button');
sourceBtn.classList.toggle('pop-button');
sourceBtn.setAttribute('id', 'pop-button2');
footer.classList.toggle('footer-pop');
seeNext.classList.toggle('link-pop');
seePrevious.classList.toggle('link-pop');


// the project part
const projectContainer = document.getElementById('project-case')
const back1 = document.createElement('div');
back1.classList.add('back1');
projectContainer.appendChild(back1)
const back2 = document.createElement("div");
back2.classList.add("back2");
projectContainer.appendChild(back2);
const back3 = document.createElement("div");
back3.classList.add("back3");
projectContainer.appendChild(back3);
const back4 = document.createElement("div");
back4.classList.add("back4");
projectContainer.appendChild(back4);
const headerArticle = document.createElement('article')
headerArticle.classList.add('projects')
headerArticle.setAttribute('id','projects')
projectContainer.appendChild(headerArticle)
const headerProjects = document.createElement('h2')
headerProjects.classList.add('header-project');
headerProjects.textContent = 'Projects'
headerArticle.appendChild(headerProjects)

const projectContainer1 = document.createElement('article')
projectContainer1.classList.add('project1');
projectContainer.appendChild(projectContainer1)
const imageContainer1 = document.createElement('div')
imageContainer1.classList.add('image-project1');
projectContainer1.appendChild(imageContainer1)
const imageProject1 = document.createElement('img')
imageProject1.setAttribute('src',popUp[0].Image)
imageProject1.setAttribute('alt', 'project1 photo');
imageProject1.classList.add('image-project')
imageContainer1.appendChild(imageProject1);
const detailsProject1 = document.createElement('article')
detailsProject1.classList.add('details-project')
detailsProject1.setAttribute("id", 'details-project1');
projectContainer1.appendChild(detailsProject1)
const nameProject1 = document.createElement('h3')
nameProject1.classList.add('name-project')
nameProject1.setAttribute("id", 'name-project1');
nameProject1.textContent = popUp[0].Title;
detailsProject1.appendChild(nameProject1)
const listProject1 = document.createElement('ul')
listProject1.classList.add('lang-group')
listProject1.setAttribute('id','lang-group1')
detailsProject1.appendChild(listProject1)
const li1Project1 = document.createElement('li')
li1Project1.classList.add('lang-project')
li1Project1.setAttribute('id', 'lang-project1');
const li2Project1 = document.createElement("li");
li2Project1.classList.add("lang-project");
li2Project1.setAttribute("id", "lang-project2");
const li3Project1 = document.createElement("li");
li3Project1.classList.add("lang-project");
li3Project1.setAttribute("id", "lang-project3");
let [textC1, textC2, textC3] = popUp[0].Technologies;
li1Project1.textContent = textC1;
li2Project1.textContent = textC2;
li3Project1.textContent = textC3;
listProject1.appendChild(li1Project1)
listProject1.appendChild(li2Project1);
listProject1.appendChild(li3Project1);
const buttonProject1 = document.createElement('a')
buttonProject1.classList.add('button-project')
buttonProject1.setAttribute('id','btn')
buttonProject1.setAttribute('href', '#header12');
buttonProject1.textContent='see this project'
const arrowWhite = document.createElement('img')
arrowWhite.setAttribute('src', 'assests/images/Union.png');
buttonProject1.appendChild(arrowWhite)
detailsProject1.appendChild(buttonProject1)
const buttonProject11 = document.createElement("a");
buttonProject11.classList.add("button-project768");
buttonProject11.setAttribute("id", "btn1");
buttonProject11.setAttribute("href", "#header12");
buttonProject11.textContent = "see this project";
const arrowDark = document.createElement("img");
arrowDark.setAttribute("src", "assests/images/Union2.png");
buttonProject11.appendChild(arrowDark);
detailsProject1.appendChild(buttonProject11);

const projectContainer2 = document.createElement("article");
projectContainer2.classList.add("project2");
projectContainer.appendChild(projectContainer2);
const imageContainer2 = document.createElement("div");
projectContainer2.appendChild(imageContainer2);
const imageProject2 = document.createElement("img");
imageProject2.setAttribute("src", popUp[1].Image);
imageProject2.setAttribute("alt", "project2 photo");
imageProject2.classList.add("image-project");
imageContainer2.appendChild(imageProject2);
const detailsProject2 = document.createElement("article");
detailsProject2.classList.add("details-project");
detailsProject2.setAttribute('id','details-project2')
projectContainer2.appendChild(detailsProject2);
const nameProject2 = document.createElement("h3");
nameProject2.classList.add("name-project");
nameProject2.textContent = popUp[1].Title;
detailsProject2.appendChild(nameProject2);
const listProject2 = document.createElement("ul");
listProject2.classList.add("lang-group");
detailsProject2.appendChild(listProject2);
const li1Project2 = document.createElement("li");
li1Project2.classList.add("lang-project");
const li2Project2 = document.createElement("li");
li2Project2.classList.add("lang-project");
const li3Project2 = document.createElement("li");
li3Project2.classList.add("lang-project");
 [textC1, textC2, textC3] = popUp[1].Technologies;
li1Project2.textContent = textC1;
li2Project2.textContent = textC2;
li3Project2.textContent = textC3;
listProject2.appendChild(li1Project2);
listProject2.appendChild(li2Project2);
listProject2.appendChild(li3Project2);
const buttonProject2 = document.createElement("a");
buttonProject2.classList.add("button-project");
buttonProject2.setAttribute("id", "btn");
buttonProject2.setAttribute("href", "#header12");
buttonProject2.textContent = "see this project";
buttonProject2.appendChild(arrowWhite);
detailsProject2.appendChild(buttonProject2);
const buttonProject22 = document.createElement("a");
buttonProject22.classList.add("button-project768");
buttonProject22.setAttribute("id", "btn1");
buttonProject22.setAttribute("href", "#header12");
buttonProject22.textContent = "see this project";
buttonProject22.appendChild(arrowDark);
detailsProject2.appendChild(buttonProject22);

const projectContainer3 = document.createElement("article");
projectContainer3.classList.add("project3");
projectContainer.appendChild(projectContainer3);
const imageContainer3 = document.createElement("div");
projectContainer3.appendChild(imageContainer3);
const imageProject3 = document.createElement("img");
imageProject3.setAttribute("src", popUp[2].Image);
imageProject3.setAttribute("alt", "project3 photo");
imageProject3.classList.add("image-project");
imageContainer3.appendChild(imageProject3);
const detailsProject3 = document.createElement("article");
detailsProject3.classList.add("details-project");
detailsProject3.setAttribute("id", "details-project3");
projectContainer3.appendChild(detailsProject3);
const nameProject3 = document.createElement("h3");
nameProject3.classList.add("name-project");
nameProject3.textContent = popUp[2].Title;
detailsProject3.appendChild(nameProject3);
const listProject3 = document.createElement("ul");
listProject3.classList.add("lang-group");
detailsProject3.appendChild(listProject3);
const li1Project3 = document.createElement("li");
li1Project3.classList.add("lang-project");
const li2Project3 = document.createElement("li");
li2Project3.classList.add("lang-project");
const li3Project3 = document.createElement("li");
li3Project3.classList.add("lang-project");
[textC1, textC2, textC3] = popUp[2].Technologies;
li1Project3.textContent = textC1;
li2Project3.textContent = textC2;
li3Project3.textContent = textC3;
listProject3.appendChild(li1Project3);
listProject3.appendChild(li2Project3);
listProject3.appendChild(li3Project3);
const buttonProject3 = document.createElement("a");
buttonProject3.classList.add("button-project");
buttonProject3.setAttribute("id", "btn3-1");
buttonProject3.setAttribute("href", "#header12");
buttonProject3.textContent = "see this project";
buttonProject3.appendChild(arrowWhite);
detailsProject3.appendChild(buttonProject3);
const buttonProject33 = document.createElement("a");
buttonProject33.classList.add("button-project768");
buttonProject33.setAttribute("id", "btn3-1");
buttonProject33.setAttribute("href", "#header12");
buttonProject33.textContent = "see this project";
buttonProject33.appendChild(arrowDark);
detailsProject3.appendChild(buttonProject33);

const projectContainer4 = document.createElement("article");
projectContainer4.classList.add("project4");
projectContainer.appendChild(projectContainer4);
const imageContainer4 = document.createElement("div");
projectContainer4.appendChild(imageContainer4);
const imageProject4 = document.createElement("img");
imageProject4.setAttribute("src", popUp[3].Image);
imageProject4.setAttribute("alt", "project4 photo");
imageProject4.classList.add("image-project");
imageContainer4.appendChild(imageProject4);
const detailsProject4 = document.createElement("article");
detailsProject4.classList.add("details-project");
detailsProject4.setAttribute("id", "details-project4");
projectContainer4.appendChild(detailsProject4);
const nameProject4 = document.createElement("h3");
nameProject4.classList.add("name-project");
nameProject4.textContent = popUp[3].Title;
detailsProject4.appendChild(nameProject4);
const listProject4 = document.createElement("ul");
listProject4.classList.add("lang-group");
detailsProject4.appendChild(listProject4);
const li1Project4 = document.createElement("li");
li1Project4.classList.add("lang-project");
const li2Project4 = document.createElement("li");
li2Project4.classList.add("lang-project");
const li3Project4 = document.createElement("li");
li3Project4.classList.add("lang-project");
[textC1, textC2, textC3] = popUp[3].Technologies;
li1Project4.textContent = textC1;
li2Project4.textContent = textC2;
li3Project4.textContent = textC3;
listProject4.appendChild(li1Project4);
listProject4.appendChild(li2Project4);
listProject4.appendChild(li3Project4);
const buttonProject4 = document.createElement("a");
buttonProject4.classList.add("button-project");
buttonProject4.setAttribute("href", "#header12");
buttonProject4.textContent = "see this project";
buttonProject4.appendChild(arrowWhite);
detailsProject4.appendChild(buttonProject4);
const buttonProject44 = document.createElement("a");
buttonProject44.classList.add("button-project768");
buttonProject44.setAttribute("href", "#header12");
buttonProject44.textContent = "see this project";
buttonProject44.appendChild(arrowDark);
detailsProject4.appendChild(buttonProject44);

const projectContainer5 = document.createElement("article");
projectContainer5.classList.add("project5");
projectContainer.appendChild(projectContainer5);
const imageContainer5 = document.createElement("div");
projectContainer5.appendChild(imageContainer5);
const imageProject5 = document.createElement("img");
imageProject5.setAttribute("src", popUp[4].Image);
imageProject5.setAttribute("alt", "project5 photo");
imageProject5.classList.add("image-project");
imageContainer5.appendChild(imageProject5);
const detailsProject5 = document.createElement("article");
detailsProject5.classList.add("details-project");
detailsProject5.setAttribute("id", "details-project5");
projectContainer5.appendChild(detailsProject5);
const nameProject5 = document.createElement("h3");
nameProject5.classList.add("name-project");
nameProject5.textContent = popUp[4].Title;
detailsProject5.appendChild(nameProject5);
const listProject5 = document.createElement("ul");
listProject5.classList.add("lang-group");
detailsProject5.appendChild(listProject5);
const li1Project5 = document.createElement("li");
li1Project5.classList.add("lang-project");
const li2Project5 = document.createElement("li");
li2Project5.classList.add("lang-project");
const li3Project5 = document.createElement("li");
li3Project5.classList.add("lang-project");
[textC1, textC2, textC3] = popUp[4].Technologies;
li1Project5.textContent = textC1;
li2Project5.textContent = textC2;
li3Project5.textContent = textC3;
listProject5.appendChild(li1Project5);
listProject5.appendChild(li2Project5);
listProject5.appendChild(li3Project5);
const buttonProject5 = document.createElement("a");
buttonProject5.classList.add("button-project");
buttonProject5.setAttribute("href", "#header12");
buttonProject5.textContent = "see this project";
buttonProject5.appendChild(arrowWhite);
detailsProject5.appendChild(buttonProject5);
const buttonProject55 = document.createElement("a");
buttonProject55.classList.add("button-project768");
buttonProject55.setAttribute("href", "#header12");
buttonProject55.textContent = "see this project";
buttonProject55.appendChild(arrowDark);
detailsProject5.appendChild(buttonProject55);

const projectContainer6 = document.createElement("article");
projectContainer6.classList.add("project6");
projectContainer.appendChild(projectContainer6);
const imageContainer6 = document.createElement("div");
projectContainer6.appendChild(imageContainer6);
const imageProject6 = document.createElement("img");
imageProject6.setAttribute("src", popUp[5].Image);
imageProject6.setAttribute("alt", "project6 photo");
imageProject6.classList.add("image-project");
imageContainer6.appendChild(imageProject6);
const detailsProject6 = document.createElement("article");
detailsProject6.classList.add("details-project");
detailsProject6.setAttribute("id", "details-project6");
projectContainer6.appendChild(detailsProject6);
const nameProject6 = document.createElement("h3");
nameProject6.classList.add("name-project");
nameProject6.textContent = popUp[5].Title;
detailsProject6.appendChild(nameProject6);
const listProject6 = document.createElement("ul");
listProject6.classList.add("lang-group");
detailsProject6.appendChild(listProject6);
const li1Project6 = document.createElement("li");
li1Project6.classList.add("lang-project");
const li2Project6 = document.createElement("li");
li2Project6.classList.add("lang-project");
const li3Project6 = document.createElement("li");
li3Project6.classList.add("lang-project");
[textC1, textC2, textC3] = popUp[5].Technologies;
li1Project6.textContent = textC1;
li2Project6.textContent = textC2;
li3Project6.textContent = textC3;
listProject6.appendChild(li1Project6);
listProject6.appendChild(li2Project6);
listProject6.appendChild(li3Project6);
const buttonProject6 = document.createElement("a");
buttonProject6.classList.add("button-project");
buttonProject6.setAttribute("href", "#header12");
buttonProject6.textContent = "see this project";
buttonProject6.appendChild(arrowWhite);
detailsProject6.appendChild(buttonProject6);
const buttonProject66 = document.createElement("a");
buttonProject66.classList.add("button-project768");
buttonProject66.setAttribute("href", "#header12");
buttonProject66.textContent = "see this project";
buttonProject66.appendChild(arrowDark);
detailsProject6.appendChild(buttonProject66);
// the pop up function



const btn6 = document.getElementById('btn6-1');
const btn66 = document.getElementById('btn6-2');
function card(no) {
  head.textContent = popUp[no].Title;
  const [textC1, textC2, textC3] = popUp[no].Technologies;
  li1.textContent = textC1;
  li2.textContent = textC2;
  li3.textContent = textC3;
  imgBig.setAttribute('src', popUp[no].Image);
  imgSmall1.setAttribute('src', popUp[no].Image);
  imgSmall2.setAttribute('src', popUp[no].Image);
  imgSmall3.setAttribute('src', popUp[no].Image);
  imgSmall4.setAttribute('src', popUp[no].Image);
  popParagraph.textContent = popUp[no].Description;
}
xButton.addEventListener('click', () => {
  window1.style.display = 'none';
  projectSection.style.display = 'grid';
});

buttonProject1.addEventListener('click', () => {
  window1.style.display = 'block';
  projectSection.style.display = 'none';
  card(0);
});

buttonProject11.addEventListener('click', () => {
  window1.style.display = 'block';
  projectSection.style.display = 'none';
  card(0);
});
buttonProject2.addEventListener('click', () => {
  window1.style.display = 'block';
  projectSection.style.display = 'none';
  card(1);
});
buttonProject22.addEventListener('click', () => {
  window1.style.display = 'block';
  projectSection.style.display = 'none';
  card(1);
});
buttonProject3.addEventListener('click', () => {
  window1.style.display = 'block';
  projectSection.style.display = 'none';
  card(2);
});
buttonProject33.addEventListener('click', () => {
  window1.style.display = 'block';
  projectSection.style.display = 'none';
  card(2);
});
buttonProject4.addEventListener('click', () => {
  window1.style.display = 'block';
  projectSection.style.display = 'none';
  card(3);
});
buttonProject44.addEventListener('click', () => {
  window1.style.display = 'block';
  projectSection.style.display = 'none';
  card(3);
});
buttonProject5.addEventListener('click', () => {
  window1.style.display = 'block';
  projectSection.style.display = 'none';
  card(4);
});
buttonProject55.addEventListener('click', () => {
  window1.style.display = 'block';
  projectSection.style.display = 'none';
  card(4);
});
btn6.addEventListener('click', () => {
  window1.style.display = 'block';
  projectSection.style.display = 'none';
  card(5);
});
btn66.addEventListener('click', () => {
  window1.style.display = 'block';
  projectSection.style.display = 'none';
  card(5);
});