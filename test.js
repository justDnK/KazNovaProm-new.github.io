document.querySelector('.burger').addEventListener('click', function () {
    this.classList.toggle('active');
    document.querySelector('.nav').classList.toggle('open');

    document.querySelector('.minitext').classList.remove('none', 'sub');
})


// языки

// const select = document.querySelector('select');
// const allLang = ["ru", "en"];

// select.addEventListener('change', changeURLLanguage);

// const langArr = {
    

//     "text1" : {
//         "ru" : "Главная",
//         "en" : "Home",
//     },
    
//     "text2" : {
//         "ru" : "Департаменты",
//         "en" : "Departments",
//     },

//     "text3" : {
//         "ru" : "Главная",
//         "en" : "Home",
//     },

//     "text4" : {
//         "ru" : "Департаменты",
//         "en" : "Departments",
//     },

//     "text5" : {
//         "ru" : "Департаменты",
//         "en" : "Departments",
//     },

//     "text6" : {
//         "ru" : "Департамент железнодорожных перевозок",
//         "en" : "Railway Department",
//     },

//     "text7" : {
//         "ru" : "Департамент оптовой торговли",
//         "en" : "Wholesale Trade Department",
//     },

//     "text8" : {
//         "ru" : "Департамент производства электроэнергии",
//         "en" : "Electricity Production Department",
//     },

//     "text9" : {
//         "ru" : "Департамент по добыче полезных ископаемых",
//         "en" : "Mining Department",
//     },

//     "text10" : {
//         "ru" : "Департамент аксиальных двигателей",
//         "en" : "Axial Engines Department",
//     },

//     "text11" : {
//         "ru" : "Департамент консультационных услуг",
//         "en" : "Consulting Services Department",
//     },

//     "text12" : {
//         "ru" : "О компании",
//         "en" : "About the company",
//     },

//     "text13" : {
//         "ru" : "Департаменты",
//         "en" : "Departments",
//     },

//     "text14" : {
//         "ru" : "Контакты",
//         "en" : "Contacts",
//     },

//     "text15" : {
//         "ru" : "Инновационная промышленность - наше будущее!",
//         "en" : "Innovative industry is our future!",
//     },

//     "text16" : {
//         "ru" : "Главная",
//         "en" : "Home",
//     },

//     "text17" : {
//         "ru" : "Мы - ваш надежный партнер в мире полезных ископаемых, топлива, металлов, источников энергии и перевозок. Воплотите свои амбиции в жизнь, доверившись нашему опыту и профессионализму.",
//         "en" : "We are your reliable partner in the world of minerals, fuels, metals, energy sources and transport. Bring your ambitions to life by trusting every experience and benefit.",
//     },

//     "text18" : {
//         "ru" : "Полезные ископаемые: Мы предлагаем широкий ассортимент высококачественных полезных ископаемых, отвечающих самым строгим стандартам качества и безопасности. Наша продукция - ключ к вашему успеху в любой сфере промышленности.",
//         "en" : "Minerals: We offer a wide range of high quality minerals that meet the strictest quality and safety standards. Our products are the key to your success in any industry.",
//     },

//     "text19" : {
//         "ru" : "",
//         "en" : "",
//     },
// }

// function changeURLLanguage () {
//     let lang = select.value;
//     location.href = window.location.pathname + '#' + lang;
//     location.reload();
// }

// function changeLanguage() {
//     let hash = window.location.hash;

//     hash = hash.substr(1);
//     console.log(hash);

//     if(!allLang.includes(hash)) {
//         location.href = window.location.pathname + '#ru';
//         location.reload();
//     }

//     select.value = hash;

//     for(let key in langArr) {
//         let elem = document.querySelector('.lng-' + key);
//         if(elem) {
//             elem.innerHTML = langArr[key][hash];
//         }
//     }

// }

// changeLanguage();