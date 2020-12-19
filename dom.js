function classControls() {
    this.hasClass = function (yourObj, yourClass) {
        if(!yourObj || typeof yourClass !== 'string') {
            return false;
        } else if(yourObj.className && yourObj.className.trim().split(/\s+/gi).indexOf(yourClass) > -1) {
            return true;
        } else {
            return false; 
        }
    }
    this.addClass = function (yourObj, yourClass) {
        var regex = new RegExp(yourClass, "g");
        yourObj.className += ' ' + yourClass;
    }
    this.removeClass = function (yourObj, yourClass) {
        var regex = new RegExp(yourClass, "g");
        yourObj.className = yourObj.className.replace(regex, "");
    }
}
