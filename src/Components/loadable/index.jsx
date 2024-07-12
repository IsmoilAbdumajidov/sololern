import { Suspense } from "react";
const Loadable = (Component) => {
  const WrappedComponent = (props) => (
    <Suspense >
      <Component {...props} />
    </Suspense>
  );

  // Set display name for the functional component
  WrappedComponent.displayName = `Loadable(${
    Component.displayName || Component.name || "Component"
  })`;

  return WrappedComponent;
};
export default Loadable;
