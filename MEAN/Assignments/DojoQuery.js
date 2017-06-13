$Dojo("someIdForSomeButton").click(function() { console.log("The button was clicked!") });

$Dojo("someOtherIdForSomeOtherButton").hover(function() { console.log("The button was hovered on!") });

// document.getElementById // (makes a DOMobject accessible to JavaScript) takes in one parameter which is the id for a particular element
// DOMobject.addEventListener //takes in 2 parameters 1) the event 2) the callback function (Note that this method must be run on an html element)
// //Also note that you will need to pay attention to the following built in events from the DOM
// DOMobject.click
// DOMobject.mouseover
// DOMobject.mouseout

function $Dojo(id) {
    this.myId = document.getElementById(id);
    this.click = function (callback) {
        this.myId.addEventListener("click", callback);
    };

    this.hover = function (hoverin, hoverout) {
        this.myId.addEventListener("mouseover", hoverin);
        this.myId.addEventListener("mouseout", hoverout);
    };

    return this;
}
