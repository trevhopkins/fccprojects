function rot13(str) {
    let cipher = "NOPQRSTUVWXYZABCDEFGHIJKLMnopqrstuvwxyzabcdefghijklm";
    let strArr = [];

    for (let i = 0; i <= str.length - 1; i++) {
        if (str[i] == "!" 
            || str[i] == " " 
            || str[i] == "?"
            || str[i] == ".") {
            strArr.push(str[i]);
        } else {
            strArr.push(cipher.charAt(cipher.indexOf(str[i]) + 13))
        }
    }
    
    let result = strArr.join('').toUpperCase();
    return result;

}

console.log(rot13("GUR DHVPX OEBJA SBK WHZCF BIRE GUR YNML QBT."));