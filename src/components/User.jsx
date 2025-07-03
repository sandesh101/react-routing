import { useParams } from "react-router";

export default function User() {
  const { id } = useParams();
  return (
    <>
      <h1>This is user component for userid {id}</h1>
    </>
  );
}
