import React,{useState,useEffect} from "react";
import "bootstrap/dist/css/bootstrap.css";
import './project.css'



export default function Project(){
    const[build,setbuild]=useState([])
    useEffect(()=>{
         fetch("http://splendorous-otter-435e90.netlify.app/project.json")
         .then(res=>res.json())
         .then(data=>setbuild(data))


    },[]
    )

    return(
        <>
        <div className="container-fluid  proj">
            <div className="col-lg-12"><h3 className="text-center text-secondary border">OUR PROJECTS</h3></div>
            <div className="row mt-4">
                {
                    build.map((value,index)=>(
                        <div className="col-lg-4">
                        <div class="card feature-card features-border bor">
                        <img class="card-img-top" src={value.image} alt="Card image cap"/>
                        <div class="card-body ">
                          <h5 class="card-title text-center text-primary">{value.text}</h5>
                          <p class="card-text feature-para text-light">{value.content}</p>
                          
                        </div>
                      </div>
                      </div>
                    ))
                }

            </div>

        </div>
        
      
        
        
        
        
        
        
    
        
        </>
    );
}
        
        
        
        
        