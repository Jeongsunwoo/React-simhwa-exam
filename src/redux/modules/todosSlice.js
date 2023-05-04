import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { v4 as uuidv4 } from "uuid";
/**
 * 2초 지연을 시키는 함수입니다 (비동기 작업).
 */
import { waitTwoSeconds } from '../../utils';

export const __addToDo = createAsyncThunk(
  '__addToDo',
  async (payload, thunkAPI) => {
    setTimeout(() => {
      thunkAPI.dispatch(addTodo(payload))
    }, 2000)
  }
);

export const __deleteTodo = createAsyncThunk(
  '__deleteToDo',
  async (payload, thunkAPI) => {
    setTimeout(() => {
      thunkAPI.dispatch(deleteTodo(payload))
    }, 2000)
  }
);

const initialState = [{
    id: uuidv4(),
    title: "Todo를 추가해보세요!",
    body: "오늘 하루도 화이팅입니다!",
  }]

const todosSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {
    addTodo: (state, action) => {
      return [...state, action.payload]
    },
    deleteTodo: (state, action) => {
      return state.filter((todo) => todo.id !== action.payload);
    },
  },
});

export const { addTodo, deleteTodo } = todosSlice.actions;
export default todosSlice.reducer;
