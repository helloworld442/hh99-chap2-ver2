//액션
const CREATE = "todos/CREATE";
const UPDATE = "todos/UPDATE";
const DELETE = "todos/DELETE";
const TOGGLE = "todos/TOGGLE";
//id 초기화
let id = 3;

//액션 생성 함수

export const createItem = ({ title, content }) => ({
  type: CREATE,
  todo: {
    id: id++,
    title,
    content,
    isDone: false,
  },
});
export const updateItem = (id, { title, content }) => ({
  type: UPDATE,
  id,
  todo: {
    id,
    title,
    content,
    isDone: false,
  },
});
export const deleteItem = (id) => ({ type: DELETE, id });

export const toggleItem = (id) => ({ type: TOGGLE, id });

const initialState = [
  {
    id: 1,
    title: "리액트 강의보기",
    content: "챕터 1부터 챕터 12까지 학습",
    isDone: false,
  },
  {
    id: 2,
    title: "점심 먹기",
    content: "점심 뭐먹지..?",
    isDone: false,
  },
];

// reducer -> 인자가 actions
// reducer -> actions -> 처리
function todos(state = initialState, action) {
  switch (action.type) {
    case TOGGLE:
      let todo = state.find((todo) => todo.id === action.id);
      todo.isDone = !todo.isDone;
      return [...state];
    case CREATE:
      return state.concat(action.todo);
    case UPDATE:
      state.splice(action.id - 1, 1, action.todo);
      return [...state];
    case DELETE:
      return state.filter((todo) => todo.id !== action.id);
    default:
      return state;
  }
}

export default todos;
// store에 저장
