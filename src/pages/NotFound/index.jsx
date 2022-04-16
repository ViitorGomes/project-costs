import { Link } from 'react-router-dom';
import Button from '../../components/buttons/DefaultButton';
import { NotFoundPage } from './style'
import notFoundImage from '../../assets/images/not_found.png'
import { P } from '../../components/style/elements/Typoghaphy/style'

export default function index() {

    return (
        <NotFoundPage>
            <img src={notFoundImage} alt="page not found image" />
            <P>Page not found =(</P>
            <Link to="/">
                <Button type="button" styleType="active" cornerStyle="basic">Back to home</Button>
            </Link>
        </NotFoundPage>
    )
}