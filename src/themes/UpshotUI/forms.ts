import { Theme } from 'theme-ui'
import inputs from './forms.inputs'
import switches from './forms.switch'
import checkbox from './forms.checkbox'
import radio from './forms.radio'
import labels from './forms.labels'

const forms = {
  checkbox,
  inputs,
  radio,
  switch: switches,
  ...labels
}

export default forms
