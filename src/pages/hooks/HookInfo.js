import useInputs from '../../components/custom/useInputs';

const Info = () => {

    const [state, onChange] = useInputs({
        name: '',
        nickname: ''
    });
    const {name, nickname} = state;

    return (
        <div>
            <div>
                <input name="name" value={name} onChange={onChange}/>
                <input name="name" value={name} onChange={onChange}/>
            </div>
            <div>
                <div>
                    <b> 이름:</b> {name}
                </div>
                <div>
                    <b> 닉네임:</b>
                    {nickname}
                </div>
            </div>
        </div>
    );
};

export default Info;