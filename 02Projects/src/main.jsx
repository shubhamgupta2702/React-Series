import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
// import './index.css'

function MyApp(){
  return (
    <div>
      <h1>Custom React App !</h1>
    </div>
  )

//   const reactElement = {
//     type: 'a',
//     props: {
//         href: 'https://google.com',
//         target: '_blank'
//     },
//     children: 'click me to visit google'
// }
}

const anotherElement = (
  <a href="https://google.com" target='_blank'>Go to Google</a>
)

createRoot(document.getElementById('root')).render(
  
    // <MyApp />  // or MyApp()   
    // reactElement,
    anotherElement
  
)
