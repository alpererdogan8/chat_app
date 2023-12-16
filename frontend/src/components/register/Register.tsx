import { useAuth } from "@/context/auth-provider";
import { Button } from "../core-component/Button";
import { Cards } from "../core-component/Cards";
import { Input } from "../core-component/Input";

export const Register = () => {
  const { authToggle, onToggle } = useAuth();
  return (
    <Cards className="w-9/12 p-8 h-[530px] 2xl:w-6/12  flex flex-col">
      <Cards.Header className="py-4">
        <Cards.Title className="text-3xl">Register</Cards.Title>
        {/* <Cards.Stick className="my-2" /> */}
      </Cards.Header>
      <form className="flex flex-col h-full justify-between" action="">
        <Cards.Content className="flex flex-col h-1/2 gap-3 px-3.5 py-1">
          <Input placeholder="Username" required />
          <Input placeholder="Email" type="email" required />
          <Input placeholder="Password" required />
          <Input placeholder="Enter password again" required />
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
