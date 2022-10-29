import { useContext, useEffect, useState } from 'react'
import { DarkmodeContext } from '../context/DarkmodeContext'
import ClicklerExpensive from './ClicklerExpensive'

const Clicker = () => {
  const Darkmode = useContext(DarkmodeContext)
  // console.log( Darkmode );

  const [counter, setCounter] = useState(0)

  useEffect(() => {
    console.log('se agregó un item')
  }, [])

  //   useEffect( () => {
  //     console.log('se hizo render');
  //   })

  useEffect(() => {
    console.log('se alteró counter')
  }, [counter])

  const clickHandler = () => {
    console.log('Hiciste click')
    setCounter(counter + 1)
  }

  return (
    <div>
      <div className="m-5">{counter}</div>
      <button onClick={clickHandler} className="btn m-5">
        Cantidad de Items
      </button>
      <div>
        <strong>Darkmode: {Darkmode ? 'Activado' : 'Desactivado'}</strong>
      </div>
    </div>
  )
}
export default Clicker
