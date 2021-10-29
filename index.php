<!DOCTYPE html>
<html lang="ru">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Карта желаний</title>
    <!-- Стили -->
    <link rel="stylesheet" type="text/css" href="assets/css/style.css">
    <link rel="stylesheet" href="assets/css/swiper-bundle.min.css" />
    <!-- Шрифты -->
    <link rel="stylesheet" href="assets/fonts/GillSans/stylesheet.css">
    <link rel="stylesheet" href="assets/fonts/Caravan/stylesheet.css">
    <!-- Скрипты -->
    <!-- <script src="assets/jquery.min.js" defer></script> -->
    <!-- <script src="assets/js/script.js" defer></script> -->
</head>
<body>
    <header class="header">
        <div class="container">
            <div class="header-menu"></div>
        </div>
    </header>
    <!-- /.header -->
    <section class="info">
        <div class="container">
            <h1 class="info-title">Твоя Карта Желаний</h1>
            <div class="info-text">
                Добро пожаловать в конструктор твоей Индивидуальной Карты Желаний - это магическое пространство, в котором возможно
                ВСЁ!<br>
                Для того, чтобы твоя Карта сработала для тебя и помогла исполнить твои мечты, необходимо следовать простым правилам
                при
                ее создании:
            </div>
            <!-- /.info-text -->
            <!-- <div class="info-description">
                1 - Найди для себя местечко, в котором тебя никто не побеспокоит и внимательно прислушайся к себе: чего я
                действительно
                хочу? Открой тетрадку или
                заметки в телефоне и выпиши 10-12 своих (НЕ ЧУЖИХ!) желаний по каждой из 8-ми перечисленных сфер (Здоровье и
                Красота,
                Любовь и Семья, Бизнес
                и Масштаб, Деньги и Активы, Хобби и Творчество, Друзья и Окружение, Свобода и Радость, Духовность и Саморазвитие).
                Здесь
                не принципиально важно,
                в какую именно секцию ты добавишь свое желание - делай по собственным ощущениям<br>
                2 - Если ты точно знаешь, как выглядит твое желание - загрузи свою картинку в секцию Галереи «Мои фото» и перетащи
                ее
                оттуда на карту. Или же
                воспользуйся теми картинками, которые мы подобрали для тебя по каждой из сфер и перетащи на Карту из секции с
                соотствующим названием.<br>
                3 - Выбери в баре слева необходимый цвет Карты, Дизайн и Размер. Когда почувствуешь, что твоя карта готова - нажми
                кнопку «Сохранить на Мой
                Компьютер». Доступ к конструктору у тебя сохраяется на 14 дней<br>
                4 - Распечатай карту и проведи следующий Процесс Активации: сядь в уютном пространстве, где тебя никто не
                побеспокоит
                (мягкие подушки, благовония,
                и чашка какао помогут настроится на нужный лад) - внимательно рассмотри каждую картинку на Карте, представив, что ты
                уже
                этим обладаешь - как бы
                ты себя почувствовала? Какие ощущения были бы в теле? Прислушайся и проживи их. И обязательно улыбайся в процессе
                :)<br>
                5 - Ты можешь повесить Карту на самое видное место или спрятать в самый темный угол - главное, чтобы каждый раз,
                смотря
                на нее, ты улыбалась :)
            </div> -->
            <!-- /.info-description -->
        </div>
        <!-- /.container -->
    </section>
    <!-- /.info -->
    <section class="wishcard">
        <div class="container">
            <h2 class="wishcard-title">Галерея</h2>
            <div class="tabs">
                <div class="tab-header">
                    <div class="tab-header__item js-tab-trigger active" data-tab="1">
                        <span class="tab-header__name">Мои фото</span>
                    </div>
                    <div class="tab-content js-tab-content active" data-tab="1">
                        
                        <form method="post" action="/save_reviews.php">
                            <h3>Отправить отзыв:</h3>
                            <div class="form-row">
                                <label>Ваше имя:</label>
                                <input type="text" name="name" required>
                            </div>
                            <div class="form-row">
                                <label>Комментарий:</label>
                                <input type="text" name="text" required>
                            </div>
                            <div class="form-row">
                                <label>Изображения:</label>
                                <div class="img-list" id="js-file-list"></div>
                                <input id="js-file" type="file" name="file[]" multiple accept=".jpg,.jpeg,.png,.gif">
                            </div>
                            <div class="form-submit">
                                <input type="submit" name="send" value="Отправить">
                            </div>
                        </form>

