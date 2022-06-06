import { atom, selector, useRecoilState, useRecoilValue } from 'recoil'
import { v1 } from 'uuid'
import { charCountState, textState } from '../../store/Counter/counter'



export default function CharacterCount(){

  const [text, setText] = useRecoilState(textState)

  const count = useRecoilValue(charCountState);
  return<>Character Count: {count}</>
}