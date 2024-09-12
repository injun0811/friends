const FriendsItem = ({ item, chgRadio }) => {
    const { id, name, age, imgUrl, isShow } = item;
    return (
        <li>
            <div className="imgDiv">
                <img src={imgUrl} alt={name} />
                <div>
                    <h2>이름 : {name}</h2>
                    <h3>나이 : {age}</h3>
                </div>
            </div>
            <input type="radio" name="select" checked={isShow} onChange={() => chgRadio(id)} />
        </li>
    );
};

export default FriendsItem;
