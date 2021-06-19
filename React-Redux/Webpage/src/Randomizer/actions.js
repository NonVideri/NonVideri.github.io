export const toggleMode = (mode) => ({ type: 'TOGGLE_MODE', payload: mode })

export const submit = (input) => ({
    type: 'SUBMIT',
    payload: {
      list: input.randomized,
      counter: input.counter,
      max: input.max
    }
  })