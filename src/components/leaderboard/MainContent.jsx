import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import useEffectOnce from '../../helpers/useEffectOnce';

import { getLeaderboardGlobal } from '../../features/leaderboard/leaderboardSlice';

const MainContent = () => {
  const [leaderboardList, setLeaderboardList] = useState([]);
  const dispatch = useDispatch();

  const { data } = useSelector(
    (state) => state.leaderboard
  );

  useEffectOnce(() => {
    dispatch(getLeaderboardGlobal());
  });

  useEffect(() => {
    if (Object.values(data).length !== 0)
      setLeaderboardList(data.leaderboard_global.data);
  }, [data]);

  return <>
    <section>
      <div className="container">
        <div className="lead text-center mb-3">Daftar Nama Mahasiswa dengan <strong>nilai terbaik secara global</strong> (akumulasi dari setiap mata kuliah).</div>
        <div className="card card-body bg-transparent pb-0 border py-4">
          <div className="table-responsive border-0 mb-4">
            <table className="table table-dark-gray align-middle p-4 mb-0 table-hover">
              <thead>
                <tr>
                  <th className='border-0 rounded-start text-center'>#</th>
                  <th className='border-0'>Nama Mahasiswa</th>
                  <th className='border-0 rounded-end text-center'>Skor</th>
                </tr>
              </thead>
              <tbody>
                {leaderboardList.length === 0 ? <>
                  <td colSpan={3}>
                    <div className="alert alert-info text-center">...</div>
                  </td>
                </> : <>
                  {leaderboardList.map((data, index) => <>
                    <tr key={index}>
                      <td className='text-center h4'>
                        {index == 0 ? "🥇" :
                          index == 1 ? "🥈" :
                            index == 2 ? "🥉" : index + 1}
                      </td>
                      <td>
                        <div className="avatar mb-2 mb-md-0 me-3 border-2">
                          <img loading="lazy" src={data.User.display_picture_link ? data.User.display_picture_link : "/assets/images/avatar/empty-display-picture.png"} className="avatar-img rounded-circle shadow" alt={data.User.full_name} />
                        </div>
                        <strong>{data.User.full_name}</strong>
                      </td>
                      <td className='text-center'>{index < 3 ? <strong>{data.final_score}</strong> : data.final_score}</td>
                    </tr>
                  </>)}
                </>}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  </>
}

export default MainContent;