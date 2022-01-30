import { useNavigate } from 'react-router-dom';
import Button from '../../components/Button';
import { NotFoundPage } from './style'
import notFoundImage from '../../assets/images/not_found.png'
import { P } from '../../components/style/elements/Typoghaphy/style'

export default function index() {
    
    const navigate = useNavigate()

    return <NotFoundPage>
        <img src={notFoundImage} alt="page not found image" />
        <P>Page not found =(</P>
        <Button type="button" styleType="active" cornerStyle="basic" cb={{
            onClick: () => navigate('/')
        }}>Back to home</Button>
    </NotFoundPage>;
}