import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useRecoilState, useRecoilValue } from 'recoil';
import { selectedTodoState, taskIdState } from '../../store/Todos/todo';

export default function Todo(){
  const [taskId, setTaskId] = useRecoilState(taskIdState);
  const selectedTodo = useRecoilValue(selectedTodoState(taskId));
  const selectTodo = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const value = Number(event.target.value);
    setTaskId(value);
  };


    const navigate = useNavigate();

    function back() {
      navigate('/number');
    }
    function next() {
      navigate('/guest');
    }


return (
  <div>
    <select name="taskId" id="taskId" onChange={selectTodo}>
      <option value="0">태스크 1</option>
      <option value="1">태스크 2</option>
      <option value="2">태스크 3</option>
    </select>
    <div>
      <h1>
        선택한 일정 : <span>{selectedTodo.title}</span>
      </h1>
    </div>
    <button onClick={back}>이전</button>
    <button onClick={next}>다음</button>
  </div>
);

}