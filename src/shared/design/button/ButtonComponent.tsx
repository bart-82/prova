import React from "react"

function ButtonComponent(props:any){
    let type:'button'|'submit'|'reset'=props.type||'button';
    let text=props.text|| 'Salva'
    let classList=['btn',(props.classBt||'btn-primary')]
    const clickHandler=(event:any)=>{
        props.clickButton&& props.clickButton(event)
    }



    
    return <button 
    onClick={clickHandler} 
    className={classList.join(' ')} 
    type={type}>{props.children||text}</button>
}

export default ButtonComponent;