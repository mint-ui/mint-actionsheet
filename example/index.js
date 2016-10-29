import Actionsheet from '../src';
import Vue from 'vue/dist/vue';
new Vue({
  el: '#wrapper',
  components: {
    'actionsheet': Actionsheet
  },

  data() {
    return {
      sheetVisible: false,
      actions: []
    };
  },

  methods: {
    takePhoto() {
      console.log('taking photo');
    },

    openAlbum() {
      console.log('opening album');
    }
  },

  mounted() {
    this.actions = [{
      name: '拍照',
      method: this.takePhoto
    }, {
      name: '打开相册',
      method: this.openAlbum
    }];
  }
});
