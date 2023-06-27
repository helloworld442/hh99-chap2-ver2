import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { styled } from 'styled-components';
import { isDone } from '../../../redux/modules/selectChange';

const StyledDropDownBlock = styled.select`
    width: 194px;
    height: 32px;
    box-sizing: border-box;
    padding: 0 20px;
    margin: 0 0 36px 0;
    border: none;
    border-radius: 10px;
    box-shadow: 0px 0px 10px #e8e8e8;
    outline: none;
    font-size: 14px;
    font-weight: 650;
    text-align: center;
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    &::-ms-expand {
        display: none;
    }
`;

const StyledDropDown = () => {
    const workState = useSelector((state) => state.workState);
    const dispatch = useDispatch();
    const selectOnchange = (event) => {
        const value = event.target.value;
        if (value === 'done') {
            dispatch(isDone(true));
        } else if (value === 'working') {
            dispatch(isDone(false));
        }
    };
    return (
        <StyledDropDownBlock onChange={selectOnchange}>
            <option value="working">🔥 Working...! 🔥</option>
            <option value="done">🌈 Done...! 🌈</option>
        </StyledDropDownBlock>
    );
};

export default StyledDropDown;
