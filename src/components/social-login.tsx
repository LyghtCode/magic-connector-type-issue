import { useState } from 'react';

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
const SocialLogin = ({ onSubmit }) => {
  const providers = ['google'];
  const [isRedirecting, setIsRedirecting] = useState(false);

  return (
    <>
      <div className='or-login-with'>Or login with</div>
      {providers.map((provider) => {
        return (
          <div key={provider}>
            <button
              type='submit'
              className='social-btn'
              onClick={() => {
                setIsRedirecting(true);
                onSubmit(provider);
              }}
              key={provider}
              style={{ backgroundImage: `url(${provider}.png)` }}
            >
              {/* turns "google" to "Google" */}
              {provider.replace(/^\w/, (c) => c.toUpperCase())}
            </button>
          </div>
        );
      })}
      {isRedirecting && <div className='redirecting'>Redirecting...</div>}
    </>
  );
};

export default SocialLogin;
