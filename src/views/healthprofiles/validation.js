document.addEventListener('DOMContentLoaded', function() {
    const form = document.querySelector('form');
    
  
    form.addEventListener('submit', function(e) {
        const PERMITTED_FIELDS = [
            'birth',
            'level',
            'gender',
            'height',
            'weight',
            'fat_percentage',
            'emergency_number',
          ];
      let isValid = true;
  
      requiredFieldsIds.forEach((fieldId) => {
        const element = document.getElementById(fieldId);
        const errorSibling = element.parentNode.querySelector('.error');
        if (!element.value) { 
          isValid = false;
          element.setAttribute('class', 'invalid');
          errorSibling.textContent = 'Este campo es requerido';
        } else {
          element.removeAttribute('class');
          errorSibling.textContent = '';
        }
      });
  
      if (!isValid) {
        e.preventDefault();
      }
    });
  });