import Actionsheet from '../src';
import Vue from 'vue';
new Vue({
  el: 'body',
  components: {
    'actionsheet': Actionsheet
  },

  data() {
    return {
      sheetVisible: false,
      actions: [{
        name: '拍照',
        method: this.takePhoto
      }, {
        name: '打开相册',
        method: this.openAlbum
      }]
    };
  },

  methods: {
    takePhoto() {
      console.log('taking photo');
    },

    openAlbum() {
      console.log('opening album');
    }
  }
});
