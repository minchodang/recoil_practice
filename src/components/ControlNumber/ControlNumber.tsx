import { useRecoilState } from 'recoil';
import { countState } from '../../store/ControllNumber/controll';

export default function ControlNumber(){
  const [count, setCount] = useRecoilState(countState);
  const increase = ()=>{
    setCount(count +1);
  }
  const decrease = ()=>{
    setCount(count -1);
  }
  return (
    <div>
      <button onClick={increase}>+</button>
      <button onClick={decrease}>-</button>
    </div>
  );
}