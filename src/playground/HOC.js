import React from 'react';
import ReactDOM from 'react-dom';

const Info=(props)=>{
    return(
        <div>
        <h1>Heading</h1>
        <p>The info is {props.info}</p>
        </div>
    )
}

const withAdminWarning=(WrappedComponent)=>{
 return(props)=>(
    <div>
     {props.isAdmin && <p>Show Admin Info</p>}
     <WrappedComponent {...props}/>
    </div>
 );
};

const requiredAuthentication = (WrappedComponent) => {

    return (props) => 
        (
            <div>
                {props.isAuthenticated ?  <WrappedComponent {...props}/> : <p>Not Auth</p>} 
            </div>
        )
    
}

const AuthInfo= requiredAuthentication(Info)

ReactDOM.render(<AuthInfo isAuthenticated={false} info="there are the details"/>,document.getElementById('app'))