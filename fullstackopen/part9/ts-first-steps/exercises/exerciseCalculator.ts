interface ExerciseResult {
  periodLength: number
  trainingDays: number
  success: boolean
  rating: number
  ratingDesc: string
  target: number
  average: number
}

interface parseExerciseArgs {
  target: number
  exerciseHours: number[]
}

const parser = (args: Array<string>): parseExerciseArgs => {
  if (args.length < 4) throw new Error('Not enough arguments')

  const target = Number(args[2])
  const exerciseHours = args.slice(3).map((hours) => Number(hours))
  const validateExerciseHours = exerciseHours.some(isNaN)

  if (!isNaN(target) && !validateExerciseHours) {
    return {
      target,
      exerciseHours,
    }
  } else {
    throw new Error('Provided values were not numbers!')
  }
}

const exerciseCalc = (
  exerciseHours: number[],
  target: number
): ExerciseResult => {
  const periodLength = exerciseHours.length
  const trainingDays = exerciseHours.filter((hour) => hour > 0).length
  const average =
    exerciseHours.reduce((a, b) => a + b, 0) / exerciseHours.length
  const success = average >= target
  let rating
  let ratingDesc
  const percentRating = (average / target) * 100

  if (percentRating > 100) {
    rating = 3
    ratingDesc = 'Well done, you exerciced more than you planned!'
  } else if (percentRating >= 60 && percentRating < 100) {
    rating = 2
    ratingDesc = 'Not too bad but could be better'
  } else {
    rating = 1
    ratingDesc = "You didn't reach your target this week, try harder next week!"
  }

  return {
    periodLength,
    trainingDays,
    success,
    rating,
    ratingDesc,
    target,
    average,
  }
}

try {
  const { target, exerciseHours } = parser(process.argv)
  console.log(exerciseCalc(exerciseHours, target))
} catch (e) {
  const result = (e as Error).message
  console.log('Error, something bad happened, message: ', result)
}
