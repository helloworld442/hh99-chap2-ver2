const TOGGLE = "toggle/TOGGLE";

export const toggleItem = (items) => ({ type: TOGGLE, items });

let initialState = {
  hamburger: false,
  BorderAll: true,
  ListUl: false,
};

function toggle(state = initialState, action) {
  switch (action.type) {
    case TOGGLE:
      return { ...initialState, ...action.items };
    default:
      return state;
  }
}

export default toggle;
