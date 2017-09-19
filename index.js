document.getElementById('xp').addEventListener('keyup', function(e) {
    var targe = e.target
    console.log(e);
    targe.value = (targe.value.match(/\d{0,6}(\.\d{0,2})?/g))[0];
})

var objec = {
    "name": "ricky",
    "age": 18,
    toJSON: function(){
        return this.name
    }
}
var str = "ricky";

let xp = document.getElementById('xpp');
console.log(xp);
xp.innerHTML = "888";

try {
var base = Base64;

} catch (error) {
    console.log(error);
}
document.cookie = "1235465465";
alert(document.cookie);
// alert(xp.getAttribute("value"));

// alert(JSON.stringify(objec, null, 10));
// alert(JSON.stringify(objec));

