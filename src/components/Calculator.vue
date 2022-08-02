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
          v-model.number="currentSalary"
        />
        <input
          class="p-1 border border-gray-200"
          type="number"
          required
          placeholder=""
          v-model.number="properSalary"
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
        <p>Period Covered (from): {{ firstDate }}</p>
        <p>Period Covered (to): {{ secondDate }}</p>
        <p>Gross Salary Differential:{{ calculatedDifferential.toFixed(2) }}</p>
        <p>SD Bonus:{{ parseFloat(sdBonus).toFixed(2) }}</p>
        <p>Gross SD + SD Bonus: {{ grossSalDiff.toFixed(2) }}</p>
        <p>GSIS Personal Share (PS): {{ gsisPshare.toFixed(2) }}</p>
        <p>GSIS Government Share (GS): {{ gsisGshare.toFixed(2) }}</p>
        <p>Less GSIS: {{ lessGsis.toFixed(2) }}</p>
        <p>Withholding Tax: {{ parseFloat(withholdingTax).toFixed(2) }}</p>
        <p>Total Deduction: {{ parseFloat(totalDeduction).toFixed(2) }}</p>
        <p>Net Amount: {{ netAmount.toFixed(2) }}</p>
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
    const firstDate = ref("");
    const secondDate = ref("");

    const initialDifferentialAmount = computed({
      get() {
        return properSalary.value - currentSalary.value;
      },
      set(newValue) {
        console.log(newValue);
      },
    });
    initialDifferentialAmount.value = 10;
    console.log(initialDifferentialAmount.value)

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
      return firstDayOfFirstDate.value === firstDate.value;
    });

    const checkSecondDate = computed(() => {
      return lastDayOfSecondDate.value === secondDate.value;
    });

    const differenceInMonths = computed(() => {
      if (checkFirstDate.value && checkSecondDate.value) {
        return dayjs(secondDate.value).diff(firstDate.value, "month") + 1;
      } else {
        return dayjs(secondDate.value).diff(firstDate.value, "month");
      }
    });

    const businessDaysFirstDate = computed(() => {
      return dayjs(lastDayOfFirstDate.value).businessDiff(
        dayjs(firstDate.value)
      );
    });

    const businessDaysSecondDate = computed(() => {
      return (
        dayjs(secondDate.value).businessDiff(
          dayjs(firstDayOfSecondDate.value)
        ) + 1
      );
    });

    const totalCalendarDaysFirst = computed(() => {
      return dayjs(lastDayOfFirstDate.value).diff(firstDate.value, "day") + 1;
    });

    const totalCalendarDaysSecond = computed(() => {
      return (
        dayjs(secondDate.value).diff(firstDayOfSecondDate.value, "day") + 1
      );
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
      return dayjs(firstDate.value).year().toString();
    });

    const midYearDate = computed(() => {
      return getYear.value.concat("-05-15");
    });

    const yearEndDate = computed(() => {
      return getYear.value.concat("-10-31");
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
      } else if (
        properSalary.value * 12 >= 2000000 &&
        properSalary.value * 12 <= 8000000
      ) {
        return 0.32;
      }
    });

    const calculatedDifferential = computed({
      get() {
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
            (initialDifferentialAmount.value / 22) *
              businessDaysFirstDate.value +
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
            (initialDifferentialAmount.value / 22) *
              businessDaysFirstDate.value +
            initialDifferentialAmount.value * differenceInMonths.value +
            initialDifferentialAmount.value * differenceInMonths.value
          );
        }
      },
      set(newValue) {
        newValue;
      },
    });
    calculatedDifferential.value = 0;

    const sdBonus = computed({
      get() {
        if (midYearEligible.value && yearEndEligible.value) {
          return initialDifferentialAmount.value * 2;
        } else if (midYearEligible.value || yearEndEligible.value) {
          return initialDifferentialAmount.value;
        }
      },
      set(newValue) {
        newValue;
      },
    });
    sdBonus.value = 0;

    const grossSalDiff = computed({
      get() {
        return calculatedDifferential.value + sdBonus.value;
      },
      set(newValue) {
        newValue;
      },
    });
    grossSalDiff.value = 0;

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
      return (withholdingTax.value = lessGsis.value * taxPercentage.value);
    });

    const totalDeduction = computed(() => {
      return gsisPshare.value + withholdingTax.value;
    });

    const netAmount = computed(() => {
      return grossSalDiff.value - totalDeduction.value;
    });

    return {
      dayjs,
      dayjsBusinessDays,
      properSalary,
      currentSalary,
      initialDifferentialAmount,
      firstDate,
      secondDate,
      calculatedDifferential,
      sdBonus,
      grossSalDiff,
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
