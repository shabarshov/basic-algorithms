const createFriend = (name = "no name", ...friends) => {
  let _name = name
  let _friends = [...friends]

  return {
    addNewFriend: (newFriend) => {
      _friends = [..._friends, newFriend]
    },

    getName: () => {
      return _name
    },

    getFriends: () => {
      return _friends
    },
  }
}

export default createFriend
