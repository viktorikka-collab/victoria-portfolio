// Все проекты находятся в этом списке. Первый файл media становится обложкой.
const projects = [
  { folder:"marketplace", title:"Женский свитшот Saint-Petersburg", category:"Дизайн маркетплейсов", description:"Дизайн карточек товара и rich-контента для маркетплейса.", media:["images/sweatshirt-cover.png","images/sweatshirt-slide-2.png","images/sweatshirt-slide-3.png","images/sweatshirt-rich.png"], task:"Создать визуальную подачу женского свитшота для маркетплейса.", result:"Главная карточка товара, информационные слайды, визуализация образов и rich-контент." },
  { folder:"marketplace", title:"Фен — дизайн карточек для маркетплейса", category:"Дизайн маркетплейсов", description:"Серия карточек товара для фена: главный слайд, демонстрация использования, детали и характеристики продукта.", media:["images/hairdryer-cover.png","images/hairdryer-slide-2.png","images/hairdryer-slide-3.png","images/hairdryer-slide-4.png"], task:"Создать современную визуальную подачу фена для карточки товара на маркетплейсе.", result:"Главный продающий слайд, демонстрация товара в использовании, визуализация деталей и информационные карточки с характеристиками." },
  { folder:"marketplace", title:"Игровые наушники Phantom", category:"Дизайн маркетплейсов", description:"Яркая карточка товара для игровой электроники с акцентом на характеристики, атмосферу и визуальную подачу продукта.", media:["images/headphones-cover.png"] },
  { folder:"marketplace", title:"Настольная лампа", category:"Дизайн маркетплейсов", description:"Минималистичная карточка товара с акцентом на форму изделия, характеристики и мягкую эстетичную подачу.", media:["images/lamp-cover.png"] },
  { folder:"marketplace", title:"Средство для купания 3 в 1 для мужчин", category:"Дизайн маркетплейсов", description:"Чистая продуктовая инфографика для мужского уходового средства с акцентом на свойства и объём.", media:["images/bodywash-cover.png"] },
  { folder:"marketplace", title:"Хлебцы Fitstart", category:"Дизайн маркетплейсов", description:"Яркий дизайн карточки товара для продуктовой категории с акцентом на вкус, низкую калорийность и натуральные ингредиенты.", media:["images/fitstart-cover.png"] },
  { folder:"business", title:"Меню для bubble tea кафе «Сочные пузырики»", category:"Дизайн для бизнеса", description:"Дизайн меню для кафе с лёгкой азиатской стилистикой, пастельной палитрой и дружелюбной визуальной подачей.", media:["images/bubbletea-menu-cover.png","images/bubbletea-menu-full.png"], task:"Создать яркое и понятное меню bubble tea для кафе с лёгким азиатским настроением и дружелюбной визуальной подачей.", result:"Визуальная концепция, композиция меню, оформление категорий напитков, иллюстративные элементы и блок «Собери свой бабл».", coverFit:"contain" },
  { folder:"business", title:"Золотые голоса — визуальное оформление концерта", category:"Дизайн для мероприятий · AI-видео", description:"Комплексное визуальное оформление музыкального события: афиша, билет, сценическая анимация и сопутствующие материалы в единой стилистике.", media:["images/soulmusic-poster.png","images/soulmusic-ticket.png","images/soulmusic-animation.mp4","images/soulmusic-thankyou.png","images/soulmusic-diploma.png"], task:"Создать единое визуальное оформление для музыкального события, чтобы все материалы выглядели целостно и поддерживали атмосферу концерта.", result:"Афиша, билет, анимация для заднего экрана сцены, благодарственное письмо и диплом в единой стилистике." },
  { folder:"ai-cartoons", title:"Свадебный AI-мультфильм для молодожёнов", category:"AI-мультфильмы", description:"Персональный сюжетный AI-мультфильм, созданный в подарок молодожёнам.", media:["images/wedding-cartoon-cover.png","images/wedding-cartoon.mp4"], task:"Создать персональный свадебный мультфильм для молодожёнов с индивидуальной сюжетной подачей.", result:"Визуальная концепция, сцены, AI-генерация, анимация и финальный монтаж ролика.", coverFit:"contain" }
];

