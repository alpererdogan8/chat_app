import { useAuth } from "@/context/auth-provider";
import { Button } from "../core-component/Button";
import { Cards } from "../core-component/Cards";
import { Input } from "../core-component/Input";

export const Login = () => {
  const { authToggle, onToggle } = useAuth();
  return (
    <Cards className="w-9/12 p-8 h-[530px] 2xl:w-6/12  flex flex-col">
      <Cards.Header className="pt-4 pb-16">
        <Cards.Title className="text-3xl">Login</Cards.Title>
        {/* <Cards.Stick className="my-2" /> */}
      </Cards.Header>
      <form className="flex flex-col h-full justify-between" action="">
        <Cards.Content className="flex flex-col h-1/2 gap-2 px-3.5 py-1">
          <Input placeholder="Username or Email" />
          <Input placeholder="Password" />
          <div className="w-full flex flex-row justify-center ">
            <Button type="submit" className="w-full" variantType="primary">
              Login
            </Button>
          </div>
        </Cards.Content>
        <Cards.Footer className="w-full flex justify-center">
          <Button onClick={() => onToggle()} type="button" className="text-xs" variantType="link">
            {authToggle ? "Login" : "Register"}
          </Button>
          <Button disabled className="text-xs bg-none" type="submit" variantType="disableLink">
            Forgot Password
          </Button>
        </Cards.Footer>
      </form>
    </Cards>
  );
};
