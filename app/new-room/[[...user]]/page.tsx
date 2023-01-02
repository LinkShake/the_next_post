// export default function Page({
//   params,
//   searchParams,
// }: {
//   params: any;
//   searchParams: { user: string };
// }) {
//   const { user } = searchParams;

//   return <div>{user}</div>;
// }

import { RoomForm } from "components/RoomForm/RoomForm";

export default function Page({
  params,
  searchParams,
}: {
  params: any;
  searchParams: { user: string };
}) {
  return <RoomForm />;
}
