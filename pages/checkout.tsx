import { RequireAuth } from "../components/RequireAuth";
import { useAuthenticator, Heading } from "@aws-amplify/ui-react";

export default function Checkout() {
  const { route } = useAuthenticator((context) => [context.route]);

  const message =
    route === "authenticated" ? "CHECKOUT" : "Loading ...";
  return (
    <RequireAuth mode="auto">
      <Heading level={1}>{message}</Heading>
    </RequireAuth>
  );
}
