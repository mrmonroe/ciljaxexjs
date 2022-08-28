function handleFormButtons() {
  switchFormSection(
    '.buttons.firstInfo',
    'button.is-success',
    '.firstInfo',
    '.secondInfo',
    'next'
  );
}

function switchFormSection(
  sectionClass,
  buttonClass,
  sectionHide,
  sectionShow,
  action = 'next'
) {
  const next = $(sectionClass).find(buttonClass);
  next.click(function () {
    switch (expression) {
      case 'next':
        $(sectionHide).hide();
        $(sectionShow).show();

        break;

      case 'back':
        $(sectionShow).hide();
        $(sectionHide).show();

        break;

      case 'clear':
        throw new Error(`${action} action not yet implemented`);

        break;

      default:
        console.log('doing nothing');
    }
  });
}

$(document).ready(function () {
  $('.secondInfo').hide();
  $('.thirdInfo').hide();
  $('.adminInfo').hide();
});

$(document).ready(function () {
  handleFormButton('next');
  handleFormButton('back');
  handleFormButton('clear');
});
