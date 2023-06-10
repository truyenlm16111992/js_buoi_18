const arrNumbers = [];
function loadNumberList(_arrNumbers, _idContainer) {
    let domList = document.getElementById(_idContainer);
    domList.innerHTML = "";
    _arrNumbers.forEach((e, i) => domList.innerHTML += ((i == 0 ? "" : ",") + e.toString()));
}
document.getElementById("btnAddNumber").onclick = function () {
    let domNumber = document.getElementById("tbAddNumber");
    arrNumbers.push(+domNumber.value);
    loadNumberList(arrNumbers, "list_numbers")
    domNumber.value = "";
}
// Bài 1
function getTotalOfPositiveNumbers(_arrNumbers) {
    let total = 0;
    _arrNumbers.forEach(e => total += (e > 0 ? e : 0));
    return total;
}
document.getElementById("btnExecute_b1").onclick = function () {
    document.getElementById("result_b1").innerHTML = "Tổng số dương: " + getTotalOfPositiveNumbers(arrNumbers).toString();
}
// Bài 2
function getNumberOfPositiveNumbers(_arrNumbers) {
    return _arrNumbers.filter(e => e > 0).length;
}
document.getElementById("btnExecute_b2").onclick = function () {
    document.getElementById("result_b2").innerHTML = "Số dương: " + getNumberOfPositiveNumbers(arrNumbers).toString();
}
// Bài 3
function getSmallestNumber(_arrNumbers) {
    if (_arrNumbers.length > 0) {
        let min = _arrNumbers[0];
        _arrNumbers.forEach(e => {
            if (e < min)
                min = e;
        });
        return min;
    } else
        return null;

}
document.getElementById("btnExecute_b3").onclick = function () {
    let min = getSmallestNumber(arrNumbers);
    document.getElementById("result_b3").innerHTML = (min == null ? "Không có số nhỏ nhất" : "Số nhỏ nhất: " + min.toString());
}
// Bài 4
function getSmallestPositiveNumber(_arrNumbers) {
    let min = 0;
    _arrNumbers.forEach(e => {
        if (e > 0 && (e < min || min == 0))
            min = e;
    });
    return min == 0 ? null : min;
}
document.getElementById("btnExecute_b4").onclick = function () {
    let min = getSmallestPositiveNumber(arrNumbers);
    document.getElementById("result_b4").innerHTML = (min == null ? "Không có số dương nhỏ nhất" : "Số dương nhỏ nhất: " + min.toString());
}
// Bài 5
function getLastEvenNumber(_arrNumbers) {
    // let even = -1;
    // _arrNumbers.forEach(e => {
    //     if (e % 2 == 0)
    //         even = e;
    // });
    // return even;
    for (let i = _arrNumbers.length - 1; i >= 0; i--) {
        if (_arrNumbers[i] % 2 == 0)
            return _arrNumbers[i];
    }
    return -1;
}
document.getElementById("btnExecute_b5").onclick = function () {
    let lastEvenNumber = getLastEvenNumber(arrNumbers);
    document.getElementById("result_b5").innerHTML = (lastEvenNumber == -1 ? "Danh sách không có số chẳn" : "Số chẳn cuối cùng: " + lastEvenNumber.toString());
}
// Bài 6
function swapArrayElements(_arrNumbers, _index1, _index2) {
    let tmp = _arrNumbers[_index1];
    _arrNumbers[_index1] = _arrNumbers[_index2];
    _arrNumbers[_index2] = tmp;
}
document.getElementById("btnExecute_b6").onclick = function () {
    let index1 = +document.getElementById("tbIndex1").value;
    let index2 = +document.getElementById("tbIndex2").value;
    let num = arrNumbers.length;
    let domResult = document.getElementById("result_b6");
    if (index1 < 0 || index1 >= num)
        domResult.innerHTML = "Vị trí thứ 1 không đúng";
    else if (index2 < 0 || index2 >= num)
        domResult.innerHTML = "Vị trí thứ 2 không đúng";
    else {
        swapArrayElements(arrNumbers, index1, index2);
        loadNumberList(arrNumbers, "result_b6");
        domResult.innerHTML = "Mảng sau khi đổi: " + domResult.innerHTML;
    }
}
// Bài 7
document.getElementById("btnExecute_b7").onclick = function () {
    let domResult = document.getElementById("result_b7");
    arrNumbers.sort((a, b) => { return a - b; });
    loadNumberList(arrNumbers, "result_b7");
    domResult.innerHTML = "Mảng sau khi sắp xếp: " + domResult.innerHTML;
}
//Bài 8
function isPrimeNumber(_number) {
    if (_number < 2)
        return false;
    else if (_number == 2)
        return true;
    else if (_number % 2 == 0)
        return false;
    else {
        let flag = false, i = 3, n = _number - 1;
        while (i < n && flag == false) {
            if (_number % i == 0)
                flag = true;
            else
                i += 2;
        }
        return !flag;
    }
}
function getFirstPrimeNumber(_arrNumbers) {
    let n = _arrNumbers.length;
    for (let i = 0; i < n; i++) {
        if (isPrimeNumber(_arrNumbers[i]))
            return _arrNumbers[i];
    }
    return -1;
}
document.getElementById("btnExecute_b8").onclick = function () {
    let primeNumber = getFirstPrimeNumber(arrNumbers);
    document.getElementById("result_b8").innerHTML = (primeNumber == -1 ? "Không có số nguyên tố" : "Số nguyên tố đầu tiên trong dãy: " + primeNumber.toString());
}
// Bài 9
function getNumberOfIntegers(_arrNumbers) {
    return _arrNumbers.filter(e => Number.isInteger(e)).length;
}
document.getElementById("btnExecute_b9").onclick = function () {
    document.getElementById("result_b9").innerHTML = "Số nguyên: " + getNumberOfIntegers(arrNumbers);
}
// Bài 10
function getResultOfComparingNumPosAndNeg(_arrNumbers) {
    let numPos = _arrNumbers.filter(e => e > 0).length;
    let numNeg = _arrNumbers.filter(e => e < 0).length;
    let operator = "=";
    if (numPos > numNeg)
        operator = ">";
    else if (numPos < numNeg)
        operator = "<";
    return "Số dương("+numPos.toString()+") " + operator + " Số âm("+numNeg.toString()+")";
}
document.getElementById("btnExecute_b10").onclick = function () {
    document.getElementById("result_b10").innerHTML = getResultOfComparingNumPosAndNeg(arrNumbers);
}