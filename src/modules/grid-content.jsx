import { useState, useRef } from 'react'
import DetectClickOutsideComponent from '../components/WatchClick'
import '../tailwind.css'
import '../App.css'
function GridContent () {
  const [viewModeActive, setViewModeActive] = useState(false)
  const GridSection = useRef()

  //if we click outside one of the selected refs the change setViewModeActive to false

  DetectClickOutsideComponent(GridSection, viewModeActive, setViewModeActive)









  return(
    //create a state the watches if a grid is active

    //if a grid is active give all the other class layouts 


    // once screen hits 850 px change layout

    // for mobile im thinking just a bunch of acordians






    <div className="grid gap-6 max-w-[1440px] w-full min-h-[90vh] p-12 z-10 grid-rows-9" ref={GridSection}>
      
      
      <div  className={viewModeActive == false ? "Grid1-default card-default" : viewModeActive == "Grid1" ? "view-mode_active card-default" : "view-mode_inactive card-default"}  onClick={()=>setViewModeActive("Grid1")} id='Grid1'>
        <div className='bg-blue-300 card-title '>Design1</div>
      </div>
      <div className={viewModeActive == false ? "Grid2-default card-default" : viewModeActive == "Grid2" ? "view-mode_active card-default" : "view-mode_inactive card-default"} id='Grid2'>
        <div className='bg-blue-300 card-title '>Design2</div>
      </div>
      <div className={viewModeActive == false ? "Grid3-default card-default" : viewModeActive == "Grid3" ? "view-mode_active card-default" : "view-mode_inactive card-default"} id='Grid3'>
        <div className='bg-blue-300 card-title '>Design3</div>
      </div>
      <div className={viewModeActive == false ? "Grid4-default card-default" : viewModeActive == "Grid4" ? "view-mode_active card-default" : "view-mode_inactive card-default"} id='Grid4'>
        <div className='bg-blue-300 card-title '>Design4</div>
      </div>
      <div className={viewModeActive == false ? "Grid5-default card-default" : viewModeActive == "Grid5" ? "view-mode_active card-default" : "view-mode_inactive card-default"}  id='Grid5'>
        <div className='bg-blue-300 card-title '>Design5</div>
      </div>
      <div className={viewModeActive == false ? "Grid6-default card-default" : viewModeActive == "Grid6" ? "view-mode_active card-default" : "view-mode_inactive card-default"}  id='Grid6'>
        <div className='bg-blue-300 card-title '>Design6</div>
      </div>

{/* try using grid-template-colums: repeat(13, minmax(0,1fr)) */}
      
    </div>    
  )


    



}

export default GridContent