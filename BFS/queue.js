const getQueue = () => {
  let queue = []
  let length = 0

  return {
    push: (value) => {
      queue = [...queue, value]
    },

    shift: () => {
      queue = [...queue.slice(1)]
    },

    isEmpty: () => {
      return queue.length === 0 ? true : false
    },

    print: () => {
      console.log(queue)
    },
  }
}

export default getQueue
