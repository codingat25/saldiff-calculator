<template>
  <div class="flex justify-center items-center  w-screen h-screen border border-gray-300">
    <div class="h-5/6 w-10/12 border border-gray-300">

    </div>
  </div>
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


 