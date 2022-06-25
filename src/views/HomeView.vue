<template>
  <section class="flex justify-center flex-col h-screen space-y-2 md:space-y-0 md:flex-row text-xs">
    <div class="justify-center flex bg-yellow-300 h-full w-full md:w-2/6  ">
      <form action="" class="flex flex-col space-y-6 justify-center items-center   ">
        <div class="justify-center text-2xl">SALARY DIFFERENTIAL CALCULATOR</div>
        <div class="flex flex-col">
          <label for="fname" class="w-60 lg:w-72">Employee Number</label>
          <input type="number" required v-model="employeeNo" class="w-60 lg:w-72 h-8 rounded-md p-1 text-center uppercase">
          <label for="fname" class="w-60 lg:w-72">First name</label>
          <input type="text" required v-model="fName" class="w-60 lg:w-72 h-8 rounded-md p-1 text-center uppercase">
          <label for="lname" class="w-60 lg:w-72">Last name</label>
          <input type="text" required v-model="lName" class="w-60 lg:w-72 h-8 rounded-md p-1 text-center uppercase">
          <label for="lname" class="w-60 lg:w-72">Middle Initial</label>
          <input type="text" required v-model="mInitial" class="w-60 lg:w-72 h-8 rounded-md p-1 text-center uppercase">
          <label for="lname" class="w-60 lg:w-72">Position</label>
          <select name="SalaryStep" v-model="positionTitle"  class="p-1 lg:w-72 h-8 rounded-md text-center">
            <option value="Teacher 1">Teacher 1</option>
            <option value="Teacher 2">Teacher 2</option>
            <option value="Teacher 3">Teacher 3</option>
            <option value="Head Teacher 1">Head Teacher 1</option>
            <option value="Head Teacher 2">Head Teacher 2</option>
            <option value="Head Teacher 3">Head Teacher 3</option>
            <option value="Head Teacher 4">Head Teacher 4</option>
            <option value="Master Teacher 1">Master Teacher 1</option>
            <option value="Master Teacher 2">Master Teacher 2</option>
          </select>
          <label for="lname" class="w-60 lg:w-72 ">Date of Last Promotion</label>
          <input type="date" v-model="dateOfLastProm" class="w-60 lg:w-72 h-8 rounded-md p-1 text-center uppercase">

        </div>

        <div class="space-y-2">

          <div class="flex flex-col space-y-1 border-t border-indigo-500">
            <!-- Current SG and Step -->
            <label class="w-60">From</label>
            <input type="date" v-model="dateFrom" class="w-60 h-8 rounded-md p-1 text-center uppercase">
            <label>Current Step</label>
            <select class="w-60 p-1 text-center">
              <option value="step1">Step 1</option>
              <option value="step2">Step 2</option>
              <option value="step3">Step 3</option>
              <option value="step4">Step 4</option>
              <option value="step5">Step 5</option>
              <option value="step6">Step 6</option>
              <option value="step7">Step 7</option>
              <option value="step8">Step 8</option>
            </select>
          </div>


          <div class="flex flex-col space-y-1 border-t border-indigo-500">
            <!-- Supposed SG and Step -->

          <label class="w-60">To</label>
          <input type="date" v-model="dateTo" class="w-60 h-8 rounded-md p-1 text-center uppercase">
            <label for="lname">Supposed Step</label>
            <select  class="w-60 p-1 text-center">
              <option value="step1">Step 1</option>
              <option value="step2">Step 2</option>
              <option value="step3">Step 3</option>
              <option value="step4">Step 4</option>
              <option value="step5">Step 5</option>
              <option value="step6">Step 6</option>
              <option value="step7">Step 7</option>
              <option value="step8">Step 8</option>
            </select>
          </div>

          <div class="text-l">
            <input type="submit" value="CALCULATE" class="px-20 py-4 rounded-md cursor-pointer
           bg-indigo-600 hover:bg-indigo-700 focus:outline-indigo-400 
           text-white">
          </div>
        </div>
      </form>
    </div>

<div class="flex flex-col  space-y-5 text-lg h-screen w-full md:w-4/6 ">

      <div>Employee Number: {{employeeNo}}</div> 
      <div>First Name: {{fName}}</div>
      <div>Last Name: {{lName}}</div>
      <div>Middle Initial: {{mInitial}}</div>
      <div>Position:{{positionTitle}}</div>
      <div>Date of Last Promotion:{{dateOfLastProm}}</div>
      <div>From:{{dateFrom}}</div>
      <div>To:{{dateTo}}</div>
      <div>Salary Differential(1):{{salDiff1}}</div>
      <div>Period Covered From:{{periodFrom}}</div>
      <div>Period Covered To:{{periodTo}}</div>
      <div>Salary Differential(2):{{salDiff2}}</div>
      <div>SD Bonus:{{sdBonus}}</div>
      <div>Gross Sal Diff:{{grossSalDiff}}</div>
      <div>GSIS:{{gsis}}</div>
      <div>Less GSIS:{{lessGsis}}</div>
      <div>Witholding Tax:{{withholdingtax}}</div>
      <div>Total Deductions:{{totalDeduct}}</div>
      <div>Net Amount:{{netAmount}}</div>
      <div>Test dayjs: {{dayjs('10/19/2021').daysInMonth()}}</div>
    </div>


  </section>

</template> 

<script>
import dayjs from 'dayjs'
import dayjsBusinessDays from 'dayjs-business-days'


dayjs.extend(dayjsBusinessDays)


export default {
  name: "HomeView",
  data() {
      return {
      dayjs,
      dayjsBusinessDays,
      employeeNo: '',
      fName: '',
      lName: '',
      mInitial: '',
      positionTitle: '',
      dateOfLastProm: '',
      dateFrom: '',
      dateTo: '',
      salDiff1: '',
      periodFrom: '',
      periodTo: '',
      salDiff2: '',
      sdBonus: '',
      grossSalDiff: '',
      gsis: '',
      lessGsis: '',
      withholdingtax: '',
      totalDeduct: '',
      netAmount: '',
    }
  },
  components: {},
};
</script>
