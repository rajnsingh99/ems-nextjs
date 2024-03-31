import BaseLayout from "../components/BaseLayout";
import ProfileView from "../components/ProfileView";
import { getSession } from "../utility/SessionUtils";
import { isObjectEmpty } from "../utility/Tools";

export default async function Profile() {
  const session = await getSession();
  console.log("Profile Page: Session - " + session.value);
  if (isObjectEmpty(session)) {
    redirect("/login");
  }

  return (
    <BaseLayout>
      <ProfileView empId={session.value} />
    </BaseLayout>
  );
}
