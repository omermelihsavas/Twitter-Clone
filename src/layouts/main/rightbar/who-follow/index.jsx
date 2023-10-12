import Button from "~/components/button";
import RightbarSection from "~/components/rightbar-section";
import UserCard from "~/components/user-card";
import { whoFollowUsers } from "~/mock";
import { useCurrentAccount } from "~/store/auth/hooks";

export default function WhoFollow() {
    const account = useCurrentAccount();

    return (
        <RightbarSection
            title="Kimi takip etmeli"
            more={`/connect_people?user_id=${account.id}`}
        >
            {whoFollowUsers.map(user => <UserCard user={user} key={user.id} />)}
        </RightbarSection>
    )
}
