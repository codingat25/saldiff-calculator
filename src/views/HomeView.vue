<template>
  <section class="flex justify-center flex-col space-y-3 md:space-y-0 md:flex-row text-xs">
    <div class="justify-center flex bg-yellow-300 h-screen w-full md:w-2/6  ">
      <form action="" class="flex flex-col space-y-7 justify-center items-center   ">
        <div class="justify-center text-2xl">SALARY DIFFERENTIAL CALCULATOR</div>
        <div class="flex flex-col">
          <label for="fname" class="w-60">Employee Number</label>
          <input type="number" required v-model="employeeNo" class="w-60 h-8 rounded-md p-1 text-center uppercase">
          <label for="fname" class="w-60">First name</label>
          <input type="text" required v-model="fName" class="w-60 h-8 rounded-md p-1 text-center uppercase">
          <label for="lname" class="w-60">Last name</label>
          <input type="text" required v-model="lName" class="w-60 h-8 rounded-md p-1 text-center uppercase">
          <label for="lname" class="w-60">Middle Initial</label>
          <input type="text" required v-model="mInitial" class="w-60 h-8 rounded-md p-1 text-center uppercase">
          <label for="lname" class="w-60">Position</label>
          <select name="SalaryStep" v-model="positionTitle"  class="p-1 h-8 rounded-md text-center">
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
          <label for="lname" class="w-60">Date of Last Promotion</label>
          <input type="date" v-model="dateOfLastProm" class="w-60 h-8 rounded-md p-1 text-center uppercase">

        </div>

        <div class="space-y-2">

          <div class="flex flex-col space-y-1 border-t border-indigo-500">
            <!-- Current SG and Step -->
            <label for="lname" class="w-60">From</label>
            <input type="date" v-model="dateFrom" class="w-60 h-8 rounded-md p-1 text-center uppercase">
            <label for="lname">Current Step</label>
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

          <label for="lname" class="w-60">To</label>
          <input type="date" class="w-60 h-8 rounded-md p-1 text-center uppercase">
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
            <input type="submit" value="CALCULATE" class="mt-2 px-20 py-4 rounded-md cursor-pointer
           bg-indigo-600 hover:bg-indigo-700 focus:outline-indigo-400 
           text-white">
          </div>
        </div>
      </form>
    </div>

<div class="h-screen w-full md:w-4/6 ">

<table class="flex table-auto">
  <thead>
    <tr class="flex flex-col space-y-2 text-xs">
    <div>
      <th class="">Employee Number</th>
      <th class="">First Name</th>
      <th class="">Last Name</th>
      <th class="">Middle Initial</th>
      <th class="">Position</th>
      <th class="">Date of Last Promotion</th>
    </div>

      <th class="">From</th>
      <th class="">To</th>
      <th class="">Salary Differential(1)</th>
      <th class="">Period Covered From</th>
      <th class="">Period Covered To</th>
      <th class="">Salary Differential(2)</th>
      <th class="">SD Bonus</th>
      <th class="">Gross Sal Diff</th>
      <th class="">GSIS</th>
      <th class="">Less GSIS</th>
      <th class="">Witholding Tax</th>
      <th class="">Total Deductions</th>
      <th class="">Net Amount</th>
    </tr>
  </thead>

  <tbody class="flex">
    <tr class="flex flex-col md:flex-row space-y-2 text-xs ">
      <div>
      <td class="uppercase">{{employeeNo}}</td>
      <td class="uppercase">{{fName}}</td>
      <td class="uppercase">{{lName}}</td>
      <td class="uppercase">{{mInitial}}</td>
      <td class="">{{positionTitle}}</td>
      <td class="">{{dateOfLastProm}}</td>
      </div>

      <td class="">{{dateFrom}}</td>
      <td class="">{{dateTo}}</td>
      <td class="">Salary Differential(1)</td>
      <td class="">Period Covered From</td>
      <td class="">Period Covered To</td>
      <td class="">Salary Differential(2)</td>
      <td class="">SD Bonus</td>
      <td class="">Gross Sal Diff</td>
      <td class="">GSIS</td>
      <td class="">Less GSIS</td>
      <td class="">Witholding Tax</td>
      <td class="">Total Deductions</td>
      <td class="">Net Amount</td>
    </tr>
  </tbody>
</table>

    </div>


  </section>

</template> 

<script>
export default {
  name: "HomeView",
  data() {
    return {
      employeeNo: '',
      fName: '',
      lName: '',
      mInitial: '',
      positionTitle: '',
      dateOfLastProm: '',
      dateFrom: '',
      dateTo: '',
    }
  },
  components: {},
};
</script>
