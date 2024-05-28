function Navbar() {
    return(
        <div class="nav">
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
  <a class="navbar-brand" href="#">Leaderboard</a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <li class="nav-item dropdown">
        <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
         Historical Trading
        </a>
        <div class="dropdown-menu" aria-labelledby="navbarDropdown">
          <a class="dropdown-item" href="#">Action</a>
          <a class="dropdown-item" href="#">Another action</a>
          <div class="dropdown-divider"></div>
          <a class="dropdown-item" href="#">Something else here</a>
        </div>
      </li>

  <div class="collapse navbar-collapse" id="navbarSupportedContent">
    <ul class="navbar-nav mr-auto">
      <li class="nav-item active">
        <a class="nav-link" href="#">Historical Chart </a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">Scanners</a>
      </li>
      
      <li class="nav-item">
        <a class="nav-link disabled" href="#">Alert</a>
      </li>
      <li class="nav-item">
        <a class="nav-link disabled" href="#">Basic Backtest</a>
      </li>
    </ul>
    
  </div>
</nav></div>
    );
}

export default Navbar;