<template>
<div>
    <p class="fixed flex w-screen justify-center text-xl bg-lightCyan border border-red-500">Salary Differential Calculator</p>
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
