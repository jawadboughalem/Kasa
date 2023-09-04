import './notFound.scss';
import React from 'react';
import Header from '../../components/header/Header';
import { Link } from 'react-router-dom';
import Footer from '../../components/footer/Footer';

export default function NotFound() {
  return (
    <div>
      <Header />
      <div className='notFound'>
        <div className="notFound_infos">
          <h1 className='notFound_infos_title'>404</h1>
          <p className='notFound_infos_content'>La page que vous recherchez n'existe pas.</p>
        </div>
        <Link className='notFound_infos_return' to='/'>Retourner sur la page d'acceuil</Link>
      </div>
      <Footer />
    </div>
  );
}
