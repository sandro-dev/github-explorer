import React from 'react';

import { Link } from 'react-router-dom';

import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';

import { Header, RepositoryInfo, Issues } from './styles';

import logoImg from '../../assets/logo.svg';

const Repository: React.FC = () => {
  return (
    <>
      <Header>
        <img src={logoImg} alt="Github Explorer" />
        <Link to="/">
          <FiChevronLeft size={20} />
          Voltar
        </Link>
      </Header>
      <RepositoryInfo>
        <header>
          <img
            src="https://avatars3.githubusercontent.com/u/2723183?v=4"
            alt="sandro-dev/fastfeet"
          />
          <div>
            <strong>Nome do repositorio</strong>
            <p>descrição do repositorio</p>
          </div>
        </header>
        <ul>
          <li>
            <strong>1808</strong>
            <span>Stars</span>
          </li>
          <li>
            <strong>48</strong>
            <span>Forks</span>
          </li>
          <li>
            <strong>67</strong>
            <span>Issues abertas</span>
          </li>
        </ul>
      </RepositoryInfo>
      <Issues>
        <a href="#huhauhau">
          <div>
            <strong>full name </strong>
            <p>description</p>
          </div>
          <FiChevronRight size={20} color="#CBCBD6" />
        </a>
      </Issues>
    </>
  );
};

export default Repository;
