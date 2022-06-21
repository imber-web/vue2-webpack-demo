<template>
  <div>
    <div id="lazyload">
      <!-- img中使用图片懒加载。 v-lazy代替:src -->
      <div class="img">
        <div style="margin: 20px" v-for="(item, index) in imgList" :key="index">
          <img v-lazy="item" alt="" style="width: 50px" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Lazyload',
  components: {},
  props: {},
  data() {
    return {
      imgList: [
        require('../assets/logo.png'),
        require('../assets/logo.png'),
        require('../assets/logo.png'),
        require('../assets/logo.png'),
        require('../assets/logo.png'),
        require('../assets/logo.png'),
        require('../assets/logo.png'),
        require('../assets/logo.png'),
        require('../assets/logo.png'),
        require('../assets/logo.png'),
        require('../assets/logo.png'),
        require('../assets/logo.png'),
        require('../assets/logo.png'),
        require('../assets/logo.png'),
        require('../assets/logo.png'),
        require('../assets/logo.png'),
        require('../assets/logo.png'),
        require('../assets/logo.png'),
        require('../assets/logo.png'),
        require('../assets/logo.png')
      ]
    }
  },
  filters: {},
  computed: {},
  watch: {},
  created() {},
  mounted() {},
  beforeDestroy() {},
  methods: {}
}
</script>

<style scoped lang="less">
#lazyload {
  background-color: #ccc;
  margin: 0 auto;
  .img {
    background-color: #ccc;
  }
}
</style>
