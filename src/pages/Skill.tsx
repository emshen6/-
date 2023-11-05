import React, { useState, useEffect } from 'react';
import { Cardskill } from '../components/Cardskill';
import { Loader } from '../components/Loader';
import { PageTitle } from '../components/PageTitle';
import { IDataSkill } from '../models/IDataProfile';
import { getProfileSkill } from '../api/profile';

export const Skill = () => {
    const [languages, setLanguages] = useState<IDataSkill[]>([]);
    const [libraries, setLbraries] = useState<IDataSkill[]>([]);
    const [others, setOthers] = useState<IDataSkill[]>([]);
    const [loading, setLoading] = useState<boolean>(false);
    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);
            const responceLangugage = await getProfileSkill()
            setLanguages((await responceLangugage.language).data)

            const responceLibraries = await getProfileSkill()
            setLbraries((await responceLibraries.libraries).data)

            const responceOthers = await getProfileSkill()
            setOthers((await responceOthers.other).data);
            setLoading(false);
        };
        fetchData();
    }, []);
    return (
        <React.Fragment>
            <PageTitle title={'Навыки'} />
            {loading && <Loader />}
            <div className="titleProgLang">Языки программирования</div>
            <div className="proglang">
                {languages.map((certificate, index) => (
                    <Cardskill certificate={certificate} key={index} />
                ))}
            </div>
            <div className="titleProgLang">Библиотеки</div>
            <div className="library">
                {libraries.map((certificate, index) => (
                    <Cardskill certificate={certificate} key={index} />
                ))}
            </div>
            <div className="titleProgLang">Прочие сертификаты</div>
            <div className="other">
                {others.map((certificate, index) => (
                    <Cardskill certificate={certificate} key={index} />
                ))}
            </div>
        </React.Fragment>
    );
};