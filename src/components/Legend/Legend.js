import { Layout, Monitor, Settings, Smartphone } from "react-feather";

const icons = {
  app: Smartphone,
  web: Monitor,
  cms: Settings,
  "ui/ux": Layout,
};

const Legend = ({ id, ...rest }) => {
  const Component = icons[id];

  return <Component {...rest} />;
};

export default Legend;
