const tabContentItems = document.querySelectorAll(".tab-content-item");

//Selecting tab Content item
function selectItem(e) {
    removeBorder();
    removeshow();
    
    //Add border to current tab
    this.classList.add("tabs-border");
    
    //Grab content item form DOM
    const tabContentItem = document.querySelector(`#${this.id}-content`)
    
    //Add show class
    tabContentItem.classList.add("show");
}
function removeBorder() {
    tabItems.forEach(item => item.classList.remove("tabs-border"));
}

function removeshow() {
    tabContentItems.forEach(item => item.classList.remove("show"));
}

//Listener for tab click 
tabItems.forEach(item => item.addEventListener("click", selectItem));
