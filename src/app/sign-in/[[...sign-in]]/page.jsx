import { SignIn } from "@clerk/nextjs";

export default function Page() {
  return (
    <div className="flex items-center justify-center p-14">
      <SignIn />
    </div>
  );
}
