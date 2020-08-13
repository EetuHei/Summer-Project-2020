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

const bmiCalculator = (a: number, b: number, printText: string) => {
  let bmiResult = a / Math.pow(b / 100, 2)

  if (bmiResult < 18.5)
    return console.log(printText, bmiResult, ` wich is ${options.underWeight}`)
  if (bmiResult > 18.5 && bmiResult < 24.9)
    return console.log(printText, bmiResult, ` wich is ${options.normal}`)
  if (bmiResult > 25 && bmiResult < 29.9)
    return console.log(printText, bmiResult, ` wich is ${options.overWeight}`)
  if (bmiResult > 30)
    return console.log(printText, bmiResult, ` wich is ${options.obesity}`)
}

try {
  const { value1, value2 } = parseArgs(process.argv)
  bmiCalculator(value1, value2, `Your BMI is: `)
} catch (e) {
  console.log('Error, something bad happened, message: ', e.message)
}
