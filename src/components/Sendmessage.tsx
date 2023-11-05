import '../css/sendmessage.css';
import { IDataContacts } from '../models/IDataProfile';

interface DataPropsContacts {
    contact: IDataContacts;
}

export const Sendmessage = (props: DataPropsContacts) => {
    return (
        <div className="media">
            <a href={props.contact.url} target="_blank" rel="noreferrer">
                <div className="title_sl">{props.contact.title}</div>
                <img src={props.contact.img} alt={props.contact.name} />
            </a>
        </div>
    );
};