// Шесть папок рабочего пространства.
const folders = [
  {id:"marketplace",title:"Маркетплейсы",description:"Карточки товаров, инфографика и визуальная подача."},
  {id:"social",title:"Дизайн соцсетей",description:"Посты, Stories, карусели, обложки и оформление."},
  {id:"ai-visual",title:"AI-визуал",description:"AI-фотосессии, образы, товары и визуальные сцены."},
  {id:"ai-video",title:"AI-видео",description:"Короткие ролики, Reels, анимация и видеосцены."},
  {id:"ai-cartoons",title:"AI-мультфильмы",description:"Персональные истории, мультфильмы и сюжетные ролики."},
  {id:"business",title:"Дизайн для бизнеса",description:"Меню, афиши, билеты и цифровые материалы."}
];

const folderGrid=document.querySelector("#folder-grid");
const folderWindow=document.querySelector("#folder-window");
const folderWindowContent=document.querySelector("#folder-window-content");
const infoWindow=document.querySelector("#info-window");
const infoWindowContent=document.querySelector("#info-window-content");
const caseViewer=document.querySelector("#case-viewer");
const caseContent=document.querySelector("#case-content");
const casePanel=caseViewer.querySelector(".case-panel");
let lastFolderTrigger=null;
let lastInfoTrigger=null;
let lastProjectTrigger=null;

const projectWord=count=>{
  if(count%10===1&&count%100!==11)return "проект";
  if([2,3,4].includes(count%10)&&![12,13,14].includes(count%100))return "проекта";
  return "проектов";
};
const projectsFor=id=>projects.map((project,index)=>({project,index})).filter(item=>item.project.folder===id);
const isVideo=path=>/\.mp4(?:$|\?)/i.test(path);
const updateBodyLock=()=>document.body.classList.toggle("has-overlay",document.querySelector(".is-open"));

function renderDesktop(){
  folderGrid.innerHTML=folders.map((folder,index)=>{
    const count=projectsFor(folder.id).length;
    return `<button class="folder-card" type="button" data-folder="${folder.id}" aria-label="Открыть папку ${folder.title}">
      <span class="folder-top"><span>0${index+1}</span><span>${count} ${projectWord(count)}</span></span>
      <span class="folder-symbol" aria-hidden="true"></span>
      <h3>${folder.title}</h3><p>${folder.description}</p><span class="folder-arrow" aria-hidden="true">↗</span>
    </button>`;
  }).join("");
}

function projectCard(project,index){
  const fit=project.coverFit==="contain"?" cover-contain":"";
  return `<article class="project-card" tabindex="0" role="button" data-project="${index}" aria-label="Открыть кейс: ${project.title}">
    <div class="project-cover${fit}" style="background-image:url('${project.media[0]}')"><span class="project-open">Открыть</span></div>
    <h3>${project.title}</h3><p>${project.category}</p>
  </article>`;
}

function openFolder(id,trigger){
  const folder=folders.find(item=>item.id===id);
  if(!folder)return;
  lastFolderTrigger=trigger;
  const entries=projectsFor(id);
  const content=entries.length
    ? `<div class="projects-grid">${entries.map(item=>projectCard(item.project,item.index)).join("")}</div>`
    : `<div class="folder-empty"><div><strong>Папка готова к новым работам</strong><p>Здесь появятся проекты направления «${folder.title}».</p></div></div>`;
  folderWindowContent.innerHTML=`<div class="folder-window-heading"><div><p class="eyebrow">Направление</p><h2 id="folder-window-title">${folder.title}</h2><p>${folder.description}</p></div><span class="folder-window-count">${entries.length} ${projectWord(entries.length)}</span></div>${content}`;
  folderWindow.classList.add("is-open");
  folderWindow.setAttribute("aria-hidden","false");
  folderWindow.querySelector("[data-close-folder]").focus();
  updateBodyLock();
}

function closeFolder(){
  folderWindow.classList.remove("is-open");
  folderWindow.setAttribute("aria-hidden","true");
  updateBodyLock();
  lastFolderTrigger?.focus();
}

