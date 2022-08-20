import { useState,useEffect } from 'react';
import { async } from '@firebase/util';
import {getFirestore,collection,addDoc,getDoc,doc,query,where,getDocs,updateDoc,deleteDoc,deleteField} from 'firebase/firestore'
import { app } from './firebase';
import './blur.css'
const Firestore=getFirestore(app);
function App() {
  let names,age
  let[state,setState]=useState({
    name:'',
    age:''
})
let naam,agi
let [named,setNamed]=useState([])
console.log(state)
const d=new Date().toLocaleString();
console.log(d);
// const t=d.getTime()
// console.log(t)
  const writedata=async()=>{
   
   const res=await addDoc(collection(Firestore,'student'),{
     names:`${state.name}`,
     ages:`${state.age}`

      
    });
    console.log(res)
  };
  // const subcollection=async()=>{
  //   const res=await addDoc(collection(Firestore,'country/city/area'),{
  //     place:'landhi',

  //     time:d

  //   })

  // }
  // const querydata=async()=>{
  //   const ref=collection(Firestore,'student');
  //   const q=query(ref,where("ages",'==','50'));
  //   const snapshot=await getDocs(q);
  //   snapshot.forEach((data)=>console.log(data.data()));


  // }
 const getdata=async()=>{
  const ref=doc(Firestore,'student','17VYLzZXnRFpbZoFJfPK');
   const docsnap=await getDoc(ref);
   let data =docsnap.data()
  
  return ([<h1>name:{data.names}</h1> ,<h2>age:{data.ages}</h2>])
 
  
   
 }

  useEffect(()=>{
    
  getdata().then((val)=>setNamed(...named,val))
 
  
 
   
 
         
  },[])

// jsx
// The table is created within the function and returns the set of JSX markups to the function. So once you access the function, respective JSX markups of the table will be replac
// const update=async()=>{
//   const docu=doc(Firestore,'student','wXzeRIfYKy051akn5Dwo');
//   await updateDoc(docu,{
//     names:`${state.name}`,
//    ages:deleteField()

//   })

// }
// const del=async()=>{
//   await deleteDoc(doc(Firestore,'student','phdxtQgIYK6oet5nHy1t'))

// }
  

  return (
    <>
    <div className="App">
      <h3>{named}</h3>
  

      <form action="POST">
      <input type="name" name='name' 
       value={names}
       onChange={(e)=>setState({...state,[e.target.name]:e.target.value})}
       />
            <input type="number" name='age' 
       value={age}
       onChange={(e)=>setState({...state,[e.target.name]:e.target.value})}
       />
       </form>
      <button onClick={writedata}>click</button> 
      {/* <button onClick={getdata}>get</button> */}
      {/* <button onClick={subcollection}>data</button>
     <button ></button>
     <button onClick={querydata}>getsedata</button>
     <button onClick={update}>update</button>
     <button onClick={del}>del</button> */}
     
   </div>
   </>
  );

}

export default App;
