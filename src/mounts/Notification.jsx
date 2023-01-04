//Notification.jsx
import React from "react";

const styles = {
    wrapper: {
        margin: 8,
        padding: 8,
        display: 'flex',
        flexDirection: 'row',
        border: '1px solid grey',
        borderRadius: 16,
    },
    messageText: {
        color: 'black',
        fontSize: 16,
    },
};


class Notification extends React.Component {
    constructor(props) {
        super(props);

        //현재 컴포넌트에서 사용하는 상태값이 없음
        this.state = {};
    }

    render() {
        return (
            <div style={styles.wrapper}>
                <span style={styles.messageText}>{this.props.message}</span>
            </div>
        );
    }
}

export default Notification;





