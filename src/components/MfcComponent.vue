<template>
  <div>
    <button class="btn-widget" style="display: none;"></button>
    <div v-if="loading">Загружаем виджет ..</div>
  </div>
</template>

<script setup>
import { ref, computed, watch, onMounted } from 'vue';
import { useRoute } from 'vue-router';

const route = useRoute();
const loading = ref(true);

const mfcId = computed(() => route.params.id);

const loadWidget = () => {
  window.mkgu_widget_param = {
    obj_alias: "mfc",
    obj_id: mfcId.value,
    color: "#000"
  };

  const script = document.createElement('script');
  script.src = 'https://vashkontrol.ru/widget/mkgu_widget.js';
  script.onload = () => {
    loading.value = false;
    initWidgetHandlers();
  };
  document.body.appendChild(script);
};

const initWidgetHandlers = () => {
  setTimeout(() => {
    const widgetItem = document.querySelector('.btn-widget');
    if (widgetItem) widgetItem.click();

    const goToSite = document.querySelector('.popup-widget__btn-go');
    if (goToSite) {
      goToSite.addEventListener("click", () => {
        document.getElementsByClassName('btn-widget')[0].style.display = 'none';
        document.getElementsByClassName('popup-widget__btn-close')[0].click();
        history.back();
      });
    }
  }, 500);
};

onMounted(loadWidget);

watch(mfcId, () => {
  loadWidget();
});
</script>
