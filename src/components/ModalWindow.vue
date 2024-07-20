<script setup>
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
    <div @click="toggleModal">Закрыть</div>
    <div class="widget-width">
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
