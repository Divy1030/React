import { useState } from "react"


function App() {
  const [color, setColor] = useState("olive")

  return (
    <div className="w-full h-screen duration-200"
    style={{backgroundColor: color}}
    >
      <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
        
        <div className="flex flex-wrap justify-center gap-3 bg-white px-3 py-2 rounded-xl">
          <button className="outline-none px-3 py-1 shadow-sm bg-red-500 rounded-xl" onClick={()=>setColor("red")}>Red</button>
          <button className="outline-none px-3 py-1 shadow-sm bg-yellow-400 rounded-xl" onClick={()=>setColor("yellow")}>Yellow</button>
          <button className="outline-none px-3 py-1 shadow-sm bg-blue-400 rounded-xl" onClick={()=>setColor("blue")}>Blue</button>
        </div>
      </div>
    </div>
  )
}

export default App