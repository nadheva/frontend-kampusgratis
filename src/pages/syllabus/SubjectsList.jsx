import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
import { toast } from 'react-toastify';

import Footer from '../../components/default/Footer';
import Header from '../../components/default/Header';
import PageNotFound from '../../components/default/PageNotFound';
import StudyPlanItem from '../../components/Syllabus/StudyPlanItem';
import SubjectItem from '../../components/Syllabus/SubjectItem';
import { getMyAdministration } from '../../features/administration/administrationSlice';
import { reset } from '../../features/my-study/myStudySlice';
import { getMyStudyPlan, getSubjectsByMajor, takeCurrentMajor } from '../../features/syllabus/syllabusSlice';
import useEffectOnce from '../../helpers/useEffectOnce';

const SubjectsList = () => {
  const dispatch = useDispatch();

  const { majorId } = useParams();

  const { isLoading, data, message } = useSelector(
    (state) => state.syllabus
  );

  const { user } = useSelector(
    (state) => state.profile
  );

  const { data: dataAdministration } = useSelector(
    (state) => state.administration
  );

  const [isLoaded, setIsLoaded] = useState(false);
  const [userMajors, setUserMajors] = useState([]);
  const [eligibleEnroll, setEligibleEnroll] = useState(false);
  const [eligibleTakeMajor, setEligibleTakeMajor] = useState(false);
  const [isTakingMajor, setIsTakingMajor] = useState(false);
  const [userStudyPlan, setUserStudyPlan] = useState({});

  const fetchingData = async () => {
    try {
      await Promise.all([
        // dispatch(getMe()),
        dispatch(getMyAdministration()),
        dispatch(getSubjectsByMajor(majorId)),
        dispatch(getMyStudyPlan())
      ]);

      setIsLoaded(true);
    } catch (error) {
      console.error(error);
    }
  }

  const doTakeMajor = (majorId) => {
    if (!majorId || majorId.length !== 36)
      return toast.error('Mata Kuliah tidak ditemukan.');

    setIsTakingMajor(true);
    dispatch(takeCurrentMajor(majorId));
  }

  useEffectOnce(() => {
    fetchingData();
  });

  useEffect(() => {
    if (message === 'Major ID not found' || !majorId) return <PageNotFound />

    if (message.startsWith("Enrolled to") && isTakingMajor) {
      setIsTakingMajor(false);
      toast.info(`Kamu telah mengambil Rencana Studi ${message.split(" ")[message.split(" ").length - 1]}.`);
      dispatch(reset());
      // setUserTakeMajor(true);
      setEligibleEnroll(true);
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
      toast.error('Kamu tidak dapat mengambil Mata Kuliah ini karena berbeda dengan Rencana Studi kamu.');
    }

    // if (message.startsWith('already enrolled in')) {
    //   dispatch(reset());
    //   toast.error('Mata Kuliah ini telah kamu ambil sebelumnya.');
    // }

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

    if (data?.study_plan?.students_information?.Majors) {
      setUserStudyPlan(data?.study_plan?.subjects_enrolled);
      setUserMajors(data?.study_plan?.students_information?.Majors);
      let eligible = data?.study_plan?.students_information?.Majors.find(major => major.StudentMajor.major_id === data?.subjects?.major?.id);

      if (userMajors.length === 0) {
        if (eligible === undefined || !eligible) {
          setEligibleTakeMajor(true);
          setEligibleEnroll(false);
        } else {
          setEligibleTakeMajor(false);
          setEligibleEnroll(false);
        }
      } else {
        if (eligible === undefined || !eligible) {
          setEligibleTakeMajor(false);
          setEligibleEnroll(false);
        } else {
          setEligibleTakeMajor(false);
          setEligibleEnroll(true);
        }
      }
    } else {
      setEligibleTakeMajor(true);
      setEligibleEnroll(false);
    }
  }, [data, message, eligibleTakeMajor, eligibleEnroll, userMajors, isTakingMajor, majorId, dispatch]);

  return <>
    <Header />
    <main>
      {isLoading && !isLoaded || data?.subjects?.result === undefined ? <>
        <section className='bg-light py-0 py-sm-5'>
          <div className='container text-center' style={{ marginTop: '170px', marginBottom: '170px' }}>
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
        <section className='bg-blue align-items-center d-flex' style={{ background: "url('/assets/images/pattern/04.png') no-repeat center center", backgroundSize: 'cover' }}>
          <div className='container'>
            <div className='row'>
              <div className='col-12 text-center'>
                <h1 className='text-white'>{data?.subjects?.major?.name}</h1>
                <div className='d-flex justify-content-center'>
                  <nav aria-label='breadcrumb'>
                    <ol className='breadcrumb breadcrumb-dark breadcrumb-dots mb-0'>
                      <li className='breadcrumb-item'><Link to='/kategori'>Fitur</Link></li>
                      <li className='breadcrumb-item'><Link to='/silabus'>Rencana Studi</Link></li>
                      <li className='breadcrumb-item active' aria-current='page'>Rencana Studi</li>
                    </ol>
                  </nav>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className='pb-0 py-lg-5'>
          <div className="container">
            <div className='row px-2'>
              {user?.role === "guest" && <>
                <div className='alert alert-info'>
                  Haaaii {user?.full_name.split(" ")[0]}!
                  Kamu harus mengirimkan data <Link to='/administrasi'>administrasi</Link> sebelum mengambil Rencana Studi atau mata kuliah.
                </div>
              </>}
              {user?.role === "student" && <>
                <img className='img-thumbnail p-2' src={data?.subjects?.major?.thumbnail_link} alt={data?.subjects?.major?.name} style={{ height: '360px', objectFit: 'cover' }} />
                <div className='col-lg-12 mt-4 order-2'>
                  <div className='card shadow rounded-2 p-0'>
                    <div className='card-header border-bottom px-4 py-3'>
                      <ul className={`nav nav-pills nav-tabs-line py-0 ${dataAdministration?.is_approved?.overall && eligibleTakeMajor && 'justify-content-between'}`} id='course-pills-tab' role='tablist'>
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
                        {dataAdministration?.is_approved?.overall && eligibleTakeMajor && <>
                          {userMajors.length !== 1 && <li>
                            {!isLoading ? <>
                              <button className='btn btn-primary btn-sm' onClick={() => doTakeMajor(data?.subjects?.major?.id)}>Ambil Rencana Studi</button>
                            </> : <>
                              <button className='btn btn-primary btn-sm'>
                                <span className="spinner-border spinner-border-sm"></span>&nbsp;
                                &nbsp;Mengambil ...
                              </button>
                            </>}
                          </li>}
                        </>}
                      </ul>
                    </div>
                    <div className='card-body p-4'>
                      <div className='tab-content pt-2' id='course-pills-tabContent'>
                        <div className='tab-pane fade show active' id='course-pills-1' role='tabpanel'
                          aria-labelledby='course-pills-tab-1'>
                          <h5 className='mb-3'>
                            Deskripsi Mata Kuliah
                          </h5>
                          <p className='mb-3'>
                            Welcome to the <strong> Digital Marketing Ultimate Course Bundle - 12 Courses in 1
                              (Over 36 hours of content)</strong>
                          </p>
                          <p className='mb-3'>
                            In this practical hands-on training, you’re going to learn to become a digital
                            marketing expert with this <strong> ultimate course bundle that includes 12 digital marketing
                              courses in 1!</strong>
                          </p>
                        </div>
                        <div className='tab-pane fade' id='course-pills-2' role='tabpanel' aria-labelledby='course-pills-tab-2'>
                          <div className='accordion accordion-icon accordion-bg-light' id='accordionSubjects'>
                            {data?.subjects?.result.slice(1).map((semester, i) => <>
                              <div className='accordion-item mb-3'>
                                <h6 className='accordion-header font-base' id={`heading-${i + 1}`}>
                                  <button className='accordion-button fw-bold rounded d-sm-flex d-inline-block collapsed'
                                    type='button' data-bs-toggle='collapse' data-bs-target={`#collapse-${i + 1}`} aria-expanded='false'
                                    aria-controls={`collapse-${i + 1}`} style={!eligibleEnroll ? { 'cursor': 'not-allowed' } : {}}>
                                    {!eligibleEnroll ? <i className="bi bi-lock-fill me-2"></i> : <></>} Semester {semester.semester}
                                    <span className='small ms-0 ms-sm-2'>| {semester.subjects.length} Dosen atau Mentor</span>
                                  </button>
                                </h6>
                                {eligibleEnroll && semester?.subjects !== null && <>
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
                <div className='col-lg-12 mt-4 order-1'>
                  {userMajors.length === 0 && eligibleTakeMajor && <>
                    <div className="alert alert-info">
                      Kamu dapat mengambil Rencana Studi ini.
                    </div>
                  </>}
                  {eligibleEnroll && !eligibleTakeMajor && <>
                    {userStudyPlan?.total_credit === 24 ? <>
                      <div className="alert alert-warning">
                        Kamu telah melampaui batas maksimal pengambilan SKS (24 SKS). Kamu tidak dapat mengambil SKS kembali.
                      </div>
                    </> : <>
                      <div className="alert alert-success">
                        Kamu dapat mengambil Mata Kuliah pada Rencana Studi ini.
                      </div>
                    </>}
                  </>}
                  {!eligibleTakeMajor && !eligibleEnroll && userMajors.length > 0 && <>
                    <div className="alert alert-warning">
                      Kamu telah mengambil Rencana Studi <strong>{userMajors[0].name}</strong>. Kamu tidak dapat mengambil Rencana Studi atau mata kuliah lainnya!
                    </div>
                  </>}
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

export default SubjectsList;