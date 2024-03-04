# Atomic Design
- When developing an application using a component-based methodology, we divide the application into many components to achieve reusability. In atomic design we can break these component into five levels or 5 ways and these are as follows:- 

- Atoms: Atoms in atomic design are like the smallest building blocks in React. These can be simple components like buttons, inputs, or icons that represent basic HTML elements.

- Molecules: Molecules are combinations of atoms, and in React, these can be components that combine multiple atom-level components. For example, a search bar component that includes an input atom and a button atom would be a molecule.

- Organisms: Organisms are more complex components that are composed of molecules and/or atoms. In React, organisms can represent more significant parts of a UI, such as a header, sidebar, or card component that contains several molecules and atoms.

- Templates: Templates in atomic design are like the layout templates in React. These are higher-level components that define the overall structure of a page or a section of a page. Templates can include organisms, molecules, and atoms arranged in a specific layout.

- Pages: Pages in React are the final rendered components that correspond to specific routes or views in your application. Pages are instances of templates where actual content is provided, and they represent what the user sees and interacts with.

```jsx
// Atoms
const Button = ({ onClick, children }) => (
  <button onClick={onClick}>{children}</button>
);

const Input = ({ value, onChange }) => (
  <input type="text" value={value} onChange={onChange} />
);

// Molecules
const SearchBar = ({ value, onChange, onSearch }) => (
  <div>
    <Input value={value} onChange={onChange} />
    <Button onClick={onSearch}>Search</Button>
  </div>
);

// Organisms
const Header = () => (
  <header>
    <h1>My App</h1>
    <nav>
      <ul>
        <li>Home</li>
        <li>About</li>
        <li>Contact</li>
      </ul>
    </nav>
  </header>
);

// Templates
const MainTemplate = ({ children }) => (
  <div>
    <Header />
    <main>{children}</main>
  </div>
);

// Pages
const HomePage = () => (
  <MainTemplate>
    <h2>Welcome to My App!</h2>
    <p>Explore and enjoy...</p>
  </MainTemplate>
);

const App = () => <HomePage />;

export default App;
```

# 12 factor App
- The Twelve-Factor App is a set of principles for building web applications, which are now commonly known as Software-as-a-Service (SAAS) applications. 

The twelve factors are as follows:

1. Codebase: Use a single codebase per application, tracked in version control, with many deploys.

2. Dependencies: Explicitly declare and isolate dependencies.

3. Config: Store config in the environment.

4. Backing Services: Treat backing services as attached resources.

5. Build, Release, Run: Strictly separate build and run stages.

6. Processes: Execute the application as one or more stateless processes.

7. Port Binding: Export services via port binding.

8. Concurrency: Scale out via the process model.

9. Disposability: Maximize robustness with fast startup and graceful shutdown.

10. Development/Production Parity: Keep development, staging, and production as similar as possible.

11. Logs: Treat logs as event streams.

12. Admin Processes: Run admin/management tasks as one-off processes.