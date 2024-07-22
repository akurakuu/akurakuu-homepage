import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const PageTitle = (props: { title: string }) => {
    const location = useLocation();

    useEffect(() => {
        document.title = props.title + " | akurakuu";
    }, [location, props.title]);

    return null;
};

export default PageTitle;