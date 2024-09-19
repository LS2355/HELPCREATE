
function Navbar () {

  const navTabs = ['Icons', 'Insporation', 'Figma', 'Elements'];


  return(
    <nav className="flex flex-wrap w-full max-w-[1440px] justify-center min-h-[10vh] items-center">

    {navTabs.map((Name, idx)=>{
      return <a href={Name} key={idx} className="grid px-3 mx-4 list-none transition-colors duration-300 border rounded-md border-tabs hover:border-white place-content-center h-9 bg-tabs-bg text-tabs hover:text-white"><li>{Name}</li></a>
    })}

    </nav>

  )
}


export default Navbar