<<<<<<< HEAD:index.php
=======
                        <!-- <form method="post" action="/save_reviews.php">
                            <div class="form-row">
                                <div class="img-list" id="js-file-list"></div>
                                <img class="form-img" src="assets/image/icon/plus.png" alt="загрузка">
                                <input class="form-input" id="js-file" type="file" name="file[]" multiple accept=".jpg,.jpeg,.png">
                                <input class="form-submit" type="submit" name="send" value="Отправить">
                            </div>
                        </form> -->
>>>>>>> 888df74c7da27adf4dd13bd47e60f2b724aee0f1:index.html
                    </div>
                </div>
                <!-- tab-header -->
                <div class="tab-header">
                    <div class="tab-header__item js-tab-trigger" data-tab="2">
                        <span class="tab-header__name">Здоровье и Красота</span>
                    </div>
                    <div class="tab-content js-tab-content" data-tab="2">
                        <div class="swiper mySwiper">
                            <div class="swiper-wrapper">
                                <img class="swiper-slide" src="assets/image/slider/01.jpg" alt="слайд">
                                <img class="swiper-slide" src="assets/image/slider/02.jpg" alt="слайд">
                                <img class="swiper-slide" src="assets/image/slider/03.jpg" alt="слайд">
                                <img class="swiper-slide" src="assets/image/slider/04.jpg" alt="слайд">
                                <img class="swiper-slide" src="assets/image/slider/05.jpg" alt="слайд">
                                <img class="swiper-slide" src="assets/image/slider/06.jpg" alt="слайд">
                                <img class="swiper-slide" src="assets/image/slider/07.jpg" alt="слайд">
                                <img class="swiper-slide" src="assets/image/slider/08.jpg" alt="слайд">
                                <img class="swiper-slide" src="assets/image/slider/09.jpg" alt="слайд">
                            </div>
                            <div class="swiper-button swiper-button-next"></div>
                            <div class="swiper-button swiper-button-prev"></div>
                        </div>
                        <!-- swiper -->
                    </div>
                </div>
                <div class="tab-header">
                    <div class="tab-header__item js-tab-trigger" data-tab="3">
                        <span class="tab-header__name">Любовь и Семья</span>
                    </div>
                    <div class="tab-content js-tab-content" data-tab="3">
                        <div class="swiper mySwiper">
                            <div class="swiper-wrapper">
                                <img class="swiper-slide" src="assets/image/slider/08.jpg" alt="слайд">
                                <img class="swiper-slide" src="assets/image/slider/02.jpg" alt="слайд">
                                <img class="swiper-slide" src="assets/image/slider/07.jpg" alt="слайд">
                                <img class="swiper-slide" src="assets/image/slider/04.jpg" alt="слайд">
                                <img class="swiper-slide" src="assets/image/slider/05.jpg" alt="слайд">
                                <img class="swiper-slide" src="assets/image/slider/06.jpg" alt="слайд">
                                <img class="swiper-slide" src="assets/image/slider/03.jpg" alt="слайд">
                                <img class="swiper-slide" src="assets/image/slider/01.jpg" alt="слайд">
                                <img class="swiper-slide" src="assets/image/slider/09.jpg" alt="слайд">
                            </div>
                            <div class="swiper-button swiper-button-next"></div>
                            <div class="swiper-button swiper-button-prev"></div>
                        </div>
                        <!-- swiper -->
                    </div>
                </div>
                <div class="tab-header">
                    <div class="tab-header__item js-tab-trigger" data-tab="4">
                        <span class="tab-header__name">Бизнес и Масштаб</span>
                    </div>
                    <div class="tab-content js-tab-content" data-tab="4">
                        <div class="swiper mySwiper">
                            <div class="swiper-wrapper">
                                <img class="swiper-slide" src="assets/image/slider/07.jpg" alt="слайд">
                                <img class="swiper-slide" src="assets/image/slider/02.jpg" alt="слайд">
                                <img class="swiper-slide" src="assets/image/slider/03.jpg" alt="слайд">
                                <img class="swiper-slide" src="assets/image/slider/06.jpg" alt="слайд">
                                <img class="swiper-slide" src="assets/image/slider/05.jpg" alt="слайд">
                                <img class="swiper-slide" src="assets/image/slider/07.jpg" alt="слайд">
                                <img class="swiper-slide" src="assets/image/slider/01.jpg" alt="слайд">
                                <img class="swiper-slide" src="assets/image/slider/08.jpg" alt="слайд">
                                <img class="swiper-slide" src="assets/image/slider/09.jpg" alt="слайд">
                            </div>
                            <div class="swiper-button swiper-button-next"></div>
                            <div class="swiper-button swiper-button-prev"></div>
                        </div>
                        <!-- swiper -->
                    </div>
                </div>
                <div class="tab-header">
                    <div class="tab-header__item js-tab-trigger" data-tab="5">
                        <span class="tab-header__name">Деньги и Активы</span>
                    </div>
                    <div class="tab-content js-tab-content" data-tab="5">
                        <div class="swiper mySwiper">
                            <div class="swiper-wrapper">
                                <img class="swiper-slide" src="assets/image/slider/05.jpg" alt="слайд">
                                <img class="swiper-slide" src="assets/image/slider/02.jpg" alt="слайд">
                                <img class="swiper-slide" src="assets/image/slider/09.jpg" alt="слайд">
                                <img class="swiper-slide" src="assets/image/slider/04.jpg" alt="слайд">
                                <img class="swiper-slide" src="assets/image/slider/01.jpg" alt="слайд">
                                <img class="swiper-slide" src="assets/image/slider/06.jpg" alt="слайд">
                                <img class="swiper-slide" src="assets/image/slider/07.jpg" alt="слайд">
                                <img class="swiper-slide" src="assets/image/slider/08.jpg" alt="слайд">
                                <img class="swiper-slide" src="assets/image/slider/03.jpg" alt="слайд">
                            </div>
                            <div class="swiper-button swiper-button-next"></div>
                            <div class="swiper-button swiper-button-prev"></div>
                        </div>
                        <!-- swiper -->
                    </div>
                </div>
                <div class="tab-header">
                    <div class="tab-header__item js-tab-trigger" data-tab="6">
                        <span class="tab-header__name">Хобби и Творчество,</span>
                    </div>
                    <div class="tab-content js-tab-content" data-tab="6">
                        <div class="swiper mySwiper">
                            <div class="swiper-wrapper">
                                <img class="swiper-slide" src="assets/image/slider/04.jpg" alt="слайд">
                                <img class="swiper-slide" src="assets/image/slider/05.jpg" alt="слайд">
                                <img class="swiper-slide" src="assets/image/slider/03.jpg" alt="слайд">
                                <img class="swiper-slide" src="assets/image/slider/07.jpg" alt="слайд">
                                <img class="swiper-slide" src="assets/image/slider/02.jpg" alt="слайд">
                                <img class="swiper-slide" src="assets/image/slider/06.jpg" alt="слайд">
                                <img class="swiper-slide" src="assets/image/slider/07.jpg" alt="слайд">
                                <img class="swiper-slide" src="assets/image/slider/08.jpg" alt="слайд">
                                <img class="swiper-slide" src="assets/image/slider/09.jpg" alt="слайд">
                            </div>
                            <div class="swiper-button swiper-button-next"></div>
                            <div class="swiper-button swiper-button-prev"></div>
                        </div>
                        <!-- swiper -->
                    </div>
                </div>
                <div class="tab-header">
                    <div class="tab-header__item js-tab-trigger" data-tab="7">
                        <span class="tab-header__name">Друзья и Окружение</span>
                    </div>
                    <div class="tab-content js-tab-content" data-tab="7">
                        <div class="swiper mySwiper">
                            <div class="swiper-wrapper">
                                <img class="swiper-slide" src="assets/image/slider/03.jpg" alt="слайд">
                                <img class="swiper-slide" src="assets/image/slider/07.jpg" alt="слайд">
                                <img class="swiper-slide" src="assets/image/slider/03.jpg" alt="слайд">
                                <img class="swiper-slide" src="assets/image/slider/04.jpg" alt="слайд">
                                <img class="swiper-slide" src="assets/image/slider/05.jpg" alt="слайд">
                                <img class="swiper-slide" src="assets/image/slider/06.jpg" alt="слайд">
                                <img class="swiper-slide" src="assets/image/slider/02.jpg" alt="слайд">
                                <img class="swiper-slide" src="assets/image/slider/08.jpg" alt="слайд">
                                <img class="swiper-slide" src="assets/image/slider/01.jpg" alt="слайд">
                            </div>
                            <div class="swiper-button swiper-button-next"></div>
                            <div class="swiper-button swiper-button-prev"></div>
                        </div>
                        <!-- swiper -->
                    </div>
                </div>
                <div class="tab-header">
                    <div class="tab-header__item js-tab-trigger" data-tab="8">
                        <span class="tab-header__name">Свобода и Радость</span>
                    </div>
                    <div class="tab-content js-tab-content" data-tab="8">
                        <div class="swiper mySwiper">
                            <div class="swiper-wrapper">
                                <img class="swiper-slide" src="assets/image/slider/03.jpg" alt="слайд">
                                <img class="swiper-slide" src="assets/image/slider/06.jpg" alt="слайд">
                                <img class="swiper-slide" src="assets/image/slider/01.jpg" alt="слайд">
                                <img class="swiper-slide" src="assets/image/slider/04.jpg" alt="слайд">
                                <img class="swiper-slide" src="assets/image/slider/05.jpg" alt="слайд">
                                <img class="swiper-slide" src="assets/image/slider/02.jpg" alt="слайд">
                                <img class="swiper-slide" src="assets/image/slider/07.jpg" alt="слайд">
                                <img class="swiper-slide" src="assets/image/slider/08.jpg" alt="слайд">
                                <img class="swiper-slide" src="assets/image/slider/09.jpg" alt="слайд">
                            </div>
                            <div class="swiper-button swiper-button-next"></div>
                            <div class="swiper-button swiper-button-prev"></div>
                        </div>
                        <!-- swiper -->
                    </div>
                </div>
                <div class="tab-header">
                    <div class="tab-header__item js-tab-trigger" data-tab="9">
                        <span class="tab-header__name spirituality">Духовность и Саморазвитие</span>
                    </div>
                    <div class="tab-content js-tab-content" data-tab="9">
                        <div class="swiper mySwiper">
                            <div class="swiper-wrapper">
                                <img class="swiper-slide" src="assets/image/slider/02.jpg" alt="слайд">
                                <img class="swiper-slide" src="assets/image/slider/01.jpg" alt="слайд">
                                <img class="swiper-slide" src="assets/image/slider/07.jpg" alt="слайд">
                                <img class="swiper-slide" src="assets/image/slider/04.jpg" alt="слайд">
                                <img class="swiper-slide" src="assets/image/slider/05.jpg" alt="слайд">
                                <img class="swiper-slide" src="assets/image/slider/06.jpg" alt="слайд">
                                <img class="swiper-slide" src="assets/image/slider/03.jpg" alt="слайд">
                                <img class="swiper-slide" src="assets/image/slider/08.jpg" alt="слайд">
                                <img class="swiper-slide" src="assets/image/slider/09.jpg" alt="слайд">
                            </div>
                            <div class="swiper-button swiper-button-next"></div>
                            <div class="swiper-button swiper-button-prev"></div>
                        </div>
                        <!-- swiper -->
                    </div>
                </div>
            </div>
            <!-- /.tabs -->
        </div>
        <!-- /.container -->
    </section>
    <!-- /.wishcard -->

    <!-- Скрипты -->
    <script src="assets/jquery.min.js"></script>
    <script src="assets/js/swiper-bundle.min.js"></script>
<<<<<<< HEAD:index.php
=======
    <script src="assets/js/jquery.min.js"></script>
>>>>>>> 888df74c7da27adf4dd13bd47e60f2b724aee0f1:index.html
    <script src="assets/js/script.js"></script>
</body>
</html>