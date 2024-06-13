import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { CharacterDetailsPage, HomePage, NotFoundPage } from './pages';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path="*" element={<NotFoundPage />} />
          <Route path='/characters/:id' element={<CharacterDetailsPage />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App;
