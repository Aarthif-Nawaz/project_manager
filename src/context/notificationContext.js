import React, { createContext } from 'react';
import PNotify from "pnotify/dist/es/PNotify";

const notificationContext = createContext();

function ProvideNotification({ children }) {
    const notificationContextValue = useProvideNotificationContext();
    return (
        <notificationContext.Provider value={notificationContextValue}>
            {children}
        </notificationContext.Provider>
    );
}

function useProvideNotificationContext() {
    const setNotification = (title, text, type) => {
        if (typeof window.stackBottomRight === 'undefined') {
            window.stackBottomRight = {
                'dir1': 'up',
                'dir2': 'left',
                'firstpos1': 25,
                'firstpos2': 25
            };
        }
        let notice;
        const params = {
            title: title,
            text: text,
            closer: false,
            sticker: false,
            delay: 3500,
            addclass: 'stack-bottomright',
            stack: window.stackBottomRight
        };
        if (type === 'success') {
            notice = PNotify.success(params);
        } else if (type === 'error') {
            notice = PNotify.error(params);
        } else {
            notice = PNotify.info(params);
        }
        notice.on('click', () => {
            notice.close();
        });
    }
    return {
        setNotification
    }
}

export {
    notificationContext,
    ProvideNotification
}