import { useState, ChangeEvent, FormEvent } from "react";
import Button from "../components/Button/Button";
import { Input, Stack } from "@chakra-ui/react";
import { useRouter } from "next/navigation";
import Link from "next/link";
interface FormData {
  name: string;
  email: string;
  password: string;
}

export default function signup() {
  const router = useRouter();
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    password: "",
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Form Data:", formData);
    console.log("Form Data:", JSON.stringify(formData));

    // Send form data to Flask backend for registration
    fetch("http://localhost:8080/api/register", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    }).then((response) => {
      console.log("response", response);
    });

    router.push("/survey");
  };

  return (
    <div className="h-screen flex flex-col items-center justify-center pt-20 bg-[#DCE2D6]">
      <div className="border border-solid border-black bg-gradient-1 flex flex-col items-center justify-center p-8 rounded-lg w-[35%] h-[55vh]">
        <h1 className="text-4xl font-bold mb-8 text-white  uppercase">
          Register
        </h1>
        <form onSubmit={handleSubmit}>
          <Stack spacing={6}>
            <Input
              placeholder="Name"
              size="lg"
              bg="white"
              name="name"
              value={formData.name}
              onChange={handleChange}
            />
            <Input
              placeholder="Email Address"
              size="lg"
              bg="white"
              name="email"
              value={formData.email}
              onChange={handleChange}
            />
            <Input
              placeholder="Password"
              size="lg"
              bg="white"
              name="password"
              type="password"
              value={formData.password}
              onChange={handleChange}
            />
          </Stack>
          <div className="flex flex-col sm:flex-row gap-5 sm:gap-20 mt-10">
            <Button text="Let's go!" colorClass="bg-[#024636]" />
          </div>
          <h2 className="mt-2 text-white">
            Already have an account?{" "}
            <Link href="/signin" className="underline">
              Sign in!
            </Link>
          </h2>
        </form>
      </div>
    </div>
  );
}
