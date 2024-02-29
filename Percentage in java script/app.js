const Subject1 = parseInt(prompt('Enter Your First Subject Marks'));
const Subject2 = parseInt(prompt('Enter Your Second  Subject Marks'));
const Subject3 = parseInt(prompt('Enter Your Third Subject Marks'));
const Subject4 = parseInt(prompt('Enter Your Fourth Subject Marks '));
const Subject5 = parseInt(prompt('Enter Your Fiveth Subject Marks'));
const Subject6 = parseInt(prompt('Enter Your Sixth Subject Marks'));
const Subject7 = parseInt(prompt('Enter Your Seventh Subject Marks'));
const Subject8 = parseInt(prompt('Enter Your Eighth Subject Marks'));
const ToT = parseInt(prompt('Enter The Max Marks'));

    var obt = Subject1 + Subject2 + Subject3 + Subject4 + Subject5 + Subject6 + Subject7 + Subject8
   
    var first=obt/ToT

    var percentage=first*100

    document.write( percentage ," % ")

if (percentage>50) {

    var pass="  You  are  passed  "
    document.write(pass)
  

} else {
    var fail="  Sorry   You  Failed  "
    document.write(fail)
}