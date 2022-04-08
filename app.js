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

//array of project objects
const popUp = [
  {
    Title: "Hi guys this Bassem",
    Technologies: ["HTML/CSS", "Ruby on rails", "Javascript"],
    Image: "assests/images/Rectangle21.png",
    Description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Itaque repudiandae tempora nisi minima non beatae aspernatur praesentium ipsa? Quia quidem debitis error tenetur, ea eos facere natus tempor neque ducimus doloribus assumenda aspernatur iusto soluta enim ataccusantium impedit ratione quasi perferendis cum hic esse ipsum sit!\n \n Atque corrupti unde impedit commodi voluptate cum inventore tenetur sequi accusantium fugiat consectetur provident voluptatem blanditiis quae excepturi repudiandae sunt rem ipsam, magni voluptas ullam ab nulla vero exercitationem! Tempora, consequatur velit! Hic aut explicabo voluptates sed ipsum eos praesentium a inventore fuga mollitia nostrum, ducimus incidunt! Quos quo in rerum blanditiis perferendis!",
    LinkLive: "https://basem909.github.io/portfolio/",
    LinkSource: "https://github.com/",
  },
  {
    Title: "project name goes here",
    Technologies: ["HTML/CSS", "Ruby on rails", "Javascript"],
    Image: "assests/images/Rectangle27.png",
    Description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Itaque repudiandae tempora nisi minima non beatae aspernatur praesentium ipsa? Quia quidem debitis error tenetur, ea eos facere natus tempor neque ducimus doloribus assumenda aspernatur iusto soluta enim ataccusantium impedit ratione quasi perferendis cum hic esse ipsum sit!\n \n Atque corrupti unde impedit commodi voluptate cum inventore tenetur sequi accusantium fugiat consectetur provident voluptatem blanditiis quae excepturi repudiandae sunt rem ipsam, magni voluptas ullam ab nulla vero exercitationem! Tempora, consequatur velit! Hic aut explicabo voluptates sed ipsum eos praesentium a inventore fuga mollitia nostrum, ducimus incidunt! Quos quo in rerum blanditiis perferendis!",
    LinkLive: "https://basem909.github.io/portfolio/",
    LinkSource: "https://github.com/",
  },
  {
    Title: "project name goes here",
    Technologies: ["HTML/CSS", "Ruby on rails", "Javascript"],
    Image: "assests/images/Rectangle211.png",
    Description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Itaque repudiandae tempora nisi minima non beatae aspernatur praesentium ipsa? Quia quidem debitis error tenetur, ea eos facere natus tempor neque ducimus doloribus assumenda aspernatur iusto soluta enim ataccusantium impedit ratione quasi perferendis cum hic esse ipsum sit!\n \n Atque corrupti unde impedit commodi voluptate cum inventore tenetur sequi accusantium fugiat consectetur provident voluptatem blanditiis quae excepturi repudiandae sunt rem ipsam, magni voluptas ullam ab nulla vero exercitationem! Tempora, consequatur velit! Hic aut explicabo voluptates sed ipsum eos praesentium a inventore fuga mollitia nostrum, ducimus incidunt! Quos quo in rerum blanditiis perferendis!",
    LinkLive: "https://basem909.github.io/portfolio/",
    LinkSource: "https://github.com/",
  },
  {
    Title: "project name goes here",
    Technologies: ["HTML/CSS", "Ruby on rails", "Javascript"],
    Image: "assests/images/Rectangle213.png",
    Description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Itaque repudiandae tempora nisi minima non beatae aspernatur praesentium ipsa? Quia quidem debitis error tenetur, ea eos facere natus tempor neque ducimus doloribus assumenda aspernatur iusto soluta enim ataccusantium impedit ratione quasi perferendis cum hic esse ipsum sit!\n \n Atque corrupti unde impedit commodi voluptate cum inventore tenetur sequi accusantium fugiat consectetur provident voluptatem blanditiis quae excepturi repudiandae sunt rem ipsam, magni voluptas ullam ab nulla vero exercitationem! Tempora, consequatur velit! Hic aut explicabo voluptates sed ipsum eos praesentium a inventore fuga mollitia nostrum, ducimus incidunt! Quos quo in rerum blanditiis perferendis!",
    LinkLive: "https://basem909.github.io/portfolio/",
    LinkSource: "https://github.com/",
  },
  {
    Title: "project name goes here",
    Technologies: ["HTML/CSS", "Ruby on rails", "Javascript"],
    Image: "assests/images/Rectangle214.png",
    Description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Itaque repudiandae tempora nisi minima non beatae aspernatur praesentium ipsa? Quia quidem debitis error tenetur, ea eos facere natus tempor neque ducimus doloribus assumenda aspernatur iusto soluta enim ataccusantium impedit ratione quasi perferendis cum hic esse ipsum sit!\n \n Atque corrupti unde impedit commodi voluptate cum inventore tenetur sequi accusantium fugiat consectetur provident voluptatem blanditiis quae excepturi repudiandae sunt rem ipsam, magni voluptas ullam ab nulla vero exercitationem! Tempora, consequatur velit! Hic aut explicabo voluptates sed ipsum eos praesentium a inventore fuga mollitia nostrum, ducimus incidunt! Quos quo in rerum blanditiis perferendis!",
    LinkLive: "https://basem909.github.io/portfolio/",
    LinkSource: "https://github.com/",
  },
  {
    Title: "project name goes here",
    Technologies: ["HTML/CSS", "Ruby on rails", "Javascript"],
    Image: "assests/images/Rectangle215.png",
    Description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Itaque repudiandae tempora nisi minima non beatae aspernatur praesentium ipsa? Quia quidem debitis error tenetur, ea eos facere natus tempor neque ducimus doloribus assumenda aspernatur iusto soluta enim ataccusantium impedit ratione quasi perferendis cum hic esse ipsum sit!\n \n Atque corrupti unde impedit commodi voluptate cum inventore tenetur sequi accusantium fugiat consectetur provident voluptatem blanditiis quae excepturi repudiandae sunt rem ipsam, magni voluptas ullam ab nulla vero exercitationem! Tempora, consequatur velit! Hic aut explicabo voluptates sed ipsum eos praesentium a inventore fuga mollitia nostrum, ducimus incidunt! Quos quo in rerum blanditiis perferendis!",
    LinkLive: "https://basem909.github.io/portfolio/",
    LinkSource: "https://github.com/",
  },
];

