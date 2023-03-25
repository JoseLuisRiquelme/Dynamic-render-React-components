import { useState } from "react";
import { BaseColaboradores } from "./BaseColaboradores";


// Main component

const Colaboradores = () =>
{
const [listaColaboradores, setListaColaboradores] = useState(BaseColaboradores)
const[newWorker,setNewWorker]=useState({
    src:"", 
    id: "",
    nombre:"",  
    correo:"",
    completada:""})
const [search,setSearch]=useState("")

 

// Form function
const enviarFormulario = (e) => {e.preventDefault()
    

    if(newWorker.nombre ===""&& search===""){
        return alert("Should enter the workers name")
    }
    setNewWorker({ 
        id: Date.now(),
        nombre: newWorker.nombre,  
        correo:newWorker.correo,
        completada:false })
   
   
    setListaColaboradores([...listaColaboradores,newWorker])

    setNewWorker({ 
        src:"",
        id: "",
        nombre: "",  
        correo:"",
        completada:"" })
 
    
}

// Filter to search a specific worker

const filteredList= listaColaboradores.filter((worker)=>{
    if(worker.nombre.toLowerCase().includes(search.toLowerCase())){
        return true
    }
     return false
})

const eliminarColaborador = (worker) => {
    const listaFiltrada = listaColaboradores.filter(el => el.nombre !==
     worker.nombre)
     setListaColaboradores(listaFiltrada)
            }
// Jsx part
    return (
        <div className="container">
            <div className="leftside">
            <div className="logo">
          <img src="https://svgshare.com/i/_go.svg" alt="" />
        </div>
            <div className="imagen"></div>
            </div>
        
    <div className="inputs">
    <form onSubmit={enviarFormulario}id="formulario">

    
   <div className="inputs3">
    <label >Worker searcher</label>
    <hr></hr>
    <input
    placeholder="Enter a name to search"
    className="inputs2" 
    name="search" 
    type="text"
    onChange={(e)=>setSearch(e.target.value)}
    value={search} />

    <h1 className="title">To add a new worker</h1>

     <label>Worker name</label>
     <hr></hr>
    <input
    placeholder="Enter a name to add"
    className="inputs2"  
    name="nombreColaborador" 
    type="text"
    onChange={(e)=>setNewWorker({
        src:"https://img.freepik.com/free-photo/joyful-young-woman-long-long-wavy-hair-points-index-finger-you-notices-something-funny-front-smiles-gladfully-wears-fur-coat-panama-isolated-pink-studio-background-hey-join-me_273609-56742.jpg?w=1380&t=st=1679734947~exp=1679735547~hmac=5b488f8627a2d08c1c63ab84f20f058ff56750b91cfd4a9de7a2986bebfa30dd", 
        id: Date.now(),
        nombre: e.target.value,  
        correo:`${e.target.value}@funnyEnterprise.com`,
        completada:false })} 
    value={newWorker.nombre}/>
    </div>
    
    <button
    type="submit"
    className="btn"> Add new worker </button>
    </form>
    <ul>
    {filteredList.map(worker => <div className="divsLi"><li
    key={worker.id}>
    <h4>{worker.nombre}</h4> <img className="imgCard" src={worker.src} alt="business-persone"/> <p><i className="far fa-envelope"></i> {worker.correo}</p>
    <button className="btn-delete" onClick={() => eliminarColaborador(worker)}> Delete
</button>
    </li></div>)}
    </ul>
    <div className="myLink"><a className="linktocode"href="https://github.com/JoseLuisRiquelme/form-validation-with-React" target={"_blank"}  rel="noreferrer"><i class="fa-brands fa-github"></i> Link to code</a></div>
    </div>
   
    </div>
    )
    }
    export default Colaboradores;