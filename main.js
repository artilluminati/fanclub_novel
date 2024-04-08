// Образец объекта с данными персонажей
const charactersData = {
    none: { name: '', image: 'none.png', animation: 'fadeIn',},
    egor: {
        name: 'Егор Шамро',
        image: 'egor.jpg',
        animation: 'fadeIn', // CSS класс для анимации появления
    },
    drezdmuzhik: {
        name: 'Мужик Быдлан',
        image: 'drezdm.webp',
        animation: 'fadeIn',
    },
    rishat: {
        name: 'Ришат',
        image: 'rishat.jpg',
        animation: 'fadeIn',
    },
    igor: {
        name: 'Игорь Емцоу',
        image: 'igor.jpg',
        animation: 'fadeIn',
    },
    danya: {
        name: 'Даня Кучер',
        image: 'danya.jpg',
        animation: 'fadeIn',
    },
    dafuk: {
        name: 'Даня Кравец',
        image: 'dafuk.jpg',
        animation: 'fadeIn',
    },
    bosinn: {
        name: 'Бо Синн',
        image: 'bosinn.webp',
        animation: 'fadeIn',
    },
    artemiy: {
        name: 'Артемий',
        image: 'artemiy.jpg',
        animation: 'fadeIn',
    },
    denis: {
        name: 'Денис',
        image: 'denis.jpg',
        animation: 'fadeIn',
    },
    dima: {
        name: 'Дима',
        image: 'dima.jpg',
        animation: 'fadeIn',
    }
    // Добавьте данные для других персонажей по аналогии
};

