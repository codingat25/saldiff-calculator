<template>
  <section id="mainform" class="flex justify-center items-center w-screen h-screen border border-gray-300">
    <div class="h-screen w-screen md:w-4/6 md:h-4/6  border border-gray-500">
      <form @submit.prevent="handleSubmit" class="h-full w-full">
        <div class="h-fit space-y-2 w-full md:p-0 md:h-1/3 md:space-y-0 border border-gray-300">
          <div class="h-1/6 w-full border border-blue-300"><h1>Employee Information</h1></div>
          <div class="flex flex-col justify-evenly items-center md:flex-row h-5/6 w-full border border-red-300">
            <label for="employeeNo"><div class="text-xs lg:text-sm">Employee Number</div>
            <input required  type="number" v-model="employeeNo" class="w-96 md:w-4/5 uppercase border border-gray-300"></label>
            <label for="fName"><div class="text-xs lg:text-sm">First Name</div>
            <input required  type="text" v-model="fName" class="w-96 md:w-4/5 uppercase  border border-gray-300"></label>
            <label for="lName"><div class="text-xs lg:text-sm">Last Name</div>
            <input required  type="text" v-model="lName" class="w-96 md:w-4/5 uppercase  border border-gray-300"></label>
            <label for="positionTitle"><div class="text-xs lg:text-sm">Middle Initial</div>
            <select name="position" id="positionTitle">
                <option value="ADA1">Administrative Aide I</option>
                <option value="ADA2">Administrative Aide II</option>
                <option value="ADA3">Administrative Aide III</option>
                <option value="ADA4">Administrative Aide IV</option>
                <option value="ADA5">Administrative Aide V</option>
                <option value="ADA6">Administrative Aide VI</option>
                <option value="ADAS1">Administrative Assistant I</option>
                <option value="ADAS2">Administrative Assistant II</option>
                <option value="ADAS3">Administrative Assistant III</option>
                <option value="AO1">Administrative Officer II</option>
                <option value="AO2">Administrative Officer II</option>
                <option value="AO3">Administrative Officer III</option>
                <option value="AO4">Administrative Officer IV</option>
                <option value="AO5">Administrative Officer V</option>
                <option value="T1">Teacher I</option>
                <option value="T2">Teacher II</option>
                <option value="T3">Teacher III</option>
                <option value="SPET1">Special Education Teacher I</option>
                <option value="SPET2">Special Education Teacher II</option>
                <option value="SST1">Special Science Teacher I</option>
                <option value="SST2">Special Science Teacher II</option>
                <option value="MT1">Master Teacher I</option>
                <option value="MT2">Master Teacher II</option>
                <option value="HT1">Head Teacher I</option>
                <option value="HT2">Head Teacher II</option>
                <option value="HT3">Head Teacher III</option>
            </select>
            </label>            
            <label for="mInitial"><div class="text-xs lg:text-sm">Position</div>
            <input required  type="text" v-model="mInitial" class="w-96 md:w-4/5 uppercase  border border-gray-300"></label>
            <label for="dateOfLastProm"><div class="text-xs lg:text-sm">Last Date of Prom.</div>
            <input required  type="date" v-model="dateOfLastProm" class="w-96 md:w-4/5 uppercase border border-gray-300"></label>
          </div>
        </div>
        <div class="flex flex-col md:flex-row h-fit md:h-1/3 w-full border border-gray-300">
          <!-- Salary Differential Per Month -->
            <div class="flex flex-col justify-start items-center h-full w-full md:w-1/2 border border-gray-300">
              <h3 class="text-sm">Salary Differential Per Month</h3>
              <div class="flex justify-evenly items-center h-full w-full border border-blue-200">
                  <label for="periodFrom"><div class="text-sm">Current Salary</div><input type="text" class="w-4/5 lg:w-full border border-gray-300"></label>
                  <label for="periodTo"><div class="text-sm">Correct Salary</div><input type="text" class="w-4/5 lg:w-full border border-gray-300"></label>
              </div>
              <div>
                  <label for=""><div class="text-sm">Difference</div><input type="text" class="w-4/5 border border-gray-300"></label>
              </div>
            </div>
          <!-- Period Covered -->
            <div class="flex flex-col justify-start items-center h-full w-full md:w-1/2 border border-gray-300">
              <h3 class="text-sm">Period Covered</h3>
              <div class="flex justify-center items-center space-x-4 h-full w-full border border-blue-300">
                  <label for=""><div class="text-sm">From</div><input type="text" class="w-4/5 lg:w-full border border-gray-300"></label>
                  <label for=""><div class="text-sm">To</div><input type="text" class="w-4/5 lg:w-full border border-gray-300"></label>
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
      <div class="flex flex-col space-x-3">
        <div class="flex space-x-2">
        <p>Employee Number:{{employeeNo}}</p>
        <p>First Name:{{fName}}</p>
        <p>Last Name:{{lName}}</p>
        <p>M.I.{{mInitial}}</p>
        <p>Position{{positionTitle}}</p>
        <p>Date of Last Promotion:{{dateOfLastProm}}</p>
        <p>Date From:{{dateFrom}}</p>
        <p>Date To:{{dateTo}}</p>
        <p>Amount{{salDiff1}}</p>
        </div>

        <div class="flex space-x-2">
        <p>Period from:{{periodFrom}}</p>
        <p>Period to:{{periodTo}}</p>
        <p>SD Bonus{{sdBonus}}</p>
        <p>Gross Salary Differential{{grossSalDiff}}</p>
        <p>GSIS{{gsis}}</p>
        <p>less GSIS{{lessGsis}}</p>
        <p>Tax{{withholdingtax}}</p>
        <p>Total Deduction{{totalDeduct}}</p>
        <p>Net{{netAmount}}</p>
        </div>

      </div>
    </div>
  </section>
