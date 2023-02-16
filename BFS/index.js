import createQueue from "./queue.js"
import createFriend from "./friend.js"

const findFriendByName = (friend, name) => {
  const queue = createQueue()
  queue.push(friend)

  while (!queue.isEmpty()) {
    const currentFriend = queue.getFirst()
    if (currentFriend.getName() === name) {
      return true
    } else {
      queue.shift()
      currentFriend.getFriends().map((f) => queue.push(f))
    }
  }

  return false
}

const friend4 = createFriend("friend4")
const friend5 = createFriend("friend5")
const friend6 = createFriend("friend6")

const friend3 = createFriend("friend3", friend5, friend6)
const friend2 = createFriend("friend2", friend4)

const friend1 = createFriend("friend1", friend2, friend3)

console.log(findFriendByName(friend1, "friend5"))