// Образец объекта с репликами
const dialogues = [
    {title : "Начало", bg : 'none.png'},
    { text: 'В городе Дрездене, среди узких улочек и старинных зданий, жил обычный парень по имени Егор Шамро.' , characters: ['egor'], bg : 'dresden.jpeg' },
    { text: 'После того как он был вынужден покинуть родной город Одессу и переехать в Германию, его жизнь стала заполнена странными приключениями и необычными встречами.' , characters: ['egor'], bg : 'dresden.jpeg' },
    { text: 'Однажды, решив отправиться в магазин за новыми инновационными кроссовками с вентиляторами, Егор не подозревал, каким образом это поход за обувью изменит его день.' , characters: ['egor'], bg : 'dresden.jpeg' },
    { text: 'По пути к магазину он встретил странного мужчину, который неистово кричал на него' , characters: ['egor', 'drezdmuzhik'], bg : 'dresden.jpeg' },
    { text: 'Не смутившись, Егор решил разрулить ситуацию старой доброй лещиной и карасем.' , characters: ['egor', 'drezdmuzhik'], bg : 'dresden.jpeg' },
    { text: 'Мужчина, немного ошарашенный необычным ответом, успокоился, и Егор мог продолжить свою миссию необычных кроссовок.' , characters: ['egor', 'drezdmuzhik'], bg : 'dresden.jpeg' },
    { text: 'Наконец, достигнув станции, Егор сел на поезд в Берлин, где, как гласят легенды, можно было найти самые инновационные кроссовки с вентиляторами. Путь был долгим, и Егор успел перелопатить все свои мысли о прошлом и будущем, оставив за спиной волнующий Дрезденский день.' , characters: ['egor'], bg : 'poezd.jpg' },

    {title : "Встреча в Берлине", bg : 'none.png'},

    { text: 'Егор сидел в поезде, погруженный в музыку, смотря в окно и мечтая о новых кроссовках.' , characters: ['egor'], bg : 'poezd2.jpg' },
    { text: 'Внезапно, в тени мимо окна мелькнул силуэт Великой Обезьяны Альбиноса - истории, рассказы о которой часто ходили среди участников Фанклуба Кулачков.' , characters: ['egor'], bg : 'poezd22.jpg' },
    { text: 'Егор вздрогнул, но решил, что все это всего лишь фантазии его друзей в группе.' , characters: ['egor'], bg : 'poezd22.jpg' },
    { text: 'По прибытии в Берлин, Егор вышел на перрон и невероятно удивился увидев там Ришата, еще одного сторонника Кулачков из далекого Казани. Они обнялись, обмениваясь новостями и шутками.' , characters: ['egor', 'rishat'], bg : 'berlin.jpg' },
    { speaker: 'Егор', text: '"Что ты здесь делаешь, Ришат?"' , characters: ['egor', 'rishat'], bg : 'berlin.jpg' },
    { speaker: 'Ришат', text: '"Я пристально наблюдаю за всеми вами"' , characters: ['egor', 'rishat'], bg : 'berlin.jpg' },
    { speaker: 'Ришат', text: '"Что ж, мне пора бежать на самолёт!"' , characters: ['egor', 'rishat'], bg : 'berlin.jpg' },
    { text: 'Произнес Ришат с загадочным видом.' , characters: ['egor', 'rishat'], bg : 'berlin.jpg' },
    {  text: 'Оставшись один, Егор направился к Великому Магазину в центре Берлина.' , characters: ['egor'], bg : 'berlin.jpg' },
    {  text: 'Под ослепительными огнями города он шагал, полный решимости добраться до своей цели - новых кроссовок с вентиляторами.' , characters: ['egor'], bg : 'berlin.jpg' },

    {title : "Танцы с судьбой", bg : 'none.png'},

    {text: 'Пока Егор примерял новые кроссовки с вентиляторами в Берлине, в Киберспейсе, Даня Кравец и Игорь наслаждались очередным тиктоком Бо Синна.' , characters: ['igor' , 'danya', 'dafuk'], bg : 'cyberspace.jpg' },
    {text: 'Но внезапно из ниоткуда появился сам Бо Синн. Его крутость и мастерство поразили всех вокруг, а когда он подошел к Игорю, Кравцу и Кучеру, их удивление было несказанным.' , characters: ['igor' , 'danya', 'dafuk', 'bosinn'], bg : 'cyberspace.jpg' },
    {speaker: 'Кравец', text: '"Ебать, это же Бо Синн!!"' , characters: ['igor' , 'danya', 'dafuk', 'bosinn'], bg : 'cyberspace.jpg' },


    {text: 'Параллельно в Казани, Артемий погружен в чтение канала "Теория Заговора" в телеграмме. ' , characters: ['artemiy'], bg : 'zagovor.jpg' },
    {text: 'Последний пост о печати с жабкой на хинкали в Грузии и действиях мирового правительства внушал недовольство и волнение.' , characters: ['artemiy'], bg : 'zagovor.jpg' },

    {text: 'В то время как остальные участники группы были заняты своими необычными встречами, Егор, примерив новые кроссовки, ощутил, как они сидят идеально на его ногах. ' , characters: ['egor'], bg : 'berlin.jpg' },
    {text: 'Стильные и ультра-крутые кроссовки имели удивительную особенность - встроенный вентилятор, позволяющий владельцу парить в воздухе на небольшой высоте. ' , characters: ['egor'], bg : 'berlin.jpg' },
    {text: 'Егор снял видео, демонстрируя возможности своих новых кроссовок, и отправил его во Фанклуб. ' , characters: ['egor'], bg : 'berlin.jpg' },

    {title : "Паутина заговоров", bg : 'none.png'},

    {text: 'После неожиданного объявления Бо Синна о Великой Обезьяне Альбиносе и ее зловещих планах порабощения человечества с помощью волшебных хинкалей с печатью жабки, Игорь, Даня Кравец и Даня Кучер остались в шоке.' , characters: ['igor', 'danya', 'dafuk', 'bosinn'], bg : 'cyberspace.jpg' },
    {text: 'Бо Синн сообщил, что начало порабощения запланировано в городе Батуми, куда уже направляется сама Великая Обезьяна Альбинос.' , characters: ['igor', 'danya', 'dafuk', 'bosinn'], bg : 'cyberspace.jpg' },
    {text: 'Все участники Фанклуба были призваны срочно собраться там.' , characters: ['igor', 'danya', 'dafuk', 'bosinn'], bg : 'cyberspace.jpg' },
    {text: 'После этого друзяьм из Одессы пришло видео от Егора с его новыми крутыми кроссовками с вентиляторами. Просмотрев его, они заметили трудноразличимую печать с жабкой на краю кросовка, но тогда было уже слишком поздно.' , characters: ['igor', 'danya', 'dafuk'], bg : 'cyberspace.jpg' },
    {text: 'Егор уже против своего желания улетел в неизвестном направлении на своих волшебных кроссовках с вентиляторами, оставшись без связи.' , characters: ['egor'], bg : 'berlin.jpg' },
    {text: 'В это время Денис, который долго готовился к такому моменту, использовав все свои навыки заработанных в Москве, где он зарабатывал деньги, чтобы купить сверхбыстрый частный самолет для Фанклуба, взял на борт всех участников и отправился в путь.' , characters: ['denis'], bg : 'msocow.jpg' },
    {text: 'Артемий, в то время как Денис собирал Фанклубовцев, повышал свои навыки по управлению стаями коней, а Дима - медведями.' , characters: ['artemiy', 'dima'], bg : 'kon.jpeg' },
    {text: 'Собрав всех, включая друзей из Одессы, Денис с готовностью духа направился в Батуми, где их ждала Великая Битва с Великой Обезьяной Альбиносом.' , characters: ['artemiy', 'denis', 'dima', 'igor', 'egor', 'danya', 'dafuk'], bg : 'batumi.jpeg' },

    {title : "Пока что конец...", bg : 'none.png'},
    {title : "Посвящается Егору", bg : 'none.png'},
];

