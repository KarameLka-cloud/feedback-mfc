<script setup>
import {ref} from "vue";

let props = defineProps({
  id: Number,
  toggleModal: Function
})
</script>

<template>
  <div class="modal-window">

    <div class="widget-width">
      <div class="btn-close">
        <img class="img-close" @click="toggleModal" src="../assets/close.svg" alt="Закрыть">
      </div>
      <iframe class="iframe"
              :src="`https://vashkontrol.ru/widget?mfc=${props.id}`"
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
  z-index: 2;
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

.btn-close {
  position: relative;
}

.img-close {
  position: absolute;
  top: 160px;
  right: 20px;
  display: block;
  z-index: 3;
  color: #FFF;
  height: 40px;
  cursor: pointer;
}
</style>
