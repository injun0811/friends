import { useRef } from 'react';
import './FriendsInput.scss';

const FriendsInput = ({ enable, inputForm }) => {
    let name = '';
    let age = '';
    let imgUrl = '';

    const chgName = (e) => {
        name = e.target.value;
    };
    const chgAge = (e) => {
        age = e.target.value;
    };
    const chgImgUrl = (e) => {
        imgUrl = e.target.value;
    };
    return (
        <>
            {enable ? (
                <div className="inputDiv">
                    <div>
                        <div className="flex">
                            <p>이름</p>
                            <input type="text" name="name" onChange={chgName} />
                        </div>
                        <div className="flex">
                            <p>나이</p>
                            <input type="text" name="age" onChange={chgAge} />
                        </div>
                        <div className="flex">
                            <p>주소</p>
                            <input type="text" name="imgUrl" onChange={chgImgUrl} placeholder="./images/Viper.png" />
                        </div>
                    </div>
                    <div className="regBtn">
                        <button onClick={() => inputForm(name, age, imgUrl)}>등록</button>
                    </div>
                </div>
            ) : (
                ''
            )}
        </>
    );
};

export default FriendsInput;
