function cal(){
var a=parseInt(document.getElementById("t").value);
  switch(a){
    case 1:
      alert(a+" is code of monday");
    break;
    case 2:
      alert(a+" is code of Tuesday ");
    break;
    case 3:
      alert(a+" is code of Wednesday");
    break;
    case 4:
      alert(a+"is code of Thursday");
    case 5:
      alert(a+" is code of Friday");
    break;
    case 6:
      alert(a+" is code of Saturday");
    case 7:
    alert(a+" is code of Sunday");
    break;
    default :
    alert(a+" is invalid number");
 
  }
}