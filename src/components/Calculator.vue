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
        <p>Start of Month: {{}}</p>
        <p>Start of Month: {{calculate.checkSecondDate}}</p>
        <p>Start of Month: {{calculate.checkFirstDate}}</p>
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
      const businessDaysFirstDate = ref('')
      const businessDaysSecondDate = ref('')
      const midYearRule = ref('')
      const yearEndRule = ref('')
      const getYear = ref('')
      const gsisPS = ref('')
      const gsisGS = ref('')
      const taxPercentage = ref('')


      
      const calculate = computed(() => {
        //check the 1st and last day of the given month
        firstDayOfFirstDate.value = dayjs(firstDate.value).startOf('month').format('YYYY-MM-DD')
        lastDayOfFirstDate.value = dayjs(firstDate.value).endOf('months').format('YYYY-MM-DD')
        firstDayOfSecondDate.value = dayjs(secondDate.value).startOf('month').format('YYYY-MM-DD')
        lastDayOfSecondDate.value = dayjs(secondDate.value).endOf('months').format('YYYY-MM-DD')
        const checkFirstDate = firstDayOfFirstDate.value === firstDate.value
        const checkSecondDate = lastDayOfSecondDate.value === secondDate.value

        //check the difference of calendar days between two dates
              if(checkFirstDate && checkSecondDate) {
                differenceInMonths.value = dayjs(secondDate.value).diff(firstDate.value,"month")+1
              } else {
                differenceInMonths.value = dayjs(secondDate.value).diff(firstDate.value,"month")
              }
        
        // check businessdays between two dates
        businessDaysFirstDate.value = dayjs(lastDayOfFirstDate.value).businessDiff(dayjs(firstDate.value))
        businessDaysSecondDate.value = dayjs(secondDate.value).businessDiff(dayjs(firstDayOfSecondDate.value))+1

        //calculate calendar days between two dates
        const totalCalendarDaysFirst = dayjs(lastDayOfFirstDate.value).diff(firstDate.value, "day")+1
        const totalCalendarDaysSecond = dayjs(secondDate.value).diff(firstDayOfSecondDate.value, "day")+1
        console.log(totalCalendarDaysFirst, totalCalendarDaysSecond)

        return {firstDayOfFirstDate, lastDayOfFirstDate, firstDayOfSecondDate, lastDayOfSecondDate, 
                checkFirstDate, checkSecondDate,differenceInMonths, businessDaysFirstDate, businessDaysSecondDate}
      })


 

      return { dayjs,dayjsBusinessDays ,employeeNo,fName,lName,position,dateOfLastProm,properSalary, currentSalary, 
                initialDifferentialAmount, firstDate, secondDate, calculatedDifferential, sdBonus, grossSalDiff, gsis, 
                lessGsis, withholdingTax, totalDeduction, netAmount, firstDayOfFirstDate, lastDayOfFirstDate, firstDayOfSecondDate, 
                lastDayOfSecondDate, differenceInMonths, midYearRule, yearEndRule, getYear, gsisPS, gsisGS, taxPercentage, 
                calculate}
  }
}


</script>


 