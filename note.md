# setup

- https://www.youtube.com/watch?v=Big_aFLmekI&t=518s
  npx create-next-app@latest my-app --typescript --tailwind --eslint

npx shadcn-ui@latest init

# install components from shadcn-ui [all file will be in components folder]

button: npx shadcn-ui@latest add button

- variant: type of button

# Folders setup

install next.nav extension

# Authentication with clerk

- https://clerk.com/docs/quickstarts/nextjs

- import clerk in root layout
- add middleware.ts in root folder

- layout.tsx in (auth folder)

(dashboard folder is protected must be logged in auth folder to access)

# layout for dashboard

- layout.tsx in (dashboard folder)
- Create some components in dashboard folder

  npx shadcn-ui@latest add sheet

# Dynamic Layout

# Course Creation UI

- CoursesPage [dashboard/routes/teacher/courses/page.tsx]
- create course [dashboard/routes/teacher/create/page.tsx]

- npx shadcn-ui@latest add form
- npx shadcn-ui@latest add input
- npm i axios

- create From

- npm i react-hot-toast => create toast-provider in global
  component => add on app root layout
