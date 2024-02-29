<template>
  <div class="list">
    <div class="item selected">Основная информация</div>
    <div class="item">Квалификационные документы</div>
    <div class="item">Контакты</div>
    <div class="item">Данные для раасчетов</div>
    <div class="item">Виды работ</div>
    <div class="item">Дополнительные данные</div>
  </div>
</template>

<style scoped>
.list {
  .item {
    border-radius: var(--border-radius-sm);
    cursor: pointer;
    padding: 7px 15px;

    &.selected {
      background-color: var(--color-gray);
      color: var(--color-white);
    }
  }
}
</style>
