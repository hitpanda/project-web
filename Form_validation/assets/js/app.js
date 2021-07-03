const $ = document.querySelector.bind(document)
const $$ = document.querySelectorAll.bind(document)

function Validator(options) {
   var selectorRules = {}

   // validate function
   function validate(inputElement, rule) {
      var errorElement = inputElement.parentElement.querySelector(options.errorSelector)
      var errorMessage

      // Lấy ra các rules của selector
      var rules = selectorRules[rule.selector]

      for (var i = 0; i < rules.length; ++i) {
         errorMessage = rules[i](inputElement.value)
         if (errorMessage) break
      }

      if (errorMessage) {
         errorElement.innerText = errorMessage
         inputElement.parentElement.classList.add('invalid')
      } else {
         errorElement.innerText = ''
         inputElement.parentElement.classList.remove('invalid')
      }
   }

   // Lấy form cần xử lý
   var formElement = $(options.form)
   if (formElement) {
      options.rules.forEach(function(rule) {
         // Lưu lại các rules cho mỗi input
         if (Array.isArray(selectorRules[rule.selector])) {
            selectorRules[rule.selector].push(rule.test)
         } else {
            selectorRules[rule.selector] = [rule.test]
         }

         var inputElement = formElement.querySelector(rule.selector)
         if (inputElement) {
            // Xử lý khi user blur ra ngoài
            inputElement.onblur = function() {
               validate(inputElement, rule)
            }

            // Xử lý khi user nhập
            inputElement.oninput = function() {
               var errorElement = inputElement.parentElement.querySelector(options.errorSelector)
               errorElement.innerText = ''
               inputElement.parentElement.classList.remove('invalid')
            }
         }
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
         return value.trim() ? undefined : message || 'Vui lòng nhập trường này'
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