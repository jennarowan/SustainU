import { useState, ChangeEvent, FormEvent } from "react";
import Layout from "../components/Layout"; // Import the Layout component

interface FormData {
  email: string;
  password: string;
}

export default function Signup() {
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
  };

  return (
    <Layout>
      <div>
        <p>sign up</p>
      </div>
    </Layout>
  );
}
