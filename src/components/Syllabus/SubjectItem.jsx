import React from 'react'

const SubjectItem = ({ subject }) => {
  return <>
    <div class="d-flex justify-content-between">
      <div class="d-flex align-items-center w-100" >
        <span
          class="bg-danger text-white btn-round btn-sm mb-0">
          <i class="fas fa-book me-0"></i>
        </span>
        <span
          class="text-truncate ms-3 mb-0 h6 fw-light w-100px w-sm-200px w-md-500px">
          {subject.subject.name}
        </span>
        <div
          class="mb-0 h6 fw-light text-start ps-5">
          {subject.subject.level === "Basic" && <span style={{ width: "20px" }} className='text-success'>
            <i class="fas fa-signal fa-fw me-3 p-1"></i>
            Basic
          </span>}
          {subject.subject.level === "Intermediate" && <span style={{ width: "20px" }} className='text-primary'>
            <i class="fas fa-signal fa-fw me-3 p-1"></i>
            Intermediate
          </span>}
          {subject.subject.level === "Advanced" && <span style={{ width: "20px" }} className='text-danger'>
            <i class="fas fa-signal fa-fw me-3 p-1"></i>
            Advanced
          </span>}
        </div>
        <button className='btn ms-5 mt-1 btn-info btn-round'>+</button>
      </div>
    </div>
  </>
}

export default SubjectItem;