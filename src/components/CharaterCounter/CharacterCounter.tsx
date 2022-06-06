import { useNavigate } from 'react-router-dom';
import CharacterCount from './CharacterCount';
import TextInput from './TextInput';

export default function CharacterCounter() {
  const navigate = useNavigate();

  function next (){
    navigate('/number')
  }

  return (
    <div>
      <TextInput/>
      <CharacterCount/>
      <button onClick={next}>다음</button>
    </div>
  );
}
