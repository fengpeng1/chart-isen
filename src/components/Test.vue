<template>
  <div>
    <table>
      <thead>
        <tr>

          <th v-for="key of gridColumns" :key="key" @click="sortBy(key)" :class="{ active: sortKey == key }">{{key}}

          </th>

        </tr>
      </thead>
      <tbody>
        <tr v-for="(item,index) in Data" :key="index">

          <td>{{item.name}}</td>
          <td>{{item.power}}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import axios from 'axios';
export default {
  name: 'Test',
  data() {
    return {
      sortKey: '',
      sortOrders: '',
      searchQuery: '',
      gridColumns: ['name', 'power'],
      Data: [
        { name: 'Chuck Norris', power: 'Infinity' },
        { name: 'Bruce Lee', power: 9000 },
        { name: 'Jackie Chan', power: 7000 },
        { name: 'Jet Li', power: 8000 }
      ],
      test: ['1', '2', '3', '4']
    };
  },
  methods: {
    sortBy: function(key) {
      this.sortKey = key;
      this.sortOrders[key] = this.sortOrders[key] * -1;
    }
  }
};
</script>

<style >
</style>