// the project card layout
const projectSection = document.querySelector('.project')
const window1 = document.querySelector('.popup-window')
const container = document.querySelector('.pop-container');
const header1 = document.createElement('div');
const xButton = document.createElement('a');
const xImage = document.createElement('img');
xButton.setAttribute('href','#projects')
xButton.appendChild(xImage);
header1.appendChild(xButton);
header1.setAttribute('id','header12')
container.appendChild(header1);
xImage.setAttribute('src','assests/images/Union.svg')
const head = document.createElement('h3')
head.textContent = 'Project name goes here'
container.appendChild(head)
const list = document.createElement('ul')
const li1 = document.createElement('li')
const li2 = document.createElement("li");
const li3 = document.createElement("li");
list.appendChild(li1)
list.appendChild(li2);
list.appendChild(li3)
container.appendChild(list)
li1.textContent='HTML/CSS'
li2.textContent = "Rubi on rails";
li3.textContent = "Javascript";
const imgContainer = document.createElement('div')
const imgBig = document.createElement('img')
const  imgSmall1 = document.createElement('img')
const imgSmall2 = document.createElement("img");
const imgSmall3 = document.createElement("img");
const imgSmall4 = document.createElement("img");
imgBig.setAttribute('src', 'assests/images/Rectangle21.png');
imgSmall1.setAttribute("src", "assests/images/Rectangle21.png");
imgSmall2.setAttribute("src", "assests/images/Rectangle21.png");
imgSmall3.setAttribute("src", "assests/images/Rectangle21.png");
imgSmall4.setAttribute("src", "assests/images/Rectangle21.png");
imgContainer.appendChild(imgBig);
imgContainer.appendChild(imgSmall1);
imgContainer.appendChild(imgSmall2);
imgContainer.appendChild(imgSmall3);
imgContainer.appendChild(imgSmall4);
container.appendChild(imgContainer)
const popParagraph = document.createElement('p')
popParagraph.textContent = 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Itaque repudiandae tempora nisi minima non beatae aspernatur praesentium ipsa? Quia quidem debitis error tenetur, ea eos facere natus tempor neque ducimus doloribus assumenda aspernatur iusto soluta enim ataccusantium impedit ratione quasi perferendis cum hic esse ipsum sit! Atque corrupti unde impedit commodi voluptate cum inventore tenetur sequi accusantium fugiat consectetur provident voluptatem blanditiis quae excepturi repudiandae sunt rem ipsam, magni voluptas ullam ab nulla vero exercitationem! Tempora, consequatur velit! Hic aut explicabo voluptates sed ipsum eos praesentium a inventore fuga mollitia nostrum, ducimus incidunt! Quos quo in rerum blanditiis perferendis!'
container.appendChild(popParagraph)
const btnBox = document.createElement('div')
const liveBtn = document.createElement('button')
const sourceBtn = document.createElement('button')
liveBtn.textContent = 'See live'
sourceBtn.textContent = 'See source'
btnBox.appendChild(liveBtn)
btnBox.appendChild(sourceBtn)
container.appendChild(btnBox)
const footer = document.createElement('footer')
const seeNext = document.createElement('a')
const nextLink = document.createElement('img')
nextLink.setAttribute("src", "assests/images/arrow-right.svg");
seeNext.textContent = 'Next project'
seeNext.appendChild(nextLink)
seeNext.setAttribute('href',"#")
const seePrevious = document.createElement('a')
const previousLink = document.createElement('img')
seePrevious.textContent = 'Previous project'
previousLink.setAttribute("src", "assests/images/arrow-left.svg");
seePrevious.appendChild(previousLink);
seePrevious.style.flexDirection = 'row-reverse'
seePrevious.setAttribute('href','#')
footer.appendChild(seePrevious)
footer.appendChild(seeNext)
container.appendChild(footer)
container.classList.toggle('pop-project1')
header1.classList.toggle('pop-header')
xButton.classList.toggle('pop-close')
head.classList.toggle('pop-heading1')
head.setAttribute('id', 'heading1');
list.classList.toggle('pop-ulist1')
li1.classList.toggle('pop-li1')
li2.classList.toggle('pop-li1');
li3.classList.toggle('pop-li1');
imgContainer.classList.toggle('pop-image1')
imgBig.classList.toggle('pop-big')
imgSmall1.classList.toggle('pop-small')
imgSmall2.classList.toggle('pop-small');
imgSmall3.classList.toggle('pop-small');
imgSmall4.classList.toggle('pop-small');
popParagraph.classList.toggle('pop-paragraph1');
btnBox.classList.toggle('btn-box')
liveBtn.classList.toggle('pop-button')
sourceBtn.classList.toggle('pop-button')
sourceBtn.setAttribute("id", "pop-button2");
footer.classList.toggle('footer-pop')
seeNext.classList.toggle('link-pop')
seePrevious.classList.toggle('link-pop')

