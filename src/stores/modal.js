import {defineStore} from 'pinia'

export const useModalStore = defineStore('modal', {
    state: () => ({
        url: '',
        isVisible: false,
    }),
    getters: {},
    actions: {
        toggleModal: () => {
            this.isVisible = !this.isVisible
            console.log(this.showModal)
        },
        changeUrl: (id) => {
            this.url = `https://vashkontrol.ru/widget?mfc=${id}`
        },
        message: () => {
            console.log('tap')
        }
    }
})
