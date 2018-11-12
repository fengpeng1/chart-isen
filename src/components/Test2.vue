<template>
  <div>
    <div v-for="(item,index) of list" :key="index">
      <div>
        {{item.title}}
      </div>
      <div v-if="item.children">
        <test2 :list="item.children"></test2>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Test2',
  data() {
    return {
      open: 'true',
      list: [
        {
          title: 'chengren',
          children: [
            {
              title: 'chengrensan',
              children: [
                {
                  title: 'chengrensan-1'
                }
              ]
            }
          ]
        }
      ]
    };
  }
};
</script>

<style >
</style>

