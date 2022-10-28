import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
import { finishModule, getModuleBySession, getSingleModule, getSubject, reset, resetAll } from '../../features/my-study/myStudySlice';

import Footer from '../../components/default/Footer';
import Header from '../../components/default/Header';

import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

import useEffectOnce from '../../helpers/useEffectOnce';
import { toast } from 'react-toastify';

const ModuleDetail = () => {
  const dispatch = useDispatch();
  const [currentSubject, setCurrentSubject] = useState({});
  const [currentModule, setCurrentModule] = useState({});
  const [textDoneModule, setTextDoneModule] = useState("");

  const { subjectId, sessionId, moduleId } = useParams();

  const { data, isLoading, isSuccess } = useSelector(
    (state) => state.myStudy
  );

  const fetchAll = async () => {
    await Promise.all([
      dispatch(getSubject(subjectId)),
      dispatch(getSingleModule(moduleId))
    ]);
  }

  useEffectOnce(() => {
    dispatch(resetAll());
    fetchAll();
  });

  const submitFinishModule = (e) => {
    e.preventDefault();
    dispatch(finishModule({ moduleId: moduleId, textDoneModule }));
  }

  useEffect(() => {
    if (data?.module_submit && isSuccess) {
      setCurrentModule({
        ...currentModule,
        takeaway: data.module_submit.activity_detail.takeaway,
        date_submitted: data.module_submit.activity_detail.date_submitted
      });

      setTextDoneModule(data.module_submit.activity_detail.takeaway);
      dispatch(resetAll());
      toast.info("Modul ini telah kamu selesaikan dan materi telah dikirim ke mentor kamu.");
    }

    if (data?.subject) setCurrentSubject(data.subject);
    if (data?.module) setCurrentModule(data.module);
    if (data?.module?.takeaway) {
      setTextDoneModule(data.module.takeaway);
      dispatch(resetAll());
    }
  }, [data, currentSubject, currentModule, textDoneModule]);

  return <>
    <Header />
    <main>
      {isLoading || Object.keys(currentSubject).length === 0 || Object.keys(currentModule).length === 0 ? <>
        <section className='bg-blue align-items-center d-flex' style={{ background: "url('/assets/images/pattern/04.png') no-repeat center center", backgroundSize: 'cover' }}>
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
                      <li className='breadcrumb-item'><Link to='/studi-ku'>Studi-Ku</Link></li>
                      <li className='breadcrumb-item'><Link to={`/studi-ku/${subjectId}`}>Mata Kuliah</Link></li>
                      <li className='breadcrumb-item'><Link to={`/studi-ku/${subjectId}/pertemuan/${sessionId}/modul`}>Modul</Link></li>
                      <li className='breadcrumb-item active' aria-current='page'>List</li>
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
        <section className="bg-blue align-items-center d-flex" style={{ background: "url('/assets/images/pattern/04.png') no-repeat center center", backgroundSize: 'cover' }}>
          <div className="container">
            <div className="row">
              <div className="col-12 text-center">
                <h1 className="text-white">{currentSubject.name}</h1>
                <div className="d-flex justify-content-center">
                  <nav aria-label="breadcrumb">
                    <ol className="breadcrumb breadcrumb-dark breadcrumb-dots mb-0">
                      <li className='breadcrumb-item'><Link to='/kategori'>Kategori</Link></li>
                      <li className='breadcrumb-item'><Link to='/studi-ku'>Studi-Ku</Link></li>
                      <li className='breadcrumb-item'><Link to={`/studi-ku/${subjectId}`}>Mata Kuliah</Link></li>
                      <li className='breadcrumb-item'><Link to={`/studi-ku/${subjectId}/pertemuan/${sessionId}/modul`}>Modul</Link></li>
                      <li className='breadcrumb-item active' aria-current='page'>List</li>
                    </ol>
                  </nav>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className='pb-0 py-lg-5'>
          <div className="container">
            <div className="row">
              {isLoading ? (
                <>
                  <div className="col-sm-12 col-xl-12">
                    <SkeletonTheme>
                      <Skeleton height={50} />
                    </SkeletonTheme>
                  </div>
                  <div className="col-sm-12 col-xl-12">
                    <SkeletonTheme>
                      <Skeleton height={50} />
                    </SkeletonTheme>
                  </div>
                  <div className="col-sm-12 col-xl-12">
                    <SkeletonTheme>
                      <Skeleton height={50} />
                    </SkeletonTheme>
                  </div>
                  <div className="col-sm-12 col-xl-12">
                    <SkeletonTheme>
                      <Skeleton height={50} />
                    </SkeletonTheme>
                  </div>
                </>
              ) : (<>
                <div className="card shadow">
                  <div className="card-body py-4">
                    <div className="col-12">
                      <h5 className="mb-4">List Vidio</h5>
                      {currentModule.videos.length === 0 && <>
                        <div className="alert alert-info">
                          Sepertinya belum ada vidio yang ditambahkan pada modul ini.
                        </div>
                      </>}
                      {currentModule.videos.map(video => <>
                        <div className="d-sm-flex justify-content-sm-between align-items-center">
                          <div className="d-flex">
                            <Link to={`/studi-ku/${subjectId}/pertemuan/${sessionId}/modul/${moduleId}/vidio/${video.id}`} className="btn btn-danger-soft btn-round mb-0">
                              <i className="fas fa-play" />
                            </Link>
                            <Link to={`/studi-ku/${subjectId}/pertemuan/${sessionId}/modul/${moduleId}/vidio/${video.id}`} className="ms-2 ms-sm-3 mt-1 mt-sm-0 d-flex align-items-center">
                              <h6 className="mb-0">{video.title}</h6>
                            </Link>
                          </div>
                          <Link to={`/studi-ku/${subjectId}/pertemuan/${sessionId}/modul/${moduleId}/vidio/${video.id}`} className="btn btn-sm btn-success mb-0">
                            <i className='fa fa-eye me-2'></i>Lihat
                          </Link>
                        </div>
                        <hr />
                      </>)}
                    </div>
                    <div className="col-12">
                      <h5 className="mb-4">List Dokumen</h5>
                      {currentModule.documents.length === 0 && <>
                        <div className="alert alert-info">
                          Sepertinya belum ada dokumen yang ditambahkan pada modul ini.
                        </div>
                      </>}
                      {currentModule.documents.map(document => <>
                        <div className="d-sm-flex justify-content-sm-between align-items-center">
                          <div className="d-flex">
                            <Link to={`/studi-ku/${subjectId}/pertemuan/${sessionId}/modul/${moduleId}/dokumen/${document.id}`} className="btn btn-light btn-round mb-0">
                              <i className="fas fa-solid fa-file"></i>
                            </Link>
                            <Link to={`/studi-ku/${subjectId}/pertemuan/${sessionId}/modul/${moduleId}/dokumen/${document.id}`} className="ms-2 ms-sm-3 mt-1 mt-sm-0 d-flex align-items-center">
                              <h6 className="mb-0">{document.content}</h6>
                            </Link>
                          </div>
                          <Link to={`/studi-ku/${subjectId}/pertemuan/${sessionId}/modul/${moduleId}/dokumen/${document.id}`} className="btn btn-sm btn-success mb-0">
                            <i className='fa fa-eye me-2'></i>Lihat
                          </Link>
                        </div>
                        <hr />
                      </>)}
                    </div>
                    {currentModule.documents.length !== 1 && currentModule.videos.length !== 1 && <>
                      {!currentModule?.date_submitted ? <>
                        <div className="col-12 text-end">
                          <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#doneModule" onClick={() => setTextDoneModule("")}>
                            <i className="fas fa-check-circle me-1"></i> Selesaikan Modul
                          </button>
                        </div>
                      </> : <>
                        <div className="col-12 text-end">
                          <span className='badge bg-dark me-3'>Terakhir dikirim pada {new Date(currentModule.date_submitted.replace(' ', 'T')).toLocaleString('en-US')}</span>
                          <button type="button" className="btn btn-warning" data-bs-toggle="modal" data-bs-target="#doneModule" onClick={() => setTextDoneModule(textDoneModule)}>
                            <i className="fas fa-edit me-1"></i> Selesaikan Modul
                          </button>
                        </div>
                      </>}
                    </>}
                  </div>
                </div>
              </>)}
            </div>
          </div>
        </section>
      </>}
    </main>
    <Footer />
    <div className="modal fade" id="doneModule" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex={"-1"} aria-labelledby="doneModuleLabel" aria-hidden="true">
      <div className="modal-dialog modal-lg">
        <div className="modal-content">
          <form onSubmit={submitFinishModule}>
            <div className="modal-header bg-dark">
              <h5 className="modal-title text-white fs-5" id="doneModuleLabel">Apa pelajaran yang kamu dapat dari modul ini?</h5>
              <button type="button" className="btn btn-sm btn-light mb-0" data-bs-dismiss="modal" aria-label="Close">
                <i className="bi bi-x-lg"></i>
              </button>
            </div>
            <div className="modal-body">
              <div className="row">
                <div className="col-12">
                  <textarea className="form-control" rows="3" placeholder='Tulis materi yang kamu dapat di sini ...' value={textDoneModule} onChange={(e) => setTextDoneModule(e.target.value)} />
                  <div className="form-text">Materi kamu akan di-review oleh dosen atau pembimbing kamu. Pastikan kamu mengisi dengan sesuai!</div>
                </div>
              </div>
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-danger-soft my-0" data-bs-dismiss="modal">Batal</button>
              <button type="submit" className="btn btn-success my-0" data-bs-dismiss="modal">Kirim</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </>
}

export default ModuleDetail;