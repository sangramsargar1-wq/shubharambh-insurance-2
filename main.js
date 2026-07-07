// Shubharambh Insurance — lead form handler
// Sends the lead form details as a pre-filled WhatsApp message.

document.addEventListener('DOMContentLoaded', function () {
  var form = document.getElementById('leadForm');
  if (!form) return;

  form.addEventListener('submit', function (e) {
    e.preventDefault();

    var name = document.getElementById('name').value.trim();
    var phone = document.getElementById('phone').value.trim();
    var planType = document.getElementById('planType').value;
    var city = document.getElementById('city').value.trim();

    var msg = 'Hi, I\'m ' + name + ' (' + phone + ')' +
      (city ? ' from ' + city : '') +
      '. I\'m interested in ' + planType + '.';

    var whatsappNumber = '917820853508'; // change to your WhatsApp business number
    var url = 'https://wa.me/' + whatsappNumber + '?text=' + encodeURIComponent(msg);

    window.open(url, '_blank');
  });
});
