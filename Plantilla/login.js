const handleLogin = async () => {
  const token = document.getElementById('token').value;
  const END_POINT = 'https://coupons-hwhz.onrender.com/api/auth/login';
  const payload = {
    code: Number(token),
  };
  const result = await fetch(END_POINT, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(payload),
  });

  const finalResponse = await result.json();

  if (finalResponse.token) {
    sessionStorage.setItem('userToken', finalResponse.token);
    location.href = 'index.html';
  } else {
    alert(finalResponse.message)
  }
};

const handleForm = (e) => {
  e.preventDefault();
  handleLogin();
};

const form = document.getElementById('form');
form.addEventListener('submit', handleForm);
