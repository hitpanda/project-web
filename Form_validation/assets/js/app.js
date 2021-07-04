const $ = document.querySelector.bind(document)
const $$ = document.querySelectorAll.bind(document)

function Validator(options) {
   var selectorRules = {}
   
   function getParent(element, selector) {
      while (element.parentElement) {
         if (element.parentElement.matches(selector)) {
            return element.parentElement
         }
         element = element.parentElement
      }
   }

   // validate function
   function validate(inputElement, rule) {
      var errorElement = getParent(inputElement, options.formGroupSelector).querySelector(options.errorSelector)
      var errorMessage

      // Lấy ra các rules của selector
      var rules = selectorRules[rule.selector]

      for (var i = 0; i < rules.length; ++i) {
         switch (inputElement.type) {
            case 'radio':
            case 'checkbox':
               errorMessage = rules[i](
                  formElement.querySelector(rule.selector + ':checked')
               )
               break
            default:
               errorMessage = rules[i](inputElement.value)
         }
         if (errorMessage) break
      }

      if (errorMessage) {
         errorElement.innerText = errorMessage
         getParent(inputElement, options.formGroupSelector).classList.add('invalid')
      } else {
         errorElement.innerText = ''
         getParent(inputElement, options.formGroupSelector).classList.remove('invalid')
      }

      return !errorMessage
   }

   // Lấy form cần xử lý
   var formElement = $(options.form)
   if (formElement) {
      // Khi submit form
      formElement.onsubmit = function(e) {
         e.preventDefault()

         var isFormValid = true

         // Lặp qua từng rules và validate
         options.rules.forEach(function(rule) {
            var inputElement = formElement.querySelector(rule.selector)
            var isValid = validate(inputElement, rule)
            if (!isValid) {
               isFormValid = false
            }
         })

         if (isFormValid) {
            // Submit với Javascript
            if (typeof options.onSubmit === 'function') {
               var enableInputs = formElement.querySelectorAll('[name]')

               var formValues = Array.from(enableInputs).reduce(function(values, input) {
                  switch (input.type) {
                     case 'radio':
                        values[input.value] = formElement.querySelector('input[name="' + input.name + '"]:checked').value
                        break
                     case 'checkbox':
                        if (!input.matches(':checked')) {
                           values[input.name] = ''
                           return values
                        }
                        if (!Array.isArray(values[input.name])) {
                              values[input.name] = []
                        }
                        values[input.name].push(input.value)
                        break
                     case 'file':
                        values[input.name] = input.files
                        break
                     default:
                        values[input.value] = input.value
                  }
                  
                  return values
               }, {})

               options.onSubmit(formValues)
            }
            // Submit với hành vi mặc đinh (HTML)
            else {
               formElement.submit()
            }
         }
      }

      // Lắng nghe xử lý sự kiện blur, input
      options.rules.forEach(function(rule) {
         // Lưu lại các rules cho mỗi input
         if (Array.isArray(selectorRules[rule.selector])) {
            selectorRules[rule.selector].push(rule.test)
         } else {
            selectorRules[rule.selector] = [rule.test]
         }

         var inputElements = formElement.querySelectorAll(rule.selector)

         Array.from(inputElements).forEach(function(inputElement) {
            // Xử lý khi user blur ra ngoài
            inputElement.onblur = function() {
               validate(inputElement, rule)
            }
   
            // Xử lý khi user nhập
            inputElement.oninput = function() {
               var errorElement = getParent(inputElement, options.formGroupSelector).querySelector(options.errorSelector)
               errorElement.innerText = ''
               getParent(inputElement, options.formGroupSelector).classList.remove('invalid')
            }
         })
      })
   }
}

// rules (Các nguyên tắc)
// 1. Khi có lỗi: trả về thông báo
// 2. Khi không có lỗi: không trả về gì (undefined)
Validator.isRequired = function(selector, message) {
   return {
      selector: selector,
      test: function(value) {
         return value ? undefined : message || 'Vui lòng nhập trường này'
      }
   }
}

Validator.isEmail = function(selector, message) {
   return {
      selector: selector,
      test: function(value) {
         var regex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
         
         return regex.test(value) ? undefined : message || 'Vui lòng nhập đúng email'
      }
   }
}

Validator.isPassword = function(selector, min, message) {
   return {
      selector: selector,
      test: function(value) {
         return value.length >= min ? undefined : message || `Mật khẩu tối thiểu ${min} kí tự`
      }
   }
}

Validator.isConfirmed = function(selector, getConfirmValue, message) {
   return {
      selector: selector,
      test: function(value) {
         return value === getConfirmValue() ? undefined : message || 'Giá trị nhập không chính xác'
      }
   }
}