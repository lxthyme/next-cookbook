import React, { FC } from 'react';
import Notification from 'rc-notification';
import { NotificationInstance } from 'rc-notification/lib/Notification';
import './index.scss';
import Icon from '../icons';


interface BaseProps {
    title: string,
    info: string,
    confirmText: string,
    cancelText: string,
    onConfirm: () => void,
    onCancel: () => void
}



const PREFIX='leo-message';
const style:React.CSSProperties= {
    position: 'fixed',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%,-50%)',
    zIndex: 999
}

class Messages {
    notification:NotificationInstance|null=null;
    constructor(){
        Notification.newInstance(
          {
            maxCount: 5,
            style:style,
            prefixCls:"leo"
          },
          n => {
            this.notification = n;
          },
        );
    }
    public success(content:string,duration:number=3){
        this.notification?.notice({
            content: <BaseView type="success" content={content} color="#1afa29" />,
            duration: duration
        })
    }
    public error(content:string,duration:number=3){
        this.notification?.notice({
            content: <BaseView type="error" content={content} color="red" />,
            duration: duration
        })
    }
    public warning(content:string,duration:number=3){
        this.notification?.notice({
            content: <BaseView type="warning" content={content} color="#f4ea2a" />,
            duration: duration
        })
    }
}
interface ISuccessProps{
    content:string
    type:'success'|'error'|'warning'
    color:string
}
function BaseView(props:ISuccessProps){
    return (
        <div className={`${PREFIX}-base`}>
            <span><Icon name={props.type} color={props.color}/></span>
            {props.content}
        </div>
    )
}
const Message=new Messages()

export default Message;
