<template>
  <section id="mainform" class="flex justify-center items-center w-screen h-screen border border-gray-300">
    <div class="h-screen w-screen md:w-4/6 md:h-4/6  border border-gray-500">
      <form @submit.prevent="handleSubmit" class="flex flex-col h-full w-full">
        <input class="p-1 border border-gray-200" type="number" required placeholder="" v-model="properSalary">
        <input class="p-1 border border-gray-200" type="number" required placeholder="" v-model="currentSalary">
        <input class="p-1 border border-gray-200" type="number" required placeholder="" v-model="initialDifferentialAmount">
        <input class="p-5 border border-gray-200" type="date" required placeholder="" v-model="firstDate">
        <input class="p-5 border border-gray-200" type="date" required placeholder="" v-model="secondDate">
        <p>Calculated Amount:{{calculatedDifferential}}</p>
        <p>SD Bonus: {{sdBonus}}</p>
        <p>Gross: {{grossSalDiff}}</p>
        <p>GSIS: {{gsis}}</p>
        <p>Less GSIS: {{lessGsis}}</p>
        <p>Withholding Tax: {{withholdingTax}}</p>
        <p>Total Deduction: {{totalDeduction}}</p>
        <p>Net Amount: {{netAmount}}</p>
        <p>Start of Month: {{calculate}}</p>
      </form>
    </div>
  </section>
</template> 

<script>
import {ref, computed} from 'vue'
import dayjs from 'dayjs'
import dayjsBusinessDays from 'dayjs-business-days'


dayjs.extend(dayjsBusinessDays)


export default {

  setup() {

      const employeeNo = ref('')
      const fName = ref('')
      const lName = ref(' ')
      const position = ref('')
      const dateOfLastProm = ref('')
      const properSalary = ref('')
      const currentSalary = ref('')
      const initialDifferentialAmount = ref('')
      const firstDate = ref('')
      const secondDate = ref('')
      const calculatedDifferential = ref('')
      const sdBonus = ref('')
      const grossSalDiff = ref('')
      const gsis = ref('')
      const lessGsis = ref('')
      const withholdingTax = ref('')
      const totalDeduction = ref('')
      const netAmount = ref('')
      const firstDayOfFirstDate = ref('')
      const lastDayOfFirstDate = ref('')
      const firstDayOfSecondDate = ref('')
      const lastDayOfSecondDate = ref('')
      const differenceInMonths = ref('')
      const checkFirstDate = ref('')
      const checkSecondDate = ref('')
      const businessDaysFirstDate = ref('')
      const businessDaysSecondDate = ref('')
      const businessDaysOfBothDates = ref('')
      const fullMonthBusinessDaysOfFirstDate = ref('')
      const fullMonthBusinessDaysOfSecondDate = ref('')
      const midYearRule = ref('')
      const yearEndRule = ref('')
      const getYear = ref('')
      const gsisPS = ref('')
      const gsisGS = ref('')
      const taxPercentage = ref('')


      const calculate = computed(() => {
        // check first date of the month
        firstDayOfFirstDate.value = dayjs(firstDate.value).startOf('month').format('MM/DD/YYYY')
        return [firstDayOfFirstDate]
      })


      return { dayjs,dayjsBusinessDays ,employeeNo,fName,lName,position,dateOfLastProm,properSalary, currentSalary, initialDifferentialAmount, firstDate, secondDate,
                calculatedDifferential, sdBonus, grossSalDiff, gsis, lessGsis, withholdingTax, totalDeduction,
                netAmount, firstDayOfFirstDate, lastDayOfFirstDate, firstDayOfSecondDate, lastDayOfSecondDate,
                differenceInMonths, checkFirstDate, checkSecondDate, businessDaysFirstDate, businessDaysSecondDate,
                businessDaysOfBothDates, fullMonthBusinessDaysOfFirstDate, fullMonthBusinessDaysOfSecondDate,
                midYearRule, yearEndRule, getYear, gsisPS, gsisGS, taxPercentage, calculate}
  }
}


</script>


 