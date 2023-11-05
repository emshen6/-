import '../css/resume.css';
import { IDataAbout } from '../models/IDataProfile';

interface DataPropsAbout {
    about: IDataAbout;
}

export const AboutComponent = (props: DataPropsAbout) => {
    return (
        <div className="resume">
            <div className="info">
                <div className="img">
                    <img src={props.about.img} alt={props.about.alt} />
                </div>
                <div className="description">{props.about.description}</div>
            </div>
        </div>
    );
};