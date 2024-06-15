function dashboard() {
  return (
    <>
      <div className="position-absolute top-0 start-0 w-100 p-2 bg-primary">
        <nav
          class="navbar bg-body-tertiary"
          style={{ backgroundColor: "#0F75BD" }}
        >
          <div class="container-fluid">
            <a class="navbar-brand">EAGL</a>
            <form class="d-flex" role="search">
              <input
                class="form-control me-2"
                type="search"
                placeholder="Search Volunteer by Name"
                aria-label="Search"
                style={{ width: "300px" }}
              />
              <button class="btn btn-outline-success" type="submit">
                Search
              </button>
            </form>
          </div>
        </nav>

        <div className="w-100 text-center p-3">
          <h1 style={{ color: "#FFFFFF" }}>Admin Control Panel</h1>
        </div>
      </div>

      <div
        className="d-flex justify-content-center align-items-center"
        style={{ height: "50vh" }}
      >
        <div class="card" style={{ height: "30vh", margin: "15px" }}>
          <div class="card-header">Featured</div>
          <div class="card-body">
            <h5 class="card-title" style={{ color: "#0F75BD" }}>
              Add Beneficiary
            </h5>
            <p class="card-text">
              Add a new beneficiary who will receive support from our
              organization.
            </p>
            <a
              href="#"
              class="btn btn-primary"
              style={{ backgroundColor: "#0F75BD" }}
            >
              Go somewhere
            </a>
          </div>
        </div>

        <div class="card" style={{ height: "30vh", margin: "15px" }}>
          <div class="card-header">Featured</div>
          <div class="card-body">
            <h5 class="card-title" style={{ color: "#0F75BD" }}>
              Add Volunteer
            </h5>
            <p class="card-text">
              Register a new volunteer to join our team and support our mission.
            </p>
            <a
              href="#"
              class="btn btn-primary"
              style={{ backgroundColor: "#0F75BD" }}
            >
              Go somewhere
            </a>
          </div>
        </div>

        <div class="card" style={{ height: "30vh", margin: "15px" }}>
          <div class="card-header">Featured</div>
          <div class="card-body">
            <h5 class="card-title" style={{ color: "#0F75BD" }}>
              Track Volunteer
            </h5>
            <p class="card-text">
              Monitor volunteer activities, hours, and contributions.
            </p>
            <a
              href="#"
              class="btn btn-primary"
              style={{ backgroundColor: "#0F75BD" }}
            >
              Go somewhere
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export default dashboard;
