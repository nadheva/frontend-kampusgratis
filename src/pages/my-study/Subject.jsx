import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useParams, Link } from 'react-router-dom';

import Header from '../../components/default/Header';
import Footer from '../../components/default/Footer';
import PageNotFound from '../../components/default/PageNotFound';

const Subject = () => {
  const { subjectId } = useParams();

  const { data, message, isLoading } = useSelector(
    (state) => state.myStudy
  );

  useEffect(() => {
    if (message === 'Subject ID not found' || !subjectId || subjectId.length !== 36) return <PageNotFound />

  }, []);

  return <>
    <Header />
    <Footer />
  </>
}

export default Subject;