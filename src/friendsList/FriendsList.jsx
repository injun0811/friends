import FriendsItem from './friendsItem';
import './FriendsList.scss';

const FriendsList = ({ data, chgRadio }) => {
    return (
        <ul>
            {data.map((item) => (
                <FriendsItem key={item.id} item={item} chgRadio={chgRadio} />
            ))}
        </ul>
    );
};

export default FriendsList;
