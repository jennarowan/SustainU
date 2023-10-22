import { useState, ChangeEvent, FormEvent } from "react";
import Button from "../components/Button/Button";
import { Input, Stack } from "@chakra-ui/react";
import { useRouter } from "next/navigation";
import Link from "next/link";
interface FormData {
  email: string;
  password: string;
}

export default function signin() {
  const router = useRouter();
  const [formData, setFormData] = useState<FormData>({
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
    router.push("/home");
  };

  return (
    <div className="h-screen flex flex-col items-center justify-center pt-20 ">
      <div className="border border-solid border-black bg-gradient-1 flex flex-col items-center justify-center p-8 rounded-lg w-[35%] h-[55vh]">
        <h1 className="text-4xl font-bold mb-8 text-white mt-8 uppercase">
          Login
        </h1>
        <form onSubmit={handleSubmit}>
          <Stack spacing={6}>
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
           Don't have an account?{" "}
            <Link href="/signup" className="underline">
              Sign up!
            </Link>
          </h2>
        </form>
      </div>
    </div>
  );
}
