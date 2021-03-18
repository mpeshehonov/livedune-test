import React from 'react';
import {Layout, Button} from 'antd';
import './styles.scss';
import {Link} from 'react-router-dom';

const Header = () => {
  return (
    <Layout.Header className="header">
      <Link to="/" className="header__logo">
        LiveDune
      </Link>
      <div className="header__register register">
        <Button type="primary" shape="round" size="large">
          Регистрация
        </Button>
      </div>
    </Layout.Header>
  );
};

export default Header;
