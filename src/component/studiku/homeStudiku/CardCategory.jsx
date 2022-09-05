import React from "react";

const CardCategory = () => {
  return (
    <form>
      <div className="card card-body shadow p-4 mb-4 card-category">
        <h4 className="mb-4">Category</h4>
        <div className="row">
          <div className="col-xxl-6">
            <div className="form-check">
              <input
                className="form-check-input"
                type="checkbox"
                value=""
                id="flexCheckDefault9"
              />
              <label className="form-check-label" htmlFor="flexCheckDefault9">
                All
              </label>
            </div>
            <div className="form-check">
              <input
                className="form-check-input"
                type="checkbox"
                value=""
                id="flexCheckDefault10"
              />
              <label className="form-check-label" htmlFor="flexCheckDefault10">
                Development
              </label>
            </div>
            <div className="form-check">
              <input
                className="form-check-input"
                type="checkbox"
                value=""
                id="flexCheckDefault11"
              />
              <label className="form-check-label" htmlFor="flexCheckDefault11">
                Design
              </label>
            </div>
            <div className="form-check">
              <input
                className="form-check-input"
                type="checkbox"
                value=""
                id="flexCheckDefault12"
              />
              <label className="form-check-label" htmlFor="flexCheckDefault12">
                Accounting
              </label>
            </div>
            <div className="form-check">
              <input
                className="form-check-input"
                type="checkbox"
                value=""
                id="flexCheckDefault17"
              />
              <label className="form-check-label" htmlFor="flexCheckDefault17">
                Translation
              </label>
            </div>
          </div>

          <div className="col-xxl-6">
            <div className="form-check">
              <input
                className="form-check-input"
                type="checkbox"
                value=""
                id="flexCheckDefault13"
              />
              <label className="form-check-label" htmlFor="flexCheckDefault13">
                Finance
              </label>
            </div>
            <div className="form-check">
              <input
                className="form-check-input"
                type="checkbox"
                value=""
                id="flexCheckDefault14"
              />
              <label className="form-check-label" htmlFor="flexCheckDefault14">
                Legal
              </label>
            </div>
            <div className="form-check">
              <input
                className="form-check-input"
                type="checkbox"
                value=""
                id="flexCheckDefault15"
              />
              <label className="form-check-label" htmlFor="flexCheckDefault15">
                Photography
              </label>
            </div>
            <div className="form-check">
              <input
                className="form-check-input"
                type="checkbox"
                value=""
                id="flexCheckDefault16"
              />
              <label className="form-check-label" htmlFor="flexCheckDefault16">
                Writing
              </label>
            </div>
            <div className="form-check">
              <input
                className="form-check-input"
                type="checkbox"
                value=""
                id="flexCheckDefault18"
              />
              <label className="form-check-label" htmlFor="flexCheckDefault18">
                Marketing
              </label>
            </div>
          </div>
        </div>
      </div>
    </form>
  );
};

export default CardCategory;
