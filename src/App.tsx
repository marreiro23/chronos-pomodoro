import './styles/global.css'
import './styles/theme.css'
import { Heading } from './components/Heading'



export function App() {
  console.log('Oi, do App.tsx')


  return (
    <>
      <Heading attr={123} attr2='String'>
        Ola Mundo 1
      </Heading>
      <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. 
        Obcaecati ducimus facilis itaque harum quasi?
        Sequi autem illo fuga accusantium provident sunt voluptatibus pariatur numquam minima blanditiis reprehenderit, nemo ab tempora.

        Bem-vindo ao Chronos Pomodoro
      </p>
    </>
  )
}