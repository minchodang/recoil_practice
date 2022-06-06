import { atom, selector } from 'recoil';

export const countState = atom({
  key:"countState",
  default:0
})

export const countWithUnitState = selector({
  key:"countUnit",
  get:({get}) =>{
    const count = get(countState);
    return count + "$";
  }
})