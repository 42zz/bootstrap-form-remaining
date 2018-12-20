'use strict';

(function() {

  let nokori = document.getElementById('form_nokori');
  let total = document.getElementById('form_total');


  window.addEventListener('load', function() {
    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    let forms = document.getElementsByClassName('needs-validation');

    // Create an array for required inputs
    // Initialise total number
    let requiredfields = new Array();

    let fields = document.getElementsByClassName('is-required');
    for(let i=0;i<fields.length;i++) {
      if(fields[i].getAttribute('required') != null) {
        requiredfields.push(fields[i].name);
      }
    }

    let invalidfields = requiredfields;
    nokori.innerText =  total.innerText = requiredfields.length;

    // Loop over them and prevent submission
    let validation = Array.prototype.filter.call(forms, function(form) {
      form.addEventListener('change', function(event) {
        let targetForm =  event.target;
        let targetFormName = targetForm.name;
        let inTargetRequired = requiredfields.indexOf(targetFormName);
        let requiredForm = inTargetRequired != -1 ? fields[inTargetRequired] : false;
        let inTargetInvalid = invalidfields.indexOf(targetFormName);
        let invalidForm =  inTargetInvalid != -1;

        if (form.checkValidity() === false) {
          event.preventDefault();
          event.stopPropagation();
        }

      // If input required and its input was valid
      if(targetForm.required) {
        if(targetForm.validity.valid) {
          invalidfields.splice(inTargetInvalid, 1);
        } else {
          if(!invalidForm) invalidfields.push(targetFormName);
        }
      }
      nokori.innerText = invalidfields.length;

      let nokori_box = document.getElementById('nokori');
      if(invalidfields.length == 0) {
        nokori_box.style.backgroundColor = 'green';
      } else {
        nokori_box.style.backgroundColor = 'red';
      }
      }, false);
    });
  }, false);
})();
