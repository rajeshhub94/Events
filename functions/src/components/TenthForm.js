import React, { useEffect, useRef } from 'react'

function TenthForm() {
    let engInputRef = useRef();
    let telInputRef = useRef();
    let hindiInputRef = useRef();
    let socInputRef = useRef();
    let sciInputRef = useRef();
    let mathInputRef = useRef();
    let totalScoreRef = useRef();
    let firstnameInputRef = useRef();
    let lastnameInputRef = useRef();
    let engSpanRef = useRef();
    let hindiSpanRef = useRef();
    let telSpanRef = useRef();
    let sciSpanRef = useRef();
    let socSpanRef = useRef();
    let mathSpanRef = useRef();
    useEffect(()=>{alert("Please fill the form")},[])
    let resultRef = useRef();
    
  return (
    <div><form className='tenthform'>
        <div><label>First Name</label>
        <input ref={firstnameInputRef} type='text' onFocus={()=>{firstnameInputRef.current.style.backgroundColor = "gold"}} onChange={()=>{firstnameInputRef.current.style.backgroundColor = "lightgreen";}} onBlur={()=>{firstnameInputRef.current.style.backgroundColor = "wheat"}}></input>
        <span></span></div>
        <div><label>Last Name</label>
        <input ref={lastnameInputRef} type='text' onFocus={()=>{lastnameInputRef.current.style.backgroundColor = "gold"}} onChange={()=>{lastnameInputRef.current.style.backgroundColor = "lightgreen";}} onBlur={()=>{lastnameInputRef.current.style.backgroundColor = "wheat"}}></input>
        <span></span></div>
        <div><label>English</label>
        <input ref={engInputRef} type='number' onFocus={()=>{engInputRef.current.style.backgroundColor = "gold"}} onChange={()=>{engInputRef.current.style.backgroundColor = "lightgreen";engSpanRef.current.innerHTML= engInputRef.current.value>=35?"Pass":"Fail"}} onBlur={()=>{engInputRef.current.style.backgroundColor = "wheat"}}>
        </input><span ref={engSpanRef} ></span></div>
        <div><label>Hindi</label>
        <input ref={hindiInputRef} type='number' onFocus={()=>{hindiInputRef.current.style.backgroundColor = "gold"}} onChange={()=>{hindiInputRef.current.style.backgroundColor = "lightgreen";hindiSpanRef.current.innerHTML = hindiInputRef.current.value >=35 ?"Pass":"Fail" }} onBlur={()=>{hindiInputRef.current.style.backgroundColor = "wheat"}}></input>
        <span ref={hindiSpanRef}></span></div>
        <div><label>Telugu</label>
        <input ref={telInputRef} type='number'onFocus={()=>{telInputRef.current.style.backgroundColor = "gold"}} onChange={()=>{telInputRef.current.style.backgroundColor = "lightgreen";telSpanRef.current.innerHTML = telInputRef.current.value >=35?"Pass":"Fail"}} onBlur={()=>{telInputRef.current.style.backgroundColor = "wheat"}}></input>
        <span ref={telSpanRef}></span> </div>
        <div><label>Social</label>
        <input ref={socInputRef} type='number' onFocus={()=>{socInputRef.current.style.backgroundColor = "gold"}} onChange={()=>{socInputRef.current.style.backgroundColor = "lightgreen";socSpanRef.current.innerHTML = socInputRef.current.value >= 35?"Pass":"Fail"}} onBlur={()=>{socInputRef.current.style.backgroundColor = "wheat"}}></input>
        <span ref={socSpanRef}></span></div>
        <div><label>Science</label>
        <input ref={sciInputRef} type='number' onFocus={()=>{sciInputRef.current.style.backgroundColor = "gold"}} onChange={()=>{sciInputRef.current.style.backgroundColor = "lightgreen";sciSpanRef.current.innerHTML = sciInputRef.current.value>=35?"Pass":"Fail"}} onBlur={()=>{sciInputRef.current.style.backgroundColor = "wheat"}}></input>
        <span ref={sciSpanRef}></span></div>
        <div><label>Math</label>
        <input ref={mathInputRef} type='number' onFocus={()=>{mathInputRef.current.style.backgroundColor = "gold"}} onChange={()=>{mathInputRef.current.style.backgroundColor = "lightgreen";mathSpanRef.current.innerHTML = mathInputRef.current.value >= 35?"Pass":"Fail"}} onBlur={()=>{mathInputRef.current.style.backgroundColor = "wheat"}}></input>
        <span ref={mathSpanRef}></span></div>
        <div><button type='button' onClick={() => {
            let engMarks = Number(engInputRef.current.value) ;
            let telMarks = Number(telInputRef.current.value);
            let hindiMarks = Number(hindiInputRef.current.value) ;
            let socMarks = Number(socInputRef.current.value);
            let sciMarks = Number(sciInputRef.current.value);
            let mathMarks = Number(mathInputRef.current.value);
            let totalMarks = engMarks + telMarks + hindiMarks + socMarks + sciMarks + mathMarks;
            let perc = (totalMarks/600) *100;
            const sub_result=[engSpanRef.current.innerHTML, hindiSpanRef.current.innerHTML, telSpanRef.current.innerHTML,socSpanRef.current.innerHTML,sciSpanRef.current.innerHTML, mathSpanRef.current.innerHTML ]
            let i =0;
            let result = "Pass";
            while (i <= 5 && result =="Pass")
                {
                // (sub_result[0] =="Pass"?result="Pass":result="Fail") ;
                // alert(sub_result[i])
                if (sub_result[i] =="Pass")
                    {result="Pass";i++}
                else{result="Fail"}
            }
            
            //  alert( `${firstnameInputRef.current.value} ${lastnameInputRef.current.value} scored ${totalMarks}marks`)
            totalScoreRef.current.innerHTML = `${firstnameInputRef.current.value} ${lastnameInputRef.current.value} scored ${totalMarks} marks and ${perc.toFixed(2)}% result is ${result}`; 
            resultRef.current.innerHTML=`Result is ${result}`}}>Calculate Result</button></div>
            
            
           <div><p id='total' ref={totalScoreRef}></p>
            <p id='result' ref={resultRef}></p></div> 
        
    </form>
    </div>
  )
}

export default TenthForm