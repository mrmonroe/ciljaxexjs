$(document).ready(function () {
  $('.loginSubmit').click(function () {
    console.log('sending login info');
    const email = $('#email').val();
    const password = $('#password').val();

    $.post(
      '/api/auth/login',
      {
        email: email,
        password: password
      },
      function (data, status) {
        console.log('data', data);
        console.log('status', status);
      }
    );
  });
});

