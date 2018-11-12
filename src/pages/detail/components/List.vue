<template>
    <div>
      <div class="list" v-for="(item, index) in lists" :key="index">
        {{item.title}}
        <div v-if="item.children" class="children">
          <DetailList :lists="item.children"></DetailList>
        </div>
      </div>
    </div>
</template>

<script>
export default {
  name: 'DetailList',
  props: {
    lists: Array
  }
}
</script>

<style lang="stylus" scoped>
.list{
  line-height: .5rem
  padding-left: .2rem
  .children{
    padding-left: .2rem
  }
}
</style>
