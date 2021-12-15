import { Routes as RoutesContainer, Route } from "react-router";
import Home from "screens/home";
import NotFound from "screens/notFound";

export default function Routes(props) {
  return (
    <RoutesContainer {...props}>
      <Route path="/" element={<Home />} />
      <Route path="*" element={<NotFound />} />
    </RoutesContainer>
  );
}
