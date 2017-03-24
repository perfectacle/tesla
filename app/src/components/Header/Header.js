import React from 'react/lib/React';
import './Header.css';
import logoUrl from 'assets/logo.svg';

export const Header = () => (
  <div className="header">
    <img src={logoUrl} alt="Tesla" />
  </div>
);