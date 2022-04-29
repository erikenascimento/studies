function calc(adults, children){
    return adults*12+children*6;
}

window.onload = function() {
    let btn = document.getElementById("buybutton");
    btn.onclick = function() {
        let adults = document.getElementById("adults").value;
        let children = document.getElementById("children").value;
        if (adults < 0) {
            adults = 0;
        }
        if (children < 0) {
            children = 0;
        }
        let price = calc(adults, children);
        alert(price);
    }
}