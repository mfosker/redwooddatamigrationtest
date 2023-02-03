// import type { PrismaClient } from '@prisma/client'

const asyncForEach = async (array, callback) => {
  for (let index = 0; index < array.length; index++) {
    await callback(array[index], index, array)
  }
}

export default async ({ db }) => {
  const users = await db.userExample.findMany()

  const example = 'pants'

  asyncForEach(users, async (user) => {
    const id = user.id
    await db.userExample.update({
      data: { example },
      where: { id },
    })
  })
}
