import bcrypt from 'bcryptjs'
import { PrismaClient, Role } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
  const password = 'password123'
  const hash = await bcrypt.hash(password, 10)

  const users = [
    { email: 'student1@university.edu', name: 'Student One', role: Role.student },
    { email: 'supervisor1@university.edu', name: 'Supervisor One', role: Role.supervisor },
    { email: 'manager1@university.edu', name: 'Manager One', role: Role.manager },
    { email: 'demo@university.edu', name: 'Demo Account', role: Role.manager }
  ]

  for (const u of users) {
    await prisma.user.upsert({
      where: { email: u.email },
      update: { passwordHash: hash }, // ensure password stays in sync
      create: { ...u, passwordHash: hash }
    })
  }

  console.log('Seed complete. Users:')
  users.forEach(u => console.log(` - ${u.email} / password123`))
}

main().catch(e => {
  console.error(e)
  process.exit(1)
}).finally(async () => {
  await prisma.$disconnect()
})
