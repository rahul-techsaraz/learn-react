import React, {useState,useEffect} from 'react';
import ReactDOM from 'react-dom/client';

//First create the React Element
//Props Drilling
// const A = ({name}) => {
//     return <B name={name} />;
// }
// const B = ({name}) => {
//     return <C name={name} />;
// }
// const C = ({name}) => {
//     return <D name={name} />;
// }
// const D = ({name}) => {
//     return (<div>{name}</div>);
// }
const Counter = () => {
    //State
    let [value,setValue] = useState(0);
    let [name,setName] = useState('rahul')
    //For empty array: Render only once  
    //I f we pass dependency variable then effect will happen on every variable changes
//     useEffect(() => {
// alert("render");
//     },[])
   
    return(
        <>
        <div>
            <button onClick={() => setValue(prev => prev +1)}  style={value >= 10 ? {color:'green'}: {color:''}}>Increament</button>
            <span>{value}</span>
            <button onClick={() =>  setValue(prev => prev-1)} disabled={value <=0 ? true :false}>Decrement</button>
    
        </div>
        </>
    )
   
}

const App = () => {
    return (
        <>
        <Counter  />
        </>
    )
}



//We will create React Dom Node
const root = ReactDOM.createRoot(document.getElementById('root'))
//React Hooks
// Render the React Element in the DOM Node
//H/w= A,B,C,D

//A-b,
//PROPS-NAME
//b-c,
//c-D
root.render(
<React.Fragment>
   <App />
</React.Fragment>

);