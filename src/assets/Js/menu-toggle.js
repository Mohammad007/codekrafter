
        // find menu-content in item (=menu-button) and return
//  "none" if menu-content.style.display is "block"
//  "block" if menu-content.style.display is not "block"
const toggle =
  (item) => {
    const content = 
      item.querySelector("[x-role=\"menu-content\"]");
    return content.style.display === "block"
      ? "none"
      : "block"
  }
;
// set menu-content found in item (=menu-button) to
//  none or block
const changeDisplay =
  (item,display) =>
    item.querySelector("[x-role=\"menu-content\"]")
      .style.display = display;
// when menu-button is clicked
const menuButtonClicked = 
  e => {
    //get the toggled content style
    //  if current style is block then
    //  toggled is none and vice versa
    const style = toggle(e.target);
    //hide all menus, in the for each we
    //  added an event listener for "menu-click" event
    //  the listener will hide the menu
    var evt = new Event("menu-click",{});
    document.body.dispatchEvent(evt);
    //set style of the current
    changeDisplay(e.target,style);
  }
;
//for each menu-botton role 
//  I am not using css selectors on class, class is for style, 
//  user defined properties can be used for behavior. 
//  If you mix this up then you can break style, behavior
//  or both when changing behavior or style
document.querySelectorAll("[x-role=\"menu-button\"]")
  .forEach(
    x => {
      //when clicked let menuButtonClicked handle it
      x.addEventListener(
        "click"
        ,menuButtonClicked
      );
      //listen to custom event called "menu-click"
      //  set display to none when this happens
      //  if you were to dynamically add and remove
      //  menu items then you should remove the event
      //  listeners when you remove the menu
      document.body.addEventListener(
        "menu-click"
        ,e => changeDisplay(x,"none")        
      );
    }
  )
;

