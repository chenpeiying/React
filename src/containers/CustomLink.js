
import React from 'react';
import { BrowserRouter as Router, Route, Link} from 'react-router-dom';

export default function customLink(){
    return (
        <Router>
            <div>
           <OldSchoolMenuLink activeOnlyWhenExact={true} to="/" label="Home" />
            <OldSchoolMenuLink to="/about" label="About" />
        <hr />
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
            </div>
        </Router>
    );
}
// function OldSchoolMenuLink(props,activeOnlyWhenExact){
//     let isActive = true;
//     return (
//         // <li>
//         //     <link className={isActive?'active':''} to={props.to}>{props.label}</link>
//         // </li>
//         <Route path={to} exact={activeOnlyWhenExact} children={({ match }) => (
//             <div className={match ? "active" : ""}>
//                 {match ? "> " : ""}
//                 <Link to={props.to}>{props.label}</Link>
//           </div>
//         )}
//       />
//     );
// }

function OldSchoolMenuLink(props){
    let isActive =true;
    // console.log(props);
    return(
        <li>
            <Link className={isActive?'active':""} exact={props.activeOnlyWhenExact} to={props.to}>{props.label}</Link>
        </li>
    ) 
}
function Home(){
    return (
        <div>
            <h1>home</h1>
        </div>
    );
}
function About(){
    return (
        <div>
            <h1>about</h1>
        </div>
    );
}
