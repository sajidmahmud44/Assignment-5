// common function

function getinputfieldvaluebyid(id){

    const inputvalue = document.getElementById(id).value;
    inputnumber = parseFloat(inputvalue);
    return inputnumber;
}

function gettextfieldvaluebyid(id){
    const textvalue = document.getElementById(id).innerText;
    const textnumber = parseFloat(textvalue);
    return textnumber;
}

function showsectionbyid(id){
    document.getElementById('add-money-form').classList.add('hidden');
    document.getElementById('history-form').classList.add('hidden');

    document.getElementById(id).classList.remove('hidden');

}