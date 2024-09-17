import '../tailwind.css'
import '../App.css'
function GridContent () {
  return(
    <div className="grid gap-6 max-w-[1440px] w-full min-h-[70vh] p-12 z-10 grid-rows-3">
      <div className="col-start-1 col-end-4 row-span-2 card-default">
        <div className='bg-blue-300 card-title '>Design</div>
      </div>
      <div className="col-start-4 col-end-9 row-span-1 card-default"></div>
      <div className="col-start-9 col-end-12 row-span-3 card-default"></div>

      <div className="col-start-1 col-end-4 row-span-1 card-default"></div>
{/* try using grid-template-colums: repeat(13, minmax(0,1fr)) */}
      
    </div>    
  )


    



}

export default GridContent