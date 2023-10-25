import axios from './axios'

const eventMap = {
  Workout: 'workout',
  Meeting: 'meeting',
  Party: 'party',
  Dinner: 'formal',
  Swimming: 'workout',
  Interview: 'meeting'
}

export const getClothByTypeEvent = async (type, event) => {
  try {
    // make type and evnnt to lower case
    const response = await axios.get(
      `/clothes/type/${type.toLowerCase()}/activity/${eventMap[event]}`
    )
    return response.data.data
  } catch (error) {
    console.error('Error:', error)
    return []
  }
}
