import { Suspense, lazy } from 'react'
import { Spinner } from '@chakra-ui/react'
import { Route, Routes } from 'react-router-dom'
import { ROUTER } from './Constant/router'




const Home = lazy(()=> import("./Pages/Home/Home"))
const Setting = lazy(()=> import("./Pages/Setting/Setting"))

function App() {

  return (
    <Suspense fallback={
      <Spinner
      thickness='4px'
      speed='0.65s'
      emptyColor='gray.200'
      color='teal.500'
      size='xl'
    />}>
      <Routes>
        <Route path={ROUTER.HOME} element={<Home/>}/>
        <Route path={ROUTER.SETTING} element={<Setting/>}/>
      </Routes>

    </Suspense>
    
      
  )
}

export default App
