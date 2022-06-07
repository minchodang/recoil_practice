import { useRecoilState, useRecoilValue } from 'recoil';
import { countWithUnitState } from '../../store/ControllNumber/controll';

export default function DisplayNumber (){
  const count = useRecoilValue(countWithUnitState)
  return (
    <div>
      현재 숫자 : <span>{count}</span>
    </div>
  )
}

