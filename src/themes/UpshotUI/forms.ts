import inputs from './forms.inputs'
import switches from './forms.switch'
import checkbox from './forms.checkbox'
import radio from './forms.radio'
import labels from './forms.labels'
import textarea from './forms.textarea'

const forms = {
  checkbox,
  inputs,
  radio,
  switch: switches,
  ...labels,
  textarea,
}

export default forms
