function convertToRoman(num) {
    let romanCatalog = [
        [1000, "M"],
        [900, "CM"],
        [500, "D"],
        [400, "CD"],
        [100, "C"],
        [90, "XC"],
        [50, "L"],
        [40, "XL"],
        [10, "X"],
        [9, "IX"],
        [5, "V"],
        [4, "IV"],
        [1, "I"]
    ];

    for (let i = 0; i <= romanCatalog.length; i++) {
        if (num < 1) {
            return "";
        } else if (num >= romanCatalog[i][0]) {
            return romanCatalog[i][1] + convertToRoman(num - romanCatalog[i][0]);
        }
    }



}

console.log(convertToRoman(45));