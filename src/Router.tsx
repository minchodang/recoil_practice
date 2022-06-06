import { BrowserRouter, Route, Routes } from 'react-router-dom';
import CharacterCounter from './components/CharaterCounter/CharacterCounter';
import Numbers from './components/ControlNumber/Numbers';



export default function Router(){
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<CharacterCounter />} />
        <Route path="/number" element={<Numbers/>} />
      </Routes>
    </BrowserRouter>
  );
}