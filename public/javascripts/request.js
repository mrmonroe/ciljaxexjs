$(document).ready(function () {
  $('#newRequestSubmit').submit(function (e) {
    e.preventDefault();

    const form = $(this);

    $.ajax({
      type: 'POST',
      contentType: 'application/json',
      url: '/api/v1/requests/new',
      data: postObj,
      success: (status) => console.log('status', status)
    });
  });
});

function sendPost(postObj) {
  $.ajax({
    type: 'POST',
    contentType: 'application/javascript',
    url: '/api/v1/requests/new',
    data: JSON.stringify(postObj),
    success: (status) => console.log('status', status)
  });
  console.log('inside then statement');
}

