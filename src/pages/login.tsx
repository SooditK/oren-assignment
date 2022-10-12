import { MouseEvent, useState } from "react";
import { BiShow, BiHide } from "react-icons/bi";
import toast from "react-hot-toast";
import { useRouter } from "next/router";
import { signIn } from "next-auth/react";

function validEmail(email: string) {
  const re =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}

const Login = () => {
  const [data, setData] = useState({
    email: "",
    password: "",
  });
  const [showPassword, setShowPassword] = useState(false);
  const router = useRouter();

  async function onSubmit(
    e: React.SyntheticEvent,
    data: { email: string; password: string }
  ) {
    e.preventDefault();
    // check if the email and password fields are empty
    if (!data.email || !data.password) {
      toast.error("Please fill in all fields");
    } else {
      if (!validEmail(data.email)) {
        toast.error("Please enter a valid email");
      } else {
        // check if the password is less than 6 characters
        if (data.password.length < 6) {
          toast.error("Password must be at least 6 characters");
        } else {
          toast.loading("Logging in...");
          const result = await signIn("credentials", {
            redirect: false,
            email: data.email,
            password: data.password,
          });
          if (result?.error) {
            toast.dismiss();
            toast.error(result.error);
          } else if (result?.ok) {
            toast.dismiss();
            toast.success("Logged in successfully");
            router.push("/");
          } else {
            toast.dismiss();
            toast.error("Something went wrong");
          }
        }
      }
    }
  }

  return (
    <>
      <div className="flex min-h-screen">
        <div className="flex flex-1 flex-col justify-center py-12 px-4 sm:px-6 lg:flex-none lg:px-20 xl:px-24">
          <div className="mx-auto w-full max-w-sm lg:w-96">
            <div>
              <h2 className="mt-6 text-3xl font-extrabold text-gray-900">
                Sign in to your account
              </h2>
              <p className="mt-2 text-sm text-gray-600">
                Or{" "}
                <a
                  href="#"
                  className="font-medium text-indigo-600 hover:text-indigo-500"
                >
                  Register
                </a>
              </p>
            </div>

            <div className="mt-8">
              <div className="mt-6">
                <form action="#" method="POST" className="space-y-6">
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Email address
                    </label>
                    <div className="mt-1">
                      <input
                        id="email"
                        type="email"
                        required
                        value={data.email}
                        onChange={(e) =>
                          setData({ ...data, email: e.target.value })
                        }
                        name="email"
                        className="block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                      />
                    </div>
                  </div>

                  <div className="space-y-1">
                    <label
                      htmlFor="password"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Password
                    </label>
                    <div className="relative mt-1 rounded-md shadow-sm">
                      <input
                        id="password"
                        type={showPassword ? "text" : "password"}
                        value={data.password}
                        onChange={(e) =>
                          setData({ ...data, password: e.target.value })
                        }
                        required
                        name="password"
                        className="block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                      />

                      <button
                        type="button"
                        className="absolute right-0 top-0 mt-2 mr-4"
                        onClick={() => setShowPassword(!showPassword)}
                      >
                        {showPassword ? (
                          <BiHide className="h-5 w-5 text-gray-400" />
                        ) : (
                          <BiShow className="h-5 w-5 text-gray-400" />
                        )}
                      </button>
                    </div>
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <input
                        id="remember-me"
                        name="remember-me"
                        type="checkbox"
                        className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                      />
                      <label
                        htmlFor="remember-me"
                        className="ml-2 block text-sm text-gray-900"
                      >
                        Remember me
                      </label>
                    </div>

                    <div className="text-sm">
                      <a
                        onClick={() =>
                          toast.error(
                            "This Functionality is not yet implemented"
                          )
                        }
                        className="font-medium text-indigo-600 hover:cursor-pointer hover:text-indigo-500"
                      >
                        Forgot your password?
                      </a>
                    </div>
                  </div>

                  <div>
                    <button
                      type="submit"
                      onClick={(e) => {
                        console.log(data);
                        onSubmit(e, data);
                      }}
                      className="flex w-full justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                    >
                      Sign in
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
        <div className="relative hidden w-0 flex-1 lg:block">
          <img
            className="absolute inset-0 h-full w-full object-cover"
            src="https://source.unsplash.com/random/1920x1080/?nature,water"
            alt=""
          />
        </div>
      </div>
    </>
  );
};

export default Login;
