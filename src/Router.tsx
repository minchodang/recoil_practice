import { BrowserRouter, Route, Routes } from 'react-router-dom';
import CharacterCounter from './components/CharaterCounter/CharacterCounter';
import Numbers from './components/ControlNumber/Numbers';
import GuestBook from './components/Guests/GuestBook';
import Todo from './components/Todos/Todo';



export default function Router(){
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<CharacterCounter />} />
        <Route path="/number" element={<Numbers />} />
        <Route path="/todo" element={<Todo/>}/>
        <Route path="/guest" element={<GuestBook/>}/>
      </Routes>
    </BrowserRouter>
  );
}