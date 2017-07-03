<template>
  <div class="ooxx">
    <div class="main">
      <div class="board">
        <div v-for="block in blocks" :class="{circle: block.type===1, cross: block.type===-1}" class="block"
          @click="play(block)"></div>
      </div>
    </div>
    <div class="control">
      <div class="turn">
        Turn
        <div class="block small" :class="{circle: turn===1, cross: turn===-1}"></div>
      </div>
      <div class="winner">
        Winner
        <div class="block small"></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ooxx',
  data () {
    return {
      blocks: [],
      turn: 1
    }
  },
  mounted () {
    this.restart()
  },
  methods: {
    restart () {
      this.blocks = Array.from({ length: 9 }, () => {
        return {type: 0}
      })
    },
    play (block) {
      if (block.type === 1 || block.type === -1) return
      block.type = this.turn
      this.turn *= -1
    }
  },
  computed: {

  }
}
</script>

<style lang="scss" scoped>
$color_blue: #46f;
$color_red: #f35;
$color_bg: #222;
$color_text: #AAA;
$block_size: 130px;

.ooxx {
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: $color_bg;
  color: $color_text;
}

.main {
  flex: 3;
  display: flex;
  justify-content: center;
}
.control {
  flex: 1;
  text-align: center;

  .turn {
    font-size: 40px;
  }
  .winner {
    font-size: 50px;
  }
}

.board {
  display: flex;
  flex-wrap: wrap;
  width: $block_size * 3;
  height: $block_size * 3;
}
.block {
  position: relative;
  box-sizing: border-box;
  width: $block_size;
  height: $block_size;
  border: 1px solid #333;
  cursor: pointer;

  &:after, &:before {
    content: '';
    position: absolute;
    border-radius: 50%;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    transition: 0.5s;
  }
  &.circle {
    &:before {
      height: 90%;
      width: 90%;
      background-color: $color_red;
    }
    &:after {
      height: 60%;
      width: 60%;
      background-color: $color_bg;
    }
  }
  &.cross {
    &:before, &:after {
      width: 90%;
      height: 15%;
      background-color: $color_blue;
      border-radius: 0;
    }
    &:before {
      transform: translate(-50%, -50%) rotate(45deg);
    }
    &:after {
      transform: translate(-50%, -50%) rotate(-45deg);
    }
  }
  &.small {
    width: $block_size * 0.6;
    height: $block_size * 0.6;
  }
}

</style>
