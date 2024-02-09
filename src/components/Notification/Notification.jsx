import { useContext } from "react";
import { useState, createContext } from "react";

const NotificationContext = createContext({
    showNotification: () => {}
})

const Notification = ({ notificationData }) => {
    const notificationStyles = {
        position: "absolute",
        top: 100,
        right: 30,
        backgroundColor: "red",
        color: "white",
        padding: 5, 
        borderRadius: 10
    }
    if(!notificationData.text) return null

    return (
        <div style={notificationStyles}>
            <h4>{notificationData.type}:</h4>
            <p>{notificationData.text} </p>
        </div>
    )
}

export const NotificationProvider = ({ children }) => {
    const [notificationData, setNotificationData] = useState ({
        type: "success",
        text: "",
    })

    const showNotification = (type, text) => {
        setNotificationData({type, text})

        setTimeout(() => {
            setNotificationData(prev => ({ ...prev, text: ""}))
        }, 2000)
    }

    return (
        <NotificationContext.Provider value={{ showNotification }}>
            {notificationData.text &&  <Notification notificationData= {notificationData}/>}
            {children}
        </NotificationContext.Provider>
    )
}

export const useNotification = () => {
    return useContext(NotificationContext)
}