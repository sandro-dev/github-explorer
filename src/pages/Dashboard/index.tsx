import React from 'react';
import { FiChevronRight} from 'react-icons/fi';

import { Title, Form, Repositories } from './styles';

import logo from '../../assets/logo.svg';

const Dashboard: React.FC = () => {
  return (
    <>
      <img src={logo} alt="Github Explorer"/>
      <Title>Explore repositórios no Github.</Title>
      <Form>
        <input placeholder="Digite aqui o nome do repositório" />
        <button type="submit">Pesquisar</button>
      </Form>

      <Repositories>
        <a href="">
          <img src="https://avatars0.githubusercontent.com/u/2723183?s=460&u=5ad8a081f3ba42377ef93d8c6ad969362986fe66&v=4" alt="sandro-dev"/>
          <div>
            <strong>facebooko/jest</strong>
            <p>Delightful JavaScript Testing.</p>
          </div>
          <FiChevronRight size={20} color="#CBCBD6" />
        </a>
        <a href="">
          <img src="https://avatars0.githubusercontent.com/u/2723183?s=460&u=5ad8a081f3ba42377ef93d8c6ad969362986fe66&v=4" alt="sandro-dev"/>
          <div>
            <strong>facebooko/jest</strong>
            <p>Delightful JavaScript Testing.</p>
          </div>
          <FiChevronRight size={20} color="#CBCBD6" />
        </a>
        <a href="">
          <img src="https://avatars0.githubusercontent.com/u/2723183?s=460&u=5ad8a081f3ba42377ef93d8c6ad969362986fe66&v=4" alt="sandro-dev"/>
          <div>
            <strong>facebooko/jest</strong>
            <p>Delightful JavaScript Testing.</p>
          </div>
          <FiChevronRight size={20} color="#CBCBD6" />
        </a>
        <a href="">
          <img src="https://avatars0.githubusercontent.com/u/2723183?s=460&u=5ad8a081f3ba42377ef93d8c6ad969362986fe66&v=4" alt="sandro-dev"/>
          <div>
            <strong>facebooko/jest</strong>
            <p>Delightful JavaScript Testing.</p>
          </div>
          <FiChevronRight size={20} color="#CBCBD6" />
        </a>
        <a href="">
          <img src="https://avatars0.githubusercontent.com/u/2723183?s=460&u=5ad8a081f3ba42377ef93d8c6ad969362986fe66&v=4" alt="sandro-dev"/>
          <div>
            <strong>facebooko/jest</strong>
            <p>Delightful JavaScript Testing.</p>
          </div>
          <FiChevronRight size={20} color="#CBCBD6" />
        </a>
        <a href="">
          <img src="https://avatars0.githubusercontent.com/u/2723183?s=460&u=5ad8a081f3ba42377ef93d8c6ad969362986fe66&v=4" alt="sandro-dev"/>
          <div>
            <strong>facebooko/jest</strong>
            <p>Delightful JavaScript Testing.</p>
          </div>
          <FiChevronRight size={20} color="#CBCBD6" />
        </a>
        <a href="">
          <img src="https://avatars0.githubusercontent.com/u/2723183?s=460&u=5ad8a081f3ba42377ef93d8c6ad969362986fe66&v=4" alt="sandro-dev"/>
          <div>
            <strong>facebooko/jest</strong>
            <p>Delightful JavaScript Testing.</p>
          </div>
          <FiChevronRight size={20} color="#CBCBD6" />
        </a>
      </Repositories>
    </>
  )
}

export default Dashboard;
