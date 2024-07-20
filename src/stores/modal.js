import {defineStore} from 'pinia'

export const useModalStore = defineStore('modal', {
  state: () => ({
    url: 'hello',
    isVisible: false,
  }),
  getters: {},
  actions: {
    toggleModal: () => {
      console.log('hello')
    },
    getChangeUrl: (id) => {
      this.url = `https://vashkontrol.ru/widget?mfc=${id}`
    }
  }
})
