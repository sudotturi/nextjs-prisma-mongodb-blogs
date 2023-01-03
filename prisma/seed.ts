import { PrismaClient, Prisma } from '@prisma/client'

const prisma = new PrismaClient()

const userData: Prisma.UserCreateInput[] = [
  {
    name: 'Chitturi Rahul',
    email: 'rahulchitturi@sudofolks.com',
    posts: {
      create: [
        {
          title: 'Checkout out new product',
          content: 'https://todo.sudofolks.com',
          published: true,
        },
      ],
    },
  },
  {
    name: 'Ejas',
    email: 'Ejas@sudofolks.com',
    posts: {
      create: [
        {
          title: 'Follow Sudo Folks on Twitter',
          content: 'https://www.twitter.com/sudofolks',
          published: true,
        },
      ],
    },
  },
  {
    name: 'Shravan',
    email: 'Shravan@sudofolks.com',
    posts: {
      create: [
        {
          title: 'Follow us on insta ',
          content: 'https://www.instagram.com/sudo_folks/',
          published: true,
        }
      ],
    },
  },
]

async function main() {
  console.log(`Start seeding ...`)
  for (const u of userData) {
    const user = await prisma.user.create({
      data: u,
    })
    console.log(`Created user with id: ${user.id}`)
  }
  console.log(`Seeding finished.`)
}

main()
  .catch((e) => {
    console.error(e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })
