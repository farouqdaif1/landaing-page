
// Helper Functions to check section in view port or not 
function checkView(ele){
    let bound= ele.getBoundingClientRect();
    if (
        (bound.top+590) <(window.innerHeight || document.documentElement.clientHeight) &&
		bound.left <  (window.innerWidth || document.documentElement.clientWidth)&&
		bound.bottom >0 &&
		bound.right >0
	){
        return true;
    } else {
        return false;
    }
};

/**
 * Define Global Variables
 * 
*/
const sections =document.querySelectorAll(".landing__container")
const ulist =document.querySelector("#navbar__list");

// Add the functionality to scroll to sections and Build the navigation menu 
const fragment = document.createDocumentFragment();
for ( let i=0;i<sections.length;i++){
    let  liElement =document.createElement("li");
    let link=document.createElement("a");
    link.textContent=`Section ${i+1}`;
    link.setAttribute("class","menu__link");
    let eleToEvent=document.getElementById(`section${i+1}`)
    liElement.addEventListener("click",function(){
        eleToEvent.scrollIntoView({behavior:"smooth"})
    })
    liElement.appendChild(link);
    fragment.appendChild(liElement);

}
ulist.appendChild(fragment);

function setUrClass(){
    for (let j = 0; j < sections.length ; j++) {
        let x = document.getElementById(`section${j+1}`);
            if (checkView(x)) {
            x.classList.add("your-active-class");
            } else {
            x.classList.remove("your-active-class");
            }
        }};

// Add functionality to distinguish the section in view
    document.addEventListener('scroll', function(events){
        setUrClass();
    });