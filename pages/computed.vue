<template>
  <div>
    <b-button @click="addItem">add item</b-button>
    <div id="compare">
      <ul>
        <li v-for="(i) in list" :key="i.id">
          <input type="checkbox" v-model="i.checked" @input="check(i)">
          {{i.value}}  {{i.p4}}
        </li>
      </ul>

      <ul>
        <li v-for="(i) in checkedList" :key="i.id">
          <input type="checkbox" v-model="i.checked">
          {{i.value}}
        </li>
      </ul>

      <ul>
        <li v-for="(i) in uncheckedList" :key="i.id">
          <input type="checkbox" v-model="i.checked">
          {{i.value}}
        </li>
      </ul>


      <ul>
        <li v-for="(i) in lessthan30" :key="i.id">
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
    check(item) {
      console.log(item.checked);
      // item.p4 = Date.now();
      this.$set(item, 'p4', Date.now());
      console.log(item);
    },
  },
  computed: {
    checkedList() {
      return this.list.filter(item => item.checked);
    },
    uncheckedList() {
      return this.list.filter(item => !item.checked);
    },
    lessthan30() {
      return this.list.filter(item => item.value < 30);
    },
  },
  watch: {
    list() {
      // push, splice, pop
      console.log(`list length ${this.list.length}`);
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
    width: 20%;
  }
}
</style>
