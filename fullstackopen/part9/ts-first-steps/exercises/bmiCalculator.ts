interface BmiValues {
  value1: number
  value2: number
}

const options = {
  underWeight: 'Underweight = <18.5',
  normal: 'Normal weight = 18.5–24.9',
  overWeight: 'Overweight = 25–29.9',
  obesity: 'Obesity = BMI of 30 or greater',
}

const parseArgs = (args: Array<string>): BmiValues => {
  if (args.length < 4) throw new Error('Not enough arguments')
  if (args.length > 4) throw new Error('Too many arguments')

  if (!isNaN(Number(args[2])) && !isNaN(Number(args[3]))) {
    return {
      value1: Number(args[3]),
      value2: Number(args[2]),
    }
  } else {
    throw new Error('Provided values were not numbers!')
  }
}

export const bmiCalculator = (a: number, b: number) => {
  const bmiResult = a / Math.pow(b / 100, 2)
  let result = {}
  if (bmiResult < 18.5) {
    console.log(bmiResult, ` wich is ${options.underWeight}`)
    result = {
      height: b,
      weight: a,
      bmiResult,
      option: ` wich is ${options.underWeight}`,
    }
    return result
  }
  if (bmiResult > 18.5 && bmiResult < 24.9) {
    console.log(bmiResult, ` wich is ${options.normal}`)
    result = {
      height: b,
      weight: a,
      bmiResult: bmiResult,
      option: ` wich is ${options.normal}`,
    }
    return result
  }
  if (bmiResult > 25 && bmiResult < 29.9) {
    console.log(bmiResult, ` wich is ${options.overWeight}`)
    result = {
      height: b,
      weight: a,
      bmiResult: bmiResult,
      option: ` wich is ${options.overWeight}`,
    }
    return result
  }
  if (bmiResult > 30) {
    console.log(bmiResult, ` wich is ${options.obesity}`)
    result = {
      height: b,
      weight: a,
      bmiResult: bmiResult,
      option: ` wich is ${options.obesity}`,
    }
    return result
  }
}

try {
  const { value1, value2 } = parseArgs(process.argv)
  bmiCalculator(value1, value2)
} catch (e) {
  const result = (e as Error).message
  console.log('Error, something bad happened, message: ', result)
}
