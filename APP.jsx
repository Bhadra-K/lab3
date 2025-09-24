// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'

// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <>
//       <div>
//         <a href="https://vite.dev" target="_blank">
//           <img src={viteLogo} className="logo" alt="Vite logo" />
//         </a>
//         <a href="https://react.dev" target="_blank">
//           <img src={reactLogo} className="logo react" alt="React logo" />
//         </a>
//       </div>
//       <h1>Vite + React</h1>
//       <div className="card">
//         <button onClick={() => setCount((count) => count + 1)}>
//           count is {count}
//         </button>
//         <p>
//           Edit <code>src/App.jsx</code> and save to test HMR
//         </p>
//       </div>
//       <p className="read-the-docs">
//         Click on the Vite and React logos to learn more
//       </p>
//     </>
//   )
// }

// export default App

// #1.Hello world
// function App(){
//   const message="Hello World!";
//   return <h1>{message}</h1>;
// }
// export default App;

// #Print details
// const details={name:"Bhadra",age:20,height:167};
// export default function App()
// {
//   return(
//   <div>
//       <p>Name:{details.name}</p>
//       <p>Age:{details.age}</p>
//       <p>Height:{details.height}</p>
//   </div>
//   );
// }

// #3.Component-welcome
// import Welcome from "./Welcome";
// export default function App() {
//   return <Welcome />;
// }

// #4.header,content,footer
import Page from "./Page"
export default function App(){
  return<Page/>;
}
