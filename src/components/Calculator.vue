<template>
  <section
    id="mainform"
    class="
      flex
      justify-center
      items-center
      w-screen
      h-screen
      border border-gray-300
    "
  >
    <div class="h-screen w-screen md:w-4/6 md:h-4/6 border border-gray-500">
      <form @submit.prevent="" class="flex flex-col h-full w-full">
        <input
          class="p-1 border border-gray-200"
          type="number"
          required
          placeholder=""
          v-model="currentSalary"
        />
        <input
          class="p-1 border border-gray-200"
          type="number"
          required
          placeholder=""
          v-model="properSalary"
        />
        <input
          class="p-5 border border-gray-200"
          type="date"
          required
          placeholder=""
          v-model="firstDate"
        />
        <input
          class="p-5 border border-gray-200"
          type="date"
          required
          placeholder=""
          v-model="secondDate"
        />

        <p>Current Salary (a):{{ currentSalary }}</p>
        <p>Actual Salary (b): {{ properSalary }}</p>
        <p>Amount (b-a): {{ initialDifferentialAmount }}</p>
        <p>Period Covered (from): {{firstDate}}</p>
        <p>Period Covered (to): {{secondDate}}</p>
        <p>Gross Salary Differential:{{calculatedDifferential}}</p>
        <p>SD Bonus:{{sdBonus}}</p>
        <p>Gross SD + SD Bonus: {{grossSalDiff}}</p>
        <p>GSIS Personal Share (PS): {{gsisPshare}}</p>
        <p>GSIS Government Share (GS): {{gsisGshare}}</p>
        <p>Less GSIS: {{lessGsis}}</p>
        <p>Withholding Tax: {{withholdingTax}}</p>
        <p>Total Deduction: {{totalDeduction}}</p>
        <p>Net Amount: {{netAmount}}</p>
      </form>
    </div>
  </section>
</template>

<script>
import { ref, computed } from "vue";
import dayjs from "dayjs";
import dayjsBusinessDays from "dayjs-business-days";

dayjs.extend(dayjsBusinessDays);

