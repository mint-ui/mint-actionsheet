<template>
  <div v-show="visible" class="mint-actionsheet">
    <ul class="mint-actionsheet-list" :style="{ 'margin-bottom': cancelText ? '5px' : '0' }">
      <li v-for="item in actions" class="mint-actionsheet-listitem" @click="itemClick(item)">{{ item.name }}</li>
    </ul>
    <a class="mint-actionsheet-button" @click="visible = false" v-if="cancelText">{{ cancelText }}</a>
  </div>
</template>

<style>
  @component-namespace mint {
    @component actionsheet {
      position: fixed;
      background: #e0e0e0;
      width: 100%;
      text-align: center;
      bottom: 0;
      left: 50%;
      transition: .2s;
      transform: translate3d(-50%, 100%, 0);

      @when visible {
        transform: translate3d(-50%, 0, 0);
      }

      @descendent list {
        margin: 0;
        padding: 0;
        list-style: none;
      }

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

  @keyframes sheet-in {
    0% {
      transform: translate3d(-50%, 100%, 0);
    }
    100% {
      transform: translate3d(-50%, 0, 0);
    }
  }
</style>

<script type="text/babel">
  import Popup from 'vue-popup';
  require('vue-popup/lib/popup.css');

  export default {
    name: 'mt-actionsheet',

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

    watch: {
      visible(val) {
        if (val) {
          setTimeout(() => {
            this.$el.classList.add('is-visible');
          }, 250);
        } else {
          this.$el.classList.remove('is-visible');
        }
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