<p align="center">
  <a href="https://chillflix-phot.vercel.app/">
    <img width="270" src="./public/images/logo.png">
  </a>
</p>
<p align="center">An anime recommendation website with a theme inspired by a popular streaming platform. <a href="https://chillflix-phot.vercel.app/">Try it out now!</a></p>


### Table of Contents

1. [Inspiration](#inspiration)
2. [What this does?](#what-this-does)
3. [Features](#features)
4. [Built with](#built-with)
5. [Data Source](#data-source)
6. [Technical Choices](#technical-choices)
7. [Case Study](#case-study)
8. [Further Improvements](#further-improvements)
9. [Author](#author)
10. [Deployment](#deployment)
11. [Contributing](#contributing)


## Inspiration

I decided to undertake this project after completing the first projects of my internship. I was excited to bring designs to life using Next.js and Tailwind CSS, as I find working with this CSS library immensely enjoyable.

I searched for an impressive website design to use for this project and settled on a popular streaming platform (if you know, you know). After doing my best to replicate the landing page and login/register flow, I implemented server-side authentication. However, I ultimately didn't deploy it on the cloud, so I refocused the project primarily on frontend development.

Having left this project on hold since January, I recently decided to wrap things up after discovering a cool way to implement infinite scrolling and wanting to integrate this feature.

Since the server is not hosted anywhere, the register flow will not be working. However, you can still log in as guest to see the home page after logged in.

## What this does?

Users can log in as guests and access a list of anime titles. They will be able to filter and search for the ones they like.

## Features

- Registering flow (server is not available)
- Normal/guest login
- Multiple users
- Dynamic routes for each anime
- Fetching anime by genres
- Searching anime by name

## Built with

- [Next.js 14](https://nextjs.org/) - Development environment
- [Tailwind CSS](https://tailwindcss.com/) - CSS framework
- [Next UI](https://nextui.org/) - Components library for User Interface
- [Redux Toolkit](https://redux-toolkit.js.org/) - State management tool
- [Zod](https://zod.dev/) - Form validation

## Data Source

- [Shikimori API](https://shikimori.one/api/doc/1.0/animes) - Fetching anime data

## Technical Choices

At first, I tried my best to make every flow as close as possible to the actual site. And it was so fun using [zod](https://zod.dev/) to validate forms. It is debatable for me whether implementing by using `useState` hook would provide a better performance when validating form from a third-library. And I use [Next.js](https://nextjs.org/) and [Tailwind CSS](https://tailwindcss.com/) because I want to master them (the place I worked use these stacks).

[Redux](https://redux-toolkit.js.org/) became a good friend of mine, after using it once, I'm not scared of it anymore as it is managable for a small to middle-size project. All slices are stored in the `/app/features` folder. I will try to use a newer state management tool named [Zustand](https://zustand-demo.pmnd.rs/) as I heard that it's even more convinient to use. So that I can compare them myself.

For infinite scroll; thanks to this [repository](https://github.com/adrianhajdin/anime_vault) I found, to use [react-intersection-observer](https://www.npmjs.com/package/react-intersection-observer) to easily know when a referenced object is in view.

The API I use to fetch animes' data is [Shikimori API](https://shikimori.one/api/doc/1.0/animes), which is optional. There are multiple more interesting APIs to pick like [TMDB](https://www.themoviedb.org/). But the infinite scroll I saw uses this API, so I pick this API and implemented in such ways to suit this project. Refer to [here](https://shikimori.one/api/doc/1.0/animes/index) on how the API works.

## Case Study

I faced one interesting error while developing a plan selection with `useContext` hook. I got an error with a message of "Warning: Prop 'className' did not match. Server: ...", it happened when the server renders the component but the generated CSS is different from when it is rendered on the client side. Refer to `app/signup/components/PlanTable` folder for more context.

I ended up importing the component dynamically as shown below:

```
@signup/planform/page.tsx

const PlanTable = dynamic(() => import("../components/PlanTable"), {
  ssr: false,
  loading: () => (
    <div className="flex min-h-[80vh] w-full items-start justify-center p-10">
      <Spinner size="lg" />
    </div>
  ),
});
```

This prevents the component to be compiled from the server side. Since it can be slow for the component to be rendered on the client side, I put `loading` to let the user knows something is loading for better UX.

This issue reminds me to step back and try to understand the concept of how CSR (Client Side Rendering), SSR (Server Side Rendering), and hydration work. This [blog](https://javascript.plainenglish.io/what-are-hydration-csr-and-ssr-in-react-and-next-js-6520f438bd69) explains it pretty well.

## Further Improvements

- Add plan into `userSlice` to allow user to change plan and make plan relevant as a feature.
- Allow users to change their avatar by adding extra context to `userSlice`.
- Finishing the server. Refer to old server repository [here](https://github.com/photkosee/chillflix-server).
- Allow users to add favorite animes to their lists by adding extra context to `userSlice`.
- <s>Implement search feature, you can query the search phase to filter animes to the API (I might implement this myself when I have time).</s> Completed
- <s>Implement dynamic routes/pages for each anime when users click on a card. The [Shikimori API](https://shikimori.one/api/doc/1.0/animes/show) is sufficient to do so.</s> Completed

## Author

Phot Koseekrainiramon
- [LinkedIn](https://www.linkedin.com/in/phot-kosee/)
- [GitHub](https://github.com/photkosee)

## Deployment

This project is deployed to Vercel:

[https://chillflix-phot.vercel.app/](https://chillflix-phot.vercel.app/)

## Contributing

Pull requests are welcome. Please open an issue first to discuss what'd you like to improve. All ideas from the [Further improvement](#futher-improvement) section are ready to be implemented if you are interested to contribute.

### Log

- 29/03/2024: Implemented dynamic routes for each anime
- 02/04/2024: Implemented seach feature with debounce custom hook
