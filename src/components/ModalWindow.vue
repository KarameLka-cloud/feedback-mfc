<script setup>
import {useModalStore} from "../stores/modal.js"

const modalStore = useModalStore()

let props = defineProps({
  externalUrl: String,
  toggleModal: Function
})
// export default {
//   name: 'ExternalPage',
//   props: {
//     externalUrl: {
//       type: String,
//       // required: true
//     }
//   }
// }
</script>

<template>
  <div class="modal-window">

    <div class="widget-width">
      <div class="btn-close">
        <a class="img-close" href="#" @click="modalStore.toggleModal()">Закрыть</a>
      </div>
      <iframe class="iframe"
              src="https://vashkontrol.ru/widget?mfc=16557"
              frameborder="0"
              allowfullscreen
      ></iframe>
    </div>
  </div>
</template>

<style>
.modal-window {
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background-color: rgba(95, 102, 103, 0.7);
  z-index: 20;
}

.widget-width {
  max-width: 1400px;
  height: 100%;
  margin: 0 auto;
  padding: 0 10px;
}

.iframe {
  width: 100%;
  height: 100%;
}
</style>
