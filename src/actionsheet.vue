<template>
  <div v-if="rendered" v-show="visible" class="kebab-actionsheet" transition="actionsheet-float">
    <ul class="kebab-actionsheet-list" :style="{ 'margin-bottom': cancelText ? '5px' : '0' }">
      <li v-for="item in actions" class="kebab-actionsheet-listitem" @click="itemClick(item)">{{ item.name }}</li>
    </ul>
    <a class="kebab-actionsheet-button" @click="visible = false" v-if="cancelText">{{ cancelText }}</a>
  </div>
</template>

<style>
  @reset-global mobile;

  @component-namespace kebab {
    @component actionsheet {
      position: fixed;
      background: #e0e0e0;
      width: 100%;
      text-align: center;
      bottom: 0;
      left: 50%;
      transform: translate(-50%, 0);

      @descendent listitem {
        border-bottom: solid 1px #e0e0e0;
      }

      @descendent listitem, button {
        display: block;
        width: 100%;
        height: 45px;
        line-height: 45px;
        font-size: 18px;
        color: #333;
        background-color: #fff;
        &:active {
           background-color: #f0f0f0;
        }
      }
    }
  }

  .actionsheet-float-transition {
    transition: transform .3s ease-out;
  }

  .actionsheet-float-enter,
  .actionsheet-float-leave {
    transform: translate(-50%, 100%);
  }
</style>

<script type="text/babel">
  import Popup from 'vue-popup';
  require('vue-popup/lib/popup.css');

  export default {
    name: 'kb-actionsheet',

    mixins: [Popup],

    props: {
      modal: {
        default: true
      },

      closeOnClickModal: {
        default: true
      },

      cancelText: {
        type: String,
        default: '取消'
      },

      actions: {
        type: Array,
        default: () => []
      }
    },

    methods: {
      itemClick(item) {
        if (item.method && typeof item.method === 'function') {
          item.method();
        }
        this.visible = false;
      }
    }
  };
</script>