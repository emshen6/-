import '../css/pagetitle.css';

interface DataPropsPageTitle {
    title: string;
}

export const PageTitle = (props: DataPropsPageTitle) => {
    return <div className="pagetitle">{props.title}</div>;
};