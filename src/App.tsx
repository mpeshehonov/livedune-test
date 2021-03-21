import React, {createContext, useState} from 'react';
import PageLayout from './shared/components/PageLayout';
import Routes from './pages/routes';
import {BrowserRouter as Router} from 'react-router-dom';
import 'antd/dist/antd.less';
import './styles.scss';

export const UserContext = createContext<any | null>(null);

const App = () => {
  const [user, setUser] = useState<any | null>(null);

  const changeUser = (newUser: object) => setUser(newUser);

  return (
    <Router>
      <UserContext.Provider value={[user, changeUser]}>
        <PageLayout>
          <Routes />
        </PageLayout>
      </UserContext.Provider>
    </Router>
  );
};

export default App;
