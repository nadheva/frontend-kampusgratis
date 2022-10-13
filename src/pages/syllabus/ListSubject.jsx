import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams, Link } from 'react-router-dom';
import { getMyStudyPlan, getSubjectsByMajor, reset, takeCurrentMajor } from '../../features/syllabus/syllabusSlice';
import { getMyAdministration } from '../../features/administration/administrationSlice';
import useEffectOnce from '../../helpers/useEffectOnce';

import Header from '../../components/default/Header';
import Footer from '../../components/default/Footer';
import PageNotFound from '../../components/default/PageNotFound';
import { getMe } from '../../features/profile/profileSlice';

import SubjectItem from '../../components/Syllabus/SubjectItem';
import { useState } from 'react';

import { toast } from 'react-toastify';
import StudyPlanItem from '../../components/Syllabus/StudyPlanItem';

const ListSubject = () => {
  const [currentUserMajors, setCurrentUserMajors] = useState([]);
  const [isEligible, setIsEligible] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);
  const { majorId } = useParams();
  const dispatch = useDispatch();

  const { data, message, isLoading } = useSelector(
    (state) => state.syllabus
  );

  const { user } = useSelector(
    (state) => state.profile
  );

  const fetchingData = async () => {
    try {
      await Promise.all([
        dispatch(getMe()),
        dispatch(getMyAdministration()),
        dispatch(getSubjectsByMajor(majorId)),
        dispatch(getMyStudyPlan())
      ]);

      setIsLoaded(true);
    } catch (error) {
      console.error(error);
    }
  }

  const { data: dataAdministration } = useSelector(
    (state) => state.administration
  )

  const doTakeCurrentMajor = (majorId) => {
    if (!majorId || majorId.length !== 36)
      return toast.error('Mata Kuliah tidak ditemukan.');

    dispatch(takeCurrentMajor(majorId));
  }

  useEffectOnce(() => {
    // window.scrollTo({
    //   top: 0,
    //   left: 0,
    //   behavior: 'smooth'
    // });

    fetchingData();
  });

  useEffect(() => {
    if (message === 'Major ID not found' || !majorId) return <PageNotFound />

    if (data?.subjects?.students_information?.Majors) {
      setIsEligible(data?.subjects?.students_information?.Majors.find(major => major === data?.subjects?.major?.id))
      setCurrentUserMajors(data?.subjects?.students_information?.Majors)
    }

    if (message === 'Exceeded maximum credit') {
      dispatch(reset());
      toast.error('Kamu telah melampaui maksimal SKS.');
    }

    if (message === 'Subject already taken') {
      dispatch(reset());
      toast.error('Mata Kuliah ini telah kamu ambil sebelumnya.');
    }

    if (message === "Student's major doesn't have that subject") {
      dispatch(reset());
      toast.error('Kamu tidak dapat mengambil Mata Kuliah ini karena berbeda dengan Jurusan kamu.');
    }

    if (message.includes('already enrolled in')) {
      dispatch(reset());
      toast.error('Mata Kuliah ini telah kamu ambil sebelumnya.');
    }

    if (message.includes('successfully enrolled')) {
      dispatch(reset());
      toast.success('Mata Kuliah berhasil diambil.');
    }

    if (message.includes('Draft Deleted')) {
      dispatch(reset());
      toast.success('Mata Kuliah berhasil dihapus dari KRS.');
    }

    if (message.includes('Already enrolled to major')) {
      dispatch(reset());
      toast.success('Kamu sudah mengambil Mata Kuliah lain.');
    }
  }, [message, dispatch]);

  return <>
    <Header />
    <main>
      {!isLoaded ? <>
        <section className='bg-blue align-items-center d-flex' style={{ background: 'url(assets/images/pattern/04.png) no-repeat center center', backgroundSize: 'cover' }}>
          <div className='container'>
            <div className='row'>
              <div className='col-12 text-center'>
                <h1 className='text-white'>
                  ...
                </h1>
                <div className='d-flex justify-content-center'>
                  <nav aria-label='breadcrumb'>
                    <ol className='breadcrumb breadcrumb-dark breadcrumb-dots mb-0'>
                      <li className='breadcrumb-item'><Link to='/kategori'>Kategori</Link></li>
                      <li className='breadcrumb-item'><Link to='/silabus'>Silabus</Link></li>
                      <li className='breadcrumb-item active' aria-current='page'>Jurusan</li>
                    </ol>
                  </nav>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className='bg-light py-0 py-sm-5'>
          <div className='container text-center' style={{ marginTop: '188px', marginBottom: '188px' }}>
            <div className='row'>
              <div className='col-12'>
                <div className='spinner-border' role='status'>
                  <span className='visually-hidden'>Loading...</span>
                </div>
              </div>
            </div>
          </div>
        </section>
      </> : <>
        <section className='bg-blue align-items-center d-flex' style={{ background: 'url(assets/images/pattern/04.png) no-repeat center center', backgroundSize: 'cover' }}>
          <div className='container'>
            <div className='row'>
              <div className='col-12 text-center'>
                <h1 className='text-white'>{data?.subjects?.major?.name}</h1>
                <div className='d-flex justify-content-center'>
                  <nav aria-label='breadcrumb'>
                    <ol className='breadcrumb breadcrumb-dark breadcrumb-dots mb-0'>
                      <li className='breadcrumb-item'><Link to='/kategori'>Kategori</Link></li>
                      <li className='breadcrumb-item'><Link to='/silabus'>Silabus</Link></li>
                      <li className='breadcrumb-item active' aria-current='page'>Jurusan</li>
                    </ol>
                  </nav>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className='pb-0 py-lg-5'>
          <div className='container'>
            <div className='row px-2'>
              {user?.role === 'guest' && <>
                <div className='alert alert-info'>
                  Haloo {user?.full_name}! Kamu harus mengirimkan data <Link to='/administrasi'>administrasi</Link> sebelum mengambil mata kuliah.
                </div>
              </>}
              {user?.role === 'student' && <>
                <img className='img-thumbnail p-2' src={data?.subjects?.major?.thumbnail_link} alt={data?.subjects?.major?.name} style={{ height: '360px', objectFit: 'cover' }} />
                <div className='col-lg-7 mt-4 '>
                  {!isEligible && currentUserMajors.length !== 0 ? <>
                    <div className="alert alert-danger mb-4">
                      Kamu tidak dapat mengambil Jurusan / Mata Kuliah ini karena berbeda dengan Jurusan yang kamu ambil sebelumnya.
                    </div>
                  </> : <>
                    {dataAdministration?.is_approved?.overall && <>
                      <div className="alert alert-info">
                        Kamu dapat mengambil Jurusan / Mata Kuliah ini.
                      </div>
                    </>}
                  </>}
                  <div className='card shadow rounded-2 p-0'>
                    <div className='card-header border-bottom px-4 py-3'>
                      <ul className={`nav nav-pills nav-tabs-line py-0 ${dataAdministration?.is_approved?.overall && isEligible && 'justify-content-between'}`} id='course-pills-tab' role='tablist'>
                        <li className='nav-item me-2 me-sm-4' role='presentation'>
                          <button className='nav-link mb-2 mb-md-0 active' id='course-pills-tab-1' data-bs-toggle='pill'
                            data-bs-target='#course-pills-1' type='button' role='tab' aria-controls='course-pills-1'
                            aria-selected='true'>Peninjauan
                          </button>
                        </li>
                        <li className='nav-item me-2 me-sm-4' role='presentation'>
                          <button className='nav-link mb-2 mb-md-0' id='course-pills-tab-2' data-bs-toggle='pill'
                            data-bs-target='#course-pills-2' type='button' role='tab' aria-controls='course-pills-2'
                            aria-selected='false'>Kurikulum / Mata Kuliah
                          </button>
                        </li>
                        {dataAdministration?.is_approved && isEligible && <>
                          {dataAdministration?.is_approved?.overall && <>
                            {!isLoading ? <li>
                              <button className='btn btn-primary btn-sm' onClick={() => doTakeCurrentMajor(data?.subjects?.major?.id)}>Ambil Mata Kuliah</button>
                            </li> : <li>
                              <button className="btn btn-primary mb-0 btn-sm" disabled={isLoading}>
                                <span className="spinner-border spinner-border-sm"></span>&nbsp;
                                &nbsp;Loading...
                              </button>
                            </li>}
                          </>}
                        </>}
                      </ul>
                    </div>
                    <div className='card-body p-4'>
                      <div className='tab-content pt-2' id='course-pills-tabContent'>
                        <div className='tab-pane fade show active' id='course-pills-1' role='tabpanel'
                          aria-labelledby='course-pills-tab-1'>
                          <h5 className='mb-3'>
                            Course Description
                          </h5>
                          <p className='mb-3'>Welcome to the <strong> Digital Marketing Ultimate Course Bundle - 12 Courses in 1
                            (Over 36 hours of content)</strong></p>
                          <p className='mb-3'>
                            In this practical hands-on training, you’re going to learn to become a digital
                            marketing expert with this <strong> ultimate course bundle that includes 12 digital marketing
                              courses in 1!</strong>
                          </p>
                        </div>
                        <div className='tab-pane fade' id='course-pills-2' role='tabpanel' aria-labelledby='course-pills-tab-2'>
                          <div className='accordion accordion-icon accordion-bg-light' id='accordionSubjects'>
                            {data && data?.subjects?.result.slice(1).map((semester, i) => <>
                              <div className='accordion-item mb-3'>
                                <h6 className='accordion-header font-base' id={`heading-${i + 1}`}>
                                  <button className='accordion-button fw-bold rounded d-sm-flex d-inline-block collapsed'
                                    type='button' data-bs-toggle='collapse' data-bs-target={`#collapse-${i + 1}`} aria-expanded='false'
                                    aria-controls={`collapse-${i + 1}`} style={!isEligible && { 'cursor': 'not-allowed' }}>
                                    {!isEligible && <i className="bi bi-lock-fill me-2"></i>} Semester {semester.semester}
                                    <span className='small ms-0 ms-sm-2'>| {semester.subjects.length} Dosen atau Mentor</span>
                                  </button>
                                </h6>
                                {isEligible && <>
                                  <div id={`collapse-${i + 1}`} className='accordion-collapse collapse' aria-labelledby={`heading-${i + 1}`}>
                                    <div className='accordion-body mt-3'>
                                      {semester.subjects.length === 0 && <>
                                        <div className='alert alert-info'>
                                          Mata Kuliah belum dimasukkan pada semester ini.
                                        </div>
                                      </>}
                                      {semester.subjects.map((subject, key) => <>
                                        <SubjectItem subject={subject} key={key} />
                                        <hr />
                                      </>)}
                                    </div>
                                  </div>
                                </>}
                              </div>
                            </>)}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className='col-lg-5 my-4'>
                  <StudyPlanItem />
                </div>
              </>}
            </div>
          </div>
        </section>
      </>}
    </main>
    <Footer />
  </>
}

export default ListSubject;