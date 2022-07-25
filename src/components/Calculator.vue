<template>
  <section id="mainform" class="flex justify-center items-center w-screen h-screen border border-gray-300">
    <div class="h-screen w-screen md:w-4/6 md:h-4/6  border border-gray-500">
      <form @submit.prevent="handleSubmit" class="flex flex-col h-full w-full">
        <input class="p-1 border border-gray-200" type="number" required placeholder="" v-model="currentSalary">
        <input class="p-1 border border-gray-200" type="number" required placeholder="" v-model="properSalary">
        <input class="p-1 border border-gray-200" type="number" required placeholder="" v-model="initialDifferentialAmount">
        <input class="p-5 border border-gray-200" type="date" required placeholder="" v-model="firstDate">
        <input class="p-5 border border-gray-200" type="date" required placeholder="" v-model="secondDate">
        <p>Calculated Amount:{{calculate.calculatedDifferential}}</p>
        <p>SD Bonus: {{calculate.sdBonus}}</p>
        <p>Gross: {{calculate.grossSalDiff}}</p>
        <p>GSIS: {{gsis}}</p>
        <p>Less GSIS: {{lessGsis}}</p>
        <p>Withholding Tax: {{withholdingTax}}</p>
        <p>Total Deduction: {{totalDeduction}}</p>
        <p>Net Amount: {{netAmount}}</p>
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
      const properSalary = ref(0)
      const currentSalary = ref(0)
      const initialDifferentialAmount = ref(0)
      const firstDate = ref('')
      const secondDate = ref('')
      const calculatedDifferential = ref(0)
      const sdBonus = ref(0)
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
      const midYearEligible = ref('')
      const yearEndEligible = ref('')
      const tax = ref(0)

      
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
        const totalCalendarDaysofFirstSecond = dayjs(secondDate.value).diff(firstDate.value,"day")+1
        const fullMonthOfFirstDay = dayjs(lastDayOfFirstDate.value).diff(firstDayOfFirstDate.value,"day")+1
        const fullMonthOfSecondDay = dayjs(lastDayOfSecondDate.value).diff(firstDayOfSecondDate.value,"day")+1

        //mid-year and year-end rule
        const getYear = dayjs(firstDate.value).year().toString()
        const midYearDate = getYear.concat("-05-15")
        const yearEndDate = getYear.concat("-10-31")

        //mid-year
        if(firstDate.value <= midYearDate && secondDate.value >= midYearDate){
          midYearEligible.value = true
        } else {
          midYearEligible.value = false
        }

        //year-end
        if(firstDate.value <= yearEndDate && secondDate.value >= yearEndDate){
          yearEndEligible.value = true
        } else {
          yearEndEligible.value = false
        }

        //gsis percentage
        const gsisPS = 0.09
        const gsisGS = 0.12

        //tax computation
        if(properSalary.value*12 <= 250000){
          tax.value = 0
        } else if (properSalary.value*12 >= 250001 && properSalary.value*12 <=400000){
          tax.value = 0.20
        } else if (properSalary.value*12 >=400001 && properSalary.value*12 <= 800000){
          tax.value = 0.25
        } else if (properSalary.value*12 >=400001 && properSalary.value*12 <= 800000){
          tax.value = 0.25
        } else if (properSalary.value*12 >=800001 && properSalary.value*12 <= 2000000){
          tax.value = 0.30
        } else if (properSalary.value*12 >=2000000 && properSalary.value*12 <= 8000000){
          tax.value = 0.32
        }

        //salary differential
        initialDifferentialAmount.value = properSalary.value - currentSalary.value

        if(checkFirstDate && checkSecondDate) {
          calculatedDifferential.value = initialDifferentialAmount.value * differenceInMonths.value
        } else if (checkFirstDate === true && checkSecondDate === false) {
          calculatedDifferential.value = (initialDifferentialAmount.value/22*businessDaysSecondDate.value)+(initialDifferentialAmount.value * differenceInMonths.value)
        } else if (checkFirstDate === false && checkSecondDate === true) {
          calculatedDifferential.value = (initialDifferentialAmount.value/22*businessDaysFirstDate.value)+(initialDifferentialAmount.value * differenceInMonths.value) 
        } else if (checkFirstDate === false && checkSecondDate === false) {
          calculatedDifferential.value = ((initialDifferentialAmount.value/22*businessDaysSecondDate.value)+(initialDifferentialAmount.value * differenceInMonths.value)+
          (initialDifferentialAmount.value/22*businessDaysFirstDate.value)+(initialDifferentialAmount.value * differenceInMonths.value)+
          initialDifferentialAmount.value * differenceInMonths.value)
        }
        

        //calculate sd bonus
        if(midYearEligible.value  && yearEndEligible.value) {
          sdBonus.value = initialDifferentialAmount.value * 2
        } else if (midYearEligible.value || yearEndEligible.value) {
          sdBonus.value = initialDifferentialAmount.value
        }

        //gross salary differential
        grossSalDiff.value = calculatedDifferential.value + sdBonus.value


        return {firstDayOfFirstDate, lastDayOfFirstDate, firstDayOfSecondDate, lastDayOfSecondDate, 
                checkFirstDate, checkSecondDate,differenceInMonths, businessDaysFirstDate, businessDaysSecondDate,
                initialDifferentialAmount, calculatedDifferential, sdBonus, grossSalDiff}
      })

        return { dayjs,dayjsBusinessDays ,employeeNo,fName,lName,position,dateOfLastProm,properSalary, currentSalary, 
                initialDifferentialAmount, firstDate, secondDate, calculatedDifferential, sdBonus, grossSalDiff, gsis, 
                lessGsis, withholdingTax, totalDeduction, netAmount, firstDayOfFirstDate, lastDayOfFirstDate, firstDayOfSecondDate, 
                lastDayOfSecondDate, differenceInMonths, tax, calculate}
  }
}


</script>


 