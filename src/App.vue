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
                id: 123
              },
              {
                street_name: 'Аляты, ул. Ж. Зимина, д. 1',
                id: 123
              },
              {
                street_name: 'Забитуй, ул. 70 Лет Октября, д. 24',
                id: 123
              },
              {
                street_name: 'Иваническое, ул. Юбилейная, д. 7',
                id: 123
              },
            ]
          },
          {
            location_name: 'Ангарск',
            streets: [
              {
                street_name: 'Ангарск, 84й квартал, дом 16 (Отдел №1)',
                id: 123
              },
              {
                street_name: 'Ангарск, ул. Ворошилова, дом 65 (Отдел №2)',
                id: 123
              },
            ]
          },
          {
            location_name: 'Ангарский район',
            streets: [
              {
                street_name: 'Мегет, кв. 1, д. 7',
                id: 123
              },
              {
                street_name: 'Одинск, ул. Победы. д. 7',
                id: 123
              },
              {
                street_name: 'Савватеевка, ул. Школьная, д. 48',
                id: 123
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
                id: 123
              }
            ]
          },
          {
            location_name: 'Балаганский район',
            streets: [
              {
                street_name: 'Кумарейка, ул. Первомайская, д. 2',
                id: 123
              }
            ]
          },
          {
            location_name: 'Баяндаевский район',
            streets: [
              {
                street_name: 'Загатуй, микрорайон 1, д. 41',
                id: 123
              },
              {
                street_name: 'Хогот, ул. Трактовая, д.85Г',
                id: 123
              }
            ]
          },
          {
            location_name: 'Баяндай',
            streets: [
              {
                street_name: 'Баяндай, ул. Некунде, дом 131',
                id: 123
              }
            ]
          },
          {
            location_name: 'Бодайбо',
            streets: [
              {
                street_name: 'Бодайбо, ул.Урицкого, д.15',
                id: 123
              }
            ]
          },
          {
            location_name: 'Бохан',
            streets: [
              {
                street_name: 'Бохан, ул. Колхозная, дом 7',
                id: 123
              }
            ]
          },
          {
            location_name: 'Боханский район',
            streets: [
              {
                street_name: 'Казачье, ул. Мира, д. 10',
                id: 123
              },
              {
                street_name: 'Каменка, ул. Школьная, д. 8',
                id: 123
              },
              {
                street_name: 'Олонки, ул. Калинина, д. 5',
                id: 123
              },
              {
                street_name: 'Тихоновка, ул. Ленина, д. 13',
                id: 123
              },
              {
                street_name: 'Хохорск, ул. Ленина, д. 44',
                id: 123
              }
            ]
          },
          {
            location_name: 'Братск',
            streets: [
              {
                street_name: 'Братск, пр-т Ленина, дом 37 (Отдел №1)',
                id: 123
              },
              {
                street_name: 'Братск, ул. Баркова, дом 43 (Отдел №2)',
                id: 123
              },
              {
                street_name: 'Братск, ул.Юбилейная, д.15 (Отдел №3)',
                id: 123
              },
              {
                street_name: 'Братск, ул. Гайнулина, д.1 (Отдел №4)',
                id: 123
              }
            ]
          },
          {
            location_name: 'Братский район',
            streets: [
              {
                street_name: 'Большеокинское, ул. Мира, д. 40А',
                id: 123
              },
              {
                street_name: 'Калтук, ул. Ленина, д. 39Б',
                id: 123
              },
              {
                street_name: 'Кежемский, ул. Первомайская, д. 6',
                id: 123
              },
              {
                street_name: 'Ключи-Булак, ул. Ленина, д. 1',
                id: 123
              },
              {
                street_name: 'Кобляково, ул. Наймушина, д. 12',
                id: 123
              },
              {
                street_name: 'Покосное, ул. Сибирская, д. 16',
                id: 123
              },
              {
                street_name: 'Прибрежный, пер. Школьный, д. 9',
                id: 123
              },
              {
                street_name: 'Тангуй, ул. Мира, д. 24',
                id: 123
              },
              {
                street_name: 'Турма, ул. Строительная, д. 12',
                id: 123
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
                id: 123
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
                id: 123
              }
            ]
          },
          {
            location_name: 'Ербогачен',
            streets: [
              {
                street_name: 'Ербогачен, ул. Чкалова, 11',
                id: 123
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
                id: 123
              }
            ]
          },
          {
            location_name: 'Жигалово',
            streets: [
              {
                street_name: 'Жигалово, ул. Партизанская, д. 71',
                id: 123
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
                id: 123
              }
            ]
          },
          {
            location_name: 'Заларинский район',
            streets: [
              {
                street_name: 'Залари, ул. Гагарина, дом 4',
                id: 123
              },
              {
                street_name: 'Моисеевка, ул. Школьная, д. 2А',
                id: 123
              },
              {
                street_name: 'Троицк, ул. Молодежная, д. 4А',
                id: 123
              },
              {
                street_name: 'Тыреть, мкр. Солерудник, д. 9',
                id: 123
              }
            ]
          },
          {
            location_name: 'Зима',
            streets: [
              {
                street_name: 'Зима, ул. Клименко, д. 37',
                id: 123
              }
            ]
          },
          {
            location_name: 'Зиминский район',
            streets: [
              {
                street_name: 'Батама, ул. Ленина, д. 40',
                id: 123
              },
              {
                street_name: 'Кимильтей, ул. Чкалова, д. 70А',
                id: 123
              },
              {
                street_name: 'Центральный Хазан, ул. Мира, д. 57',
                id: 123
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
                id: 123
              },
              {
                street_name: 'Иркутск, ул. Советская, дом 58, лит. А (Отдел №8)',
                id: 15873
              },
              {
                street_name: 'Иркутск, ул. Рабочая, д.2А (Отдел №9)',
                id: 123
              }
            ]
          },
          {
            location_name: 'Иркутский район',
            streets: [
              {
                street_name: 'Большая Речка, ул. Труда, д. 28',
                id: 123
              },
              {
                street_name: 'Горохово, ул. Школьная, д. 15',
                id: 123
              },
              {
                street_name: 'Дзержинск, ул. Центральная, д. 1А',
                id: 123
              },
              {
                street_name: 'Карлук, ул. Гагарина, д. 4Б',
                id: 123
              },
              {
                street_name: 'Листвянка, ул. Горького, д. 89',
                id: 123
              },
              {
                street_name: 'Максимовщина, ул. Сибирская, д. 16А',
                id: 123
              },
              {
                street_name: 'Малое Голоустное, ул. Мира, д. 25А',
                id: 123
              },
              {
                street_name: 'Маркова, мкр. Березовый, д. 75',
                id: 123
              },
              {
                street_name: 'Молодежный, Байкальский тракт, 12А, ТРЦ',
                id: 123
              },
              {
                street_name: 'Никольск, ул. Черемуховая, д. 1А',
                id: 123
              },
              {
                street_name: 'Оек, ул. Кирова, д. 91Г',
                id: 123
              },
              {
                street_name: 'Пивовариха, ул. Дачная, д. 8',
                id: 123
              },
              {
                street_name: 'Ревякина, пер. Школьный, д. 3',
                id: 123
              },
              {
                street_name: 'Смоленщина, ул. Трудовая, д. 12',
                id: 123
              },
              {
                street_name: 'Сосновый Бор, ул. Урожайная, д. 14',
                id: 123
              },
              {
                street_name: 'Урик, ул. Лунина, д. 1',
                id: 123
              },
              {
                street_name: 'Усть-Куда, ул. Геологическая, д. 4 Литера 2',
                id: 123
              },
              {
                street_name: 'Хомутово, ул. Колхозная, д. 135',
                id: 123
              },
              {
                street_name: 'Ширяева, ул. Специалистов, д. 1',
                id: 123
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
                id: 123
              },
              {
                street_name: 'Улькан, ул. Машурова, д. 7',
                id: 123
              }
            ]
          },
          {
            location_name: 'Качуг',
            streets: [
              {
                street_name: 'Качуг, ул. Победы, дом 6',
                id: 123
              }
            ]
          },
          {
            location_name: 'Качугский район',
            streets: [
              {
                street_name: 'Бирюлька, ул. Ленина, д. 41',
                id: 123
              },
              {
                street_name: 'Манзурка, ул. Трактовая, д. 76',
                id: 123
              }
            ]
          },
          {
            location_name: 'Киренск',
            streets: [
              {
                street_name: 'Киренск, ул. Красноармейская, 2А',
                id: 123
              }
            ]
          },
          {
            location_name: 'Куйтун',
            streets: [
              {
                street_name: 'Куйтун, ул. Красного Октября, 18',
                id: 123
              }
            ]
          },
          {
            location_name: 'Куйтунский район',
            streets: [
              {
                street_name: 'Барлук, ул. Ленина, д. 29А',
                id: 123
              },
              {
                street_name: 'Каразей, ул. Мира, д. 58',
                id: 123
              },
              {
                street_name: 'Карымск, ул. Набережная, д. 6',
                id: 123
              },
              {
                street_name: 'Тулюшка, ул. Мира, д. 11',
                id: 123
              },
              {
                street_name: 'Уян, ул. 1-ая Советская, д. 6',
                id: 123
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
                id: 123
              }
            ]
          },
          {
            location_name: 'Мама',
            streets: [
              {
                street_name: 'Мама, ул. Октябрьская, дом 23',
                id: 123
              }
            ]
          }
        ]
  },
]
</script>

<template>
  <DepartmentsBlock v-for="departments_list in departments" :departments_list="departments_list"/>
</template>

<style scoped>

</style>
