import {defineStore} from 'pinia'

export const useDepartmentsStore = defineStore('departments', {
    state: () => ({
        departments: [
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
                    ]
            }
        ]
    })
})
