export const createUser = async (
  { name, email, password },
  { models: { userModel } }
) => {
  const user = await userModel.create({ name, email, password })
  return user
}

export default createUser
