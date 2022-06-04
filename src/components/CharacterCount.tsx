import { atom, selector, useRecoilState, useRecoilValue } from 'recoil'
import { v1 } from 'uuid'

export default function CharacterCount(){
  const textState = atom({
    key: `textState`,
    default: '',
  });
  const [text, setText] = useRecoilState(textState)
  const charCountState = selector({
    key:`charCountState`,
    get:({get}) =>{
      const text = get(textState);
      return text.length
    }
  })
  const count = useRecoilValue(charCountState);
  return<>Character Count: {count}</>
}