<template>
  <section>
    <div class="home flex">
      <div class="justify-center flex bg-yellow-300 h-screen w-1/2">
        <h1 class="absolute mt-10 uppercase text-3xl">Salary Differential Calculator</h1>
        <form action=""
          class="flex flex-row space-x-10 justify-center items-center space-y-2 h-full w-full">
          <div class="flex flex-col">
            <label for="fname" class="w-72">First name</label>
            <input type="text" id="fname" name="fname" value="" class="w-72 rounded-md p-2 text-center uppercase">
            <label for="lname" class="w-72">Last name</label>
            <input type="text" id="lname" name="lname" value="" class="w-72 rounded-md p-2 text-center uppercase">
            <label for="lname" class="w-72">Middle Initial</label>
            <input type="text" id="minitial" name="minitial" value="" class="w-72 rounded-md p-2 text-center uppercase">
            <label for="lname" class="w-72">Position</label>
            <select name="SalaryStep" id="salStep" class="p-2 text-center">
                <option value="step1">Teacher 1</option>
                <option value="step2">Teacher 2</option>
                <option value="step3">Teacher 3</option>
                <option value="step4">Teacher 4</option>
                <option value="step5">Teacher 5</option>
                <option value="step6">Teacher 6</option>
                <option value="step7">Teacher 7</option>
                <option value="step8">Teacher 8</option>
              </select>
            <label for="lname" class="w-72">Date of Last Promotion</label>
            <input type="date" id="position" name="position" value="" class="w-72 rounded-md p-2 text-center uppercase">
          </div>

          <div>

            <div class="flex flex-col space-x-2">
              <!-- Current SG and Step -->
              <label for="lname">Current Salary Grade (SG)</label>
              <select name="SalaryGrade" id="salGrade" class="p-2 text-center">
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
              <select name="SalaryStep" id="salStep" class="p-2 text-center">
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


            <div class="flex flex-col space-x-2 mt-10">
              <!-- Supposed SG and Step -->
              <label for="lname">Supposed Salary Grade (SG)</label>
              <select name="SalaryGrade" id="salGrade" class="p-2 text-center">
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
              <label for="lname">Supposed Step</label>
              <select name="SalaryStep" id="salStep" class="p-2 text-center">
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
              <input type="submit" value="SUBMIT" class="mt-2 px-16 py-2 rounded-md cursor-pointer
           bg-indigo-600 hover:bg-indigo-700 focus:outline-indigo-400 
           text-white">
            </div>
          </div>
        </form>
      </div>
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
