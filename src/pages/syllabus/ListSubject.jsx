import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getSubjectsByMajor } from '../../features/syllabus/syllabusSlice';
import useEffectOnce from '../../helpers/useEffectOnce';

const ListSubject = () => {
  const { majorId } = useParams();
  const dispatch = useDispatch();

  const { data } = useSelector(
    (state) => state.syllabus
  );

  useEffectOnce(() => {
    dispatch(getSubjectsByMajor(majorId));
  });

  useEffect(() => {
    console.log(data);
  }, [data]);

  return <>

  </>
}

export default ListSubject;