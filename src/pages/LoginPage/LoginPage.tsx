import React from 'react';
import {Col, Row, Typography, Input} from 'antd';
import './styles.scss';

const {Title, Paragraph, Text, Link} = Typography;

const LoginPage = () => {
  return (
    <Row
      justify="center"
      align="middle"
      gutter={{xs: 8, sm: 16, md: 24, lg: 32}}
      className="mt-6 login-page"
    >
      <Col span={12}>
        <Title>Войти</Title>
        <Paragraph>Добро пожаловать, рады видеть вас снова 👋</Paragraph>
      </Col>
    </Row>
  );
};

export default LoginPage;
