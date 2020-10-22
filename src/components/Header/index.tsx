import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

import logo from '../../assets/brunoflix.png';
import { Login } from '../Login';
import { Search } from '../Search';
import { Notification } from '../Notification';

import notifications from '../../assets/json/notifications.json';

import * as S from './styles';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  const { pathname } = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.pageYOffset > 1);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <S.Container data-testid="header-container" isScrolled={isScrolled}>
      <S.Content>
        <Link to="/" data-testid="Brunoflix Logo">
          <S.Logo src={logo} alt="Brunoflix" />
        </Link>

        <S.Nav>
          <S.NavLink>
            <Link to="/" className={pathname === '/' ? 'active' : ''}>
              Início
            </Link>
          </S.NavLink>
          <S.NavLink>
            <Link
              to="/series"
              className={pathname === '/series' ? 'active' : ''}
            >
              Séries
            </Link>
          </S.NavLink>
          <S.NavLink>
            <Link
              to="/movies"
              className={pathname === '/movies' ? 'active' : ''}
            >
              Filmes
            </Link>
          </S.NavLink>
          <S.NavLink>
            <Link
              to="/latest"
              className={pathname === '/latest' ? 'active' : ''}
            >
              Mais recentes
            </Link>
          </S.NavLink>
          <S.NavLink>
            <Link
              to="/my-list"
              className={pathname === '/my-list' ? 'active' : ''}
            >
              Minha lista
            </Link>
          </S.NavLink>
        </S.Nav>
      </S.Content>

      <S.Actions>
        <Search placeHolder="Títulos, pessoas, gêneros" />
        <Notification movies={notifications} />
        <Login loggedIn={true} />
      </S.Actions>
    </S.Container>
  );
};

export default Header;
