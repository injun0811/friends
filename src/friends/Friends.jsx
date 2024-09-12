import { useRef, useState } from 'react';
import FriendsData from '../assets/api/friends';
import FriendsDetail from '../friendsDetail/friendsDetail';
import FriendsList from '../friendsList/friendsList';
import FriendsInput from '../friendsInput/friendsInput';
import './Friends.scss';

const Friends = () => {
    const [data, setData] = useState(FriendsData);
    const [tab, setTab] = useState(data[0]);
    const [enable, setEnable] = useState(false);
    const no = useRef(FriendsData.length + 1);

    // 데이터 초기화
    const resetData = () => {
        setTab(data[0]);
        setData(FriendsData);
    };

    // 선택
    const chgRadio = (id) => {
        setData(data.map((item) => (item.id === id ? { ...item, isShow: true } : { ...item, isShow: false })));
        setTab(data.find((item) => item.id === id));
    };

    // 활성, 비활성화
    const chgCheck = () => {
        setEnable((enable) => !enable);
    };
    const inputForm = (name, age, imgUrl) => {
        setData([...data, { id: no.current++, name, age, imgUrl, isShow: false }]);
        setTab(data[0]);
    };

    return (
        <div className="main">
            <div className="left">
                <div className="infoPanel">
                    <p>친구들 총인원 : {data.length}</p>
                    <div className="chkBox">
                        <input type="checkbox" name="enable" id="enable" onChange={chgCheck} />
                        <label htmlFor="enable">{enable ? '비활성' : '활성'}</label>
                    </div>
                </div>
                <FriendsList data={data} chgRadio={chgRadio} />
                <div className="btnDiv">
                    <button onClick={resetData}>원래상태</button>
                </div>
                <FriendsInput enable={enable} inputForm={inputForm} />
            </div>
            <div className="right">
                <FriendsDetail tab={tab} />
            </div>
        </div>
    );
};

export default Friends;
