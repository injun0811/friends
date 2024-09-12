import './FriendsDetail.scss';

const FriendsDetail = ({ tab }) => {
    const { id, name, age, imgUrl, isShow } = tab;
    return (
        <div className="detail">
            <img src={imgUrl} alt={name} />
            <p>이름 : {name}</p>
            <p>나이 : {age}</p>
        </div>
    );
};

export default FriendsDetail;
