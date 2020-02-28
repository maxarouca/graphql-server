export default function userIndex(users, filter) {
  if (!filter) return -1

  const { id, email } = filter

  if (id) {
    const i = users.findIndex((u) => u.id === id)

    return i
  }
  if (email) {
    const i = users.findIndex((u) => u.email === email)

    return i
  }
  return -1
}
