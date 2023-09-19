# NextJS Training Assignment 2
### BY Muhammad Muneeb
---
### Covered concepts
- Basic React - Making shared components and building a few pages. **Shared components like ItemsOverview**
- Styling and layout. **Layouts used to place header and footer**
- Adding some UI library such as Tailwind and utilising it to build clean, user-friendly pages quickly. **Used Tailwind**
- Also add individual layouts to your pages to understand the concept of HOCs and layouts better. **Individual layouts for Items pages**
- App Routing and navigation - Setting up routes in the application to include the following scenarios.
    - Basic routing, e.g. "/about". **/about route exists**
    - Nested routing, e.g. "restaurant/details". **`/items/[slug]` exists**
    - Dynamic routing, e.g. "restaurant/restaurant_id/details". **`/search` exists**
    - Fetching data from server on multiple pages. **Fetched items through prisma client on multiple pages. Including pre-generating paths (Server side rendering) for `/items/[slug]`**
    - You can use any ORM and any cloud provider. I am using Prisma ORM and using Supabase as the cloud provider. **Used Prisma with Vercel PostgreSQL storage**
    - Add loading and error states to your project to provide a better user experience. **Loading states added. Added delays for simulation purposes**
    - Build API routes for your application.
    - Bonus points for following the Next/Vercel documentation and deploying your application to the cloud. **Deployed on Vercel**