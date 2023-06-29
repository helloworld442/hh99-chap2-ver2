import { useDispatch } from 'react-redux';
import StyledDropDown from '../components/common/Block/StyledDropDownBlock';
import { isDone } from '../redux/modules/selectChange';
import StyledListUI from '../components/common/Block/StyledListUIBlock';

const TodoToggleContainer = () => {
    const dispatch = useDispatch();

    const onChangeHandler = (value) => {
        // const value = event.target.value;
        const checked = value;
        if (checked === 'working') {
            dispatch(isDone(false));
        } else if (checked === 'done') {
            dispatch(isDone(true));
        } else {
            dispatch(isDone(checked));
        }
    };

    return (
        <>
            <StyledListUI />
            <StyledDropDown onChangeHandler={onChangeHandler} />
        </>
    );
};

export default TodoToggleContainer;
