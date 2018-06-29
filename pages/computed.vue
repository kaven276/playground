<template>
  <div>
    <b-button @click="addItem">add item</b-button>
    <div id="compare">
      <ul>
        <li v-for="(i) in list" :key="i.id">
          <input type="checkbox" v-model="i.checked">
          {{i.value}}
        </li>
      </ul>

      <ul>
        <li v-for="(i) in checkedList" :key="i.id">
          <input type="checkbox" v-model="i.checked">
          {{i.value}}
        </li>
      </ul>
    </div>

  </div>

</template>

<script>
export default {
  data() {
    return {
      list: [],
    };
  },
  methods: {
    addItem() {
      this.list.push({
        id: this.list.length,
        value: Math.floor(Math.random() * 100),
        checked: Math.random() < 0.5,
      });
    },
  },
  computed: {
    checkedList() {
      return this.list.filter(item => item.checked);
    },
  },
};
</script>

<style lang="less">
#compare {
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  > ul {
    width: 40%;
  }
}
</style>
