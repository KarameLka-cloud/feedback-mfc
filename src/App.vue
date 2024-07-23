<script setup>
import DepartmentsBlock from "./components/DepartmentsBlock.vue"

let departments = [
  {
    first_later: 'А',
    locations:
        [
          {
            location_name: 'Аларский район',
            streets: [
              {
                street_name: 'Аларь, ул. Советская, д. 43',
                id: 16221
              },
              {
                street_name: 'Аляты, ул. Ж. Зимина, д. 1',
                id: 16221
              },
              {
                street_name: 'Забитуй, ул. 70 Лет Октября, д. 24',
                id: 16221
              },
              {
                street_name: 'Иваническое, ул. Юбилейная, д. 7',
                id: 16221
              },
            ]
          },
          {
            location_name: 'Ангарск',
            streets: [
              {
                street_name: 'Ангарск, 84й квартал, дом 16 (Отдел №1)',
                id: 4318
              },
              {
                street_name: 'Ангарск, ул. Ворошилова, дом 65 (Отдел №2)',
                id: 4319
              },
            ]
          },
          {
            location_name: 'Ангарский район',
            streets: [
              {
                street_name: 'Мегет, кв. 1, д. 7',
                id: 4318
              },
              {
                street_name: 'Одинск, ул. Победы. д. 7',
                id: 4318
              },
              {
                street_name: 'Савватеевка, ул. Школьная, д. 48',
                id: 4318
              },
            ]
          },
        ]
  },

  {
    first_later: 'Б',
    locations:
        [
          {
            location_name: 'Балаганск',
            streets: [
              {
                street_name: 'Балаганск, ул.Кольцевая, д.61',
                id: 7799
              }
            ]
          },
          {
            location_name: 'Балаганский район',
            streets: [
              {
                street_name: 'Кумарейка, ул. Первомайская, д. 2',
                id: 7799
              }
            ]
          },
          {
            location_name: 'Баяндаевский район',
            streets: [
              {
                street_name: 'Загатуй, микрорайон 1, д. 41',
                id: 17455
              },
              {
                street_name: 'Хогот, ул. Трактовая, д.85Г',
                id: 17455
              }
            ]
          },
          {
            location_name: 'Баяндай',
            streets: [
              {
                street_name: 'Баяндай, ул. Некунде, дом 131',
                id: 4321
              }
            ]
          },
          {
            location_name: 'Бодайбо',
            streets: [
              {
                street_name: 'Бодайбо, ул.Урицкого, д.15',
                id: 7807
              }
            ]
          },
          {
            location_name: 'Бохан',
            streets: [
              {
                street_name: 'Бохан, ул. Колхозная, дом 7',
                id: 4322
              }
            ]
          },
          {
            location_name: 'Боханский район',
            streets: [
              {
                street_name: 'Казачье, ул. Мира, д. 10',
                id: 4322
              },
              {
                street_name: 'Каменка, ул. Школьная, д. 8',
                id: 4322
              },
              {
                street_name: 'Олонки, ул. Калинина, д. 5',
                id: 4322
              },
              {
                street_name: 'Тихоновка, ул. Ленина, д. 13',
                id: 4322
              },
              {
                street_name: 'Хохорск, ул. Ленина, д. 44',
                id: 4322
              }
            ]
          },
          {
            location_name: 'Братск',
            streets: [
              {
                street_name: 'Братск, пр-т Ленина, дом 37 (Отдел №1)',
                id: 4323
              },
              {
                street_name: 'Братск, ул. Баркова, дом 43 (Отдел №2)',
                id: 4324
              },
              {
                street_name: 'Братск, ул.Юбилейная, д.15 (Отдел №3)',
                id: 9623
              },
              {
                street_name: 'Братск, ул. Гайнулина, д.1 (Отдел №4)',
                id: 17167
              }
            ]
          },
          {
            location_name: 'Братский район',
            streets: [
              {
                street_name: 'Большеокинское, ул. Мира, д. 40А',
                id: 4323
              },
              {
                street_name: 'Калтук, ул. Ленина, д. 39Б',
                id: 4323
              },
              {
                street_name: 'Кежемский, ул. Первомайская, д. 6',
                id: 4323
              },
              {
                street_name: 'Ключи-Булак, ул. Ленина, д. 1',
                id: 4323
              },
              {
                street_name: 'Кобляково, ул. Наймушина, д. 12',
                id: 4323
              },
              {
                street_name: 'Покосное, ул. Сибирская, д. 16',
                id: 4323
              },
              {
                street_name: 'Прибрежный, пер. Школьный, д. 9',
                id: 4323
              },
              {
                street_name: 'Тангуй, ул. Мира, д. 24',
                id: 4323
              },
              {
                street_name: 'Турма, ул. Строительная, д. 12',
                id: 4323
              }
            ]
          }
        ]
  },

  {
    first_later: 'В',
    locations:
        [
          {
            location_name: 'Вихоревка',
            streets: [
              {
                street_name: 'Вихоревка, ул. Дзержинского, 66Б',
                id: 7795
              }
            ]
          }
        ]
  },

  {
    first_later: 'Е',
    locations:
        [
          {
            location_name: 'Еланцы',
            streets: [
              {
                street_name: 'Еланцы, ул. Кирова, 31',
                id: 9627
              }
            ]
          },
          {
            location_name: 'Ербогачен',
            streets: [
              {
                street_name: 'Ербогачен, ул. Чкалова, 11',
                id: 9622
              }
            ]
          }
        ]
  },

  {
    first_later: 'Ж',
    locations:
        [
          {
            location_name: 'Железногорск-Илимский',
            streets: [
              {
                street_name: 'Железногорск-Илимский, ул. Янгеля, д. 12',
                id: 7794
              }
            ]
          },
          {
            location_name: 'Жигалово',
            streets: [
              {
                street_name: 'Жигалово, ул. Партизанская, д. 71',
                id: 9620
              }
            ]
          }
        ]
  },

  {
    first_later: 'З',
    locations:
        [
          {
            location_name: 'Залари',
            streets: [
              {
                street_name: 'Залари, ул. Гагарина, дом 4',
                id: 4325
              }
            ]
          },
          {
            location_name: 'Заларинский район',
            streets: [
              {
                street_name: 'Бажир, ул. Юбилейная, д. 14',
                id: 4325
              },
              {
                street_name: 'Моисеевка, ул. Школьная, д. 2А',
                id: 4325
              },
              {
                street_name: 'Троицк, ул. Молодежная, д. 4А',
                id: 4325
              },
              {
                street_name: 'Тыреть, мкр. Солерудник, д. 9',
                id: 4325
              }
            ]
          },
          {
            location_name: 'Зима',
            streets: [
              {
                street_name: 'Зима, ул. Клименко, д. 37',
                id: 3937
              }
            ]
          },
          {
            location_name: 'Зиминский район',
            streets: [
              {
                street_name: 'Батама, ул. Ленина, д. 40',
                id: 3937
              },
              {
                street_name: 'Кимильтей, ул. Чкалова, д. 70А',
                id: 3937
              },
              {
                street_name: 'Центральный Хазан, ул. Мира, д. 57',
                id: 3937
              }
            ]
          }
        ]
  },

  {
    first_later: 'И',
    locations:
        [
          {
            location_name: 'Иркутск',
            streets: [
              {
                street_name: 'Иркутск, ул. Трактовая, дом 35 (Отдел №1)',
                id: 4326
              },
              {
                street_name: 'Иркутск, ул. Клары Цеткин, дом 12/1 (Отдел №3)',
                id: 4328
              },
              {
                street_name: 'Иркутск, ул. Советская, д.107 Б (Отдел №4)',
                id: 4327
              },
              {
                street_name: 'Иркутск, мкрн Юбилейный, дом 19/1 (Отдел №5)',
                id: 4331
              },
              {
                street_name: 'Иркутск, ул. Верхняя Набережная, д. 10 (Отдел №6)',
                id: 7797
              },
              {
                street_name: 'Иркутск, б. Рябикова, д. 22А (Отдел №7)',
                id: 9626
              },
              {
                street_name: 'Иркутск, ул. Советская, дом 58, лит. А (Отдел №8)',
                id: 15873
              },
              {
                street_name: 'Иркутск, ул. Рабочая, д.2А (Отдел №9)',
                id: 16748
              }
            ]
          },
          {
            location_name: 'Иркутский район',
            streets: [
              {
                street_name: 'Большая Речка, ул. Труда, д. 28',
                id: 16756
              },
              {
                street_name: 'Горохово, ул. Школьная, д. 15',
                id: 4326
              },
              {
                street_name: 'Дзержинск, ул. Центральная, д. 1А',
                id: 4326
              },
              {
                street_name: 'Карлук, ул. Гагарина, д. 4Б',
                id: 16754
              },
              {
                street_name: 'Листвянка, ул. Горького, д. 89',
                id: 4326
              },
              {
                street_name: 'Максимовщина, ул. Сибирская, д. 16А',
                id: 4326
              },
              {
                street_name: 'Малое Голоустное, ул. Мира, д. 25А',
                id: 4326
              },
              {
                street_name: 'Маркова, мкр. Березовый, д. 75',
                id: 4326
              },
              {
                street_name: 'Молодежный, Байкальский тракт, 12А, ТРЦ',
                id: 4326
              },
              {
                street_name: 'Никольск, ул. Черемуховая, д. 1А',
                id: 4326
              },
              {
                street_name: 'Оек, ул. Кирова, д. 91Г',
                id: 4326
              },
              {
                street_name: 'Пивовариха, ул. Дачная, д. 8',
                id: 4326
              },
              {
                street_name: 'Ревякина, пер. Школьный, д. 3',
                id: 4326
              },
              {
                street_name: 'Смоленщина, ул. Трудовая, д. 12',
                id: 4326
              },
              {
                street_name: 'Сосновый Бор, ул. Урожайная, д. 14',
                id: 4326
              },
              {
                street_name: 'Урик, ул. Лунина, д. 1',
                id: 4326
              },
              {
                street_name: 'Усть-Куда, ул. Геологическая, д. 4 Литера 2',
                id: 4326
              },
              {
                street_name: 'Хомутово, ул. Колхозная, д. 135',
                id: 4350
              },
              {
                street_name: 'Ширяева, ул. Специалистов, д. 1',
                id: 4326
              }
            ]
          }
        ]
  },

  {
    first_later: 'К',
    locations:
        [
          {
            location_name: 'Казачинско-Ленский район',
            streets: [
              {
                street_name: 'Казачинское, ул. Советская, д. 4',
                id: 9624
              },
              {
                street_name: 'Улькан, ул. Машурова, д. 7',
                id: 9624
              }
            ]
          },
          {
            location_name: 'Качуг',
            streets: [
              {
                street_name: 'Качуг, ул. Победы, дом 6',
                id: 9621
              }
            ]
          },
          {
            location_name: 'Качугский район',
            streets: [
              {
                street_name: 'Бирюлька, ул. Ленина, д. 41',
                id: 9621
              },
              {
                street_name: 'Манзурка, ул. Трактовая, д. 76',
                id: 9621
              }
            ]
          },
          {
            location_name: 'Киренск',
            streets: [
              {
                street_name: 'Киренск, ул. Красноармейская, 2А',
                id: 7808
              }
            ]
          },
          {
            location_name: 'Куйтун',
            streets: [
              {
                street_name: 'Куйтун, ул. Красного Октября, 18',
                id: 9619
              }
            ]
          },
          {
            location_name: 'Куйтунский район',
            streets: [
              {
                street_name: 'Барлук, ул. Ленина, д. 29А',
                id: 9619
              },
              {
                street_name: 'Каразей, ул. Мира, д. 58',
                id: 9619
              },
              {
                street_name: 'Карымск, ул. Набережная, д. 6',
                id: 9619
              },
              {
                street_name: 'Тулюшка, ул. Мира, д. 11',
                id: 9619
              },
              {
                street_name: 'Уян, ул. 1-ая Советская, д. 6',
                id: 9619
              }
            ]
          },
        ]
  },

  {
    first_later: 'М',
    locations:
        [
          {
            location_name: 'Магистральный',
            streets: [
              {
                street_name: 'Магистральный, ул. 17-го съезда ВЛКСМ, 70',
                id: 9624
              }
            ]
          },
          {
            location_name: 'Мама',
            streets: [
              {
                street_name: 'Мама, ул. Октябрьская, дом 23',
                id: 3881
              }
            ]
          }
        ]
  },

  {
    first_later: 'Н',
    locations:
        [
          {
            location_name: 'Нижнеилимский район',
            streets: [
              {
                street_name: 'Березняки, ул. Янгеля, д. 25',
                id: 16222
              },
              {
                street_name: 'Видим, ул. Нагорная, д. 1А',
                id: 16222
              },
              {
                street_name: 'Новая Игирма, 3-й квартал, дом 31',
                id: 16222
              },
              {
                street_name: 'Радищев, д. 2',
                id: 16222
              },
              {
                street_name: 'Речушка, ул. Пионерская, д. 19',
                id: 16222
              },
              {
                street_name: 'Рудногорск, ул. Первомайская, д. 6А',
                id: 16222
              },
              {
                street_name: 'Хребтовая, ул. Калинина, д. 1',
                id: 16222
              },
              {
                street_name: 'Шестаково, ул. Ленина, д. 20А',
                id: 16222
              },
              {
                street_name: 'Янгель, мкр. Космонавтов, д. 9А',
                id: 16222
              }
            ]
          },
          {
            location_name: 'Нижнеудинск',
            streets: [
              {
                street_name: 'Нижнеудинск, ул.Октябрьская, д.1-2',
                id: 7805
              }
            ]
          },
          {
            location_name: 'Нижнеудинский район',
            streets: [
              {
                street_name: 'Алзамай, ул. Первомайская, д. 119',
                id: 7805
              },
              {
                street_name: 'Алыгджер, ул. Советская, дом 2',
                id: 16209
              },
              {
                street_name: 'Атагай, ул. 1 мая, д. 9',
                id: 7805
              },
              {
                street_name: 'Верхняя Гутара, ул. Центральная, дом 11',
                id: 16208
              },
              {
                street_name: 'Замзор, ул. Рабочая, д. 5',
                id: 7805
              },
              {
                street_name: 'Катарбей, ул. Советская, д. 6',
                id: 7805
              },
              {
                street_name: 'Костино, ул. Новая, д. 31',
                id: 7805
              },
              {
                street_name: 'Ук, ул. 40 лет Победы, д. 7/1',
                id: 7805
              },
              {
                street_name: 'Худоеланское, ул. Московская, д. 45А',
                id: 7805
              },
              {
                street_name: 'Шеберта, ул. Трактовая, д. 2',
                id: 7805
              },
              {
                street_name: 'Шумский, ул. Заозерная, д. 2',
                id: 7805
              }
            ]
          },
          {
            location_name: 'Новонукутский',
            streets: [
              {
                street_name: 'Новонукутский, ул. Хангалова, д. 2А',
                id: 9615
              }
            ]
          },
          {
            location_name: 'Нукутский район',
            streets: [
              {
                street_name: 'Хадахан, ул. Административная, д. 2',
                id: 9615
              }
            ]
          }
        ]
  },

  {
    first_later: 'О',
    locations:
        [
          {
            location_name: 'Ольхонский район',
            streets: [
              {
                street_name: 'Бугульдейка, пер. Больничный, д. 7',
                id: 9627
              },
              {
                street_name: 'Хужир, ул. Байкальская, д. 12',
                id: 9627
              }
            ]
          },
          {
            location_name: 'Оса',
            streets: [
              {
                street_name: 'Оса, ул. Чапаева, д. 2В/2',
                id: 17336
              }
            ]
          },
          {
            location_name: 'Осинский район',
            streets: [
              {
                street_name: 'Бильчир, ул. Ленина, д. 24',
                id: 17336
              },
              {
                street_name: 'Ново-Ленино, ул. Ленина, д. 1',
                id: 17336
              },
              {
                street_name: 'Обуса, ул. 11 Комсомольцев, д. 6',
                id: 17336
              },
              {
                street_name: 'Приморский, ул. Гагарина, д. 25А',
                id: 17336
              },
              {
                street_name: 'Усть-Алтан, ул. Школьная, д. 21',
                id: 17336
              }
            ]
          }
        ]
  },

  {
    first_later: 'С',
    locations:
        [
          {
            location_name: 'Саянск',
            streets: [
              {
                street_name: 'Саянск, мкрн Строителей, дом 26',
                id: 3937
              }
            ]
          },
          {
            location_name: 'Свирск',
            streets: [
              {
                street_name: 'Свирск, ул. Молодежная, д. 1А',
                id: 7793
              }
            ]
          },
          {
            location_name: 'Слюдянка',
            streets: [
              {
                street_name: 'Слюдянка, ул. Магистральная, дом 2A',
                id: 3887
              }
            ]
          },
          {
            location_name: 'Слюдянский район',
            streets: [
              {
                street_name: 'Байкальск, мкр Южный, 1й квартал, дом 26',
                id: 3887
              },
              {
                street_name: 'Култук, пер. Безымянный, д. 2',
                id: 3887
              }
            ]
          }
        ]
  },

  {
    first_later: 'Т',
    locations:
        [
          {
            location_name: 'Тайшет',
            streets: [
              {
                street_name: 'Тайшет, ул. Гагарина, 115А',
                id: 7802
              }
            ]
          },
          {
            location_name: 'Тайшетский район',
            streets: [
              {
                street_name: 'Березовка, ул. 40 Лет Победы, д. 19',
                id: 7802
              },
              {
                street_name: 'Бирюсинск, ул. Парижской Коммуны, д. 7',
                id: 17457
              },
              {
                street_name: 'Джогино, ул. Больничная, д. 8',
                id: 7802
              },
              {
                street_name: 'Квиток, ул. Октябрьская, д. 10',
                id: 7802
              },
              {
                street_name: 'Нижняя Заимка, ул. Депутатская, д. 6',
                id: 7802
              },
              {
                street_name: 'Николаевка, ул. Первомайская, д. 14',
                id: 7802
              },
              {
                street_name: 'Новобирюсинский, ул. Ленина, д. 22',
                id: 7802
              },
              {
                street_name: 'Соляная, ул. Береговая, д. 4',
                id: 17334
              },
              {
                street_name: 'Тамтачет, ул. Гайнулина, д. 1А',
                id: 7802
              },
              {
                street_name: 'Шелехово, ул. Почтовая, д. 1',
                id: 7802
              },
              {
                street_name: 'Шиткино, ул. Кирова, д. 26',
                id: 7802
              },
              {
                street_name: 'Юрты, ул. Дружбы, д. 6',
                id: 7802
              }
            ]
          },
          {
            location_name: 'Тулун',
            streets: [
              {
                street_name: 'Тулун, ул.Ленина, д.83',
                id: 7798
              }
            ]
          },
          {
            location_name: 'Тулунский район',
            streets: [
              {
                street_name: 'Алгатуй, ул. Солнечная, д. 16',
                id: 7798
              },
              {
                street_name: 'Бадар, ул. Перфиловская, д. 1',
                id: 7798
              },
              {
                street_name: 'Будагово, ул. Ленина, д. 60',
                id: 17456
              },
              {
                street_name: 'Гадалей, ул. Сорокина, д. 54',
                id: 7798
              },
              {
                street_name: 'Гуран, ул. Бурлова, д.36',
                id: 7798
              },
              {
                street_name: 'Едогон, ул. Ленина, д. 66',
                id: 16557
              },
              {
                street_name: 'Икей, ул. Коммуны, д. 126',
                id: 7798
              },
              {
                street_name: 'Шерагул, ул. Ленина, д. 84',
                id: 7798
              },
            ]
          }
        ]
  },

  {
    first_later: 'У',
    locations:
        [
          {
            location_name: 'Усолье-Сибирское',
            streets: [
              {
                street_name: 'Усолье-Сибирское, пр-т Ленинский, д. 11/1',
                id: 16753
              }
            ]
          },
          {
            location_name: 'Усольский район',
            streets: [
              {
                street_name: 'Белореченский, д. 100В',
                id: 16753
              },
              {
                street_name: 'Большая Елань, ул. Победы, д. 2',
                id: 16753
              },
              {
                street_name: 'Железнодорожный, ул. Комсомольская, д. 28А',
                id: 16753
              },
              {
                street_name: 'Мишелевка, ул. Титова, д. 1А',
                id: 16753
              },
              {
                street_name: 'Новожилкино, ул. 1-ая Совхозная, д. 13',
                id: 16753
              },
              {
                street_name: 'Новомальтинск, кв. 2, д. 1',
                id: 16753
              },
              {
                street_name: 'Раздолье, ул. Мира, д. 27',
                id: 16753
              },
              {
                street_name: 'Сосновка, ул. Лесная, д. 1А',
                id: 16753
              },
              {
                street_name: 'Средний, ул. 3-я Степная, д. 1А',
                id: 16753
              },
              {
                street_name: 'Тайтурка, ул. Пеньковского, д. 8',
                id: 16753
              },
              {
                street_name: 'Тальяны, ул. Клубная, д. 2',
                id: 16753
              },
              {
                street_name: 'Тельма, ул. Крупской, д. 11',
                id: 16753
              }
            ]
          },
          {
            location_name: 'Усть-Илимск',
            streets: [
              {
                street_name: 'Усть-Илимск, проспект Мира, дом 9',
                id: 4329
              }
            ]
          },
          {
            location_name: 'Усть-Илимский район',
            streets: [
              {
                street_name: 'Железнодорожный, ул.Ленина, д.68',
                id: 16755
              },
              {
                street_name: 'Невон, ул. Кеульская, д. 9',
                id: 4329
              },
              {
                street_name: 'Седаново, ул. Кирова, д. 33',
                id: 4329
              },
              {
                street_name: 'Тубинский, ул. Таёжная, д. 5',
                id: 4329
              },
              {
                street_name: 'Эдучанка, ул. Ермака, д. 4',
                id: 4329
              },
            ]
          },
          {
            location_name: 'Усть-Кут',
            streets: [
              {
                street_name: 'Усть-Кут, ул. Хорошилова, д. 2А',
                id: 7796
              }
            ]
          },
          {
            location_name: 'Усть-Кутский район',
            streets: [
              {
                street_name: 'Верхнемарково, ул. 40 Лет Победы, д. 47',
                id: 7796
              },
              {
                street_name: 'Ния, ул. Тбилисская, д. 5',
                id: 7796
              },
              {
                street_name: 'Ручей, ул. Школьная, д. 3',
                id: 7796
              },
              {
                street_name: 'Янталь, ул. Еловая, строение 13',
                id: 7796
              },
            ]
          },
          {
            location_name: 'Усть-Ордынский',
            streets: [
              {
                street_name: 'Усть-Ордынский, ул. Ленина, дом 8',
                id: 3884
              }
            ]
          },
          {
            location_name: 'Усть-Уда',
            streets: [
              {
                street_name: 'Усть-Уда, ул. 50 лет Октября, д. 22А',
                id: 7806
              }
            ]
          },
          {
            location_name: 'Усть-Удинский район',
            streets: [
              {
                street_name: 'Молька, ул. Радищева, д. 25',
                id: 7806
              },
              {
                street_name: 'Новая Уда, ул. Юбилейная, д. 1',
                id: 7806
              },
            ]
          },
        ]
  },

  {
    first_later: 'Ч',
    locations:
        [
          {
            location_name: 'Черемхово',
            streets: [
              {
                street_name: 'Черемхово, ул. Некрасова, дом 17',
                id: 3886
              }
            ]
          },
          {
            location_name: 'Черемховский район',
            streets: [
              {
                street_name: 'Алехино, ул. Полевая, д. 4',
                id: 3886
              },
              {
                street_name: 'Бельск, ул. Иванова, д. 56',
                id: 3886
              },
              {
                street_name: 'Голуметь, ул. Калинина, д. 10',
                id: 16072
              },
              {
                street_name: 'Зерновое, ул. Иркутская, д. 10',
                id: 3886
              },
              {
                street_name: 'Михайловка, квартал 1, дом 5, строение 1',
                id: 16757
              },
              {
                street_name: 'Нижняя Иреть, ул. Советская, д. 37А',
                id: 3886
              },
              {
                street_name: 'Новогромово, ул. Советская, д. 15-1',
                id: 3886
              },
              {
                street_name: 'Парфеново, ул. Мира, д. 25',
                id: 3886
              },
              {
                street_name: 'Рысево, ул. Российская, д. 5',
                id: 3886
              }
            ]
          },
          {
            location_name: 'Чунский',
            streets: [
              {
                street_name: 'Чунский, ул. Свердлова, д. 12',
                id: 9625
              }
            ]
          },
          {
            location_name: 'Чунский район',
            streets: [
              {
                street_name: 'Лесогорск, ул. Комсомольская, д. 5',
                id: 9625
              }
            ]
          }
        ]
  },

  {
    first_later: 'Ш',
    locations:
        [
          {
            location_name: 'Шелехов',
            streets: [
              {
                street_name: 'Шелехов, 1 квартал, дом 10',
                id: 3887
              }
            ]
          },
          {
            location_name: 'Шелеховский район',
            streets: [
              {
                street_name: 'Большой Луг, ул. Широкая, 1Б',
                id: 17335
              }
            ]
          }
        ]
  },

  {
    first_later: 'Э',
    locations:
        [
          {
            location_name: 'Эхирит-Булагатский район',
            streets: [
              {
                street_name: 'Гаханы, ул. Гагарина, д. 6',
                id: 16556
              },
              {
                street_name: 'Свердлово, ул. Советская, д. 19',
                id: 16556
              },
              {
                street_name: 'Тугутуй, ул. Степная, д. 23',
                id: 16556
              },
              {
                street_name: 'Харат, ул. Ленина, д. 24',
                id: 16556
              }
            ]
          }
        ]
  },
]
</script>

<template>
  <div class="app-style">
    <DepartmentsBlock v-for="departments_list in departments" :departments_list="departments_list"/>
  </div>
</template>

<style scoped>
.app-style {
  color: #623B2A;
  padding: 20px;
}
</style>
