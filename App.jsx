import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  
         const [activity, setActivity] = useState("");
         const [listitems, setListitems] = useState([]);

         function addActivity(){
             //  setListitems([...listitems, activity]);
             //  console.log(listitems);

             setListitems((listitems)=>{
                   const updatedList = [...listitems, activity];
                   console.log(updatedList);
                   setActivity('');
                   return updatedList;
             })
         }

         function removeActivity(i){
               const updatedListData = listitems.filter((elem, id)=>{
                  return i!=id;
               })

               setListitems(updatedListData);
         }

         function removeAll(){
             setListitems([]);
         }

  return (
    <>

       <div className="container">
            <div className="header">To do List</div>

              <div className="inputfields">

              <input className='inputbox' type="text" value={activity} placeholder='Add Activity' onChange={(e)=>{setActivity(e.target.value)}}></input>
              <button className='btn' onClick={addActivity}>Add</button>

              </div>
           

            <p className='list-heading'>Here is your List :{")"}</p>
            {
              listitems!=[] && listitems.map((data, i)=>{
                
                return(

                  <>
                  <div className="data-section">
 
                   <p className='para' key={i}>

                     <div className='Data'>{data}</div>
                          <div className='btn-position'>  <button className="remove-btn"   onClick={()=> removeActivity(i)}>remove</button> </div>

                           </p>

                  </div>
                  
                  
                   
                  </>
                  

                )



              })
            }


            {listitems.length>=1 && <button className='removeAll' onClick={removeAll}>Remove All</button>}

       </div>

      
    </>
  )
}

export default App
