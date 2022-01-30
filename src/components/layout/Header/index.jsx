import React from 'react';
import PropTypes from 'prop-types';
import { Header } from './style';
import { Link } from 'react-router-dom';
import ThemeSwitcher from '../../ThemeSwitcher';
import PageNavegation from '../../PageNavegation';
import logo from '../../../assets/images/cost_logo.png'

function index({themeCb}) {
  return <Header>
        <Link to='/'>
            <img src={logo} alt="Cost logo" />
        </Link>
        <ThemeSwitcher cb={themeCb}/>
        <PageNavegation/>
    </Header>;
}

index.propTypes = {
    themeCb: PropTypes.func.isRequired
}

export default index
