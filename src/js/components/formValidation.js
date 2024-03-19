import JustValidate from 'just-validate'

const sdoRegForm = document.querySelector('.reg-sdo-page .validation-form')

if (sdoRegForm) {

  const validator = new JustValidate(sdoRegForm)
  validator
    .addField('input[name="login"]', [
      {
        rule: 'required',
        errorMessage: 'Это поле нужно заполнить'
      },
    ])
    .addField('input[name="password"]', [
      {
        rule: 'required',
        errorMessage: 'Это поле нужно заполнить'
      }
    ])
    .addField('input[name="password_repeat"]', [
      {
        rule: 'required',
        errorMessage: 'Это поле нужно заполнить'
      },
      {
        validator: (value, fields) => {
          const passField = Object.values(fields).find(field => field.elem.name === 'password')

          if (passField && passField.elem) {
            const repeatPasswordValue = passField.elem.value
            return value === repeatPasswordValue
          }

          return true
        },
        errorMessage: 'Пароли должны совпадать',
      }
    ])
    .onSuccess((e) => {
      e.currentTarget.submit()
    })
}

const sdoAuthForm = document.querySelector('.auth-sdo-page .validation-form')

if (sdoAuthForm) {

  const validator = new JustValidate(sdoAuthForm)
  validator
    .addField('input[name="login"]', [
      {
        rule: 'required',
        errorMessage: 'Это поле нужно заполнить'
      },
    ])
    .addField('input[name="password"]', [
      {
        rule: 'required',
        errorMessage: 'Это поле нужно заполнить'
      }
    ])
    .onSuccess((e) => {
      e.currentTarget.submit()
    })
}

const sdoPassRecForm = document.querySelector('.pass-recovery-sdo-page .validation-form')

if (sdoPassRecForm) {

  const validator = new JustValidate(sdoPassRecForm)
  validator
    .addField('input[name="login"]', [
      {
        rule: 'required',
        errorMessage: 'Это поле нужно заполнить'
      },
    ])

    .onSuccess((e) => {
      e.currentTarget.submit()
    })
}

const homePassRecForm = document.querySelector('.home-pass-recovery-page .validation-form')

if (homePassRecForm) {

  const validator = new JustValidate(homePassRecForm)
  validator
    .addField('input[name="login"]', [
      {
        rule: 'required',
        errorMessage: 'Это поле нужно заполнить'
      },
    ])

    .onSuccess((e) => {
      e.currentTarget.submit()
    })
}

const homeAuthForm = document.querySelector('.home-auth-page .validation-form')

if (homeAuthForm) {

  const validator = new JustValidate(homeAuthForm)
  validator
    .addField('input[name="login"]', [
      {
        rule: 'required',
        errorMessage: 'Это поле нужно заполнить'
      },
    ])
    .addField('input[name="password"]', [
      {
        rule: 'required',
        errorMessage: 'Это поле нужно заполнить'
      }
    ])
    .onSuccess((e) => {
      e.currentTarget.submit()
    })
}
