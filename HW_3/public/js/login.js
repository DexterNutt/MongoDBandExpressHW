const login = async (email, password) => {
  try {
    const res = await axios({
      method: 'POST',
      url: '/api/v1/login',
      data: {
        email,
        password,
      },
    });
    console.log(res);
    windows.location.href = '/viewMovies';
  } catch (error) {
    console.log(error);
  }
};

document.querySelector('form').addEventListener('submit', (e) => {
  e.preventDefault();
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;

  login(email, password);
});