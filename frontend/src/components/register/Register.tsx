import { useAuth } from "@/context/auth-provider";
import { Button } from "../core-component/Button";
import { Cards } from "../core-component/Cards";
import { Input } from "../core-component/Input";
import { FormEvent, useState } from "react";

export const Register = () => {
  const { authToggle, onToggle, register } = useAuth();
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e: FormEvent<HTMLInputElement> & { target: { name: string; value: string } }) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    const user = {
      username: formData.username,
      email: formData.email,
      password: formData.password,
    };
    await register(user);
  };

  return (
    <Cards className="w-9/12 p-8 h-[530px] 2xl:w-6/12  flex flex-col">
      <Cards.Header className="py-4">
        <Cards.Title className="text-3xl">Register</Cards.Title>
        {/* <Cards.Stick className="my-2" /> */}
      </Cards.Header>
      <form className="flex flex-col h-full justify-between" onSubmit={handleSubmit}>
        <Cards.Content className="flex flex-col h-1/2 gap-3 px-3.5 py-1">
          <Input name="username" placeholder="Username" value={formData.username} onChange={handleChange} required />
          <Input
            name="email"
            placeholder="Email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <Input
            name="password"
            placeholder="Password"
            type="password"
            value={formData.password}
            onChange={handleChange}
            required
          />
          <Input
            name="confirmPassword"
            placeholder="Enter password again"
            type="password"
            value={formData.confirmPassword}
            onChange={handleChange}
            required
          />
          <div className="w-full flex flex-row justify-center ">
            <Button type="submit" className="w-full" variantType="primary">
              Register
            </Button>
          </div>
        </Cards.Content>
        <Cards.Footer className="w-full flex justify-center">
          <Button onClick={() => onToggle()} type="button" className="text-xs" variantType="link">
            {authToggle ? "Login" : "Register"}
          </Button>
        </Cards.Footer>
      </form>
    </Cards>
  );
};
