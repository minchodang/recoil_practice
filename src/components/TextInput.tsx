import { atom, useRecoilState } from 'recoil';
import { v1 } from 'uuid';

export default function TextInput(){
  const textState = atom({ key: `textState`, default: '' });
  const [text, setText] = useRecoilState(textState)

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value);
  };

  return (
    <div>
      <input type="text" value={text} onChange={onChange}/>
      <br/>
      Echo: {text}
    </div>
  )


}