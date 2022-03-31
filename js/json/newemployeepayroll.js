window.addEventListener('DOMContentLoaded',(event)=>{
const name=document.querySelector('#name');
const texterror=document.querySelector('.text-error');
name.addEventListener('input',function(){

    if(name.value.length==0){
        texterror.textContent="";
        return;
    }
    try{
        (new EmployeePayrollData()).name=name.value;;
        texterror.textContent="";
    }
    catch(e){
        texterror.textContent=e;
    }
});
const salary=document.querySelector('#salary');
const output=document.querySelector('.salery_output');
output.textContent=salary.value;
salary.addEventListener('input',function(){
    output.textContent=salary.value;
});
});

const save=()=>{
    try{
        let employeePayrollData=createEmployeePayroll();
        createAndUpdateStorage(employeePayrollData);

    }catch(e){
return e;
}
}
const createEmployeePayroll=()=>{
    let employeePayrollData=new EmployeePayrollData();
    try{
        employeePayrollData.name=getInputValueById('#name');
    }catch(e){
        setTextValue('.text-error',e);
    }
    employeePayrollData.profilePic=getSelectedValues('[name=profile]').pop();
    employeePayrollData.gender=getSelectedValues('[name=gender]').pop();
    employeePayrollData.department=getSelectedValues('[name=department]');
    employeePayrollData.salary=getInputValueById('#salary');
    employeePayrollData.note=getInputValueById('#notes');
    let date=getInputValueById('#day')+" "+getInputValueById('#month')+" "+getInputValueById('#year');
    employeePayrollData.date=Date.parse(date);
   alert("Date be enter karwa li");
    alert(employeePayrollData.tostring());
    return employeePayrollData;
}
const getInputValueById=(id)=>{
    let value=document.querySelector(id).value;
    alert(value);

    return value;
}
const getSelectedValues=(propertyValue)=>{
    let allitems=document.querySelectorAll(propertyValue);
    let selitems=[];
    allitems.forEach(item=>{
        if(item.checked)selitems.push(item.value);
    });
    return selitems;
}
function createAndUpdateStorage(employeePayrollData){
    let employeePayrollList=JSON.parse(localStorage.getItem("EmployeePayrollList"));
    if(employeePayrollList!=undefined){
        employeePayrollList.push(employeePayrollData);
    }else{
        employeePayrollList=[employeePayrollData];
    }
    alert(employeePayrollList.tostring());
    localStorage.setItem("EmployeePayrollList",JSON.stringify(employeePayrollList));
}
const resetForm=()=>{
    setvalue('#name','');
    setvalue('#salary','300000');
    setvalue('#notes','');
    setvalue('#day','1');
    setvalue('#month','January');
    setvalue('#year','2020');
    unSelectedSelectedValue('[name=gender]');
    unSelectedSelectedValue('[name=department]');
    const salary=document.querySelector('#salary');
const output=document.querySelector('.salery_output');
output.textContent=salary.value;
   // console.log(document.getElementById('#name').value);
}
const unSelectedSelectedValue=(propertyValue)=>{
    let allitmes=document.querySelectorAll(propertyValue);
    allitmes.forEach(item=>{
        item.checked=false;
    });

}
const setvalue=(id,value)=>{
    const element =document.querySelector(id);
    element.value=value;
}