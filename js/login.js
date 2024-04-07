const handleLogin = async () => {
  const token = document.getElementById('token').value;
  const payload = {
    code: Number(token),
  };
  const result = await request.post(`/auth/login`,{body:payload});

  if (result.token) {
    sessionStorage.setItem('userToken', result.token);
    location.href = '../index.html';
  } else {
    alert(result.message)
  }
};

const handleForm = (e) => {
  e.preventDefault();
  handleLogin();
};

const form = document.getElementById('form');
form.addEventListener('submit', handleForm);
