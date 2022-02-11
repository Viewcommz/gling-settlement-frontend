import styled from "styled-components";

const Notification = (props: NotifiCationProps) => {
    return (
        <StyledNotification>
            {props.notificationData.map(n => (
                <StyledLi key={props.notificationData.indexOf(n)}>
                    <NotificationTitle>{n.title}</NotificationTitle>
                    <NotificationType 
                        color={n.color == "#00D422" ? "#121417" : "#FFFFFF"}
                        backgroundColor={n.color}
                    >{n.type}
                    </NotificationType>
                </StyledLi>
            ))}
        </StyledNotification>
    )
}

interface NotifiCationProps {
    notificationData: Array<any>
}

const StyledNotification = styled.ul`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 180px;

`

const StyledLi = styled.li`
    display: flex;
    align-items: center;
    height: 55px;
    border-radius: 5px;
    background-color: #F8F9FA;
`

const NotificationTitle = styled.div`
    padding-left: 10px;
    font-size: 12px;
    line-height: 16px;
    width: 180px;
    overflow: hidden;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
`

const NotificationType = styled.div<{ backgroundColor: string }>`
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 10px;
    font-weight: 400;
    width: 80px;
    height: 22px;
    margin-left: 10px;
    border-radius: 5px;
    background-color: ${(props) => props.backgroundColor};
    color: ${(props) => props.color}
`

export default Notification;