export default {
  setup() {
    const properSalary = ref("");
    const currentSalary = ref("");

    const initialDifferentialAmount = computed(() => {
      return properSalary.value - currentSalary.value;
    });

    const firstDate = ref("");
    const secondDate = ref("");
    const gsisPshare = ref("");
    const gsisGshare = ref("");

    const firstDayOfFirstDate = computed(() => {
      return dayjs(firstDate.value).startOf("month").format("YYYY-MM-DD");
    });

    const lastDayOfFirstDate = computed(() => {
      return dayjs(firstDate.value).endOf("month").format("YYYY-MM-DD");
    });

    const firstDayOfSecondDate = computed(() => {
      return dayjs(secondDate.value).startOf("month").format("YYYY-MM-DD");
    });

    const lastDayOfSecondDate = computed(() => {
      return dayjs(secondDate.value).endOf("months").format("YYYY-MM-DD");
    });

    const checkFirstDate = computed(() => {
      return firstDayOfFirstDate === firstDate.value;
    });

    const checkSecondDate = computed(() => {
      return lastDayOfSecondDate === secondDate.value;
    })

    const differenceInMonths = computed(() => {
      if (checkFirstDate && checkSecondDate) {
        return dayjs(secondDate.value).diff(firstDate.value, "month") + 1;
      } else {
        return dayjs(secondDate.value).diff(firstDate.value, "month");
      }
    });

    const businessDaysFirstDate = computed(() => {
      return dayjs(lastDayOfFirstDate).businessDiff(dayjs(firstDate.value))});

    const businessDaysSecondDate = computed(() => {
      return dayjs(secondDate.value).businessDiff(dayjs(firstDayOfSecondDate)) + 1;})

    const totalCalendarDaysFirst = computed(() => {
      return dayjs(lastDayOfFirstDate).diff(firstDate.value, "day") + 1;
    })

    const totalCalendarDaysSecond = computed(() => {
      return dayjs(secondDate.value).diff(firstDayOfSecondDate, "day") + 1;
    })

    const fullMonthOfFirstDay = computed(() => {
      return dayjs(lastDayOfFirstDate).diff(firstDayOfFirstDate, "day") + 1;
    })

    const fullMonthOfSecondDay = computed(() => {
      return dayjs(lastDayOfSecondDate).diff(firstDayOfSecondDate, "day") + 1;
    })
      
    const getYear = computed(() => {
      return getYear.value = dayjs(firstDate.value).year().toString();
    })
 
    const midYearDate = computed(() => {
      return midYearDate.value = getYear.value.concat("-05-15");
    })

    const yearEndDate = computed(() => {
      return yearEndDate.value = getYear.value.concat("-10-31");
    })

    const midYearEligible = computed(() => {
      if (firstDate.value <= midYearDate && secondDate.value >= midYearDate) {
        midYearEligible.value = true;
      } else {
        midYearEligible.value = false;
      }
    });
    const yearEndEligible = computed(() => {
      if (firstDate.value <= yearEndDate && secondDate.value >= yearEndDate) {
        yearEndEligible.value = true;
      } else {
        yearEndEligible.value = false;
      }
    });

    const gsisPS = computed(() => {
        return 0.09
    })

    const gsisGS = computed(() => {
        return 0.12
    })

    const taxPercentage = computed(() => {
      if (properSalary.value * 12 <= 250000) {
        return 0;
      } else if (
        properSalary.value * 12 >= 250001 &&
        properSalary.value * 12 <= 400000
      ) {
        return 0.2;
      } else if (
        properSalary.value * 12 >= 400001 &&
        properSalary.value * 12 <= 800000
      ) {
        return 0.25;
      } else if (
        properSalary.value * 12 >= 400001 &&
        properSalary.value * 12 <= 800000
      ) {
        return 0.25;
      } else if (
        properSalary.value * 12 >= 800001 &&
        properSalary.value * 12 <= 2000000
      ) {
        return 0.3;
      } else if (
        properSalary.value * 12 >= 2000000 &&
        properSalary.value * 12 <= 8000000
      ) {
        return 0.32;
      }
    });

    const calculatedDifferential = computed(() => {
      if (checkFirstDate && checkSecondDate) {
        calculatedDifferential.value =
          initialDifferentialAmount * differenceInMonths.value;
      } else if (checkFirstDate === true && checkSecondDate === false) {
        calculatedDifferential.value =
          (initialDifferentialAmount / 22) * businessDaysSecondDate.value +
          initialDifferentialAmount * differenceInMonths.value;
      } else if (checkFirstDate === false && checkSecondDate === true) {
        calculatedDifferential.value =
          (initialDifferentialAmount / 22) * businessDaysFirstDate.value +
          initialDifferentialAmount * differenceInMonths.value;
      } else if (checkFirstDate === false && checkSecondDate === false) {
        calculatedDifferential.value =
          (initialDifferentialAmount / 22) * businessDaysSecondDate.value +
          initialDifferentialAmount * differenceInMonths.value +
          (initialDifferentialAmount / 22) * businessDaysFirstDate.value +
          initialDifferentialAmount * differenceInMonths.value +
          initialDifferentialAmount * differenceInMonths.value;
      }
    });

    const sdBonus = computed(() => {
      if (midYearEligible.value && yearEndEligible.value) {
        sdBonus.value = initialDifferentialAmount * 2;
      } else if (midYearEligible.value || yearEndEligible.value) {
        sdBonus.value = initialDifferentialAmount;
      }
    });

    const grossSalDiff = computed(() => {
      grossSalDiff.value = calculatedDifferential.value + sdBonus.value;
    });

    const gsisComputation = computed(() => {
      if (checkFirstDate === true && checkSecondDate === true) {
        gsisPshare.value =
          initialDifferentialAmount * differenceInMonths.value * gsisPS;
        gsisGshare.value =
          initialDifferentialAmount * differenceInMonths.value * gsisGS;
      } else if (checkFirstDate === false && checkSecondDate === true) {
        gsisPshare.value =
          initialDifferentialAmount * differenceInMonths.value * gsisPS +
          (initialDifferentialAmount / fullMonthOfFirstDay) *
            totalCalendarDaysFirst *
            gsisPS;

        gsisGshare.value =
          initialDifferentialAmount * differenceInMonths.value * gsisGS +
          (initialDifferentialAmount / fullMonthOfFirstDay) *
            totalCalendarDaysFirst *
            gsisGS;
      } else if (checkFirstDate === true && checkSecondDate === false) {
        gsisPshare.value =
          initialDifferentialAmount * differenceInMonths.value * gsisPS +
          (initialDifferentialAmount / fullMonthOfSecondDay) *
            totalCalendarDaysSecond *
            gsisPS;

        gsisGshare.value =
          initialDifferentialAmount * differenceInMonths.value * gsisGS +
          (initialDifferentialAmount / fullMonthOfSecondDay) *
            totalCalendarDaysSecond *
            gsisGS;
      } else if (checkFirstDate === false && checkSecondDate === false) {
        gsisPshare.value =
          initialDifferentialAmount * differenceInMonths.value * gsisPS +
          (initialDifferentialAmount / fullMonthOfFirstDay) *
            totalCalendarDaysFirst *
            gsisPS +
          (initialDifferentialAmount / fullMonthOfSecondDay) *
            totalCalendarDaysSecond *
            gsisPS;

        gsisGshare.value =
          initialDifferentialAmount * differenceInMonths.value * gsisGS +
          (initialDifferentialAmount / fullMonthOfFirstDay) *
            totalCalendarDaysFirst *
            gsisGS +
          (initialDifferentialAmount / fullMonthOfSecondDay) *
            totalCalendarDaysSecond *
            gsisGS;
      }
    });

    const lessGsis = computed(() => {
      return calculatedDifferential.value - gsisPshare.value;
    });

    const withholdingTax = computed(() => {
      return (withholdingTax.value = lessGsis.value * taxPercentage.value);
    });

    const totalDeduction = computed(() => {
      return lessGsis.value + withholdingTax.value;
    });

    const netAmount = computed(() => {
      return grossSalDiff.value - totalDeduction.value;
    });

    // function handleSubmit() {
    //   //check the 1st and last day of the given month
    //   firstDayOfFirstDate.value = dayjs(firstDate.value).startOf('month').format('YYYY-MM-DD')
    //   lastDayOfFirstDate.value = dayjs(firstDate.value).endOf('months').format('YYYY-MM-DD')
    //   firstDayOfSecondDate.value = dayjs(secondDate.value).startOf('month').format('YYYY-MM-DD')
    //   lastDayOfSecondDate.value = dayjs(secondDate.value).endOf('months').format('YYYY-MM-DD')
    //   const checkFirstDate = firstDayOfFirstDate.value === firstDate.value
    //   const checkSecondDate = lastDayOfSecondDate.value === secondDate.value

    //check the difference of calendar days between two dates
    // if(checkFirstDate && checkSecondDate) {
    //   differenceInMonths.value = dayjs(secondDate.value).diff(firstDate.value,"month")+1
    // } else {
    //   differenceInMonths.value = dayjs(secondDate.value).diff(firstDate.value,"month")
    // }

    //   // check businessdays between two dates
    //   businessDaysFirstDate.value = dayjs(lastDayOfFirstDate.value).businessDiff(dayjs(firstDate.value))
    //   businessDaysSecondDate.value = dayjs(secondDate.value).businessDiff(dayjs(firstDayOfSecondDate.value))+1

    //   //calculate calendar days between two dates
    // const totalCalendarDaysFirst = dayjs(lastDayOfFirstDate.value).diff(firstDate.value, "day")+1
    // const totalCalendarDaysSecond = dayjs(secondDate.value).diff(firstDayOfSecondDate.value, "day")+1
    // const fullMonthOfFirstDay = dayjs(lastDayOfFirstDate.value).diff(firstDayOfFirstDate.value,"day")+1
    // const fullMonthOfSecondDay = dayjs(lastDayOfSecondDate.value).diff(firstDayOfSecondDate.value,"day")+1

    //   //mid-year and year-end rule
    // const getYear = dayjs(firstDate.value).year().toString()
    // const midYearDate = getYear.concat("-05-15")
    // const yearEndDate = getYear.concat("-10-31")

    //   //mid-year
    // if(firstDate.value <= midYearDate && secondDate.value >= midYearDate){
    //   midYearEligible.value = true
    // } else {
    //   midYearEligible.value = false
    // }

    //   //year-end
    // if(firstDate.value <= yearEndDate && secondDate.value >= yearEndDate){
    //   yearEndEligible.value = true
    // } else {
    //   yearEndEligible.value = false
    // }

    //   //gsis percentage
    // const gsisPS = 0.09
    // const gsisGS = 0.12

    //   //tax computation
    // if(properSalary.value*12 <= 250000){
    //   taxPercentage.value = 0
    // } else if (properSalary.value*12 >= 250001 && properSalary.value*12 <=400000){
    //   taxPercentage.value = 0.20
    // } else if (properSalary.value*12 >=400001 && properSalary.value*12 <= 800000){
    //   taxPercentage.value = 0.25
    // } else if (properSalary.value*12 >=400001 && properSalary.value*12 <= 800000){
    //   taxPercentage.value = 0.25
    // } else if (properSalary.value*12 >=800001 && properSalary.value*12 <= 2000000){
    //   taxPercentage.value = 0.30
    // } else if (properSalary.value*12 >=2000000 && properSalary.value*12 <= 8000000){
    //   taxPercentage.value = 0.32
    // }

    //   //salary differential
    // initialDifferentialAmount.value = properSalary.value - currentSalary.value

    // if(checkFirstDate && checkSecondDate) {
    //   calculatedDifferential.value = initialDifferentialAmount.value * differenceInMonths.value
    // } else if (checkFirstDate === true && checkSecondDate === false) {
    //   calculatedDifferential.value = (initialDifferentialAmount.value/22*businessDaysSecondDate.value)+(initialDifferentialAmount.value * differenceInMonths.value)
    // } else if (checkFirstDate === false && checkSecondDate === true) {
    //   calculatedDifferential.value = (initialDifferentialAmount.value/22*businessDaysFirstDate.value)+(initialDifferentialAmount.value * differenceInMonths.value)
    // } else if (checkFirstDate === false && checkSecondDate === false) {
    //   calculatedDifferential.value = ((initialDifferentialAmount.value/22*businessDaysSecondDate.value)+(initialDifferentialAmount.value * differenceInMonths.value)+
    //   (initialDifferentialAmount.value/22*businessDaysFirstDate.value)+(initialDifferentialAmount.value * differenceInMonths.value)+
    //   initialDifferentialAmount.value * differenceInMonths.value)
    // }

    //   //calculate sd bonus
    // if(midYearEligible.value  && yearEndEligible.value) {
    //   sdBonus.value = initialDifferentialAmount.value * 2
    // } else if (midYearEligible.value || yearEndEligible.value) {
    //   sdBonus.value = initialDifferentialAmount.value
    // }

    //   //gross salary differential
    // grossSalDiff.value = calculatedDifferential.value + sdBonus.value

    //   //gsis computation
    // if(checkFirstDate === true && checkSecondDate === true) {

    //   gsisPshare.value = initialDifferentialAmount.value * differenceInMonths.value * gsisPS
    //   gsisGshare.value = initialDifferentialAmount.value * differenceInMonths.value * gsisGS

    // } else if (checkFirstDate === false && checkSecondDate === true) {

    //   gsisPshare.value = (initialDifferentialAmount.value * differenceInMonths.value * gsisPS) +
    //   ((initialDifferentialAmount.value/fullMonthOfFirstDay) * totalCalendarDaysFirst * gsisPS)

    //   gsisGshare.value = (initialDifferentialAmount.value * differenceInMonths.value * gsisGS) +
    //   ((initialDifferentialAmount.value/fullMonthOfFirstDay) * totalCalendarDaysFirst * gsisGS)

    // } else if (checkFirstDate === true && checkSecondDate === false) {

    //   gsisPshare.value = (initialDifferentialAmount.value * differenceInMonths.value * gsisPS) +
    //   ((initialDifferentialAmount.value/fullMonthOfSecondDay) * totalCalendarDaysSecond * gsisPS)

    //   gsisGshare.value = (initialDifferentialAmount.value * differenceInMonths.value * gsisGS) +
    //   ((initialDifferentialAmount.value/fullMonthOfSecondDay) * totalCalendarDaysSecond * gsisGS)

    // } else if (checkFirstDate === false && checkSecondDate === false) {

    //   gsisPshare.value = (initialDifferentialAmount.value * differenceInMonths.value * gsisPS) +
    //   ((initialDifferentialAmount.value/fullMonthOfFirstDay) * totalCalendarDaysFirst * gsisPS) +
    //   ((initialDifferentialAmount.value/fullMonthOfSecondDay) * totalCalendarDaysSecond * gsisPS)

    //   gsisGshare.value = (initialDifferentialAmount.value * differenceInMonths.value * gsisGS) +
    //   ((initialDifferentialAmount.value/fullMonthOfFirstDay) * totalCalendarDaysFirst * gsisGS) +
    //   ((initialDifferentialAmount.value/fullMonthOfSecondDay) * totalCalendarDaysSecond * gsisGS)

    // }

    //   //less gsis
    //   lessGsis.value = calculatedDifferential.value - gsisPshare.value

    //   //witholding tax
    //   withholdingTax.value = lessGsis.value * taxPercentage.value

    //   //total deduction
    //   totalDeduction.value =

    //   //net amount
    //   netAmount.value = grossSalDiff.value - totalDeduction.value

    //   initialDifferentialAmount.value = parseFloat(initialDifferentialAmount.value).toFixed(2)
    //   calculatedDifferential.value = parseFloat(calculatedDifferential.value).toFixed(2)
    //   sdBonus.value = parseFloat(sdBonus.value).toFixed(2)
    //   grossSalDiff.value = parseFloat(grossSalDiff.value).toFixed(2)
    //   gsisPshare.value = parseFloat(gsisPshare.value).toFixed(2)
    //   gsisGshare.value = parseFloat(gsisGshare.value).toFixed(2)
    //   lessGsis.value = parseFloat(lessGsis.value).toFixed(2)
    //   withholdingTax.value = parseFloat(withholdingTax.value).toFixed(2)
    //   totalDeduction.value = parseFloat(totalDeduction.value).toFixed(2)
    //   netAmount.value = parseFloat(netAmount.value).toFixed(2)
    // }

    return {
      dayjs,
      dayjsBusinessDays,
      properSalary,
      currentSalary,
      initialDifferentialAmount,
      firstDate,
      secondDate,
      gsisPshare,
      gsisGshare,
      lessGsis,
      withholdingTax,
      totalDeduction,
      netAmount,
    };
  },
};
</script>
