import { Html, Text } from "@react-email/components";

interface WaitingListEmailProps {
  name: string;
  email: string;
  userType: string;
}

export default function WaitingListEmail({ name, email, userType }: WaitingListEmailProps) {
  return (
    <Html>
      <Text>Name: {name}</Text>
      <Text>Email: {email}</Text>
      <Text>User Type: {userType}</Text>
    </Html>
  );
}
