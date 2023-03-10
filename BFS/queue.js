const createQueue = () => {
  let queue = []

  return {
    push: (value) => {
      queue = [...queue, value]
    },

    shift: () => {
      queue = [...queue.slice(1)]
    },

    getFirst: () => {
      return queue[0]
    },

    isEmpty: () => {
      return queue.length === 0 ? true : false
    },

    getValues: () => {
      return queue
    },
  }
}

export default createQueue