//the pop up function
const btn1 = document.getElementById('btn');
const btn11 = document.getElementById('btn1')
const btn2 = document.getElementById("btn2-1");
const btn22 = document.getElementById("btn2-2");
const btn3 = document.getElementById("btn3-1");
const btn33 = document.getElementById("btn3-2");
const btn4 = document.getElementById("btn4-1");
const btn44 = document.getElementById("btn4-2");
const btn5 = document.getElementById("btn5-1");
const btn55 = document.getElementById("btn5-2");
const btn6 = document.getElementById("btn6-1");
const btn66 = document.getElementById("btn6-2");

function card(no) {
  head.textContent = popUp[no].Title;
  li1.textContent = popUp[no].Technologies[0];
  li2.textContent = popUp[no].Technologies[1];
  li3.textContent = popUp[no].Technologies[2];
  imgBig.setAttribute("src", popUp[no].Image);
  imgSmall1.setAttribute("src", popUp[no].Image);
  imgSmall2.setAttribute("src", popUp[no].Image);
  imgSmall3.setAttribute("src", popUp[no].Image);
  imgSmall4.setAttribute("src", popUp[no].Image);
  popParagraph.textContent = popUp[no].Description;
}
xButton.addEventListener('click', () =>{
  window1.style.display = "none";
  projectSection.style.display = "grid";
})

btn1.addEventListener('click',() => {
window1.style.display = 'block'
projectSection.style.display = 'none'
card(0);})

btn11.addEventListener('click',() => {
window1.style.display = 'block';
projectSection.style.display = 'none';
card(0);
})
btn2.addEventListener('click',() => {
window1.style.display = 'block';
projectSection.style.display = 'none';
card(1);
})
btn22.addEventListener("click", () => {
  window1.style.display = "block";
  projectSection.style.display = "none";
  card(1);
});
btn3.addEventListener("click", () => {
  window1.style.display = "block";
  projectSection.style.display = "none";
  card(2);
});
btn33.addEventListener("click", () => {
  window1.style.display = "block";
  projectSection.style.display = "none";
  card(2);
});
btn4.addEventListener("click", () => {
  window1.style.display = "block";
  projectSection.style.display = "none";
  card(3);
});
btn44.addEventListener("click", () => {
  window1.style.display = "block";
  projectSection.style.display = "none";
  card(3);
});
btn5.addEventListener("click", () => {
  window1.style.display = "block";
  projectSection.style.display = "none";
  card(4);
});
btn55.addEventListener("click", () => {
  window1.style.display = "block";
  projectSection.style.display = "none";
  card(4);
});
btn6.addEventListener("click", () => {
  window1.style.display = "block";
  projectSection.style.display = "none";
  card(5);
});
btn66.addEventListener("click", () => {
  window1.style.display = "block";
  projectSection.style.display = "none";
  card(5);
});