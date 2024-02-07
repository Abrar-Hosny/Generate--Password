// Random Password
const  includeLowerCase =document.getElementById('includeLowerCase');
const  includeUpperCase = document.getElementById('includeUpperCase');
const  includeNumbers = document.getElementById('includeNumbers');
const  includeSymbols=document.getElementById('includeSymbols');
const passwordLengthElement = document.getElementById('password');

const result = document.getElementById('result') ; 


function checkedSelected(){

    const isIncludeLowerCase = includeLowerCase.checked ? true : false ;
    const isIncludeUpperCase = includeUpperCase.checked ? true : false ;
    const isIncludeNumbers = includeNumbers.checked ? true : false ;
    const isIncludeSymbols = includeSymbols.checked ? true : false ;
    const paawordLength =Number(passwordLengthElement.value);
    generatePassword(paawordLength , 
        isIncludeLowerCase , 
        isIncludeUpperCase , 
        isIncludeNumbers , 
        isIncludeSymbols);
    
}






function generatePassword (length , includeLowerCases , includeUpperCases , includeNumberss , includeSymbolss){

const lowerCaseChars ="abcdefghijklmnopqrstuvwxyz";
const upperCaseChars ="ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const numberChars = "0123456789";
const symbolChars = "!@$%^&*()_+-=";


let allowedChars = "";
let password ="";

// if the something is true concatenate it if not concatenate nothing 

allowedChars += includeLowerCases ? lowerCaseChars : "" ;
allowedChars += includeUpperCases ? upperCaseChars : "" ;
allowedChars += includeNumberss ? numberChars : "" ;
allowedChars += includeSymbolss ? symbolChars : "" ;


if(allowedChars.length === 0){
    result.textContent= `At Least 1 set of Character needs to be Selected ` ; 


}




else if(length <= 0 ){

    result.textContent= `Password length must be at least 1` ; 
  console.log(length)

}


else{
    for (let i =0 ; i < length ; i++){
        const randomIndex =Math.floor(Math.random() * allowedChars.length);
        password += allowedChars[randomIndex] ;
    }
    
    result.textContent = `Your Password:  ${password}`;
}
}






