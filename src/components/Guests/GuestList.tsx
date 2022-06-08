import { useRecoilState } from 'recoil';
import { guestListState } from '../../store/GuestState/guestState';
import GuestInfo from './GuestInfo';







export default function GuestList(){
  const [guestList, _] = useRecoilState(guestListState);
  return (
    <ul>
      {guestList.map((item) => {
        const { id, name, username, email } = item;
        return (
          <GuestInfo
            id={id}
            name={name}
            username={username}
            key={id}
            email={email}
          />
        );
      })}
    </ul>
  );
} 