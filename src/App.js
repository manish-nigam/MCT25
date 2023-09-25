import './App.css'
import Home from './routes/home/home.component'
import {Routes,Route} from 'react-router-dom'
import Navigation from './routes/navbar/navbar.component'
import Receipes from './routes/receipes/receipes.component'
import ReceipeDetail from './routes/receipesDetails/receipesDetail.component'
 
const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Navigation />}>
          <Route index element={<Home />}/>
          <Route path='/receipes' element={<Receipes/>}/>
       </Route>
      <Route path='receipes/:recipe_id' element={<ReceipeDetail />}/>
    </Routes>
    )
}

export default App