const infoPanels={
  about:`<p class="eyebrow">Обо мне</p><h2 id="info-window-title">Идея, образ,<br>история.</h2><p>Я AI-креатор и визуальный дизайнер. Работаю на стыке дизайна, нейросетей и визуального сторителлинга — от одной карточки товара до цельного визуального мира.</p><ul class="tool-list"><li>Figma</li><li>ChatGPT</li><li>CapCut</li><li>Kling</li><li>Seedance</li><li>Syntx AI</li></ul>`,
  services:`<p class="eyebrow">Услуги</p><h2 id="info-window-title">Чем могу помочь</h2><div class="service-list"><div><span>Дизайн маркетплейсов</span><b>01</b></div><div><span>Дизайн социальных сетей</span><b>02</b></div><div><span>AI-фотосессии и визуалы</span><b>03</b></div><div><span>AI-видео и Reels</span><b>04</b></div><div><span>AI-мультфильмы</span><b>05</b></div><div><span>Визуальные проекты для бизнеса</span><b>06</b></div></div>`,
  contacts:`<p class="eyebrow">Контакты</p><h2 id="info-window-title">Давайте создадим<br>что-нибудь вместе</h2><p>Напишите мне удобным способом — обсудим задачу, формат и сроки.</p><div class="contact-list"><a href="https://t.me/VikkiMolll" target="_blank" rel="noopener noreferrer"><span>Telegram</span><strong>@VikkiMolll ↗</strong></a><a href="https://instagram.com/vika_molll" target="_blank" rel="noopener noreferrer"><span>Instagram</span><strong>@vika_molll ↗</strong></a></div>`
};

function openInfo(type,trigger){
  if(!infoPanels[type])return;
  lastInfoTrigger=trigger;
  infoWindowContent.innerHTML=infoPanels[type];
  infoWindow.classList.add("is-open");
  infoWindow.setAttribute("aria-hidden","false");
  infoWindow.querySelector("[data-close-info]").focus();
  updateBodyLock();
}
function closeInfo(){
  infoWindow.classList.remove("is-open");
  infoWindow.setAttribute("aria-hidden","true");
  updateBodyLock();
  lastInfoTrigger?.focus();
}

function openCase(index,trigger){
  const project=projects[index];
  if(!project)return;
  lastProjectTrigger=trigger;
  const details=project.task||project.result?`<div class="case-details">${project.task?`<div class="case-detail"><span>Задача</span><p>${project.task}</p></div>`:""}${project.result?`<div class="case-detail"><span>Что разработано</span><p>${project.result}</p></div>`:""}</div>`:"";
  const gallery=project.media.map((path,i)=>`<figure class="case-media">${isVideo(path)?`<video src="${path}" controls playsinline preload="metadata" aria-label="Видео проекта ${project.title}"></video>`:`<img src="${path}" alt="${project.title} — работа ${i+1}" loading="${i?"lazy":"eager"}">`}<figcaption class="case-caption"><span>${isVideo(path)?"Видео":"Изображение"}</span><span>${String(i+1).padStart(2,"0")} / ${String(project.media.length).padStart(2,"0")}</span></figcaption></figure>`).join("");
  caseContent.innerHTML=`<header class="case-hero"><p class="case-kicker">${project.category}</p><h2 id="case-title">${project.title}</h2><p>${project.description}</p></header>${details}<div class="case-gallery">${gallery}</div>`;
  caseViewer.classList.add("is-open");
  caseViewer.setAttribute("aria-hidden","false");
  casePanel.scrollTop=0;
  caseViewer.querySelector("[data-close-case]").focus();
  updateBodyLock();
}
function closeCase(){
  caseViewer.querySelectorAll("video").forEach(video=>video.pause());
  caseViewer.classList.remove("is-open");
  caseViewer.setAttribute("aria-hidden","true");
  updateBodyLock();
  lastProjectTrigger?.focus();
}

renderDesktop();
folderGrid.addEventListener("click",event=>{const card=event.target.closest("[data-folder]");if(card)openFolder(card.dataset.folder,card);});
folderWindow.addEventListener("click",event=>{
  if(event.target.closest("[data-close-folder]")){closeFolder();return;}
  const card=event.target.closest("[data-project]");if(card)openCase(Number(card.dataset.project),card);
});
folderWindow.addEventListener("keydown",event=>{const card=event.target.closest("[data-project]");if(card&&(event.key==="Enter"||event.key===" ")){event.preventDefault();openCase(Number(card.dataset.project),card);}});
document.querySelector(".dock").addEventListener("click",event=>{const button=event.target.closest("[data-info]");if(button)openInfo(button.dataset.info,button);});
infoWindow.addEventListener("click",event=>{if(event.target.closest("[data-close-info]"))closeInfo();});
caseViewer.addEventListener("click",event=>{if(event.target.closest("[data-close-case]"))closeCase();});
document.addEventListener("keydown",event=>{
  if(event.key!=="Escape")return;
  if(caseViewer.classList.contains("is-open"))closeCase();
  else if(infoWindow.classList.contains("is-open"))closeInfo();
  else if(folderWindow.classList.contains("is-open"))closeFolder();
});
