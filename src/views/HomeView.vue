<template>
  <section id="mainform" class="flex justify-center items-center w-screen h-screen border border-gray-300">
    <div class="h-screen w-screen md:w-4/5 md:h-5/6  border border-gray-500">
      <form action="" class="h-full w-full">
        <div class="h-fit space-y-2 w-full md:p-0 md:h-1/3 md:space-y-0 border border-gray-300">
          <div class="h-1/6 w-full border border-blue-300"><h1>Employee Information</h1></div>
          <div class="flex flex-col items-center md:flex-row h-5/6 w-full border border-red-300">
            <label for=""><div class="text-sm">Employee Number</div><input type="text" class="w-4/5 border border-gray-300"></label>
            <label for=""><div class="text-sm">Last Name</div><input type="text" class="w-4/5 border border-gray-300"></label>
            <label for=""><div class="text-sm">First Name</div><input type="text" class="w-4/5 border border-gray-300"></label>
            <label for=""><div class="text-sm">Middle Initial</div><input type="text" class="w-4/5 border border-gray-300"></label>
            <label for=""><div class="text-sm">Position</div><input type="text" class="w-4/5 border border-gray-300"></label>
            <label for=""><div class="text-sm">Last Date of Prom.</div><input type="text" class="w-4/5 border border-gray-300"></label>
          </div>
        </div>
        <div class="flex flex-col md:flex-row h-fit md:h-1/3 w-full border border-gray-300">
          <!-- Date of Last Promotion -->
            <div class="flex justify-center items-center h-full w-full md:w-1/5 border border-gray-300">
              <label for=""><div class="text-sm">Last Date of Promotion</div><input type="text" class="w-4/5 border border-gray-300"></label>
            </div>

          <!-- Salary Differential Per Month -->
            <div class="flex flex-col justify-start items-center h-full w-full md:w-2/5 border border-gray-300">
              <h3 class="text-sm">Salary Differential Per Month</h3>
              <div class="flex h-full items-center border border-blue-200">
                  <label for=""><div class="text-sm">Current Salary</div><input type="text" class="w-4/5 border border-gray-300"></label>
                  <label for=""><div class="text-sm">Correct Salary</div><input type="text" class="w-4/5 border border-gray-300"></label>
              </div>
              <div>
                  <label for=""><div class="text-sm">Difference</div><input type="text" class="w-4/5 border border-gray-300"></label>
              </div>
            </div>
          <!-- Period Covered -->
            <div class="flex flex-col justify-start items-center h-full w-full md:w-2/5 border border-gray-300">
              <h3 class="text-sm">Salary Differential Per Month</h3>
              <div class="flex justify-center items-center h-full border border-blue-300">
                  <label for=""><div class="text-sm">From</div><input type="text" class="w-4/5 border border-gray-300"></label>
                  <label for=""><div class="text-sm">To</div><input type="text" class="w-4/5 border border-gray-300"></label>
              </div>
            </div>
        </div>

        <!-- Totals -->
        <div class="flex flex-col md:flex-row h-fit md:h-1/3 w-full text-xs border border-red-700">
          <div class="flex flex-col justify-start items-center h-full w-full md:w-2/5 border border-yellow-300">
            <h3 class="text-sm border border-green-500">Gross Salary Differential</h3>
            <div class="flex flex-col md:flex-row h-full w-full border border-purple-700">
               <div class="flex flex-col justify-between items-center h-full w-full md:w-4/12 border border-blue-300">
                <div class="flex justify-center items-center w-full h-1/3"><h3>Gross Amount for the period</h3></div>
                <div class="flex justify-center items-center h-2/3 w-full border border-red-400">P 12,345.00</div>
               </div>
               <div class="flex flex-col justify-between items-center h-full w-full md:w-4/12 border border-blue-300">
               <div class="flex justify-center items-center w-full h-1/3"><h3>SD Bonus</h3></div>
                <div class="flex justify-center items-center h-2/3 w-full border border-red-400">P 12,345.00</div>
               </div>
               <div class="flex flex-col justify-between items-center h-full w-full md:w-4/12 border border-blue-300">
               <div class="flex justify-center items-center w-full h-1/3"><h3>Total</h3></div>
                <div class="flex justify-center items-center h-2/3 w-full border border-red-400">P 12,345.00</div>
               </div>
            </div>
          </div>
          <!-- Deductions -->
          <div class="flex flex-col justify-start items-center h-full w-full md:w-2/5 border border-gray-300">
            <h3 class="text-sm border border-green-500">Deductions</h3>
            <div class="flex flex-col md:flex-row h-full w-full border border-purple-700">
               <div class="flex flex-col justify-between items-center h-full w-full md:w-3/12 border border-blue-300">
                <div class="flex justify-center items-center w-full h-1/3"><h3>GSIS</h3></div>
                <div class="flex justify-center items-center h-2/3 w-full border border-red-400">P 12,345.00</div>
               </div>
               <div class="flex flex-col justify-between items-center h-full w-full md:w-3/12 border border-blue-300">
               <div class="flex justify-center items-center w-full h-1/3"><h3>Total GSIS</h3></div>
                <div class="flex justify-center items-center h-2/3 w-full border border-red-400">P 12,345.00</div>
               </div>
               <div class="flex flex-col justify-between items-center h-full w-full md:w-3/12 border border-blue-300">
               <div class="flex justify-center items-center w-full h-1/3"><h3>Tax</h3></div>
                <div class="flex justify-center items-center h-2/3 w-full border border-red-400">P 12,345.00</div>
               </div>
               <div class="flex flex-col justify-between items-center h-full w-full md:w-3/12 border border-blue-300">
               <div class="flex justify-center items-center w-full h-1/3"><h3>Total Deduction</h3></div>
                <div class="flex justify-center items-center h-2/3 w-full border border-red-400">P 12,345.00</div>
               </div>
            </div>
          </div>

          <div class="flex flex-col justify-start items-center h-full w-full md:w-1/5 border border-gray-300">
            <div class="flex flex-col md:flex-row h-full w-full border border-purple-700">
               <div class="flex flex-col justify-between items-center h-full w-full border border-blue-300">
               <div class="flex justify-center items-center w-full h-1/3"><h3>Net Amount</h3></div>
                <div class="flex justify-center items-center h-2/3 w-full border border-red-400 text-lg">P 12,345.00</div>
               </div>
            </div>
            <div class="flex justify-evenly items-center w-full h-1/2 space-x-3">
              <button class="p-2 rounded-md bg-red-600 text-white">RESET</button>
              <button class="p-2 rounded-md bg-green-600 text-white">COPY</button>
            </div>
          </div>
        </div>
      </form>

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


 