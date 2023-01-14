import { useState } from "react";

const SocialLogin = ({
  onSubmit,
}: {
  onSubmit: (provider: string) => void;
}) => {
  const providers = ["google"];
  const [isRedirecting, setIsRedirecting] = useState(false);

  return (
    <>
      <div className="or-login-with">Or login with</div>
      {providers.map((provider) => {
        return (
          <div key={provider}>
            <button
              type="submit"
              className="social-btn"
              onClick={() => {
                setIsRedirecting(true);
                onSubmit(provider);
              }}
              key={provider}
              style={{ backgroundImage: `url(${provider}.png)` }}
            >
              {provider.replace(/^\w/, (c) => c.toUpperCase())}
            </button>
          </div>
        );
      })}
      {isRedirecting && <div className="redirecting">Redirecting...</div>}
    </>
  );
};

export default SocialLogin;
