const Navbar = () => {
  return (
    <header>
      <ul class="nav">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="/">
            Home
          </a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="/about">
            About
          </a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="/travel">
            Travel
          </a>
        </li>
      </ul>
    </header>
  );
};

export default Navbar;
