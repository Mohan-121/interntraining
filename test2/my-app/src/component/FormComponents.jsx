import { useForm } from "react-hook-form";

function FormComponents() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: { name: "", email: "", age: "", password: "" },
  });

  const onSubmit = (data) => console.log(data);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <label htmlFor="name">Name</label>
      <input
        id="name"
        type="text"
        aria-invalid={errors.name ? "true" : "false"}
        {...register("name", {
          required: "Name is required",
          minLength: { value: 3, message: "Name must be at least 3 characters" },
        })}
      /><br/>
      {errors.name && <p role="alert">{errors.name.message}</p>}

      <label htmlFor="email">Email</label>
      <input
        id="email"
        type="email"
        aria-invalid={errors.email ? "true" : "false"}
        {...register("email", {
          required: "Email is required",
          pattern: {
            value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
            message: "Enter a valid email address",
          },
        })}
      /><br/>
      {errors.email && <p role="alert">{errors.email.message}</p>}

      <label htmlFor="age">Age</label>
      <input
        id="age"
        type="number"
        aria-invalid={errors.age ? "true" : "false"}
        {...register("age", {
          required: "Age is required",
          valueAsNumber: true,
          validate: (value) => Number.isFinite(value) || "Age must be a number",
        })}
      /><br/>
      {errors.age && <p role="alert">{errors.age.message}</p>}

      <label htmlFor="password">Password</label>
      <input
        id="password"
        type="password"
        aria-invalid={errors.password ? "true" : "false"}
        {...register("password", {
          required: "Password is required",
          minLength: {
            value: 8,
            message: "Password must be at least 8 characters",
          },
        })}
      /><br/>
      {errors.password && <p role="alert">{errors.password.message}</p>}

      <button type="submit">Submit</button>
    </form>
  );
}

export default FormComponents;