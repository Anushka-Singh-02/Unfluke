function Navbar() {
    return(
        <div class="nav">
        <nav class="navbar navbar-expand-lg navbar-light bg-light mynav" >
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

        <a class="nav-link" href="#">Historical Chart </a>
      
      
        <a class="nav-link" href="#">Scanners</a>
      
      
      
        <a class="nav-link disabled" href="#">Alert</a>
      
      
        <a class="nav-link disabled" href="#">Basic Backtest</a>
      
  
    

</nav></div>
    );
}

export default Navbar;