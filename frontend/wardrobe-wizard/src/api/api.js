import axios from './axios'

const eventMap = {
  Workout: 'workout',
  'Formal Events': 'formal',
  Meeting: 'meeting',
  Outdoor: 'workout',
  'Night Out': 'night-out',
  Causal: 'causal',
  null: 'null'
}

const typeMap = {
  Top: 'top',
  Bottom: 'bottom',
  'Full Body': 'full-body',
  Shoes: 'shoes',
  Accessories: 'accessories',
  All: 'all',
  null: 'null'
}

export const getClothByTypeEvent = async (type, event) => {
  try {
    // make type and evnnt to lower case
    const response = await axios.get(
      `/clothes/type/${typeMap[type]}/activity/${eventMap[event]}`
    )
    return response.data.data
  } catch (error) {
    console.error('Error:', error)
    return []
  }
}
