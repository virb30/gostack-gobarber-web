import React from 'react';
import { Link } from 'react-router-dom';

import Notifications from '~/components/Notifications';
import brand from '~/assets/brand.svg';

import { Container, Content, Profile } from './styles';

export default function Header() {
  return (
    <Container>
      <Content>
        <nav>
          <img src={brand} alt="GoBarber" />
          <Link to="/dashboard">DASHBOARD</Link>
        </nav>

        <aside>
          <Notifications />

          <Profile>
            <div>
              <strong>Vinicius Boscoa</strong>
              <Link to="/profile">Meu Perfil</Link>
            </div>
            <img
              src="https://api.adorable.io/avatars/50/abott@adorable.png"
              alt="Vinicius Boscoa"
            />
          </Profile>
        </aside>
      </Content>
    </Container>
  );
}
