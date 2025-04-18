import React from "react";
import PropTypes from "prop-types";
import styles from "./FriendList.module.css";

const FriendListItem = ({ avatar, name, isOnline }) => {
    return (
        <div className={styles.card}>
            <img src={avatar} alt="Avatar" width="70" />
            <p className={styles.name}>{name}</p>
            <p className={isOnline ? styles.online : styles.offline}>
                {isOnline ? "Online" : "Offline"}
            </p>
        </div>
    );
};

FriendListItem.propTypes = {
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    isOnline: PropTypes.bool.isRequired
};

export default FriendListItem;