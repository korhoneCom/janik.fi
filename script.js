/* JaniK — pieni käyttöliittymäkoodi */
(function () {
  'use strict';

  if (document.getElementById('vuosi')) {
    document.getElementById('vuosi').textContent = String(new Date().getFullYear());
  }

  /* Mobiilivalikko */
  var toggle = document.querySelector('.nav-toggle');
  var nav = document.getElementById('nav');
  if (toggle && nav) {
    toggle.addEventListener('click', function () {
      var open = nav.getAttribute('data-open') === 'true';
      nav.setAttribute('data-open', String(!open));
      toggle.setAttribute('aria-expanded', String(!open));
    });
    nav.addEventListener('click', function (e) {
      if (e.target.closest('a')) {
        nav.setAttribute('data-open', 'false');
        toggle.setAttribute('aria-expanded', 'false');
      }
    });
  }

  /* Domainpäätteiden hinnasto */
  var DOMAINIT = [
    ['.fi', '14 €'], ['.com', '15 €'], ['.net', '16 €'], ['.org', '11 €'],
    ['.eu', '9 €'], ['.co.uk / .uk', '9 €'], ['.de', '8 €'], ['.fr', '9 €'],
    ['.it', '8 €'], ['.nl', '9 €'], ['.se', '11 €'], ['.info', '9 €'],
    ['.biz', '22 €'], ['.me', '12 €'], ['.pro', '8 €'], ['.io', '51 €'],
    ['.ai', '78 €'],
  ];
  var tb = document.getElementById('domain-tbody');
  if (tb) {
    var rows = [];
    for (var i = 0; i < DOMAINIT.length; i += 2) {
      var a = DOMAINIT[i];
      var b = DOMAINIT[i + 1];
      rows.push('<tr>' +
        '<td>' + a[0] + '</td><td class="hinta">' + a[1] + '</td>' +
        (b ? '<td>' + b[0] + '</td><td class="hinta">' + b[1] + '</td>'
           : '<td></td><td></td>') +
        '</tr>');
    }
    tb.innerHTML = rows.join('');
  }

  /* Yhteydenottolomake */
  var form = document.getElementById('yhteydenotto');
  var note = document.getElementById('form-note');
  if (form && note) {
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      note.className = 'form-note';
      var nimi = form.elements.nimi.value.trim();
      var yhteys = form.elements.yhteys.value.trim();
      if (!nimi || !yhteys) {
        note.textContent = 'Täytä nimi ja yhteystieto, niin hoidan loput.';
        note.classList.add('err');
        return;
      }
      note.textContent = 'Kiitos ' + nimi + '! Viestisi on valmis lähetettäväksi — vastaan ' +
        'tyypillisesti muutaman arkipäivän kuluessa.';
      note.classList.add('ok');
      form.reset();
    });
  }
})();
