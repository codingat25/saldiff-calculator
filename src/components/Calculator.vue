<template>
  <section id="mainform" class="flex bg-lightCyan">
    <div class="">
      <div
        class="flex flex-col justify-center items-center h-screen w-screen md:flex-row bg-whiteBackground overflow-auto">
        <form @submit.prevent="" class="flex flex-col justify-center space-y-5 md:flex-row md:space-y-0 md:space-x-10  items-center">
        <div class="flex flex-col justify-center items-center">
          <h1 class="font-black text-cyan-800 text-3xl">S T E P</h1>
          <h1 class="font-black text-cyan-800 text-3xl">I N C R E M E N T</h1>
        </div>
          <div class="flex justify-center items-center flex-col space-y-2 mx-11 w-5/6">
            <input class="w-72 p-1 bg-lightCyan text-darkCyan font-black text-2xl rounded-md" type="number" required placeholder="Current Salary"
              v-model.number="currentSalary" />
            <input class="w-72 p-1 bg-lightCyan text-darkCyan font-black text-2xl rounded-md" type="number" required placeholder="Proper Salary"
              v-model.number="properSalary" />
            <input class="w-72 p-1 bg-lightCyan text-darkCyan font-black text-2xl rounded-md" type="text" required placeholder="First Date"
              v-model="firstDate" />
            <input class="w-72 p-1 bg-lightCyan text-darkCyan font-black text-2xl rounded-md" type="text" required placeholder="Second Date"
              v-model="secondDate" />
          </div>
          <div class="flex bg-darkCyan text-sm rounded-xl">
            <div class="">
              <p>
                Current Salary:<br>
                {{
                    formattedCurrentSalary.toLocaleString("en-US", {
                      minimumFractionDigits: 2,
                      maximumFractionDigits: 2,
                    })
                }}
              </p>
              <p>
                Actual Salary:<br>
                {{
                    formattedProperSalary.toLocaleString("en-US", {
                      minimumFractionDigits: 2,
                      maximumFractionDigits: 2,
                    })
                }}
              </p>
              <p>
                Difference:<br>
                {{
                    formattedInitialDifferentialAmount.toLocaleString("en-US", {
                      minimumFractionDigits: 2,
                      maximumFractionDigits: 2,
                    })
                }}
              </p>
              <p>Period Covered (from):<br>
                {{ firstDate }}</p>
              <p>Period Covered (to):<br>
                {{ secondDate }}</p>
              <p>
                Gross Salary Differential:<br>
                {{
                    formattedCalculatedDifferential.toLocaleString("en-US", {
                      minimumFractionDigits: 2,
                      maximumFractionDigits: 2,
                    })
                }}
              </p>
              <p>
                SD Bonus:<br>
                {{
                    formattedSdBonus.toLocaleString("en-US", {
                      minimumFractionDigits: 2,
                      maximumFractionDigits: 2,
                    })
                }}
              </p>
              <p>
                Gross SD + SD Bonus:<br>
                {{
                    formattedGrossSalDiff.toLocaleString("en-US", {
                      minimumFractionDigits: 2,
                      maximumFractionDigits: 2,
                    })
                }}
              </p>

            </div>

            <div>
              <p>
                GSIS PS:<br>
                {{
                    formattedGsisPshare.toLocaleString("en-US", {
                      minimumFractionDigits: 2,
                      maximumFractionDigits: 2,
                    })
                }}
              </p>
              <p>
                GSIS GS:<br>
                {{
                    formattedGsisGshare.toLocaleString("en-US", {
                      minimumFractionDigits: 2,
                      maximumFractionDigits: 2,
                    })
                }}
              </p>
              <p>
                Less GSIS:<br>
                {{
                    formattedLessGsis.toLocaleString("en-US", {
                      minimumFractionDigits: 2,
                      maximumFractionDigits: 2,
                    })
                }}
              </p>
              <p>
                Withholding Tax:<br>
                {{
                    formattedWithholdingTax.toLocaleString("en-US", {
                      minimumFractionDigits: 2,
                      maximumFractionDigits: 2,
                    })
                }}
              </p>
              <p>
                Total Deduction:<br>
                {{
                    totalDeduction.toLocaleString("en-US", {
                      minimumFractionDigits: 2,
                      maximumFractionDigits: 2,
                    })
                }}
              </p>
              <p>
                Net Amount:<br>
                {{
                    netAmount.toLocaleString("en-US", {
                      minimumFractionDigits: 2,
                      maximumFractionDigits: 2,
                    })
                }}
              </p>

            </div>
          </div>
          <div class="flex space-x-10">
            <div class="flex items-center justify-center h-10 w-20 bg-darkCyan text-2xl text-white">COPY</div>
            <div class="flex items-center justify-center h-10 w-20 bg-grayCyan text-2xl text-white">RESET</div>
          </div>

        </form>
      </div>
    </div>

  </section>