// Объект с текущим шагом
const curStep = { step: 0 };

charactersTemplate = (image, animation) => { 
    return `<img src="images/${image}" class="character ${animation}">`;
}

function main() {
    const charactersElement = document.getElementById('characters');
    const speakerNameElement = document.getElementById('speakerName');
    const textElement = document.getElementById('text');
    const titleElement = document.getElementById('title');
    const mainElement = document.getElementById('main');

    // Обработка текущего шага
    const currentDialogue = dialogues[curStep.step];
    try {
        if (currentDialogue.speaker) {
            speakerNameElement.textContent = currentDialogue.speaker;
        } else {
            speakerNameElement.textContent = '';
        }
        textElement.textContent = currentDialogue.text;
    } catch (error) {
        speakerNameElement.textContent = '';
    }
    
    // Показ всех персонажей, указанных в поле characters
    charactersElement.innerHTML = ''; // Очистить текущих персонажей
    if (currentDialogue.title) {
        titleElement.innerHTML = currentDialogue.title;
        titleElement.style.display = 'block';
        mainElement.style.background = `rgba(0,0,0,0)`;
    }
    else {
        currentDialogue.title = null;
        titleElement.innerHTML = '';
        titleElement.style.display = 'none';
        currentDialogue.characters.forEach((characterName, i) => {
            const character = charactersData[characterName];
            const newCharacter = charactersTemplate(character.image, character.animation);
            charactersElement.innerHTML+=newCharacter;
        });

        mainElement.style.background = `url(images/${currentDialogue.bg}) `;
    }

    // Изменение фона на значение bg из текущего диалога
}

nextStep = () => {
    curStep.step++;
    if (curStep.step >= dialogues.length - 1) {
        curStep.step = dialogues.length - 1;
    }
    main();
}

prevStep = () => {
    curStep.step-=1;
    if (curStep.step <= 0) {
        curStep.step = 0;
    }
    main();
}

saveGame = () => {
    localStorage.setItem('curStep', curStep.step);
}

loadGame = () => {
    curStep.step = localStorage.getItem('curStep');
    main();
}


// Вызов функции main для инициализации
main();

document.addEventListener('keydown', function(event) {
    if ((event.key === 'ArrowRight') | (event.key === 'Enter')) {
        nextStep();
    }
    if (event.key === 'ArrowLeft') {
        prevStep();
    }
});