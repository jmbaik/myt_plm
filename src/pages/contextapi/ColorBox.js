import React, {createContext, useContext} from 'react';

export const TwoColorContext = createContext({
    state:{color: 'black', subColor:'read'},
    actions:{
        setColor:() =>{},
        setSubColor:() =>{}
    }
});

const ColorBox = () => {
    const {state} = useContext(TwoColorContext);
    return (
        <>
            <div
                style={{
                    width: '64px',
                    height:'64px',
                    background:state.color,
                }}
            />
            <div
                style={{
                    width: '64px',
                    height:'64px',
                    background:state.subColor,
                }}
            />
        </>
    );
};

export default ColorBox;
