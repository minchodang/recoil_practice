import { useNavigate } from 'react-router-dom';
import ControlNumber from './ControlNumber';
import DisplayNumber from './DisplayNumber';

export default function Numbers() {
  const navigate = useNavigate();

  function back(){
    navigate('/');
  }
  function next(){
    navigate('/todo')
  }


  return (
    <div>
      <DisplayNumber/>
      <ControlNumber/>
      <button onClick={back}>이전</button>
      <button onClick={next}>다음</button>
    </div>

  );
}
