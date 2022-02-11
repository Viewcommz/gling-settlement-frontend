import styled from "styled-components";

const Notification = (props: NotifiCationProps) => {
    return (
        <StyledNotification>
            {props.notificationData.map(n => (
                <StyledLi>
                    <NotificationTitle>{n.title}</NotificationTitle>
                    <NotificationType>{n.type}</NotificationType>
                </StyledLi>
            ))}
        </StyledNotification>
    )
}

interface NotifiCationProps {
    notificationData: Array<any>
}

const StyledNotification = styled.ul`
    height: 160px;
    border: 1px solid #ddd;
`

const StyledLi = styled.li`
    display: flex;
    height: 53px;
    padding: 14px 10px;
    border: 1px solid #ddd;
    background-color: #F8F9FA;
`

const NotificationTitle = styled.div`
    font-size: 12px;
    padding-top: 5px;
    width: 180px;
`

const NotificationType = styled.div`
    font-size: 7px;
    width: 70px;
    height: 22px;
    padding: 5px 0;
    margin-left: 10px;
    text-align: center;
    border-radius: 5px;
    background-color: red;
`

export default Notification;