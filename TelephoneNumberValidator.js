function telephoneCheck(str) {

    if (/^\d{10}$/i.test(str)) {
        return true;
    } else if (/^\d{3}[-]{1}\d{3}[-]{1}\d{4}$/i.test(str)) {
        return true;
    } else if(/^[(]{1}\d{3}[)]{1}\d{3}[-]{1}\d{4}$/i.test(str)) {
        return true;
    } else if(/^[(]{1}\d{3}[)]{1}\s{1}\d{3}[-]{1}\d{4}$/i.test(str)) {
        return true;
    } else if(/^\d{3}\s{1}\d{3}\s{1}\d{4}$/i.test(str)) {
        return true;
    } else if(/^[1]{1}(\s{1}\d{3}\s{1}\d{3}\s{1}|[(]{1}\d{3}[)]{1}\d{3}[-]{1}|\s{1}[(]{1}\d{3}[)]{1}\s{1}\d{3}[-]{1}|[-]{1}\d{3}[-]{1\d{3}[-]{1}|\s{1}\d{3}[-]{1}\d{3}[-]{1})\d{4}$/i.test(str)) {
        return true;
    } else {
        return false;
    }


}

console.log(telephoneCheck("1 555-555-5555"));