</template> 

<script>
import {ref} from 'vue'
import dayjs from 'dayjs'
import dayjsBusinessDays from 'dayjs-business-days'


dayjs.extend(dayjsBusinessDays)


export default {
  name: "HomeView",
  setup() {

      const day = dayjs
      const dayBusiness = dayjsBusinessDays
      const employeeNumber = ref('')
      const fName = ref('')
      const lName = ref('')
      const mInitial = ref('')
      const positionTitle = ref('')
      const dateOfLastProm = ref('')
      const dateFrom = ref('')
      const dateTo = ref('')
      const salDiff1 = ref('')
      const periodFrom = ref('')
      const periodTo = ref('')
      const salDiff2 = ref('')
      const sdBonus = ref('')
      const grossSalDiff = ref('')
      const gsis = ref('')
      const lessGsis = ref('')
      const withholdingtax = ref('')
      const totalDeduct = ref('')
      const netAmount = ref('')

      const handleSubmit = () => {
        console.log(employeeNumber, fName, lName, mInitial, positionTitle, dateOfLastProm,
                dateFrom, dateTo, salDiff1, periodFrom, periodTo, salDiff2, sdBonus, grossSalDiff, gsis, 
                lessGsis, withholdingtax, totalDeduct, netAmount)
      }

      return { day, dayBusiness, employeeNumber, fName, lName, mInitial, positionTitle, dateOfLastProm,
                dateFrom, dateTo, salDiff1, periodFrom, periodTo, salDiff2, sdBonus, grossSalDiff, gsis, 
                lessGsis, withholdingtax, totalDeduct, netAmount}
  }
}


//   },
//   methods: {
//     handleSubmit() {
//       //Compute Salary Differential depending on business days
//       let computeBusinessDays
//       let lastDayOfMonth
//       let differenceInMonths

//       this.salDiff1 = this.periodTo - this.periodFrom
//       lastDayOfMonth = dayjs(this.dateFrom).endOf('month').format('MM/DD/YYYY')
//       computeBusinessDays = dayjs(lastDayOfMonth).businessDiff(dayjs(this.dateFrom))
//       differenceInMonths = dayjs(this.dateTo).diff(this.dateFrom, 'month') // 2
//       this.salDiff2 = ((this.salDiff1/22)*computeBusinessDays)+(this.salDiff1*differenceInMonths)
//       this.salDiff2 = Math.round(this.salDiff2*100)/100
      
//       //Compute if personnel is eligible for SD bonus, if eligible SD Bonus should be 1 month of sal diff

//           //sample code should be or hopefully xD: dayjs('2010-10-20').isBetween('2010-10-19', dayjs('2010-10-25')) 
//           //if inbetween is true and if calendar days is equivalent to 1 month or more, add sd bonus

      
//       //Add Salary Differential + SD Bonus

//           //code here

//       //Compute GSIS

//           //code here

//       //Subtract GSIS from Total of SD 

//           //code here

//       //Compute Tax

//           //code here

//       //Compute Total Deductions

//           //code here
      
//       //Compute Net

//           //code here


//     } 
//   },
//   components: {},
// };
</script>


 