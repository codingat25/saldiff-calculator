<template>
  <section class="flex justify-center flex-col h-screen space-y-2 md:space-y-0 md:flex-row text-xs">
    <div class="justify-center flex bg-yellow-300 h-full w-full md:w-2/6  ">
      <form action="" class="flex flex-col space-y-6 justify-center items-center   ">
        <div class="justify-center text-2xl">SALARY DIFFERENTIAL CALCULATOR</div>
        <div class="flex flex-col">
          <label for="employeeNo" class="w-60 lg:w-72">Employee Number</label>
          <input type="number" required id="employeeNo" v-model="employeeNo" class="w-60 lg:w-72 h-8 rounded-md p-1 text-center uppercase">
          <label for="fname" class="w-60 lg:w-72">First name</label>
          <input type="text" required id="fName" v-model="fName" class="w-60 lg:w-72 h-8 rounded-md p-1 text-center uppercase">
          <label for="lName" class="w-60 lg:w-72">Last name</label>
          <input type="text" required id="lName" v-model="lName" class="w-60 lg:w-72 h-8 rounded-md p-1 text-center uppercase">
          <label for="mInitial" class="w-60 lg:w-72">Middle Initial</label>
          <input type="text" required id="mInitial" v-model="mInitial" class="w-60 lg:w-72 h-8 rounded-md p-1 text-center uppercase">
          <label for="positionTitle" class="w-60 lg:w-72">Position</label>
          <select name="SalaryStep" id="positionTitle" v-model="positionTitle"  class="p-1 lg:w-72 h-8 rounded-md text-center">
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
          <label for="dateOfLastProm" class="w-60 lg:w-72 ">Date of Last Promotion</label>
          <input type="date" id="dateOfLastProm" v-model="dateOfLastProm" class="w-60 lg:w-72 h-8 rounded-md p-1 text-center uppercase">

        </div>

        <div class="space-y-2">

          <div class="flex flex-col space-y-1 border-t border-indigo-500">
            <!-- Current SG and Step -->
            <label for="dateFrom" class="w-60">From</label>
            <input type="date" id="dateFrom" v-model="dateFrom" class="w-60 h-8 rounded-md p-1 text-center uppercase">
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

          <label for="dateTo" class="w-60">To</label>
          <input type="date" id="dateTo" v-model="dateTo" class="w-60 h-8 rounded-md p-1 text-center uppercase">
            <label for="">Supposed Step</label>
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
            <input type="submit" @click="handleSubmit" class="px-20 py-4 rounded-md cursor-pointer
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
      <div>From:{{dayjs(dateFrom).format('MM/DD/YYYY')}}</div>
      <div>To:{{dayjs(dateTo).format('MM/DD/YYYY')}}</div>
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
      <div>Test dayjs: {{dayjs('10/31/2021').businessDiff(dayjs(dateFrom))}}</div>
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
      employeeNo:null,
      fName: null,
      lName: null,
      mInitial: null,
      positionTitle: null,
      dateOfLastProm: null,
      dateFrom: null,
      dateTo: null,
      salDiff1: null,
      periodFrom: null,
      periodTo: null,
      salDiff2: null,
      sdBonus: null,
      grossSalDiff: null,
      gsis: null,
      lessGsis: null,
      withholdingtax: null,
      totalDeduct: null,
      netAmount: null,
    }
  },
  methods: {
    handleSubmit() {
      //Compute Salary Differential depending on business days
      let computeBusinessDays
      let lastDayOfMonth
      let differenceInMonths

      this.salDiff1 = this.periodTo - this.periodFrom
      lastDayOfMonth = dayjs(this.dateFrom).endOf('month').format('MM/DD/YYYY')
      computeBusinessDays = dayjs(lastDayOfMonth).businessDiff(dayjs(this.dateFrom))
      differenceInMonths = dayjs(this.dateTo).diff(this.dateFrom, 'month') // 2
      this.salDiff2 = ((this.salDiff1/22)*computeBusinessDays)+(this.salDiff1*differenceInMonths)
      this.salDiff2 = Math.round(this.salDiff2*100)/100
      
      //Compute if personnel is eligible for SD bonus, if eligible SD Bonus should be 1 month of sal diff

          //sample code should be or hopefully xD: dayjs('2010-10-20').isBetween('2010-10-19', dayjs('2010-10-25')) 
          //if inbetween is true and if calendar days is equivalent to 1 month or more, add sd bonus

      
      //Add Salary Differential + SD Bonus

          //code here

      //Compute GSIS

          //code here

      //Subtract GSIS from Total of SD 

          //code here

      //Compute Tax

          //code here

      //Compute Total Deductions

          //code here
      
      //Compute Net

          //code here


    } 
  },
  components: {},
};
</script>


 