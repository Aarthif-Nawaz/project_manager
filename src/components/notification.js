import React from 'react'
import { Notification } from 'react-pnotify';

export default function Notifications(props) {
    return (
        <Notification
            type={props.type}
            title={props.title}
            text={props.text}
            animateIn='zoomInLeft'
            animateOut='zoomOutRight'
            delay={2000}
            shadow={false}
            hide={true}
            nonblock={false}
            desktop={false}
        />
    );
}