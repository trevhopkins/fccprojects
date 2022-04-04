function palindrome(str) {
    let lowered = str.toLowerCase();
    let origStr = lowered.replace(/[^\w]|_/g, "");
    let origArr = origStr.split('');
    let revArr = [];

    for (let i = origArr.length - 1; i >= 0; i--) {
        revArr.push(origArr[i]);
    }

    let revStr = revArr.join('');

    if (revStr === origStr) {
        return true;
    } else {
        return false;
    }

}

console.log(palindrome("five|\_/|four"));