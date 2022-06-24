<template>

  <section class="flex justify-center items-center flex-col md:flex-row">
    <div class="justify-center flex bg-yellow-300 h-screen w-full md:w-1/4 border border-red-500">
      <form action="" class="flex flex-col space-y-6 justify-center items-center  border border-red-500">
        <div class="justify-center text-2xl">SALARY DIFFERENTIAL CALCULATOR</div>
        <div class="flex flex-col">
          <label for="fname" class="w-72">First name</label>
          <input type="text" id="fname" name="fname" value="" class="w-72 rounded-md p-1 text-center uppercase">
          <label for="lname" class="w-72">Last name</label>
          <input type="text" id="lname" name="lname" value="" class="w-72 rounded-md p-1 text-center uppercase">
          <label for="lname" class="w-72">Middle Initial</label>
          <input type="text" id="minitial" name="minitial" value="" class="w-72 rounded-md p-1 text-center uppercase">
          <label for="lname" class="w-72">Position</label>
          <select name="SalaryStep" id="salStep" class="p-1 rounded-md text-center">
            <option value="step1">Teacher 1</option>
            <option value="step2">Teacher 2</option>
            <option value="step3">Teacher 3</option>
            <option value="step4">Head Teacher 1</option>
            <option value="step5">Head Teacher 2</option>
            <option value="step6">Head Teacher 3</option>
            <option value="step7">Head Teacher 4</option>
            <option value="step8">Master Teacher 1</option>
            <option value="step8">Master Teacher 2</option>
          </select>
          <label for="lname" class="w-72">Date of Last Promotion</label>
          <input type="date" id="position" name="position" value="" class="w-72 rounded-md p-1 text-center uppercase">

        </div>

        <div class="space-y-3">

          <div class="flex flex-col space-y-2 border-t border-indigo-500">
            <!-- Current SG and Step -->
            <label for="lname" class="w-72">From</label>
            <input type="date" id="position" name="position" value="" class="w-72 rounded-md p-1 text-center uppercase">
            <label for="lname">Current Salary Grade (SG)</label>
            <select name="SalaryGrade" id="salGrade" class="p-1 text-center">
              <option value="sg1">Salary Grade 1</option>
              <option value="sg2">Salary Grade 2</option>
              <option value="sg3">Salary Grade 3</option>
              <option value="sg4">Salary Grade 4</option>
              <option value="sg5">Salary Grade 5</option>
              <option value="sg6">Salary Grade 6</option>
              <option value="sg7">Salary Grade 7</option>
              <option value="sg8">Salary Grade 8</option>
              <option value="sg9">Salary Grade 9</option>
              <option value="sg10">Salary Grade 10</option>
              <option value="sg11">Salary Grade 11</option>
              <option value="sg12">Salary Grade 12</option>
              <option value="sg13">Salary Grade 13</option>
              <option value="sg14">Salary Grade 14</option>
              <option value="sg15">Salary Grade 15</option>
              <option value="sg16">Salary Grade 16</option>
              <option value="sg17">Salary Grade 17</option>
              <option value="sg18">Salary Grade 18</option>
              <option value="sg19">Salary Grade 19</option>
              <option value="sg20">Salary Grade 20</option>
              <option value="sg21">Salary Grade 21</option>
              <option value="sg21">Salary Grade 22</option>
              <option value="sg21">Salary Grade 23</option>
            </select>
            <label for="lname">Current Step</label>
            <select name="SalaryStep" id="salStep" class="p-1 text-center">
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


          <div class="flex flex-col space-y-2 border-t border-indigo-500">
            <!-- Supposed SG and Step -->

          <label for="lname" class="w-72">To</label>
          <input type="date" id="position" name="position" value="" class="w-72 rounded-md p-1 text-center uppercase">
            <label for="lname">Supposed Salary Grade (SG)</label>
            <select name="SalaryGrade" id="salGrade" class="p-1 text-center">
              <option value="sg1">Salary Grade 1</option>
              <option value="sg2">Salary Grade 2</option>
              <option value="sg3">Salary Grade 3</option>
              <option value="sg4">Salary Grade 4</option>
              <option value="sg5">Salary Grade 5</option>
              <option value="sg6">Salary Grade 6</option>
              <option value="sg7">Salary Grade 7</option>
              <option value="sg8">Salary Grade 8</option>
              <option value="sg9">Salary Grade 9</option>
              <option value="sg10">Salary Grade 10</option>
              <option value="sg11">Salary Grade 11</option>
              <option value="sg12">Salary Grade 12</option>
              <option value="sg13">Salary Grade 13</option>
              <option value="sg14">Salary Grade 14</option>
              <option value="sg15">Salary Grade 15</option>
              <option value="sg16">Salary Grade 16</option>
              <option value="sg17">Salary Grade 17</option>
              <option value="sg18">Salary Grade 18</option>
              <option value="sg19">Salary Grade 19</option>
              <option value="sg20">Salary Grade 20</option>
              <option value="sg21">Salary Grade 21</option>
              <option value="sg22">Salary Grade 22</option>
              <option value="sg23">Salary Grade 23</option>
            </select>
            <label for="lname">Supposed Step</label>
            <select name="SalaryStep" id="salStep" class="p-1 text-center">
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

          <div class="">
            <input type="submit" value="SUBMIT" class="mt-2 px-20 py-1 rounded-md cursor-pointer
           bg-indigo-600 hover:bg-indigo-700 focus:outline-indigo-400 
           text-white">
          </div>
        </div>
      </form>
    </div>

    <div class="h-screen w-3/4 border border-red-500">

      <h1>test</h1>

    </div>


  </section>

</template> 

<script>
// @ is an alias to /src

export default {
  name: "HomeView",
  components: {},
};
</script>
