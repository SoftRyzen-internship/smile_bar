# Next.js tailwind.css and Sanity CMS starter

## Design Layout

https://www.figma.com/file/zRJMcys4TZsXuvKqmzgjaR/SmileBar

## 📚 Best practices

> "Any fool can write code that a computer can understand. Good programmers
> write code that humans can understand." - Martin Fowler

- [ ] [Cheat sheet 1](https://my-js.org/docs/other/best-practices#%D1%88%D0%BF%D0%B0%D1%80%D0%B3%D0%B0%D0%BB%D0%BA%D0%B0-%D0%BF%D0%BE-react)
- [ ] [Cheat sheet 2](https://my-js.org/docs/other/react-philosophies)
- [ ] [Cheat sheet 3](https://alexkondov.com/tao-of-react/)

## 🥁 Getting started

1. Clone repo

```bash
https://github.com/SoftRyzen-internship/smile_bar.git
```

> if you haven't access to repo - write to me in telegram
> [@LanaSvetCat](https://t.me/LanaSvetCat)

1. Recommended for use **npm** - `npm i` or `npm install`
2. Create file `.env.local` in the project root using `.env.local.example` as a
   template
3. `npm run dev`
4. Open `http://localhost:3000`.

## Project structure

> Attention! The project structure is not final and can be changed at any time.

**💁‍♀️ Create a components folder for each module**

<details>

<summary><b>💡 Example:</b></summary>

<br/>

```
# ✅ Good

├── sections
    ├── Header
        ├── index.js
        ├── Header.jsx
    ├── Footer
        ├── index.js
        ├── Footer.jsx
```

</details>

---

**💁‍♀️ Reusable css classes should be placed in the `styles` folder .**

<details>

<summary><b>💡 Example:</b></summary>

<br/>

```css
/*globals.css */

@layer components {
  .your-class {
    @apply ...;
  }
}
```

</details>

---

**💁‍♀️ Description of object structure**

<details>

<summary><b>💡 Structure: </b></summary>

<br/>

```
|-- components -> folder with reusable components
  |-- NameComponent -> folders for each component
    |-- NameComponent.jsx -> main component
    |-- index.js -> file for re-export
|-- app -> pages and routing
|-- public -> static files
|-- styles -> global styles

<!-- You can create these folders already in work -->
|-- data -> data for the project ( from graphql, json, etc.)
|-- hooks -> custom users hooks
|-- utils -> helpers, functions, etc.
```

</details>

---

## 📚 Components API

Each component has its own API. You can find it in the component's folder. This
is a list of more common components and their API.

This is example of API for component `Title` and `Paragraph`

- ### Title
  Uses: for a section title

| Prop       | Default     | Description                |
| ---------- | ----------- | -------------------------- |
| `children` | `undefined` | required, any text content |

- ### Paragraph

| Prop        | Default     | Description                                   |
| ----------- | ----------- | --------------------------------------------- |
| `variant`   | `normal`    | `normal`, `large`, `small`                    |
| `children`  | `undefined` | required, any content                         |
| `className` | `undefined` | add custom or additional css class you'd need |

- ### Logo

| Prop        | Default                                 | Description                     |
| ----------- | --------------------------------------- | ------------------------------- |
| `className` | `w-[68px] h-12 xl:w-[90px] xl:h-[62px]` | add custom css class you'd need |

- ### Button

| Prop        | Default     | Description                                   |
| ----------- | ----------- | --------------------------------------------- |
| `label`     | `undefined` | required, any content                         |
| `onClick`   | `undefined` | required, add function                        |
| `disabled`  | `false`     | boolean value of button activity              |
| `className` | `*`         | add custom or additional css class you'd need |

\*`rounded-lg transition duration-300 ease-in  bg-btn hover:bg-btnHover  cursor-pointer py-3 px-6 text-base font-medium`

- ### Input

| Prop              | Default     | Description                                                                                           |
| ----------------- | ----------- | ----------------------------------------------------------------------------------------------------- |
| `name`            | `undefined` | required, unique(!!!) name for input element of component                                             |
| `labelText`       | `""`        | text for label                                                                                        |
| `placeholderText` | `""`        | text for placeholder                                                                                  |
| `type`            | `undefined` | requered, input type: one of 'name', 'phone', textarea'                                               |
| `setValue`        | `undefined` | requered, function with same name from useForm()(react-hook-form)                                     |
| `register`        | `undefined` | requered, function with same name from useForm()(react-hook-form)                                     |
| `errors`          | `undefined` | requered, error object with same name from useForm()(react-hook-form)                                 |
| `errorMessages`   | `{}`        | custom error message, object with optional string fields: required, minLength, maxLength and pattern. |
| `className`       | `*`         | add custom or additional css class for wrapper you'd need                                             |

\*`The component needs a <form> wrapper and some outputs from the hook useForm()  from the React-hook-form library`
