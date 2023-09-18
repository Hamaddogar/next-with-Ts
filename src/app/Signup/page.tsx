/*
  This example requires some changes to your config:
  
  ```
  // tailwind.config.js
  module.exports = {
    // ...
    plugins: [
      // ...
      require('@tailwindcss/forms'),
    ],
  }
  ```
*/
export default function Example() {
    return (
      <>
     
        <div className="flex min-h-full flex-1 flex-col justify-center py-12 sm:px-6 lg:px-8">
          <div className="sm:mx-auto sm:w-full sm:max-w-md">
            <img
              className="mx-auto h-10 w-auto"
              src="data:image/png;base64,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"
              alt="Your Company"
            />
            <h2 className="mt-6 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
              Signup to your account
            </h2>
          </div>
  
          <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-[480px]">
            <div className="bg-white px-6 py-12 shadow sm:rounded-lg sm:px-12">
              <form className="space-y-6" action="#" method="POST">
                <div>
                  <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                    Email address
                  </label>
                  <div className="mt-2">
                    <input
                      id="email"
                      name="email"
                      type="email"
                      autoComplete="email"
                      required
                      className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>
  
                <div>
                  <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">
                    Password
                  </label>
                  <div className="mt-2">
                    <input
                      id="password"
                      name="password"
                      type="password"
                      autoComplete="current-password"
                      required
                      className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>
  
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <input
                      id="remember-me"
                      name="remember-me"
                      type="checkbox"
                      className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                    />
                    <label htmlFor="remember-me" className="ml-3 block text-sm leading-6 text-gray-900">
                      Remember me
                    </label>
                  </div>
  
                
                </div>
  
                <div>
                  <button
                    type="submit"
                    className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                  >
                    Sign in
                  </button>
                </div>
              </form>
  
              <div>
                <div className="relative mt-10">
                  <div className="absolute inset-0 flex items-center" aria-hidden="true">
                    <div className="w-full border-t border-gray-200" />
                  </div>
                  <div className="relative flex justify-center text-sm font-medium leading-6">
                    <span className="bg-white px-6 text-gray-900">Or continue with</span>
                  </div>
                </div>
  
                <div className="mt-6 grid grid-cols-2 gap-4">
                  <a
                    href="#"
                    className="flex w-full items-center justify-center gap-3 rounded-md bg-[#1D9BF0] px-3 py-1.5 text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#1D9BF0]"
                  >
                    <svg className="h-5 w-5" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M6.29 18.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0020 3.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.073 4.073 0 01.8 7.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 010 16.407a11.616 11.616 0 006.29 1.84" />
                    </svg>
                    <span className="text-sm font-semibold leading-6">Twitter</span>
                  </a>
  
                  <a
                    href="#"
                    className="flex w-full items-center justify-center gap-3 rounded-md bg-[#24292F] px-3 py-1.5 text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#24292F]"
                  >
                    <svg className="h-5 w-5" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20">
                      <path
                        fillRule="evenodd"
                        d="M10 0C4.477 0 0 4.484 0 10.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0110 4.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.203 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.942.359.31.678.921.678 1.856 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0020 10.017C20 4.484 15.522 0 10 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span className="text-sm font-semibold leading-6">GitHub</span>
                  </a>
                </div>
              </div>
            </div>
  
            <p className="mt-10 text-center text-sm text-gray-500">
              Not a member?{' '}
              <a href="#" className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500">
                Start a 14 day free trial
              </a>
            </p>
          </div>
        </div>
      </>
    )
  }
  