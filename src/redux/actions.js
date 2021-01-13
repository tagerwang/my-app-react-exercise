export const change_count = "changeCount"
export const add_count = "addCount"

export function changeCount( data ){
  return {
    type: change_count,
    data: data
  }
}

export function addCount( data ){
  return {
    type: add_count,
    data: data
  }
}