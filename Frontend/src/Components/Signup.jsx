import { useForm } from "react-hook-form";
import { createUserWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import { auth, googleProvider, githubProvider } from "./Auth0";

const Signup = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();

  // 🔹 Email & Password Signup Handler
  const onSubmit = async (data) => {
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, data.email, data.password);
      console.log("User Signed Up:", userCredential.user);
    } catch (error) {
      console.error("Signup Error:", error.message);
    }
  };

  // 🔹 Google Signup Handler
  const handleGoogleSignup = async () => {
    try {
      const result = await signInWithPopup(auth, googleProvider);
      console.log("Google User Signed Up:", result.user);
    } catch (error) {
      console.error("Google Signup Error:", error);
    }
  };

  // 🔹 GitHub Signup Handler
  const handleGithubSignup = async () => {
    try {
      const result = await signInWithPopup(auth, githubProvider);
      console.log("GitHub User Signed Up:", result.user);
    } catch (error) {
      console.error("GitHub Signup Error:", error);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg w-96">
        <h2 className="text-2xl font-bold text-center mb-6">Sign Up</h2>

        {/* 🔹 Email & Password Signup Form */}
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <div>
            <input
              type="text"
              placeholder="Full Name"
              {...register("name", { required: "Name is required" })}
              className="w-full p-2 border rounded focus:ring-2 focus:ring-blue-400"
            />
            {errors.name && <p className="text-red-500 text-sm">{errors.name.message}</p>}
          </div>

          <div>
            <input
              type="email"
              placeholder="Email"
              {...register("email", { required: "Email is required" })}
              className="w-full p-2 border rounded focus:ring-2 focus:ring-blue-400"
            />
            {errors.email && <p className="text-red-500 text-sm">{errors.email.message}</p>}
          </div>

          <div>
            <input
              type="password"
              placeholder="Password"
              {...register("password", { required: "Password is required", minLength: 6 })}
              className="w-full p-2 border rounded focus:ring-2 focus:ring-blue-400"
            />
            {errors.password && <p className="text-red-500 text-sm">{errors.password.message}</p>}
          </div>

          <button type="submit" className="bg-blue-500 text-white p-2 rounded w-full hover:bg-blue-600 transition">
            Sign Up
          </button>
        </form>

        {/* 🔹 Divider */}
        <div className="flex items-center my-4">
          <hr className="flex-grow border-gray-300" />
          <span className="px-2 text-gray-500">OR</span>
          <hr className="flex-grow border-gray-300" />
        </div>

        {/* 🔹 Social Signup with Icons */}
        <button 
          onClick={handleGoogleSignup} 
          className="flex items-center justify-center bg-red-500 text-white p-2 rounded w-full mb-2 hover:bg-red-600 transition"
        >
          <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/512px-Google_%22G%22_Logo.svg.png" 
               alt="Google Logo" className="w-5 h-5 mr-2"/>
          Sign Up with Google
        </button>

        <button 
          onClick={handleGithubSignup} 
          className="flex items-center justify-center bg-gray-800 text-white p-2 rounded w-full hover:bg-gray-900 transition"
        >
          <img src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png" 
               alt="GitHub Logo" className="w-5 h-5 mr-2"/>
          Sign Up with GitHub
        </button>

        {/* 🔹 Login Link */}
        <p className="text-center text-sm text-gray-600 mt-4">
          Already have an account? <a href="/login" className="text-blue-500">Login</a>
        </p>
      </div>
    </div>
  );
};

export default Signup;