</template>

<script>
import { ref, computed } from "vue";
import dayjs from "dayjs";
import dayjsBusinessDays from "dayjs-business-days2";
import { round } from "mathjs/number";

dayjs.extend(dayjsBusinessDays);

export default {
  setup() {
    const currentSalary = ref(0);
    const properSalary = ref(0);
    const firstDate = ref("");
    const secondDate = ref("");

    // watch([properSalary,currentSalary] (newValue) => {
    // const result = newValue.replace("/\D/g", "").replace("/\B(?=(\d{3})+(?!\d))/g", ",");
    //   Vue.nextTick(() => properSalary.value = result);
    // });

    const initialDifferentialAmount = computed(() => {
      if (properSalary.value - currentSalary.value <= 0) {
        return 0;
      } else {
        return properSalary.value - currentSalary.value;
      }
    });

    const firstDayOfFirstDate = computed(() => {
      if (
        dayjs(firstDate.value).startOf("month").format("MM/DD/YYYY") ===
        "Invalid Date"
      ) {
        return 0;
      } else
        return dayjs(firstDate.value).startOf("month").format("MM/DD/YYYY");
    });

    const lastDayOfFirstDate = computed(() => {
      if (
        dayjs(firstDate.value).endOf("month").format("MM/DD/YYYY") ===
        "Invalid Date"
      ) {
        return 0;
      } else return dayjs(firstDate.value).endOf("month").format("MM/DD/YYYY");
    });

    const firstDayOfSecondDate = computed(() => {
      if (
        dayjs(secondDate.value).startOf("month").format("MM/DD/YYYY") ===
        "Invalid Date"
      ) {
        return 0;
      } else
        return dayjs(secondDate.value).startOf("month").format("MM/DD/YYYY");
    });

    const lastDayOfSecondDate = computed(() => {
      if (
        dayjs(secondDate.value).endOf("months").format("MM/DD/YYYY") ===
        "Invalid Date"
      ) {
        return 0;
      } else
        return dayjs(secondDate.value).endOf("months").format("MM/DD/YYYY");
    });

    const checkFirstDate = computed(() => {
      return firstDayOfFirstDate.value === firstDate.value;
    });

    const checkSecondDate = computed(() => {
      return lastDayOfSecondDate.value === secondDate.value;
    });

    const differenceInMonths = computed(() => {
      if (checkFirstDate.value && checkSecondDate.value) {
        return dayjs(secondDate.value).diff(firstDate.value, "month") + 1;
      } else if (
        (checkFirstDate.value === true && checkSecondDate.value === false) ||
        (checkFirstDate.value === false && checkSecondDate.value === true)
      ) {
        return dayjs(secondDate.value).diff(firstDate.value, "month");
      } else return 0;
    });

    const totalCalendarDaysFirst = computed(() => {
      if (
        isNaN(
          dayjs(lastDayOfFirstDate.value).diff(firstDate.value, "day") + 1
        ) === true
      ) {
        return 0;
      } else {
        return dayjs(lastDayOfFirstDate.value).diff(firstDate.value, "day") + 1;
      }
    });

    const totalCalendarDaysSecond = computed(() => {
      if (
        isNaN(
          dayjs(secondDate.value).diff(firstDayOfSecondDate.value, "day") + 1
        ) === true
      ) {
        return 0;
      } else {
        return (
          dayjs(secondDate.value).diff(firstDayOfSecondDate.value, "day") + 1
        );
      }
    });

    const fullMonthOfFirstDay = computed(() => {
      return (
        dayjs(lastDayOfFirstDate.value).diff(firstDayOfFirstDate.value, "day") +
        1
      );
    });

    const fullMonthOfSecondDay = computed(() => {
      return (
        dayjs(lastDayOfSecondDate.value).diff(
          firstDayOfSecondDate.value,
          "day"
        ) + 1
      );
    });

    const getYear = computed(() => {
      if (firstDate.value === null) {
        return 0;
      } else {
        return dayjs(firstDate.value).year().toString();
      }
    });

    const midYearDate = computed(() => {
      return "05/15/".concat(getYear.value);
    });

    const yearEndDate = computed(() => {
      return "10/31/".concat(getYear.value);
    });

    const getMonthOfFirstDay = computed(() => {
      return dayjs(firstDate.value).month() + 1;
    });

    const getDayOfFirstDate = computed(() => {
      return dayjs(firstDate.value).date();
    });

    const getDayOfLastDateOfFirstDate = computed(() => {
      return dayjs(lastDayOfFirstDate.value).date();
    });

    const getMonthOfSecondDay = computed(() => {
      return dayjs(secondDate.value).month() + 1;
    });

    const getDayOfSecondDate = computed(() => {
      return dayjs(secondDate.value).date();
    });

    const getDayOfFirstDateOfSecondDate = computed(() => {
      return dayjs(firstDayOfSecondDate.value).date();
    });

    const getDayOfLastDateOfSecondDate = computed(() => {
      return dayjs(lastDayOfSecondDate.value).date();
    });

    const businessDaysFirstDate = computed(() => {
      const arrayedDates = [];
      for (
        let i = getDayOfFirstDate.value;
        i <= getDayOfLastDateOfFirstDate.value;
        i++
      ) {
        arrayedDates.push(`${getMonthOfFirstDay.value}/${i}/${getYear.value}`);
      }
      const allTrue = arrayedDates.filter((arrayed) =>
        dayjs(arrayed).isBusinessDay()
      );
      return allTrue.length;
    });

    const businessDaysSecondDate = computed(() => {
      const arrayedDates = [];
      for (
        let i = getDayOfFirstDateOfSecondDate.value;
        i <= getDayOfSecondDate.value;
        i++
      ) {
        arrayedDates.push(`${getMonthOfSecondDay.value}/${i}/${getYear.value}`);
      }
      const allTrue = arrayedDates.filter((arrayed) =>
        dayjs(arrayed).isBusinessDay()
      );
      return allTrue.length;
    });

    const midYearEligible = computed(() => {
      if (
        firstDate.value <= midYearDate.value &&
        secondDate.value >= midYearDate.value
      ) {
        return true;
      } else {
        return false;
      }
    });

    const yearEndEligible = computed(() => {
      if (
        firstDate.value <= yearEndDate.value &&
        secondDate.value >= yearEndDate.value
      ) {
        return true;
      } else {
        return false;
      }
    });

    const gsisPS = computed(() => {
      return 0.09;
    });

    const gsisGS = computed(() => {
      return 0.12;
    });

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
      } else if (properSalary.value * 12 >= 2000001) {
        return 0.32;
      }
    });

    const calculatedDifferential = computed(() => {
      if (checkFirstDate.value && checkSecondDate.value) {
        return initialDifferentialAmount.value * differenceInMonths.value;
      } else if (
        checkFirstDate.value === true &&
        checkSecondDate.value === false
      ) {
        return (
          (initialDifferentialAmount.value / 22) *
          businessDaysSecondDate.value +
          initialDifferentialAmount.value * differenceInMonths.value
        );
      } else if (
        checkFirstDate.value === false &&
        checkSecondDate.value === true
      ) {
        return (
          (initialDifferentialAmount.value / 22) * businessDaysFirstDate.value +
          initialDifferentialAmount.value * differenceInMonths.value
        );
      } else if (
        checkFirstDate.value === false &&
        checkSecondDate.value === false
      ) {
        return (
          (initialDifferentialAmount.value / 22) *
          businessDaysSecondDate.value +
          initialDifferentialAmount.value * differenceInMonths.value +
          (initialDifferentialAmount.value / 22) * businessDaysFirstDate.value +
          initialDifferentialAmount.value * differenceInMonths.value +
          initialDifferentialAmount.value * differenceInMonths.value
        );
      }
    });

    const sdBonus = computed(() => {
      if (midYearEligible.value && yearEndEligible.value) {
        return initialDifferentialAmount.value * 2;
      } else if (midYearEligible.value || yearEndEligible.value) {
        return initialDifferentialAmount.value;
      } else if (
        midYearEligible.value === false &&
        yearEndEligible.value === false
      ) {
        return 0;
      }
    });

    const grossSalDiff = computed(() => {
      return calculatedDifferential.value + sdBonus.value;
    });

    const gsisPshare = computed(() => {
      if (checkFirstDate.value === true && checkSecondDate.value === true) {
        return (
          initialDifferentialAmount.value *
          differenceInMonths.value *
          gsisPS.value
        );
      } else if (
        checkFirstDate.value === false &&
        checkSecondDate.value === true
      ) {
        return (
          initialDifferentialAmount.value *
          differenceInMonths.value *
          gsisPS.value +
          (initialDifferentialAmount.value / fullMonthOfFirstDay.value) *
          totalCalendarDaysFirst.value *
          gsisPS.value
        );
      } else if (
        checkFirstDate.value === true &&
        checkSecondDate.value === false
      ) {
        return (
          initialDifferentialAmount.value *
          differenceInMonths.value *
          gsisPS.value +
          (initialDifferentialAmount.value / fullMonthOfSecondDay.value) *
          totalCalendarDaysSecond.value *
          gsisPS.value
        );
      } else if (
        checkFirstDate.value === false &&
        checkSecondDate.value === false
      ) {
        return (
          initialDifferentialAmount.value *
          differenceInMonths.value *
          gsisPS.value +
          (initialDifferentialAmount.value / fullMonthOfFirstDay.value) *
          totalCalendarDaysFirst.value *
          gsisPS.value +
          (initialDifferentialAmount.value / fullMonthOfSecondDay.value) *
          totalCalendarDaysSecond.value *
          gsisPS.value
        );
      }
    });

    const gsisGshare = computed(() => {
      if (checkFirstDate.value === true && checkSecondDate.value === true) {
        return (
          initialDifferentialAmount.value *
          differenceInMonths.value *
          gsisGS.value
        );
      } else if (
        checkFirstDate.value === false &&
        checkSecondDate.value === true
      ) {
        return (
          initialDifferentialAmount.value *
          differenceInMonths.value *
          gsisGS.value +
          (initialDifferentialAmount.value / fullMonthOfFirstDay.value) *
          totalCalendarDaysFirst.value *
          gsisGS.value
        );
      } else if (
        checkFirstDate.value === true &&
        checkSecondDate.value === false
      ) {
        return (
          initialDifferentialAmount.value *
          differenceInMonths.value *
          gsisGS.value +
          (initialDifferentialAmount.value / fullMonthOfSecondDay.value) *
          totalCalendarDaysSecond.value *
          gsisGS.value
        );
      } else if (
        checkFirstDate.value === false &&
        checkSecondDate.value === false
      ) {
        return (
          initialDifferentialAmount.value *
          differenceInMonths.value *
          gsisGS.value +
          (initialDifferentialAmount.value / fullMonthOfFirstDay.value) *
          totalCalendarDaysFirst.value *
          gsisGS.value +
          (initialDifferentialAmount.value / fullMonthOfSecondDay.value) *
          totalCalendarDaysSecond.value *
          gsisGS.value
        );
      }
    });

    const lessGsis = computed(() => {
      return calculatedDifferential.value - gsisPshare.value;
    });

    const withholdingTax = computed(() => {
      return lessGsis.value * taxPercentage.value;
    });

    const formattedProperSalary = computed(() => {
      return round(properSalary.value, 2);
    });

    const formattedCurrentSalary = computed(() => {
      return round(currentSalary.value, 2);
    });
    const formattedInitialDifferentialAmount = computed(() => {
      return round(initialDifferentialAmount.value, 2);
    });
    const formattedCalculatedDifferential = computed(() => {
      return round(calculatedDifferential.value, 2);
    });
    const formattedSdBonus = computed(() => {
      return round(sdBonus.value, 2);
    });
    const formattedGrossSalDiff = computed(() => {
      return round(grossSalDiff.value, 2);
    });
    const formattedGsisPshare = computed(() => {
      return round(gsisPshare.value, 2);
    });
    const formattedGsisGshare = computed(() => {
      return round(gsisGshare.value, 2);
    });
    const formattedLessGsis = computed(() => {
      return round(lessGsis.value, 2);
    });
    const formattedWithholdingTax = computed(() => {
      return round(withholdingTax.value, 2);
    });

    const totalDeduction = computed(() => {
      return formattedGsisPshare.value + formattedWithholdingTax.value;
    });

    const netAmount = computed(() => {
      return round(formattedGrossSalDiff.value - totalDeduction.value, 3);
    });



    return {
      dayjs,
      dayjsBusinessDays,
      properSalary,
      currentSalary,
      formattedProperSalary,
      formattedCurrentSalary,
      formattedInitialDifferentialAmount,
      firstDate,
      secondDate,
      formattedCalculatedDifferential,
      formattedSdBonus,
      formattedGrossSalDiff,
      formattedGsisPshare,
      formattedGsisGshare,
      formattedLessGsis,
      formattedWithholdingTax,
      totalDeduction,
      netAmount,
    };
  },
};
</script>
