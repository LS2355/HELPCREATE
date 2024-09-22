import { useEffect } from "react";

function DetectClickOutsideComponent(ref, state, setState){
  useEffect(()=>{
    function handleClickOutside (event) {
      console.log(event)
      console.log("ref",ref.current.children)

      //adjust so that we are looking at the refs children
    


      //if there is a ref.current and it is doesn't contain the event the we clicked outside
      //(old) if (ref.current && !ref.current.contains(event.target)) { //needs to be reworked
      console.log("state", state)
      console.log('refsss', ref.current.children[event.target.id])
      console.log("test", ref.current.children[event.target.id] == state)//works then compare it to current state
      if (ref.current && !ref.current.children[event.target.id] == state) { //needs to be reworked
        /* 
        ideas maybe check the event.target with the current state var
        if ref.current exist and if !event.target.id == state (double check this tm, i have to go)
        */






        //if the ref has the class card-default (all grid sections have this) then we clicked on another grid section
        if (ref.current.classList.contains('card-default')){
          //set state to other div's id 
          setState(ref.current.id)
        }else{
          //what i want to happen when clicked outside ref
          setState(false)          
        }



      }
    }
    
    //bind the event listener
    document.addEventListener('mousedown', handleClickOutside)

    return ()=>{
      //clean up (unbind the event listener)
      document.removeEventListener('mousedown', handleClickOutside)
    }

  },[ref])
}
export default DetectClickOutsideComponent
