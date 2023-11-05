import React, { useState, useEffect } from 'react';
import { Sendmessage } from '../components/Sendmessage';
import { PageTitle } from '../components/PageTitle';
import { Loader } from '../components/Loader';
import { IDataContacts } from '../models/IDataProfile';
import { getProfileContacts } from '../api/profile';

export const Contacts = () => {
    const [contacts, setContacts] = useState<IDataContacts[]>([]);
    const [loading, setLoading] = useState<boolean>(false);

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);
            const responce = await getProfileContacts()
            setContacts(responce.data)
            setLoading(false);
        };
        fetchData();
    }, []);
    return (
        <React.Fragment>
            <PageTitle title={'Контакты'} />
            {loading && <Loader />}
            <div className="sendmessage">
                {contacts.map((contact, index) => (
                    <Sendmessage key={index} contact={contact} />
                ))}
            </div>
        </React.Fragment>
    );
};