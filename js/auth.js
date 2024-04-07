const URL = location.origin;
const isAuth = () => {
  const token = sessionStorage.getItem('userToken');
  if (!token) {
    location.href = `${URL}/pages/login.html`;
  } else {
    location.href = `${URL}/index.html`
  }
}

isAuth();
