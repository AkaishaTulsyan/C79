var studentArray=[];
function Submit(){
    var Name1=document.getElementById("name1").value;
    var Name2=document.getElementById("name2").value; 
    var Name3=document.getElementById("name3").value; 
    var Name4=document.getElementById("name4").value;
    studentArray.push(Name1);
    studentArray.push(Name2);
    studentArray.push(Name3);
    studentArray.push(Name4);
    console.log (studentArray);
    document.getElementById("displayName").innerHTML=studentArray;
      document.getElementById("buttonSubmit").style.display="none";
    document.getElementById("SortButton").style.display="inline-block";
}
function sortName(){
    studentArray.sort();
    console.log (studentArray)
    document.getElementById("displayName").innerHTML=studentArray;
   
}
