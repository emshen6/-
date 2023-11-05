import React, { useState, useEffect } from 'react';
import { Loader } from '../components/Loader';
import { PageTitle } from '../components/PageTitle';
import { AboutComponent } from '../components/AboutComponents';
import { MyNameComponent } from '../components/MyNameComponent';
import { IDataAbout } from '../models/IDataProfile';
import { getProfileAbout } from '../api/profile';

export const About = () => {
    const [aboutMe, setAboutMe] = useState<IDataAbout[]>([]);
    const [loading, setLoading] = useState<boolean>(false);

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);
            const responce = await getProfileAbout()
            setAboutMe(responce.data)
            setLoading(false);
        };
        fetchData();
    }, []);
    const nowDate = new Date();
    const birthDay = new Date(1990, 8, 17);
    const birthDayNow = new Date(
        nowDate.getFullYear(),
        birthDay.getMonth(),
        birthDay.getDate()
    );
    let myAge = nowDate.getFullYear() - birthDay.getFullYear();
    if (nowDate < birthDayNow) {
        myAge = myAge - 1;
    }
    return (
        <React.Fragment>
            <PageTitle title={'Обо мне'} />
            {loading && <Loader />}
            <MyNameComponent
                myphoto={'/business-card/img/about/i.png'}
                name={'Павел Кочетков'}
                age={`Возраст ${myAge}`}
                alt={'myphoto'}
            />
            {aboutMe.map((about, index) => (
                <AboutComponent key={index} about={about} />
            ))}
        </React.Fragment>
    );
};