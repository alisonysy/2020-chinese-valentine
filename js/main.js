(function(){
  function initCountdown(){
    let timespan = countdown(new Date(2020, 4, 23), null, countdown.YEARS | countdown.MONTHS | countdown.DAYS, 4).toString();
    const el = document.getElementById('countdown');
    el.append(timespan);
  };
  initCountdown();
  function initPopup(){
    $.magnificPopup.open({
      removalDelay: 300,
      items: {
        src: '#letter'
      },
      type: 'inline',
      mainClass: 'mfp-fade',
      showCloseBtn: true,
      closeBtnInside: true,
      callbacks: {
        afterClose: function() {
          console.log('Popup is completely closed',this);

        },
      }
    });
  };
  $(document).ready(function(){
    $('.avatars').on('click', swapClass);
  });

  function swapClass() {
    const alisonAva = document.getElementById('alison')
    const willAva = document.getElementById('will')
    alisonAva.classList.toggle('marriage')
    willAva.classList.toggle('marriage')
  }
})();