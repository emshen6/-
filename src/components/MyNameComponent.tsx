import '../css/myname.css';

interface DataPropsMyNameComponent {
    myphoto: string;
    name: string;
    age: string;
    alt: string;
}

export const MyNameComponent = (props: DataPropsMyNameComponent) => {
    return (
        <div className="myname">
            <div className="photo">
                <img src={props.myphoto} alt={props.alt} />
            </div>
            <div className="nameage">
                <div className="name">{props.name}</div>
                <div className="age">{props.age}</div>
            </div>
        </div>
    );
};