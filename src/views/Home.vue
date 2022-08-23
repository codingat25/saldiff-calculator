<template>
<div>
    <p class="fixed flex w-screen justify-center text-xl bg-lightCyan">Salary Differential Calculator</p>
    <CalculatorVue/>
</div>

</template>

<script>
  import CalculatorVue from '@/components/Calculator.vue'

  export default {
    components: {CalculatorVue}

  }
</script>
<style>

</style>
