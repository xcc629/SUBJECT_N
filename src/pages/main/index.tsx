import * as React from 'react';
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { userSelector } from '../../redux/login/slice';
import MainLayout from '../../components/templetes/MainLayout';

export default function Main() {
  const userInfo = useSelector(userSelector);

  return userInfo.email.length ? <MainLayout /> : <Navigate to="/login" />;
}
