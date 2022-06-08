import { useState } from 'react';
import { useRecoilState } from 'recoil';
import { guestListState } from '../../store/GuestState/guestState';
import GuestList from './GuestList';


export default function GuestBook(){
  const [guestId, setGuestId] = useState(null);
  const [guestList, setGuestList] = useRecoilState(guestListState);

  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setGuestId(e.target.value);
  };


  const addGuest = async() =>{
    const res = await fetch(
      `https://jsonplaceholder.typicode.com/users/${guestId}`
    );
    const data = await res.json();
    console.log(data);
    setGuestList([...guestList, data])
  }

  return(
    <>
    <label htmlFor='search'> 추가할 고객 ID를 입력하세요.</label>
    <input type="text" id='search' onChange={handleInput}/>
    <button onClick={addGuest}>추가</button>
    <GuestList/>
    </>
  )


}