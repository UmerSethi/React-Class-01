// import React from 'react';
// import './App.css';

// class App extends React.Component {
//   render(){

//     let name = "Muhammad Umer";
//     return(

//       <div>

//          <h1>{name}</h1>

//       </div>
//     )
//   }
// }

// export default App;




            //  OR


            import React from 'react';
import './App.css';

class App extends React.Component {
  render(){

    let firstName = "Muhammad Umer";
    let lastName = "Saleem";
    let fullName = firstName +" "+lastName;
    let arr = [1,2,3,4,5]

    return(

      <div>

         <h1>{`${firstName} ${lastName}`}</h1>
         <h1>{arr}</h1>
         <h1>{fullName}</h1>
      </div>
    )
  }
}

export default App;