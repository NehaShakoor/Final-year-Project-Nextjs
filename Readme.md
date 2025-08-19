# FYP MANAGEMENT PORTAL

# RUN IN SEQUENCE

`npm install`
`npm run db:up`
`npx prisma migrate dev --name init_auth`
`npm run db:seed`
`npm run dev`
