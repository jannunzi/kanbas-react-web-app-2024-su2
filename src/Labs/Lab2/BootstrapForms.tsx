export default function BootstrapForms() {
  return (
    <div id="wd-css-styling-forms">
      <h2>Forms</h2>
      <div className="mb-3">
        <label htmlFor="input1" className="form-label">
          Email address
        </label>
        <input
          type="email"
          className="form-control"
          id="input1"
          placeholder="name@example.com"
        />
      </div>
      <div className="mb-3">
        <label htmlFor="textarea1" className="form-label">
          Example textarea
        </label>
        <textarea className="form-control" id="textarea1" rows={3}></textarea>
      </div>

      <div id="wd-css-responsive-forms-1">
        <h3>Responsive forms</h3>
        <div className="mb-3 row">
          <label htmlFor="email1" className="col-sm-2 col-form-label">
            Email
          </label>
          <div className="col-sm-10">
            <input
              type="text"
              className="form-control"
              id="email1"
              value="email@example.com"
            />
          </div>
        </div>
        <div className="mb-3 row">
          <label htmlFor="password1" className="col-sm-2 col-form-label">
            Password
          </label>
          <div className="col-sm-10">
            <input type="password" id="password1" className="form-control" />
          </div>
        </div>
        <div className="mb-3 row">
          <label htmlFor="textarea2" className="col-sm-2 col-form-label">
            Bio
          </label>
          <div className="col-sm-10">
            <textarea
              className="form-control"
              id="textarea2"
              rows={3}
            ></textarea>
          </div>
        </div>
      </div>
    </div>
  );
}
