<template>
    <div class="divider"></div>
    <div class="divider-margin-bottom"></div>
</template>

<style lang="scss" scoped>
  .divider {
        width: 90%;
        max-width: 1400px;
        height: 3.5px;
        background: #202020;
        position: absolute;
    }
  
    .divider::after {
        position: absolute;
        content: "";
        top: 0;
        left: 0;
        width: 80%;
        max-width: 1450px;
        height: 100%;
        background: white;
        animation: animate 0.9s  ease-in;
    }

      @keyframes animate {
        0% {
            width: 0%;
        }
  
        100% {
            width: 80%;
        }
    }

    .divider-margin-bottom {
        margin-bottom: 40px;
    }
</style>