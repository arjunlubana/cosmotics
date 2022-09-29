// components/Login.js
import { useEffect } from "react";

import { Authenticator, useAuthenticator, View } from "@aws-amplify/ui-react";
import "@aws-amplify/ui-react/styles.css";
import { useRouter } from "next/router";

export default function Login() {
  const router = useRouter();
  const { route } = useAuthenticator((context) => [context.route]);
  const location = router.asPath;
  useEffect(() => {
    if (route === "authenticated") {
      router.push(location);
    }
  }, [route]);
  return (
    <View className="auth-wrapper">
      <Authenticator>
      </Authenticator>
    </View>
  );
}
