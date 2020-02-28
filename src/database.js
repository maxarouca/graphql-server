let id = 1

function nextId() {
  return id++
}

export const users = [
  {
    id: nextId(),
    name: 'Joao Silva',
    email: 'jsilva@gemail.com',
    age: 29,
    profile_id: 1,
    status: 'INACTIVE',
  },
  {
    id: nextId(),
    name: 'Jane Doe',
    email: 'janedoe@gemail.com',
    age: 26,
    profile_id: 1,
    status: 'BLOQUED',
  },
  {
    id: nextId(),
    name: 'Max Arouca',
    email: 'maximiler@gmail.com',
    age: 31,
    profile_id: 2,
    status: 'ACTIVE',
  },
]

export const profiles = [
  {
    id: 1,
    type: 'User',
  },
  {
    id: 2,
    type: 'Admin',
  },
]
